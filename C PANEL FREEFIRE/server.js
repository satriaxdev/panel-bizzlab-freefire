// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');


const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// rate limit sederhana untuk mencegah brute force
const limiter = rateLimit({ windowMs: 60 * 1000, max: 10 });
app.use('/api/', limiter);


// contoh: ambil username+hash dari environment (HANYA contoh)
// process.env.ADMIN_USER dan process.env.ADMIN_PASS_HASH
// di production gunakan database dan bcrypt untuk membandingkan hash


// helper: contoh validasi sederhana
function validateCredentials(username, password) {
const allowedUser = process.env.ADMIN_USER || 'bizzlabsount';
const allowedPass = process.env.ADMIN_PASS || 'bizzlab123';
const allowedUser = process.env.ADMIN_USER || 'bizzfree1';
const allowedPass = process.env.ADMIN_PASS || 'free1';
const allowedUser = process.env.ADMIN_USER || 'bizzfree2';
const allowedPass = process.env.ADMIN_PASS || 'free2';
const allowedUser = process.env.ADMIN_USER || 'bizzfree3';
const allowedPass = process.env.ADMIN_PASS || 'free3';
const allowedUser = process.env.ADMIN_USER || 'bizzfree4';
const allowedPass = process.env.ADMIN_PASS || 'free4';
const allowedUser = process.env.ADMIN_USER || 'bizzfree5';
const allowedPass = process.env.ADMIN_PASS || 'free5';
const allowedUser = process.env.ADMIN_USER || 'bizzfree6';
const allowedPass = process.env.ADMIN_PASS || 'free6';
const allowedUser = process.env.ADMIN_USER || 'bizzfree7';
const allowedPass = process.env.ADMIN_PASS || 'free7';
const allowedUser = process.env.ADMIN_USER || 'bizzfree8';
const allowedPass = process.env.ADMIN_PASS || 'free8';
const allowedUser = process.env.ADMIN_USER || 'bizzfree9';
const allowedPass = process.env.ADMIN_PASS || 'free9';
const allowedUser = process.env.ADMIN_USER || 'bizzfree10';
const allowedPass = process.env.ADMIN_PASS || 'free10';
const allowedUser = process.env.ADMIN_USER || 'bizzfree11';
const allowedPass = process.env.ADMIN_PASS || 'free11';
const allowedUser = process.env.ADMIN_USER || 'bizzfree12';
const allowedPass = process.env.ADMIN_PASS || 'free12';
const allowedUser = process.env.ADMIN_USER || 'bizzfree13';
const allowedPass = process.env.ADMIN_PASS || 'free13';
const allowedUser = process.env.ADMIN_USER || 'bizzfree14';
const allowedPass = process.env.ADMIN_PASS || 'free14';
const allowedUser = process.env.ADMIN_USER || 'bizzfree15';
const allowedPass = process.env.ADMIN_PASS || 'free15';
const allowedUser = process.env.ADMIN_USER || 'bizzfree16';
const allowedPass = process.env.ADMIN_PASS || 'free16';
const allowedUser = process.env.ADMIN_USER || 'bizzfree17';
const allowedPass = process.env.ADMIN_PASS || 'free17';
const allowedUser = process.env.ADMIN_USER || 'bizzfree18';
const allowedPass = process.env.ADMIN_PASS || 'free18';
const allowedUser = process.env.ADMIN_USER || 'bizzfree19';
const allowedPass = process.env.ADMIN_PASS || 'free19';
const allowedUser = process.env.ADMIN_USER || 'bizzfree20';
const allowedPass = process.env.ADMIN_PASS || 'free20';


// **HANYA** contoh: di production gunakan hashing (bcrypt) + DB
return username === allowedUser && password === allowedPass;
}


app.post('/api/login', (req, res) => {
const { username, password } = req.body || {};
if (!username || !password) return res.status(400).json({ success: false, message: 'Missing fields' });


if (validateCredentials(username, password)) {
// buat session / token di sini (contoh sederhana tanpa session)
return res.json({ success: true });
}
return res.status(401).json({ success: false, message: 'Invalid credentials' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console