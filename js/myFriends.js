async function loadProfiles() {
  try {
      const response = await fetch('js/data.json');
      const data = await response.json();
      showMyFriends(data.profiles);
  } catch (error) {
      console.error('Error loading Profile INFO:', error);
  }
}

function showMyFriends(profiles) {
  let friendsContainer = document.querySelector('#myfriends-container');
  let myFriends = profiles.filter(x => x.friend);

  let myFriendsLen = myFriends.length;
  if(myFriendsLen == 0) {
    friendsContainer.innerHTML = '<h3 class="text-center">No friends yet</h3>';
  }

  friendsContainer.closest('main').querySelector('h2').innerHTML = `My Friends (${myFriendsLen})`;

  myFriends.forEach(profile => {
    friend = `
        <div class="card mb-3">
          <div class="card-body d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <img class="person-img me-3 rounded-circle" src="${profile.img}" alt="...">
              <a href="profile.html?id=${profile.id}"><h5>${profile.username}</h5></a>
            </div>
            <button class='btn btn-danger delete-friend'>
                    <i class='fas fa-user-minus'></i> Delete Friend</button>
          </div>
        </div>
    `;
    friendsContainer.innerHTML += friend;
  });
}


loadProfiles();