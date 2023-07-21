import jwt from "jsonwebtoken";

export const generateToken = data => {
    const token = jwt.sign(data, process.env.PRIVATE_KEY);
    return token;
}
export const checkToken = token => {
    try {
        jwt.verify(token, process.env.PRIVATE_KEY);
        return true
    } catch (error) {
        return false
    }
}