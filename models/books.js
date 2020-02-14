const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Books = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url_link: {
        type: String,
        required: true
    }
});

const Book = mongoose.model(`books_tb`, Books);

module.exports = Book;