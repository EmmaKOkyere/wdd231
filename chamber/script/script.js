async function fetchMembers() {  
    const response = await fetch('data/members.json');  
    const members = await response.json();  
    return members;  
}  

function displayMembers(members, viewType) {  
    const memberList = document.getElementById('member-list');  
    memberList.innerHTML = '';  

    if (viewType === 'grid') {  
        members.forEach(member => {  
            memberList.innerHTML += `  
                <div class="card">  
                    <img src="${member.image}" alt="${member.name}">  
                    <h3>${member.name}</h3>  
                    <p>${member.address}</p>  
                    <p>${member.phone}</p>  
                    <a href="${member.website}">Visit Website</a>  
                </div>  
            `;  
        });  
    } else {  
        members.forEach(member => {  
            memberList.innerHTML += `  
                <div class="list-item">  
                    <h3>${member.name}</h3>  
                    <p>${member.address}</p>  
                    <p>${member.phone}</p>  
                </div>  
            `;  
        });  
    }  
}  

document.addEventListener('DOMContentLoaded', async () => {  
    const members = await fetchMembers();  
    let viewType = 'grid';  
    displayMembers(members, viewType);  

    document.getElementById('toggle-view').addEventListener('click', () => {  
        viewType = (viewType === 'grid') ? 'list' : 'grid';  
        displayMembers(members, viewType);  
    });  

    // Display last modified date  
    const lastModified = new Date(document.lastModified);  
    document.getElementById('last-modified').textContent = lastModified.toLocaleString();  
});