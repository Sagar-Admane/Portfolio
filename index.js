var isValid = true;

// To prevent autoSubmission after pressing Submit Button

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
})

// Validation After clicking on submit button

function handleSubmit(){
    isValid = false;

    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var msg = document.getElementById("msg");

    if(!fname.value.length){
        fname.style.borderStyle = "double";
        fname.style.border = "3px double black";
    } else {
        fname.style.borderStyle = "";
    }

    if(!lname.value.length){
        lname.style.borderStyle = "double";
        lname.style.border = "3px double black";
    } else {
        lname.style.borderStyle = "";
    }

    if(!email.value.length){
        email.style.borderStyle = "double";
        email.style.border = "3px double black";
    } else {
        email.style.borderStyle = "";
    }

    if(!phone.value.length){
        phone.style.borderStyle = "double";
        phone.style.border = "3px double black";
    } else {
        phone.style.borderStyle = "";
    }

    if(!msg.value.length){
        msg.style.borderStyle = "double";
        msg.style.border = "3px double black";
    } else {
        msg.style.borderStyle = "";
    }


    if(fname.value.length < 3 || lname.value.length < 3){
        alert("Name must be greater than 3");
    }


    // Email validation

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
    }

    // Word Count

    const wordCount = msg.value.split(/\s+/).filter(word => word).length;
    if (wordCount > 200) {
        alert("Message cannot exceed 200 words.");
    }

}

// Onchange border color change

function handleChange(){
    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var msg = document.getElementById("msg");

    if(!fname.value.length){
        fname.style.borderStyle = "double";
        fname.style.border = "3px double black";
    } else {
        fname.style.border = "";
    }

    if(!lname.value.length){
        lname.style.borderStyle = "double";
        lname.style.border = "3px double black";
    } else {
        lname.style.border = "";
    }

    if(!phone.value.length){
        phone.style.borderStyle = "double";
        phone.style.border = "3px double black";
    } else {
        phone.style.border = "";
    }

    if(!email.value.length){
        email.style.borderStyle = "double";
        email.style.border = "3px double black";
    } else {
        email.style.border = "";
    }

    if(!msg.value.length){
        msg.style.borderStyle = "double";
        msg.style.border = "3px double black";
    } else {
        msg.style.border = "";
    }

}