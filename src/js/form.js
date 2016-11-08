'use strict';

var reviewName = document.getElementById('review-name');
var reviewText = document.querySelector('.review-form-field-text');
var reviewSubmit = document.querySelector('.review-submit');

var hideName = document.querySelector('.review-fields-name');
var hideReview = document.querySelector('.review-fields-text');
var hideBoth = document.querySelector('.review-fields');

var reviewMarks = document.querySelectorAll('input[name="review-mark"]');
hideReview.classList.add('invisible');

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


  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };

  return form;
})();
