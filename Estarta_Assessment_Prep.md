# 🎯 Estarta Solutions – Technical Support Associate
## TestGorilla Assessment Preparation Guide
### Prepared for: Moayad Hussam Alshawesh
### Date: February 11, 2026

---

## 📋 Assessment Overview

| Detail | Info |
|---|---|
| **Company** | Estarta Solutions (Cisco Partner) |
| **Role** | Technical Support Associate |
| **Platform** | TestGorilla |
| **Duration** | Up to 39 minutes |
| **Focus Areas** | Networking, Troubleshooting, Customer Service, English, Attention to Detail |

---

# 📝 MOCK EXAM

---

## Section A: Technical Support & Networking (Cisco/Estarta Focus)
*⏱ Suggested Time: 12 minutes | 5 Questions*

---

### Question A1: DNS vs DHCP

**A user reports they can access websites by typing IP addresses (e.g., `142.250.185.46`) but NOT by typing domain names (e.g., `google.com`). What is the MOST likely cause?**

- A) The user's DHCP lease has expired
- B) The user's DNS server is unreachable or misconfigured
- C) The user's default gateway is incorrect
- D) The user's NIC (Network Interface Card) is faulty

> **✅ Correct Answer: B**
>
> **Why?** DNS (Domain Name System) translates domain names into IP addresses. If the user can reach sites via IP but not by name, the DNS resolution is failing. DHCP (Dynamic Host Configuration Protocol) assigns IP addresses automatically — if DHCP failed, the user wouldn't have an IP address at all and couldn't reach anything. The key distinction:
> - **DNS** = Translates names → IP addresses (like a phone book)
> - **DHCP** = Assigns IP addresses automatically to devices on a network

---

### Question A2: TCP vs UDP

**A VoIP (Voice over IP) application is experiencing choppy audio. The development team decides to switch from TCP to UDP for voice data transmission. Why would UDP be preferred for real-time voice communication?**

- A) UDP provides guaranteed delivery of all packets
- B) UDP encrypts data more securely than TCP
- C) UDP has lower latency because it doesn't require acknowledgments or retransmission
- D) UDP uses smaller IP addresses

> **✅ Correct Answer: C**
>
> **Why?** UDP (User Datagram Protocol) is connectionless and does NOT wait for acknowledgments. This makes it faster but less reliable. For real-time applications like VoIP, video calls, and gaming, speed matters more than perfection — a dropped frame is better than a delayed one. TCP (Transmission Control Protocol) guarantees delivery through its 3-way handshake and retransmission, but this adds latency.
>
> | Feature | TCP | UDP |
> |---|---|---|
> | Connection | Connection-oriented (3-way handshake) | Connectionless |
> | Reliability | Guaranteed delivery | Best-effort (no guarantee) |
> | Speed | Slower (overhead) | Faster (no overhead) |
> | Use Cases | Web (HTTP), Email, File Transfer | VoIP, Video Streaming, DNS queries, Gaming |

---

### Question A3: OSI Model Layers

**A network technician is troubleshooting. They check the Ethernet cable, verify the switch port LED is active, and test the NIC. Which layer of the OSI model are they troubleshooting?**

- A) Layer 2 – Data Link Layer
- B) Layer 3 – Network Layer
- C) Layer 1 – Physical Layer
- D) Layer 4 – Transport Layer

> **✅ Correct Answer: C**
>
> **Why?** Cables, connectors, NICs (hardware), and electrical signals all belong to **Layer 1 – Physical Layer**. This is the foundation of networking. Here's a quick summary of the first 3 layers:
>
> | Layer | Name | Key Concepts | Devices |
> |---|---|---|---|
> | **Layer 1** | Physical | Cables, signals, connectors, voltage | Hubs, Repeaters, Cables |
> | **Layer 2** | Data Link | MAC addresses, Frames, Switching | Switches, Bridges |
> | **Layer 3** | Network | IP addresses, Routing, Packets | Routers, L3 Switches |
>
> **Memory Trick**: "**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way" (Physical, Data Link, Network, Transport, Session, Presentation, Application)

