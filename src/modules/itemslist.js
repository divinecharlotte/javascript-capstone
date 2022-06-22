import { getLikes, likeInteraction } from './nOfLikes.js';
import itemsCounter from './itemsCounter.js';

const recipeCards = document.querySelector('.recipe-cards');
const recipeCount = document.querySelector('.item-count');
const displayCards = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian',
  );
  const data = await response.json();

  for (let i = 0; i < 20; i += 1) {
    data.meals[i].idMeal = i;
  }
  const file = data.meals;
  const newArray = file.filter((Objects) => Objects.idMeal <= 11);
  let html = '';
  newArray.forEach((meal) => {
    html += `<div class='card' id='${meal.idMeal}'>
               <div class='card-img'>
                   <img src='${meal.strMealThumb}' alt='${meal.strMeal}'>
               </div>
               <div class='card-info'>
                   <h2>${meal.strMeal}</h2>
                   <ul>
                       <li><button id=${meal.idMeal}  class='comment-btn' type='button'>Comments</button></li>
                       <li><button class='like-btn'><i class='fa-regular fa-heart'></i><span class='like-count'>0</span></button></li>
                       <li><button id=${meal.idMeal}  class='reservation-btn' type='button'>reservation</button></li>
                   </ul>
               </div>
             </div>`;
    recipeCards.innerHTML = html;
  });
  getLikes();
  likeInteraction();
  itemsCounter(newArray.length, recipeCount);
};

export default displayCards;
