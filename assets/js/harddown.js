// ── T2 REVIEW ──
let hdProvider = '';
const hdYesNo = {
    hd_verifiedHeadHub: null
};
const selectedT2Troubleshooting = new Set();
const customHdSteps = [];

function setHdProvider(val) {
    hdProvider = val;
    ['hd-provider-tachus','hd-provider-ezee','hd-provider-daynet'].forEach(id =>
        document.getElementById(id).classList.remove('active-tachus','active-ezee','active-daynet')
    );
    if (val === 'Tachus') {
        document.getElementById('hd-provider-tachus').classList.add('active-tachus');
    } else if (val === 'EzeeFiber') {
        document.getElementById('hd-provider-ezee').classList.add('active-ezee');
    } else {
        document.getElementById('hd-provider-daynet').classList.add('active-daynet');
    }
}

function setHdYesNo(field, value, e) {
    hdYesNo[field] = value;
    const buttons = e.target.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active-yes', 'active-no'));
    e.target.classList.add(value ? 'active-yes' : 'active-no');
}

function initT2TroubleshootingGrid() {
    const grid = document.getElementById('t2TroubleshootingGrid');
    troubleshootingOptions.forEach(option => {
        const item = document.createElement('div');
        item.className = 'troubleshooting-item';
        item.textContent = option;
        item.onclick = () => toggleT2Troubleshooting(option, item);
        grid.appendChild(item);
    });
}

function toggleT2Troubleshooting(option, element) {
    if (selectedT2Troubleshooting.has(option)) {
        selectedT2Troubleshooting.delete(option);
        element.classList.remove('selected');
    } else {
        selectedT2Troubleshooting.add(option);
        element.classList.add('selected');
    }
}

function addT2CustomStep() {
    const input = document.getElementById('hd-custom-step-input');
    const text = input.value.trim();
    if (!text) return;
    customHdSteps.push('•' + text);
    renderT2CustomSteps();
    input.value = '';
    input.focus();
}

function removeT2CustomStep(idx) {
    customHdSteps.splice(idx, 1);
    renderT2CustomSteps();
}

function renderT2CustomSteps() {
    const list = document.getElementById('hd-custom-steps-list');
    list.innerHTML = '';
    customHdSteps.forEach((step, idx) => {
        const tag = document.createElement('div');
        tag.className = 'custom-step-tag';
        tag.innerHTML = `<span>${step}</span><button class="custom-step-remove" onclick="removeT2CustomStep(${idx})" title="Remove">×</button>`;
        list.appendChild(tag);
    });
}

function generateHardDown() {
    const allSteps = [...Array.from(selectedT2Troubleshooting), ...customHdSteps];
    let parts = [];

    if (hdProvider) parts.push(`Provider: ${hdProvider}`);

    let customer = '';
    customer += lineFlat('Name',             document.getElementById('hd-name').value);
    customer += lineFlat('Account #',        document.getElementById('hd-acct').value);
    customer += lineFlat('Address',          document.getElementById('hd-address').value);
    customer += lineFlat('Callback Contact', document.getElementById('hd-callbackContact').value);
    const issue = (document.getElementById('hd-issueDescription').value || '').trim();
    if (issue) customer += `Issue Description: ${issue}\n`;
    if (customer.trim()) parts.push(customer.trimEnd());

    let network = '';
    network += lineFlat('Node',         document.getElementById('hd-node').value);
    network += lineFlat('ONT ID',       document.getElementById('hd-ontId').value);
    network += lineFlat('Router ID',    document.getElementById('hd-routerId').value);
    network += lineFlat('Alarms',       document.getElementById('hd-alarms').value);
    network += lineFlat('Light Levels', document.getElementById('hd-lightLevels').value);
    if (hdYesNo.hd_verifiedHeadHub !== null) network += lineFlat('Verified Head/Hub?', hdYesNo.hd_verifiedHeadHub ? 'Yes' : 'No');
    if (network.trim()) parts.push(network.trimEnd());

    if (allSteps.length > 0) parts.push(`Troubleshooting Steps:\n${allSteps.join('\n')}`);

    document.getElementById('hdGeneratedNote').value = parts.join('\n\n');
    document.getElementById('hdOutputSection').classList.add('show');
    document.getElementById('hdOutputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyHardDown() {
    navigator.clipboard.writeText(document.getElementById('hdGeneratedNote').value).then(() => {
        document.getElementById('hdCopyIcon').textContent = '✓';
        document.getElementById('hdCopyText').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('hdCopyIcon').textContent = '📋';
            document.getElementById('hdCopyText').textContent = 'Copy to Dashboard';
        }, 2000);
    });
}

function resetHardDown() {
    hdProvider = '';
    ['hd-provider-tachus','hd-provider-ezee','hd-provider-daynet'].forEach(id =>
        document.getElementById(id).classList.remove('active-tachus','active-ezee','active-daynet')
    );
    ['hd-name','hd-acct','hd-address','hd-callbackContact','hd-node','hd-ontId',
     'hd-routerId','hd-alarms','hd-lightLevels','hd-issueDescription'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    Object.keys(hdYesNo).forEach(key => hdYesNo[key] = null);
    document.querySelectorAll('form#hardDownForm .yes-no-buttons button').forEach(btn => btn.classList.remove('active-yes', 'active-no'));
    selectedT2Troubleshooting.clear();
    document.querySelectorAll('#t2TroubleshootingGrid .troubleshooting-item').forEach(item => item.classList.remove('selected'));
    customHdSteps.length = 0;
    renderT2CustomSteps();
    document.getElementById('hd-custom-step-input').value = '';
    document.getElementById('hdOutputSection').classList.remove('show');
}
