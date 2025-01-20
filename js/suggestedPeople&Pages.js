async function loadSuggestedPeoplePages() {
    try {
        const response = await fetch('js/data.json');
        const data = await response.json();
        showSuggestedPages(data.pages);
        showSuggestedPeople(data.profiles);
    } catch (error) {
        console.error('Error loading suggested people and pages INFO:', error);
    }
}

// suggests pages
function showSuggestedPages(pages){
    let pagesContainer = document.querySelector('.pages-container');
    pages.filter(p => p.follow == 0).slice(0,3).forEach(p =>{
        page = `
            <div class="page" data-page-id='${p.id}'>
                <img src="${p.img}" alt="Page" class="page-img">
                <div class="page-info">
                    <a href='profile.html?id=${p.id}'><h6>${p.name}</h6></a>
                    <p>${p.desc}</p>
                </div>
                <button class='btn btn-primary btn-sm follow-btn rounded-pill'>
                    Follow
                </button>
            </div>`;
            pagesContainer.innerHTML += page;
    });
}

// suggests people
function showSuggestedPeople(profiles){
    let peopleContainer = document.querySelector('.people-container');
    profiles.filter(p=> p.friend == 0).slice(0,3).forEach(p =>{
        person = `
            <div class="person" data-profile-id='${p.id}'>
                <img src="${p.img}" alt="Person" class="person-img">
                <div class="person-info">
                    <a href='profile.html?id=${p.id}'><h6>${p.username}</h6></a>
                </div>
                <button class='btn btn-primary btn-sm add-friend-btn rounded-pill'>
                    <i class="fa-solid fa-user-plus"></i>
                </button>
                </div>`;
        peopleContainer.innerHTML += person;
    });
}

loadSuggestedPeoplePages();
