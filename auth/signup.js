document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const createAccount = document.getElementById("createAccount");
  const initialBg = createAccount.style.backgroundColor;
  createAccount.style.backgroundColor = "#ccc";

  const name = document.getElementById("name").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const dob = document.getElementById('dob').value;
  const mobile = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const emergencyContactName = document.getElementById("emergencyContactName").value;
  const emergencyContactMobile = document.getElementById("emergencyContactMobile").value;
  const password = document.getElementById("password").value;

  console.log({name, gender, dob, mobile, email, address, emergencyContactName, emergencyContactMobile});

  try {
    const response = await fetch("https://minor-backend-l8uw.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mobile, email, password, gender, dob, address, emergencyContactName, emergencyContactMobile }),
    });

    const data = await response.json();

    document.getElementById("signupMessage").style.display = "block";
    
    if (response.ok) {
      document.getElementById("signupMessage").innerText = data.message;
      // Redirect to user dashboard after successful signup immediately
        window.location.href = "dashboard.html";
        window.localStorage.setItem("isLoggedin", true);
        window.localStorage.setItem("loggedUser", JSON.stringify({name, mobile, email, gender, dob, address, emergencyContactName, emergencyContactMobile}));

    } else {
      document.getElementById("signupMessage").innerText = " * " + data.message || "Signup failed";
    }
  } catch (err) {
    document.getElementById("signupMessage").innerText = " * " + "An error occurred";
  }

  createAccount.style.backgroundColor = initialBg;
});