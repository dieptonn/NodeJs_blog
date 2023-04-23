const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
// const { all } = require('../../routes/me');

const Course = new Schema(
    {
        _id: { type: Number } ,
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        videoId: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
// module.exports = mongoose.model('Course', Course,'courses');
