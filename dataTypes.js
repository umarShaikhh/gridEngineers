// string
const firstName = "shaikh";
console.log(typeof firstName); // string
console.log(firstName);


//number
const userPhoneNumber = 8123456789;
const userAge = 24;
const userPerformanceRating = 4.5;

console.log(typeof userAge);

// boolean
const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("Access Granted");
}

//undefiined
let userAddress;

console.log(userAddress); 

console.log(typeof userAddress);

// non-primitive

// array
const userNames = [
    "umar",
    "shaikh",
    "khan",
    "khadhri"
];
console.log(userNames);


console.log(userNames[0]);
console.log(userNames[1]);

// object
const userInformation = {
    fullName: "Galeti Vamsi Krishna",
    age: 24,
    mobileNumber: 8123456789,
    isLoggedIn: true,
    location: null
};

console.log(userInformation);

//array of objects
const employees = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Software Engineer",
        department: "Engineering",
        salary: 75000,
        isActive: true,
        skills: ["JavaScript", "React", "Node.js"]
        }];