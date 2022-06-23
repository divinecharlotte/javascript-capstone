const apicom = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/comments';
export default async function commentCounter(b) {
  const melsname = document.querySelector('.comment-pop');

  try {
    const response = await fetch(`${apicom}?item_id=item${b}`, { method: 'get' });
    const data = await response.json();
    const counternum = `<h2 class= 'comment-length'>Comments(${data.length})</h2>`;
    console.log(data.length);
    melsname.insertAdjacentHTML('beforeend', counternum);
    return data;
  } catch (e) {
    console.log(e);
    throw Error(e);
  }
}
