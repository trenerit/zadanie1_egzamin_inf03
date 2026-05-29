let html = '';
for (let i = 1; i <= 10; i++) {
    html += `<img src="${i}.jpg" class="wzory">`;
}
document.getElementById('pictures').innerHTML = html;


const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        sections.forEach(section => section.style.display = 'none');
        sections[index].style.display = 'block';
    });
});

// Skrypt 2 - Filtrowanie obrazków wg numeru
const inputNumber = document.querySelector('#s3 input[type="number"]');
const images = document.querySelectorAll('.wzory');

inputNumber.addEventListener('input', (e) => {
    const selectedNum = parseInt(e.target.value);
    images.forEach(img => {
        const imgNum = parseInt(img.src.split('/').pop().split('.')[0]);
        img.style.display = imgNum === selectedNum && selectedNum > 0 ? 'inline-block' : 'none';
    });
});

