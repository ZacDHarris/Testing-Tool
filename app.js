//  TRUCK ROLL STATE
// ══════════════════════════════════════════════
let trProvider = '';
const trEquip = { ont: '', router: '' };
const trYesNo = {
    tr_devicesDisconnecting: null,
    tr_networkStable: null,
    tr_wifiInterference: null,
    tr_constructionInArea: null
};
const selectedTroubleshooting = new Set();
const customTrSteps = [];

function setTrProvider(val) {
    trProvider = val;
    document.getElementById('tr-provider-tachus').classList.remove('active-tachus','active-ezee');
    document.getElementById('tr-provider-ezee').classList.remove('active-tachus','active-ezee');
    if (val === 'Tachus') {
        document.getElementById('tr-provider-tachus').classList.add('active-tachus');
    } else {
        document.getElementById('tr-provider-ezee').classList.add('active-ezee');
    }
}

function setEquip(type, val, btnEl) {
    trEquip[type] = val;
    const groupId = type === 'ont' ? 'tr-ont-btns' : 'tr-router-btns';
    document.getElementById(groupId).querySelectorAll('.equip-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    const otherId = type === 'ont' ? 'tr-ont-other' : 'tr-router-other';
    document.getElementById(otherId).style.display = val === 'Other' ? 'block' : 'none';
    if (val !== 'Other') document.getElementById(otherId).value = '';
}

const troubleshootingOptions = [
    "•Power Cycled Modem","•Defaulted Modem","•Reboot Modem",
    "•Activated OLT Bridge","•Flushed Bridge","•Bounce WAN Port",
    "•Checked Fiber Patch Cable","•Ascending Bip8Errors","•Factory Reset Modem",
    "•Cleared Counters","•Checked Cx Power","•Power Cycled Router","•Firmware Update",
    "•Swapped gateway router","•Temporarily Disable 5GHz","•Enabled Guest SSID",
    "•Disabled IPv6","•Factory Reset Routers","•Optimization on Network","•Changed DNS Server to:"
];

function initTroubleshootingGrid() {
    const grid = document.getElementById('troubleshootingGrid');
    troubleshootingOptions.forEach(option => {
        const item = document.createElement('div');
        item.className = 'troubleshooting-item';
        item.textContent = option;
        item.onclick = () => toggleTroubleshooting(option, item);
        grid.appendChild(item);
    });
}

function toggleTroubleshooting(option, element) {
    if (selectedTroubleshooting.has(option)) {
        selectedTroubleshooting.delete(option);
        element.classList.remove('selected');
    } else {
        selectedTroubleshooting.add(option);
        element.classList.add('selected');
    }
}

function addCustomStep() {
    const input = document.getElementById('tr-custom-step-input');
    const text = input.value.trim();
    if (!text) return;
    const step = '•' + text;
    customTrSteps.push(step);
    renderCustomSteps();
    input.value = '';
    input.focus();
}

function removeCustomStep(idx) {
    customTrSteps.splice(idx, 1);
    renderCustomSteps();
}

function renderCustomSteps() {
    const list = document.getElementById('tr-custom-steps-list');
    list.innerHTML = '';
    customTrSteps.forEach((step, idx) => {
        const tag = document.createElement('div');
        tag.className = 'custom-step-tag';
        tag.innerHTML = `<span>${step}</span><button class="custom-step-remove" onclick="removeCustomStep(${idx})" title="Remove">×</button>`;
        list.appendChild(tag);
    });
}

function setYesNo(field, value, e) {
    trYesNo[field] = value;
    const buttons = e.target.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active-yes', 'active-no'));
    e.target.classList.add(value ? 'active-yes' : 'active-no');
}


function generateNote() {
    const ontSN     = (document.getElementById('tr-ont-sn').value || '').trim();
    const routerVal = trEquip.router === 'Other'
        ? (document.getElementById('tr-router-other').value.trim() || 'Other')
        : trEquip.router;
    const routerSN  = (document.getElementById('tr-router-sn').value || '').trim();
    const ontLL     = (document.getElementById('tr-lightLevels-ont').value || '').trim();
    const oltLL     = (document.getElementById('tr-lightLevels-olt').value || '').trim();
    const allSteps  = [...Array.from(selectedTroubleshooting), ...customTrSteps];

    let equip = '';
    if (ontSN)     equip += `  ONT SN: ${ontSN}\n`;
    if (routerVal) equip += `  Router: ${routerVal}\n`;
    if (routerSN)  equip += `  Router SN: ${routerSN}\n`;

    let custDetails = '';
    custDetails += line('Name',    document.getElementById('tr-name').value);
    custDetails += line('Phone',   document.getElementById('tr-phone').value);
    custDetails += line('Acct #',  document.getElementById('tr-acct').value);
    custDetails += line('Address', document.getElementById('tr-address').value);
    custDetails += line('Node',    document.getElementById('tr-node').value);

    let netWifi = '';
    netWifi += line('Alarm Code(s)', document.getElementById('tr-alarmCodes').value);
    netWifi += line('Speed Test',    document.getElementById('tr-speedTest').value);
    netWifi += lineYN('Devices Disconnecting?', trYesNo.tr_devicesDisconnecting);
    netWifi += lineYN('Network Stable?',        trYesNo.tr_networkStable);
    if (ontLL || oltLL) {
        const llParts = [];
        if (ontLL) llParts.push(`ONT: ${ontLL}`);
        if (oltLL) llParts.push(`OLT: ${oltLL}`);
        netWifi += `  Light Levels — ${llParts.join(' / ')}\n`;
    }
    netWifi += lineYN('WiFi Interference?',    trYesNo.tr_wifiInterference);
    netWifi += lineYN('Construction in Area?', trYesNo.tr_constructionInArea);

    let parts = [];
    if (trProvider)             parts.push(`Provider: ${trProvider}`);
    const cr = (document.getElementById('tr-customerReporting').value || '').trim();
    if (cr)                     parts.push(`Customer Reporting: ${cr}`);
    if (equip.trim())           parts.push(`Equipment\n${equip.trimEnd()}`);
    if (custDetails.trim())     parts.push(`Customer Details\n${custDetails.trimEnd()}`);
    if (netWifi.trim())         parts.push(`Network & WiFi\n${netWifi.trimEnd()}`);
    if (allSteps.length > 0)    parts.push(`Troubleshooting Steps:\n${allSteps.join('\n')}`);
    const init = (document.getElementById('tr-agentInitials').value || '').trim();
    if (init)                   parts.push(`Agent Initials: ${init}`);

    document.getElementById('generatedNote').value = parts.join('\n\n');
    document.getElementById('outputSection').classList.add('show');
    document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById('generatedNote').value).then(() => {
        document.getElementById('copyIcon').textContent = '✓';
        document.getElementById('copyText').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('copyIcon').textContent = '📋';
            document.getElementById('copyText').textContent = 'Copy to Dashboard';
        }, 2000);
    });
}

