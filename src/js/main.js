'use strict';

define(['./form', './game', './gallery.js', './load', './reviews'],
function(form, Game, Gallery, load, renderReviews) {
  var game = new Game(document.querySelector('.demo'));
  game.initializeLevelAndStart();
  game.setGameStatus(Game.Verdict.INTRO);

  var formOpenButton = document.querySelector('.reviews-controls-new');

  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();

    form.open(function() {
      game.setGameStatus(Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };

  form.onClose = function() {
    game.setDeactivated(false);
  };
  var loadUrl = 'http://localhost:1507/api/reviews';
  load(loadUrl, renderReviews, 'jsonpCB');

  var pictures = [];
  var galleryImages = document.querySelectorAll('.photogallery-image img');
  var galleryImagesArray = Array.prototype.slice.call(galleryImages);

  for (var i = 0; i < galleryImages.length; i++) {
    pictures[i] = galleryImages[i].src;
  }

  var gallery = new Gallery(pictures);

  galleryImagesArray.forEach(function(picture, currentPicture) {
    picture.onclick = function() {
      gallery.show(currentPicture);
    };
  });
});
