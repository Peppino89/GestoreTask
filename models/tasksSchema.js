import mongoose from 'mongoose';


const TaskSchema = new mongoose.Schema({

    title: { type:String ,required:true, minlength:3},
    completed: {type:Boolean, default: false},
}, { timestamps: true });

export default mongoose.model('tasks', TaskSchema);