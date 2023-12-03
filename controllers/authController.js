const User = require('../model/User');

const createUser = async (req,res)=>{
    const {name, email, password} = req.body
    try {
        const user = await User.findOne({
            email: email
        })       

        if(user){
            res.status(200).json({
                status:false,
                message: "User already exist"
            });
        
        }
        else{
            const newUser = new User({
                name: name,
                email: email,
                password: password
            })
            newUser.save()
            res.status(201).json({
                status:true,
                message: "User created successfully"
            });


        }
    } catch (error) {
        res.status(500).json({
            status:false,
            message: error.message
        });
    }
}

module.exports = {createUser}