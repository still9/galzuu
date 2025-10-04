// Mongolian Valentine app: Надтай болзох уу?
// Move the "Үгүй" button on hover/touch, and show a sweet result on "Тийм".

const questionContainer = document.getElementById('questionContainer');
const yesBtn = document.getElementById('yesBtn');
const noBtn  = document.getElementById('noBtn');
const heartLoader = document.getElementById('heartLoader');
const resultContainer = document.getElementById('resultContainer');
const replayBtn = document.getElementById('replayBtn');

// Show today's date in Mongolian format
const todayEl = document.getElementById('today');
if (todayEl) {
  const opts = { year: 'numeric', month: 'long', day: 'numeric' };
  todayEl.textContent = new Date().toLocaleDateString('mn-MN', opts);
}

// Utility: pick a random integer in [min, max]
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Move the "Үгүй" button to a random place inside the question container
function moveNo() {
  const rect = questionContainer.getBoundingClientRect();
  const bRect = noBtn.getBoundingClientRect();

  const maxX = rect.width - bRect.width - 10;
  const maxY = rect.height - bRect.height - 10;

  const x = rand(10, Math.max(10, maxX));
  const y = rand(10, Math.max(10, maxY));

  noBtn.style.left = x + 'px';
  noBtn.style.top  = y + 'px';
}

noBtn.addEventListener('mouseover', moveNo);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNo(); }, {passive:false});

yesBtn.addEventListener('click', () => {
  questionContainer.classList.add('hidden');
  heartLoader.classList.remove('hidden');
  setTimeout(() => {
    heartLoader.classList.add('hidden');
    resultContainer.classList.remove('hidden');
  }, 1500);
});

replayBtn.addEventListener('click', () => {
  resultContainer.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  noBtn.style.left = '60%';
  noBtn.style.top = '40%';
});
