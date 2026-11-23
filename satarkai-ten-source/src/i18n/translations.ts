import type { LanguageCode } from '../types.ts';

export interface LanguageOption {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en-IN', nativeName: 'English (India)', englishName: 'Indian English' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali' },
  { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi' },
  { code: 'te', nativeName: 'తెలుగు', englishName: 'Telugu' },
  { code: 'ta', nativeName: 'தமிழ்', englishName: 'Tamil' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', englishName: 'Kannada' },
  { code: 'gu', nativeName: 'ગુજરાતી', englishName: 'Gujarati' },
  { code: 'ml', nativeName: 'മലയാളം', englishName: 'Malayalam' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', englishName: 'Punjabi' },
  { code: 'or', nativeName: 'ଓଡ଼ିଆ', englishName: 'Odia' },
  { code: 'ur', nativeName: 'اردو', englishName: 'Urdu' },
];

export interface SampleScenario {
  id: string;
  label: string;
  language: LanguageCode;
  statement: string;
}

export const SAMPLE_SCENARIOS: SampleScenario[] = [
  {
    id: 'digital-arrest-hi',
    label: 'Digital Arrest (हिन्दी)',
    language: 'hi',
    statement:
      'सर अभी मुंबई क्राइम ब्रांच से कॉल आया था। वे बोल रहे हैं कि मेरे आधार कार्ड से एक पार्सल पकड़ा गया है जिसमें गैरकानूनी सामान है। उन्होंने कहा है कि स्काइप वीडियो कॉल पर बने रहें और किसी को न बताएं, वरना दो घंटे में पुलिस घर आकर गिरफ्तार कर लेगी।',
  },
  {
    id: 'otp-trai-en',
    label: 'TRAI / KYC Trap (Indian English)',
    language: 'en-IN',
    statement:
      'A caller claiming to be from TRAI and my bank told me my SIM card will be blocked in 30 minutes due to suspicious activity. He asked me to share the 6-digit verification code sent on SMS and install a quick support app so he can update my KYC.',
  },
  {
    id: 'upi-refund-bn',
    label: 'UPI Refund Bait (বাংলা)',
    language: 'bn',
    statement:
      'একজন ফোন করে বলছে আমার অনলাইন অর্ডারের ভুল টাকা ফেরত দেবে। টাকা নেওয়ার জন্য আমাকে একটা QR কোড স্ক্যান করে আমার UPI পিন দিতে বলছে। আমি কি পিন দেব?',
  },
  {
    id: 'electricity-mr',
    label: 'Bill Disconnect Threat (मराठी)',
    language: 'mr',
    statement:
      'मला मेसेज आणि कॉल आला आहे की माझे वीज बिल अपडेट झाले नाही म्हणून आज रात्री ९ वाजता लाईट कापली जाईल. त्यांनी एका खाजगी नंबरवर कॉल करून त्वरित पेमेंट लिंकवर पैसे भरायला सांगितले आहे.',
  },
  {
    id: 'parcel-te',
    label: 'Customs Parcel Threat (తెలుగు)',
    language: 'te',
    statement:
      'ఫెడెక్స్ కస్టమ్స్ నుండి అని ఒకరు ఫోన్ చేసి నా పేరు మీద డ్రగ్స్ పార్సెల్ ఉందని చెప్పారు. కేసు క్లోజ్ చేయాలంటే వెరిఫికేషన్ కోసం వెంటనే లక్ష రూపాయలు ట్రాన్స్‌ఫర్ చేయాలని, ఎవరికీ చెప్పొద్దని బెదిరిస్తున్నారు.',
  },
  {
    id: 'job-ta',
    label: 'Telegram Task Scam (தமிழ்)',
    language: 'ta',
    statement:
      'டெலிகிராம் குரூப்பில் வீடியோக்களுக்கு லைக் செய்தால் தினமும் மூவாயிரம் ரூபாய் கிடைக்கும் என்று சொன்னார்கள். முதலில் சிறிய தொகை கொடுத்தார்கள், இப்போது பெரிய டாஸ்க் முடிக்க பத்தாயிரம் ரூபாய் டெபாசிட் செய்ய சொல்கிறார்கள்.',
  },
  {
    id: 'safe-bank-en',
    label: 'Genuine Bank Alert (Indian English)',
    language: 'en-IN',
    statement:
      'I got an automated SMS and call from my bank about a ₹4,200 card transaction. The message says if I did not make it, I should open my official bank app or call the number printed on the back of my debit card, and it clearly says never share any OTP.',
  },
];

export interface UIStrings {
  navOverview: string;
  navTracker: string;
  navGuardians: string;
  navPlaybook: string;
  ctaHelpline: string;
  heroHeadline: string;
  heroBody: string;
  heroPrimaryBtn: string;
  heroSecondaryBtn: string;
  heroImageCaption: string;
  stripSteps: { num: string; title: string; detail: string }[];
  trackerTitle: string;
  trackerSubtitle: string;
  modeText: string;
  modeVoice: string;
  modeImage: string;
  autoDetectLabel: string;
  responseLangLabel: string;
  textPlaceholder: string;
  analyzeTextBtn: string;
  analyzingBtn: string;
  voicePromptTitle: string;
  voicePromptHint: string;
  startRecordingBtn: string;
  stopRecordingBtn: string;
  processingVoice: string;
  imagePromptTitle: string;
  imageNotePlaceholder: string;
  analyzeImageBtn: string;
  samplesHeading: string;
  resultProblemLabel: string;
  resultRiskLabel: string;
  resultTacticsTitle: string;
  resultStepsTitle: string;
  resultSayTitle: string;
  resultVerifyTitle: string;
  copyBtn: string;
  copiedBtn: string;
  listenBtn: string;
  spokenReplyTitle: string;
  transcriptTitle: string;
  followUpTitle: string;
  followUpPlaceholder: string;
  followUpSendBtn: string;
  followUpVoiceBtn: string;
  guardiansTitle: string;
  guardiansSubtitle: string;
  addGuardianTitle: string;
  nameLabel: string;
  phoneLabel: string;
  relationLabel: string;
  saveContactBtn: string;
  callBtn: string;
  whatsappAlertBtn: string;
  removeBtn: string;
  historyTitle: string;
  historyEmpty: string;
  playbookTitle: string;
  playbookSubtitle: string;
  playbookStages: { num: string; title: string; tactic: string; defense: string }[];
  signInBtn: string;
  signOutBtn: string;
  privacyNote: string;
}

const EN: UIStrings = {
  navOverview: 'Overview',
  navTracker: 'AI Tracker',
  navGuardians: 'Guardians',
  navPlaybook: 'Playbook',
  ctaHelpline: 'Call 1930',
  heroHeadline: 'Pause before panic takes over.',
  heroBody:
    'Paste a message or describe what happened in one of 12 Indian languages. Satark looks for pressure patterns, explains what it noticed, and gives you a calm next step.',
  heroPrimaryBtn: 'Check a Statement Now',
  heroSecondaryBtn: 'Read the Safety Playbook',
  heroImageCaption: 'Put the phone down for thirty seconds. Verify independently before sharing codes or money.',
  stripSteps: [
    { num: '01', title: 'Speak or Paste', detail: 'Share the exact words in voice or text across 12 Indian languages.' },
    { num: '02', title: 'AI Problem Detection', detail: 'Identifies digital arrest, KYC, UPI, parcel, or safe calls from context.' },
    { num: '03', title: 'Matched Reply Mode', detail: 'Get a calm written action plan, with optional spoken guidance.' },
    { num: '04', title: 'Reach a Guardian', detail: 'Send a pre-filled SOS summary to someone you trust or call 1930.' },
  ],
  trackerTitle: 'Read the pressure. Choose your next move.',
  trackerSubtitle:
    'Paste the words you heard or upload a screenshot. Satark explains the signals and practical next steps. This is guidance, not proof of fraud.',
  modeText: 'Text Statement',
  modeVoice: 'Voice Recording',
  modeImage: 'Screenshot / Notice',
  autoDetectLabel: 'Auto-detect language',
  responseLangLabel: 'Language',
  textPlaceholder:
    'Type or paste what the caller or message is demanding in Hindi, Hinglish, English, Bengali, Marathi, Telugu, Tamil, Kannada, Gujarati, Malayalam, Punjabi, Odia, or Urdu…',
  analyzeTextBtn: 'Review this statement',
  analyzingBtn: 'Analyzing statement...',
  voicePromptTitle: 'Speak in any of the 12 supported languages',
  voicePromptHint:
    'Tap Start Recording, explain what the caller is saying, then tap Stop. Satark transcribes the clip, checks the situation, and returns guidance in text and audio.',
  startRecordingBtn: 'Start Recording',
  stopRecordingBtn: 'Stop & Analyze Voice',
  processingVoice: 'Transcribing speech, detecting problem, and preparing voice reply...',
  imagePromptTitle: 'Upload a suspicious WhatsApp chat, fake notice, or QR request',
  imageNotePlaceholder: 'Optional context (e.g., "They sent this warrant on WhatsApp asking for ₹50,000")',
  analyzeImageBtn: 'Inspect Screenshot',
  samplesHeading: 'Try a realistic statement:',
  resultProblemLabel: 'Detected Problem',
  resultRiskLabel: 'Risk Assessment',
  resultTacticsTitle: 'Manipulation Tactics Spotted',
  resultStepsTitle: 'What To Do Right Now',
  resultSayTitle: 'Safe Words To Disengage',
  resultVerifyTitle: 'Independent Checks',
  copyBtn: 'Copy script',
  copiedBtn: 'Copied',
  listenBtn: 'Listen in audio',
  spokenReplyTitle: 'Calm Spoken Guidance',
  transcriptTitle: 'What you recorded',
  followUpTitle: 'Ask a follow-up question',
  followUpPlaceholder: 'Ask what to do next (e.g., "They say police will come in 1 hour, is that real?")',
  followUpSendBtn: 'Ask in Text',
  followUpVoiceBtn: 'Ask by Voice',
  guardiansTitle: 'Trusted Guardians',
  guardiansSubtitle: 'People you can alert or call immediately when someone tries to isolate or rush you.',
  addGuardianTitle: 'Add a trusted person',
  nameLabel: 'Full name',
  phoneLabel: 'Phone number',
  relationLabel: 'Relationship',
  saveContactBtn: 'Save Guardian',
  callBtn: 'Call',
  whatsappAlertBtn: 'WhatsApp Alert',
  removeBtn: 'Remove',
  historyTitle: 'Recent Statement Checks',
  historyEmpty: 'No checks yet. Test a voice recording or paste a suspicious statement above.',
  playbookTitle: 'How Indian Call Scams Escalate',
  playbookSubtitle: 'Recognizing the pattern breaks the urgency spell.',
  playbookStages: [
    {
      num: '01',
      title: 'The Surprise Crisis',
      tactic: 'Claims a parcel with drugs, a blocked SIM, or an unpaid electricity bill.',
      defense: 'Real agencies do not resolve legal cases or cut power over random personal mobile numbers.',
    },
    {
      num: '02',
      title: 'Borrowed Authority',
      tactic: 'Uses CBI, RBI, TRAI, ED, or Cyber Police titles and fake video backgrounds.',
      defense: 'No Indian court or police unit conducts "digital arrest" over WhatsApp or Skype.',
    },
    {
      num: '03',
      title: 'Forced Secrecy',
      tactic: 'Orders you to stay on the line, lock your door, and tell no family member.',
      defense: 'Secrecy is the clearest proof of fraud. Hang up and call a family member immediately.',
    },
    {
      num: '04',
      title: 'Fake Proof & Notices',
      tactic: 'Sends edited arrest warrants, Aadhaar copies, or official-looking PDFs.',
      defense: 'Check notices independently via official portals; upload screenshots here to inspect red flags.',
    },
    {
      num: '05',
      title: 'The Trap Transfer or OTP',
      tactic: 'Asks for an OTP, screen-sharing app, QR scan, or "refundable verification" transfer.',
      defense: 'You never enter a UPI PIN or send money to receive a refund or prove innocence.',
    },
    {
      num: '06',
      title: 'Immediate Recovery',
      tactic: 'If money was moved or an app was installed, speed matters.',
      defense: 'Call 1930 immediately, report at cybercrime.gov.in, and freeze your bank card/UPI.',
    },
  ],
  signInBtn: 'Private Account',
  signOutBtn: 'Sign out',
  privacyNote: 'Avoid entering full OTPs, PINs, Aadhaar numbers or passwords. Sensitive details are masked before history is saved.',
};

const HI: UIStrings = {
  ...EN,
  navOverview: 'मुख्य पृष्ठ',
  navTracker: 'AI जांच',
  navGuardians: 'भरोसेमंद लोग',
  navPlaybook: 'सुरक्षा गाइड',
  ctaHelpline: '1930 पर कॉल करें',
  heroHeadline: 'घबराहट से पहले एक पल रुकें।',
  heroBody:
    'कॉल करने वाले ने जो कहा वह हिन्दी, अंग्रेज़ी, बांग्ला, मराठी, तेलुगु या तमिल में बोलें या लिखें। सतर्क आपके बयान से असली समस्या पहचानकर शांत और सही कदम बताता है।',
  heroPrimaryBtn: 'अभी बयान जांचें',
  heroSecondaryBtn: '6-चरणीय गाइड पढ़ें',
  heroImageCaption: 'तीस सेकंड के लिए फोन नीचे रखें। पैसे या OTP देने से पहले खुद जांच करें।',
  trackerTitle: 'AI बयान और वॉइस ट्रैकर',
  trackerSubtitle: 'जो हुआ उसे अपने शब्दों में बताएं। इतिहास में सेव करने से पहले फोन नंबर, आधार और OTP अपने आप छुपा दिए जाते हैं।',
  modeText: 'टेक्स्ट लिखें',
  modeVoice: 'आवाज़ रिकॉर्ड करें',
  modeImage: 'स्क्रीनशॉट / नोटिस',
  autoDetectLabel: 'भाषा अपने आप पहचानें',
  responseLangLabel: 'भाषा',
  textPlaceholder: 'कॉलर या मैसेज में क्या कहा जा रहा है, यहाँ लिखें या पेस्ट करें...',
  analyzeTextBtn: 'समस्या पहचानें और मार्गदर्शन पाएं',
  analyzingBtn: 'बयान की जांच हो रही है...',
  voicePromptTitle: '6 में से किसी भी भाषा में बोलें',
  voicePromptHint:
    'रिकॉर्डिंग शुरू करें पर टैप करें, अपनी बात बोलें और फिर रोकें। सतर्क आपकी आवाज़ समझकर उसी भाषा में बोलकर और लिखकर जवाब देगा।',
  startRecordingBtn: 'रिकॉर्डिंग शुरू करें',
  stopRecordingBtn: 'रोकें और जांचें',
  processingVoice: 'आवाज़ सुनी जा रही है और जवाब तैयार हो रहा है...',
  imagePromptTitle: 'संदिग्ध WhatsApp चैट, नकली नोटिस या QR कोड अपलोड करें',
  analyzeImageBtn: 'स्क्रीनशॉट जांचें',
  samplesHeading: 'उदाहरण आज़माएं:',
  resultProblemLabel: 'पहचानी गई समस्या',
  resultRiskLabel: 'जोखिम स्तर',
  resultTacticsTitle: 'दबाव डालने के तरीके',
  resultStepsTitle: 'अभी तुरंत क्या करें',
  resultSayTitle: 'कॉल काटने के लिए सुरक्षित वाक्य',
  resultVerifyTitle: 'खुद से जांच करने के तरीके',
  spokenReplyTitle: 'शांत वॉइस मार्गदर्शन',
  transcriptTitle: 'आपने जो बोला',
  followUpTitle: 'अगला सवाल पूछें',
  followUpPlaceholder: 'कोई भी अगला सवाल पूछें...',
  followUpSendBtn: 'टेक्स्ट में पूछें',
  followUpVoiceBtn: 'बोलकर पूछें',
  guardiansTitle: 'भरोसेमंद संपर्क',
  guardiansSubtitle: 'जब कोई कॉलर आपको डराए या अकेला करे, तो तुरंत इन्हें कॉल या अलर्ट भेजें।',
  saveContactBtn: 'संपर्क सेव करें',
  historyTitle: 'हाल की जांच',
  playbookTitle: 'फ़ोन स्कैम कैसे दबाव बनाते हैं',
  signInBtn: 'निजी खाता',
  signOutBtn: 'लॉग आउट',
};

const BN: UIStrings = {
  ...EN,
  navOverview: 'প্রথম পাতা',
  navTracker: 'AI যাচাই',
  navGuardians: 'বিশ্বস্ত মানুষ',
  navPlaybook: 'সুরক্ষা গাইড',
  ctaHelpline: '১৯৩০-এ কল করুন',
  heroHeadline: 'আতঙ্কিত হওয়ার আগে একটু থামুন।',
  heroBody:
    'কলার যা বলেছে তা বাংলা, হিন্দি, ইংরেজি, মারাঠি, তেলুগু বা তামিলে বলুন বা লিখুন। সতর্ক আপনার কথা থেকেই আসল সমস্যা বুঝে শান্তভাবে করণীয় জানাবে।',
  heroPrimaryBtn: 'এখনই বক্তব্য যাচাই করুন',
  heroSecondaryBtn: '৬-ধাপের গাইড দেখুন',
  trackerTitle: 'AI বক্তব্য ও ভয়েস ট্র্যাকার',
  modeText: 'লিখে জানান',
  modeVoice: 'ভয়েস রেকর্ড',
  modeImage: 'স্ক্রিনশট / নোটিশ',
  autoDetectLabel: 'স্বয়ংক্রিয় ভাষা শনাক্তকরণ',
  analyzeTextBtn: 'সমস্যা খুঁজুন ও পরামর্শ নিন',
  startRecordingBtn: 'রেকর্ডিং শুরু করুন',
  stopRecordingBtn: 'থামুন ও যাচাই করুন',
  samplesHeading: 'উদাহরণ দেখুন:',
  resultProblemLabel: 'শনাক্ত করা সমস্যা',
  resultStepsTitle: 'এখনই যা করবেন',
  spokenReplyTitle: 'শান্ত ভয়েস পরামর্শ',
  guardiansTitle: 'বিশ্বস্ত অভিভাবক',
  playbookTitle: 'ফোন প্রতারণা কীভাবে ফাঁদ পাতে',
};

const MR: UIStrings = {
  ...EN,
  navOverview: 'मुखपृष्ठ',
  navTracker: 'AI तपासणी',
  navGuardians: 'विश्वासू लोक',
  navPlaybook: 'सुरक्षा मार्गदर्शक',
  ctaHelpline: '१९३० वर कॉल करा',
  heroHeadline: 'घाबरण्यापूर्वी एक क्षण थांबा.',
  heroBody:
    'कॉल करणारा काय म्हणाला ते मराठी, हिंदी, इंग्रजी, बंगाली, तेलुगू किंवा तमिळमध्ये बोला किंवा लिहा. सतर्क तुमच्या विधानावरून नेमकी समस्या ओळखून शांत मार्गदर्शन देते.',
  heroPrimaryBtn: 'आत्ताच विधान तपासा',
  heroSecondaryBtn: '६ टप्प्यांचे मार्गदर्शक वाचा',
  trackerTitle: 'AI विधान व व्हॉइस ट्रॅकर',
  modeText: 'मजकूर लिहा',
  modeVoice: 'आवाज रेकॉर्ड करा',
  modeImage: 'स्क्रीनशॉट / नोटीस',
  autoDetectLabel: 'भाषा आपोआप ओळखा',
  analyzeTextBtn: 'समस्या ओळखा आणि सल्ला घ्या',
  startRecordingBtn: 'रेकॉर्डिंग सुरू करा',
  stopRecordingBtn: 'थांबवा आणि तपासा',
  samplesHeading: 'नमुना तपासा:',
  resultProblemLabel: 'ओळखलेली समस्या',
  resultStepsTitle: 'आत्ताच काय करावे',
  spokenReplyTitle: 'शांत आवाज मार्गदर्शन',
  guardiansTitle: 'विश्वासू संपर्क',
  playbookTitle: 'फसवणुकीचे कॉल कसे दबाव आणतात',
};

const TE: UIStrings = {
  ...EN,
  navOverview: 'సారాంశం',
  navTracker: 'AI తనిఖీ',
  navGuardians: 'నమ్మకమైన వారు',
  navPlaybook: 'భద్రతా గైడ్',
  ctaHelpline: '1930 కు కాల్ చేయండి',
  heroHeadline: 'ఆందోళనకు ముందు ఒక్క క్షణం ఆగండి.',
  heroBody:
    'కాలర్ ఏం చెప్పారో తెలుగు, హిందీ, ఇంగ్లీష్, బెంగాలీ, మరాఠీ లేదా తమిళంలో మాట్లాడండి లేదా టైప్ చేయండి. సతర్క్ మీ మాటల నుండే సమస్యను గుర్తించి ప్రశాంతమైన సలహా ఇస్తుంది.',
  heroPrimaryBtn: 'ఇప్పుడే తనిఖీ చేయండి',
  heroSecondaryBtn: '6-దశల గైడ్ చూడండి',
  trackerTitle: 'AI స్టేట్‌మెంట్ & వాయిస్ ట్రాకర్',
  modeText: 'టెక్స్ట్ రాయండి',
  modeVoice: 'వాయిస్ రికార్డ్',
  modeImage: 'స్క్రీన్‌షాట్ / నోటీసు',
  autoDetectLabel: 'భాషను ఆటోమేటిక్‌గా గుర్తించండి',
  analyzeTextBtn: 'సమస్యను గుర్తించి సలహా పొందండి',
  startRecordingBtn: 'రికార్డింగ్ ప్రారంభించండి',
  stopRecordingBtn: 'ఆపి తనిఖీ చేయండి',
  samplesHeading: 'ఉదాహరణ ప్రయత్నించండి:',
  resultProblemLabel: 'గుర్తించిన సమస్య',
  resultStepsTitle: 'వెంటనే చేయాల్సినవి',
  spokenReplyTitle: 'వాయిస్ మార్గదర్శనం',
  guardiansTitle: 'నమ్మకమైన వ్యక్తులు',
  playbookTitle: 'మోసపూరిత కాల్స్ ఎలా ఒత్తిడి తెస్తాయి',
};

const TA: UIStrings = {
  ...EN,
  navOverview: 'முகப்பு',
  navTracker: 'AI சோதனை',
  navGuardians: 'நம்பகமானவர்கள்',
  navPlaybook: 'பாதுகாப்பு வழிகாட்டி',
  ctaHelpline: '1930 அழைக்கவும்',
  heroHeadline: 'பதற்றம் அடையும் முன் ஒரு கணம் நில்லுங்கள்.',
  heroBody:
    'அழைப்பாளர் கூறியதை தமிழ், இந்தி, ஆங்கிலம், வங்காளம், மராத்தி அல்லது தெலுங்கில் பேசுங்கள் அல்லது தட்டச்சு செய்யுங்கள். சதர்க் உங்கள் வாக்கியத்திலிருந்தே சிக்கலைக் கண்டறிந்து அமைதியான வழிகாட்டுதலைத் தரும்.',
  heroPrimaryBtn: 'இப்போதே சோதிக்கவும்',
  heroSecondaryBtn: '6-நிலை வழிகாட்டியைப் படிக்கவும்',
  trackerTitle: 'AI அறிக்கை & குரல் சோதனை',
  modeText: 'உரை உள்ளீடு',
  modeVoice: 'குரல் பதிவு',
  modeImage: 'திரைப்படம் / நோட்டீஸ்',
  autoDetectLabel: 'மொழியைத் தானாகக் கண்டறி',
  analyzeTextBtn: 'சிக்கலைக் கண்டறிந்து வழிகாட்டு',
  startRecordingBtn: 'பதிவைத் தொடங்கு',
  stopRecordingBtn: 'நிறுத்தி சோதிக்கவும்',
  samplesHeading: 'மாதிரியை முயற்சிக்கவும்:',
  resultProblemLabel: 'கண்டறியப்பட்ட சிக்கல்',
  resultStepsTitle: 'உடனே செய்ய வேண்டியவை',
  spokenReplyTitle: 'அமைதியான குரல் வழிகாட்டுதல்',
  guardiansTitle: 'நம்பகமான நபர்கள்',
  playbookTitle: 'மோசடி அழைப்புகள் எவ்வாறு அழுத்தம் கொடுக்கின்றன',
};

export const UI_STRINGS: Record<LanguageCode, UIStrings> = {
  'en-IN': EN,
  hi: HI,
  bn: BN,
  mr: MR,
  te: TE,
  ta: TA,
  kn: { ...EN, navOverview: 'ಮುನ್ನೋಟ', navTracker: 'ಪರಿಶೀಲನೆ', navGuardians: 'ವಿಶ್ವಾಸದವರು', navPlaybook: 'ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶಿ', ctaHelpline: '1930 ಗೆ ಕರೆ ಮಾಡಿ', heroHeadline: 'ಭಯಕ್ಕಿಂತ ಮೊದಲು ಕ್ಷಣ ನಿಲ್ಲಿ.', heroPrimaryBtn: 'ಸಂದೇಶ ಪರಿಶೀಲಿಸಿ', analyzeTextBtn: 'ಈ ಹೇಳಿಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ' },
  gu: { ...EN, navOverview: 'ઝાંખી', navTracker: 'તપાસો', navGuardians: 'વિશ્વાસુ લોકો', navPlaybook: 'સુરક્ષા માર્ગદર્શિકા', ctaHelpline: '1930 પર કૉલ કરો', heroHeadline: 'ગભરાટ પહેલાં થોભો.', heroPrimaryBtn: 'સંદેશ તપાસો', analyzeTextBtn: 'આ નિવેદન તપાસો' },
  ml: { ...EN, navOverview: 'അവലോകനം', navTracker: 'പരിശോധിക്കുക', navGuardians: 'വിശ്വസ്തർ', navPlaybook: 'സുരക്ഷാ മാർഗ്ഗദർശി', ctaHelpline: '1930-ലേക്ക് വിളിക്കുക', heroHeadline: 'പരിഭ്രമത്തിന് മുമ്പ് ഒന്ന് നിർത്തൂ.', heroPrimaryBtn: 'സന്ദേശം പരിശോധിക്കുക', analyzeTextBtn: 'ഈ പ്രസ്താവന പരിശോധിക്കുക' },
  pa: { ...EN, navOverview: 'ਝਲਕ', navTracker: 'ਜਾਂਚ', navGuardians: 'ਭਰੋਸੇਯੋਗ ਲੋਕ', navPlaybook: 'ਸੁਰੱਖਿਆ ਗਾਈਡ', ctaHelpline: '1930 ਤੇ ਕਾਲ ਕਰੋ', heroHeadline: 'ਘਬਰਾਹਟ ਤੋਂ ਪਹਿਲਾਂ ਰੁਕੋ।', heroPrimaryBtn: 'ਸੁਨੇਹਾ ਜਾਂਚੋ', analyzeTextBtn: 'ਇਸ ਬਿਆਨ ਦੀ ਜਾਂਚ ਕਰੋ' },
  or: { ...EN, navOverview: 'ସମୀକ୍ଷା', navTracker: 'ଯାଞ୍ଚ', navGuardians: 'ବିଶ୍ୱସ୍ତ ଲୋକ', navPlaybook: 'ସୁରକ୍ଷା ଗାଇଡ୍', ctaHelpline: '1930 କୁ କଲ୍ କରନ୍ତୁ', heroHeadline: 'ଆତଙ୍କ ପୂର୍ବରୁ ଟିକେ ରୁହନ୍ତୁ।', heroPrimaryBtn: 'ବାର୍ତ୍ତା ଯାଞ୍ଚ କରନ୍ତୁ', analyzeTextBtn: 'ଏହି ବିବୃତ୍ତି ଯାଞ୍ଚ କରନ୍ତୁ' },
  ur: { ...EN, navOverview: 'جائزہ', navTracker: 'جانچ', navGuardians: 'قابلِ اعتماد افراد', navPlaybook: 'حفاظتی رہنما', ctaHelpline: '1930 پر کال کریں', heroHeadline: 'گھبراہٹ سے پہلے ایک لمحہ رکیں۔', heroPrimaryBtn: 'پیغام کی جانچ کریں', analyzeTextBtn: 'اس بیان کا جائزہ لیں' },
};

export function getLanguageLabel(code: LanguageCode): string {
  return SUPPORTED_LANGUAGES.find((l) => l.code === code)?.nativeName || code;
}
