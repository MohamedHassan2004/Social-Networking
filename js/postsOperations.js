// save post
let allSave = document.querySelectorAll(".savePost");
let saveArr = Array.from(allSave);
saveArr.forEach(function (e) {
    e.addEventListener("click", function (x) {
        if (e.innerHTML.trim() == '<i class="far fa-bookmark"></i>'.trim()) {
            e.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            savePost(e.getAttribute("data-post-id"));
        } else {
            e.innerHTML = '<i class="far fa-bookmark"></i>';
            unsavePost(e.getAttribute("data-post-id"));
        }
    });
});

// like post
let allLike = document.querySelectorAll(".like");
let likesArr = Array.from(allLike);
likesArr.forEach(function (e) {
    e.addEventListener("click", function (x) {
        const postId = e.dataset.postId;
        likeCount = e.closest(".post").querySelector(".like-count");
        if (e.innerHTML.includes("far fa-thumbs-up")) {
            let i = e.querySelector('i');
            i.className = "fa-solid fa-thumbs-up";
            likeCount.textContent++;
        } else {
            let i = e.querySelector('i');
            i.className = "far fa-thumbs-up";
            likeCount.textContent--;
        }
    });
});

// delete post
let deletePost = document.querySelectorAll(".delete-post");
let deletePostArr = Array.from(deletePost);
deletePostArr.forEach((e) => {
    e.addEventListener("click", (x) => {
        postId = e.dataset.postId;
        e.closest(".post").remove();
        deletePostMethod(postId);
    });
});
