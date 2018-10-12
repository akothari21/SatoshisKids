// Initialize Firebase (ADD YOUR OWN DATA)

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

messagesRef.on("child_added", snap=>{

  var name = snap.child("name").val();
  var email = snap.child("email").val();
  var company = snap.child("company").val();
  var message = snap.child("message").val();
  var phone = snap.child("phone").val();
  var row = document.getElementById('tablebody').insertRow(0);
  row.insertCell(0).innerHTML=name;
  row.insertCell(1).innerHTML=company;
  row.insertCell(2).innerHTML=phone;
  row.insertCell(3).innerHTML=message;
  row.insertCell(4).innerHTML=email;
})

function submitForm(){

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

    return false;
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}