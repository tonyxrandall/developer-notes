(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{nU76:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var r=a("/FXl"),n=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/Advanced-Networking.md"}});var o={_frontmatter:l},b=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(b,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"advanced-networking"},"Advanced Networking"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#advanced-networking"}),"Advanced Networking"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#resources"}),"Resources")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#ipv4-and-subnetting"}),"IPv4 and Subnetting"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#mpls-multi-protocol-label-switching"}),"MPLS (Multi-Protocol Label Switching)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#addresses-in-1000016-vpc-reserved-for-aws"}),"Addresses in 10.0.0.0/16 VPC reserved for AWS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#fec-forward-equivalency-class"}),"FEC (Forward Equivalency Class)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#border-gateway-protocol-bgp"}),"Border Gateway Protocol (BGP)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#public-key-cryptography"}),"Public-Key Cryptography")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#vpn-fundamentals"}),"VPN Fundamentals"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#keys"}),"Keys")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#key-exchange-encryption-keys"}),"Key Exchange Encryption Keys")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#message-intergrity"}),"Message intergrity")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#confidentiality-using-symmetric-key-block-ciphers"}),"Confidentiality using Symmetric Key Block Ciphers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#vpn-protocols"}),"VPN Protocols")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#ipsec-process"}),"IPsec Process")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#internet-key-exchange-ike"}),"Internet Key Exchange (IKE)")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#intro-the-border-gateway-protocol-bgp"}),"Intro the Border Gateway Protocol (BGP)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#terms"}),"Terms")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#about"}),"About")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#bgp-requirements"}),"BGP Requirements")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#bgp---operation-and-keep-alive"}),"BGP - Operation and Keep-Alive")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#bfd---bidirectional-forwarding-detection"}),"BFD - Bidirectional Forwarding Detection")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#bgp---multi-exit-discriminator"}),"BGP - Multi-Exit Discriminator")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#bgp---aspath-prepending"}),"BGP - AS_Path Prepending")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#password-hashing"}),"Password Hashing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#duplex-vs-multiplex"}),"Duplex vs Multiplex")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#pre-shared-key"}),"Pre-Shared Key"))))),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Block_cipher"}),"Block Ciphers")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://networkengineering.stackexchange.com/questions/23212/multiaccess-with-duplex-and-multiplexing"}),"Duplex vs Multiplex")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Pre-shared_key"}),"Pre-Shared Key")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://ssd.eff.org/en/module/deep-dive-end-end-encryption-how-do-public-key-encryption-systems-work"}),"Public Key Encryption Explained"))),Object(r.b)("h2",{id:"ipv4-and-subnetting"},"IPv4 and Subnetting"),Object(r.b)("p",null,"255.255.255.255"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"/8, /16, /24, /32")," refers to how many bits are being masked. If it is ",Object(r.b)("inlineCode",{parentName:"p"},"/17")," for example, 17 bits are masked with ",Object(r.b)("inlineCode",{parentName:"p"},"2^1")," subnets and ",Object(r.b)("inlineCode",{parentName:"p"},"2^15 - 2")," available addresses with one address for the host and one for the network."),Object(r.b)("h3",{id:"mpls-multi-protocol-label-switching"},"MPLS (Multi-Protocol Label Switching)"),Object(r.b)("p",null,"Method by which a direct link between two or more sites is simulated by efficiently directing traffic over multiple points."),Object(r.b)("h3",{id:"addresses-in-1000016-vpc-reserved-for-aws"},"Addresses in 10.0.0.0/16 VPC reserved for AWS"),Object(r.b)("p",null,"10.0.0.0, 10.0.0.1, 10.0.0.2, 10.0.0.3 and 10.0.0.255."),Object(r.b)("h3",{id:"fec-forward-equivalency-class"},"FEC (Forward Equivalency Class)"),Object(r.b)("p",null,"A label applied to packets to allow routes to immediately know where to route them."),Object(r.b)("h3",{id:"border-gateway-protocol-bgp"},"Border Gateway Protocol (BGP)"),Object(r.b)("p",null,"AWS preferred Routing Protocol to route between multiple Autonomous Systems."),Object(r.b)("h3",{id:"public-key-cryptography"},"Public-Key Cryptography"),Object(r.b)("p",null,"Public-key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner."),Object(r.b)("p",null,"The generation of such keys depends on cryptographic algorithms based on mathematical problems to produce one-way functions. Effective security only requires keeping the private key private; the public key can be openly distributed without compromising security."),Object(r.b)("h2",{id:"vpn-fundamentals"},"VPN Fundamentals"),Object(r.b)("p",null,"What is a VPN?"),Object(r.b)("p",null,"Virtual Private Network that exists to allow traffic to move securely and confidentially."),Object(r.b)("p",null,"There are two primary types:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Site-to-site: Two or more sites are connected without any software on the client machines. MPLS can be used to create this."),Object(r.b)("li",{parentName:"ol"},"Client-to-site: Client has software installed that allows it to communicate with the site. Typically used for remote workers.")),Object(r.b)("h3",{id:"keys"},"Keys"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Symmetric-key encryption: All parties share the same key to encrypt and decrypt a message."),Object(r.b)("li",{parentName:"ol"},"Public-key encrytion (asymmetric): Each party has a public-private key pair. One computer uses its private key to decrypt a message and the other uses its public key to encrypt.")),Object(r.b)("h3",{id:"key-exchange-encryption-keys"},"Key Exchange Encryption Keys"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"RSA (Rivest–Shamir–Adleman):",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Asymmetric."),Object(r.b)("li",{parentName:"ul"},"Used primarily in key exchange in other protocols, such as SSL. RSA is used to encrypt an AES key exchange."),Object(r.b)("li",{parentName:"ul"},"2048 bit encryption or higher is considered secure as 1024 has been theorized to be cracked by NSA."))),Object(r.b)("li",{parentName:"ol"},"Diffie-Hellman",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Faster than RSA"),Object(r.b)("li",{parentName:"ul"},"Used by AWS"),Object(r.b)("li",{parentName:"ul"},"Provides PFS"))),Object(r.b)("li",{parentName:"ol"},"PFS (Perfect Forward Secrecy)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Means that the compromise of session does not endanger others. New keys are created for every session.")))),Object(r.b)("h3",{id:"message-intergrity"},"Message intergrity"),Object(r.b)("p",null,"If intercepted, the message could be modified."),Object(r.b)("p",null,"To verify authenticity you have the following options:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"MD5 (Message Digest)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"MD5 is broken, don't use for production environments."))),Object(r.b)("li",{parentName:"ol"},"SHA (Secure Hash Algorithm)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SHA-1: 160-bit hash similar to MD5. Also considered insecure."),Object(r.b)("li",{parentName:"ul"},"SHA-2: SHA-2 includes SHA-256 and SHA-512."),Object(r.b)("li",{parentName:"ul"},"SHA-3: SHA-3 is the only member of the SHA family not created by the NSA.")))),Object(r.b)("h3",{id:"confidentiality-using-symmetric-key-block-ciphers"},"Confidentiality using Symmetric Key Block Ciphers"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Triple Data Encryption Standard (3DES)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Three symmetric keys with 56 bits each."),Object(r.b)("li",{parentName:"ul"},"Slowly being phased out in favour of stronger encrytion keys."))),Object(r.b)("li",{parentName:"ol"},"Blowfish",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Fast algorithm."),Object(r.b)("li",{parentName:"ul"},"Secure."),Object(r.b)("li",{parentName:"ul"},"Blocks of 64 bits encrypted individually."))),Object(r.b)("li",{parentName:"ol"},"Twofish",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Successor to Blowfish"),Object(r.b)("li",{parentName:"ul"},"Up to 256 bit in length"),Object(r.b)("li",{parentName:"ul"},"One of the faster algorithms"))),Object(r.b)("li",{parentName:"ol"},"AES (Advanced Encryption Standard)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Standard for US Gov and many other organizations."),Object(r.b)("li",{parentName:"ul"},"Symmetric key algorithm."),Object(r.b)("li",{parentName:"ul"},"Uses 128, 192 or 256 bit encryption."),Object(r.b)("li",{parentName:"ul"},"Widely regarded as the de-facto standard for message encryption."),Object(r.b)("li",{parentName:"ul"},"Probably what is used in many instances.")))),Object(r.b)("h3",{id:"vpn-protocols"},"VPN Protocols"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"PPP",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Point-to-point protocol used to encrypt traffic within a tunnel."),Object(r.b)("li",{parentName:"ul"},"PPP is Layer 2 protocol."))),Object(r.b)("li",{parentName:"ol"},"PPTP",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Point-to-point tunnel protocol."),Object(r.b)("li",{parentName:"ul"},"Establishes GRE tunnel. Then uses PPP to encrypt and authenticate the traffic."),Object(r.b)("li",{parentName:"ul"},"Uses simple password auth."))),Object(r.b)("li",{parentName:"ol"},"L2TP",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Layer 2 transfer protocol."),Object(r.b)("li",{parentName:"ul"},"Created by Microsoft and Cisco to combine LTP and PPTP to create a more secure protocol using IPSec."))),Object(r.b)("li",{parentName:"ol"},"IKEv2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Internet Key Exchange version 2"),Object(r.b)("li",{parentName:"ul"},"Used with IPSec and was created by Microsoft and Cisco to be faster than L2TP."))),Object(r.b)("li",{parentName:"ol"},"SSL VPN",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Can be initiated through a web browser."),Object(r.b)("li",{parentName:"ul"},"An SSL VPN does not require VPN client software."))),Object(r.b)("li",{parentName:"ol"},"OpenVPN",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Uses OpenSSL library. Open source and frequenctly updated."),Object(r.b)("li",{parentName:"ul"},"Commonly considered the most secure VPN protocol."))),Object(r.b)("li",{parentName:"ol"},"IPsec",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SA: Security association that describes the security features of an IPsec connection."),Object(r.b)("li",{parentName:"ul"},"AH: Auth header. Guarantees connectionless integrity and data origin of IP packets Auths entire packet, with the exception of mutable fields such as DSCP/ToS. Does not encrypt the payload."),Object(r.b)("li",{parentName:"ul"},"ESP: The Encapsulating Security Payload provides encryption and authentication. But only authenticates contents of the packet."),Object(r.b)("li",{parentName:"ul"},"Transport Mode: Encapsultes the payload of a packet. Used for most client to server relationships."),Object(r.b)("li",{parentName:"ul"},"Tunnel Mode: Encapsulates the entire IP packet. Used for most VPNs.")))),Object(r.b)("h3",{id:"ipsec-process"},"IPsec Process"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Internet Key Exchange (IKE) Phase 1",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Endpoints use ISAKMP (Internet Security Association and Key Management Protocol) to authenticate and negotiate the keys. This creates an encrypted tunnel used by Phase 2 for negotiating the Encapsulating Security Payload (ESP) security associations."),Object(r.b)("li",{parentName:"ul"},"Uses an auth Diffie-Hellman exchange to match the pre-shared keys (PSKs)."),Object(r.b)("li",{parentName:"ul"},"Main Mode: Most secure. Provides complete security of the key exchange."),Object(r.b)("li",{parentName:"ul"},"Aggressive Mode: Uses half the exchanges in the key exchange process, but transmits some information in cleartext."))),Object(r.b)("li",{parentName:"ol"},"Internet Key Exchange (IKE) Phase 2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The endpoints use the tunnel created in Phase 1 to negotiate Encapsulating Security Payload Security Associations. The ESP SAs encrypt the actual user data."),Object(r.b)("li",{parentName:"ul"},"After phase 2, the tunnel is created.")))),Object(r.b)("h3",{id:"internet-key-exchange-ike"},"Internet Key Exchange (IKE)"),Object(r.b)("p",null,"The nodes must agree on the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The encryption algorithm. AES is an example."),Object(r.b)("li",{parentName:"ol"},"The bit-strength of the encryption key. This is commonly a Diffie-Hellman group."),Object(r.b)("li",{parentName:"ol"},"The authentication method. Typically an RSA digital signature."),Object(r.b)("li",{parentName:"ol"},"The hash algorithm. Usually SHA-1 or higher."),Object(r.b)("li",{parentName:"ol"},"The auth material. This is usually a pre-shared key (PSK).")),Object(r.b)("h2",{id:"intro-the-border-gateway-protocol-bgp"},"Intro the Border Gateway Protocol (BGP)"),Object(r.b)("h3",{id:"terms"},"Terms"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"AS (Autonomous System): is a network or collection of network controlled by a single entity. Such as a corporation or university. An AS has its own routing table."),Object(r.b)("li",{parentName:"ul"},"AS Number: Provided by IANA to identify individual ASes."),Object(r.b)("li",{parentName:"ul"},"BGP (Border Gateway Protocol): A routing protocol used to route between multiple Autonomous Systems."),Object(r.b)("li",{parentName:"ul"},"EGP (Exterior Gateway Protocol): BGP is an example of an EGP. EGPs are used to route between organization/networks or Autonomous Systems."),Object(r.b)("li",{parentName:"ul"},"IGP (Interior Gateway Protocol): A routing protocol used within an Autonomous System. RIP, EIGRP, IS-IS and OSPF are examples."),Object(r.b)("li",{parentName:"ul"},"Multihoming: Having two separate ISPs for a network. Typically used for failover, redundacy or bandwidth.")),Object(r.b)("h3",{id:"about"},"About"),Object(r.b)("p",null,"How the ",Object(r.b)("inlineCode",{parentName:"p"},"entire")," internet communicates. We'e all used it. BGP is the only protocol that operates outside of an autononous system."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"eBGP is for external communication between ASes."),Object(r.b)("li",{parentName:"ul"},"iBGP allows communication from within an AS."),Object(r.b)("li",{parentName:"ul"},"Most internal routing is done via IGPs such as OSPF, but iBGP can be used if very large routing tables must be transferred between border routers.")),Object(r.b)("h3",{id:"bgp-requirements"},"BGP Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Autonomous Security Number (ASN): You will need an ASN. You can request an ASN from the American Registry for Internet Numbers (ARIN) or your country's regional provider."),Object(r.b)("li",{parentName:"ul"},"You must have a multi-homed network or prove intention to obtain one."),Object(r.b)("li",{parentName:"ul"},"BGP4 capable router with sufficient hardware specs."),Object(r.b)("li",{parentName:"ul"},"Fully function Interior Gateway Protocol (IGP).")),Object(r.b)("h3",{id:"bgp---operation-and-keep-alive"},"BGP - Operation and Keep-Alive"),Object(r.b)("p",null,'BGP uses "Keep-Alive" signals and a configuratble timer to detect if a peer is down. If a peer goes down, it will remove the dead peer\'s route from its advertisements. AS routers continually talk back to each other.'),Object(r.b)("h3",{id:"bfd---bidirectional-forwarding-detection"},"BFD - Bidirectional Forwarding Detection"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'"Bidirectional Forwarding Detection". The User Datagram Protocol (UDP) used with BGP to assist in detecting link failures at a much faster rate than the native BGP failure detection.'),Object(r.b)("li",{parentName:"ul"},"BFD works with any routing protocol, not just BGP."),Object(r.b)("li",{parentName:"ul"},"BFD must be explicitly enabled to work properly.")),Object(r.b)("h3",{id:"bgp---multi-exit-discriminator"},"BGP - Multi-Exit Discriminator"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Allows the border router of an AS to tell neight ASes on which link it prefers to receive traffic."),Object(r.b)("li",{parentName:"ul"},"A low MED value is a higher preference and higher MED value is a lower preference."),Object(r.b)("li",{parentName:"ul"},"If there is a certain route that it wants to take eg. optic fibre, it wil take the preferred route. - There is a move preferred way to do this - ",Object(r.b)("inlineCode",{parentName:"li"},"AS_Path Prepending"),".")),Object(r.b)("h3",{id:"bgp---as_path-prepending"},"BGP - AS_Path Prepending"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"AS_Path Prepending: is how BGP routers can see full routes to other ASes. Each router prepends its ASN to the beginning of the list. This allows the router to see the most efficient route to its destination."),Object(r.b)("li",{parentName:"ul"},"It can also be used to artificially lengthen the path of your route in order to advertise to other routers that it is not a preferred route and influence these routers to send to another link."),Object(r.b)("li",{parentName:"ul"},"You can only do this with a public ASN."),Object(r.b)("li",{parentName:"ul"},'In a case where there are more hops between routers on a less preferred route, the router "creates" artificial hops to change the preference of the path.')),Object(r.b)("h2",{id:"password-hashing"},"Password Hashing"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"bcrypt: a password hashing function based on the Blowfish cipher."),Object(r.b)("li",{parentName:"ol"},"scrypt: a password-based key derivation function originally for the Tarsnap online backup service")),Object(r.b)("h2",{id:"duplex-vs-multiplex"},"Duplex vs Multiplex"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Duplex: communication system is a point-to-point system composed of two or more connected parties or devices that can communicate with one another in both directions. Think of a telephone."),Object(r.b)("li",{parentName:"ul"},"Multiplexing (sometimes known as muxing): a method by which multiple analog or digital signals are combined into one signal over a shared medium."),Object(r.b)("li",{parentName:"ul"},"A reverse process, known as demultiplexing (demuxing), extracts the original channels on the receiver end.")),Object(r.b)("h2",{id:"pre-shared-key"},"Pre-Shared Key"),Object(r.b)("p",null,"In cryptography, a pre-shared key (PSK) is a shared secret which was previously shared between the two parties using some secure channel before it needs to be used."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/Advanced-Networking.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-advanced-networking-md-23a25231dc626a18b390.js.map