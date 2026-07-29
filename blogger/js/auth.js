console.log("auth.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("loginBtn");

    if (!btn) {
        console.log("Button not found");
        return;
    }

    console.log("Button Found");

    btn.onclick = async function () {

        console.log("Login Clicked");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const result = await window.supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

        console.log(result);

        if (result.error) {
            alert(result.error.message);
            return;
        }

        alert("Login Successful");

        location.href = "dashboard.html";

    };

});
