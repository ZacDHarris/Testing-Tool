// Work Order Type lookup data
const WO_TYPE = [
    { code: 'BDC', label: 'Bad Drop Connect' },
    { code: 'CIO', label: 'COM Install' },
    { code: 'CLT', label: 'COM Lit' },
    { code: 'CNN', label: 'COM Near-Net' },
    { code: 'COS', label: 'Change of Service' },
    { code: 'CSV', label: 'Chronic 2+' },
    { code: 'EQP', label: 'Equipment Swap' },
    { code: 'HOT', label: 'HOTEscalation' },
    { code: 'INA', label: 'Inactivate' },
    { code: 'ISS', label: 'ISP Site Survey' },
    { code: 'LBS', label: 'Lit Building Survey' },
    { code: 'NID', label: 'NID Relocate' },
    { code: 'NOC', label: 'NOC' },
    { code: 'NWE', label: 'Network Engineering' },
    { code: 'OSP', label: 'OSP Construction' },
    { code: 'OUT', label: 'Outage' },
    { code: 'PDC', label: 'Post Drop Connect' },
    { code: 'PRO', label: 'Proactive Service Call' },
    { code: 'QAC', label: 'Quality Assurance' },
    { code: 'RDC', label: 'Repair Drop Connect' },
    { code: 'RSV', label: 'Repeat Service Call' },
    { code: 'SRV', label: 'Service Call' },
    { code: 'TAS', label: 'Tech Assist' },
    { code: 'TDF', label: 'Temp Drop Fix' },
    { code: 'TRD', label: 'Transfer Disconnect' },
    { code: 'TSC', label: 'Technical Support Center' },
    { code: 'UPS', label: 'UPS Work Order' },
    { code: 'VOC', label: 'Voice Install' },
];

// Populate any <select> with class "wo-type-select" on page load
function populateWOTypeSelects() {
    document.querySelectorAll('.wo-type-select').forEach(select => {
        // Keep the first placeholder option
        const placeholder = select.options[0];
        select.innerHTML = '';
        select.appendChild(placeholder);
        WO_TYPE.forEach(r => {
            const opt = document.createElement('option');
            opt.value = r.code;
            opt.textContent = `${r.code} — ${r.label}`;
            select.appendChild(opt);
        });
    });
}
