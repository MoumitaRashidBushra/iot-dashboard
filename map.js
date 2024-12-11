// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("waterQualityChart").getContext("2d");

  // Bar Chart Initialization
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "pH",
        "TDS (mg/L)",
        "Temperature (°C)",
        "Turbidity (NTU)",
        "Ammonia (mg/L)",
        "CO (mg/L)",
      ],
      datasets: [
        {
          label: "Standard Value",
          data: [8.5, 500, 30, 30, 0.02, 0], // Standard values
          backgroundColor: "#4CAF50", // Green
          borderWidth: 1,
        },
        {
          label: "Dangerous Value",
          data: [9.0, 1500, 35, 50, 0.05, 1], // Dangerous values
          backgroundColor: "#F44336", // Red
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Parameters",
          },
        },
        y: {
          title: {
            display: true,
            text: "Values (varied units)",
          },
          beginAtZero: true,
          max: 1600, // Maximum value to cover all parameters
          ticks: {
            callback: function (value) {
              // Adjust label precision for smaller values
              return value >= 1 ? value : value.toFixed(2);
            },
          },
        },
      },
      animation: {
        duration: 1500,
        easing: "easeInOutQuad",
      },
    },
  });
});
