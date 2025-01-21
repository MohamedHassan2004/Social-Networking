async function loadProfileInfo() {
    try {
        const response = await fetch('js/data.json');
        const data = await response.json();
        renderProfileInfo(data.profiles);
        loadOperationsOnProfile(data.profiles);
    } catch (error) {
        console.error('Error loading Profile INFO:', error);
    }
}

function getIdFromLink(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return Number(id);
}

function findProfileById(profiles, id) {
    const profile = profiles.find((profile) => profile.id === id);
    return profile;
}

function renderProfileInfo(profiles) {
    const profile = findProfileById(profiles, getIdFromLink());
    document.title = profile.username + "'s Profile";
    let userBanner = document.querySelector('.UserBanner');
    let banner = `
                <div class="avatar myProfileAvatar">
                    <img src="${profile.img??"profilePics/avatar.jpg"}" class="card-img-top" onclick="toggleEditForm('profile_image_form')" />
                </div>
                <h2>${profile.username}</h2>
                ${profile.bio?`<h6>${profile.bio}</h6>`:``}
                ${profile.mobile?`<h6>Mobile <i class="fa-solid fa-phone"></i> : ${profile.mobile}</h6>`:``}
                ${profile.BOD?`<h6>Birthdate <i class="fa-solid fa-cake-candles"></i> : ${profile.BOD}</h6>`:``}
                ${profile.gender?`<h6>Gender <i class="fa-solid fa-venus-mars"></i> :${profile.gender}</h6>`:``}
                `;
    userBanner.innerHTML = banner;
}


function loadOperationsOnProfile(profiles) {
    let userInfoContainer = document.querySelector('.userInfo');
    // if the profile is the current user
    if(getIdFromLink() == localStorage.getItem('id')){
        userInfoContainer.innerHTML +=
                `
                <!-- Form to delete account -->
                <form method="post" action="#" class="mt-3"
                    onsubmit="return confirm('Are you sure you want to delete your account? This action cannot be undone.');">
                    <button type="submit" class="btn btn-danger">
                        <i class="fa-solid fa-trash-alt"></i> Delete Account
                    </button>
                </form>
                <!-- change profile picture -->
                <div class="container input-group mt-3 p-0">
                    <form method="post" enctype="multipart/form-data" id="profile_image_form" style="display: none">
                        <div class="d-flex justify-content-center align-items-center gap-2">
                            <label for="profilePic" class="btn btn-outline-primary btn-sm">
                                <i class="fas fa-upload"></i> Update Profile Picture
                            </label>
                            <input type="file" name="profile_image" id="profilePic" class="form-control-file d-none" />
                            <button type="submit" class="btn btn-primary btn-sm">
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>
                    </form>
                </div>
                `;
    }else{
        const profile = findProfileById(profiles, getIdFromLink());
        if (profile.friend == 1) {
            userInfoContainer.innerHTML += `
            <button class='btn btn-danger delete-friend'><i class='fas fa-user-minus'></i> Delete Friend</button>
            `;
        } else {
            if (profile.friend == 0 && profile.reqFriend == 0) {
                userInfoContainer.innerHTML += `
                <button class='btn btn-primary add-friend-btn'><i class='fas fa-user-plus'></i> Add Friend</button>
                `;
            } else {
                userInfoContainer.innerHTML += `
                <div class='requests'>
                    <button class='btn btn-success me-2 accept'><i class='fas fa-check'></i> Accept</button>
                    <button class='btn btn-danger reject'><i class='fas fa-times'></i> Reject</button>
                </div>`;
            }
        }
    }
}

loadProfileInfo();