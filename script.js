// Lấy các phần tử DOM
const playButton = document.getElementById('playButton');
const birthdaySong = document.getElementById('birthdaySong');
const birthdayForm = document.getElementById('birthdayForm');
const greetingDiv = document.getElementById('greeting');
const personalMessage = document.getElementById('personalMessage');
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');

// Xử lý sự kiện nhấn nút phát nhạc
playButton.addEventListener('click', () => {
    if (birthdaySong.paused) {
        birthdaySong.play();
        playButton.textContent = '⏸ Tạm Dừng Nhạc';
    } else {
        birthdaySong.pause();
        playButton.textContent = '🎶 Phát Nhạc Chúc Mừng 🎵';
    }
});

// Xử lý gửi lời chúc
birthdayForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        personalMessage.innerHTML = `🎉 Chúc mừng sinh nhật <strong>${name}</strong>!<br>${message}`;
        greetingDiv.style.display = 'block';
        startConfetti();
    }
});

// Hiệu ứng pháo hoa
function startConfetti() {
    const duration = 5 * 1000; // Thời gian pháo hoa (5 giây)
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
