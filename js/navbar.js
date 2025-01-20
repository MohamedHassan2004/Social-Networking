const currentUserId = localStorage.getItem('id');
let navbar = `
    <div class="container-fluid container">
      <a class="navbar-brand" href="HomePage.html"><i><b>Socialify</b></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="HomePage.html"><i class="fa-solid fa-house"></i> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="profile.html?id=${currentUserId}"><i class="fa-solid fa-user"></i> Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="editProfile.html"><i class="fa-solid fa-sliders"></i> Settings</a>
          </li>
          <!-- List items moved from aside bar for small screens -->
          <li class="nav-item d-lg-none">
          <a class="nav-link" href="#"><i class="fa-solid fa-bell"></i> Notifications <span id='notification'>3</span></a>
          </li>
          <li class="nav-item d-lg-none">
          <a class="nav-link" href="savedPosts.html"><i class="fas fa-bookmark"></i> Saved Posts</a>
          </li>
          <li class="nav-item d-lg-none">
          <a class="nav-link" href="#"><i class="far fa-compass"></i> Explore</a>
          </li>
          <li class="nav-item d-lg-none">
          <a class="nav-link" href="myFriends.html"><i class="fas fa-users"></i> My Friends</a>
          </li>
          <li class="nav-ite  m d-lg-none">
          <a class="nav-link  " href="#"><i class="fas fa-user-plus"></i> Friends Requests <span id='req'>2</span></a>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Log out</a>
          </li>
          </ul>
          <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        </div>
        </div>`;


let nav = document.querySelector('nav');
nav.className = 'navbar navbar-expand-lg fixed-top p-3';
nav.innerHTML = navbar;