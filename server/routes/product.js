var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var SRC_FILE = path.resolve(__dirname, '../data/products.json');
var productService = require('../services/ProductService');

/* GET products listing. */
router.get('/products', function(req, res, next) {
	//  Only filter products when query string nameCriteria exists
	if(req.query.nameCriteria){
		//  Get query string from URL
		var nameCriteria = req.query.nameCriteria;
		productService.getProductsByName(nameCriteria)
			.then(function(data) {
				res.json(data);
			})
			.catch(function(err) {
				res.writeHead(500, {"Content-Type": "application/json"});
				res.end(err);
			});
	}
	else{
		productService.getAllProducts()
			.then(function(data) {
				res.writeHead(200, {"Content-Type": "application/json"});
				res.end(data);
			})
			.catch(function(err) {
				res.writeHead(500, {"Content-Type": "application/json"});
				res.end(err);
			});
	}
});

/* GET product. */
router.get('/product/:id', function(req, res, next) {

	var id = req.params.id;
	productService.getProductById(id, function response(data){
		res.writeHead(200, {"Content-Type": "application/json"});
	       res.end(JSON.stringify(data));
	});
});


module.exports = router;
