// ── HARD DOWN ──
const hdYesNoData = {
    hd_devicesDisconnecting: null, hd_networkStable: null,
    hd_verifiedHeadEnd: null, hd_wifiInterference: null,
    hd_equipmentRebooted: null, hd_connectionsVerified: null,
    hd_routerTroubleshooting: null, hd_otherCustomers: null
};

function setHdYesNo(field, value, e) {
    hdYesNoData[field] = value;
    const buttons = e.target.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active-yes','active-no'));
    e.target.classList.add(value ? 'active-yes' : 'active-no');
}

function generateHardDown() {
    const ontLL = (document.getElementById('hd-lightLevels-ont').value || '').trim();
    const oltLL = (document.getElementById('hd-lightLevels-olt').value || '').trim();
    let lines = 'HARD DOWN\n\n';
    lines += lineFlat('Customer Is Reporting', document.getElementById('hd-customerReporting').value);
    lines += lineFlat('Alarm Code(s)',          document.getElementById('hd-alarmCodes').value);
    lines += lineFlat('Speed Test (Down/Up)',   document.getElementById('hd-speedTest').value);
    lines += lineYNFlat('Are Devices Disconnecting',          hdYesNoData.hd_devicesDisconnecting);
    lines += lineYNFlat('Is Network Stable',                  hdYesNoData.hd_networkStable);
    if (ontLL || oltLL) {
        const llParts = [];
        if (ontLL) llParts.push(`ONT: ${ontLL}`);
        if (oltLL) llParts.push(`OLT: ${oltLL}`);
        lines += `Light Levels — ${llParts.join(' / ')}\n`;
    }
    lines += lineFlat('L2-User Aligned',                      document.getElementById('hd-l2UserAligned').value);
    lines += lineYNFlat('Verified Head End/Hub',              hdYesNoData.hd_verifiedHeadEnd);
    lines += lineYNFlat('Is There Wi-Fi Channel Interference', hdYesNoData.hd_wifiInterference);
    lines += lineYNFlat('Was Equipment Rebooted',             hdYesNoData.hd_equipmentRebooted);
    lines += lineYNFlat('Are All Connections Verified',       hdYesNoData.hd_connectionsVerified);
    lines += lineFlat('Timeframe When Issues Started',         document.getElementById('hd-timeframe').value);
    lines += lineYNFlat('Was Basic Router Troubleshooting Done', hdYesNoData.hd_routerTroubleshooting);
    lines += lineFlat('Troubleshooting Steps Taken',           document.getElementById('hd-troubleshootingSteps').value);
    lines += lineYNFlat('Are Other Customers Affected',       hdYesNoData.hd_otherCustomers);
    document.getElementById('hdGeneratedNote').value = lines.trimEnd();
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
    document.getElementById('hardDownForm').reset();
    document.getElementById('hd-lightLevels-ont').value = '';
    document.getElementById('hd-lightLevels-olt').value = '';
    Object.keys(hdYesNoData).forEach(k => { hdYesNoData[k] = null; });
    document.querySelectorAll('#note-sub-harddown .yes-no-buttons button').forEach(btn => {
        btn.classList.remove('active-yes','active-no');
    });
    document.getElementById('hdOutputSection').classList.remove('show');
}

