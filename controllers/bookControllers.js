import * as bookService from '../services/bookServices';

export const fetchAllBooks = async (req, res) =>{
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
}