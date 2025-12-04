const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const CourseSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Custom query helpers
CourseSchema.query.sortable = function (req) {
    if ('_sort' in req.query) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        });
    }

    return this;
};

// Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseSchema);
