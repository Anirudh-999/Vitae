document.getElementById("search").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let courses = document.querySelectorAll(".course-card");

    courses.forEach((course) => {
        let title = course.querySelector("h3").innerText.toLowerCase();
        if (title.includes(filter)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
});
