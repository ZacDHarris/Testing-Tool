// ══════════════════════════════════════════════
//  NOC TICKETING
// ══════════════════════════════════════════════

// ── NOC SUB-TAB SWITCHING ──
function switchNocTab(tab, btnEl) {
    document.querySelectorAll('.note-sub-page, .noc-sub-page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.note-sub-btn, .noc-sub-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('noc-sub-' + tab).classList.add('active');
    btnEl.classList.add('active');
}

// ══════════════════════════════════════════════
//  COMMERCIAL CUSTOMER
// ══════════════════════════════════════════════
const customNocCommercialSteps = [];

function addNocCommercialCustomStep() {
    const input = document.getElementById('nc-custom-step-input');
    const text = input.value.trim();
    if (!text) return;
    const step = '•' + text;
    customNocCommercialSteps.push(step);
    renderNocCommercialCustomSteps();
    input.value = '';
    input.focus();
}

function removeNocCommercialCustomStep(idx) {
    customNocCommercialSteps.splice(idx, 1);
    renderNocCommercialCustomSteps();
}

function renderNocCommercialCustomSteps() {
    const list = document.getElementById('nc-custom-steps-list');
    list.innerHTML = '';
    customNocCommercialSteps.forEach((step, idx) => {
        const tag = document.createElement('div');
        tag.className = 'custom-step-tag';
        tag.innerHTML = `<span>${step}</span><button class="custom-step-remove" onclick="removeNocCommercialCustomStep(${idx})" title="Remove">×</button>`;
        list.appendChild(tag);
    });
}

function generateCommercial() {
    let note = 'NOC COMMERCIAL CUSTOMER\n\n';
    note += lineFlat('Business Name',              document.getElementById('nc-businessName').value);
    note += lineFlat('Call Back Number',           document.getElementById('nc-callBack').value);
    note += lineFlat('Point of Contact',           document.getElementById('nc-poc').value);
    note += lineFlat('Time Issue Started',         document.getElementById('nc-timeIssue').value);
    const allSteps = [...customNocCommercialSteps];
    if (allSteps.length > 0) note += `Troubleshooting Steps:\n${allSteps.join('\n')}\n`;
    note += lineFlat('Issue Description',          document.getElementById('nc-customerReporting').value);
    document.getElementById('ncGeneratedNote').value = note.trimEnd();
    document.getElementById('ncOutputSection').classList.add('show');
    document.getElementById('ncOutputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyCommercial() {
    navigator.clipboard.writeText(document.getElementById('ncGeneratedNote').value).then(() => {
        document.getElementById('ncCopyIcon').textContent = '✓';
        document.getElementById('ncCopyText').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('ncCopyIcon').textContent = '📋';
            document.getElementById('ncCopyText').textContent = 'Copy to Dashboard';
        }, 2000);
    });
}

function resetCommercial() {
    document.getElementById('commercialForm').reset();
    customNocCommercialSteps.length = 0;
    renderNocCommercialCustomSteps();
    document.getElementById('nc-custom-step-input').value = '';
    document.getElementById('ncOutputSection').classList.remove('show');
}

// ══════════════════════════════════════════════
//  CGNAT REQUEST
// ══════════════════════════════════════════════
const cgnatYesNo = {
    cgnat_serviceDevice:       null,
    cgnat_ipv6:                null,
    cgnat_vpn:                 null,
    cgnat_postChange:          null,
};
let cgnatRouterType = '';

function setCgnatYesNo(field, value, e) {
    cgnatYesNo[field] = value;
    const buttons = e.target.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active-yes', 'active-no'));
    e.target.classList.add(value ? 'active-yes' : 'active-no');
}

