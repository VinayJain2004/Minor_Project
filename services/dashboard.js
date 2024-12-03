document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('loggedUser')
    window.location.href = 'index.html';
});

document.getElementById('saveProfile').addEventListener('click', async () => {

    const initalBg = document.getElementById('saveProfile').style.backgroundColor;
    document.getElementById('saveProfile').style.backgroundColor = '#ccc';

    const updatedName = document.getElementById("updatedName").value;
    const updatedEmail = document.getElementById("updatedEmail").value;
    const updatedMobile = document.getElementById("updatedMobile").value;
    const updatedAddress = document.getElementById("updatedAddress").value;
    const updatedEmergencyContactName = document.getElementById("updatedEmergencyContactName").value;
    const updatedEmergencyContactMobile = document.getElementById("updatedEmergencyContactMobile").value;

    try {
      const response = await fetch("https://minor-backend-l8uw.onrender.com/updateUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updatedName, updatedMobile, updatedEmail, updatedAddress, updatedEmergencyContactName, updatedEmergencyContactMobile})
      });

      if(response.ok) {
        alert("Profile updated successfully");
      }

  } catch (err) {
    document.getElementById("profileMessage").innerText = " * " + "An error occurred";
  }

  document.getElementById('saveProfile').style.backgroundColor = initalBg;
    
});

const isLoggedin = localStorage.getItem('isLoggedin');
if(isLoggedin) {
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  const updatedName = document.getElementById("updatedName");
  const updatedEmail = document.getElementById("updatedEmail");
  const updatedMobile = document.getElementById("updatedMobile");
  const updatedAddress = document.getElementById("updatedAddress");
  const updatedEmergencyContactName = document.getElementById("updatedEmergencyContactName");
  const updatedEmergencyContactMobile = document.getElementById("updatedEmergencyContactMobile");

  updatedName.placeholder = user.name;
  updatedEmail.placeholder = user.email;
  updatedMobile.placeholder = user.mobile;
  updatedAddress.placeholder = user.address;
  updatedEmergencyContactName.placeholder = user.emergencyContactName;
  updatedEmergencyContactMobile.placeholder = user.emergencyContactMobile;
}