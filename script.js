function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get the first name and last name values
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;

    // Display the names in an alert box
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);

    // Display the names below the form
    document.getElementById('displayNames').textContent = `First Name: ${firstName}, Last Name: ${lastName}`;
}