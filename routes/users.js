const express = require('express');
const router = express.Router();

/**
  * @route        GET /users
  * @description  Retrieve all the users
  * @access       Public
  */
router.get('/', () => {});

/**
  * @route        GET /users/:id
  * @description  Retrieve a specific user
  * @access       Public
  */
router.get('/:id', () => {});

/**
  * @route        POST /users/
  * @description  Add a new user
  * @access       Public
  */
router.post('/', () => {});

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
