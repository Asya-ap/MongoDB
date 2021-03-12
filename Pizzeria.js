db = db.getSiblingDB('pizzeria1');
db.dropDatabase();


db.createCollection('restaurant');

db.restaurant.insertOne({
restaurant_id: '234',
    addess: 'c/campoamor',
    zipcode: '45677',
    province: {
    province_id: '789',
    name: 'Madrid',
    location:[{
      location_id: '897',
      name: 'Vallecas'
    }] 
  }, 
  employee:[ {
    employee_id: '456',
    name: 'Adrian',
    surname: 'Perez',
    doc_id: '46123777J',
    phone: '685834567',
    type: 'cook'
  } ]
    });

var IdRestaurant = db.restaurant.find( {restaurant_id: '234'}) 
var restaurant_id= "";

while (IdRestaurant.hasNext()){ 
 restaurant_id = IdRestaurant.next()._id;

db.createCollection('orders');

db.orders.insertOne({
order_id: 'id',
date: new Date(),
delivery: { 
  employee_id: 'id',
  date: new Date()
  },
  products:[
  {
    product_id: 'id',
    product_type: 'pizza',
    name: 'margharitta',
    category: 'pizza',
    description: 'with cheese',
    picture: '/home/images/image.jpg',
    qty: '2'
    price: '12 eur',
  }
  ],
  total_price: '24eur',
  restaurantRef: restaurant_id
});


var IdOrders = db.orders.find( {oder_id: 'id'}) 
var order_id= "";

while (IdOrders.hasNext()){ 
 order_id = IdOrders.next()._id;

db.createCollection('customers');

db.customers.insertOne({
  name: 'Anastasia',
  surname: 'Potapova',
  phone_num: '685834582',
  address: 'c/campoamor',
  zipCode: '46184',
  province: {
    province_id: '789',
    name: 'Madrid',
    location:[
      location_id: '897',
      name: 'Vallecas'
    ] 
  },  
  orderRef: order_id
});


