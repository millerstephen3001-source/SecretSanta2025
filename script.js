const allNames = [
    "Yulijah","JJ","David","Christian","Jon",
    "Brandon","Mark","Jake","Chase","Stephen"
];

let availableNames = [...allNames];
let drawnLog = JSON.parse(localStorage.getItem("santaLog") || "{}");

const wheel = document.getElementById("wheel");
const sliceAngle = 360 / allNames.length;

allNames.forEach((name, i) => {
    const slice = document.createElement("div");
    slice.className = "slice";
    slice.style.background = `hsl(${i * 36}, 80%, 55%)`;
    slice.style.transform = 
        `rotate(${sliceAngle*i}deg) skewY(${90-sliceAngle}deg)`;

    slice.innerHTML =
        `<div style="transform: skewY(${-(90-sliceAngle)}deg) rotate(${-sliceAngle/2}deg); width:200%; text-align:center;">${name}</div>`;

    wheel.appendChild(slice);
});

let lastRotation = 0;

function spinWheel() {
    const yourName = document.getElementById("yourName").value;

    if (!yourName) {
        alert("Pick your name first.");
        return;
    }

    if (drawnLog[yourName]) {
        document.getElementById("result").innerHTML =
            "❌ You already spun!";
        return;
    }

    const possible = availableNames.filter(n => n !== yourName);

    const chosen = possible[Math.floor(Math.random()*possible.length)];

    availableNames = availableNames.filter(n => n !== chosen);

    drawnLog[yourName] = true;
    localStorage.setItem("santaLog", JSON.stringify(drawnLog));

    const index = allNames.indexOf(chosen);
    const target = 360*6 + (360 - (index*sliceAngle + sliceAngle/2));

    lastRotation += target;
    wheel.style.transform = `rotate(${lastRotation}deg)`;

    setTimeout(() => {
        document.getElementById("result").innerHTML =
            `🎁 <b>You got: ${chosen}</b> 🎁`;
    }, 4200);
}
