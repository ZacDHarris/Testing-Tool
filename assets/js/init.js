// ── INIT — runs after all scripts are loaded ──
// Populate tech region dropdowns from data
populateTechRegionSelects();

// Populate WO Type dropdowns from data
populateWOTypeSelects();

// Build the troubleshooting button grids
initTroubleshootingGrid();
initT2TroubleshootingGrid();

// Restore sticky notes from localStorage
const stickyArea = document.getElementById('sticky-notes-area');
const savedNotes = localStorage.getItem('ef_sticky_notes');
if (savedNotes) stickyArea.value = savedNotes;
stickyArea.addEventListener('input', () => {
    localStorage.setItem('ef_sticky_notes', stickyArea.value);
});

// ── CGNAT Service Area Dropdown ──
// Reuses TECH_REGIONS data — select has class "tech-region-select" so it auto-populates.
// The service package dropdown is hardcoded in HTML.

// ── Sync outage images to copy area when note is generated ──
document.addEventListener('DOMContentLoaded', () => {
    const oiOutput = document.getElementById('oiOutputSection');
    if (oiOutput) {
        const observer = new MutationObserver(() => {
            const copyArea = document.getElementById('oiImageCopyArea');
            if (copyArea && oiOutput.classList.contains('show')) {
                copyArea.innerHTML = '';
                if (nocOutageImages && nocOutageImages.length > 0) {
                    nocOutageImages.forEach(img => {
                        const el = document.createElement('img');
                        el.src = img.src;
                        el.alt = img.name;
                        copyArea.appendChild(el);
                    });
                }
            }
        });
        observer.observe(oiOutput, { attributes: true, attributeFilter: ['class'] });
    }
});
