import { loadDataFromJSONFile, fetchDataFromLocalStorage} from "./module.js"; 

loadDataFromJSONFile(showUserInfo, 'profiles');

function showUserInfo(profiles) {
  const currentUserId = fetchDataFromLocalStorage().id;
  let user = profiles.find(p => p.id == currentUserId);
  let updateProfile = document.querySelector('#updateUserInfo');

    let form = `
    <form method="post">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" class="form-control" id="username" name="username" value="${user.username}" Required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" name="email" value="${user.email}" Required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" name="password" value="${user.password}" Required>
      </div>
      <div class="form-group">
        <label for="bio">Bio:</label>
        <input type="text" class="form-control" id="bio" name="bio" value="${user.bio}">
      </div>
      <div class="form-group">
        <label for="tel">Mobile:</label>
        <input type="number" class="form-control" id="tel" name="tel" value="${user.mobile}" oninput="truncateInput(event);">
      </div>
      <div class="form-group">
      <label for="birthDate">Birth Date:</label>
      <input type="date" class="form-control" id="birthDate" name="birthDate" value="${user.BOD ? new Date(user.BOD).toISOString().split('T')[0] : ''}">
      </div>
      <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
    `;
    updateProfile.innerHTML += form;
}


function truncateInput(event) {
  const input = event.target;
  if (input.value.length > 11) {
      input.value = input.value.slice(0, 11);
  }
}