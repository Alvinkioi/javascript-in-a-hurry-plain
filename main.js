function clock(params) {
    setInterval(function() {
        let localTime = new Date();
        document.querySelector("span[data-time = hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time = minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time = seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    }, 1000);
}
function greeting(params) {
    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    document.querySelector("span[data-time = greeting]").textContent = greeting;
    
}

greeting();
clock();