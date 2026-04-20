<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/jpg" href="assets/img/EzeeIcon.jpg">
    <title>Ezee Fiber Technical Support Note Generator</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>

    <!-- ── LOGIN OVERLAY ── -->
    <div id="login-overlay">
        <div class="login-card" id="login-card">
            <div class="login-logo">EZEEFIBER</div>
            <div class="login-subtitle">Internal Tools</div>
            <form id="login-form" onsubmit="checkLogin(); return false;" autocomplete="on">
                <label class="login-label" for="login-password">Password</label>
                <input class="login-input" type="password" id="login-password" name="password" autocomplete="current-password" placeholder="Enter password">
                <button type="submit" class="login-btn">Sign In</button>
            </form>
            <div class="login-error" id="login-error"></div>
        </div>
    </div>

    <!-- ── SIGN OUT BUTTON ── -->
    <button class="signout-btn" id="signout-btn" style="display:none;" onclick="signOut()">Sign Out</button>

    <!-- ── TAB NAVIGATION ── -->
    <nav class="tab-nav">
        <button class="tab-btn active" onclick="switchTab('home', this)">Home</button>
        <button class="tab-btn" onclick="switchTab('support', this)">Note Generator</button>
        <button class="tab-btn" onclick="switchTab('email', this)">Email Templates</button>
    </nav>

    <!-- ══════════════════════════════════════════════
         PAGE: HOME
         ══════════════════════════════════════════════ -->
    <div id="page-home" class="page active">
        <div class="home-page">
            <div class="home-header">
                <h1>Ezee Fiber Internal Tools</h1>
                <p>Select a tool below to get started</p>
            </div>
            <div class="home-grid">
                <div class="home-card card-orange" onclick="goToTab('support')">
                    <span class="home-card-icon">📋</span>
                    <div class="home-card-title">Note Generator</div>
                    <div class="home-card-desc">Generate formatted tech support notes for truck rolls, hard downs, cancellations, dispatches, and CECR tickets.</div>
                    <div class="home-card-tags">
                        <span class="home-card-tag">Truck Roll</span>
                        <span class="home-card-tag">Hard Down</span>
                        <span class="home-card-tag">Cancellation</span>
                        <span class="home-card-tag">Dispatch</span>
                        <span class="home-card-tag">CECR</span>
                    </div>
                </div>
                <div class="home-card card-green" onclick="goToTab('email')">
                    <span class="home-card-icon">📧</span>
                    <div class="home-card-title">Email Templates</div>
                    <div class="home-card-desc">Pre-built email templates for both Tachus and EzeeFiber — equipment returns, referrals, WiFi help, and more.</div>
                    <div class="home-card-tags">
                        <span class="home-card-tag">Equipment Return</span>
                        <span class="home-card-tag">Refer a Friend</span>
                        <span class="home-card-tag">WiFi Key</span>
                        <span class="home-card-tag">Requesting Pics</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ══════════════════════════════════════════════
         PAGE: NOTE GENERATOR
         ══════════════════════════════════════════════ -->
    <div id="page-support" class="page">
        <div class="header-wrapper">
            <div class="header-container">
                <div class="logo-container">
                    <img src="assets/img/EzeeFiberLogo.png" alt="Ezee Fiber Logo">
                </div>
                <div class="header-text">
                    <div class="header-title">Technical Support</div>
                    <div class="header-subtitle">Note Generator</div>
                </div>
            </div>
        </div>

        <!-- ── NOTE SUB-TAB NAVIGATION ── -->
        <nav class="note-sub-nav">
            <button class="note-sub-btn active" id="note-btn-truckroll" onclick="switchNoteTab('truckroll', this)">Truck Roll Approval</button>
            <button class="note-sub-btn" id="note-btn-harddown" onclick="switchNoteTab('harddown', this)">Hard Down</button>
            <button class="note-sub-btn" id="note-btn-cancellation" onclick="switchNoteTab('cancellation', this)">Cancellation</button>
            <button class="note-sub-btn" id="note-btn-dispatch" onclick="switchNoteTab('dispatch', this)">Dispatch</button>
            <button class="note-sub-btn" id="note-btn-cecr" onclick="switchNoteTab('cecr', this)">CECR</button>
        </nav>

        <!-- ── NOTE SUB-PAGE: Truck Roll Approval ── -->
        <div id="note-sub-truckroll" class="note-sub-page active">
            <div class="container">
                <form id="supportForm">
                    <div class="form-grid">

                        <!-- PROVIDER -->
                        <div class="form-group full-width">
                            <div class="section-label">Provider</div>
                        </div>
                        <div class="form-group full-width">
                            <div class="provider-btn-group">
                                <button type="button" class="provider-btn" id="tr-provider-tachus" onclick="setTrProvider('Tachus')">Tachus</button>
                                <button type="button" class="provider-btn" id="tr-provider-ezee" onclick="setTrProvider('EzeeFiber')">EzeeFiber</button>
                            </div>
                        </div>

                        <hr class="section-divider">

                        <!-- CUSTOMER REPORTING -->
                        <div class="form-group full-width">
                            <div class="section-label">Customer Reporting</div>
                        </div>
                        <div class="form-group full-width">
                            <textarea id="tr-customerReporting" placeholder="Enter customer report" style="min-height:90px;"></textarea>
                        </div>

                        <hr class="section-divider">

                        <!-- EQUIPMENT -->
                        <div class="form-group full-width">
                            <div class="section-label">Equipment</div>
                        </div>
                        <div class="form-group">
                            <label for="tr-ont-sn">ONT SN</label>
                            <input type="text" id="tr-ont-sn" placeholder="Enter ONT serial number">
                        </div>
                        <div class="form-group">
                            <label>Router</label>
                            <div class="equip-btn-group" id="tr-router-btns">
                                <button type="button" class="equip-btn" onclick="setEquip('router','EERO PRO6E',this)">EERO PRO6E</button>
                                <button type="button" class="equip-btn" onclick="setEquip('router','EERO MAX7',this)">EERO MAX7</button>
                                <button type="button" class="equip-btn" onclick="setEquip('router','EVO AP6700',this)">EVO AP6700</button>
                                <button type="button" class="equip-btn" onclick="setEquip('router','TP-LINK P50',this)">TP-LINK P50</button>
                                <button type="button" class="equip-btn" onclick="setEquip('router','TP-LINK PB70',this)">TP-LINK PB70</button>
                                <button type="button" class="equip-btn" onclick="setEquip('router','TP-LINK P110',this)">TP-LINK P110</button>
                                <button type="button" class="equip-btn" onclick="setEquip('router','Other',this)">Other</button>
                            </div>
                            <input type="text" id="tr-router-other" placeholder="Router model (if Other)" style="margin-top:0.5rem; display:none;">
                        </div>
                        <div class="form-group">
                            <label for="tr-router-sn">Router SN</label>
                            <input type="text" id="tr-router-sn" placeholder="Enter router serial number">
                        </div>

                        <hr class="section-divider">

                        <!-- CUSTOMER DETAILS -->
                        <div class="form-group full-width">
                            <div class="section-label">Customer Details</div>
                        </div>
                        <div class="form-group">
                            <label for="tr-name">Name</label>
                            <input type="text" id="tr-name" placeholder="Enter name">
                        </div>
                        <div class="form-group">
                            <label for="tr-phone">Phone</label>
                            <input type="text" id="tr-phone" placeholder="Enter phone">
                        </div>
                        <div class="form-group">
                            <label for="tr-acct">Acct #</label>
                            <input type="text" id="tr-acct" placeholder="Enter account #">
                        </div>
                        <div class="form-group">
                            <label for="tr-address">Address</label>
                            <input type="text" id="tr-address" placeholder="Enter address">
                        </div>
                        <div class="form-group">
                            <label for="tr-node">Node</label>
                            <input type="text" id="tr-node" placeholder="Enter node">
                        </div>

                        <hr class="section-divider">

                        <!-- NETWORK & WIFI -->
                        <div class="form-group full-width">
                            <div class="section-label">Network &amp; WiFi</div>
                        </div>
                        <div class="form-group">
                            <label for="tr-alarmCodes">Alarm Code(s)</label>
                            <input type="text" id="tr-alarmCodes" placeholder="Enter alarm codes">
                        </div>
                        <div class="form-group">
                            <label for="tr-speedTest">Speed Test (Down/Up)</label>
                            <input type="text" id="tr-speedTest" placeholder="e.g. 850/900">
                        </div>
                        <div class="form-group">
                            <label>Devices Disconnecting?</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setYesNo('tr_devicesDisconnecting', true, event)">Yes</button>
                                <button type="button" onclick="setYesNo('tr_devicesDisconnecting', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Network Stable?</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setYesNo('tr_networkStable', true, event)">Yes</button>
                                <button type="button" onclick="setYesNo('tr_networkStable', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Light Levels</label>
                            <div style="display:flex;gap:0.5rem;">
                                <input type="text" id="tr-lightLevels-ont" placeholder="ONT" style="flex:1;">
                                <input type="text" id="tr-lightLevels-olt" placeholder="OLT" style="flex:1;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>WiFi Interference?</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setYesNo('tr_wifiInterference', true, event)">Yes</button>
                                <button type="button" onclick="setYesNo('tr_wifiInterference', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Construction in Area?</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setYesNo('tr_constructionInArea', true, event)">Yes</button>
                                <button type="button" onclick="setYesNo('tr_constructionInArea', false, event)">No</button>
                            </div>
                        </div>

                        <hr class="section-divider">

                        <!-- TROUBLESHOOTING STEPS -->
                        <div class="form-group full-width">
                            <div class="section-label">Troubleshooting Steps</div>
                        </div>
                        <div class="form-group full-width">
                            <div class="troubleshooting-grid" id="troubleshootingGrid"></div>
                            <div style="margin-top:1rem;">
                                <label style="margin-bottom:0.4rem; font-size:0.8rem; color:#9ca3af;">Add Custom Step</label>
                                <div class="custom-step-wrapper">
                                    <span class="custom-step-prefix">•</span>
                                    <input class="custom-step-input" type="text" id="tr-custom-step-input" placeholder="Type a custom troubleshooting step..." onkeydown="if(event.key==='Enter'){event.preventDefault();addCustomStep();}">
                                    <button type="button" class="custom-step-add-btn" onclick="addCustomStep()">+ Add</button>
                                </div>
                                <div class="custom-steps-list" id="tr-custom-steps-list"></div>
                            </div>
                        </div>

                        <hr class="section-divider">

                        <!-- AGENT INITIALS -->
                        <div class="form-group full-width">
                            <div class="section-label">Agent Initials</div>
                        </div>
                        <div class="form-group">
                            <input type="text" id="tr-agentInitials" placeholder="Enter agent initials" style="max-width:220px;">
                        </div>

                    </div>
                </form>

                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="generateNote()">Generate Note</button>
                    <button class="btn btn-secondary" onclick="resetForm()">Reset Form</button>
                </div>

                <div id="outputSection" class="output-section">
                    <div class="output-header">
                        <h3>Generated Note</h3>
                        <button class="btn btn-success" onclick="copyToClipboard()">
                            <span id="copyIcon">📋</span>
                            <span id="copyText">Copy to Dashboard</span>
                        </button>
                    </div>
                    <div class="output-box">
                        <textarea id="generatedNote" spellcheck="false"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── NOTE SUB-PAGE: Hard Down ── -->
        <div id="note-sub-harddown" class="note-sub-page">
            <div class="container">
                <form id="hardDownForm">
                    <div class="form-grid">
                        <div class="form-group full-width">
                            <label for="hd-customerReporting">Customer Is Reporting</label>
                            <textarea id="hd-customerReporting" placeholder="Enter customer report"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="hd-alarmCodes">Alarm Code(s)</label>
                            <input type="text" id="hd-alarmCodes" placeholder="Enter alarm code(s)">
                        </div>
                        <div class="form-group">
                            <label for="hd-speedTest">Speed Test (Down/Up)</label>
                            <input type="text" id="hd-speedTest" placeholder="Enter speed test">
                        </div>
                        <div class="form-group">
                            <label>Are Devices Disconnecting</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_devicesDisconnecting', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_devicesDisconnecting', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Is Network Stable</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_networkStable', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_networkStable', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Light Levels</label>
                            <div style="display:flex;gap:0.5rem;">
                                <input type="text" id="hd-lightLevels-ont" placeholder="ONT" style="flex:1;">
                                <input type="text" id="hd-lightLevels-olt" placeholder="OLT" style="flex:1;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="hd-l2UserAligned">L2-User Aligned (if applicable)</label>
                            <input type="text" id="hd-l2UserAligned" placeholder="Enter L2-User aligned">
                        </div>
                        <div class="form-group">
                            <label>Verified Head End/Hub</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_verifiedHeadEnd', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_verifiedHeadEnd', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Is There Wi-Fi Channel Interference</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_wifiInterference', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_wifiInterference', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Was Equipment Rebooted</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_equipmentRebooted', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_equipmentRebooted', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Are All Connections Verified</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_connectionsVerified', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_connectionsVerified', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="hd-timeframe">Timeframe When Issues Started</label>
                            <input type="text" id="hd-timeframe" placeholder="Enter timeframe">
                        </div>
                        <div class="form-group">
                            <label>Was Basic Router Troubleshooting Done</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_routerTroubleshooting', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_routerTroubleshooting', false, event)">No</button>
                            </div>
                        </div>
                        <div class="form-group full-width">
                            <label for="hd-troubleshootingSteps">Troubleshooting Steps Taken</label>
                            <textarea id="hd-troubleshootingSteps" placeholder="Enter troubleshooting steps taken"></textarea>
                        </div>
                        <div class="form-group full-width">
                            <label>Are Other Customers Affected</label>
                            <div class="yes-no-buttons">
                                <button type="button" onclick="setHdYesNo('hd_otherCustomers', true, event)">Yes</button>
                                <button type="button" onclick="setHdYesNo('hd_otherCustomers', false, event)">No</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="generateHardDown()">Generate Note</button>
                    <button class="btn btn-secondary" onclick="resetHardDown()">Reset Form</button>
                </div>
                <div id="hdOutputSection" class="output-section">
                    <div class="output-header">
                        <h3>Generated Note</h3>
                        <button class="btn btn-success" onclick="copyHardDown()">
                            <span id="hdCopyIcon">📋</span>
                            <span id="hdCopyText">Copy to Dashboard</span>
                        </button>
                    </div>
                    <div class="output-box">
                        <textarea id="hdGeneratedNote" spellcheck="false"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── NOTE SUB-PAGE: Cancellation ── -->
        <div id="note-sub-cancellation" class="note-sub-page">
            <div class="coming-soon-placeholder">
                <div class="placeholder-mark">Cancellation</div>
                <div class="placeholder-sub">Coming Soon</div>
            </div>
        </div>

        <!-- ── NOTE SUB-PAGE: Dispatch ── -->
        <div id="note-sub-dispatch" class="note-sub-page">
            <div class="container">
                <div class="dispatch-brand-row">
                    <span class="dispatch-brand-label">Customer Type:</span>
                    <button type="button" class="dispatch-brand-btn" id="dispatch-btn-tachus" onclick="setDispatchBrand('Tachus')">Tachus</button>
                    <button type="button" class="dispatch-brand-btn" id="dispatch-btn-ezee" onclick="setDispatchBrand('Ezee')">EzeeFiber</button>
                    <span id="dispatch-brand-display" class="dispatch-brand-display"></span>
                </div>
                <form id="dispatchForm">
                    <div class="form-grid">
                        <div class="form-group full-width">
                            <label for="dp-techRegion">Tech Region</label>
                            <select id="dp-techRegion" class="tech-region-select">
                                <option value="">— Select Tech Region —</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="dp-customerName">Customer Name</label>
                            <input type="text" id="dp-customerName" placeholder="Enter customer name">
                        </div>
                        <div class="form-group">
                            <label for="dp-address">Address</label>
                            <input type="text" id="dp-address" placeholder="Enter address">
                        </div>
                        <div class="form-group">
                            <label for="dp-accountNumber">Account #</label>
                            <input type="text" id="dp-accountNumber" placeholder="Enter account #" style="max-width: 220px;">
                        </div>
                        <div class="form-group">
                            <label for="dp-woNumber">WO #</label>
                            <input type="text" id="dp-woNumber" placeholder="Enter WO #" style="max-width: 220px;">
                        </div>
                        <div class="form-group full-width">
                            <label for="dp-customerReporting">Customer Reporting</label>
                            <textarea id="dp-customerReporting" placeholder="Enter customer report"></textarea>
                        </div>
                    </div>
                </form>
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="generateDispatch()">Generate Note</button>
                    <button class="btn btn-secondary" onclick="resetDispatch()">Reset Form</button>
                </div>
                <div id="dpOutputSection" class="output-section">
                    <div class="output-header">
                        <h3>Generated Note</h3>
                        <button class="btn btn-success" onclick="copyDispatch()">
                            <span id="dpCopyIcon">📋</span>
                            <span id="dpCopyText">Copy to Dashboard</span>
                        </button>
                    </div>
                    <div class="output-box">
                        <textarea id="dpGeneratedNote" spellcheck="false"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── NOTE SUB-PAGE: CECR ── -->
        <div id="note-sub-cecr" class="note-sub-page">
            <div class="container">
                <form id="cecrForm">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="cecr-phone">Phone</label>
                            <input type="text" id="cecr-phone" placeholder="Enter phone" style="max-width: 220px;">
                        </div>
                        <div class="form-group">
                            <label for="cecr-address">Address</label>
                            <input type="text" id="cecr-address" placeholder="Enter address">
                        </div>
                        <div class="form-group">
                            <label for="cecr-ticketId">Ticket ID</label>
                            <input type="text" id="cecr-ticketId" placeholder="Enter ticket ID">
                        </div>
                        <div class="form-group">
                            <label for="cecr-customerName">Customer Name</label>
                            <input type="text" id="cecr-customerName" placeholder="Enter customer name">
                        </div>
                        <div class="form-group full-width">
                            <label>Priority Level</label>
                            <div class="priority-row">
                                <button type="button" class="priority-btn" id="priority-btn-1" onclick="setCecrPriority(1)">1</button>
                                <button type="button" class="priority-btn" id="priority-btn-2" onclick="setCecrPriority(2)">2</button>
                                <button type="button" class="priority-btn" id="priority-btn-3" onclick="setCecrPriority(3)">3</button>
                                <button type="button" class="priority-btn" id="priority-btn-4" onclick="setCecrPriority(4)">4</button>
                                <span id="cecr-priority-display" class="cecr-priority-display"></span>
                            </div>
                        </div>
                        <div class="form-group full-width">
                            <label for="cecr-customerReport">Customer Report</label>
                            <textarea id="cecr-customerReport" placeholder="Enter customer report" style="min-height: 140px;"></textarea>
                        </div>
                    </div>
                </form>
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="generateCecr()">Generate Note</button>
                    <button class="btn btn-secondary" onclick="resetCecr()">Reset Form</button>
                </div>
                <div id="cecrOutputSection" class="output-section">
                    <div class="output-header">
                        <h3>Generated Note</h3>
                        <button class="btn btn-success" onclick="copyCecr()">
                            <span id="cecrCopyIcon">&#128203;</span>
                            <span id="cecrCopyText">Copy to Dashboard</span>
                        </button>
                    </div>
                    <div class="output-box">
                        <textarea id="cecrGeneratedNote" spellcheck="false"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ══════════════════════════════════════════════
         PAGE: EMAIL TEMPLATES
         ══════════════════════════════════════════════ -->
    <div id="page-email" class="page">
        <div class="email-page">
            <nav class="email-sub-nav">
                <button class="email-sub-btn active-tachus" id="sub-btn-tachus" onclick="switchEmailTab('tachus')">
                    <span class="sub-indicator dot-tachus"></span>Tachus Email Templates
                </button>
                <button class="email-sub-btn" id="sub-btn-ezee" onclick="switchEmailTab('ezee')">
                    <span class="sub-indicator dot-ezee"></span>EzeeFiber Email Templates
                </button>
            </nav>

            <!-- Tachus Sub-Page -->
            <div id="email-sub-tachus" class="email-sub-page active">
                <nav class="email-mini-nav email-mini-nav-tachus">
                    <button class="email-mini-btn email-mini-btn-active" id="email-tachus-btn-cancellation" onclick="switchEmailMiniTab('tachus', 'cancellation', this)">Equipment Return</button>
                    <button class="email-mini-btn" id="email-tachus-btn-raf" onclick="switchEmailMiniTab('tachus', 'raf', this)">Refer a Friend</button>
                    <button class="email-mini-btn" id="email-tachus-btn-requesting-pictures" onclick="switchEmailMiniTab('tachus', 'requesting-pictures', this)">Requesting Pictures</button>
                    <button class="email-mini-btn" id="email-tachus-btn-wifi-security-key" onclick="switchEmailMiniTab('tachus', 'wifi-security-key', this)">WiFi Security Key</button>
                    <button class="email-mini-btn" id="email-tachus-btn-portal-password-reset" onclick="switchEmailMiniTab('tachus', 'portal-password-reset', this)">Customer Portal Password Reset</button>
                    <button class="email-mini-btn" id="email-tachus-btn-lifetime-pricing" onclick="switchEmailMiniTab('tachus', 'lifetime-pricing', this)">Lifetime Pricing Declaration</button>
                    <button class="email-mini-btn" id="email-tachus-btn-construction-case" onclick="switchEmailMiniTab('tachus', 'construction-case', this)">Construction Case</button>
                    <button class="email-mini-btn" id="email-tachus-btn-outage" onclick="switchEmailMiniTab('tachus', 'outage', this)">Outage</button>
                </nav>
                <div class="email-mini-content">
                    <div id="email-tachus-cancellation" class="email-mini-page active">
                        <div class="email-template-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="ter-t-name">Customer Name</label>
                                    <input type="text" id="ter-t-name" placeholder="Enter customer name">
                                </div>
                                <div class="form-group">
                                    <label for="ter-t-modem">Modem SN</label>
                                    <input type="text" id="ter-t-modem" placeholder="Enter modem serial number">
                                </div>
                                <div class="form-group">
                                    <label>Router Type</label>
                                    <div class="router-type-grid">
                                        <button type="button" class="router-type-btn" id="ter-t-router-EERO-PRO6E" onclick="setRouterType('ter-t', 'EERO PRO6E', this)">EERO PRO6E</button>
                                        <button type="button" class="router-type-btn" id="ter-t-router-EERO-MAX7" onclick="setRouterType('ter-t', 'EERO MAX7', this)">EERO MAX7</button>
                                        <button type="button" class="router-type-btn" id="ter-t-router-EVO-AP6700" onclick="setRouterType('ter-t', 'EVO AP6700', this)">EVO AP6700</button>
                                        <button type="button" class="router-type-btn" id="ter-t-router-TP-LINK-P50" onclick="setRouterType('ter-t', 'TP-LINK P50', this)">TP-LINK P50</button>
                                        <button type="button" class="router-type-btn" id="ter-t-router-TP-LINK-PB70" onclick="setRouterType('ter-t', 'TP-LINK PB70', this)">TP-LINK PB70</button>
                                        <button type="button" class="router-type-btn" id="ter-t-router-TP-LINK-P110" onclick="setRouterType('ter-t', 'TP-LINK P110', this)">TP-LINK P110</button>
                                    </div>
                                    <span id="ter-t-router-display" class="router-type-display"></span>
                                </div>
                                <div class="form-group">
                                    <label for="ter-t-router-sn">Router SN</label>
                                    <input type="text" id="ter-t-router-sn" placeholder="Enter router serial number">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" onclick="generateEquipReturn('tachus')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyEquipReturn('tachus')">
                                        <span id="ter-t-copy-icon">&#128203;</span>
                                        <span id="ter-t-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('ter-t-output', ['ter-t-name','ter-t-modem','ter-t-router-sn'], 'ter-t')" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <div class="output-box">
                                    <textarea id="ter-t-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                                <div class="ups-label-section">
                                    <div class="ups-label-header">
                                        <span class="ups-label-title">📦 UPS Return Label Generator</span>
                                    </div>
                                    <div class="ups-label-fields">
                                        <div class="ups-field-group">
                                            <label for="ter-t-acct">Customer Account Number</label>
                                            <input type="text" id="ter-t-acct" placeholder="Enter account number">
                                        </div>
                                        <div class="ups-field-group">
                                            <label for="ter-t-wo">Work Order Number</label>
                                            <input type="text" id="ter-t-wo" placeholder="Enter work order number">
                                        </div>
                                        <button class="btn ups-download-btn" onclick="downloadFilledPDF('tachus')">⬇️ Download Filled Return Label PDF</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="email-tachus-raf" class="email-mini-page">
                        <div class="email-template-form raf-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="traf-name">Customer Name</label>
                                    <input type="text" id="traf-name" placeholder="Enter customer name">
                                </div>
                                <div class="form-group">
                                    <label for="traf-link">RAF Link</label>
                                    <input type="text" id="traf-link" placeholder="Enter referral link" style="width:100%;">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" style="background:#61bb46;" onclick="generateRAF('tachus')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyRAF('tachus')">
                                        <span id="traf-copy-icon">&#128203;</span>
                                        <span id="traf-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('traf-output', ['traf-name','traf-link'], null)" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <img src="assets/img/RAF1.png" class="raf-img-preview" alt="Refer a Friend header">
                                <div class="output-box">
                                    <textarea id="traf-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                                <img src="assets/img/RAF2.png" class="raf-img-preview" alt="Refer a Friend footer">
                            </div>
                        </div>
                    </div>
                    <div id="email-tachus-requesting-pictures" class="email-mini-page">
                        <div class="email-template-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="trp-name">Customer Name</label>
                                    <input type="text" id="trp-name" placeholder="Enter customer name">
                                </div>
                                <div class="form-group">
                                    <label for="trp-ticket">Ticket ID</label>
                                    <input type="text" id="trp-ticket" placeholder="Enter ticket ID">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" onclick="generateReqPic('tachus')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyReqPic('tachus')">
                                        <span id="trp-copy-icon">&#128203;</span>
                                        <span id="trp-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('trp-output', ['trp-name','trp-ticket'], null)" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <div class="output-box">
                                    <textarea id="trp-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="email-tachus-wifi-security-key" class="email-mini-page">
                        <div class="email-template-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="twsk-name">Customer First Name</label>
                                    <input type="text" id="twsk-name" placeholder="Enter first name">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" onclick="generateWifiKey('tachus')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyWifiKey('tachus')">
                                        <span id="twsk-copy-icon">&#128203;</span>
                                        <span id="twsk-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('twsk-output', ['twsk-name'], null)" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <div class="output-box">
                                    <textarea id="twsk-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="email-tachus-portal-password-reset" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#61bb46;">Customer Portal Password Reset</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                    <div id="email-tachus-lifetime-pricing" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#61bb46;">Lifetime Pricing Declaration</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                    <div id="email-tachus-construction-case" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#61bb46;">Construction Case</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                    <div id="email-tachus-outage" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#61bb46;">Outage</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- EzeeFiber Sub-Page -->
            <div id="email-sub-ezee" class="email-sub-page">
                <nav class="email-mini-nav email-mini-nav-ezee">
                    <button class="email-mini-btn email-mini-btn-active" id="email-ezee-btn-cancellation" onclick="switchEmailMiniTab('ezee', 'cancellation', this)">Equipment Return</button>
                    <button class="email-mini-btn" id="email-ezee-btn-raf" onclick="switchEmailMiniTab('ezee', 'raf', this)">Refer a Friend</button>
                    <button class="email-mini-btn" id="email-ezee-btn-requesting-pictures" onclick="switchEmailMiniTab('ezee', 'requesting-pictures', this)">Requesting Pictures</button>
                    <button class="email-mini-btn" id="email-ezee-btn-wifi-security-key" onclick="switchEmailMiniTab('ezee', 'wifi-security-key', this)">WiFi Security Key</button>
                    <button class="email-mini-btn" id="email-ezee-btn-portal-password-reset" onclick="switchEmailMiniTab('ezee', 'portal-password-reset', this)">Customer Portal Password Reset</button>
                    <button class="email-mini-btn" id="email-ezee-btn-lifetime-pricing" onclick="switchEmailMiniTab('ezee', 'lifetime-pricing', this)">Lifetime Pricing Declaration</button>
                    <button class="email-mini-btn" id="email-ezee-btn-construction-case" onclick="switchEmailMiniTab('ezee', 'construction-case', this)">Construction Case</button>
                    <button class="email-mini-btn" id="email-ezee-btn-outage" onclick="switchEmailMiniTab('ezee', 'outage', this)">Outage</button>
                </nav>
                <div class="email-mini-content">
                    <div id="email-ezee-cancellation" class="email-mini-page active">
                        <div class="email-template-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="ter-e-name">Customer Name</label>
                                    <input type="text" id="ter-e-name" placeholder="Enter customer name">
                                </div>
                                <div class="form-group">
                                    <label for="ter-e-modem">Modem SN</label>
                                    <input type="text" id="ter-e-modem" placeholder="Enter modem serial number">
                                </div>
                                <div class="form-group">
                                    <label>Router Type</label>
                                    <div class="router-type-grid">
                                        <button type="button" class="router-type-btn" id="ter-e-router-EERO-PRO6E" onclick="setRouterType('ter-e', 'EERO PRO6E', this)">EERO PRO6E</button>
                                        <button type="button" class="router-type-btn" id="ter-e-router-EERO-MAX7" onclick="setRouterType('ter-e', 'EERO MAX7', this)">EERO MAX7</button>
                                        <button type="button" class="router-type-btn" id="ter-e-router-EVO-AP6700" onclick="setRouterType('ter-e', 'EVO AP6700', this)">EVO AP6700</button>
                                        <button type="button" class="router-type-btn" id="ter-e-router-TP-LINK-P50" onclick="setRouterType('ter-e', 'TP-LINK P50', this)">TP-LINK P50</button>
                                        <button type="button" class="router-type-btn" id="ter-e-router-TP-LINK-PB70" onclick="setRouterType('ter-e', 'TP-LINK PB70', this)">TP-LINK PB70</button>
                                        <button type="button" class="router-type-btn" id="ter-e-router-TP-LINK-P110" onclick="setRouterType('ter-e', 'TP-LINK P110', this)">TP-LINK P110</button>
                                    </div>
                                    <span id="ter-e-router-display" class="router-type-display"></span>
                                </div>
                                <div class="form-group">
                                    <label for="ter-e-router-sn">Router SN</label>
                                    <input type="text" id="ter-e-router-sn" placeholder="Enter router serial number">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" style="background:#FB612F;" onclick="generateEquipReturn('ezee')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyEquipReturn('ezee')">
                                        <span id="ter-e-copy-icon">&#128203;</span>
                                        <span id="ter-e-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('ter-e-output', ['ter-e-name','ter-e-modem','ter-e-router-sn'], 'ter-e')" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <div class="output-box">
                                    <textarea id="ter-e-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                                <div class="ups-label-section">
                                    <div class="ups-label-header">
                                        <span class="ups-label-title">📦 UPS Return Label Generator</span>
                                    </div>
                                    <div class="ups-label-fields">
                                        <div class="ups-field-group">
                                            <label for="ter-e-acct">Customer Account Number</label>
                                            <input type="text" id="ter-e-acct" placeholder="Enter account number">
                                        </div>
                                        <div class="ups-field-group">
                                            <label for="ter-e-wo">Work Order Number</label>
                                            <input type="text" id="ter-e-wo" placeholder="Enter work order number">
                                        </div>
                                        <button class="btn ups-download-btn" onclick="downloadFilledPDF('ezee')">⬇️ Download Filled Return Label PDF</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="email-ezee-raf" class="email-mini-page">
                        <div class="email-template-form raf-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="eraf-name">Customer Name</label>
                                    <input type="text" id="eraf-name" placeholder="Enter customer name">
                                </div>
                                <div class="form-group">
                                    <label for="eraf-link">RAF Link</label>
                                    <input type="text" id="eraf-link" placeholder="Enter referral link" style="width:100%;">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" style="background:#FB612F;" onclick="generateRAF('ezee')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyRAF('ezee')">
                                        <span id="eraf-copy-icon">&#128203;</span>
                                        <span id="eraf-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('eraf-output', ['eraf-name','eraf-link'], null)" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <img src="assets/img/RAF1.png" class="raf-img-preview" alt="Refer a Friend header">
                                <div class="output-box">
                                    <textarea id="eraf-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                                <img src="assets/img/RAF2.png" class="raf-img-preview" alt="Refer a Friend footer">
                            </div>
                        </div>
                    </div>
                    <div id="email-ezee-requesting-pictures" class="email-mini-page">
                        <div class="email-template-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="erp-name">Customer Name</label>
                                    <input type="text" id="erp-name" placeholder="Enter customer name">
                                </div>
                                <div class="form-group">
                                    <label for="erp-ticket">Ticket ID</label>
                                    <input type="text" id="erp-ticket" placeholder="Enter ticket ID">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" style="background:#FB612F;" onclick="generateReqPic('ezee')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyReqPic('ezee')">
                                        <span id="erp-copy-icon">&#128203;</span>
                                        <span id="erp-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('erp-output', ['erp-name','erp-ticket'], null)" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <div class="output-box">
                                    <textarea id="erp-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="email-ezee-wifi-security-key" class="email-mini-page">
                        <div class="email-template-form">
                            <div class="etf-fields">
                                <div class="form-group">
                                    <label for="ewsk-name">Customer First Name</label>
                                    <input type="text" id="ewsk-name" placeholder="Enter first name">
                                </div>
                                <button class="btn btn-primary etf-generate-btn" style="background:#FB612F;" onclick="generateWifiKey('ezee')">Generate Email</button>
                            </div>
                            <div class="etf-output-wrap">
                                <div class="output-header">
                                    <h3>Email Output</h3>
                                    <button class="btn btn-success" onclick="copyWifiKey('ezee')">
                                        <span id="ewsk-copy-icon">&#128203;</span>
                                        <span id="ewsk-copy-text">Copy</span>
                                    </button>
                                    <button class="btn btn-secondary" onclick="resetEmailTemplate('ewsk-output', ['ewsk-name'], null)" style="padding:0.5rem 1rem;font-size:0.85rem;">↺ Reset</button>
                                </div>
                                <div class="output-box">
                                    <textarea id="ewsk-output" spellcheck="false" placeholder="Fill in the fields and click Generate Email..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="email-ezee-portal-password-reset" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#FB612F;">Customer Portal Password Reset</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                    <div id="email-ezee-lifetime-pricing" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#FB612F;">Lifetime Pricing Declaration</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                    <div id="email-ezee-construction-case" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#FB612F;">Construction Case</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                    <div id="email-ezee-outage" class="email-mini-page">
                        <div class="email-template-placeholder">
                            <div class="coming-soon-placeholder">
                                <div class="placeholder-mark" style="color:#FB612F;">Outage</div>
                                <div class="placeholder-sub">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ── STICKY NOTES PANEL ── -->
    <div class="sticky-notes-tab" id="sticky-notes-tab">
        <button class="sticky-notes-toggle" onclick="toggleNotesPanel()" title="Toggle Notes">
            📝 Notes
        </button>
        <div class="sticky-notes-panel" id="sticky-notes-panel">
            <div class="sticky-notes-inner">
                <div class="sticky-notes-header">
                    <span class="sticky-notes-title">📝 My Notes</span>
                    <div class="sticky-notes-actions">
                        <button class="sticky-notes-copy" id="notes-copy-btn" onclick="copyNotes()">Copy</button>
                        <button class="sticky-notes-clear" onclick="clearNotes()">Clear</button>
                    </div>
                </div>
                <textarea class="sticky-notes-textarea" id="sticky-notes-area" placeholder="Type notes here... They'll be saved automatically."></textarea>
                <div class="sticky-notes-footer">Auto-saved to this browser</div>
            </div>
        </div>
    </div>

    <!-- ══════════════════════════════════════════════
         SCRIPTS — load order matters:
         data files first, then helpers, then features, then init last
         ══════════════════════════════════════════════ -->
    <script src="data/oui-db.js"></script>
    <script src="data/tech-regions.js"></script>
    <script src="assets/js/helpers.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/truckroll.js"></script>
    <script src="assets/js/harddown.js"></script>
    <script src="assets/js/dispatch.js"></script>
    <script src="assets/js/cecr.js"></script>
    <script src="assets/js/email.js"></script>
    <script src="assets/js/notes.js"></script>
    <script src="assets/js/init.js"></script>

</body>
</html>
