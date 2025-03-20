Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Creating an object
const student = {
    name: "John"
};

// Testing the function
console.log(student.getKeys());  // Output: ["name"]