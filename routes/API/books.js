const router = require(`express`).Router();
const BooksController = require(`../../controllers/books`);

router.route(`/`)
    .get(BooksController.findAll)
    .post(BooksController.create)

router.route(`/:id`)
    .get(BooksController.findById)
    .put(BooksController.update)
    .delete(BooksController.delete)

module.exports = router;