import AddShowReservations from "./AddShowReservations.js";
class Reservations {

  constructor() {
    this.AddShowRes = new AddShowReservations();
  }

  async apidata(dishName) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`);

    try {
      const data = await response.json();
      this.renderPopup(data);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  removePopup = () => {
    const popup = document.getElementById('reservationPopup');
    const closeBtn = document.getElementById('reservation__closeBtn');

    popup.addEventListener('click', (e) => {
      if (e.target.id === 'reservationPopup') popup.remove();
      document.body.classList.remove('popup-open');
    });

    closeBtn.addEventListener('click', () => {
      popup.remove();
      document.body.classList.remove('popup-open');
    });
  };

  renderPopup(data) {
    const res = data.meals[0];
    const thumb = res.strMealThumb;
    const name = res.strMeal;
    const category = res.strCategory;
    const area = res.strArea;
    const recipie = res.strSource;

    const popup = document.getElementById('reservation__data-content');
    this.removePopup();

    let html = `
    <img src='${thumb}' alt="Image of ${name}">
    <h2>${name}</h2>
    <div id='resPopup--dish-description'>
      <div class='rpdd-item'>
        <p>Category:</p>
        <p>${category}</p>
      </div>
      <div class='rpdd-item'>
        <p>Origin:</p>
        <p>${area}</p>
      </div>
      <div class='rpdd-item'>
        <a href='${recipie}' target="_blank">Recipie</a>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
    </div>
    `;
    html += this.AddShowRes.renderForm();
    popup.insertAdjacentHTML('afterbegin', html);
  }

  openPopup = (e) => {
    document.body.classList.add('popup-open');
    document.body.insertAdjacentHTML('afterbegin', `
    <div id='reservationPopup'>
      <div id='reservation-p__container'>
        <div id='reservation__container'>
            <div id='reservation__closeBtn'>
              <div id='r__cBtn-lines'></div>
            </div>
            <div id='reservation__data-content'></div>
          </div>
      </div>
    </div>
    `);

    this.apidata(e.target.dataset.name);
    this.removePopup();
  };

  init = () => {
    const reservationBtn = document.querySelectorAll('.reservation-btn');

    document.querySelector('.reservation-btn').click();
    reservationBtn.forEach((el) => {
      el.addEventListener('click', this.openPopup);
    });
  };
}

export default Reservations;
