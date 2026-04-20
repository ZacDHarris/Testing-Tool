// OUI Manufacturer Database
const OUI_DB = {
  "001451": "Apple Inc.", "0050E4": "Apple Inc.", "3C0754": "Apple Inc.", "A4C361": "Apple Inc.",
  "F0B479": "Apple Inc.", "D83062": "Apple Inc.", "000A27": "Apple Inc.", "001124": "Motorola Solutions",
  "001F5B": "Sony Corporation", "001FF3": "Apple Inc.", "002312": "Apple Inc.", "002500": "Apple Inc.",
  "0026B9": "ASUSTek Computer", "0030A8": "Apple Inc.", "A45E60": "Apple Inc.", "7C6D62": "Apple Inc.",
  "38F9D3": "Apple Inc.", "8866A5": "Apple Inc.", "001599": "Samsung Electronics",
  "002454": "Samsung Electronics", "002339": "Samsung Electronics", "0024E9": "Samsung Electronics",
  "002566": "Samsung Electronics", "0026E2": "LG Electronics", "F4428F": "Samsung Electronics",
  "CC07AB": "Samsung Electronics", "8C771D": "Samsung Electronics", "000142": "Cisco Systems",
  "0001C7": "Cisco Systems", "000216": "Cisco Systems", "000268": "Cisco Systems",
  "0002B9": "Cisco Systems", "001201": "Cisco Systems", "001A2B": "Cisco Systems",
  "001B54": "Cisco Systems", "001CA3": "Cisco Systems", "001D45": "Cisco Systems",
  "001E13": "Cisco Systems", "001E7A": "Cisco Systems", "001F27": "Cisco Systems",
  "001F9E": "Cisco Systems", "002022": "Cisco Systems", "0021A0": "Cisco Systems",
  "0022BD": "Cisco Systems", "002390": "Cisco Systems", "0024C4": "Cisco Systems",
  "0025B4": "Cisco Systems", "0026CB": "Cisco Systems", "5C5015": "Cisco Systems",
  "E09D31": "Cisco Systems", "002722": "Ubiquiti Networks", "0418D6": "Ubiquiti Networks",
  "24A43C": "Ubiquiti Networks", "44D9E7": "Ubiquiti Networks", "68727B": "Ubiquiti Networks",
  "788A20": "Ubiquiti Networks", "B4FBE4": "Ubiquiti Networks", "DC9FDB": "Ubiquiti Networks",
  "F09FC2": "Ubiquiti Networks", "FCECDA": "Ubiquiti Networks", "0014BF": "Linksys (Belkin)",
  "001B2F": "NETGEAR", "001E2A": "NETGEAR", "001F33": "NETGEAR", "002096": "NETGEAR",
  "00224B": "NETGEAR", "0023F8": "NETGEAR", "0024B2": "Linksys (Belkin)", "0026F2": "NETGEAR",
  "200BC7": "NETGEAR", "30469A": "NETGEAR", "4CEDFB": "NETGEAR", "6CB0CE": "NETGEAR",
  "A021B7": "NETGEAR", "C03F0E": "NETGEAR", "00253C": "TP-LINK Technologies",
  "001427": "TP-LINK Technologies", "14CC20": "TP-LINK Technologies", "1C3BF3": "TP-LINK Technologies",
  "1C61B4": "TP-LINK Technologies", "2008ED": "TP-LINK Technologies", "3C4671": "TP-LINK Technologies",
  "50BD5F": "TP-LINK Technologies", "54E6FC": "TP-LINK Technologies", "5C89AD": "TP-LINK Technologies",
  "60E327": "TP-LINK Technologies", "64701A": "TP-LINK Technologies", "6C5C14": "TP-LINK Technologies",
  "708BCD": "TP-LINK Technologies", "74DADA": "TP-LINK Technologies", "A0F3C1": "TP-LINK Technologies",
  "B0487A": "TP-LINK Technologies", "C025E9": "TP-LINK Technologies", "D8EB97": "TP-LINK Technologies",
  "E8DE27": "TP-LINK Technologies", "F4F26D": "TP-LINK Technologies", "EC086B": "TP-LINK Technologies",
  "F81A67": "eero Inc. (Amazon)", "8CDD0B": "eero Inc. (Amazon)", "E89F80": "eero Inc. (Amazon)",
  "AC393D": "eero Inc. (Amazon)", "3C22FB": "eero Inc. (Amazon)", "A499A8": "eero Inc. (Amazon)",
  "A4ED43": "eero Inc. (Amazon)", "B44FBC": "eero Inc. (Amazon)", "001799": "ARRIS / CommScope",
  "001E46": "ARRIS / CommScope", "002268": "ARRIS / CommScope", "0024A0": "ARRIS / CommScope",
  "001A5B": "ARRIS / CommScope", "001CF0": "D-Link Corporation", "744D28": "ARRIS / CommScope",
  "BC1401": "ARRIS / CommScope", "CC3A61": "ARRIS / CommScope", "000E0E": "Calix Networks",
  "001A11": "Calix Networks", "0026B8": "Calix Networks", "001CDD": "Calix Networks",
  "002191": "Calix Networks", "00242B": "Calix Networks", "6C3B6B": "MikroTik",
  "7C4CAD": "Calix Networks", "D49A20": "Calix Networks", "001BEA": "Nokia", "002165": "Nokia",
  "002760": "Alcatel-Lucent", "000F1F": "Alcatel-Lucent", "001372": "Alcatel-Lucent",
  "741547": "Nokia", "887556": "Nokia", "001E10": "Huawei Technologies",
  "0021CC": "Huawei Technologies", "002278": "Huawei Technologies", "00259E": "Huawei Technologies",
  "0026C6": "Huawei Technologies", "286ED4": "Huawei Technologies", "2C9D65": "Huawei Technologies",
  "34DB7B": "Huawei Technologies", "3C47C9": "Huawei Technologies", "48AD08": "Huawei Technologies",
  "507B9D": "Huawei Technologies", "54895A": "Huawei Technologies", "58605F": "Huawei Technologies",
  "5C4CA9": "Huawei Technologies", "606BAD": "Huawei Technologies", "70A8E3": "Huawei Technologies",
  "788F69": "Huawei Technologies", "7CAE57": "Huawei Technologies", "84742A": "Huawei Technologies",
  "8C34FD": "Huawei Technologies", "90E7C4": "Huawei Technologies", "98F5A3": "Huawei Technologies",
  "9CBEA8": "Huawei Technologies", "A01872": "Huawei Technologies", "A0F479": "Huawei Technologies",
  "AC853D": "Huawei Technologies", "B80800": "Huawei Technologies", "BC3EA7": "Huawei Technologies",
  "C4072F": "Huawei Technologies", "C4F081": "Huawei Technologies", "C86195": "Huawei Technologies",
  "CC53B5": "Huawei Technologies", "D065CA": "Huawei Technologies", "D4F9A1": "Huawei Technologies",
  "D8490B": "Huawei Technologies", "E82979": "Huawei Technologies", "EC233D": "Huawei Technologies",
  "F04347": "Huawei Technologies", "F48E92": "Huawei Technologies", "F8BF09": "Huawei Technologies",
  "FCE33C": "Huawei Technologies", "001E73": "ZTE Corporation", "001F8D": "ZTE Corporation",
  "002293": "ZTE Corporation", "0024E8": "ZTE Corporation", "0026ED": "ZTE Corporation",
  "3090AB": "ZTE Corporation", "3448ED": "ZTE Corporation", "54A51B": "ZTE Corporation",
  "6476BA": "ZTE Corporation", "74A78E": "ZTE Corporation", "844FCA": "ZTE Corporation",
  "8CE081": "ZTE Corporation", "981333": "ZTE Corporation", "C864C7": "ZTE Corporation",
  "E89A8F": "ZTE Corporation", "F46BE8": "ZTE Corporation", "001A92": "ASUSTek Computer",
  "001D60": "ASUSTek Computer", "001E8C": "Linksys (Belkin)", "002215": "ASUSTek Computer",
  "00237C": "ASUSTek Computer", "0024EE": "ASUSTek Computer", "10BF48": "ASUSTek Computer",
  "1C87F4": "ASUSTek Computer", "2C4D54": "ASUSTek Computer", "30B49E": "ASUSTek Computer",
  "40167E": "ASUSTek Computer", "50465D": "ASUSTek Computer", "5404A6": "ASUSTek Computer",
  "60A44C": "ASUSTek Computer", "74D02B": "ASUSTek Computer", "AC220B": "ASUSTek Computer",
  "BC9746": "ASUSTek Computer", "D850E6": "ASUSTek Computer", "E03F49": "ASUSTek Computer",
  "F832E4": "ASUSTek Computer", "0005CD": "D-Link Corporation", "000D88": "D-Link Corporation",
  "0011C5": "D-Link Corporation", "0013E8": "D-Link Corporation", "0015E9": "D-Link Corporation",
  "001740": "D-Link Corporation", "001849": "D-Link Corporation", "001E58": "D-Link Corporation",
  "00215D": "D-Link Corporation", "0022B0": "D-Link Corporation", "002401": "D-Link Corporation",
  "00265A": "D-Link Corporation", "1C7EE5": "D-Link Corporation", "28107B": "D-Link Corporation",
  "34088A": "D-Link Corporation", "3C1E04": "D-Link Corporation", "5CD998": "D-Link Corporation",
  "744401": "D-Link Corporation", "78542E": "LG Electronics", "90F652": "D-Link Corporation",
  "A0AB1B": "D-Link Corporation", "B0C554": "D-Link Corporation", "BC0F9A": "D-Link Corporation",
  "C4A81D": "D-Link Corporation", "CCB255": "D-Link Corporation", "3C5A37": "Google Inc.",
  "6C5AB0": "Google Inc.", "A47733": "Google Inc.", "D83C69": "Google Inc.", "F88FCA": "Google Inc.",
  "000F60": "Google Inc.", "18B430": "Google Inc. (Nest)", "64169D": "Google Inc. (Nest)",
  "B8AD3E": "Google Inc. (Nest)", "0C9D92": "Amazon Technologies", "10AE60": "Amazon Technologies",
  "34D270": "Amazon Technologies", "40B4CD": "Amazon Technologies", "44650D": "Amazon Technologies",
  "6CF373": "Amazon Technologies", "74C246": "Amazon Technologies", "8871E5": "Amazon Technologies",
  "A002DC": "Amazon Technologies", "AC63BE": "Amazon Technologies", "B47C9C": "Amazon Technologies",
  "F0272D": "Amazon Technologies", "F0D2F1": "Amazon Technologies", "FC65DE": "Amazon Technologies",
  "086286": "Roku Inc.", "0C6CBD": "Roku Inc.", "205124": "Roku Inc.", "4C3486": "Roku Inc.",
  "6C9B02": "Roku Inc.", "8C227B": "Roku Inc.", "AC3A7A": "Roku Inc.", "B09E0A": "Roku Inc.",
  "C83A35": "Roku Inc.", "D00A1F": "Roku Inc.", "DC3A5E": "Roku Inc.",
  "B827EB": "Raspberry Pi Foundation", "DCA632": "Raspberry Pi Foundation",
  "E45F01": "Raspberry Pi Foundation", "004E08": "MikroTik", "18FD74": "MikroTik",
  "2CC8D2": "MikroTik", "484B7B": "MikroTik", "4C5E0C": "MikroTik", "74EC35": "MikroTik",
  "8C4AEF": "MikroTik", "B8069F": "MikroTik", "C4AD34": "MikroTik", "CC2DE0": "MikroTik",
  "D4CA6D": "MikroTik", "DC2C6E": "MikroTik", "E4CE8F": "MikroTik"
};

