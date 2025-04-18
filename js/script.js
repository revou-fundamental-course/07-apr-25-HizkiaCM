let yourName = null;

// Loop sampai pengguna memasukkan nama
while (!yourName) {
    yourName = prompt("What is your name?");
    
    // Jika user menekan cancel, tetap minta input
    if (yourName === null || yourName.trim() === "") {
        alert("Name is required to continue. Please enter your name.");
        yourName = null; // Reset untuk meminta lagi
    }
}

// Setelah mendapatkan nama yang valid
const welcomeEl = document.getElementById("welcome-message");
if (welcomeEl) {
    welcomeEl.innerText = `Hi ${yourName}, Welcome to my website`;
}


    const portfolioData = [
        {
            title: "Project 1",
            description: "Description for project 1.",
            image: "assets/antrian.png",
            link: "https://hizkiacm.github.io/Antrian/"
        },
        {
            title: "Project 2",
            description: "Description for project 2.",
            image: "assets/data pegawai.png",
            link: "https://hizkiacm.github.io/Data-Pegawai/"
        },
        {
            title: "Project 3",
            description: "Description for project 3.",
            image: "assets/web des.png",
            link: "https://revou-fundamental-course.github.io/07-apr-25-HizkiaCM/"
        },

    ];

    // Element container untuk cards
    const portfolioContainer = document.getElementById("portfolio-cards-container");

    // Generate cards
    portfolioData.forEach(project => {
        const card = document.createElement("div");
        card.className = "portfolio-card";

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="card-image">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${project.description}</p>
            <a href="${project.link}" class="card-link" target="_blank">View Project</a>
        `;

        portfolioContainer.appendChild(card);
    });

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const message = document.getElementById("message").value;
        const timeNow = new Date().toString();

        document.getElementById("result-name").innerText = name;
        document.getElementById("result-dob").innerText = dob;
        document.getElementById("result-gender").innerText = gender;
        document.getElementById("result-message").innerText = message;
        document.getElementById("current-time").innerText = timeNow;
    });

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.banner-slide');

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";

    // Auto-advance
    setTimeout(() => plusSlides(1), 10000);
}
