// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  // console.log(this);
  this.getAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new Person("Brad", 2);
// const john = new Person("John", 2);

const brad = new Person("brad", "9-10-1981");
console.log(brad.getAge());
