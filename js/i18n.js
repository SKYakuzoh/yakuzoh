'use strict';

/* ── Dictionnaire de traduction FR / EN ─────────────────────────────────── */
const I18N = {
  fr: {
    /* meta */
    'meta.title.home':       'SK Security · Pentest',
    'meta.desc.home':        'Cabinet de pentest freelance français. Audit de sécurité offensive, Active Directory, Web Application, Infrastructure.',
    'meta.title.reports':    'Rapports d\'audit · SK Security',
    'meta.desc.reports':     'Rapports de pentest sur machines HackTheBox retirées. Active Directory, Web Application, Infrastructure.',
    'meta.title.methodology':'Méthodologie · SK Security',
    'meta.desc.methodology': 'Approche structurée basée sur la Cyber Kill Chain. Scoring CVSS 3.1 / CVSS 4.0, outils et livrables.',
    'meta.title.contact':    'Contact · SK Security',
    'meta.desc.contact':     'Contactez SK Security pour vos besoins en audit de sécurité offensive et pentest freelance. Béziers, 34500 Hérault.',

    /* nav */
    'nav.home':        'Accueil',
    'nav.reports':     'Rapports',
    'nav.methodology': 'Méthodologie',
    'nav.cv':          'CV',
    'nav.contact':     'Contact',
    'nav.menu':        'Ouvrir le menu',
    'nav.logo':        'SK Security, accueil',

    /* index · hero */
    'home.eyebrow':    'Sécurité offensive',
    'home.h1':         'Audit de sécurité <em>offensive</em><br>Pentest',
    'home.sub':        'SK Security accompagne les entreprises dans l\'identification et la correction de leurs vulnérabilités critiques.',
    'home.btnReports': 'Consulter les rapports',
    'home.btnContact': 'Me contacter',

    /* index · about */
    'home.aboutLabel': 'À propos',
    'home.aboutP1':    'Auditeur en sécurité offensive indépendant, spécialisé dans l\'évaluation des environnements complexes : Active Directory, applications web et infrastructure réseau.',
    'home.aboutP2':    'Chaque mission est conduite avec une approche méthodique, des livrables professionnels et un retest systématique des vulnérabilités corrigées.',
    'home.certLabel':  'Certifications &amp; Niveaux',
    'home.cpts':       'CPTS · Certified Penetration Testing Specialist <span class="mono" style="color:var(--accent);font-size:.75rem;">obtenu · 07/2026</span>',
    'home.m2i':        'M2i · Réaliser des tests d\'intrusion (Pentesting) <span class="mono" style="color:var(--accent);font-size:.75rem;">RS7394 · 06/2026</span>',
    'home.crtp':       'CRTP · Certified Red Team Professional <span class="mono" style="color:var(--accent);font-size:.75rem;">en préparation</span>',
    'home.certLink':   'Certificat ↗',
    'home.htbMachines':'Machines HTB résolues avec focus Active Directory et Web',

    /* index · why */
    'home.whyLabel':   'Pourquoi SK Security',
    'home.whyTitle':   'Ce qui nous distingue',
    'home.card1Title': 'Expertise technique offensive',
    'home.card1Desc':  'Chaque engagement reproduit une attaque réelle : exploitation de chaînes d\'attaque complètes, mouvement latéral et élévation de privilèges. Le scan automatisé n\'est jamais l\'unique méthode.',
    'home.card2Title': 'Rapports lisibles et actionnables',
    'home.card2Desc':  'Chaque vulnérabilité est documentée avec sa preuve de concept, son impact business, son score CVSS 3.1 / CVSS 4.0 et des recommandations de remédiation concrètes.',
    'home.card3Title': 'Suivi post-audit et retest',
    'home.card3Desc':  'La mission ne s\'arrête pas au rapport. Un accompagnement à la remédiation et un retest sont inclus pour valider la correction effective des vulnérabilités identifiées.',

    /* reports page */
    'reports.label':     'Audits',
    'reports.h1':        'Rapports d\'audit',
    'reports.intro':     'Rapports réalisés sur des machines HackTheBox retirées, dans un cadre légal et pédagogique.',
    'reports.disclaimer': 'ⓘ&nbsp; Ces rapports sont réalisés sur des machines HackTheBox retirées du service actif, dans un cadre légal et pédagogique. Ils illustrent la qualité des livrables fournis dans le cadre de missions professionnelles.',
    'reports.prev':      'Précédent',
    'reports.next':      'Suivant',
    'reports.legendLabel':'Légende des niveaux',
    'reports.legendNote': 'Niveaux de sévérité basés sur le scoring CVSS 3.1 / CVSS 4.0. Voir la <a href="methodology.html">page Méthodologie</a> pour les détails.',
    'reports.viewReport':'Voir le rapport',
    'reports.pending':   'Rapport en cours',
    'reports.loadError': 'Erreur de chargement des rapports.',
    'sev.crit': 'Critique', 'sev.high': 'Élevé', 'sev.med': 'Moyen', 'sev.low': 'Bas', 'sev.info': 'Informatif',

    /* methodology */
    'meth.label':    'Approche',
    'meth.h1':       'Méthodologie',
    'meth.intro':    'Chaque audit suit une approche structurée et reproductible, basée sur la Cyber Kill Chain et les référentiels reconnus de l\'industrie (PTES, OWASP, MITRE ATT&CK).',
    'meth.kcLabel':  'Cyber Kill Chain',
    'meth.kcTitle':  '7 phases d\'audit',
    'kc1.t':'Reconnaissance','kc1.d':'La phase de reconnaissance combine collecte passive et active : OSINT, énumération DNS, cartographie des services exposés et identification des technologies en place.',
    'kc2.t':'Armement','kc2.d':'Sur la base de la surface exposée, les vecteurs d\'attaque pertinents sont identifiés et préparés : exploitation de CVE connues et création de payloads adaptés au contexte.',
    'kc3.t':'Livraison','kc3.d':'Le vecteur d\'attaque est déclenché selon le périmètre convenu : injection web, exploitation de services réseau, phishing ciblé ou accès physique.',
    'kc4.t':'Exploitation','kc4.d':'L\'exploit est exécuté pour obtenir un premier accès, élever les privilèges locaux et exploiter les mauvaises configurations présentes dans les services, les applications ou l\'Active Directory.',
    'kc5.t':'Installation','kc5.d':'Les accès obtenus sont maintenus et des mécanismes de persistance sont déployés. L\'ensemble des actions est documenté de façon exhaustive pour le rapport et le retest.',
    'kc6.t':'Command &amp; Control','kc6.d':'Le mouvement latéral est mené dans l\'environnement par propagation horizontale et verticale, pivoting réseau et compromission de comptes privilégiés jusqu\'aux contrôleurs de domaine.',
    'kc7.t':'Actions sur objectifs','kc7.d':'Les objectifs définis sont atteints, qu\'il s\'agisse de la compromission du domaine, de l\'accès à des données sensibles ou d\'une exfiltration simulée. L\'impact réel est démontré et documenté dans un rapport incluant la timeline complète des actions.',
    'meth.scoringLabel':'Scoring',
    'meth.scoringTitle':'CVSS 3.1 / CVSS 4.0 : Niveaux de sévérité',
    'meth.scoringIntro':'Chaque vulnérabilité est scorée selon les standards CVSS 3.1 et CVSS 4.0, en tenant compte de l\'exploitabilité, de l\'impact et du contexte environnemental.',
    'cvss.crit.label':'Critique','cvss.crit.range':'Exploitation immédiate, impact maximal',
    'cvss.high.label':'Élevé','cvss.high.range':'Exploitation probable, impact significatif',
    'cvss.med.label':'Moyen','cvss.med.range':'Conditions requises, impact limité',
    'cvss.low.label':'Bas','cvss.low.range':'Exploitation difficile, faible impact',
    'cvss.none.label':'Nul / Informatif','cvss.none.range':'Bonne pratique, aucun risque direct',
    'meth.toolsLabel':'Outillage',
    'meth.toolsTitle':'Catégories d\'outils',
    'tool1.t':'Recon &amp; Énumération','tool1.d':'Cette phase couvre le scan réseau et la découverte de services, l\'énumération web par répertoires et sous-domaines, la reconnaissance Active Directory ainsi que la collecte passive via OSINT.',
    'tool2.t':'Exploitation','tool2.d':'Les vulnérabilités web sont exploitées de manière ciblée : injections et contournements d\'authentification, failles Active Directory (AS-REP roasting, Kerberoasting, abus d\'ACL), brute-force ciblé et CVE publics selon le contexte.',
    'tool3.t':'Post-Exploitation','tool3.d':'Une fois l\'accès initial obtenu, le pivoting et le mouvement latéral étendent la compromission. L\'élévation de privilèges, l\'extraction de credentials et la mise en place de persistance ou d\'infrastructure C2 sont réalisées dans le cadre des missions d\'audit.',
    'tool4.t':'Reporting','tool4.d':'Chaque action est consignée avec ses preuves de concept, captures d\'écran et logs annotés. Une timeline horodatée retrace l\'ensemble de l\'engagement, servant de base à la rédaction du rapport PDF professionnel.',
    'meth.delivLabel':'Livrables',
    'meth.delivTitle':'Ce que vous recevez',
    'del1.t':'Rapport PDF professionnel','del1.d':'Le rapport comprend un résumé exécutif non technique et un volet technique détaillé. Chaque vulnérabilité y est décrite avec sa preuve de concept, son score CVSS 3.1 / CVSS 4.0, son impact business et des recommandations de remédiation concrètes.',
    'del2.t':'Timeline des actions','del2.d':'Journal chronologique horodaté de l\'ensemble des actions réalisées pendant l\'audit, assurant une traçabilité complète pour vos besoins d\'audit interne ou de conformité.',
    'del3.t':'Indicateurs de compromission (IoC)','del3.d':'Un inventaire des artefacts laissés pendant le test (adresses IP, hashes, fichiers créés) est fourni pour faciliter le nettoyage et la comparaison avec les alertes de votre SOC.',
    'del4.t':'Plan de remédiation priorisé','del4.d':'Roadmap de correction ordonnée par criticité et effort de remédiation, avec références vers les correctifs officiels (CVE, vendor advisories).',
    'del5.t':'Retest inclus','del5.d':'Une fois les corrections appliquées, un retest ciblé valide que les vulnérabilités critiques et élevées ont été correctement corrigées. Attestation de remédiation fournie.',

    /* contact */
    'contact.label':     'Contact',
    'contact.h1':        'Parlons de votre mission',
    'contact.intro':     'Disponible pour missions freelance et sous-traitance en sécurité offensive. Réponse sous 24&nbsp;h.',
    'contact.emailLabel':'Email',
    'contact.linkedinLabel':'LinkedIn',
    'contact.locLabel':  'Localisation',
    'contact.locValue':  'Béziers, 34500 Hérault',
    'contact.availLabel':'Disponibilité',
    'contact.availValue':'Missions freelance &amp; sous-traitance',
    'contact.ctaLabel': 'Démarrer une mission',
    'contact.ctaTitle': 'Besoin d\'un audit de sécurité ?',
    'contact.ctaDesc':  'Que ce soit un pentest ponctuel, un audit Active Directory, une évaluation d\'application web ou une mission de sous-traitance, décrivez votre besoin par email et je vous réponds sous 24&nbsp;h avec une proposition adaptée.',
    'contact.sendBtn':  'Envoyer un email',
    'contact.sendSubject':'Demande de mission pentest',
    'contact.note':     'Aucun formulaire. La communication est directe et confidentielle.',

    'footer.copy': '© 2026 SK Security ·'
  },

  en: {
    'meta.title.home':       'SK Security · Pentest',
    'meta.desc.home':        'Freelance pentest consultancy. Offensive security auditing: Active Directory, Web Application, Infrastructure.',
    'meta.title.reports':    'Audit reports · SK Security',
    'meta.desc.reports':     'Pentest reports on retired HackTheBox machines. Active Directory, Web Application, Infrastructure.',
    'meta.title.methodology':'Methodology · SK Security',
    'meta.desc.methodology': 'Structured approach based on the Cyber Kill Chain. CVSS 3.1 / CVSS 4.0 scoring, tools and deliverables.',
    'meta.title.contact':    'Contact · SK Security',
    'meta.desc.contact':     'Contact SK Security for your offensive security auditing and freelance pentest needs. Béziers, 34500 Hérault.',

    'nav.home':        'Home',
    'nav.reports':     'Reports',
    'nav.methodology': 'Methodology',
    'nav.cv':          'CV',
    'nav.contact':     'Contact',
    'nav.menu':        'Open menu',
    'nav.logo':        'SK Security, home',

    'home.eyebrow':    'Offensive security',
    'home.h1':         'Offensive security <em>auditing</em><br>Pentest',
    'home.sub':        'SK Security helps companies identify and remediate their critical vulnerabilities.',
    'home.btnReports': 'View reports',
    'home.btnContact': 'Contact me',

    'home.aboutLabel': 'About',
    'home.aboutP1':    'Independent offensive security auditor, specialised in assessing complex environments: Active Directory, web applications and network infrastructure.',
    'home.aboutP2':    'Each engagement is conducted with a methodical approach, professional deliverables and a systematic retest of remediated vulnerabilities.',
    'home.certLabel':  'Certifications &amp; Levels',
    'home.cpts':       'CPTS · Certified Penetration Testing Specialist <span class="mono" style="color:var(--accent);font-size:.75rem;">obtained · 07/2026</span>',
    'home.m2i':        'M2i · Conducting intrusion tests (Pentesting) <span class="mono" style="color:var(--accent);font-size:.75rem;">RS7394 · 06/2026</span>',
    'home.crtp':       'CRTP · Certified Red Team Professional <span class="mono" style="color:var(--accent);font-size:.75rem;">in preparation</span>',
    'home.certLink':   'Certificate ↗',
    'home.htbMachines':'HTB machines solved with a focus on Active Directory and Web',

    'home.whyLabel':   'Why SK Security',
    'home.whyTitle':   'What sets us apart',
    'home.card1Title': 'Technical offensive expertise',
    'home.card1Desc':  'Each engagement reproduces a real attack: exploitation of full attack chains, lateral movement and privilege escalation. Automated scanning is never the only method.',
    'home.card2Title': 'Readable, actionable reports',
    'home.card2Desc':  'Each vulnerability is documented with its proof of concept, its business impact, its CVSS 3.1 / CVSS 4.0 score and concrete remediation recommendations.',
    'home.card3Title': 'Post-audit follow-up and retest',
    'home.card3Desc':  'The engagement does not end with the report. Remediation support and a retest are included to validate the effective correction of the identified vulnerabilities.',

    'reports.label':     'Audits',
    'reports.h1':        'Audit reports',
    'reports.intro':     'Reports produced on retired HackTheBox machines, in a legal and educational context.',
    'reports.disclaimer': 'ⓘ&nbsp; These reports are produced on HackTheBox machines retired from active service, in a legal and educational context. They illustrate the quality of the deliverables provided as part of professional engagements.',
    'reports.prev':      'Previous',
    'reports.next':      'Next',
    'reports.legendLabel':'Severity legend',
    'reports.legendNote': 'Severity levels based on CVSS 3.1 / CVSS 4.0 scoring. See the <a href="methodology.html">Methodology page</a> for details.',
    'reports.viewReport':'View report',
    'reports.pending':   'Report in progress',
    'reports.loadError': 'Error loading reports.',
    'sev.crit': 'Critical', 'sev.high': 'High', 'sev.med': 'Medium', 'sev.low': 'Low', 'sev.info': 'Informative',

    'meth.label':    'Approach',
    'meth.h1':       'Methodology',
    'meth.intro':    'Each audit follows a structured, reproducible approach based on the Cyber Kill Chain and recognised industry frameworks (PTES, OWASP, MITRE ATT&CK).',
    'meth.kcLabel':  'Cyber Kill Chain',
    'meth.kcTitle':  '7 audit phases',
    'kc1.t':'Reconnaissance','kc1.d':'The reconnaissance phase combines passive and active collection: OSINT, DNS enumeration, mapping of exposed services and identification of the technologies in place.',
    'kc2.t':'Weaponization','kc2.d':'Based on the exposed surface, relevant attack vectors are identified and prepared: exploitation of known CVEs and creation of payloads tailored to the context.',
    'kc3.t':'Delivery','kc3.d':'The attack vector is triggered according to the agreed scope: web injection, network service exploitation, targeted phishing or physical access.',
    'kc4.t':'Exploitation','kc4.d':'The exploit is executed to gain initial access, elevate local privileges and exploit misconfigurations present in services, applications or Active Directory.',
    'kc5.t':'Installation','kc5.d':'Obtained access is maintained and persistence mechanisms are deployed. All actions are documented exhaustively for the report and the retest.',
    'kc6.t':'Command &amp; Control','kc6.d':'Lateral movement is carried out in the environment through horizontal and vertical propagation, network pivoting and compromise of privileged accounts up to domain controllers.',
    'kc7.t':'Actions on objectives','kc7.d':'Defined objectives are met, whether domain compromise, access to sensitive data or a simulated exfiltration. The real impact is demonstrated and documented in a report including the full action timeline.',
    'meth.scoringLabel':'Scoring',
    'meth.scoringTitle':'CVSS 3.1 / CVSS 4.0: Severity levels',
    'meth.scoringIntro':'Each vulnerability is scored according to CVSS 3.1 and CVSS 4.0 standards, taking into account exploitability, impact and environmental context.',
    'cvss.crit.label':'Critical','cvss.crit.range':'Immediate exploitation, maximum impact',
    'cvss.high.label':'High','cvss.high.range':'Likely exploitation, significant impact',
    'cvss.med.label':'Medium','cvss.med.range':'Conditions required, limited impact',
    'cvss.low.label':'Low','cvss.low.range':'Difficult exploitation, low impact',
    'cvss.none.label':'None / Informative','cvss.none.range':'Best practice, no direct risk',
    'meth.toolsLabel':'Tooling',
    'meth.toolsTitle':'Tool categories',
    'tool1.t':'Recon &amp; Enumeration','tool1.d':'This phase covers network scanning and service discovery, web enumeration by directories and subdomains, Active Directory reconnaissance and passive collection via OSINT.',
    'tool2.t':'Exploitation','tool2.d':'Web vulnerabilities are exploited in a targeted way: injections and authentication bypasses, Active Directory flaws (AS-REP roasting, Kerberoasting, ACL abuse), targeted brute-force and public CVEs depending on context.',
    'tool3.t':'Post-Exploitation','tool3.d':'Once initial access is obtained, pivoting and lateral movement extend the compromise. Privilege escalation, credential extraction and the setup of persistence or C2 infrastructure are carried out as part of audit engagements.',
    'tool4.t':'Reporting','tool4.d':'Each action is recorded with its proof of concepts, screenshots and annotated logs. A timestamped timeline retraces the whole engagement, serving as the basis for the professional PDF report.',
    'meth.delivLabel':'Deliverables',
    'meth.delivTitle':'What you receive',
    'del1.t':'Professional PDF report','del1.d':'The report includes a non-technical executive summary and a detailed technical section. Each vulnerability is described with its proof of concept, its CVSS 3.1 / CVSS 4.0 score, its business impact and concrete remediation recommendations.',
    'del2.t':'Action timeline','del2.d':'A timestamped chronological log of all actions performed during the audit, ensuring full traceability for your internal audit or compliance needs.',
    'del3.t':'Indicators of compromise (IoC)','del3.d':'An inventory of artefacts left during the test (IP addresses, hashes, created files) is provided to facilitate cleanup and comparison with your SOC alerts.',
    'del4.t':'Prioritised remediation plan','del4.d':'A remediation roadmap ordered by criticality and remediation effort, with references to official fixes (CVE, vendor advisories).',
    'del5.t':'Retest included','del5.d':'Once fixes are applied, a targeted retest validates that critical and high vulnerabilities have been correctly remediated. Remediation attestation provided.',

    'contact.label':     'Contact',
    'contact.h1':        'Let\'s discuss your engagement',
    'contact.intro':     'Available for freelance engagements and subcontracting in offensive security. Response within 24&nbsp;h.',
    'contact.emailLabel':'Email',
    'contact.linkedinLabel':'LinkedIn',
    'contact.locLabel':  'Location',
    'contact.locValue':  'Béziers, 34500 Hérault',
    'contact.availLabel':'Availability',
    'contact.availValue':'Freelance &amp; subcontracting engagements',
    'contact.ctaLabel': 'Start an engagement',
    'contact.ctaTitle': 'Need a security audit?',
    'contact.ctaDesc':  'Whether it is a one-off pentest, an Active Directory audit, a web application assessment or a subcontracting engagement, describe your need by email and I will reply within 24&nbsp;h with a tailored proposal.',
    'contact.sendBtn':  'Send an email',
    'contact.sendSubject':'Pentest engagement request',
    'contact.note':     'No form. Communication is direct and confidential.',

    'footer.copy': '© 2026 SK Security ·'
  }
};

