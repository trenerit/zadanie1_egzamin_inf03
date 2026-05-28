let html = '';
for (let i = 1; i <= 10; i++) {
    html += `<img src="${i}.jpg" class="wzory">`;
}
document.getElementById('pictures').innerHTML = html;

