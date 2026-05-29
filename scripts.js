let html = '';
for (let i = 1; i <= 10; i++) {
    html += `<img src="${i}.jpg" class="wzory">`;
}
document.getElementById('pictures').innerHTML = html;

// Skrypt 2: obsługa najechania (hover) na przyciski — pokazuje odpowiadającą sekcję
const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main > section');

navButtons.forEach((btn, idx) => {
    btn.addEventListener('mouseenter', () => {
        sections.forEach((s, i) => s.style.display = (i === idx) ? 'block' : 'none');
        // ustaw tła przycisków: aktywny salmon, pozostałe crimson
        navButtons.forEach(b => b.style.backgroundColor = 'crimson');
        btn.style.backgroundColor = 'salmon';
    });
});

