
const weatherAPIKey = "f76693de5c51ceb886c717bf7cb2d979";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`;

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];
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

//weather section
function weatherHandler(){
    navigator.geolocation.getCurrentPosition( position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let url = weatherAPIURL
            .replace("{lat}",latitude)
            .replace("{lon}",longitude)
            .replace("{API key}",weatherAPIKey);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const condition = data.weather[0].description;
            const location = data.name;
            const temperature = data.main.temp;
    
            let celsiusText = `The weather is ${condition} in ${location} and it's ${temperature.toFixed(1)}°C outside.`;
            let fahrText = `The weather is ${condition} in ${location} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;
            
            document.querySelector("p#weather").innerHTML = celsiusText;
            
            // Temperature Switch
            
            document.querySelector(".weather-group").addEventListener("click", function(e){
            
                if (e.target.id == "celsius") {
                    document.querySelector("p#weather").innerHTML = celsiusText;
                } else if (e.target.id == "fahr") {
                    document.querySelector("p#weather").innerHTML = fahrText;
                }
            
            });
    
        }).catch((err => {
            document.querySelector("p#weather").innerHTML = "Unable to get the weather info. Try again later.";
        }));
        
    });
}
//converting temperature
function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

// Gallery Section

function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");
    
    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;
    
    galleryImages.forEach(function(image, index){
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;
    
        thumb.addEventListener("click", function(e){
            let selectedIndex = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;
            thumbnails.querySelectorAll("img").forEach(function(img){
                img.dataset.selected = false;
            });
            e.target.dataset.selected = true;
    
        });
    
        thumbnails.appendChild(thumb);
    });
}



greetingHandler();
clockHandler();
weatherHandler();
celsiusToFahr();

