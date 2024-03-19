const { Schema, model }= require("mongoose");

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        unique: true
    },
    exercises: [
        {
            type: {
                type: String,
                unique: false
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        },
    ]
});

const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;
