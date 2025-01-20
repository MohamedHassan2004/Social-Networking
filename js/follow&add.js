document.querySelector(".pages-container").addEventListener("click", function (e) {
  let t = e.target;
  if (t.classList.contains("follow-btn") || t.closest('.follow-btn')) {
    const followBtn = t.closest('.follow-btn');
    console.log(followBtn);
    if (followBtn.textContent.trim() == "Follow") {
      console.log("followBtn");
      followBtn.textContent = "Unfollow";
      followBtn.className = followBtn.className.replace("btn-primary", "btn-secondary");
    } else {
      console.log("unfollow");
      followBtn.textContent = "Follow";
      followBtn.className = followBtn.className.replace("btn-secondary", "btn-primary");
    }
  }
});

document.querySelector(".people-container").addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("add-friend-btn") || target.closest('.add-friend-btn')) {
    const addBtn = target.closest('.add-friend-btn');
    if (addBtn.querySelector('i').classList.contains("fa-user-plus")) {
      addBtn.querySelector('i').classList.replace("fa-user-plus", "fa-xmark");
      addBtn.className = addBtn.className.replace("btn-primary", "btn-secondary");
    } else {
      addBtn.querySelector('i').classList.replace("fa-xmark", "fa-user-plus");
      addBtn.className = addBtn.className.replace("btn-secondary", "btn-primary");
    }
  }
});

// // --------------------------------------------------------------------------------------------------
