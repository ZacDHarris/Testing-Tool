// ── EMAIL TEMPLATES ──
function resetEmailTemplate(outputId, fieldIds, routerPrefix) {
    document.getElementById(outputId).value = '';
    fieldIds.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    if (routerPrefix) {
        const container = document.getElementById(`${routerPrefix}-router-entries`);
        if (container) {
            const rows = container.querySelectorAll('.router-entry');
            rows.forEach((row, i) => {
                if (i === 0) {
                    row.dataset.routerType = '';
                    row.querySelectorAll('.router-type-btn').forEach(b => b.classList.remove('active'));
                    const snInput = row.querySelector('.router-sn-input');
                    if (snInput) snInput.value = '';

                } else {
                    row.remove();
                }
            });
            _updateRouterRemoveBtns(container);
        }
    }
}

function generateRAF() {
    const name = document.getElementById('eraf-name').value || '[Customer Name]';
    const link = document.getElementById('eraf-link').value || '[RAF Link]';
    document.getElementById('eraf-output').value =
`Greetings, ${name}

Here is your referral link. Share it far and wide and watch the savings roll in!

${link}

__How it works__

If you received a referral link:

1. Click the link your friend shared.
1. Enter your address in the above search bar to check availability.
1. Sign up for Ezee Fiber.
1. Enjoy fiber internet with unmatched reliability — and get a $100 credit on your bill once eligible.

If you're sharing your referral link:

1. Share your link (sent to you via email) with friends, family, neighbors, coworkers — anyone who wants better internet.
1. When someone signs up using your link, you earn a $100 credit towards your Ezee Fiber bill once eligible.
1. Share again! There's no limit to how many friends you can refer.

A few things to know

* Your friend must be new to Ezee Fiber (existing customers aren't eligible).
* Your friend must sign up through the referral link shared with them before installation of service.
* Referrers must have already signed up for Ezee Fiber, with no outstanding balance.
* The new customer must keep their service active for at least 30 days.
* Once those requirements are met, both $100 credits will be applied to each account within 7 days.`;
}

function copyRAF() {
    navigator.clipboard.writeText(document.getElementById('eraf-output').value).then(() => {
        document.getElementById('eraf-copy-icon').textContent = '✓';
        document.getElementById('eraf-copy-text').textContent  = 'Copied!';
        setTimeout(() => {
            document.getElementById('eraf-copy-icon').textContent = '📋';
            document.getElementById('eraf-copy-text').textContent  = 'Copy';
        }, 2000);
    });
}

const ROUTER_TYPES = ['EERO PRO6E', 'EERO MAX7', 'EVO AP6700', 'TP-LINK P50', 'TP-LINK PB70', 'TP-LINK P110'];

