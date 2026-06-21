// fn dec

function calculateBill(price, quantity) {
    console.log(`Total Bill Amount: ₹${price * quantity}`);
}

calculateBill(500, 2);
calculateBill(1000, 3);
calculateBill(750, 4);

//fn exp

const showStudentResult = function(studentName, marks) {
    console.log(`${studentName} scored ${marks} marks`);
};

showStudentResult("Rakesh", 85);

// arrow fn

const showOffer = () => {
    console.log("Today's Offer: Flat 20% Discount");
};

showOffer();

// fn with return

function calculateSalary(basicSalary) {
    return basicSalary + 5000;
}

const finalSalary = calculateSalary(25000);

console.log(`Final Salary: ₹${finalSalary}`);


//immediately invoked function expression (IIFE)

(function(companyName) {
    console.log(`Welcome to ${companyName}`);
})("TechVerse");

//default parameters

function assignDepartment(department = "General Support") {
    console.log(`Assigned Department: ${department}`);
}

assignDepartment();
assignDepartment("Technical Support");
