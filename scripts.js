// scripts.js
document.getElementById('reportForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form submission logic here (e.g., fetch API to send data to backend or store locally).
  alert('Report submitted successfully!');
  // Reset form if needed
  this.reset();
});