---

### Question A4: Windows Troubleshooting Commands

**A user at Estarta calls saying "My internet is down." You remote into their Windows PC. Which sequence of commands should you run FIRST to efficiently diagnose the problem?**

- A) `tracert google.com` → `netstat` → `nslookup`
- B) `ipconfig` → `ping 127.0.0.1` → `ping default-gateway` → `ping 8.8.8.8` → `ping google.com`
- C) `format C:` → `ipconfig /release` → `shutdown /r`
- D) `ping google.com` → `ipconfig /flushdns` → restart the computer

> **✅ Correct Answer: B**
>
> **Why?** This is the **standard bottom-up troubleshooting approach**:
>
> 1. **`ipconfig`** → Check if the PC has a valid IP, subnet mask, default gateway, and DNS
> 2. **`ping 127.0.0.1`** (loopback) → Verify the TCP/IP stack on the local machine works
> 3. **`ping [default gateway]`** → Verify connection to the local router
> 4. **`ping 8.8.8.8`** (Google DNS) → Verify internet connectivity by IP
> 5. **`ping google.com`** → Verify DNS resolution works
>
> **Other useful commands:**
> - `ipconfig /release` & `ipconfig /renew` → Get a new IP from DHCP
> - `ipconfig /flushdns` → Clear the local DNS cache
> - `tracert [destination]` → Trace the route packets take (find where they stop)
> - `nslookup [domain]` → Query DNS servers directly

---

### Question A5: RAM vs ROM

**A customer calls and says, "My computer lost all my open documents when the power went out, but my saved files on the hard drive are fine." Which type of memory held the unsaved documents?**

- A) ROM (Read-Only Memory)
- B) SSD (Solid State Drive)
- C) RAM (Random Access Memory)
- D) Cache stored in the CPU

> **✅ Correct Answer: C**
>
> **Why?** RAM is **volatile** memory — it loses all data when power is cut. It temporarily stores running programs and open files for fast access. ROM is **non-volatile** — it retains data without power (e.g., BIOS firmware).
>
> | Feature | RAM | ROM |
> |---|---|---|
> | **Volatility** | Volatile (data lost without power) | Non-volatile (data persists) |
> | **Purpose** | Temporary storage for active processes | Permanent storage (firmware/BIOS) |
> | **Speed** | Very fast | Slower than RAM |
> | **Writability** | Read and Write | Read-only (or limited writes) |
> | **Example** | 16GB DDR4 | BIOS chip on motherboard |

---

## Section B: Situational Judgment (Customer Service)
*⏱ Suggested Time: 10 minutes | 3 Scenarios*

> 🔑 **KEY PRINCIPLE**: TestGorilla always favors **Empathy + Solution**. The best answer acknowledges the customer's feelings FIRST, then provides a concrete action.

---

### Scenario B1: The Angry Customer

**A customer calls furious because their internet has been down for 3 hours and they missed an important video meeting. They're shouting: "This is unacceptable! I'm switching providers!" What do you do?**

- A) Tell the customer to calm down and that shouting won't fix the problem.
- B) Immediately transfer the customer to your manager to handle the complaint.
- C) Empathize by saying you understand their frustration, apologize for the inconvenience, then calmly begin troubleshooting the connection while keeping them informed of each step.
- D) Tell the customer the outage was caused by their own router and it's not your company's responsibility.

> **✅ BEST Answer: C** — *Empathy + Solution* 🏆
>
> **❌ WORST Answer: A** — Telling someone to "calm down" escalates anger. Never dismiss emotions.
>
> **Why C?** The response shows:
> 1. **Empathy**: "I understand your frustration" — validates their feelings
> 2. **Apology**: Takes ownership even if it's not your fault personally
> 3. **Action**: Begins troubleshooting immediately — shows urgency
> 4. **Communication**: Keeps them informed — builds trust

