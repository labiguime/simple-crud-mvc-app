const express = require('express');
const router = express.Router();
const user = require('../controllers/user.js');

/**
  * @route        GET /users
  * @description  Retrieve all the users
  * @access       Public
  */
router.get('/', user.getUsers);

/**
  * @route        POST /users/
  * @description  Add a new user
  * @access       Public
  */
router.post('/', user.createUser);

/**
  * @route        PUT /users/:id
  * @description  Update a specific user
  * @access       Public
  */
router.put('/:id', () => {});

/**
  * @route        DELETE /users/:id
  * @description  Delete a specific user
  * @access       Public
  */
router.delete('/:id', () => {});

module.exports = router;
