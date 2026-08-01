console.log("BLOG JS LOADED");

loadBlogs();

async function loadBlogs() {

    const { data, error } = await window.db
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.log(error);
        return;
    }

    const container = document.getElementById("blogContainer");

    container.innerHTML = "";

    data.forEach(blog => {

        container.innerHTML += `

<a class="post-card" href="blog-details.html?id=${blog.id}">

<div class="card-top"
style="background:linear-gradient(90deg,#3b2e2a,#231a17);">

</div>

<div class="card-body">

<span class="cat">${blog.category}</span>

<h2>${blog.title}</h2>

<p>${blog.excerpt}</p>

<div class="card-footer">

<span>

${new Date(blog.created_at).toLocaleDateString()}

</span>

<span class="read-more">

Read Article →

</span>

</div>

</div>

</a>

`;

    });

}
