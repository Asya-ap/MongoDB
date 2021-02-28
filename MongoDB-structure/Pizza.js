// Exercici 1 

//Database Pizzeria

Use Pizzeria

db.createCollection('customers');

db.customers.insert({
	"_id": ObjectID Customers,
	"name": {type:String, required: true, unique: true},
	"surname": {type:String, required: true, unique: true},
	"phone_num": {type: Number, required: true, unique: true},
	"Address": {type:String, required: true},
	"ZipCode": {type:String, required: true},
	"Province": {
		"Province_id": id,
		"Name": {type:String, required: true},
		"Location": [
			"Location_id": id,
			"Name": {type:String, required: true},
		],	
	}
	"WebOrders": [ObjectID WebOrders]
	
});

db.createCollection('webOrders');

db.webOrders.insert({
"_id": ObjectID WebOrders,
"Date": IDODate,
"Delivery": True { //Boolean
	"Employee_id": id,
	"Date": ISODate,
	},
"Total_price": {type: Double, required: true},
"Order":{
	"Order_id": id,
	"Products": [
	{
		"Product_id": id,
		"Product_type": {type:String, required: true},
		"Name": {type:String, required: true},
		"Description": {type:String, required: true},
		"Picture": {type:BinData, required: true},
		"Price": {type: Double, required: true},
	}
	],
	"Qty":  {type: Number, required: true},
}
});

db.createCollection('pizza');

db.pizza.insert({
	"Product_id": id,
	"Category": [ {
	 "Category_id": id,
	 "Name": {type:String, required: true},
	},
		]
	"Date": NewDate(),
});

db.createCollection('restaurant');

db.restaurant.insert({
	"_id": ObjectID Restaurant,
	"WebOrders": [ObjectID WebOrders],
	"Address": {type:String, required: true},
	"ZipCode": {type:String, required: true},
	"Province": {
		"Province_id": id,
		"Name": {type:String, required: true},
		"Location": [
			"Location_id": id,
			"Name": {type:String, required: true},
		],
	"Employee": {
		"Employee_id": id,
		"name": {type:String, required: true, unique: true},
		"surname": {type:String, required: true, unique: true},
		"identification_id":{type:String, required: true, unique: true},
		"phone_num": {type: Number, required: true, unique: true},
		"Type(Cook/Deliver)": {type:String, required: true},
	}

});




