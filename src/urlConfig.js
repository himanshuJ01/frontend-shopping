//const baseUrl = "https://flipkart-clone.herokuapp.com";
const baseUrl = "http://localhost:2000"||"https://filpkart-clone.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
