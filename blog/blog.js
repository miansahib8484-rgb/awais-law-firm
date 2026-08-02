console.log("BLOG JS LOADED");

document.addEventListener("DOMContentLoaded", () => {

    loadBlogs();

});

async function loadBlogs() {

    const container = document.getElementById("blogContainer");

    container.innerHTML = "<h2 style='text-align:center'>Loading Blogs...</h2>";

    const { data, error } = await window.db
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {

        console.log(error);

        container.innerHTML = `
        <h2 style="text-align:center;color:red;">
        Failed to Load Blogs
        </h2>
        `;

        return;

    }

    if (data.length == 0) {

        container.innerHTML = `
        <h2 style="text-align:center;">
        No Blogs Found
        </h2>
        `;

        return;

    }

    container.innerHTML = "";

    data.forEach(blog => {

        const date = new Date(blog.created_at)
        .toLocaleDateString();

        const card = `

<a class="post-card"
href="/blog/blog-details.html?id=${blog.id}"
<div class="card-top"></div>

<div class="card-body">

<span class="cat">

${blog.category || "Legal"}

</span>

<h2>

${blog.title}

</h2>

<p>

${blog.excerpt || blog.content.substring(0,160)}...

</p>

<div class="card-footer">

<span>

${date}

</span>

<span class="read-more">

Read Article →

</span>

</div>

</div>

</a>

`;

        container.innerHTML += card;

    });

}
