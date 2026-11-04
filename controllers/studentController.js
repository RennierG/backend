import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) =>{
    const student = await studentService.fetchAllStudent();
    res.status(200).json(student);
}

export const createStudent = async (req, res) =>{
    console.log(req);
    const {name, course} = req.body;
    const student = {name, course};
    
    try {
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
        
        }catch(e){
            console.log(e);
            res.status(500).json({
                error: "Internal Server Error"});
            
        }
      
}


export const editStudent = async (req, res ) => {
    const{ name, course} =req.body;
    const {id} = req.params;
    const student = {id: parseInt(id), name , course};

    try{
        const updateStudent = await studentService.update(student);
        res.status(200).json({
            success: true,
            message: updateStudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

export const deleteStudent = async (req, res) =>{
    const {id} = req.params;
    try {

        const deleteStudent = await studentService.deleteStudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deleteStudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
 }