function lookupOUI() {
    const raw = document.getElementById('oui-input').value.trim();
    const result = document.getElementById('oui-result');
    const macDisp = document.getElementById('oui-mac-display');
    if (!raw) return;
    const clean = raw.replace(/[^a-fA-F0-9]/g, '').toUpperCase();
    if (clean.length < 6) {
        result.className = 'oui-result error';
        result.innerHTML = '⚠️ Please enter at least 6 hex characters.';
        macDisp.textContent = '';
        return;
    }
    const oui = clean.substring(0, 6);
    const formatted = oui.match(/.{1,2}/g).join(':');
    const vendor = OUI_DB[oui] || null;
    if (vendor) {
        result.className = 'oui-result success';
        result.innerHTML = '✅ <span><strong>Manufacturer:</strong> ' + vendor + '</span>';
        macDisp.textContent = 'MAC OUI: ' + formatted;
    } else {
        result.className = 'oui-result error';
        result.innerHTML = '❌ No match found for OUI: ' + formatted;
        macDisp.textContent = 'MAC OUI: ' + formatted;
    }
}

function clearOUI() {
    document.getElementById('oui-input').value = '';
    const result = document.getElementById('oui-result');
    result.className = 'oui-result';
    result.innerHTML = '';
    document.getElementById('oui-mac-display').textContent = '';
}
