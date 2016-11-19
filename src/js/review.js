'use strict';

define(['./load'], function() {
  var template = document.querySelector('#review-template');
  var templateContainer = 'content' in template ? template.content : template;
  var IMAGE_LOAD_TIMEOUT = 3000;

  return function(review) {
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
});
