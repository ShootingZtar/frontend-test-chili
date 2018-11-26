$(document).ready(function(){
    $('#popupModalBtn').click();

    $('.modal-dismiss').click(function(){
        $('.modal').modal('toggle');
    });
});