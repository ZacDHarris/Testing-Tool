/* ─────────────────────────────────────────────────────────────────
   ip-ranges.js — IPv4 address classification data
   Used by the CGNAT IP Checker on the NOC > CGNAT Request tab.

   Each entry: cidr, start (octets), end (octets), category, label, description
   Categories: 'cgnat' | 'private' | 'warning' | 'special' | 'public'
   ───────────────────────────────────────────────────────────────── */

var IP_RANGES = [
    {
        cidr: '0.0.0.0/8',
        start: [0, 0, 0, 0],
        end:   [0, 255, 255, 255],
        category: 'warning',
        label: 'Unspecified / Placeholder',
        description: 'This range is reserved and should never appear as a real device IP. Seeing 0.x.x.x typically means the device has not yet been assigned an address — common during boot or when a DHCP request fails before a response arrives. If a customer reports this, power-cycle the ONT and router, then recheck. If it persists, escalate to T2.'
    },
    {
        cidr: '10.0.0.0/8',
        start: [10, 0, 0, 0],
        end:   [10, 255, 255, 255],
        category: 'private',
        label: 'Private Network (RFC 1918)',
        description: 'A large private range used internally by businesses and ISPs. If this appears as the customer\'s WAN (router) IP, they are behind NAT — most likely CGNAT. They will not be able to host services, use port forwarding, or reach home devices remotely without a public IP. Confirm it is the WAN IP on the router admin page, then escalate to NOC if a public IP is needed.'
    },
    {
        cidr: '100.64.0.0/10',
        start: [100, 64, 0, 0],
        end:   [100, 127, 255, 255],
        category: 'cgnat',
        label: 'CGNAT — ISP Shared Space (RFC 6598)',
        description: 'The official Carrier-Grade NAT address space defined by IANA. A router WAN IP in this block is a confirmed CGNAT address — the customer has no public IP and cannot use port forwarding, host game servers, access IP cameras remotely, or run a stable VPN. Escalate to NOC using the CGNAT form to request a public IP assignment. Let the customer know the change may require a brief service restart.'
    },
    {
        cidr: '127.0.0.0/8',
        start: [127, 0, 0, 0],
        end:   [127, 255, 255, 255],
        category: 'special',
        label: 'Loopback (localhost)',
        description: 'The loopback range refers to the device itself — 127.0.0.1 is "localhost." This can never be a real network address and will never appear in router or ONT diagnostics. If a customer reports this as their IP, they are likely reading from a browser URL bar or a software diagnostic tool, not their router. Walk them through finding the correct WAN IP in their router admin page.'
    },
    {
        cidr: '169.254.0.0/16',
        start: [169, 254, 0, 0],
        end:   [169, 254, 255, 255],
        category: 'warning',
        label: 'APIPA / Link-Local — No DHCP Response',
        description: 'A self-assigned fallback address that devices use when they cannot reach a DHCP server. If an ONT or router shows 169.254.x.x, it has lost its upstream connection or is experiencing a DHCP failure. Start with a full power-cycle of the ONT (unplug for 60 seconds), then the router. If the address persists, this often points to a provisioning or signal problem — escalate to T2.'
    },
    {
        cidr: '172.16.0.0/12',
        start: [172, 16, 0, 0],
        end:   [172, 31, 255, 255],
        category: 'private',
        label: 'Private Network (RFC 1918)',
        description: 'A private range typically used by corporate and mid-size networks. Residential customers should not see this as their WAN IP under normal circumstances. If they do, it may indicate upstream CGNAT or a double-NAT situation. Confirm it is the WAN IP (not the LAN gateway), then escalate to NOC if the customer\'s use case requires a public IP.'
    },
    {
        cidr: '192.0.2.0/24',
        start: [192, 0, 2, 0],
        end:   [192, 0, 2, 255],
        category: 'special',
        label: 'Documentation / Examples (RFC 5737)',
        description: 'Reserved exclusively for use in documentation, training materials, and example configurations — never valid on a live network. If this address appears in a ticket or customer report, it was most likely copied from a guide or template without being replaced with a real IP. Ask the customer or agent to recheck their actual router admin page.'
    },
    {
        cidr: '192.168.0.0/16',
        start: [192, 168, 0, 0],
        end:   [192, 168, 255, 255],
        category: 'private',
        label: 'Private Network — Home (RFC 1918)',
        description: 'The most common range for home router LAN addresses (e.g. 192.168.1.1 is a typical default gateway). On the LAN side, this is completely normal. On the WAN side of the customer\'s router, it indicates CGNAT or double-NAT — meaning their router is plugged into another router or the ISP is providing a private address. Clarify which side the IP came from before escalating to NOC.'
    },
    {
        cidr: '198.18.0.0/15',
        start: [198, 18, 0, 0],
        end:   [198, 19, 255, 255],
        category: 'special',
        label: 'Benchmarking / Network Testing (RFC 2544)',
        description: 'Reserved for inter-device performance benchmarking and testing. This block should never appear in real customer traffic or diagnostics. Its presence in a ticket almost certainly means a lab or test device is on the network — confirm with the agent before taking any action.'
    },
    {
        cidr: '224.0.0.0/4',
        start: [224, 0, 0, 0],
        end:   [239, 255, 255, 255],
        category: 'special',
        label: 'Multicast',
        description: 'Used for one-to-many traffic like IPTV, network discovery, and routing protocol updates. These are not valid unicast device addresses — no router or ONT will have a multicast IP as its WAN or LAN address. If a customer reports this as their IP, they are likely reading a multicast group entry from their router\'s routing table. Help them navigate to the WAN Status page to find their actual IP.'
    },
    {
        cidr: '240.0.0.0/4',
        start: [240, 0, 0, 0],
        end:   [254, 255, 255, 255],
        category: 'special',
        label: 'Reserved (Future Use)',
        description: 'Set aside by IANA and not routable on the public internet. No real device should report an address in this range. If it appears in a ticket, treat it as invalid data and have the customer verify the IP directly from their router admin page. This range is sometimes misreported due to firmware bugs on older or third-party equipment.'
    },
    {
        cidr: '255.255.255.255/32',
        start: [255, 255, 255, 255],
        end:   [255, 255, 255, 255],
        category: 'special',
        label: 'Limited Broadcast',
        description: 'The broadcast address used to send packets to all devices on the local network simultaneously. This is never a device\'s own IP address. If a customer reports this as their IP, they are most likely reading the subnet broadcast field in their router settings, not the actual WAN or LAN IP. Walk them through the correct fields in their router admin page.'
    }
];
