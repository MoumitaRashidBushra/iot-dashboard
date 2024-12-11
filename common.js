// --------------------------------------------------

// Highlight the active sidebar link based on the current URL
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu a").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add(
      "bg-blue-500",
      "text-white",
      "rounded-md",
      "shadow-md",
      "hover:bg-blue-600"
    );
  } else {
    link.classList.add("hover:bg-gray-200"); // Hover effect for inactive links
  }
});
