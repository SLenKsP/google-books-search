const axios = require(`axios`);
const db = require(`../models`);

module.exports = {
    findAll: function (req, res) {
        const {
            query: params
        } = req;

        axios.get(`https://www.googleapis.com/books/v1/volumes`, {
                params
            })
            .then(results =>
                // console.log(results.data.items[0].volumeInfo);
                results.data.items.filter(result =>
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(apiResults =>
                db.Book.find()
                .then(dbResults =>
                    apiResults.filter(apiItem =>
                        dbResults.every(dbItem =>
                            dbItem.id.toString() !== apiItem.id
                        )
                    )
                )
            )
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
};