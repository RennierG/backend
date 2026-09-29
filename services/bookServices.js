import * as bookModel from '../models/bookModels';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetch();
    return books;
}