function resetForm() {
    // Provider
    trProvider = '';
    document.getElementById('tr-provider-tachus').classList.remove('active-tachus','active-ezee');
    document.getElementById('tr-provider-ezee').classList.remove('active-tachus','active-ezee');
    // Equipment
    trEquip.ont = ''; trEquip.router = '';
    document.querySelectorAll('#tr-router-btns .equip-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tr-ont-sn').value = '';
    document.getElementById('tr-router-sn').value = '';
    document.getElementById('tr-router-other').style.display = 'none';
    document.getElementById('tr-router-other').value = '';
    // Text fields
    ['tr-customerReporting','tr-name','tr-phone','tr-acct','tr-address','tr-node',
     'tr-alarmCodes','tr-speedTest','tr-lightLevels-ont','tr-lightLevels-olt','tr-agentInitials',
     'tr-ont-sn','tr-router-sn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    // Yes/No
    Object.keys(trYesNo).forEach(k => { trYesNo[k] = null; });
    document.querySelectorAll('#note-sub-truckroll .yes-no-buttons button').forEach(btn => {
        btn.classList.remove('active-yes','active-no');
    });
    // Troubleshooting
    selectedTroubleshooting.clear();
    document.querySelectorAll('.troubleshooting-item').forEach(item => item.classList.remove('selected'));
    customTrSteps.length = 0;
    renderCustomSteps();
    document.getElementById('tr-custom-step-input').value = '';
    // Output
    document.getElementById('outputSection').classList.remove('show');
}

