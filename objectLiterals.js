const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 36,
  email: "steve@aol.com",
  hobbies: ["music", "sports", "geometry"],
  address: {
    city: "miami",
    state: "FL"
  },
  getBirthYear: function() {
    return 2017 - this.age; //need this keywork to know its from inside this obj
  }
};

let val;

val = person;

//get a specific value
val = person.firstName; // recommended
val = person["firstName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [{ name: "john", age: 30 }, { name: "smith", age: 25 }];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
