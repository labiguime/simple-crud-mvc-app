const User = require('../models/user.js');

let userController = {};

userController.getUsers = async function (req, res) {
	try {
		const users = await User.findAll();
		return res.status(200).json(users);
	} catch (e) {
		return res.status(400).json({ error: e.message });
	}
};

userController.createUser = async function (req, res) {
	try {
		const user = {
			name: req.body.name,
			email: req.body.email,
			age: req.body.age,
			gender: req.body.gender
		};
		const result = await User.create(user);
		console.log(result);
		return res.status(200).json(result);
	} catch (e) {
		console.log(e);
		return res.status(400).json({ error: e.message });
	}
};

userController.deleteUser = async function (req, res) {
	const {id} = req.params;
	try {
		const result = await User.destroy({
		  where: {
		    id: id
		  }
		});
		if(!result) {
			return res.status(400).json({ error: "User not found", success: false });
		}
		return res.status(200).json(result);
	} catch (e) {
		console.log(e);
		return res.status(400).json({ error: e.message });
	}
};

userController.updateUser = async function (req, res) {
	const {name, email, age, gender} = req.body;
	const {id} = req.params;
	try {
		const result = await User.update({name: name, email: email, age: age, gender: gender}, {
		  where: {
			id: id
		  }
		});
		if(!result) {
			return res.status(400).json({ error: "User not found", success: false });
		}
		return res.status(200).json(result);
	} catch (e) {
		console.log(e);
		return res.status(400).json({ error: e.message });
	}
};


module.exports = userController;
