const path = require(`path`);
const router = require(`express`).Router();
const apiRoute = require(`./API`);

router.use(`/api`, apiRoute);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, `../client/public/index.html`));
});

module.exports = router;