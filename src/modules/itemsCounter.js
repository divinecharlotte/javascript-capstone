const itemsCounter = (counter, link) => {
  link.innerHTML = `Home(${counter})`;
  return counter;
};

export default itemsCounter;
