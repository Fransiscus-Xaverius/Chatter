const {Sequelize, DataTypes} = require("sequelize");
require("dotenv").config
const {development} = require("../config/config.json");
const sequelize = new Sequelize(development.database, development.username, development.password, {
  host: development.host,
  port: 3306,
  dialect: "mysql",
});
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const users = require("../models/user")(sequelize, DataTypes);

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const register = async (req,res) =>{
    let {nama, email, password, confirm_passsword} = req.body;

    let schema = Joi.object({
        username: Joi.string().required().messages({
            "any.required": "Please enter a valid username",
            "string.empty": "Username must not be empty!"
        }),
        password: Joi.string().required().messages({
            "any.required": "Password is not given",
            "string.empty": "Password cannot be empty"
        }),
        confirm_password: Joi.string().required().messages({
            "any.required": "Password is not given",
            "string.empty": "Password cannot be empty"
        }),
    })

    try{
        let res = await schema.validateAsync(req.body);
    }
    catch(error){
        return res.status(400).send({message: error.message})
    }

    

}