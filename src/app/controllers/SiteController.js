class SiteController {
    // [GET] /
    index(req, res) {
        res.render('Home');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
