export const ValidateForm = ( {email , password}) =>{
    const isEmailValid = ValidEmail(email);
    const isPasswordValid = ValidatePassword(password);
    return isEmailValid && isPasswordValid;

}

const ValidatePassword = (password) => {
    return password.length > 7 && password.length <14
}
const ValidEmail = (email) => {
    const EmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return EmailPattern.test(email)

}
