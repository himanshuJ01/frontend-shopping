//const baseUrl = "https://flipkart-clone.herokuapp.com";
const baseUrl = "https://filpkart-clone.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
