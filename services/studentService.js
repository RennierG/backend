import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async() =>{
    const student = await studentModel.fetch();
    return student;
}

export const createStudent = async(student) => {
    const studentId  = await studentModel.insert(student);
    
    return studentId;
}
export const update = async (student) => {
    const result = await studentModel.update(student);
    return result;
}

export const deleteStudent = async (id) => {
    const deleteStudent = await studentModel.remove(id);
    return deleteStudent;
}