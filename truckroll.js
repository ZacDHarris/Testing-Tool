// Tech Region lookup data
const TECH_REGIONS = [
    { code: 'ABQ', label: 'Albuquerque' },
    { code: 'CAT', label: 'Commercial Activation Tachus' },
    { code: 'CHI', label: 'Chicago Illinois' },
    { code: 'CHO', label: 'Commercial Houston' },
    { code: 'CNM', label: 'Commercial New Mexico' },
    { code: 'COM', label: 'Commercial' },
    { code: 'CW1', label: 'Carlton Woods Jun1' },
    { code: 'DAY', label: 'Daynet' },
    { code: 'DEL', label: 'Deleted Addresses' },
    { code: 'DET', label: 'Detroit Michigan' },
    { code: 'EST', label: 'East' },
    { code: 'GEM', label: 'GEM' },
    { code: 'INT', label: 'Instant On No Tech Needed' },
    { code: 'KNT', label: 'Kent Washington' },
    { code: 'MID', label: 'Mid' },
    { code: 'NET', label: 'North East Tachus' },
    { code: 'NOR', label: 'North' },
    { code: 'PRE', label: 'Pre-Order' },
    { code: 'SAL', label: 'Salem Oregon' },
    { code: 'SFE', label: 'Santa Fe NM' },
    { code: 'SOU', label: 'South' },
    { code: 'TAM', label: 'SMB TAM Legacy Build Areas' },
    { code: 'VAN', label: 'Minnehaha Vancouver WA' },
    { code: 'WHS', label: 'Wholesale' },
];

// Populate any <select> with class "tech-region-select" on page load
function populateTechRegionSelects() {
    document.querySelectorAll('.tech-region-select').forEach(select => {
        // Keep the first placeholder option
        const placeholder = select.options[0];
        select.innerHTML = '';
        select.appendChild(placeholder);
        TECH_REGIONS.forEach(r => {
            const opt = document.createElement('option');
            opt.value = r.code;
            opt.textContent = `${r.code} — ${r.label}`;
            select.appendChild(opt);
        });
    });
}
