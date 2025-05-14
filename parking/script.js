const regex = /^[A-Za-z]+[\s][A-Za-z]+$/;
let textField = document.querySelector('#name');
let userName = document.getElementById("name").value;
let empId;
textField.setAttribute('pattern', regex);
textField.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        userName = document.getElementById("name").value;
        if (userName.length >= 2 && regex.test(userName)) {
            document.querySelector(".nam").style.display = 'none';
            document.querySelector(".genderDiv").style.display = 'block';
            document.getElementById('userGender').innerHTML = "Hi " + userName + ", Can I know your password";
        }
        else {
            validateUserName();
        }
    }
});

/**
 * will validate if user name is valid or not
 */
function validateUserName() {
    let textField = document.querySelector('#name');
    let userName = document.getElementById("name").value;
    if (userName.length < 2) {
        textField.setAttribute('title', "Length should be min. 2");
        alert(textField.getAttribute('title'));
    }
    else if (!regex.test(userName)) {
        textField.setAttribute('title', "Please enter valid name");
    }
    else if (regex.test(userName)) {
        textField.setAttribute('title', "Name is valid");
    }
    else {
    }
}

/**
 * will check whether name is valid or not
 * @param {*} inputRegex 
 * @param {*} name 
 * @returns 
 */
function validateName(inputRegex, name) {
    if (!(inputRegex.test(name))) {
        return "Please enter valid name";
    }
    else if (name.length < 2) {
        return "Length should be min. 2";
    }
    else {
        return "Invalid name";
    }
}

/**
 * will display email field to user and hide gender field
 */
function showEmail() {
    document.querySelector(".genderDiv").style.display = 'none';
    document.querySelector(".emailDiv").style.display = 'block';
    let userName = document.getElementById("name").value;
    document.getElementById("emailId").innerHTML = "Hi " + userName + " Can I know your email?"
}

let userEmail = document.querySelector('#email');
userEmail.addEventListener('keydown', function (event) {
    let emailRegex = /^[A-Za-z0-9\-\_\+\.]+[@][a-zA-Z\-]+[.][a-z]{2,3}$/;
    if (event.code == 'Enter') {
        if (emailRegex.test(userEmail.value)) {
            document.querySelector('.emailDiv').style.display = 'none';
            document.querySelector('.passDiv').style.display = 'block';
            document.getElementById('pass').innerHTML = "Hi " + userName + ", Can I know your password";
            document.getElementById('eyeButton').style.visibility = 'visible';
        }
        else {
            userEmail.setAttribute('title', validateEmail(emailRegex, userEmail));
        }
    }
});

/**
 * 
 * @returns will check email is valid or not
 */
function validateEmail(emailRegex, userEmail) {
    if (!(emailRegex.test(userEmail.value))) {
        return "Please enter valid email";
    }
}

let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\!\@\#\$\%\^\&\.\_])/;
let userPassword = document.querySelector('#password');
/**
 * will change the border color of the password field
 */
function showBorder() {
    let passwordValue = userPassword.value;
    if ((passRegex.test(passwordValue)) && passwordValue.length >= 8 && passwordValue.length <= 11) {
        document.getElementById('password').style.border = '2px solid orange';
    }
    else if (passRegex.test(passwordValue) && passwordValue.length >= 12) {
        document.getElementById('password').style.border = '2px solid green';
    }
    else {
        document.getElementById('password').style.borderColor = 'red';
    }
}

userPassword.addEventListener('keydown', function (event) {
    let passwordValue = document.querySelector('#password');
    if (event.code == 'Enter') {
        passwordValue = userPassword.value;
        /* for displaying orange border*/
        if ((passRegex.test(passwordValue)) && passwordValue.length >= 8 && passwordValue.length <= 11) {
            document.getElementById('password').style.border = '2px solid orange';
        }
        /*for displaying strong password*/
        else if (passRegex.test(passwordValue) && passwordValue.length >= 12) {
            document.getElementById('password').style.border = '2px solid green';
            document.querySelector('.confirmPassDiv').style.display = 'block';
            document.querySelector('.passDiv').style.display = 'none';
        }
        /*for weak password*/
        else {
            document.getElementById('password').style.borderColor = 'red';
            userPassword.setAttribute('title', "Please enter strong password");
        }
    }
});

/**
 * 
 * @returns whether password is valid or not
 */
function validatePassword() {
    if ((passRegex.test(userPassword.value))) {
    }
    else {
        return "Please enter valid email";
    }
}

