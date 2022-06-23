/**
 * @jest-environment jsdom
 */
import AddShowReservations from '../modules/AddShowReservations.js';

const counterCls = new AddShowReservations();

describe('add remove functionality', () => {
  document.body.innerHTML = `
  <span id="reservations-counter"></span>
    `;

  const list = [

  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{
          "date_start": "2022-06-22",
          "username": "test1",
          "date_end": "2022-06-22"
        },
        {
          "date_end": "2022-06-22",
          "username": "test2",
          "date_start": "2022-06-22"
        },
        {
          "date_end": "2022-06-24",
          "date_start": "2022-06-23",
          "username": "test3"
        },]),
      })
    );

    counterCls.reservationsCounter.counter = document.getElementById('reservations-counter');
  });

  describe('Check counter function', () => {
    it('Count fetch response', async () => {
      const count = await counterCls.reservationsCounter('test');
      expect(count).toHaveLength(3);
    });
    it('span tag textContent === (3)?', async () => {
      const count = await counterCls.reservationsCounter('test');
      const counterEl = document.getElementById('reservations-counter');
      expect(counterEl.textContent).toBe('(3)');
    });
  });

});
