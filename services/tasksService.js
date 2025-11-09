import TasksSchema from "../models/tasksSchema.js";

export const createTask= async(data)=>{
    return await TasksSchema.create(data);
}
export const getAll = async()=>{
    return await TasksSchema.find();
}

export const updateTask = async (id, data) => {
    //console.log('🟢 [updateTask] ID ricevuto:', id);
    //console.log('📦 [updateTask] Dati ricevuti:', data);

    const task = await TasksSchema.findByIdAndUpdate(id, data, { new: true });
    //console.log('🔍 [updateTask] Risultato query:', task);

    if (!task) throw new Error('Task non trovato');
    return task;
};
export const deleteTask= async(id)=>{
    const task = await TasksSchema.findByIdAndDelete(id);
    if(!task) throw  new Error('Task non trovato');
    return task;
}