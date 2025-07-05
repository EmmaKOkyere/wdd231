document.addEventListener('DOMContentLoaded', () => {
    // Fetch Weather Data
    fetchWeatherData();

    // Fetch Spotlight Data
    fetchSpotlightData();
});

function fetchWeatherData() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'San Miguel'; // Replace with your chamber location
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-data').innerHTML = weatherData;
        })
        .catch(err => console.error(err));
}

function fetchSpotlightData() {
    // Placeholder: Replace with actual data fetching logic
    const spotlightMembers = [
        { name: 'Company A', logo: 'images/company-a-logo.png', phone: '123-456-7890', address: '123 Street, San Miguel', website: 'http://companya.com', level: 'Gold' },
        { name: 'Company B', logo: 'images/company-b-logo.png', phone: '987-654-3210', address: '456 Avenue, San Miguel', website: 'http://companyb.com', level: 'Silver' }
    ];

    const spotlightContainer = document.getElementById('spotlight-container');

    spotlightMembers.forEach(member => {
        const spotlightCard = `
            <div class="spotlight-card">
                <img src="${member.logo}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Website: <a href="${member.website}">${member.website}</a></p>
                <p>Membership Level: ${member.level}</p>
            </div>
        `;
        spotlightContainer.innerHTML += spotlightCard;
    });
}