// Get the chart canvas element
const ctx = document.getElementById("ammoniaCarbonChart").getContext("2d");

// Create the chart
const ammoniaCarbonChart = new Chart(ctx, {
  type: "line", // Define the chart type
  data: {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"], // X-axis labels
    datasets: [
      {
        label: "Ammonia Level (ppm)",
        data: [12, 19, 3, 5, 2, 3, 10], // Replace with real data
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        tension: 0.4, // Smooth curves
      },
      {
        label: "Carbon Monoxide Level (ppm)",
        data: [8, 11, 13, 9, 12, 7, 6], // Replace with real data
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        tension: 0.4, // Smooth curves
      },
    ],
  },
  options: {
    responsive: true,
    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: "easeOutQuad",
    //     from: 1,
    //     to: 0,
    //     loop: true,
    //   },
    // },
    plugins: {
      legend: {
        display: true,
        position: "top", // Legend position
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
          color: "#333",
        },
      },
      y: {
        title: {
          display: true,
          text: "Level (ppm)",
          color: "#333",
        },
      },
    },
  },
});
