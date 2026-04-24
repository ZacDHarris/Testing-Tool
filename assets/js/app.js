// ── LOGIN ──
const SITE_PASSWORD = 'Ezeefiber#1';

function goToTab(tabId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));   //have to parse all buttons to remove classes is not needed
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); 
    document.getElementById('page-' + tabId).classList.add('active');
    document.querySelectorAll('.tab-btn').forEach(b => {
        if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + tabId + "'")) {
            b.classList.add('active');
        }
    });
}

function checkLogin() {
    const input = document.getElementById('login-password').value;
    const card = document.getElementById('login-card');
    if (input === SITE_PASSWORD) {
        sessionStorage.setItem('ef_auth', '1');
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('signout-btn').style.display = 'block';
        goToTab('home');
    } else {
        document.getElementById('login-error').textContent = 'Incorrect password. Please try again.';
        card.classList.remove('shake');
        void card.offsetWidth;
        card.classList.add('shake');
        document.getElementById('login-password').value = '';
        setTimeout(() => card.classList.remove('shake'), 400);
    }
}

function signOut() {
    sessionStorage.removeItem('ef_auth');
    document.getElementById('login-overlay').style.display = 'flex';
    document.getElementById('signout-btn').style.display = 'none';
    document.getElementById('login-password').value = '';
    document.getElementById('login-error').textContent = '';
}

if (sessionStorage.getItem('ef_auth') === '1') {
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('signout-btn').style.display = 'block';
}

// ── UPS PDF DOWNLOAD ──
async function downloadFilledPDF(brand) {
    const isTachus = brand === 'tachus';
    const acct = document.getElementById(isTachus ? 'ter-t-acct' : 'ter-e-acct').value.trim();
    const wo   = document.getElementById(isTachus ? 'ter-t-wo'   : 'ter-e-wo').value.trim();
    if (!acct && !wo) {
        alert('Please enter at least the Customer Account Number or Work Order Number.');
        return;
    }
    try {
        if (!window.PDFLib) {
            await new Promise((resolve, reject) => {
                const s = document.createElement('script');
                s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js';
                s.onload = resolve; s.onerror = reject;
                document.head.appendChild(s);
            });
        }
        const response = await fetch('./pdf/EzeeFiber_UPS_Label.pdf');
        if (!response.ok) throw new Error('Could not load EzeeFiber_UPS_Label.pdf');
        const existingPdfBytes = await response.arrayBuffer();
        const { PDFDocument, rgb, StandardFonts } = window.PDFLib;
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const page = pdfDoc.getPages()[0];
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontSize = 11;
        const textColor = rgb(0, 0, 0);
        if (acct) page.drawText(acct, { x: 68.7, y: 178.5, size: fontSize, font, color: textColor });
        if (wo)   page.drawText(wo,   { x: 390.4, y: 178.5, size: fontSize, font, color: textColor });
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'EzeeFiber_Return_Label.pdf'; a.click();
        setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (err) {
        alert('Could not generate PDF: ' + err.message);
    }
}

// ── TAB SWITCHING ──
function switchNoteTab(tab, btnEl) {
    document.querySelectorAll('.note-sub-page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.note-sub-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('note-sub-' + tab).classList.add('active');
    btnEl.classList.add('active');
}

function switchTab(tab, btnEl) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('page-' + tab).classList.add('active');
    btnEl.classList.add('active');
}

function switchEmailTab(tab) {
    document.querySelectorAll('.email-sub-page').forEach(p => p.classList.remove('active'));
    document.getElementById('sub-btn-tachus').classList.remove('active-tachus');
    document.getElementById('sub-btn-ezee').classList.remove('active-ezee');
    document.getElementById('email-sub-' + tab).classList.add('active');
    if (tab === 'tachus') {
        document.getElementById('sub-btn-tachus').classList.add('active-tachus');
        switchEmailMiniTab('tachus', 'cancellation', document.getElementById('email-tachus-btn-cancellation'));
    } else {
        document.getElementById('sub-btn-ezee').classList.add('active-ezee');
        switchEmailMiniTab('ezee', 'cancellation', document.getElementById('email-ezee-btn-cancellation'));
    }
}

function switchEmailMiniTab(brand, slug, btnEl) {
    document.querySelectorAll(`#email-sub-${brand} .email-mini-page`).forEach(p => p.classList.remove('active'));
    document.querySelectorAll(`#email-sub-${brand} .email-mini-btn`).forEach(b => b.classList.remove('email-mini-btn-active'));
    document.getElementById(`email-${brand}-${slug}`).classList.add('active');
    btnEl.classList.add('email-mini-btn-active');
}

// ══════════════════════════════════════════════

