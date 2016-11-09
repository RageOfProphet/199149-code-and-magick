'use strict';

var reviewName = document.getElementById('review-name');
var reviewText = document.querySelector('.review-form-field-text');
var reviewSubmit = document.querySelector('.review-submit');

var hideName = document.querySelector('.review-fields-name');
var hideReview = document.querySelector('.review-fields-text');
hideReview.classList.add('invisible');
var hideBoth = document.querySelector('.review-fields');

var reviewMarks = document.querySelectorAll('input[name="review-mark"]');

var currentVote = window.Cookies.get('review-mark') || 3;
var currentName = window.Cookies.get('review-name') || '';

console.log(currentVote);
console.log(currentName);

for (var i = 0; i < reviewMarks.length; i++) {
  reviewMarks[i].onclick = function() {
    reviewSubmit.disabled = validateForm();
  };
}

reviewName.oninput = function() {
  reviewSubmit.disabled = validateForm();
};

reviewText.oninput = function() {
  reviewSubmit.disabled = validateForm();
};

function validateForm() {
  var isDisabled = true;
  var checkedValue = parseInt(document.querySelector('input[name="review-mark"]:checked').value, 10);
  hideBoth.classList.remove('invisible');
  hideReview.classList.remove('invisible');
  hideName.classList.remove('invisible');
  if(checkedValue < 3) {
    if((reviewName.value !== '') && (reviewText.value !== '')) {
      hideBoth.classList.add('invisible');
      isDisabled = false;
    } else if (reviewText.value !== '') {
      hideReview.classList.add('invisible');
    } else if (reviewName.value !== '') {
      hideName.classList.add('invisible');
    }
  } else {
    hideReview.classList.add('invisible');
    if (reviewName.value !== '') {
      hideBoth.classList.add('invisible');
      isDisabled = false;
    } else if (reviewText.value !== '') {
      hideReview.classList.add('invisible');
    }
  }
  return isDisabled;
}


window.form = (function() {
  var formContainer = document.querySelector('.overlay-container');
  var formCloseButton = document.querySelector('.review-form-close');
  var reviewForm = document.querySelector('.review-form');

  var form = {
    onClose: null,

    /**
     * @param {Function} cb
     */
    open: function(cb) {
      formContainer.classList.remove('invisible');
      cb();
    },

    close: function() {
      formContainer.classList.add('invisible');

      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    }
  };

  function calculateExpiresDays() {
    var nowDate = new Date();
    var currentYear = nowDate.getFullYear();
    var birthDate = new Date('12-9');
    birthDate.setFullYear(currentYear);
    if (birthDate > nowDate) {
      birthDate.setFullYear(+currentYear - 1);
    }
    var expiresDays = Math.floor((nowDate - birthDate) / (24 * 60 * 60 * 1000));
    return expiresDays;
  }

  reviewForm.onsubmit = function(e) {
    e.preventDefault();
    var checkedValue = parseInt(document.querySelector('input[name="review-mark"]:checked').value, 10);

    window.Cookies.set('review-mark', checkedValue, {expires: calculateExpiresDays() });
    console.log(checkedValue);
    window.Cookies.set('review-name', reviewName.value, {expires: calculateExpiresDays() });
    console.log(reviewName.value);
    this.submit();
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };

  reviewName.value = currentName;
  document.querySelector('#review-mark-' + currentVote ).checked = true;

  return form;
})();
