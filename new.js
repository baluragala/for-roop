//primitive
// string
// number
// boolean
// undefined
// null
// symbol


// wrapper types
// String
// Number
// Boolean

var username='John';
var username1= new String('John');


var age=23;
var ag1=new Number(23);

var flag=true;
var flag1=new Boolean(true);

var fruits = ['Apple','Banana'];
var fruits1 = new Array('Apple','Banana');

var person = { name: 'John', age:23}
var person1 = new Object();
person1.name='John'
person1.age=23;

function Animal(){
    return "animal"
}

var cat = new Animal();
var cat1=Animal();



function Customer(name,age,type){
    console.log('Calling Customer', this)
    this.name=name;
    this.age=age;
    this.type=type;
}


function Address (street,state,city){
    console.log('Calling Address', this)
    this.street=street;
    this.state=state;
    this.city=city;
    this.address = function(street1,city1){
        this.street1=street1;
        this.city1=city1;
    }
}

function CustomerWithAddress(name,age,type, street,state,city){
    console.log('Calling Customer', this)
    this.name=name;
    this.age=age;
    this.type=type;
    this.address =  new Address(street,state,city);
}


var mary = new Customer('Mary',40,'PRIME');
var maryaddress = new Address('123','AN','AN');
mary.address = maryaddress;

var mary1 = Customer('Mary1',40,'PRIME1');
var mary2 = Customer('Mary2',40,'PRIME2');
var mary3 = Customer('Mary3',40,'PRIME3');