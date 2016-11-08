'use strict';

var nameNeeded = document.getElementById('review-name');
nameNeeded.setAttribute('required', 'true');

var reviewMarks = document.querySelectorAll('input[name="review-mark"]');
console.log(reviewMarks);
for (var i = 0; i < reviewMarks.length; i++) {
  reviewMarks[i].onclick = function(e) {
    console.log(e.target.value);

    var checkedValue = document.querySelector('input[name="review-mark"]:checked').value;
    if (+checkedValue < 3) {
      var requiredText = document.getElementById('review-text');
      requiredText.setAttribute('required', 'true');
    }
  };
}

var nameIsWritten = document.querySelector('.review-fields-name');
console.log(nameIsWritten.value);
if ((nameIsWritten.value) !== '') {
  nameIsWritten.setAttribute('class', 'invisible');
  var firstCond = true;
} else {
  firstCond = false;
}
var reviewIsWritten = document.querySelector('.review-fields-text');
if ((reviewIsWritten.value) !== '') {
  reviewIsWritten.setAttribute('class', 'invisible');
  var secondCond = true;
} else {
  secondCond = false;
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
