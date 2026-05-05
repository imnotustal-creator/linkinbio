const cursor = document.querySelector('.cursor');
const audio = document.getElementById('bg-audio');
const playBtn = document.getElementById('play-pause');

// Курсор
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Аудио логика
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "PAUSE";
    } else {
        audio.pause();
        playBtn.innerHTML = "PLAY";
    }
});

// Discord API (Lanyard)
async function fetchDiscord() {
    const response = await fetch('https://api.lanyard.rest/v1/users/1131173686221754398');
    const data = await response.json();
    const user = data.data;

    const statusDot = document.getElementById('discord-status');
    const statusMap = { online: '#43b581', dnd: '#f04747', idle: '#faa61a', offline: '#747f8d' };
    
    statusDot.style.background = statusMap[user.discord_status];
    document.getElementById('discord-name').innerText = user.discord_user.username;
    
    // Если есть кастомный статус
    if(user.activities.length > 0) {
        console.log("Status:", user.activities[0].state);
    }
}

fetchDiscord();
setInterval(fetchDiscord, 30000); // Обновлять каждые 30 сек