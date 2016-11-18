'use strict';

(function() {
  var container = document.querySelector('.reviews-list');

  var loadUrl = 'http://localhost:1507/api/reviews';

/*  function hideFilters() {
    reviewsFilter.classList.add('invisible');
  }
  hideFilters();*/

  var renderReviews = function(reviews) {
    reviews.forEach(function(review) {
      container.appendChild(getReviewElement(review));
    });
  };

/*  function showFilters() {
    reviewsFilter.classList.remove('invisible');
  }
  showFilters();*/

  load(loadUrl, renderReviews, 'jsonpCB');
  })();
