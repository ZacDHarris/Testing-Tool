// ── STICKY NOTES ──
function toggleNotesPanel() {
    document.getElementById('sticky-notes-panel').classList.toggle('open');
}
function clearNotes() {
    if (confirm('Clear all notes?')) {
        document.getElementById('sticky-notes-area').value = '';
        localStorage.setItem('ef_sticky_notes', '');
    }
}
function copyNotes() {
    const txt = document.getElementById('sticky-notes-area').value;
    if (!txt.trim()) return;
    navigator.clipboard.writeText(txt).then(() => {
        const btn = document.getElementById('notes-copy-btn');
        btn.textContent = '✓ Copied';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    });
}
