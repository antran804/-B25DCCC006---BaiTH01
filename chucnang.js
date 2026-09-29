
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("input", function () {
    charCount.textContent = message.value.length + "/500 ký tự";
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const content = message.value.trim();

    if (name.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Email không hợp lệ!");
    } else if (content.length < 10) {
        alert("Nội dung phải có ít nhất 10 ký tự!");
    } else {
        alert("Thông tin hợp lệ!");
        form.reset();
        charCount.textContent = "0/500 ký tự";
    }
});


const search = document.getElementById("projectSearch");
const filter = document.getElementById("projectFilter");
const projects = document.querySelectorAll(".project-card");
const count = document.getElementById("projectCount");
const noProjects = document.getElementById("noProjects");

function filterProjects() {
    let total = 0;

    projects.forEach(function (project) {
        const keyword = search.value.toLowerCase();
        const text = project.textContent.toLowerCase();
        const category = filter.value;

        const matchText = text.includes(keyword);
        const matchCategory =
            category === "all" ||
            project.dataset.category === category;

        if (matchText && matchCategory) {
            project.hidden = false;
            total++;
        } else {
            project.hidden = true;
        }
    });

    count.textContent = "Số dự án: " + total;
    noProjects.hidden = total !== 0;
}

search.addEventListener("input", filterProjects);
filter.addEventListener("change", filterProjects);

filterProjects();


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.getElementById("currentYear").textContent =
    new Date().getFullYear();