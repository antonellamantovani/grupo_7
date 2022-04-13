// ************ Require's ************
const express = require('express');
const router = express.Router();
/*const multer = require('multer')*/
const path = require('path');

//Multer config
var storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/users');
    },

    filename: function(req,file,cb) {
        cb(null,'file.fieldname' + '-' + Date.now() + path.extname(file.originalname));
    }
});

// ************ Controller Require ************
const usersController = require('../controllers/usersController');
const indexController = require('../controllers/indexController');

//RUTAS ACCESIBLE POR CUALQUIERA
router.get('/everyone', indexController.index);

//RUTA ACCESIBLE SOLO SIN LOGIN
router.get('/without-login', usersController.register);
router.post('/', usersController.processRegister); 

//RUTA ACCESIBLE SOLO CON LOGIN
router.get('/user-login', usersController.login)
router.post('/', usersController.loginProcess); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/register', usersController.register); 
router.post('/', usersController.processRegister); 

/*** EDIT ONE PRODUCT ***/ 


module.exports = router;