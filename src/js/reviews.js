'use strict';

define(['./review'], function(getReviewElement) {

  var container = document.querySelector('.reviews-list');
  var reviewsFilter = document.querySelector('.reviews-filter');

  reviewsFilter.classList.add('invisible');

  var renderReviews = function(reviews) {
    reviews.forEach(function(review) {
      container.appendChild(getReviewElement(review));
    });
  };
  reviewsFilter.classList.remove('invisible');
  return renderReviews;
});
