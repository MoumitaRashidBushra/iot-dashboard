// const ctx = document.getElementById("foodLevelChart1").getContext("2d");

// new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     labels: ["Food Reserve 1", "Food Reserve 2"],
//     datasets: [
//       {
//         label: "Food Level",
//         data: [50, 50], // Example data values for reserves
//         backgroundColor: ["#4CAF50", "#FF5722"], // Colors for each section
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom", // Position of the legend
//       },
//     },
//   },
// });
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("foodLevelChart1").getContext("2d");

  // Initialize the Doughnut Chart
  new Chart(ctx, {
    type: "doughnut", // Chart type
    data: {
      labels: ["Food Reserve 1", "Food Reserve 2"], // Labels
      datasets: [
        {
          label: "Food Level",
          data: [37, 63], // Example data values for reserves
          backgroundColor: ["#2E8B57", "#4682B4"], // Colors for each section
          borderWidth: 1,
          hoverOffset: 10,
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
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("foodLevelChart2").getContext("2d");

  // Initialize the Doughnut Chart
  new Chart(ctx, {
    type: "doughnut", // Chart type
    data: {
      labels: ["Food Tank 1", "Food Tank 2", "Food Tank 3", "Food Tank 4"], // Labels
      datasets: [
        {
          label: "Food Levels",
          data: [30, 25, 25, 20], // Values for each section
          backgroundColor: [
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
