function clock(params) {
    setInterval(function() {
        let localTime = new Date();
        document.querySelector("span[data-time = hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time = minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time = seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    }, 1000);
}

clock();