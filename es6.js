// parent class
class User {
    constructor(name) {
        this.name = name;
    }
    toString(){
      return `My name is ${this.name}`;
    }
 }
 // subclass
 class Worker extends User {
     constructor(name, position) {
         super(name);
         this.position = position;
     }
     toString(){
        return `${super.toString()} (${this.position})`;
     }
 }
 

 let user = new User("Polina");
 let worker = new Worker("Pasha", "Developer");

 console.log(user.toString());
 console.log(worker.toString());