//if statement

const isAuthenticated = true;

if(isAuthenticated){
    console.log(`Welcome Back!`)
}


//if else
    const stockQuantity = 5;

if(! stockQuantity >= 0){
    console.log(`Out of Stock`);
}else{
    console.log(`Product Available`);
}

//else if statement
const performanceScore = 82;
if(performanceScore >= 90 ){
        console.log(`Excellent Performer and you secured ${performanceScore}`);
    }else if(performanceScore >= 75){
        console.log(`You're a Good Perfomer and secured ${performanceScore}`);
    }else if(performanceScore >= 60){
        console.log(`You've an average performance and secured ${performanceScore}`);
    }else{
        console.log(`Needs an improvement`);
    }

    //switch statement
    const ticketPriority = "High";
    switch(ticketPriority){
    case "Critical" :
        console.log(`Response within 15 minutes`);
        break;
    
    case "High":
        console.log("Response within 1 hour");
        break;

    case "Medium":
        console.log("Response within 4 hours ");
        break;

    case "Low" :
        console.log("Response within 24 hours");
        break;

    default:
        console.log(`Invalid Priority`);
}

//nested if statements

const employeeExists = true;
const employeeStatus = "Active";
if(employeeExists){
        if(employeeStatus === "Active"){
            console.log(`VPN access granted`);
        }else{
            console.log(`VPN access denied`);
        }
    }else{
        console.log(`User not found`)
    }

    // complex nested if

    const customerAge = 30;
const monthlySalary = 75000;
const creditScore = 780;
if (customerAge >= 21) {
    if (monthlySalary >= 50000) {
        if (creditScore >= 750) {
            console.log("Customer is eligible for the loan.");
        } else {
            console.log("Customer is not eligible due to low credit score.");
        }
    } else {
        console.log("Customer is not eligible due to low salary.");
    }
} else {
    console.log("Customer is not eligible due to age.");
}


const isLoggedIn = true;
const cartItems = 3;
const shippingAddressAvailable = true;
const paymentMethodSelected = true;

if (isLoggedIn) {
    if (cartItems > 0) {
        if (!shippingAddressAvailable) {
            if (paymentMethodSelected) {
                console.log("Order placed successfully!");
            } else {
                console.log("Please select a payment method.");
            }
        } else {
            console.log("Please add a shipping address.");
        }
    } else {
        console.log("Your cart is empty.");
    }
} else {
    console.log("Please log in to continue.");
}


const studentLoggedIn = true;
const prerequisiteCompleted = true;
const courseSeatsAvailable = true;
const feePaid = false;

if (studentLoggedIn) {
    if (prerequisiteCompleted) {
        if (courseSeatsAvailable) {
            if (feePaid) {
                console.log("Course registration successful!");
            } else {
                console.log("Please pay the course fee.");
            }
        } else {
            console.log("No seats available for the course.");
        }
    } else {
        console.log("Complete the prerequisite course first.");
    }
} else {
    console.log("Please log in to register.");
}
