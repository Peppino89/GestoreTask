import express from 'express';
import * as tasksService from '../services/tasksService.js'
import {validateTask} from '../middleware/validate.js';


const router = express.Router();

//Creazione del post
router.post('/tasks', validateTask,async (req, res,next) => {
    try {
        const task = await tasksService.createTask(req.body);
        res.status(201).json(task);
    }catch(err){
        next(err);
    }
});

//Ottengo tutti i task
router.get('/tasks', validateTask,async (req, res,next) => {
    try{
     const tasks = await tasksService.getAll();
     res.status(200).json(tasks);
    }catch(err){
        next(err);
    }
});

//Aggiorno un task
router.patch('/tasks/:taskId', validateTask, async (req, res, next) => {
    try {
        const task = await tasksService.updateTask(req.params.taskId, req.body);
        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
});


router.delete('/tasks/:taskId',async (req, res,next) => {

    try{
        const task = await tasksService.deleteTask(req.params.taskId);
        res.status(200).json({message: 'Task eliminata',task});
    }catch(err){
        next(err);
    }
});

export default router;