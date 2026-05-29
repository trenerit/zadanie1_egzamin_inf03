let html = '';
for (let i = 1; i <= 10; i++) {
    html += `<img src="${i}.jpg" class="wzory">`;
}
document.getElementById('pictures').innerHTML = html;

// Skrypt 2: obsługa najechania (hover) na przyciski — pokazuje odpowiadającą sekcję
const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main section');

navButtons.forEach((btn, idx) => {
    btn.addEventListener('mouseenter', () => {
        sections.forEach((s, i) => s.style.display = (i === idx) ? 'block' : 'none');
        // ustaw tła przycisków: aktywny salmon, pozostałe crimson
        navButtons.forEach(b => b.style.backgroundColor = 'crimson');
        btn.style.backgroundColor = 'salmon';
    });
});

function dodaj(num1, num2) {
    console.log(num1 + num2);
}

const dodaj1 = (num1, num2) => {
    return num1 + num2;
}

const wynik = dodaj(1, 4);
dodaj1(1, 4);

const age3 = 19;
let age3text;
if(age3 >= 18) {
    age3text = "tak";
} else {
    age3text = "nie";
}

const age2 = 19;
let age2text = "mozesz";
if(age2 < 18)
    age2text = "nie mozesz";


const age = 10;

const text = (age >= 18) ? "mozesz" : "niemozesz";

document.getElementById('age').innerText = text;