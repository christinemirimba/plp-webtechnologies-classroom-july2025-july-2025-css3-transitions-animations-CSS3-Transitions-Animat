// Global variable (accessible everywhere)
let globalCounter = 0;

// Function with parameter + return value
function addNumbers(a, b) {
  let result = a + b; // local scope
  return result;
}

// Function to toggle animation on the box
function toggleBoxAnimation(element) {
  element.classList.toggle("active");
}

// Function to calculate clicks and show scope demo
function incrementCounter() {
  globalCounter++; // modifies global variable
  return globalCounter;
}

/* Combining CSS + JavaScript */
document.addEventListener("DOMContentLoaded", () => {
  const animatedBox = document.querySelector(".animated-box");
  const animateBtn = document.getElementById("animateBtn");
  const modalBtn = document.getElementById("modalBtn");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  // Trigger box animation with JS
  animateBtn.addEventListener("click", () => {
    toggleBoxAnimation(animatedBox);

    // Call function with parameters + log result
    console.log("Sum of 5 + 3 =", addNumbers(5, 3));
    console.log("Click count =", incrementCounter());
  });

  // Open modal
  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
