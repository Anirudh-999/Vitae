document.getElementById("search").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let blogPosts = document.querySelectorAll(".blog-card");

    blogPosts.forEach((post) => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        if (title.includes(filter)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}); 