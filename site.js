// Email obfuscation: assemble addresses at runtime so scrapers do not see them
function mailAddr(el) {
    return el.getAttribute('data-u') + String.fromCharCode(64) + el.getAttribute('data-d');
}
function mailTo(el) {
    window.location.href = 'mailto:' + mailAddr(el);
    return false;
}
document.querySelectorAll('a[data-u][data-label="1"]').forEach(el => {
    el.textContent = mailAddr(el);
});

// "Save contact": builds the vCard in the browser, so no .vcf file needs hosting
function downloadVCard() {
    const email = 'stephanie' + String.fromCharCode(64) + 'theprintlab.org';
    const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:Santschi;Stephanie;;;',
        'FN:Stephanie Santschi',
        'TITLE:Postdoctoral Fellow\\, Chair of East Asian Art History',
        'ORG:University of Zurich',
        'EMAIL;TYPE=INTERNET:' + email,
        'URL:https://santschi.theprintlab.org/',
        'NOTE:ORCID 0000-0003-4602-3681',
        'END:VCARD'
    ];
    const blob = new Blob([lines.join('\r\n')], { type: 'text/vcard' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'Stephanie_Santschi.vcf';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
}

// Copy the short bio for event organizers
function copyBio(btn) {
    const text = document.getElementById('bio-text').textContent.trim();
    const done = () => { const t = btn.textContent; btn.textContent = 'Copied'; setTimeout(() => btn.textContent = t, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallback());
    } else { fallback(); }
    function fallback() {
        const r = document.createRange(); r.selectNodeContents(document.getElementById('bio-text'));
        const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        try { document.execCommand('copy'); done(); } catch (e) {}
    }
}

// Partner slider: move by one tile width
function slide(dir) {
    const track = document.getElementById('partners');
    const tile = track.querySelector('.slide');
    const step = tile ? tile.getBoundingClientRect().width + 16 : 260;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
}

function toggleMenu(btn) {
    const open = btn.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active', open);
    btn.setAttribute('aria-expanded', open);
}
function closeMenu() {
    const btn = document.querySelector('.hamburger');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
    document.querySelector('.nav-links').classList.remove('active');
}
