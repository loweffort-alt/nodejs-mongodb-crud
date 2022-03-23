import { Router } from 'express';
import Task from '../models/Task';

//Importing controllers
import { renderTasks, createTasks, renderTaskEdit, updateTask, deleteTask, taskToggleDone } from '../controllers/tasks.controllers';

const router = Router();

router.get('/', renderTasks)

router.post('/tasks/add', createTasks);

//Edit
router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', updateTask)

//Delete
router.get('/tasks/:id/delete', deleteTask);

//Toogle: Done
router.get('/tasks/:id/toggleDone', taskToggleDone)

export default router;
