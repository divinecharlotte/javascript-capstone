/**
 * @jest-environment jsdom
 */

import commentCounter from '../modules/itemsCounter.js';

describe('add remove functionality', () => {
  document.body.innerHTML = `
    <span id='reservations-counter'></span>
      `;

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          comment: 'This is nice!',
          creation_date: '2021-01-10',
          username: 'John',
        },
        {
          comment: 'This is  God!',
          creation_date: '2021-01-10',
          username: 'Miki',
        },
        {
          comment: 'This is nice!',
          creation_date: '2021-01-10',
          username: 'Dani',
        },
      ]),
    }));
  });

  describe('Check counter function', () => {
    it('Count fetch response', async () => {
      const count = await commentCounter('test');
      expect(count).toHaveLength(3);
    });
  });
});
