import * as studenController from '../controllers/studentController.js';
import express from "express";

 const studentRoute = express.Router();

 studentRoute.get('/', studenController.fetchAllStudents);
 
 studentRoute.post('/', studenController.createStudent);

 studentRoute.put('/:id', studenController.editStudent);

 studentRoute.delete('/:id', studenController.deleteStudent);
 
 export default studentRoute;