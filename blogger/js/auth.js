// ======================================
// Blogger CMS - Login
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        message.innerHTML = "";
        message.className = "";

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!email || !password) {
            message.classList.add("error");
            message.innerHTML = "Please enter email and password.";
            return;
        }

        try {

            const { data, error } =
                await window.supabase.auth.signInWithPassword({

                    email: email,
                    password: password

                });

            if (error) {

                message.classList.add("error");
                message.innerHTML = error.message;
                return;

            }

            message.classList.add("success");
            message.innerHTML = "Login Successful...";

            setTimeout(() => {

                window.location.href = "dashboard.html";

            }, 1000);

        }
        catch (err) {

            message.classList.add("error");
            message.innerHTML = err.message;

        }

    });

});
