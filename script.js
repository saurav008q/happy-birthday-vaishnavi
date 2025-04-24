document.getElementById('turnOnBtn').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  document.getElementById('bgMusic').play();
});