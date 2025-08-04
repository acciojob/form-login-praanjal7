function getFormvalue() {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get the form element
    const form = document.getElementById('form1');
    
    // Get the values from the form inputs
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();
    
    // Combine the names with a space in between
    const fullName = `${firstName} ${lastName}`;
    
    // Display the full name in an alert
    alert(fullName);
}