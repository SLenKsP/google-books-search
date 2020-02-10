const path = require(`path`);
const router = require(`express`).Router();
const booksRoute = require(`./books`);
const googleRoute = require(`./google`);

router.use(`/books`, booksRoute);

router.use(`/google`, googleRoute);

router.use(
    function (req, res) {
        res.sendFile(path.join(__dirname, `../../client/public/index.html`));
    }
);

module.exports = router;