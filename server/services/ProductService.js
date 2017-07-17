var fs = require('fs');
var path = require('path');

var SRC_FILE = path.resolve(__dirname, '../data/products.json');

var ProductService = {
	getAllProducts : function(){
		var promise = new Promise(function (resolve, reject) {
		// Asynchronous read
			fs.readFile(SRC_FILE, function (err, response) {
					if (err) {
						reject(err);
					}
					resolve(response);
			});
		});
		return promise;
	},

	getProductsByName : function(nameCriteria){
		var promise = new Promise(function (resolve, reject) {
			// Asynchronous read
			fs.readFile(SRC_FILE, function (err, data) {
				if (err) {
				 reject(err);
				}
				//  Parse data read from file to JSON
				var JsonData = JSON.parse(data);
				var result = JsonData;
				//  Create a regular expression to search product name
				var nameReg = new RegExp('\w*' + nameCriteria.toLowerCase() + '\w*');
				//  Filter products that match name criteria
				result = result.filter(function(item, index){
					return nameReg.test(item.name.toLowerCase());
				});
				resolve(result);
			});
		});
		return promise;
	},
	getProductById : function(id, response){
		// Asynchronous read
		fs.readFile(SRC_FILE, function (err, data) {
		   if (err) {
		     console.log("Error..");
	   	 }


		var selected = null;
	   	 var products = JSON.parse(data);
		   for(var i=0; i<products.items.length; i++){
		   		if(parseInt(products.items[i].id)===parseInt(id)){
                    selected = products.items[i];
                    break;
				}
		   }
            response(selected);
		});
	},


}

module.exports = ProductService;
