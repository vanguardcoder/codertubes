const db = require('../config/db.config.js');
const Customer = db.customers;
 
// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Customer.create({  
		name: req.body.name,
		age: req.body.age
	}).then(customer => {		
		// Send created customer to client
		res.send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
		// Send all customers to Client
		res.send(customers);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Find a Customer by Id
exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId).then(customer => {
		res.send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Find Customers by Age
exports.findByAge = (req, res) => {
	Customer.findAll({
		where: {
			age: req.params.age
		}
	}).then(
		customers => {
			res.send(customers)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	var customer = req.body;
	const id = req.params.customerId;
	Customer.update( { name: req.body.name, age: req.body.age, active: req.body.active }, 
						{ where: {id: req.params.customerId} }
				   ).then(() => {
						res.status(200).send(customer);
				   }).catch(err => {
						res.status(500).send("Error -> " + err);
				   })
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
		res.status(200).send('Customer has been deleted!');
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};