function setRouterType(value, btnEl) {
    const row = btnEl.closest('.router-entry');
    row.dataset.routerType = value;
    row.querySelectorAll('.router-type-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
}

function addRouterRow(prefix) {
    const container = document.getElementById(`${prefix}-router-entries`);
    const index = container.querySelectorAll('.router-entry').length;
    const row = document.createElement('div');
    row.className = 'router-entry';
    row.dataset.routerType = '';
    const btnHtml = ROUTER_TYPES.map(t =>
        `<button type="button" class="router-type-btn" onclick="setRouterType('${t}', this)">${t}</button>`
    ).join('');
    row.innerHTML = `
        <div class="router-entry-header">
            <span class="router-entry-label">Router ${index + 1}</span>
            <button type="button" class="router-remove-btn" onclick="removeRouterRow(this, '${prefix}')">&#x2715; Remove</button>
        </div>
        <div class="form-group">
            <label>Router Type</label>
            <div class="router-type-grid">${btnHtml}</div>
        </div>
        <div class="form-group">
            <label>Router SN</label>
            <input type="text" class="router-sn-input" placeholder="Enter router serial number">
        </div>`;
    container.appendChild(row);
    _updateRouterRemoveBtns(container);
}

function removeRouterRow(btn, prefix) {
    const container = document.getElementById(`${prefix}-router-entries`);
    btn.closest('.router-entry').remove();
    _updateRouterRemoveBtns(container);
    container.querySelectorAll('.router-entry').forEach((row, i) => {
        const label = row.querySelector('.router-entry-label');
        if (label) label.textContent = `Router ${i + 1}`;
    });
}

function _updateRouterRemoveBtns(container) {
    const rows = container.querySelectorAll('.router-entry');
    rows.forEach(row => {
        const btn = row.querySelector('.router-remove-btn');
        if (btn) btn.style.display = rows.length > 1 ? '' : 'none';
    });
}

function generateEquipReturn() {
    const name  = document.getElementById('ter-e-name').value || '[Customer Name]';
    const acct  = document.getElementById('ter-e-acct').value || 'xxx-xxxxx';
    const modem = document.getElementById('ter-e-modem').value || '[Modem SN]';

    const routerLines = [];
    document.querySelectorAll('#ter-e-router-entries .router-entry').forEach(row => {
        const type = row.dataset.routerType || '[Router Type]';
        const sn   = row.querySelector('.router-sn-input').value || '[Router SN]';
        routerLines.push(`  ROUTER: ${type}  : ${sn}`);
    });

    document.getElementById('ter-e-output').value =
`Subject: Ezee Fiber Equipment Return | ${acct} | Return Code: EZFBRT

Dear ${name}

Thank you for choosing Ezee Fiber as your service Provider.  We strive to make the return process as convenient as possible for our customers.

To facilitate the return process, we kindly request that you return the Ezee Fiber equipment to the nearest UPS store at your earliest convenience.
This will ensure a smooth and efficient return process for you. Please follow the instructions below to initiate the return:


1. Take the Ezee Fiber equipment, ethernet cable and plugs to your nearest UPS store.
2. Present the attached PDF or have it available to show the UPS Store employee.

  MODEM: ${modem}
${routerLines.join('\n')}

Once the equipment has been received and inspected, we will promptly process the disconnection of your account.

Please keep a copy of the return provided to you by the UPS Store associate for your records.
If you have any questions or need assistance with the return process, please do not hesitate to contact our customer service team at 713-255-7500 or reply to this email. We are here to help and ensure that your return experience is hassle-free.

Thank you for choosing Ezee Fiber. We appreciate your business and look forward to serving you again in the future.`;
}

function copyEquipReturn() {
    navigator.clipboard.writeText(document.getElementById('ter-e-output').value).then(() => {
        document.getElementById('ter-e-copy-icon').textContent = '✓';
        document.getElementById('ter-e-copy-text').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('ter-e-copy-icon').textContent = '📋';
            document.getElementById('ter-e-copy-text').textContent = 'Copy';
        }, 2000);
    });
}

function generateReqPic() {
    const name   = document.getElementById('erp-name').value || '[Customer Name]';
    const ticket = document.getElementById('erp-ticket').value || '[Ticket ID]';
    document.getElementById('erp-output').value =
`Hello ${name},

Your ticket ${ticket} is being processed.   Please attach any pictures and additional details related to this case to this email.  Please feel free to keep in touch if you need any further assistance.


Best regards,
EzeeFiber Customer Support
 833-920-5400`;
}

function copyReqPic() {
    navigator.clipboard.writeText(document.getElementById('erp-output').value).then(() => {
        document.getElementById('erp-copy-icon').textContent = '✓';
        document.getElementById('erp-copy-text').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('erp-copy-icon').textContent = '📋';
            document.getElementById('erp-copy-text').textContent = 'Copy';
        }, 2000);
    });
}

function generateWifiKey() {
    const name = document.getElementById('ewsk-name').value || '{{{Recipient.FirstName}}}';

    document.getElementById('ewsk-output').value =
`Subject: Assistance with Wi-Fi Connection Issue


Hello ${name},


Thank you for reaching out!


It appears that your computer is prompting you to enter a PIN to connect to your Wi-Fi network. This screen may look similar to the one below:
To resolve this issue, please select the option labeled "Connect using a security key instead" (highlighted in the image above). Once you select this option, you will be prompted to enter your regular Wi-Fi password instead of a PIN.


If you continue to experience issues or need further assistance, please don't hesitate to contact our Technical Support team at 833-920-5400, option 3.


Thank you for your cooperation. We're here to help if you need additional support!


Kind Regards,

EzeeFiber Customer Service

833-920-5400`;
}

function copyWifiKey() {
    navigator.clipboard.writeText(document.getElementById('ewsk-output').value).then(() => {
        document.getElementById('ewsk-copy-icon').textContent = '✓';
        document.getElementById('ewsk-copy-text').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('ewsk-copy-icon').textContent = '📋';
            document.getElementById('ewsk-copy-text').textContent = 'Copy';
        }, 2000);
    });
}
