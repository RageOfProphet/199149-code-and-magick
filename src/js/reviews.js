'use strict';

var loadUrl = 'http://localhost:1507/api/reviews';

var load = function(url, callback, callbackName) {
  if (!callbackName) {
    callbackName = 'cb' + Date.now();
  }
  window.callbackName = function(data) {
    console.log(data);
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  console.log(script);
  document.body.appendChild(script);
};

var printData = function(data) {
  console.log(data);
};

load(loadUrl, printData, 'jsonpCallback');

/*-------------------

var reviewsFilter = document.querySelector('.reviews-filter');

var IMAGE_LOAD_TIMEOUT = 3000;

function hideFilters() {
  reviewsFilter.classList.add('invisible');
}
hideFilters();

var container = document.querySelector('.reviews-list');
var template = document.querySelector('#review-template');
var templateContainer = 'content' in template ? template.content : template;


var getReviewElement = function(review) {
  var reviewElement = templateContainer.querySelector('.review').cloneNode(true);
  reviewElement.querySelector('.review-author').textContent = review.author.name;
  reviewElement.querySelector('.review-rating').textContent = review.rating;
  reviewElement.querySelector('.review-text').textContent = review.description;

  var currentPicture = reviewElement.querySelector('img');

  var loadedImage = new Image(124, 124);
  var loadImageTimeout = 0;

  loadedImage.src = review.author.picture;

  loadedImage.onload = function(evt) {
    clearTimeout(loadImageTimeout);
    currentPicture.src = evt.target.src;
  };

  loadedImage.onerror = function() {
    reviewElement.classList.add('review-load-failure');
  };

  loadImageTimeout = setTimeout(function() {
    reviewElement.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return reviewElement;
};

var renderReviews = function(reviews) {
  reviews.forEach(function(review) {
    container.appendChild(getReviewElement(review));
  });
};
//renderReviews();

function showFilters() {
  reviewsFilter.classList.remove('invisible');
}
showFilters();

*/

