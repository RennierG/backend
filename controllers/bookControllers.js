import * as bookService from '../services/bookService.js';

export const fetchAllBook = async (req, res) =>{
    const book = await bookService.fetchAllBook();
    res.status(200).json(book);
}

export const createBook = async (req, res) =>{
    console.log(req);
    const {name, author} = req.body;
    const book = {name, author};
    
    try {
        const bookId = await bookService.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
        
        }catch(e){
            console.log(e);
            res.status(500).json({
                error: "Internal Server Error"});
            
        }
      
}

export const editBook = async (req, res ) => {
    const{ name, author} =req.body;
    const {id} = req.params;
    const book = {id: parseInt(id), name , author};

    try{
        const updateBook = await bookService.updateBook(book);
        resstatus(200).json({
            success: true,
            message: updateBook
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

 export const deleteBook = async (req, res) =>{
    const {id} = req.params;
    try {

        const deleteBook = await bookService.deleteBook(parseInt(id));
        res.status(200).json({
            success: true,
            message: deleteBook
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
 }


 

 


