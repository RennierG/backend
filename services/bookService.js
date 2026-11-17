import * as bookModel from '../models/bookModels.js';

export const fetchAllBook = async() => {
    return await bookModel.fetch();
};

export const createBook = async(book) => {
    if (!book.name || !book.author) {
        throw new Error("Name and Author is required");
    }
    return await bookModel.insert(book);
};

export const updateBook = async(book) => {
    if (!book.name || !book.author) {
        throw new Error("Name and Author is required");
    }
    return await bookModel.update(book);
};

export const deleteBook = async(id) => {
    const affected = await bookModel.remove(id);
    if (affected === 0) {
        throw new Error("Book does not exist!");
    }
    return affected;
};