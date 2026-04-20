// ── INIT — runs after all scripts are loaded ──
// Populate tech region dropdowns from data
populateTechRegionSelects();

// Build the troubleshooting button grid
initTroubleshootingGrid();

// Restore sticky notes from localStorage
const stickyArea = document.getElementById('sticky-notes-area');
const savedNotes = localStorage.getItem('ef_sticky_notes');
if (savedNotes) stickyArea.value = savedNotes;
stickyArea.addEventListener('input', () => {
    localStorage.setItem('ef_sticky_notes', stickyArea.value);
});
