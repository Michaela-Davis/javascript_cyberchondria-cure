// USER INTERFACE / Front-End - Receives form input

var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $('#medicalIssue-doctors').click(function() {

    var symptom = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    $('.showSymptom').text("Doctors in your area who treat " + symptom + ":");

    $('.showDoctors').text("");

    var response = currentDoctorObject.getDoctors(symptom);
    for (var i = 0; i <= 20; i++) {
      $('.showDoctors').append('<li>' + response.data[i].profile.first_name  + " " + response.data[i].profile.last_name + ", " + response.data[i].profile.title + '</li>');
    }
  });
});
