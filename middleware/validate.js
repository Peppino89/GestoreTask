import joi from "joi";

export const validateTask = (req,res,next)=>{
    const schema = joi.object({
        title: joi.string().min(3).required(),
        completed: joi.boolean(),
    });

        const {error,value} = schema.validate(req.body,{abortEarly: false});
    if(error){
       const details = error.details.map(d => d.message);
       return res.status(400).json({
           error:'INVALID_INPUT',
           message:'Dati non validi',
           details,
       });
    }

    req.body = value  // Sovrascrivo req.body con la versione "pulita" (senza campi extra)
    next();
}