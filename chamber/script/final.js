// final.js

// Fetch data from a local JSON file or API
async function fetchData() {
    try {
        const response = await fetch('data/books.json'); 
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayBooks(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Display books dynamically
function displayBooks(books) {
    const bookGrid = document.querySelector('.book-grid');
    bookGrid.innerHTML = '';
    books.forEach(book => {
        const bookCard = document.createElement('article');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><em>By ${book.author}</em></p>
            <p>${book.description}</p>
        `;
        bookGrid.appendChild(bookCard);
    });
}

// Call fetchData on page load
document.addEventListener('DOMContentLoaded', fetchData);

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;