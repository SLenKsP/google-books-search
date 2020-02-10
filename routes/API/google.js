const router = require(`express`).Router();
const GoogleCotroller = require(`../../controllers/google`);

router.route(`/`)
    .get(GoogleCotroller.findAll);

module.exports = router;