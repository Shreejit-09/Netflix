export const validateEmailSignIn = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (!emailRegex.test(email)) {
        return "Enter a Valid Email Address";
    } else if (!passwordRegex.test(password)) {
        return "Please enter a Valid Password";
    } else return null;
};

export const validateEmailSignUp = (email, password, name, phone) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (!emailRegex.test(email)) {
        return "Enter a Valid Email Address";
    } else if (!passwordRegex.test(password)) {
        return "Please enter a Valid Password";
    } else if (!nameRegex.test(name)) {
        return "Please enter a Valid Name";
    } else if (!phoneRegex.test(phone)) {
        return "Please enter a Valid Phone Number";
    } else return null;
};
