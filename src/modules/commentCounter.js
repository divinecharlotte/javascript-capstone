const apicom = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/comments';
export default async function commentCounter(b) {
  const melsname = document.querySelector('.comment-pop');

  try {
    const response = await fetch(`${apicom}?item_id=item${b}`, { method: 'get' });
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      const counternum = `<h2 class= 'comment-length'>Comments(${data.length})</h2>`;
      melsname.insertAdjacentHTML('beforeend', counternum);
    }
  } catch (e) {
    throw Error(e);
  }
}
