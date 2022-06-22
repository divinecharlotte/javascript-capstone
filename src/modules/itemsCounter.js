// const itemsCounter = (data, link) => {
//     link.innerHTML = `Home(${data.length})`;
//     return data.length;
//   };

const itemsCounter = (data, link) => {
    link.innerHTML = `Home(${data})`;
    return data;
  };
  
  export default itemsCounter;