---

### Scenario B2: The Non-Technical Customer

**An elderly user calls saying "The internet box has a red light and nothing works." They don't know what a router, modem, or Ethernet cable is. They're confused and worried. What do you do?**

- A) Ask them to check the WAN port LED status on the ONT and verify the DHCP lease in the router admin panel.
- B) Tell them to unplug the device, wait 30 seconds, and plug it back in. If it doesn't work, schedule a technician visit. End the call quickly.
- C) Patiently describe the device using simple language ("the box with the lights"), guide them step-by-step through power cycling it, use confirmations ("Can you see a green light now?"), and reassure them throughout.
- D) Tell them to bring the device to the store for replacement.

> **✅ BEST Answer: C** — *Empathy + Solution* 🏆
>
> **❌ WORST Answer: A** — Using technical jargon with a non-technical user creates confusion and frustration.
>
> **Why C?** The response:
> 1. **Adapts language** to the customer's level
> 2. **Guides step-by-step** — doesn't overwhelm them
> 3. **Uses confirmations** — ensures they're following along
> 4. **Reassures** — reduces their anxiety

---

### Scenario B3: The Escalation Dilemma

**A customer has called 3 times this week about the same printing issue. Each time, a different agent gave them different advice, and the problem is still not resolved. The customer says: "Nobody in your company knows what they're doing." What do you do?**

- A) Apologize and transfer them to yet another department.
- B) Acknowledge their frustration about the inconsistent experience, take personal ownership of the issue, review all previous ticket notes before asking them to repeat their problem, and commit to following up until resolution — even if it requires escalation.
- C) Blame the previous agents for giving incorrect advice and promise you'll fix it.
- D) Tell the customer to just buy a new printer since the current one seems defective.

> **✅ BEST Answer: B** — *Empathy + Ownership + Solution* 🏆
>
> **❌ WORST Answer: D** — Dismissive and unhelpful. Doesn't even attempt resolution.
>
> **Why B?** The response:
> 1. **Acknowledges the pattern** — shows you listened
> 2. **Takes ownership** — "I will handle this personally"
> 3. **Reviews history** — doesn't make them repeat everything (reduces frustration)
> 4. **Commits to follow-up** — shows accountability

---

## Section C: English Proficiency (B2/C1 Level)
*⏱ Suggested Time: 8 minutes | 3 Questions*

---

### Question C1: Grammar (Fill in the Blank)

**Complete the sentence with the correct option:**

*"If the customer __________ the software update yesterday, the system __________ crashing today."*

- A) installed / wouldn't be
- B) had installed / wouldn't be
- C) has installed / won't be
- D) would install / isn't

> **✅ Correct Answer: B**
>
> **Why?** This is a **Third/Mixed Conditional** sentence:
> - The condition is in the past → "had installed" (Past Perfect)
> - The result is in the present → "wouldn't be" (would + base verb)
> - Structure: **If + Past Perfect, would + base verb** (past action → present result)

---

### Question C2: Vocabulary (Formal Business Synonyms)

**Choose the word that is CLOSEST in meaning to the underlined word:**

*"We need to **expedite** the resolution of this critical server outage."*

- A) Delay
- B) Cancel
- C) Accelerate
- D) Document

> **✅ Correct Answer: C**
>
> **Why?** "Expedite" means to **speed up** or **accelerate** a process. Common in business/IT contexts:
> - "Please expedite the shipment" = Send it faster
> - "We need to expedite this ticket" = Prioritize and resolve it quickly
>
> **Other useful business vocabulary:**
> | Word | Meaning |
> |---|---|
> | Mitigate | Reduce the severity of |
> | Escalate | Move to a higher level of support |
> | Acknowledge | Confirm receipt/understanding |
> | Replicate | Reproduce (an issue) |
> | Intermittent | Happens on and off, not constant |

