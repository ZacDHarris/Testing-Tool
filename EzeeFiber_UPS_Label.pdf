// ── CECR ──
let cecrPriority = null;

function setCecrPriority(level) {
    cecrPriority = level;
    document.querySelectorAll('.priority-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('priority-btn-' + level).classList.add('active');
    document.getElementById('cecr-priority-display').textContent = 'Priority ' + level;
}

function generateCecr() {
    let lines = '';
    lines += lineFlat('Phone',         document.getElementById('cecr-phone').value);
    lines += lineFlat('Address',       document.getElementById('cecr-address').value);
    lines += lineFlat('Ticket ID',     document.getElementById('cecr-ticketId').value);
    lines += lineFlat('Customer Name', document.getElementById('cecr-customerName').value);
    if (cecrPriority) lines += `Priority Level: Priority ${cecrPriority}\n`;
    const cr = (document.getElementById('cecr-customerReport').value || '').trim();
    if (cr) lines += `\nCustomer Report: ${cr}`;
    document.getElementById('cecrGeneratedNote').value = lines.trimEnd();
    document.getElementById('cecrOutputSection').classList.add('show');
    document.getElementById('cecrOutputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyCecr() {
    navigator.clipboard.writeText(document.getElementById('cecrGeneratedNote').value).then(() => {
        document.getElementById('cecrCopyIcon').textContent = '✓';
        document.getElementById('cecrCopyText').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('cecrCopyIcon').textContent = '📋';
            document.getElementById('cecrCopyText').textContent = 'Copy to Dashboard';
        }, 2000);
    });
}

function resetCecr() {
    document.getElementById('cecrForm').reset();
    cecrPriority = null;
    document.querySelectorAll('.priority-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('cecr-priority-display').textContent = '';
    document.getElementById('cecrOutputSection').classList.remove('show');
}

