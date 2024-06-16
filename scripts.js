// script.js

document.getElementById('reportForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  var username = document.getElementById('username').value;
  var platform = document.getElementById('platform').value;
  var description = document.getElementById('description').value;
  var evidence = document.getElementById('evidence').value;
  
  // Create a new list item for the reported cheater
  var cheaterItem = document.createElement('li');
  cheaterItem.innerHTML = `<strong>${username}</strong> - ${platform} - ${description}`;
  
  // Append the new cheater item to the cheater list
  var cheaterList = document.getElementById('cheaterList');
  cheaterList.appendChild(cheaterItem);
  
  // Clear the form fields after submission (optional)
  document.getElementById('username').value = '';
  document.getElementById('platform').value = '';
  document.getElementById('description').value = '';
  document.getElementById('evidence').value = '';
  
  // Optionally, you can save the reported data to a backend or storage here
  
  // Inform user that report was submitted successfully (optional)
  alert('Report submitted successfully!');
});
