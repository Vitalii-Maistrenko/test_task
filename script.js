function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const generateRandomData = () =>
    Array.from({ length: 5 }, () => ({
      x: Math.floor(Math.random() * 7),
      y: Math.floor(Math.random() * 20),
    }));

  const chartData = {
    labels: ["8 Feb", "15 Feb", "22 Feb", "1 Mar", "8 Mar"],
    datasets: [
      {
        data: generateRandomData(),
        backgroundColor: "rgba(21, 227, 181, 0.10)",
        borderColor: "rgba(21, 227, 181, 1)",
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
        ticks: {
          align: "end",
          reverse: true,
        },
      },
      y: {
        position: "right",
        ticks: {
          align: "bottom",
        },
      },
    },
    animation: true, // Вимкнення анімації при оновленні графіка
  };

  myChart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: options,
  });

  // Додавання обробників подій для кнопки
  const updateChartBtn = document.getElementById("updateChartBtn");
  updateChartBtn.addEventListener("click", updateChart);
});

document.addEventListener("DOMContentLoaded", function () {
  new Chart("speedometerChart", {
    type: "doughnut",
    plugins: [
      {
        afterDraw: (chart) => {
          const needleValue = chart.config.data.datasets[0].needleValue;
          const dataTotal = chart.config.data.datasets[0].data.reduce(
            (a, b) => a + b,
            0
          );
          const angle = Math.PI + (1 / dataTotal) * needleValue * Math.PI;
          const ctx = chart.ctx;
          const cw = chart.canvas.offsetWidth;
          const ch = chart.canvas.offsetHeight;
          const cx = cw / 2;
          const cy = ch / 1.2;

          const arrowSVG = `
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="#C4C4C4">
            <path d="M12.551 19.4312C9.96266 22.1719 5.64255 22.2955 2.90179 19.7071C0.161033 17.1187 0.0374991 12.7986 2.62587 10.0579C4.33287 8.25037 12.7752 3.63476 18.3267 0.701023C19.9878 -0.176779 21.7768 1.5128 20.9954 3.2213C18.3837 8.93136 14.258 17.6237 12.551 19.4312Z" fill="#C4C4C4"/>
          </svg>
        `;

          const img = new Image();
          img.src = "data:image/svg+xml," + encodeURIComponent(arrowSVG);

          img.onload = () => {
            ctx.drawImage(img, cx - 11, cy - 11, 22, 22);
          };
        },
      },
    ],
    data: {
      labels: [],
      datasets: [
        {
          data: [35, 35, 35, 35, 35],
          needleValue: 2,
          backgroundColor: [
            "#F6544C",
            "rgba(246, 84, 76, 0.50)",
            "#323438",
            "rgba(21, 227, 181, 0.50)",
            "#15E3B5",
          ],
        },
      ],
    },
    options: {
      responsive: false,
      aspectRatio: 2,
      layout: {
        padding: {
          bottom: 3,
        },
      },
      rotation: -90,
      cutout: "85%",
      circumference: 180,
      legend: {
        display: false,
      },
      animation: {
        animateRotate: false,
        animateScale: false,
      },
      elements: {
        arc: {
          borderWidth: 0,
        },
      },
    },
  });
});

function showContent(tab) {
  document.querySelectorAll(".content").forEach((content) => {
    content.style.display = "none";
  });

  document.getElementById(tab + "Content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("showMoreButton");
  const additionalContent = document.getElementById("additionalContent");

  showMoreButton.addEventListener("click", function () {
    if (
      additionalContent.style.display === "none" ||
      additionalContent.style.display === ""
    ) {
      additionalContent.style.display = "block";
      showMoreButton.textContent = "Show Less";
    } else {
      additionalContent.style.display = "none";
      showMoreButton.textContent = "Show More";
    }
  });
});
