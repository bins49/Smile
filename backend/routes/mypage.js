const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { myProfile, updateProfile, editPW } = require('../controllers/mypage');

const router = express.Router();

// GET /mypage
router.get('/', myProfile);

// PUT /mypage/update
router.put('/update', isLoggedIn, updateProfile);

// PUT /mypage/editpw
router.put('/editpw', isLoggedIn, editPW);

module.exports = router;