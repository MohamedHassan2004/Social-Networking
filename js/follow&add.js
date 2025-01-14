let friendsBtns = document.querySelectorAll(".add-friend-btn");
let btns = Array.from(friendsBtns);
btns.forEach((e) => {
  e.addEventListener("click", (x) => {
    const PID = e.dataset.profileId;
    if (e.innerHTML.includes("fa-user-plus")) {
      e.className = e.className.replace("btn btn-primary", "btn btn-secondary");
      e.innerHTML = e.innerHTML.replace('<i class="fa-solid fa-user-plus"></i>','<i class="fa-solid fa-xmark"></i>')
    } else {
      e.className = e.className.replace("btn btn-secondary", "btn btn-primary");
      e.innerHTML = e.innerHTML.replace('<i class="fa-solid fa-xmark"></i>','<i class="fa-solid fa-user-plus"></i>')
    }
  });
});

// --------------------------------------------------------------------------------------------------
let FollowBtns = document.querySelectorAll(".follow-btn");
let FBtns = Array.from(FollowBtns);
FBtns.forEach((e) => {
  e.addEventListener("click", (x) => {
    if (e.classList.contains("btn-primary")) {
      e.className = e.className.replace("btn btn-primary", "btn btn-secondary");
      e.innerHTML = e.textContent.replace('Follow','Unfollow')
    } else {
      e.className = e.className.replace("btn btn-secondary", "btn btn-primary");
      e.innerHTML = e.textContent.replace('Unfollow','Follow');
    }
  });
});