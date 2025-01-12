// Get all the filter buttons  
const filterButtons = document.querySelectorAll('.filt-butt');  
// Get all course elements  
const courses = document.querySelectorAll('.course');  
const creditCountElement = document.getElementById('credit-count');  

// Function to calculate total credits  
function calculateTotalCredits() {  
    let totalCredits = 0;  
    courses.forEach(course => {  
        if (!course.classList.contains('hidden')) {  
            totalCredits += parseInt(course.getAttribute('data-credits'));  
        }  
    });  
    creditCountElement.textContent = totalCredits;  
}  

// Add click event for each button  
filterButtons.forEach(button => {  
    button.addEventListener('click', () => {  
        const filter = button.getAttribute('data-filter');  

        // Loop through each course  
        courses.forEach(course => {  
            const category = course.getAttribute('data-category');  

            // Show or hide course based on the selected filter  
            if (filter === 'all' || filter === category) {  
                course.classList.remove('hidden');  
            } else {  
                course.classList.add('hidden');  
            }  
        });  

        // Calculate total credits after filtering  
        calculateTotalCredits();  
    });  
});  

// Initial calculation of total credits  
calculateTotalCredits();