document.getElementById('start-btn').addEventListener('click', function() {
  let progress = 0;
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      progressText.textContent = "Update Complete (Demo)";
    } else {
      progress += Math.floor(Math.random() * 5) + 1; // random step 1–5
      if (progress > 100) progress = 100;
      progressBar.style.width = progress + '%';
      progressText.textContent = progress + '%';
    }
  }, 300);
});
