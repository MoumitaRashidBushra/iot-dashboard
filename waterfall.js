// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("foodLevelChart").getContext("2d");

  // Initialize the Doughnut Chart
  new Chart(ctx, {
    type: "doughnut", // Chart type
    data: {
      labels: [
        "Food Reserve(40%)",
        "Food Tank 1(20%)",
        "Food Tank 2(15%)",
        "Food Tank 3(15%)",
        "Food Tank 4(10%)",
      ], // Labels
      datasets: [
        {
          label: "Food Levels",
          data: [40, 20, 15, 15, 10], // Values for each section
          backgroundColor: [
            "#FF6384", // Food Reserve
            "#36A2EB", // Food Tank 1
            "#FFCE56", // Food Tank 2
            "#4BC0C0", // Food Tank 3
            "#9966FF", // Food Tank 4
          ],
          hoverOffset: 10, // Hover effect offset
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Maintain the aspect ratio
      plugins: {
        legend: {
          display: true,
          position: "top", // Legend position
        },
      },
      animation: {
        duration: 1500, // Animation duration in milliseconds
        easing: "easeInOutQuad", // Smooth animation effect
      },
    },
  });
});
