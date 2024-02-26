const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017')
.then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log('no connection to database');
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourse:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    image:String,
    price: Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}