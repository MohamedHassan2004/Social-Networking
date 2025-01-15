async function loadProfileInfo() {
    try {
        const response = await fetch('js/data.json');
        const data = await response.json();
        renderProfileInfo(data.profiles);
    } catch (error) {
        console.error('Error loading Profile INFO:', error);
    }
}

let userBanner = document.querySelector('.UserBanner');
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const params = new URLSearchParams(url.search);
const id = Number(params.get('id'));


function renderProfileInfo(profiles) {
    const profile = profiles.find((profile) => profile.id === id);
    let banner = `
                <div class="avatar myProfileAvatar">
                    <img src="${profile.img??"profilePics/avatar.jpg"}" class="card-img-top" onclick="toggleEditForm('profile_image_form')" />
                </div>
                <h2>${profile.username}</h2>
                <h6>${profile.bio??""}</h6>
                <h6>Mobile <i class="fa-solid fa-phone"></i> : ${profile.mobile??""}</h6>
                <h6>Birthdate <i class="fa-solid fa-cake-candles"></i> : ${profile.BOD??""}</h6>
                <h6>
                    Gender <i class="fa-solid fa-venus-mars"></i> :
                    ${profile.gender??""}
                </h6>
                `;
    userBanner.innerHTML = banner;
}

loadProfileInfo();