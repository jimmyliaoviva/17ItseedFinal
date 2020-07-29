import "bootstrap"
import $ from 'jquery';

$(document).ready(function() {

    if(window.location.href.indexOf('#web') != -1) {
      $('#web').modal('show');
    }
  
  });