const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const  password = req.body.password;
    Admin.findOne({
        username:username,
        password:password
    }).then((result) => {
        if(result){
            return res.status(409).json('User already exists');
        }else{
            Admin.create({
                username:username,
                password:password
            })
        }
    }).catch((err) => {
        
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router