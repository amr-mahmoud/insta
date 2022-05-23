export const generateID = () => {
  return Math.floor(Math.random() * 1000) + Date.now() + "";
};
