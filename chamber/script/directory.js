const mainSectionContainer = document.querySelector(".main__section_container");
const chambersLink = "http://127.0.0.1:5500/wdd231/chamber/data/members.json.preview";
const gridBtn = document.querySelector(".grid__btn");
const listBtn = document.querySelector(".list__btn");

async function getChambersData() {
  const response = await fetch(chambersLink);
  const data = await response.json();
  displayChamberCards(data);
}

function displayChamberCards(data) {
    const chamberCardSectionContainer = document.createElement("div");
    chamberCardSectionContainer.setAttribute('class', 'chamber-card__container');
  data.forEach((object) => {
    const section = document.createElement("section");
    section.setAttribute("class", "chamber__card");
    section.innerHTML = `
        <h3>${object.name}</h3>
        <div>
            <img src='${object.image}' alt='${object.name} image' width='80' height='80'>
            <div class='chamber__card_text'>
                <p><span>Address: </span>${object.address}</p>
                <p><span>Phone Number: </span>${object.phoneNumber}</p>
                <p><span>URL: </span><a href='${object.url}'>${object.url}</a></p>
                <p><span>Membership: </span>${object.membership}</p>
            </div>
        </div>
        `;
        chamberCardSectionContainer.append(section);
        mainSectionContainer.append(chamberCardSectionContainer);
    });
  makeItGrid(chamberCardSectionContainer);
  makeItList(chamberCardSectionContainer);
}

function makeItGrid(container) {
  gridBtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("js-chamber-card");
  });
}

function makeItList(container) {
  listBtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("js-chamber-card");
  });
}

getChambersData();