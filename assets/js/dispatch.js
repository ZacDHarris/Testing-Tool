// ── DISPATCH ──
let dispatchBrand = '';

function setDispatchBrand(brand) {
    dispatchBrand = brand;
    const display = document.getElementById('dispatch-brand-display');
    const tBtn = document.getElementById('dispatch-btn-tachus');
    const eBtn = document.getElementById('dispatch-btn-ezee');
    const dBtn = document.getElementById('dispatch-btn-daynet');
    tBtn.classList.remove('active-tachus'); eBtn.classList.remove('active-ezee'); dBtn.classList.remove('active-daynet');
    if (brand === 'Tachus') {
        tBtn.classList.add('active-tachus');
        display.textContent = 'Tachus';
        display.className = 'dispatch-brand-display brand-tachus';
    } else if (brand === 'DayNet') {
        dBtn.classList.add('active-daynet');
        display.textContent = 'DayNet';
        display.className = 'dispatch-brand-display brand-daynet';
    } else {
        eBtn.classList.add('active-ezee');
        display.textContent = 'EzeeFiber';
        display.className = 'dispatch-brand-display brand-ezee';
    }
}

function generateDispatch() {
    let parts = [];
    if (dispatchBrand) parts.push(dispatchBrand === 'Tachus' ? 'Tachus' : dispatchBrand === 'DayNet' ? 'DayNet' : 'EzeeFiber');
    let details = '';
    const dpRegion = document.getElementById('dp-techRegion').value;
    if (dpRegion) details += lineFlat('Tech Region', dpRegion);
    details += lineFlat('Customer Name', document.getElementById('dp-customerName').value);
    details += lineFlat('Address',       document.getElementById('dp-address').value);
    details += lineFlat('Account #',     document.getElementById('dp-accountNumber').value);
    details += lineFlat('WO #',          document.getElementById('dp-woNumber').value);
    const woTypeEl = document.getElementById('dp-WOType');
    if (woTypeEl.value) details += lineFlat('WO Type', woTypeEl.options[woTypeEl.selectedIndex].text);
    if (details.trim()) parts.push(details.trimEnd());
    const cr = (document.getElementById('dp-customerReporting').value || '').trim();
    if (cr) parts.push(`Customer Reporting: ${cr}`);
    document.getElementById('dpGeneratedNote').value = parts.join('\n\n');
    document.getElementById('dpOutputSection').classList.add('show');
    document.getElementById('dpOutputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyDispatch() {
    navigator.clipboard.writeText(document.getElementById('dpGeneratedNote').value).then(() => {
        document.getElementById('dpCopyIcon').textContent = '✓';
        document.getElementById('dpCopyText').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('dpCopyIcon').textContent = '📋';
            document.getElementById('dpCopyText').textContent = 'Copy to Dashboard';
        }, 2000);
    });
}

function resetDispatch() {
    document.getElementById('dispatchForm').reset();
    document.getElementById('dp-techRegion').value = '';
    document.getElementById('dp-WOType').value = '';
    dispatchBrand = '';
    document.getElementById('dispatch-btn-tachus').classList.remove('active-tachus');
    document.getElementById('dispatch-btn-ezee').classList.remove('active-ezee');
    document.getElementById('dispatch-btn-daynet').classList.remove('active-daynet');
    const display = document.getElementById('dispatch-brand-display');
    display.textContent = ''; display.className = 'dispatch-brand-display';
    document.getElementById('dpOutputSection').classList.remove('show');
}

