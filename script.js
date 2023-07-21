class Chart {
    constructor(height, background, hasBorder) {
        this.height = height;
        this.background = background;
        this.hasBorder = hasBorder;
    }
}

const chartContent = new Chart("300px", "red", true);
const chartContent2 = new Chart("200px", "green", true);
const chartContent3 = new Chart("259px", "blue", false);




function renderChart(charData) {
    const chartsContainer = document.querySelector(".charts-container");
    const chart = document.createElement("div");
    chart.classList.add("chart");
    chart.style.height = charData.height;
    chart.style.backgroundColor = charData.background;
    if (charData.hasBorder) {
        chart.style.border = "2px solid black";
    }
    chartsContainer.appendChild(chart);
}

renderChart(chartContent);
renderChart(chartContent2);
renderChart(chartContent3);
