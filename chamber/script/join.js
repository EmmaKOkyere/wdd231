document.getElementById('timestamp').value = new Date().toISOString();

            function showModal(modalId) {
                document.getElementById(modalId).style.display = 'block';
            }

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;