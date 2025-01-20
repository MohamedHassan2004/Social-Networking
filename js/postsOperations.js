document.querySelector(".posts-container").addEventListener("click", function (event) {
    let target = event.target;

    // Handle save post
    if (target.classList.contains("savePost") || target.closest('.savePost')) {
        const saveBtn = target.closest('.savePost');
        if (saveBtn.querySelector('i').classList.contains("far")) {
            saveBtn.querySelector('i').classList.replace("far", "fa");
        } else {
            saveBtn.querySelector('i').classList.replace("fa", "far");

            // remove saved post from saved posts page
            if(window.location.href.includes('savedPosts.html')) {
                saveBtn.closest('.post').remove();
                if(document.querySelectorAll('.post').length === 0) {
                    document.querySelector('.posts-container').innerHTML = `
                        <center>
                            <div class="alert alert-info mt-3">No saved posts available</div>
                            <a class="btn btn-primary" href="explore.html"><i class="far fa-compass"></i> Explore</a>
                        </center>
                    `;
                }
            }
        }
    }

    // Handle like post
    if (target.classList.contains("like") || target.closest('.like')) {
        const likeBtn = target.closest('.like');
        const likeIcon = likeBtn.querySelector('i');
        const likeCount = likeBtn.querySelector('.like-count');
        if (likeIcon.classList.contains("far")) {
            likeIcon.classList.replace("far", "fa");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
            likeIcon.classList.replace("fa", "far");
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }
    }

    // Handle delete post
    if (target.classList.contains("delete-post") || target.closest('.delete-post')) {
        const deleteBtn = target.closest('.delete-post');
        deleteBtn.closest('.post').remove();
    }
});