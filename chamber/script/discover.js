document.addEventListener('DOMContentLoaded', () => {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.grid-container');
            data.forEach((item, index) => {
                const card = `
                    <div class="card" style="grid-area: card${index + 1};">
                        <h2>${item.title}</h2>
                        <figure>
                            <img src="${item.image}" alt="${item.title}" />
                        </figure>
                        <address>${item.address}</address>
                        <p>${item.description}</p>
                        <button>Learn More</button>
                    </div>`;
                container.innerHTML += card;
            });
        });

    // Local Storage for last visit
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    if (!lastVisit) {
        localStorage.setItem('lastVisit', now);
        alert("Welcome! Let us know if you have any questions.");
    } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        let message;
        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
        }
        alert(message);
        localStorage.setItem('lastVisit', now);
    }
});