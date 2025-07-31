export const checkValidData = (pEmail, pPassword) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(pEmail)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pPassword)

    if(!isEmailValid) return "Email ID is not valid."
    if(!isPasswordValid) return "Password is not valid."

    return null;
}