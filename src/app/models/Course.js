const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        videoId: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Course.deleteCourseById = async function (courseId) {
    try {
        const result = await this.deleteOne({ _id: courseId }).exec();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = mongoose.model('Course', Course);
// module.exports = mongoose.model('Course', Course,'courses');
