function calculateArea() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let area = length * width;
    document.getElementById("area-result").textContent = "Area: " + area;
}

let isModalOpen = false;

function toggleModal() {
    let modal = document.getElementById("modal");
    isModalOpen = !isModalOpen;
    modal.style.display = isModalOpen ? "block" : "none";
}

function triggerAnimation() {
    let box = document.querySelector(".box");
    box.classList.add("animated");
    setTimeout(() => box.classList.remove("animated"), 1000);
}
