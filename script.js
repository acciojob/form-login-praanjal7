function getFormvalue(event) {
  event.preventDefault(); // Stop form from refreshing the page

  const form = document.getElementById("form1");
  const firstName = form.elements["fname"].value.trim();
  const lastName = form.elements["lname"].value.trim();

  alert(`${firstName} ${lastName}`);
}
