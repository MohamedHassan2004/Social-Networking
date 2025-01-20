const addFriendBtn = `<button class='btn btn-primary add-friend-btn'>
                    <i class='fas fa-user-plus'></i> Add Friend</button>`;

const deleteFriendBtn = `<button class='btn btn-danger delete-friend'>
                    <i class='fas fa-user-minus'></i> Delete Friend</button>`;

function onclickAddFriend(e){
    if (e.target.innerHTML.includes("fa-user-plus")) {
        e.target.className = e.target.className.replace("btn-primary", "btn-secondary");
        e.target.innerHTML = e.target.innerHTML.replace('<i class="fas fa-user-plus"></i>', '<i class="fa-solid fa-xmark"></i>')
        e.target.innerHTML = e.target.innerHTML.replace('Add Friend', 'Cancel');
    }else {
        e.target.className = e.target.className.replace("btn-secondary", "btn-primary");
        e.target.innerHTML = e.target.innerHTML.replace('<i class="fa-solid fa-xmark"></i>', '<i class="fas fa-user-plus"></i>')
        e.target.innerHTML = e.target.innerHTML.replace('Cancel', 'Add Friend');
    }
}

function onclickDeleteFriend(e, container){
    const friendElement = e.target.closest('.delete-friend');
        if(friendElement!=null) 
            friendElement.remove();
        container.innerHTML += addFriendBtn;
}

function onclickAcceptRequest(e, container){
    const requestElement = e.target.closest('.requests');
    if(requestElement!=null) 
        requestElement.remove();
    container.innerHTML += deleteFriendBtn;
}

function onclickRejectRequest(e, container){
    const requestElement = e.target.closest('.requests');   
    if(requestElement!=null) 
        requestElement.remove();
    container.innerHTML += addFriendBtn;
}

/////////////////////////////////////
// profile page
if(window.location.pathname.includes("profile.html")){
let userInfoContainer = document.querySelector('.userInfo');
userInfoContainer.addEventListener("click", (e) => {
    // add friend
    if(e.target.className.includes("add-friend-btn")){
        onclickAddFriend(e);
    }// delete friend
    else if (e.target.className.includes('delete-friend')){
        onclickDeleteFriend(e, userInfoContainer);
    } // accept req
    else if(e.target.className.includes("accept")){
        onclickAcceptRequest(e , userInfoContainer);
    } // reject req
    else if(e.target.className.includes("reject")){
        onclickRejectRequest(e, userInfoContainer);
    }
});
}
////////////////////////////////////
// myfriends page
if(window.location.pathname.includes("myFriends.html")){
    let friendsContainer = document.querySelector('#myfriends-container');
    friendsContainer.addEventListener("click", (e) => {
        console.log(e.target);
        if(e.target.className.includes("add-friend-btn")){
            onclickAddFriend(e);
        }
        else if (e.target.className.includes('delete-friend')){
            console.log('delete friend');
            onclickDeleteFriend(e, e.target.closest('.card-body'));
        }
    });
}
///////////////////////////////////
// friendsRequests page
