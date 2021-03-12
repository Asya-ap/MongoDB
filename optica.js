db = db.getSiblingDB('optica1');
db.dropDatabase();

db.createCollection('suppliers');

db.suppliers.insertOne( {
    name: 'Supplier1',
    address: {
        street: '4th Av',
        number: '55',
        flat_num: '10',
        city: 'Valencia',
        country: 'Spain',
        zipcode: '46183'
    },
    phone_num: '685823893',
    id_doc: '46014777J',
    brand: {
    	id: '123',
    	name: 'Gucci'
    }
});


var IdSupplier = db.suppliers.find( {name: 'Supplier1'}) 
var supplier_id= "";

while (IdSupplier.hasNext()){  
 supplier_id = IdSupplier.next()._id; 
}

var IdCustomer = db.customers.find( {name: 'Anastasia'}) 
var customer_id= "";

while (IdCustomer.hasNext()){  
 customer_id = IdCustomer.next()._id; 
}

db.createCollection('customers');

db.customers.insertOne({
name: 'Anastasia',
date: new Date(),
  address: {
        street: '4th Av',
        number: '55',
        flat_num: '10',
        city: 'Valencia',
        country: 'Spain',
        zipcode: '46183'
  },
   phone_num: '685823897',
   email: 'mongo@db.com',
   recommendedRef: customer_id,
   order:{
   order_id: '678',	
   order_details:[{
   brand: 'Gucci',
   left_calibration: 'double',
   right_calibration: 'double',
   frame: 'type1',
   color: 'blue',
   left_glass_color: 'color',
   right_glass_color: 'color',
   price: 'eur'
  	}],
  	employee: [{
  	id: '345',
  	name: 'Juan',
  	}],
  	supplierRef: supplier_id
  }
});




   
 


