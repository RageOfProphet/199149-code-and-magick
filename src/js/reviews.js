'use strict';

var reviews = [{
  'author': {
    'name': 'Иванов Иван',
    'picture': 'img/user-1.jpg'
  },
  'review_usefulness': 10,
  'rating': 2,
  'description': 'Плохая игра: слишком сильно затягивает и невозможно оторваться. Я потерял работу, учебу, девушку и дар речи, но продолжаю играть. Это призыв о помощи: спасите.'
}];

var IMAGE_LOAD_TIMEOUT = 10000;
/*function hideFilters() {
  var reviewsFilter = document.querySelector('.reviews-filter');
  reviewsFilter.classList.add('invisible');
}
hideFilters();*/

var container = document.querySelector('.review-list');
var template = document.querySelector('#review-template');
var templateContainer = 'content' in template ? template.content : template;


var getReviewElement = function(review) {
  var reviewElement = templateContainer.querySelector('.review').cloneNode(true);
  reviewElement.querySelector('.review-author').textContent = review.author.name;
  console.log(review.author.name);
  reviewElement.querySelector('.review-rating').textContent = review.rating;
  console.log(review.rating);
  reviewElement.querySelector('.review-text').textContent = review.description;
  console.log(review.description);
  var backgroundImage = new Image();
  var backgroundImageTimeout = null;

  backgroundImage.onload = function(evt) {
    clearTimeout(backgroundImageTimeout);
    reviewElement.style.background = 'url(\'' + evt.target.src + '\')';
  };
  backgroundImage.onerror = function() {
    reviewElement.classList.add('author-nophoto');
  };
  backgroundImage.src = review.picture;

  backgroundImageTimeout = setTimeout(function() {
    reviewElement.classList.add('author-nophoto');
  }, IMAGE_LOAD_TIMEOUT);

  console.log(reviewElement);
  return reviewElement;
};

reviews.forEach(function(review) {
  container.appendChild(getReviewElement(review));
});
