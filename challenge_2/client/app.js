// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.



$(document).ready(function() {
  console.log('ready!');
  // $('#uploadButton').on('click', function(e) {
  //   console.log('clicked');
  //   e.preventDefault();
  // })

  // var uploadFunction = function() {
  //   var inputForm = document.getElementById('inputForm');
  //   var jsonUpload = new FormData(inputForm);
  //   $.ajax({
  //     method: 'POST',
  //     url: 'http://localhost:3000/',
  //     data: jsonUpload
  //     success: (data) => {
  //       console.log('success');
  //     }
  //   })
  // };

});


// Handle form submit

// Handle download request

// Convert JSON object?
// HOW DO I CREATE CSV

// Idea: multi-step the conversion to CSV
// Convert everything into an object that can be easier put into CSV form somehow {key: [value, value, value], key [value]}, make sure to put in padding if a value does not exist
// Do I need to worry about new properties being added?
// Initial object determines properties, then more can be added