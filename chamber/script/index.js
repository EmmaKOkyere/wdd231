const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const weatherSection = document.getElementById('weather-section');
const spotlightSection = document.getElementById('spotlight-section');
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const chamberLocation = 'Timbuktu,Mali'; // Update as necessary

async function getWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chamberLocation}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherSection.innerHTML = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;

        await getForecastData();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getForecastData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${chamberLocation}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        let forecastHTML = '<h3>3-Day Forecast:</h3>';
        
        for (let i = 0; i < 3; i++) {
            const day = data.list[i * 8]; // Get the 3-day forecast (every 8th entry)
            forecastHTML += `
                <p>Day ${i + 1}: ${day.main.temp}°C - ${day.weather[0].description}</p>
            `;
        }
        weatherSection.innerHTML += forecastHTML;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

async function getChamberSpotlights() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const goldOrSilverMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');

    // Randomly select 2 or 3 members
    const selectedMembers = [];
    while (selectedMembers.length < 2 && goldOrSilverMembers.length) {
        const randomIndex = Math.floor(Math.random() * goldOrSilverMembers.length);
        selectedMembers.push(goldOrSilverMembers[randomIndex]);
        goldOrSilverMembers.splice(randomIndex, 1); // Remove to avoid duplicates
    }

    selectedMembers.forEach(member => {
        const memberHTML = `
            <div class="spotlight-card">
                <h4>${member.name}</h4>
                <img src="${member.logo}" alt="${member.name} logo">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p><a href="${member.website}">Visit Website</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `;
        spotlightSection.innerHTML += memberHTML;
    });
}

// Initialize functions
getWeatherData();
getChamberSpotlights();

// Update date information
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;