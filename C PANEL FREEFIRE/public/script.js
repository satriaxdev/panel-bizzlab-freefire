// public/script.js


// Ambil elemen
const loginBtn = document.getElementById('login-btn');
const userEl = document.getElementById('username');
const passEl = document.getElementById('password');
const errorEl = document.getElementById('login-error');
const loginPage = document.getElementById('login-page');
const loading = document.getElementById('loading');


loginBtn.addEventListener('click', async () => {
const username = userEl.value.trim();
const password = passEl.value;
errorEl.classList.remove('visible');


if (!username || !password) {
errorEl.textContent = 'Masukkan username dan password.';
errorEl.classList.add('visible');
return;
}


loading.classList.add('active');


try {
const res = await fetch('/api/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ username, password })
});


const json = await res.json();
loading.classList.remove('active');


if (res.ok && json.success) {
// login ok -> sembunyikan halaman login dan lanjut
loginPage.classList.add('hidden');
setTimeout(() => loginPage.style.display = 'none', 800);
} else {
errorEl.textContent = json.message || 'Username atau Password salah!';
errorEl.classList.add('visible');
}
} catch (err) {
loading.classList.remove('active');
errorEl.textContent = 'Gagal menghubungi server.';
errorEl.classList.add('visible');
console.error(err);
}
});
