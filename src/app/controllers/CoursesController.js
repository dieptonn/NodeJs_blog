const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('courses/show', {
                    courses: mongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();

// const newController = require('./NewController');
