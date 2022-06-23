/**
 * @jest-environment jsdom
 */

import commentCounter from '../modules/commentCounter.js';

describe('add remove functionality', () => {
  document.body.innerHTML = `
 
     <span class='comment-pop'>test</span>
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
    commentCounter.melsname = document.getElementById('reservations-counter');
    // console.log(document.querySelector('.comment-pop').textContent);
    commentCounter.counternum = 'test';
  });

  describe('Check counter function', () => {
    it('Count fetch response', async () => {
      const count = await commentCounter('test');
      console.log(count);
      expect(count).toHaveLength(3);
    });
  });
});
