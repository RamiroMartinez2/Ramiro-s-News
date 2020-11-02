let inputName = document.getElementById('input-name');
let inputEmail = document.getElementById('input-email');
let inputPass = document.getElementById('password');
let inputPassRepeat = document.getElementById('password-repeat');
let inputAge = document.getElementById('age');
let inputPhoneNumber = document.getElementById('phone-number');
let inputAdress = document.getElementById('adress');
let inputCity = document.getElementById('city');
let inputPostalCode = document.getElementById('postal-code');
let inputDni = document.getElementById('dni');
let form = document.getElementById('form')
let button = document.getElementById('button');


let inputWithError = [];
let newSubscription = [];

// FULL NAME VALIDATION

inputName.addEventListener('focus', function () {
    document.getElementById('error-name').style.display = 'none';
})

inputName.addEventListener('blur', function () {
    if (inputName.value.length < 6 || validateWhiteSpace(inputName.value)) {
        document.getElementById('error-name').style.display = 'block';
    }
})

// WHITE SPACE FUNCTION

function validateWhiteSpace(parametro) {
    let notValid = / /;

    if (!notValid.test(parametro)) {
        document.getElementById('error-name').style.display = 'block';

    } else {
        document.getElementById('error-name').style.display = 'none';
    }
}



//EMAIL VALIDATION

inputEmail.addEventListener('blur', function () {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (!expReg.test(inputEmail.value)) {
        document.getElementById('error-mail').style.display = 'block';
    }
})
inputEmail.addEventListener('focus', function () {
    document.getElementById('error-mail').style.display = 'none';
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (expReg.test(inputEmail.value)) {
        document.getElementById('error-mail').style.display = 'none';
    }

})

//PASSWORD VALIDATION

inputPass.addEventListener('focus', function () {
    document.getElementById('error-pass').style.display = 'none';
})

inputPass.addEventListener('blur', function () {
    let expRegLyrics = /^[a-zA-z\s]*$/;
    let expRegNum = /^\d*$/;

    if (inputPass.value.length < 8 || (expRegNum.test(inputPass.value)) || (expRegLyrics.test(inputPass.value))) {
        document.getElementById('error-pass').style.display = 'block';
    }
})

//PASSWORD REPEAT VALIDATION

inputPassRepeat.addEventListener('focus', function () {
    document.getElementById('error-pass-repeat').style.display = 'none';
})

inputPassRepeat.addEventListener('blur', function () {
    let expRegLyrics = /^[a-zA-z\s]*$/;
    let expRegNum = /^\d*$/;

    if (inputPassRepeat.value.length < 8 || (expRegNum.test(inputPassRepeat.value)) || (expRegLyrics.test(inputPassRepeat.value)) || inputPassRepeat.value !== inputPass.value) {
        document.getElementById('error-pass-repeat').style.display = 'block';
    }
})

// AGE VALIDATION

inputAge.addEventListener('focus', function () {
    document.getElementById('error-age').style.display = 'none';
})

inputAge.addEventListener('blur', function () {
    if (isNaN(inputAge.value) || inputAge.value <= 17) {
        document.getElementById('error-age').style.display = 'block';
    }
})

//  PHONE NUMBER VALIDATION

inputPhoneNumber.addEventListener('focus', function () {
    document.getElementById('error-number').style.display = 'none';
})
inputPhoneNumber.addEventListener('blur', function () {
    let expReg = /\s/;

    if (inputPhoneNumber.value == '') {
        document.getElementById('error-number').style.display = 'block';
    }

    else if (expReg.test(inputPhoneNumber.value) || isNaN(inputPhoneNumber.value) || inputPhoneNumber.value <= 17) {
        document.getElementById('error-number').style.display = 'block';
    }
})


//  ADRESS NUMBER VALIDATION

inputAdress.addEventListener('focus', function () {
    document.getElementById('error-adress').style.display = 'none';
})
inputAdress.addEventListener('blur', function () {
    let expReg = (/\w/);
    let notValid = / /;
    if (inputAdress.value.length < 5 || !notValid.test(inputAdress.value) || !expReg.test(inputAdress.value)) {
        document.getElementById('error-adress').style.display = 'block';
    }
})

//  CITY NUMBER VALIDATION

inputCity.addEventListener('focus', function () {
    document.getElementById('error-city').style.display = 'none';
})
inputCity.addEventListener('blur', function () {
    let expRegLyrics = /^[a-zA-z\s]*$/;
    if (inputCity.value.length < 3 || !expRegLyrics.test(inputCity.value)) {
        document.getElementById('error-city').style.display = 'block';
    }

})

//  POSTAL CODE VALIDATION

inputPostalCode.addEventListener('focus', function () {
    document.getElementById('error-postal').style.display = 'none';
})
inputPostalCode.addEventListener('blur', function () {
    let expRegNumbers = /^([0-9])*$/;
    if (inputPostalCode.value.length < 3 || !expRegNumbers.test(inputPostalCode.value)) {
        document.getElementById('error-postal').style.display = 'block';
    }

})

// DNI VALIDATION

inputDni.addEventListener('focus', function () {
    document.getElementById('error-dni').style.display = 'none';
})
inputDni.addEventListener('blur', function () {
    let expRegNumbers = /^([0-9])*$/;
    if (inputDni.value.length < 7 || inputDni.value.length > 8 || !expRegNumbers.test(inputDni.value)) {
        document.getElementById('error-dni').style.display = 'block';
    }

})


// SEND BUTTON

let nameHasError;
let emailHasError;
let passHasError;
let passRepeatHasError;
let ageHasError;
let phoneNumberError;
let adressHasError;
let cityHasError;
let pcHasError;
let dniHasError;


