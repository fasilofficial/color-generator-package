const randomNumber = () => {
  return Math.round(Math.random() * (256 - (-1)) + 0);
};
const randomColorGenerator = () => {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

export default randomColorGenerator;