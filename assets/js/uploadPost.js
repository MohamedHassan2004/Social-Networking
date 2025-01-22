// upload post
document.getElementById('postForm').addEventListener('submit', function (event) {
    var postContent = document.getElementById('postContent').value.trim();
    var fileInput = document.getElementById('fileInput').value.trim();

    if (postContent === '' && fileInput === '') {
      event.preventDefault();
      document.getElementById('fileUploadFeedback').innerHTML = 'Please enter post content or upload a file.';
    }
  });

document.getElementById('fileInput').addEventListener('change', function (event) {
    document.getElementById('fileUploadFeedback').textContent = 'File has been selected.';
});

//////////////////////
