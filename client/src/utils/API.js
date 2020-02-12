import axios from "axios";

export default {
    getBooks: function (query) {
        return axios.get(`/api/google/`, {
            params: {
                q: `${ query }`
            }
        });
    },
    getSavedBooks: function () {
        return axios.get(`/api/books/`)
    },
    deleteBook: function (id) {
        return axios.delete(`/api/books/${id}`)
    },
    saveABook: function (data) {
        return axios.post(`/api/books/`, data)
    }
};
