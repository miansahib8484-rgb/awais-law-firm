document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM Loaded");

    const form = document.getElementById("loginForm");

    console.log(form);

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Login Button Working");

    });

});