button.addEventListener('click', function (e) {
    e.preventDefault()

    //FULL NAME VALIDATION

    if (inputName.value.length < 6 || validateWhiteSpace(inputName.value)) {
        document.getElementById('error-name').style.display = 'block';
        nameHasError = 'Full Name: It must have more than 6 letters and at least one space in between.';
        inputWithError.push(`
        ${nameHasError}`);
    } else {
        let inputNameValue = `
        'Full Name:' ${inputName.value}`
        newSubscription.push(inputNameValue)
    }
    // EMAIL VALIDATION

    let expRegEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (!expRegEmail.test(inputEmail.value)) {
        document.getElementById('error-mail').style.display = 'block';
        emailHasError = 'Email: It must have a valid email format.'
        inputWithError.push(`
      ${emailHasError}`)
    } else {
        let inputEmailValue = `
        'Email:' ${inputEmail.value}`
        newSubscription.push(inputEmailValue)
    }

    // PASSWORD VALIDATION

    let expRegLyricsPass = /^[a-zA-z\s]*$/;
    let expRegNumPass = /^\d*$/;

    if (inputPass.value.length < 8 || (expRegNumPass.test(inputPass.value)) || (expRegLyricsPass.test(inputPass.value))) {
        document.getElementById('error-pass').style.display = 'block';
        passHasError = 'Password: At least 8 characters, consisting of letters and numbers.'
        inputWithError.push(`
    ${passHasError}`);
    } else {
        newSubscription.push(`
    'Password generated correctly'`)
    }
    // PASSWORD REPEAT VALIDATION

    let expRegLyricsPassRepeat = /^[a-zA-z\s]*$/;
    let expRegNumPassRepeat = /^\d*$/;

    if (inputPassRepeat.value.length < 8 || (expRegNumPassRepeat.test(inputPassRepeat.value)) || (expRegLyricsPassRepeat.test(inputPassRepeat.value)) || inputPassRepeat.value !== inputPass.value) {
        document.getElementById('error-pass-repeat').style.display = 'block';
        passRepeatHasError = 'Password-repeat: Passwords do not match.'
        inputWithError.push(`
    ${passRepeatHasError}`);
    }

    // AGE VALIDATION

    if (isNaN(inputAge.value) || inputAge.value <= 17) {
        document.getElementById('error-age').style.display = 'block';
        ageHasError = 'Age: It is not a whole number greater than 18.';
        inputWithError.push(`
        ${ageHasError}`);
    } else {
        let inputAgeValue = `
        'Age:' ${inputAge.value}`
        newSubscription.push(inputAgeValue)
    }


    // PHONE NUMBER VALIDATION

    let expRegPhoneNumber = /\s/;

    if (inputPhoneNumber.value == '') {
        document.getElementById('error-number').style.display = 'block';

    } else if (expRegPhoneNumber.test(inputPhoneNumber.value) || isNaN(inputPhoneNumber.value) || inputPhoneNumber.value <= 17) {
        document.getElementById('error-number').style.display = 'block';
        phoneNumberError = ' Phone Number: Number of at least 7 digits, do not accept spaces, hyphens or parentheses.'
        inputWithError.push(`
    ${phoneNumberError}`);
    } else {
        let inputPhoneValue = `
    'Phone Number:' ${inputPhoneNumber.value}`
        newSubscription.push(inputPhoneValue)
    }

    // ADRESS VALIDATION
    let expRegAdress = (/\w/);
    let notValidAdress = / /;
    if (inputAdress.value.length < 5 || !notValidAdress.test(inputAdress.value) || !expRegAdress.test(inputAdress.value)) {
        document.getElementById('error-adress').style.display = 'block';
        adressHasError = 'Adress: At least 5 characters, with letters, numbers and a space in between.'
        inputWithError.push(`
    ${adressHasError}`)
    } else {
        let inputAdressValue = `
        'Adress:' ${inputAdress.value}`
        newSubscription.push(inputAdressValue)
    }

    // CITY
    let expRegLyrics = /^[a-zA-z\s]*$/;
    if (inputCity.value.length < 3 || !expRegLyrics.test(inputCity.value)) {
        document.getElementById('error-city').style.display = 'block';
        cityHasError = 'City: At least 3 characters.'
        inputWithError.push(`
      ${cityHasError}`);
    } else {
        let inputCityValue = `
        'City:' ${inputCity.value}`
        newSubscription.push(inputCityValue)
    }

    // POSTAL CODE
    let expRegNumbers = /^([0-9])*$/;
    if (inputPostalCode.value.length < 3 || !expRegNumbers.test(inputPostalCode.value)) {
        document.getElementById('error-postal').style.display = 'block';
        pcHasError = 'Postal Code: At least 3 characters.'
        inputWithError.push(`
      ${pcHasError}`);
    } else {
        let inputPostalCodeValue = `
        'Postal Code:' ${inputPostalCode.value}`
        newSubscription.push(inputPostalCodeValue)
    }
    // DNI

    let expRegNumbersDni = /^([0-9])*$/;
    if (inputDni.value.length < 7 || inputDni.value.length > 8 || !expRegNumbersDni.test(inputDni.value)) {
        document.getElementById('error-dni').style.display = 'block';
        dniHasError = 'DNI: 7 or 8 digit number.'
        inputWithError.push(` 
      ${dniHasError}`);
    } else {
        let inputDniValue = `
        'DNI:' ${inputDni.value}`
        newSubscription.push(inputDniValue)
    }
    let alertOk;
    let alertError;

    // ALERT OK
    if (inputWithError == '') {
        alertOk = newSubscription.join()
        alert(alertOk)
        newSubscription = [];
    } else {
        // ALERT ERROR
        alertError = inputWithError.join()
        alert(alertError);
        inputWithError = [];
    }
})
