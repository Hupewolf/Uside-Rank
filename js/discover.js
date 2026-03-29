
let currentPage = 1;
const totalPages = 4;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageBtns = document.querySelectorAll(".page-btn");

function updatePagination() {
// Active page
pageBtns.forEach(btn => {
    btn.classList.remove("active");
    if (Number(btn.dataset.page) === currentPage) {
        btn.classList.add("active");
    }
});

// Ẩn nút trái khi page = 1
if (currentPage === 1) {
    prevBtn.classList.add("hidden");
} else {
    prevBtn.classList.remove("hidden");
}

// Ẩn nút phải khi page cuối
if (currentPage === totalPages) {
    nextBtn.classList.add("hidden");
} else {
    nextBtn.classList.remove("hidden");
}

// TODO: gọi api / render card tại đây
console.log("Đang ở trang:", currentPage);
}

// Click số trang
pageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentPage = Number(btn.dataset.page);
        updatePagination();
    });
});

// Click trái
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

// Click phải
nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

// Init
updatePagination();
