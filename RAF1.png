// ── SHARED HELPERS ──
// Used by truckroll.js, harddown.js, dispatch.js, cecr.js

// Returns "Yes" / "No" / "" for yes-no state values
function yn(val) { return val === null ? '' : val ? 'Yes' : 'No'; }

// Returns "  Label: value\n" only if value is non-empty (indented, for sub-sections)
function line(label, value) {
    const v = (value || '').trim();
    return v ? `  ${label}: ${v}\n` : '';
}

// Returns "Label: value\n" only if value is non-empty (flat, top-level)
function lineFlat(label, value) {
    const v = (value || '').trim();
    return v ? `${label}: ${v}\n` : '';
}

// Returns "  Label: Yes/No\n" only if the yes-no button was clicked (indented)
function lineYN(label, val) {
    return val === null ? '' : `  ${label}: ${val ? 'Yes' : 'No'}\n`;
}

// Returns "Label: Yes/No\n" only if the yes-no button was clicked (flat)
function lineYNFlat(label, val) {
    return val === null ? '' : `${label}: ${val ? 'Yes' : 'No'}\n`;
}
