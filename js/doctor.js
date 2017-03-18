// Back-End - Makes API request and displays results

var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctors = function(medicalIssue) {
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

exports.doctorModule = Doctor;
