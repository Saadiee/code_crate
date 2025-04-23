import {body} from "express-validator"

const userRegistrationValidator = () => {
  return [
    body("email").isEmail().withMessage("Enter valid email").notEmpty().withMessage("Email is required").trim(),
    body("password").isLength({min:8}).notEmpty().withMessage("Password is required").trim(),
    body("name").trim().notEmpty().withMessage("username required").isLength({min:4, max:12}).matches(/^[a-zA-Z0-9_]+$/),
  ]
}

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("Enter valid email").notEmpty().withMessage("Email is required").trim(),
    body("password").isLength({min:8}).notEmpty().withMessage("Password is required").trim(),
  ]
}

export {userRegistrationValidator, userLoginValidator}
