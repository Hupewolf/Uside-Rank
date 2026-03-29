
let currentPage = 1;
const totalPages = 4;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageBtns = document.querySelectorAll(".page-btn");

function updatePagination() {

pageBtns.forEach(btn => {
    btn.classList.remove("active");
    if (Number(btn.dataset.page) === currentPage) {
        btn.classList.add("active");
    }
});

if (currentPage === 1) {
    prevBtn.classList.add("hidden");
} else {
    prevBtn.classList.remove("hidden");
}

if (currentPage === totalPages) {
    nextBtn.classList.add("hidden");
} else {
    nextBtn.classList.remove("hidden");
}

console.log("Đang ở trang:", currentPage);
}

pageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentPage = Number(btn.dataset.page);
        updatePagination();
    });
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

updatePagination();

document.querySelectorAll('.select').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    });
});