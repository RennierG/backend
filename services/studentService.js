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
    const [result] = await pool.query ("UPDATE book SET name= ?, course= ? WHERE id= ?", [book.name, book.author, book.id])
}

export const deleteStudent = async (id) => {
    const deleteStudent = await studentModel.remove(id);
    return deleteStudent;
}