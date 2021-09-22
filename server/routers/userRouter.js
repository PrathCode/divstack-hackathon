const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register
router.post('/', async (req, res) => {
   try {
      const { fullName, email, password, passwordVerify } = req.body;

      //validation

      if (!fullName || !email || !password || !passwordVerify) {
         return res
            .status(400)
            .json({ errorMessage: 'Please enter all required fields' });
      }
      if (password.length < 6) {
         return res.status(400).json({
            errorMessage: 'Password should be longer than 6 characters',
         });
      }
      if (password !== passwordVerify) {
         return res.status(400).json({
            errorMessage: 'Both passwords do not match',
         });
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return res.status(400).json({
            errorMessage: 'An account already exists with this email',
         });
      }

      //haashing the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      // creating new user in database

      const newUser = new User({
         fullName,
         email,
         passwordHash,
      });

      //saving the user

      const savedUser = await newUser.save();

      // log the user in

      //making a jwt token

      const token = jwt.sign(
         {
            user: savedUser.fullName,
         },
         process.env.JWT_SECRET
      );

      // saving the JWT token in HTTP only cookie

      res.cookie('token', token, { httpOnly: true }).send();
   } catch (err) {
      console.error(err);
      res.status(500).send();
   }
});

//login

router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;

      //validate
      if (!email || !password) {
         return res
            .status(400)
            .json({ errorMessage: 'Please enter all required fields' });
      }

      //checking if user exists in database

      const existingUser = await User.findOne({ email });
      if (!existingUser) {
         return res.status(401).json({
            errorMessage: 'There is no account with this email address',
         });
      }

      const passwordCorrect = await bcrypt.compare(
         password,
         existingUser.passwordHash
      );

      if (!passwordCorrect) {
         return res.status(401).json({
            errorMessage: 'Password is incorrect',
         });
      }
      // log the user in
      //making a jwt token
      const token = jwt.sign(
         {
            user: existingUser._id,
         },
         process.env.JWT_SECRET
      );
      // saving the JWT token in HTTP only cookie
      res.cookie('token', token, { httpOnly: true }).send();
   } catch (err) {
      console.error(err);
      res.status(500).send();
   }
});

//logging the user out

router.get('/logout', (req, res) => {
   res.cookie('token', '', { httpOnly: true, expires: new Date(0) }).send();
});

module.exports = router;
