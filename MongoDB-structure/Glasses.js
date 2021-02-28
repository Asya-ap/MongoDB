// Exercici 1 - Òptica

//Database Optica

Use Optica

db.createCollection('glasses');

db.glasses.insert({
	"_id": ObjectID Glasses
	"brand": {type:String, required: true},
	"left_calibration": {type:double, required: true},
	"right_calibration": {type:double, required: true},
	"frame_type": {type:String, required: true},
	"frame_color": {type:String, required: true},
	"left_glass_color": {type:String, required: true},
	"right_glass_color":{type:String, required: true},
	"price": {type:String, required: true},
	
});

db.glasses.insert({
"supplier_id:",
"name": {type:String, required: true, unique: true},
"address": {
	"street":{type:String, required: true},
	"zipcode":{type:number, required: true},
	"building":{type:number, required: true},
	"flat_n": {type:number, required: true},
	"door_n": {type:number, required: true},
	"City":{type:String, required: true},
	"Country":{type:String, required: true}
	}
"Phone_numer": {type:number, required: true, unique: true},
"Fax":{type:number, required: true},
"ID_doc_num":{type:String, required: true, unique: true},
"Glasses": ObjectID Glasses
});

db.createCollection('customers');

db.customer.insert({
	"_id": ObjectID customer
	"name": {type:String, required: true, unique: true},
"address": {
	"street":{type:String, required: true},
	"zipcode":{type:number, required: true},
	"building":{type:number, required: true},
	"flat_n"{type:number, required: true},
	"door_n"{type:number, required: true},
	"City":{type:String, required: true},
	"Country": {type:String, required: true}
	}
"Phone_numer:"{type:number, required: true, unique: true},,
"Email": {type:String, required: true, unique: true},
"customer": ObjectID customer,
"Glasses": ObjectID Glasses
})

db.createCollection('employees');

db.employees.insert({
	"EmployeeID":,
	"Glasses": ObjectID Glasses
})
