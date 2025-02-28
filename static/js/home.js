document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".cta-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("This feature is coming soon!");
        });
    });
});
