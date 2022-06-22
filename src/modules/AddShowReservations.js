import FormValidation from "./FormValidation.js";

class AddShowReservations {
  link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/reservations';

  constructor() {
    this.validator = new FormValidation();
  }

  async apidata(dishName) {
    const response = await fetch(`${this.link}`);

    try {
      const data = await response.json();
      this.renderPopup(data);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  renderForm = () => {
    return `<form id='submit-reservation'>
      <h3>Add a reservation</h3>
      <div class="resPopupFormItem">
        <input type='text' name="name" placeholder='Your name'>
      </div>
      <div class="resPopupFormItem">
        <input type='text' name="res-popup-start-date" placeholder='Start date' onfocus="(this.type = 'date')">
      </div>
      <div class="resPopupFormItem">
        <input type='text' name="res-popup-end-date" placeholder='End date' onfocus="(this.type = 'date')">
      </div>
      <button type='submit'>Reserve</button>
    </form>`;
  };

  renderReservations = (data) => {
    const popup = document.getElementById('reservation__data-content');
    let html = "";

    data.reverse().forEach((el) => {
      html += `
        ${el.username}<br>${el.date_start} <br>${el.date_end}<hr>
      `;
    });

    popup.insertAdjacentHTML('beforeend', html);
  };

  async getReservations(id) {
    try {
      const response = await fetch(`${this.link}?item_id=${id}`, { method: 'get' });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        const data = await response.json();
        this.renderReservations(data);
        console.log(data);
      }
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }


  invalidFormData = (form) => {
    form.insertAdjacentHTML('afterend', `
      <div id="reservationFormErr">Invalid values</div>
      `);
  };

  async sendData({ id, name, start, end }) {

    const dataJson = {
      "item_id": id,
      "username": name,
      "date_start": start,
      "date_end": end
    };

    try {
      const response = await fetch(`${this.link}`, {
        method: 'POST',
        body: JSON.stringify(dataJson),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      if (response.status === 201) {
        console.log('Good response!');
        this.renderReservations([dataJson]);
      } else {
        throw Error('BAD!');
      }

    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  submitForm(data, formElement, id) {
    // console.log(data);
    const name = data.get('name');
    const start = data.get('res-popup-start-date');
    const end = data.get('res-popup-end-date');

    if (!this.validator.validateText(name) ||
      !this.validator.validateDate(start) ||
      !this.validator.validateDate(end)) {
      this.invalidFormData(formElement);
      return false;
    }

    const formErr = document.getElementById('reservationFormErr');
    if (formErr !== null) {
      formErr.remove();
    }

    this.sendData({ id, name, start, end });



  }
}

export default AddShowReservations;