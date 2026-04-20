// ── EMAIL TEMPLATES ──
function resetEmailTemplate(outputId, fieldIds, routerPrefix) {
    document.getElementById(outputId).value = '';
    fieldIds.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    if (routerPrefix) {
        document.querySelectorAll(`#${routerPrefix}-router-display`).forEach(el => el.textContent = '');
        document.querySelectorAll('.router-type-btn').forEach(btn => btn.classList.remove('active'));
        if (routerPrefix === 'ter-t') routerTypeSelected['tachus'] = '';
        if (routerPrefix === 'ter-e') routerTypeSelected['ezee'] = '';
    }
}

function generateRAF(brand) {
    const p    = brand === 'tachus' ? 'traf' : 'eraf';
    const name = document.getElementById(`${p}-name`).value || '[Customer Name]';
    const link = document.getElementById(`${p}-link`).value || '[RAF Link]';
    document.getElementById(`${p}-output`).value =
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

function copyRAF(brand) {
    const p    = brand === 'tachus' ? 'traf' : 'eraf';
    const icon = `${p}-copy-icon`;
    const txt  = `${p}-copy-text`;
    navigator.clipboard.writeText(document.getElementById(`${p}-output`).value).then(() => {
        document.getElementById(icon).textContent = '✓';
        document.getElementById(txt).textContent  = 'Copied!';
        setTimeout(() => {
            document.getElementById(icon).textContent = '📋';
            document.getElementById(txt).textContent  = 'Copy';
        }, 2000);
    });
}

const routerTypeSelected = { tachus: '', ezee: '' };

function setRouterType(prefix, value, btnEl) {
    const brand = prefix.includes('-t') ? 'tachus' : 'ezee';
    routerTypeSelected[brand] = value;
    btnEl.closest('.router-type-grid').querySelectorAll('.router-type-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    const dispId = prefix + '-router-display';
    document.getElementById(dispId).textContent = value;
}

function generateEquipReturn(brand) {
    const isTachus = brand === 'tachus';
    const p        = isTachus ? 'ter-t' : 'ter-e';
    const name     = document.getElementById(`${p}-name`).value || '[Customer Name]';
    const modem    = document.getElementById(`${p}-modem`).value || '[Modem SN]';
    const router   = routerTypeSelected[brand] || '[Router Type]';
    const routerSN = document.getElementById(`${p}-router-sn`).value || '[Router SN]';

    document.getElementById(`${p}-output`).value =
`Subject: Ezee Fiber Equipment Return | xxx-xxxxx | Return Code: EZFBRT

Dear ${name}

Thank you for choosing Ezee Fiber as your service Provider.  We strive to make the return process as convenient as possible for our customers.

To facilitate the return process, we kindly request that you return the Ezee Fiber equipment to the nearest UPS store at your earliest convenience.
This will ensure a smooth and efficient return process for you. Please follow the instructions below to initiate the return:


1. Take the Ezee Fiber equipment, ethernet cable and plugs to your nearest UPS store.
2. Present the attached PDF or have it available to show the UPS Store employee.

  MODEM: ${modem}
  ROUTER: ${router}  : ${routerSN}

Once the equipment has been received and inspected, we will promptly process the disconnection of your account.

Please keep a copy of the return provided to you by the UPS Store associate for your records.
If you have any questions or need assistance with the return process, please do not hesitate to contact our customer service team at 713-255-7500 or reply to this email. We are here to help and ensure that your return experience is hassle-free.

Thank you for choosing Ezee Fiber. We appreciate your business and look forward to serving you again in the future.`;
}

function copyEquipReturn(brand) {
    const p      = brand === 'tachus' ? 'ter-t' : 'ter-e';
    const output = document.getElementById(`${p}-output`).value;
    navigator.clipboard.writeText(output).then(() => {
        document.getElementById(`${p}-copy-icon`).textContent = '✓';
        document.getElementById(`${p}-copy-text`).textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById(`${p}-copy-icon`).textContent = '📋';
            document.getElementById(`${p}-copy-text`).textContent = 'Copy';
        }, 2000);
    });
}

function generateReqPic(brand) {
    if (brand === 'tachus') {
        const name   = document.getElementById('trp-name').value || '[Customer Name]';
        const ticket = document.getElementById('trp-ticket').value || '[Ticket ID]';
        document.getElementById('trp-output').value =
`Hello ${name},

Your ticket ${ticket} is being processed.   Please attach any pictures and additional details related to this case to this email.  Please feel free to keep in touch if you need any further assistance.

 
Best regards, 
Tachus Customer Support
 832.791.1100`;
    } else {
        const name   = document.getElementById('erp-name').value || '[Customer Name]';
        const ticket = document.getElementById('erp-ticket').value || '[Ticket ID]';
        document.getElementById('erp-output').value =
`Hello ${name},

Your ticket ${ticket} is being processed.   Please attach any pictures and additional details related to this case to this email.  Please feel free to keep in touch if you need any further assistance.

 
Best regards, 
EzeeFiber Customer Support
 833-920-5400`;
    }
}

function copyReqPic(brand) {
    const outputId = brand === 'tachus' ? 'trp-output'    : 'erp-output';
    const iconId   = brand === 'tachus' ? 'trp-copy-icon' : 'erp-copy-icon';
    const textId   = brand === 'tachus' ? 'trp-copy-text' : 'erp-copy-text';
    navigator.clipboard.writeText(document.getElementById(outputId).value).then(() => {
        document.getElementById(iconId).textContent = '✓';
        document.getElementById(textId).textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById(iconId).textContent = '📋';
            document.getElementById(textId).textContent = 'Copy';
        }, 2000);
    });
}

function generateWifiKey(brand) {
    const isTachus = brand === 'tachus';
    const nameId   = isTachus ? 'twsk-name'   : 'ewsk-name';
    const outputId = isTachus ? 'twsk-output'  : 'ewsk-output';
    const phone    = isTachus ? '832.791.1100' : '833-920-5400';
    const support  = isTachus ? 'Tachus Customer Service' : 'EzeeFiber Customer Service';
    const name     = document.getElementById(nameId).value || '{{{Recipient.FirstName}}}';

    document.getElementById(outputId).value =
`Subject: Assistance with Wi-Fi Connection Issue


Hello ${name},


Thank you for reaching out!


It appears that your computer is prompting you to enter a PIN to connect to your Wi-Fi network. This screen may look similar to the one below:
To resolve this issue, please select the option labeled "Connect using a security key instead" (highlighted in the image above). Once you select this option, you will be prompted to enter your regular Wi-Fi password instead of a PIN.


If you continue to experience issues or need further assistance, please don't hesitate to contact our Technical Support team at ${phone}, option 3.


Thank you for your cooperation. We're here to help if you need additional support!


Kind Regards,

${support}

${phone}`;
}

function copyWifiKey(brand) {
    const outputId = brand === 'tachus' ? 'twsk-output'  : 'ewsk-output';
    const iconId   = brand === 'tachus' ? 'twsk-copy-icon' : 'ewsk-copy-icon';
    const textId   = brand === 'tachus' ? 'twsk-copy-text' : 'ewsk-copy-text';
    navigator.clipboard.writeText(document.getElementById(outputId).value).then(() => {
        document.getElementById(iconId).textContent = '✓';
        document.getElementById(textId).textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById(iconId).textContent = '📋';
            document.getElementById(textId).textContent = 'Copy';
        }, 2000);
    });
}

