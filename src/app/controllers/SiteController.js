const Course = require('../models/Courses');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        try {
            // Cách viết mới: Dùng await thay vì callback
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            // Báo lỗi nếu có
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
