$(function () {
    // Grab the template script
    var theTemplateScript = $("#address-template").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
  
    // Define our data object
    var doctorObject={
      "doctor1": "doctor1, doctor2, doctor3",
      "doctor2": "Baker Street",
      "doctor3": "221B"
    };
  
    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);
  
    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
  });