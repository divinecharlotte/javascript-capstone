import FormValidation from './FormValidation.js';

class AddShowReservations {
  link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/reservations';

  constructor() {
    this.validator = new FormValidation();
  }

  renderForm = () => `<form id='submit-reservation'>
      <h3>Add a reservation</h3>
      <div class="resPopupFormItem">
        <input type='text' required name="name" placeholder='Your name'>
      </div>
      <div class="resPopupFormItem">
        <input type='text' required name="res-popup-start-date" placeholder='Start date' onfocus="(this.type = 'date')">
      </div>
      <div class="resPopupFormItem">
        <input type='text' required name="res-popup-end-date" placeholder='End date' onfocus="(this.type = 'date')">
      </div>
      <button type='submit'>Reserve</button>
    </form>
    <h3 class='reservations-list-header'>
      Reservations
      <span id="reservations-counter"></span>
    </h3>
    <div id='reservations-list'>
      </div>
    `;

  renderReservations = (data) => {
    const list = document.getElementById('reservations-list');
    let html = `
    `;

    data.reverse().forEach((el) => {
      html += `
      <div class="reservation-list-item">
        <strong>${el.date_start}</strong> - <strong>${el.date_end}</strong> by <strong>${el.username}</strong>
      </div>
        `;
    });
    list.insertAdjacentHTML('afterbegin', html);
  };

  async reservationsCounter(id) {
    const counter = document.getElementById('reservations-counter');

    try {
      const response = await fetch(`${this.link}?item_id=${id}`, { method: 'get' });

      const data = await response.json();
      counter.textContent = `(${data.length})`;
      return data;
    } catch (e) {
      return null;
    }
  }

  async getReservations(id) {
    try {
      const response = await fetch(`${this.link}?item_id=${id}`, { method: 'get' });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        const data = await response.json();
        this.renderReservations(data);
        this.reservationsCounter(id);
      }
    } catch (e) {
      throw Error(e);
    }
  }

  invalidFormData = (form) => {
    form.insertAdjacentHTML('afterend', `
      <div id="reservationFormErr">Invalid values</div>
      `);
  };

  async sendData({
    id, name, start, end,
  }) {
    const dataJson = {
      item_id: id,
      username: name,
      date_start: start,
      date_end: end,
    };

    try {
      const response = await fetch(`${this.link}`, {
        method: 'POST',
        body: JSON.stringify(dataJson),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        this.renderReservations([dataJson]);
        this.reservationsCounter(id);
      }
    } catch (e) {
      throw Error(e);
    }
  }

  submitForm(data, formElement, id) {
    const name = data.get('name');
    const start = data.get('res-popup-start-date');
    const end = data.get('res-popup-end-date');

    if (!this.validator.validateText(name)
      || !this.validator.validateDate(start)
      || !this.validator.validateDate(end)) {
      this.invalidFormData(formElement);
      return false;
    }

    const formErr = document.getElementById('reservationFormErr');
    if (formErr !== null) {
      formErr.remove();
    }

    this.sendData({
      id, name, start, end,
    });

    return 1;
  }
}

export default AddShowReservations;