function setCgnatRouter(val, btnEl) {
    cgnatRouterType = val;
    document.querySelectorAll('#cgnat-router-btns .equip-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
}

function generateCgnat() {
    let note = 'CGNAT ESCALATION – PUBLIC IP REQUEST\n\n';
    note += lineFlat('Customer Name',              document.getElementById('cg-customerName').value);
    note += lineFlat('ONT ID',                     document.getElementById('cg-ontId').value);
    note += lineFlat('MAC Address',                document.getElementById('cg-macAddress').value);
    note += lineFlat('Current Learned IP',         document.getElementById('cg-currentIp').value);
    note += lineFlat('Service Area',               document.getElementById('cg-serviceArea').value);
    note += lineFlat('Service Package',            document.getElementById('cg-servicePackage').value);
    note += lineFlat('Installation Address',       document.getElementById('cg-installAddress').value);
    note += lineFlat('Issue Description',          document.getElementById('cg-issueDesc').value);
    if (cgnatYesNo.cgnat_serviceDevice !== null)
        note += `Service/Device Affected: ${cgnatYesNo.cgnat_serviceDevice ? 'Yes' : 'No'}\n`;
    if (cgnatYesNo.cgnat_ipv6 !== null)
        note += `IPv6 Compatibility: ${cgnatYesNo.cgnat_ipv6 ? 'Yes' : 'No'}\n`;
    if (cgnatYesNo.cgnat_vpn !== null)
        note += `VPN Tried: ${cgnatYesNo.cgnat_vpn ? 'Yes' : 'No'}\n`;
    if (cgnatRouterType)
        note += `Router Type: ${cgnatRouterType}\n`;
    note += lineFlat('Preferred Time for Change',  document.getElementById('cg-preferredTime').value);
    if (cgnatYesNo.cgnat_postChange !== null)
        note += `Post-Change Confirmation: ${cgnatYesNo.cgnat_postChange ? 'Yes' : 'No'}\n`;
    document.getElementById('cgGeneratedNote').value = note.trimEnd();
    document.getElementById('cgOutputSection').classList.add('show');
    document.getElementById('cgOutputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyCgnat() {
    navigator.clipboard.writeText(document.getElementById('cgGeneratedNote').value).then(() => {
        document.getElementById('cgCopyIcon').textContent = '✓';
        document.getElementById('cgCopyText').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('cgCopyIcon').textContent = '📋';
            document.getElementById('cgCopyText').textContent = 'Copy to Dashboard';
        }, 2000);
    });
}

function resetCgnat() {
    document.getElementById('cgnatForm').reset();
    Object.keys(cgnatYesNo).forEach(k => { cgnatYesNo[k] = null; });
    document.querySelectorAll('#noc-sub-cgnat .yes-no-buttons button').forEach(btn => {
        btn.classList.remove('active-yes', 'active-no');
    });
    cgnatRouterType = '';
    document.querySelectorAll('#cgnat-router-btns .equip-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('cgOutputSection').classList.remove('show');
}

// ══════════════════════════════════════════════
//  OUTAGE INFORMANT
// ══════════════════════════════════════════════
const nocOutageImages = [];

function handleOutageImageUpload(e) {
    const files = Array.from(e.target.files);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            nocOutageImages.push({ name: file.name, src: ev.target.result });
            renderOutageImages();
        };
        reader.readAsDataURL(file);
    });
    // Reset input so same file can be re-selected
    e.target.value = '';
}

function renderOutageImages() {
    const container = document.getElementById('outage-image-previews');
    container.innerHTML = '';
    nocOutageImages.forEach((img, idx) => {
        const wrap = document.createElement('div');
        wrap.className = 'outage-img-wrap';
        wrap.innerHTML = `
            <img src="${img.src}" alt="${img.name}" class="outage-img-thumb">
            <div class="outage-img-name">${img.name}</div>
            <button type="button" class="outage-img-remove" onclick="removeOutageImage(${idx})">✕</button>
        `;
        container.appendChild(wrap);
    });
}

function removeOutageImage(idx) {
    nocOutageImages.splice(idx, 1);
    renderOutageImages();
}

