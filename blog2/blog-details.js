console.log("Details JS Loaded");

document.addEventListener("DOMContentLoaded", () => {

    loadBlog();

});

async function loadBlog() {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if (!id) {

        document.body.innerHTML = `
        <h2 style="text-align:center;margin-top:100px;">
        Invalid Blog Link
        </h2>
        `;

        return;

    }

    const { data: blog, error } = await window.db

        .from("blogs")

        .select("*")

        .eq("id", id)

        .single();

    if (error || !blog) {

        console.log(error);

        document.body.innerHTML = `
        <h2 style="text-align:center;margin-top:100px;color:red;">
        Blog Not Found
        </h2>
        `;

        return;

    }

    // SEO

    document.title = blog.meta_title || blog.title;

    const metaDesc = document.querySelector('meta[name="description"]');

    if (metaDesc) {

        metaDesc.setAttribute(
            "content",
            blog.meta_description || blog.description || ""
        );

    }

    // Featured Image

    const image = document.getElementById("blogImage");

    if (image) {

        image.src = blog.image || "";

        image.alt = blog.image_alt || blog.title;

    }

    // Category

    const category = document.getElementById("blogCategory");

    if (category) {

        category.innerText = blog.category || "General";

    }

    // Title

    const title = document.getElementById("blogTitle");

    if (title) {

        title.innerText = blog.title;

    }

    // Meta

    const meta = document.getElementById("blogMeta");

    if (meta) {

        const date = new Date(blog.created_at).toLocaleDateString();

        meta.innerHTML = `
        By <strong>${blog.author}</strong>
        &nbsp; | &nbsp;
        ${date}
        `;

    }

    // Description

    const desc = document.getElementById("blogDescription");

    if (desc) {

        desc.innerText = blog.description || "";

    }

    // Content

    const content = document.getElementById("blogContent");

    if (content) {

        content.innerHTML = blog.content;

    }

}
