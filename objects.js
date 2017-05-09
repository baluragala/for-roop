var Person = function(name, age){
    this.name=name
    this.age=age
    this.print = function(){
        console.log(name,age)
    }
}


var p = new Person('John',33);
p.print();

var p1 = {
    name:'Johb',
    age:46,
    hobbies:['Playing hockey','Surfing'],
    address:{
        state:{
            province:{

            }
        }
    },
    print: function(){
        console.log(this.name,this.age)
    }
}

p1.print();