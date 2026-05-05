{
  "elements": {
    "cursor": ".cursor",
    "audio": "#bg-audio",
    "playBtn": "#play-pause"
  },
  "settings": {
    "discord": {
      "apiUrl": "https://api.lanyard.rest/v1/users/1131173686221754398",
      "refreshIntervalMs": 30000,
      "statusColors": {
        "online": "#43b581",
        "dnd": "#f04747",
        "idle": "#faa61a",
        "offline": "#747f8d"
      }
    }
  },
  "events": [
    {
      "target": "document",
      "type": "mousemove",
      "action": "cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px';"
    },
    {
      "target": "playBtn",
      "type": "click",
      "action": "if (audio.paused) { audio.play(); playBtn.innerHTML = 'PAUSE'; } else { audio.pause(); playBtn.innerHTML = 'PLAY'; }"
    }
  ],
  "functions": {
    "fetchDiscord": "async function fetchDiscord() { const response = await fetch('https://api.lanyard.rest/v1/users/1131173686221754398'); const data = await response.json(); const user = data.data; const statusDot = document.getElementById('discord-status'); const statusMap = { online: '#43b581', dnd: '#f04747', idle: '#faa61a', offline: '#747f8d' }; statusDot.style.background = statusMap[user.discord_status]; document.getElementById('discord-name').innerText = user.discord_user.username; if(user.activities.length > 0) { console.log('Status:', user.activities[0].state); } }"
  },
  "init": [
    "fetchDiscord()",
    "setInterval(fetchDiscord, 30000)"
  ]
}
