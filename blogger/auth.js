document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", loginUser);

});

async function loginUser(e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    message.innerHTML = "";

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {

        message.style.color = "red";
        message.innerHTML = error.message;
        return;

    }

    message.style.color = "green";
    message.innerHTML = "Login Successful";

    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 1000);

}
