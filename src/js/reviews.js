'use strict';

<<<<<<< HEAD
(function() {
  var container = document.querySelector('.reviews-list');

  var loadUrl = 'http://localhost:1507/api/reviews';

/*  function hideFilters() {
    reviewsFilter.classList.add('invisible');
  }
  hideFilters();*/
=======
define(['./review'], function(getReviewElement) {

  var container = document.querySelector('.reviews-list');
  var reviewsFilter = document.querySelector('.reviews-filter');

  reviewsFilter.classList.add('invisible');
>>>>>>> 89ab5f3f15a35ceafa822bffda9304b9a2687a1f

  var renderReviews = function(reviews) {
    reviews.forEach(function(review) {
      container.appendChild(getReviewElement(review));
    });
  };
<<<<<<< HEAD

/*  function showFilters() {
    reviewsFilter.classList.remove('invisible');
  }
  showFilters();*/

  load(loadUrl, renderReviews, 'jsonpCB');
  })();
=======
  reviewsFilter.classList.remove('invisible');
  return renderReviews;
});
>>>>>>> 89ab5f3f15a35ceafa822bffda9304b9a2687a1f
