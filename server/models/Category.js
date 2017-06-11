import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const validator = require('validator');

const CategorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a category name'
    },
    slug: String,
    created: {
        type: Date,
        default: Date.now
    },
    wikiUrl: {
        type: String,
        unique: true,
        trim: true,
        validate: [
            validator.isURL, 'Invalid URL address'
        ],
        required: 'Please supply a wiki URL'
    },
    selector: {
        type: String,
        trim: true
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        vistuals: true
    }
});

export default mongoose.model('Category', CategorySchema);
