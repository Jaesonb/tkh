// Leaflet Map

const map = L.map('map').setView([6.9271, 79.8612], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


//navbar toggle effect
  document.querySelector('.navbar-toggler').addEventListener('click', function() {
    var icon = document.querySelector('#togglerIcon');
    if (icon.innerHTML === 'close') {
      icon.innerHTML = 'menu';
    } else {
      icon.innerHTML = 'close';
    }
  });

  // Array of words to cycle through
  const words = [ "Reveloution", "Journey" ];
  let index = 0;

  // Function to change the word
  function changeWord() {
    const changingWord = document.getElementById('changing-word');
    changingWord.textContent = words[index];
    index = (index + 1) % words.length;
  }

  // Start changing the word every 2 seconds
  setInterval(changeWord, 2000);

  // JavaScript to toggle the visibility of the icon
  setTimeout(function() {
    document.querySelector('.animate1"').style.display = 'block'; // Show the icon after a delay
  }, 1000);

  //typewriter effect

  // const wordss = 'About'; // Word to be typed out
  const typewriterElement = document.getElementById('typewriter-text');
  const wordss = typewriterElement.textContent.trim(); // Trim to remove any leading/trailing whitespace
  let indexx = 0;
  
  function typeWriter() {
    const textElement = document.getElementById('typewriter-text');
    textElement.textContent = wordss.substring(0, indexx++);
  }
  
  setInterval(typeWriter, 500); // Change letter every 200 milliseconds
  
  
  