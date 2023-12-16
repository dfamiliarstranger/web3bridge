// JavaScript code goes here

// Sample data structure
let contacts = [];

function addContact() {
  // Add contact to the list
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Validate inputs using Regular Expressions (add your own validation)
  const validationMessage = validateInput(name, email, phone);
  if (validationMessage) {
    displayErrorMessage(validationMessage);
    return;
  }

  const contact = { name, email, phone };
  contacts.push(contact);

  // Clear the form
  document.getElementById('contactForm').reset();

  // Update the contact list
  updateContactList();
}

function validateInput(name, email, phone) {
  if (!name) {
    return 'Name is required.';
  }

  if (!email) {
    return 'Email is required.';
  }

  if (!isValidEmail(email)) {
    return 'Invalid email format.';
  }

  if (!phone) {
    return 'Phone is required.';
  }

  if (!isValidPhone(phone)) {
    return 'Invalid phone number format.';
  }

  // All validations passed
  return null;
}

function isValidEmail(email) {
  // Implement your email validation logic using Regular Expressions or any other method
  // For simplicity, this example only checks for the presence of '@'
  return email.includes('@');
}

function isValidPhone(phone) {
  // Implement your phone validation logic using Regular Expressions or any other method
  // For simplicity, this example checks for digits and a minimum length
  return /^\d{6,}$/.test(phone);
}

function displayErrorMessage(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;

  // Clear the error message after a few seconds (optional)
  setTimeout(() => {
    errorDiv.textContent = '';
  }, 3000);
}

function updateContactList() {
  const contactListDiv = document.getElementById('contactList');
  contactListDiv.innerHTML = '';

  // Display contacts with options to edit and delete
  contacts.forEach((contact, index) => {
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <button onclick="editContact(${index})">Edit</button>
      <button onclick="deleteContact(${index})">Delete</button>
    `;
    contactListDiv.appendChild(contactDiv);
  });
}


function editContact(index) {
    // Retrieve the contact at the specified index
    const contactToEdit = contacts[index];
  
    // Prompt the user to update contact details
    const updatedName = prompt('Enter updated name:', contactToEdit.name);
    const updatedEmail = prompt('Enter updated email:', contactToEdit.email);
    const updatedPhone = prompt('Enter updated phone:', contactToEdit.phone);
  
    // Update the contact details
    if (updatedName && updatedEmail && updatedPhone) {
      contacts[index] = { name: updatedName, email: updatedEmail, phone: updatedPhone };
      // Update the contact list after editing
      updateContactList();
    } else {
      alert('Invalid input. Contact not updated.');
    }
  }
  
  function deleteContact(index) {
    // Confirm with the user before deleting
    const confirmDelete = confirm('Are you sure you want to delete this contact?');
  
    if (confirmDelete) {
      // Remove the contact from the array
      contacts.splice(index, 1);
      // Update the contact list after deletion
      updateContactList();
    }
  }

// The rest of the functions remain unchanged
