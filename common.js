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

// -----------------------------------------

function toggleReserve() {
  const reserveButton = document.getElementById("reserveButton");
  if (reserveButton.classList.contains("btn-neutral")) {
    reserveButton.classList.remove("btn-neutral", "text-white");
    reserveButton.classList.add("btn-warning", "text-white");
    reserveButton.textContent = "Stop Reserve to Daily Tank";
  } else {
    reserveButton.classList.add("btn-neutral", "text-white");
    reserveButton.classList.remove("btn-warning", "text-white");
    reserveButton.textContent = "Reserve to Daily Tank";
  }
}

function toggleFeed() {
  const feedButton = document.getElementById("feedButton");
  if (feedButton.classList.contains("btn-neutral")) {
    feedButton.classList.remove("btn-neutral", "text-white");
    feedButton.classList.add("btn-warning", "text-white");
    feedButton.textContent = "Stop Feed";
  } else {
    feedButton.classList.add("btn-neutral", "text-white");
    feedButton.classList.remove("btn-warning", "text-white");
    feedButton.textContent = "Feed Now";
  }
}
