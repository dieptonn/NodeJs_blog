const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored_courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();

// const newController = require('./NewController');
