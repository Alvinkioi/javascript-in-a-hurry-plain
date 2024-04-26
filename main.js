
const weatherAPIKey = "f76693de5c51ceb886c717bf7cb2d979";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`;


// Greeting Section

function greetingHandler() {
    let currentHour = new Date().getHours();
    let greetingText;
    
    if (currentHour < 12) {
        greetingText = "Good morning!";
    } else if (currentHour < 19) {
        greetingText = "Good afternoon!";
    } else if (currentHour < 24) {
        greetingText = "Good evening!";
    } else {
        greetingText = "Welcome!";
    }
    
    document.querySelector("#greeting").innerHTML = greetingText;


}

// Clock Section
function clockHandler() {
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    },1000);
}






greetingHandler();
clockHandler();