let confirmedPassword = document.querySelector('#confirm_password');
confirmedPassword.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        let confirmedPasswordValue = document.querySelector('#confirm_password').value;
        let passwordValue = document.querySelector('#password').value;
        if (passwordValue == confirmedPasswordValue) {
            document.querySelector('.userContact').style.display = 'block';
            document.getElementById('contact_No').innerHTML = "Hi " + userName + ", Can I know your contact no.";
            document.querySelector('.confirmPassDiv').style.display = 'none';
        }
        else {
            confirmedPassword.setAttribute('title', "Password does not matches");
            alert("Password does not matches");
        }
    }
});

let contactNoRegex = /^[6-9][0-9]{9}/;
let userContact = document.querySelector('#contact_no');
userContact.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        if (contactNoRegex.test(userContact.value) && userContact.value.length == 10) {
            collapseForm();
        }
        else {
            alert("Invalid contact no.");
        }
    }
});

/**
 * will display submit button of employee
 */
function showSubmitButton() {
    let contact = document.querySelector('#contact_no');
    if (contactNoRegex.test(contact.value) && contact.value.length == 10) {
        document.querySelector('#submitEmpForm').style.cursor = 'pointer';
        document.querySelector('#submitEmpForm').style.opacity = '1';
    }
    else {
        document.querySelector('#submitEmpForm').style.cursor = 'not-allowed';
        document.querySelector('#submitEmpForm').style.opacity = '0.2';
    }
}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * will generate a random empId
 * @param {*} length ->length of empId which we req.
 * @returns random empId
 */
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let charIndex = 0; charIndex < length; charIndex++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * will collapse form
 */
function collapseForm() {
    empId = generateString(5)
    alert("Employee id is " + empId);
    document.querySelector('.userContact').style.display = 'none';
    document.getElementById('regSection').style.display = 'none';
    document.getElementById('add_vehicle').style.display = 'flex';
}

/**
 * will check if form is valid or not
 */
function closeForm() {
    if (!typeof empId == undefined || (contactNoRegex.test(userContact.value) && userContact.value.length == 10)) {
        collapseForm();
    }
    else {
    }
}
let vechType = document.getElementById('typeOfVeh');
const vehicleNameRegex = /^[A-Z]{1}[A-Za-z\s]+/;
let vehicleName = document.querySelector('#company');
let vehicleValue;
vehicleName.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        vehicleValue = vehicleName.value;
        if (vehicleNameRegex.test(vehicleValue)) {
            document.querySelector('.compName').style.display = 'none';
            document.querySelector('.modelName').style.display = 'block';
        }
        else {
            vehicleName.setAttribute('title', validateName(vehicleNameRegex, vehicleValue));
            alert("Please enter valid vehicle name\n" + "Vehicle name must start with capital letter");
        }
    }
});

let vehicleModel = document.getElementById('model');
vehicleModel.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelector('.modelName').style.display = 'none';
        document.querySelector('.vechType').style.display = 'block';
    }
});

/**
 * will show vehicle no. field of the vehicle
 */
function showVehicleNumber() {
    document.querySelector('.vechType').style.display = 'none';
    document.querySelector('.vechNo').style.display = 'block';
}

let vehicleNumberFiels = document.getElementById('VehicleNo');
vehicleNumberFiels.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelector('.vechNo').style.display = 'none';
        document.querySelector('.employeeId').style.display = 'block';
    }
});

let empIdField = document.getElementById('empId');
empIdField.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelector('.employeeId').style.display = 'none';
        document.querySelector('.identity').style.display = 'block';
    }
});

/**
 * will display submit button of vehicle
 */
function showButton() {
    let identification = document.querySelector('#identification');
    if (identification.value.length == 0) {
        document.querySelector('#vehCloseButton').style.cursor = 'not-allowed';
        document.querySelector('#vehCloseButton').style.opacity = '0.2';
    }
    else {
        document.querySelector('#vehCloseButton').style.cursor = 'pointer';
        document.querySelector('#vehCloseButton').style.opacity = '1';
    }
}

let identificationField = document.getElementById('identification');
const cycle={
    daily:"5",
    monthly:"100",
    yearly:"500"
};
const motorcycle={
    daily:"10",
    monthly:"200",
    yearly:"1000"
};
const fourWheeler={
    daily:"20",
    monthly:"500",
    yearly:"3500"
};
const vehicles=new Array(cycle,motorcycle,fourWheeler);

