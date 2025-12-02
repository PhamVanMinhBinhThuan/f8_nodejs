class NewsController {
    // [GET] / news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug --> slua la bien dong nhu id
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();
