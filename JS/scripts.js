$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const food = $("#food").val();
    const dog = $("input:radio[name=dog]:checked").val();
    const dob = $("#born").val();
    const color = $("#color").val();
  });
});