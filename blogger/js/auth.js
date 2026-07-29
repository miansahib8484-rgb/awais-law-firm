document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    if (!loginBtn) return;

    loginBtn.addEventListener("click", loginUser);

});

async function loginUser() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!email || !password) {
        message.innerText = "Please enter email and password.";
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        message.innerText = error.message;
        return;
    }

    message.style.color = "green";
    message.innerText = "Login Successful";

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1000);

}
