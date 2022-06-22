class AddShowReservations {
  link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/reservations';

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
    return `<form>
      <h3>Add a reservation</h3>
      <div class="resPopupFormItem">
        <input type='text' placeholder='Your name'>
      </div>
      <div class="resPopupFormItem">
        <input type='text' name="res-popup-end-date" placeholder='Start date' onfocus="(this.type = 'date')">
      </div>
      <div class="resPopupFormItem">
        <input type='text' name="res-popup-end-date" placeholder='End date' onfocus="(this.type = 'date')">
      </div>
    </form>`;
  };

  renderReservations() {
    const popup = document.getElementById('reservation__data-content');
  }

  async submitForm() {
    const response = await fetch(`${this.link}`, {
      method: 'POST',
      body: JSON.stringify({
        "item_id": "item1",
        "username": "Jane",
        "date_start": "2020-10-15",
        "date_end": "2020-10-16"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    try {
      const data = await response.json();
      this.renderReservations(data);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }
}

export default AddShowReservations;
