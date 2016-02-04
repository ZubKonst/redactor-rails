window.init_redactor = function(){
  var csrf_field = '[name="authenticity_token"]';
  $('.redactor').redactor({
        // You can specify, which ones plugins you need.
        // If you want to use plugins, you have add plugins to your
        // application.js and application.css files and uncomment the line below:
        // "plugins": ['fontsize', 'fontcolor', 'fontfamily', 'fullscreen', 'textdirection', 'clips'],
        "imageUpload":"/redactor_rails/pictures",
        "imageUploadFields": csrf_field,
        "fileUpload":"/redactor_rails/documents",
        "fileUploadFields": csrf_field
      });
}

$(document).on( 'ready page:load', window.init_redactor );
