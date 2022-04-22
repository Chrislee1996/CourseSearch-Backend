const mongoose = require('mongoose')

const commentSchema = require('./comment')

const {Schema, model} = mongoose

const courseSchema = new mongoose.Schema(
	{
		courseName: {
			type: String,
			required: true,
		},
		courseInstitute: {
			type: String,
			required: true,
		},
        image: {
			type: String,
		},
        courseLink: {
            type: String,
            required:true,
        },
        courseSubject: {
			type: String,
			required: true,
		},
        teacher: {
			type: String,
			required: true,
		},
        location: {
			type: String,
			required: true,
            enum:['remote', 'inPerson']
		},
        datesOffered: {
			type: String,
		},
        daysOfCourse: {
			type: String,
			required: true,
            enum:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
		},
        timeOfCourse: {
			type: String,
			required: true,
		},
        credits: {
			type: Number
		},
        tags: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tags'
        }],
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Course', courseSchema)
