var reviewsFilter = document.querySelector('.reviews-filter');

function hideFilters() {
  reviewsFilter.classList.add('invisible');
}
hideFilters();

function showFilters() {
  reviewsFilter.classList.remove('invisible');
}
showFilters();
