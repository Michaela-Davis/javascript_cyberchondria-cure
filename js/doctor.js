// Back-End - Makes API request and displays results

var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctors = function(medicalIssue) {
  // $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=Foot&location=or-portland&user_location=45.5231%2C%20-122.6765&skip=0&limit=10&user_key=74a1c7549fdbcca013e0de35a4a76048')
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=or-portland&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+ apiKey)
   .then(function(response) {
     for (var i = 0; i <= 20; i++) {
       $('.showDoctors').append('<li>' + response.data[i].profile.first_name  + " " + response.data[i].profile.last_name + ", " + response.data[i].profile.title + '</li>');
     }
    })
   .fail(function(error){
      console.log(error);
    });
};

// exports.getDoctors = function(medicalIssue) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=or-portland&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(result) {
//       console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };

exports.doctorModule = Doctor;
