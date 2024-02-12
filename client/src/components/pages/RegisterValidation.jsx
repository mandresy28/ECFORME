function LoginValidation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (values.email === "") {
        error.email = "Should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is incorrect"
    } else {
        error.email = ""
    }
    if (values.username === "") {
        error.username = "Should not be empty"
    } 
    else {
        error.username = ""
    }

    if (values.password === "") {
        error.password = "Should not be empty"
    }
    else {
        error.password = ""
    }

    return error; // You need to return the 'error' object
}

export default LoginValidation;
