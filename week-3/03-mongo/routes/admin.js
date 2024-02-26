const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const e = require("express");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;
    Admin.findOne({
        username:username,
        passsword:password
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
        console.log('problem in connection with server')
    });
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allcourse= await Course.find({});
    res.json(allcourse);

});

module.exports = router;