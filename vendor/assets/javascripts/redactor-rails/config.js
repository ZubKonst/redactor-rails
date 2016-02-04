window.init_redactor = function(){
  var csrf_field = '[name="authenticity_token"]';
  $('.redactor').redactor(
    { "imageUpload":"/redactor_rails/pictures",
      "imageUploadFields": csrf_field,
      "fileUpload":"/redactor_rails/documents",
      "fileUploadFields": csrf_field }
  );
}

$(document).on( 'ready page:load', window.init_redactor );
