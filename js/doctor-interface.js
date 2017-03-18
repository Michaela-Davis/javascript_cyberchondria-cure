// USER INTERFACE / Front-End - Receives form input

var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $('#medicalIssue-doctors').click(function() {

    var symptom = $('#medicalIssue').val();
    $('#medicalIssue').val("");

    var doctors = currentDoctorObject.getDoctors(symptom);
    $('.showSymptom').text("Doctors in your area who treat " + symptom + ":");
    });
});
