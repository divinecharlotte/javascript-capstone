const itemsCounter = (data, link) => {
  link.innerHTML = `Home(${data})`;
  return data;
};

export default itemsCounter;
