import * as bookModel from '../models/bookModels.js';

export const fetchAllBooks = async() =>{
    const book = await bookModel.fetch();
    return book;
}

export const createBook = async(books) => {
    const bookId  = await studentModel.insert(book);
    
    return bookId;
}
export const update = async (book) => {
    const [result] = await pool.query ("UPDATE book SET name= ?, author= ? WHERE id= ?", [book.name, book.author, book.id])
}

export const deleteBook = async (id) => {
    const deleteBook = await bookModel.remove(id);
    return deleteBook;
}