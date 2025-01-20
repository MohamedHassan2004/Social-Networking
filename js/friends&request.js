let userInfoContainer = document.querySelector('.userInfo');
let addFriendBtn = `<button class='btn btn-primary add-friend-btn'>
                    <i class='fas fa-user-plus'></i> Add Friend</button>`;
userInfoContainer.addEventListener("click", (e) => {
    // add friend
    if(e.target.className.includes("add-friend-btn")){
        if (e.target.innerHTML.includes("fa-user-plus")) {
            e.target.className = e.target.className.replace("btn-primary", "btn-secondary");
            e.target.innerHTML = e.target.innerHTML.replace('<i class="fas fa-user-plus"></i>', '<i class="fa-solid fa-xmark"></i>')
            e.target.innerHTML = e.target.innerHTML.replace('Add Friend', 'Cancel');
        }else {
            e.target.className = e.target.className.replace("btn-secondary", "btn-primary");
            e.target.innerHTML = e.target.innerHTML.replace('<i class="fa-solid fa-xmark"></i>', '<i class="fas fa-user-plus"></i>')
            e.target.innerHTML = e.target.innerHTML.replace('Cancel', 'Add Friend');
        }
    }// delete friend
    else if (e.target.className.includes('delete-friend')){
        const friendElement = e.target.closest('.delete-friend');
        if(friendElement!=null) 
            friendElement.remove();
        userInfoContainer.innerHTML += addFriendBtn;
    } // accept req
    else if(e.target.className.includes("accept")){
        const requestElement = e.target.closest('.requests');
        if(requestElement!=null) 
            requestElement.remove();
        userInfoContainer.innerHTML += addFriendBtn;
    } // reject req
    else if(e.target.className.includes("reject")){
        const requestElement = e.target.closest('.requests');
        if(requestElement!=null) 
            requestElement.remove();
        userInfoContainer.innerHTML += addFriendBtn;
    }
});

