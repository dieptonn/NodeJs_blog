const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //         return;
        //     }
        //     res.status(400).json({ error: 'ERROR!' });
        // });

        Course.find({})
            .then((courses) => {
                // res.json(courses);
                // courses = courses.map((courses) => courses.toObject());
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // .catch((err) => {
        //     res.status(400).json({ error: 'ERROR..!!!' });
        // });

        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// const newController = require('./NewController');