identificationField.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        let identification = document.querySelector('#identification');
        /*if identification field is empty*/
        if (identification.value.length == 0) {
            document.querySelector('#vehCloseButton').style.cursor = 'not-allowed';
            document.querySelector('#vehCloseButton').style.opacity = '0.2';
        }
        /*else*/
        else {
            document.querySelector('#vehCloseButton').style.cursor = 'pointer';
            document.querySelector('#vehCloseButton').style.opacity = '1';
            document.querySelector('#add_vehicle').style.display = 'none';
            document.querySelector('#pricing').style.display = 'block';

            document.querySelector('#priceOfSelectedType').innerHTML = vechType.value;
            let select = document.querySelector('#motorCyclePricing');
            for(let index of vehicles){
                document.querySelector('#motorCyclePricing')[0].innerHTML =`Rs. ${index.daily} Daily`;
                document.querySelector('#motorCyclePricing')[1].innerHTML =`Rs. ${index.monthly} Monthly`;
                document.querySelector('#motorCyclePricing')[2].innerHTML = `Rs. ${index.yearly} Yearly`;
                document.querySelector('#pricePerMonth').innerHTML = `Rs. ${index.monthly}`;
                select[0].value = `${index.daily}`;
                select[1].value = `${index.monthly}`;
                select[2].value = `${index.yearly}`;
            }
        }
    }
});

/**
 * will collapse vehicle form
 */
function collapseVehForm() {
    document.getElementById('vehicleRegSec').style.display = 'none';
    document.getElementById('#pricing').style.display = 'flex';
}

/**
 * will show price of the selected vehicle plan
 * @param {*} vehicleType ->type of vehicle selected
 * @param {*} vehicleInputField ->type of plan selected
 */
function showPrice(vehicleType, vehicleInputField) {
    let pricing = document.getElementById(vehicleType);
    let price = pricing.value;
    document.getElementById(vehicleInputField).style.display = 'block';
    document.getElementById(vehicleInputField).innerHTML = `Total price is Rs.${price}`;
}

/**
 * used for currency converter
 * @param {} planType->daily,monthly or yearly
 * @param {*} price ->price of the plan
 * @param {*} vehicleType ->type of vehicle eg. cycle, motorcycle, four wheeler
 */
function conversion(planType, price, vehicleType) {
    let pricing = document.getElementById(planType);
    const result = document.getElementById(price);
    const from = document.getElementById(vehicleType);
    let toCurrency = from.value;
    let amt = pricing.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${"INR"}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let rate = data.rates[toCurrency];
            let total = rate * amt;
            result.innerHTML = `${amt} ${"INR"} = ${total} ${toCurrency}`;
        });
}

/**
 * will close vehicle form
 */
function closeVehForm() {
    let submirButton = document.querySelector('#vehCloseButton');
    if (submirButton.style.opacity != '0.2') {
        document.querySelector('#add_vehicle').style.display = 'none';
        document.querySelector('#pricing').style.display = 'block';
        let vechType = document.getElementById('typeOfVeh');
        document.querySelector('#priceOfSelectedType').innerHTML = vechType.value;
        let select = document.querySelector('#motorCyclePricing');
        //if user selects cycle

        for(let index of vehicles){
            document.querySelector('#motorCyclePricing')[0].innerHTML =`Rs. ${index.daily} Daily`;
            document.querySelector('#motorCyclePricing')[1].innerHTML =`Rs. ${index.monthly} Monthly`;
            document.querySelector('#motorCyclePricing')[2].innerHTML = `Rs. ${index.yearly} Yearly`;
            document.querySelector('#pricePerMonth').innerHTML = `Rs. ${index.monthly}`;
            select[0].value = `${index.daily}`;
            select[1].value = `${index.monthly}`;
            select[2].value = `${index.yearly}`;
        }
    }
}

/**
 * will display password field when user clicks on eye button
 */
function showPass() {
    let inputType = document.getElementById('password');
    if (inputType.type == 'password')
        inputType.type = 'text';
    else {
        inputType.type = 'password';
    }
    let eyeType = document.getElementById('eyeButton');
    if (eyeType.attributes.src.value === 'images/eye-password-hide-svgrepo-com.svg') {
        eyeType.attributes.src.value = 'images/eye-view-interface-symbol-svgrepo-com.svg';
    }
    else {
        eyeType.src = "images/eye-password-hide-svgrepo-com.svg";
    }
}

let header = document.getElementsByClassName('priceOfSelectedType');
if (vechType.value == 'Cycle') {
    header.innerHTML = 'Cycle';
}
else if (vechType.value == 'Motorcycle') {
    header.innerHTML = 'Motorcycle';
}
else {
    header.innerHTML = 'Four Wheeler';
}
