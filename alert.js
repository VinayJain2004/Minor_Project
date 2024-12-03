 // Initialize map
 var map = L.map('map').setView([23.2599, 77.4126], 15); // Default center: Bhopal
 var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 });
 osm.addTo(map);

 // Predefined unsafe zones
 const unsafeZones = [
     { lat: 23.2599, lng: 77.4126 }, // Example: Center of Bhopal
     { lat: 23.2558, lng: 77.3984 },  // Example: Another location in Bhopal
     { lat: 23.2226816, lng: 77.447168},
    {lat: 23.315417, lng: 77.362446}
 ];

 let lastSafeZonePopup = false; // Tracks whether safe zone popup has been shown
 let inUnsafeZone = false; // Tracks whether the user is currently in an unsafe zone
 let unsafeTimeout = null; // Timeout for 1-minute delay in unsafe zone

 const modal = document.getElementById('alertModal');
 const yesButton = document.querySelector('#modalContent .yes');
 const noButton = document.querySelector('#modalContent .no');

 // Check geolocation support
 if (!navigator.geolocation) {
     alert("Geolocation is not supported by your browser.");
 } else {
     setInterval(() => {
         navigator.geolocation.getCurrentPosition(updatePosition, handleError);
     }, 5000); // Update every 5 seconds
 }

 var marker, circle;

 // Update user position
 function updatePosition(position) {
     const lat = position.coords.latitude;
     const lng = position.coords.longitude;
     const accuracy = position.coords.accuracy;

     if (!marker) {
         marker = L.marker([lat, lng]).addTo(map);
         circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
         map.setView([lat, lng], 15);
     } else {
         marker.setLatLng([lat, lng]);
         circle.setLatLng([lat, lng]).setRadius(accuracy);
     }

     // Check zone status
     if (isInUnsafeZone(lat, lng)) {
         handleUnsafeZone(lat, lng);
     } else {
         handleSafeZone();
     }
 }

 // Check if the user is in an unsafe zone
 function isInUnsafeZone(lat, lng) {
     return unsafeZones.some(zone =>
         Math.abs(zone.lat - lat) < 0.001 && Math.abs(zone.lng - lng) < 0.001
     );
 }

 // Handle user entering an unsafe zone
 function handleUnsafeZone(lat, lng) {
     if (!inUnsafeZone) {
         inUnsafeZone = true;
         // Wait for 1 minute before showing popup
         unsafeTimeout = setTimeout(() => {
             showModal(lat, lng);
         }, 60000); // 1 minute = 60000 ms
     }
 }

 // Handle user entering a safe zone
 function handleSafeZone() {
     if (inUnsafeZone) {
         inUnsafeZone = false;
         clearTimeout(unsafeTimeout); // Clear the unsafe zone timer if it exists
     }
     if (!lastSafeZonePopup) {
         lastSafeZonePopup = true; // Show safe zone popup only once
         alert("You are in a safe zone.");
     }
 }

 // Show custom modal
 function showModal(lat, lng) {
     modal.style.display = 'block';
     yesButton.onclick = () => {
         modal.style.display = 'none';
         alert("Thank you for confirming your safety.");
     };
     noButton.onclick = () => {
         modal.style.display = 'none';
         alert("ALERT SENT: User reported unsafe at Latitude: " + lat + ", Longitude: " + lng);
         sendToServer(lat, lng);
     };
 }

 // Handle errors from geolocation API
 function handleError(error) {
     alert(`Geolocation error: ${error.message}`);
 }

 // Send data to server
 function sendToServer(lat, lng) {
     console.log(`ALERT SENT TO SERVER: Latitude: ${lat}, Longitude: ${lng}`);
 }

 // Send data to server
function sendToServer(lat, lng) {
    const serverUrl = "https://minor-backend-l8uw.onrender.com/alert";
    const userSaved = JSON.parse(localStorage.getItem("loggedUser")) // Replace with your actual server URL
    const payload = {
        message: `ALERT: User reported unsafe at Latitude: ${lat}, Longitude: ${lng}`,
        name: userSaved.name,
        email: userSaved.email,
        mobile: userSaved.mobile,
        dob: userSaved.dob,
        emergencyContactName: userSaved.emergencyContactName,
        emergencyContactMobile: userSaved.emergencyContactMobile
    };

    fetch(serverUrl, {
        method: "POST", // Use POST to send data
        headers: {
            "Content-Type": "application/json" // Specify JSON content type
        },
        body: JSON.stringify(payload) // Convert data to JSON
    })
    .then(response => {
        if (response.ok) {
            alert("Alert successfully sent to the server.");
        } else {
            alert(`Failed to send alert. Server responded with status: ${response.status}`);
        }
    })
    .catch(error => {
        alert(`Error sending alert to the server: ${error.message}`);
    });

}
