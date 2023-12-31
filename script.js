class Chart {
    constructor(height, background, hasBorder) {
        this.height = height;
        this.background = background;
        this.hasBorder = hasBorder;
    }
}



class ChartClikable extends Chart {
    #isClikable = true;
    handleClick() {
        alert("You cliked on thr Clikable Chart");
    }
    getIsClikable() {
        return this.#isClikable;
    }
}

class ChartClikableSecond extends ChartClikable {
    handleClick() {
        alert("You cliked on Clikable Second Chart")
    }
}

const chartContent = new ChartClikable("300px", "red", true);
const chartContent2 = new ChartClikableSecond("200px", "green", true);
const chartContent3 = new ChartClikable("259px", "blue", false);




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
    if (charData.getIsClikable()) {
        chart.addEventListener("click", charData.handleClick)
    }
}

renderChart(chartContent);
renderChart(chartContent2);
renderChart(chartContent3);

// factory / constructor
function createUsers(name, age, sex) {
    return {
        name,
        age,
        sex
    };
}

const user1 = createUsers("Nikolas", "18", "male");

console.log(user1);
// constructer
function CreateUsers(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const user12 = new CreateUsers("Nikolas", "18", "male");

console.log(user12);