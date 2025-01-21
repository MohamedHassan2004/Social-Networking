async function loadFriendsReq() {
  try {
      const response = await fetch('js/data.json');
      const data = await response.json();
      showFriendsReq(data.profiles);
  } catch (error) {
      console.error('Error loading Profile INFO:', error);
  }
}

function showFriendsReq(profiles) {
  const friendsReq = profiles.filter(profile => profile.req);
  let friendsContainer = document.querySelector('#friendsReq-container');
  if(friendsReq.length == 0) {
    friendsContainer.innerHTML = '<h3 class="text-center">No friends Requests</h3>';
  }else{
    friendsReq.forEach(profile => {
      friend = `
          <div class="card mb-3">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <img class="person-img me-3 rounded-circle" src="${profile.img}" alt="...">
                <a href="profile.html?id=${profile.id}"><h5>${profile.username}</h5></a>
              </div>
              <div class='requests'>
                <button class='btn btn-success me-2 accept'><i class='fas fa-check'></i> Accept</button>
                <button class='btn btn-danger reject'><i class='fas fa-times'></i> Reject</button>
              </div>
            </div>
          </div>
      `;
      friendsContainer.innerHTML += friend;
    });
  }

}


loadFriendsReq();