---

### Question C3: Reading Comprehension

**Read the following paragraph and answer the question:**

> *"A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and untrusted external networks such as the Internet. Firewalls can be hardware-based, software-based, or a combination of both. While a firewall significantly reduces unauthorized access, it cannot detect or remove viruses that are already inside the network — that responsibility falls to antivirus software."*

**Based on the passage, which of the following can be INFERRED?**

- A) A firewall completely eliminates all security threats.
- B) Antivirus software and firewalls serve identical purposes.
- C) An organization should use both a firewall and antivirus software for comprehensive protection.
- D) Hardware firewalls are always better than software firewalls.

> **✅ Correct Answer: C**
>
> **Why?** The passage explicitly states that firewalls handle *traffic* but NOT *viruses inside the network*. It says antivirus software handles that. Therefore, we can **infer** that both are needed together for complete protection. Option A is wrong because the passage says firewalls "significantly reduce" threats, not "completely eliminate." Option D is not supported by the text.

---

## Section D: Attention to Detail
*⏱ Suggested Time: 5 minutes | 2 Questions*

---

### Question D1: IP Address Comparison

**A network admin documented the following IP addresses. Compare the two lists and find the row(s) where the IP addresses DO NOT match.**

| Row | List A | List B |
|---|---|---|
| 1 | 192.168.1.1 | 192.168.1.1 |
| 2 | 10.0.0.254 | 10.0.0.254 |
| 3 | 172.16.32.100 | 172.16.23.100 |
| 4 | 255.255.255.0 | 255.255.255.0 |
| 5 | 192.168.0.105 | 192.168.O.105 |

- A) Row 3 only
- B) Row 5 only
- C) Rows 3 and 5
- D) All rows match

> **✅ Correct Answer: C**
>
> **Why?**
> - **Row 3**: `172.16.**32**.100` vs `172.16.**23**.100` → digits transposed (32 vs 23)
> - **Row 5**: `192.168.**0**.105` vs `192.168.**O**.105` → the second one uses the letter "O" instead of the number "0" (zero)
>
> **Pro Tip:** In attention-to-detail questions, watch for:
> - Transposed digits (32 → 23)
> - Letter O vs Number 0
> - Letter l (lowercase L) vs Number 1
> - Missing dots, extra spaces
> - Switched octets

---

### Question D2: Email List Error Detection

**An IT support agent documented these email addresses from a support ticket. Which email address(es) contain formatting errors?**

| # | Email Address |
|---|---|
| 1 | john.smith@company.com |
| 2 | sarah.jones@company..com |
| 3 | mike.wilson@company.com |
| 4 | anna.brown@compnay.com |
| 5 | david.lee@company.com |

- A) Email 2 only
- B) Email 4 only
- C) Emails 2 and 4
- D) No errors found

> **✅ Correct Answer: C**
>
> **Why?**
> - **Email 2**: `company**..**com` → Double dot (..) — invalid email format
> - **Email 4**: `comp**nay**.com` → "company" is misspelled as "compnay" (letters transposed)
>
> **Pro Tip:** Scan each email systematically:
> 1. Check the local part (before @)
> 2. Check the @ symbol exists (exactly once)
> 3. Check the domain name spelling
> 4. Check the TLD (.com, .org, etc.)
> 5. Look for double dots, spaces, or special characters

---

# 🏆 PRO TIPS FOR TESTGORILLA SUCCESS

---

## 💡 Tip 1: Accuracy Over Speed (But Watch the Clock!)

TestGorilla's algorithm weighs **accuracy more heavily than speed**. However, unanswered questions score **ZERO**, so:

- ✅ **Read each question carefully** — rushing causes silly mistakes
- ✅ **Don't spend more than 90 seconds per question** — flag it and move on
- ✅ **Answer EVERY question** — even a guess is better than blank
- ✅ **For situational judgment, go with your first instinct** — overthinking often leads to second-guessing the empathetic answer
- ❌ **Don't try to "game" the test** — TestGorilla has anti-cheating measures (tab switching detection, randomized questions)

