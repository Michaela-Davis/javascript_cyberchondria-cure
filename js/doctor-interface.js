// USER INTERFACE / Front-End - Receives form input

var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $('#medicalIssue-doctors').click(function() {

    var symptom = $('#medicalIssue').val();
    $('#medicalIssue').val("");

    var doctors = currentDoctorObject.getDoctors(symptom);
    $('.showSymptom').text("Doctors in your area who treat " + symptom + ":");

    $('.showDoctors').text(response.data[0].profile.first_name  + " " + response.data[0].profile.last_name + ", " + response.data[0].profile.title);
    });
});
