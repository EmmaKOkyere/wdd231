// script.js  
document.addEventListener('DOMContentLoaded', () => {  
    loadBusinessData(); // Load business data when the DOM is ready  
});  

async function loadBusinessData() {  
    try {  
        const response = await fetch('businesses.json'); // Fetch the JSON file  
        if (!response.ok) {  
            throw new Error('Network response was not ok: ' + response.status);  
        }  
        const data = await response.json(); // Parse the JSON data  
        
        const businessList = document.getElementById('business-list');  

        // Clear previous entries (if any)  
        businessList.innerHTML = '';  

        data.forEach(business => {  
            const businessCard = document.createElement('div');  
            businessCard.classList.add('business-card');  

            businessCard.innerHTML = `  
                <img class="image-size" src="${business.image}" alt="${business.name}">  
                <h4>${business.name}</h4>  
                <p>Address: ${business.address}</p>  
                <p>Phone: ${business.phone}</p>  
                <p>Membership: ${business.membership}</p>  
                <a href="${business.website}" target="_blank">Visit Website</a>  
            `;  

            businessList.appendChild(businessCard); // Append the card to the list  
        });  
    } catch (error) {  
        console.error('Error fetching the business data:', error);  
    }  
}