---

## 💡 Tip 2: Environment Preparation

Your test environment matters more than you think:

- 🖥️ **Use Chrome or Firefox on a laptop/desktop** (NOT a phone or tablet)
- 🌐 **Ensure stable internet** — if your connection drops, you may lose progress
- 🔇 **Close all other tabs and applications** — TestGorilla may flag tab switching
- ⏰ **Pick a quiet, uninterrupted time** — no distractions for 39 minutes
- 🔋 **Plug in your laptop** — don't risk battery dying mid-test
- 📷 **If webcam-enabled, look at the screen** — maintain focus, don't look away too much

---

## 💡 Tip 3: The "Empathy Formula" for Situational Questions

Estarta is a **Cisco Partner** in customer support — they LIVE by customer satisfaction. For EVERY situational question, use this mental formula:

```
🏆 BEST ANSWER = Empathy + Ownership + Action + Follow-up

Step 1: ACKNOWLEDGE — "I understand how frustrating this must be..."
Step 2: OWN IT     — "Let me personally take care of this for you..."
Step 3: ACT        — "Here's what I'm going to do right now..."
Step 4: FOLLOW UP  — "I'll check back with you to make sure it's resolved..."
```

**Red Flags (WORST answers always include one of these):**
- ❌ "Calm down" or "Relax" — never dismiss emotions
- ❌ "That's not my department" — no deflection
- ❌ "Just restart it" without empathy — too dismissive
- ❌ Blaming a colleague, the system, or the customer
- ❌ Transferring without explanation or follow-up

---

## 📚 BONUS: Quick Reference Sheet (Review Before the Test)

### Key Networking Ports to Know
| Port | Protocol | Service |
|---|---|---|
| 20/21 | TCP | FTP (File Transfer) |
| 22 | TCP | SSH (Secure Shell) |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP (Email Sending) |
| 53 | TCP/UDP | DNS |
| 67/68 | UDP | DHCP |
| 80 | TCP | HTTP |
| 110 | TCP | POP3 (Email Receiving) |
| 143 | TCP | IMAP (Email Receiving) |
| 443 | TCP | HTTPS |
| 3389 | TCP | RDP (Remote Desktop) |

### Key Acronyms
| Acronym | Full Form |
|---|---|
| DNS | Domain Name System |
| DHCP | Dynamic Host Configuration Protocol |
| TCP | Transmission Control Protocol |
| UDP | User Datagram Protocol |
| IP | Internet Protocol |
| NIC | Network Interface Card |
| BIOS | Basic Input/Output System |
| SLA | Service Level Agreement |
| CSAT | Customer Satisfaction Score |
| NPS | Net Promoter Score |
| ITIL | IT Infrastructure Library |
| RDP | Remote Desktop Protocol |
| VPN | Virtual Private Network |

### Troubleshooting Command Cheat Sheet (Windows)
| Command | Purpose |
|---|---|
| `ipconfig` | Show IP configuration |
| `ipconfig /all` | Show detailed IP configuration |
| `ipconfig /release` | Release current IP address |
| `ipconfig /renew` | Request new IP from DHCP |
| `ipconfig /flushdns` | Clear DNS cache |
| `ping [IP/host]` | Test connectivity |
| `ping 127.0.0.1` | Test local TCP/IP stack |
| `tracert [host]` | Trace route to destination |
| `nslookup [domain]` | Query DNS |
| `netstat -an` | Show active connections |
| `systeminfo` | Show system details |

---

## 🍀 Good Luck, Moayad!

**Remember:**
1. Read every question carefully — don't rush
2. Empathy + Action = Best Answer (for situational questions)
3. Use elimination — remove obviously wrong answers first
4. Trust your knowledge — you've prepared well!

**بالتوفيق يا معاذ! 🚀**
