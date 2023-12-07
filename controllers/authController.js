const User = require('../model/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

const createUser = async (req,res)=>{
    const {name, email, password} = req.body
    try {
        const user = await User.findOne({
            email: email
        })       

        if(user){
            res.status(409).json({
                status:false,
                message: "User already exist"
            });
        
        }
        else{
            const newUser = new User({
                name: name,
                email: email,
                password: CryptoJS.AES.encrypt(
                    password,
                    process.env.SECRET,
                ).toString()
            })
            await newUser.save()
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


const loginUser = async (req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({
            email:email,
        })

        if(user){
            const decryptedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.SECRET
            )

        if(decryptedPassword.toString(CryptoJS.enc.Utf8) === password){
            const userToken = jwt.sign({
                email: user.email,
                password: user.password,
            },process.env.JWTSECRET,{expiresIn:"3h"})

            res.status(200).json({
                status: true,
                message: user.name,
                token: userToken
            })

        }
        else{
            res.status(401).json({
                status: false,
                message: "Wrong password"
            })
        }



        }
        else{
            res.status(404).json({
                status: false,
                message: "Wrong credentail"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}
module.exports = {createUser, loginUser}