function generateOutage() {
    // Build plain-text lines
    let textLines = 'OUTAGE INFORMANT\n\n';
    textLines += lineFlat('Customer Address',        document.getElementById('oi-address').value);
    textLines += lineFlat('Cabinet/PON',             document.getElementById('oi-cabinet').value);
    textLines += lineFlat('Est. Affected Customers', document.getElementById('oi-affected').value);
    textLines += lineFlat('Issue Description',       document.getElementById('oi-customerReporting').value);

    // Build the rich HTML output: pre-formatted text + inline images
    const div = document.getElementById('oiGeneratedNote');
    div.innerHTML = '';

    // Text block — use a <pre> so whitespace/newlines render correctly
    const pre = document.createElement('pre');
    pre.className = 'outage-note-text';
    pre.textContent = textLines.trimEnd();
    div.appendChild(pre);

    // Inline images
    if (nocOutageImages.length > 0) {
        const imgHeader = document.createElement('p');
        imgHeader.className = 'outage-img-header';
        imgHeader.textContent = `Outage Images (${nocOutageImages.length}):`;
        div.appendChild(imgHeader);

        const imgGrid = document.createElement('div');
        imgGrid.className = 'outage-inline-imgs';
        nocOutageImages.forEach(img => {
            const el = document.createElement('img');
            el.src = img.src;
            el.alt = img.name;
            el.className = 'outage-inline-img';
            imgGrid.appendChild(el);
        });
        div.appendChild(imgGrid);
    }

    document.getElementById('oiOutputSection').classList.add('show');
    document.getElementById('oiOutputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyOutage() {
    const div = document.getElementById('oiGeneratedNote');
    if (!div.innerHTML.trim()) return;

    // Build HTML blob: text + images as base64 data URIs (pastes into rich-text fields)
    const preEl = div.querySelector('pre');
    const escapedText = preEl
        ? preEl.textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        : '';
    let htmlContent = '<pre style="font-family:monospace;white-space:pre-wrap;">' + escapedText + '</pre>';

    if (nocOutageImages.length > 0) {
        htmlContent += '<p><strong>Outage Images:</strong></p>';
        nocOutageImages.forEach(img => {
            htmlContent += `<img src="${img.src}" alt="${img.name}" style="max-width:480px;display:block;margin:8px 0;">`;
        });
    }

    const textContent = div.querySelector('pre') ? div.querySelector('pre').textContent : '';

    try {
        // Use Clipboard API with rich HTML + plain text fallback
        const item = new ClipboardItem({
            'text/html':  new Blob([htmlContent],  { type: 'text/html' }),
            'text/plain': new Blob([textContent],  { type: 'text/plain' }),
        });
        navigator.clipboard.write([item]).then(() => {
            document.getElementById('oiCopyIcon').textContent = '✓';
            document.getElementById('oiCopyText').textContent = 'Copied with images!';
            setTimeout(() => {
                document.getElementById('oiCopyIcon').textContent = '📋';
                document.getElementById('oiCopyText').textContent = 'Copy to Dashboard';
            }, 2500);
        }).catch(() => {
            // Fallback: copy text only if ClipboardItem isn't supported
            navigator.clipboard.writeText(textContent).then(() => {
                document.getElementById('oiCopyIcon').textContent = '✓';
                document.getElementById('oiCopyText').textContent = 'Copied (text only)';
                setTimeout(() => {
                    document.getElementById('oiCopyIcon').textContent = '📋';
                    document.getElementById('oiCopyText').textContent = 'Copy to Dashboard';
                }, 2500);
            });
        });
    } catch {
        navigator.clipboard.writeText(textContent);
    }
}

function resetOutage() {
    document.getElementById('outageForm').reset();
    nocOutageImages.length = 0;
    renderOutageImages();
    const div = document.getElementById('oiGeneratedNote');
    div.innerHTML = '';
    document.getElementById('oiOutputSection').classList.remove('show');
}