/* ── État de la langue ──────────────────────────────────────────────────────── */
const LANG_KEY = 'sk-lang';
let currentLang = (localStorage.getItem(LANG_KEY) === 'en') ? 'en' : 'fr';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || key;
}

function applyI18n() {
  document.documentElement.lang = currentLang;

  /* textContent */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  /* innerHTML (contenu riche) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  /* attributs (ex. content / aria-label / placeholder) */
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(':');
    el.setAttribute(attr, t(key));
  });

  /* meta description dynamique */
  const desc = document.querySelector('meta[name="description"][data-i18n-attr]');
  if (desc) document.documentElement.setAttribute('data-lang-applied', currentLang);

  /* sujet du lien email */
  const mailCta = document.querySelector('a[data-i18n-mailsubject]');
  if (mailCta) {
    const subj = encodeURIComponent(t('contact.sendSubject'));
    mailCta.href = 'mailto:sk.security.contact@gmail.com?subject=' + subj;
  }

  /* état visuel du sélecteur */
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });

  /* re-render des rapports si sur la page rapports */
  if (typeof window.renderReports === 'function') window.renderReports(currentLang);
}

/* ── Bascule de langue ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      currentLang = (currentLang === 'fr') ? 'en' : 'fr';
      localStorage.setItem(LANG_KEY, currentLang);
      applyI18n();
    });
  }
  applyI18n();
});