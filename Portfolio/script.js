const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
});

// Contact button to last page 
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.conatct-me');
if (contactMeBtn) {
    contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };
}

let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backProfileBtn = document.querySelector('.back-profile');
if (backProfileBtn) {
    backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].classList.remove('turn');
                setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].style.zIndex = 10 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };
}

// open animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

// open animation go to first page
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});


// ✅ EmailJS Contact Form Handling
emailjs.init("TfxNoFiEeIsjv5y3Q");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            emailjs.send("service_zpg8y0p", "template_sdpstm1", {
                name: name,
                email: email,
                message: message,
            }).then(function () {
                alert("✅ Message sent successfully!");
                form.reset();
            }, function (error) {
                alert("❌ Failed to send message.");
                console.error("EmailJS Error:", error);
            });
        });
    }
});
