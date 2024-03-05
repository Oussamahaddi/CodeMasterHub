import jwt from "jsonwebtoken"

export const generateToken = (userId : string, role : string) => {
  const token = jwt.sign({userId, role}, process.env.JWT_SECRET!, {
    expiresIn : '1day'
  });
  return token;
}