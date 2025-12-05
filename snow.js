document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 50; i++) {
        let snow = document.createElement("div");
        snow.className = "snowflake";
        snow.style.left = Math.random()*100 + "vw";
        snow.style.animationDuration = (3 + Math.random()*5) + "s";
        snow.style.opacity = Math.random();
        snow.style.fontSize = (10 + Math.random()*20) + "px";
        snow.innerHTML = "❄️";
        document.body.appendChild(snow);
    }
});
