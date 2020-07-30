import "bootstrap"
import $ from 'jquery';

$(document).ready(function () {

  if (window.location.href.indexOf('#web') != -1) {
    $('#web').modal('show');
  }



  $("div[class^='modal']").each(function () {

    var currentModal = $(this);

    //click next
    currentModal.find('.btn-next').click(function () {
      currentModal.modal('hide');
      currentModal.closest("div[class^='modal']").nextAll("div[class^='modal']").first().modal('show');
    });

    //click prev
    currentModal.find('.btn-prev').click(function () {
      currentModal.modal('hide');
      currentModal.closest("div[class^='modal']").prevAll("div[class^='modal']").first().modal('show');
    });

  });

});