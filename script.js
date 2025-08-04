 function getFormValue() {
            // Get form values
            const firstName = document.getElementById('fname').value.trim();
            const lastName = document.getElementById('lname').value.trim();
            
            // Combine names with space if both exist
            let fullName = firstName;
            if (firstName && lastName) {
                fullName += ' ' + lastName;
            } else if (lastName) {
                fullName = lastName;
            }
            
            // Show alert with full name
            alert(fullName);
            
            // Prevent form submission
            return false;
        }