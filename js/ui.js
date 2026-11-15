/* ============================================================
   ALL THE WORDS ON THE SITE (except the plan details).
   Two languages: English (en) and Hindi (hi).
   If you add a new line of text to a page, add its key here in BOTH languages.
   ============================================================ */

const UI = {
  en: {
    brand: "Simple Plans",
    tagline: "Government plans, in words anyone can understand.",
    navFind: "Find plans for me",
    langSwitch: "हिंदी में पढ़ें",

    homeTitle: "Simple Plans — what a government plan gives you, and what it doesn't",
    heroTitle: "What does this plan <em>actually</em> do for you?",
    lede:
      "Every government plan has two sides. The help it gives, and the problems it has. " +
      "Here we write both, in plain words, with no political side.",
    promise1: "<strong>Short sentences.</strong> No big words.",
    promise2: "<strong>Both sides.</strong> Good and not-so-good, together.",
    promise3: "<strong>Official links.</strong> So you can check yourself.",

    searchPlaceholder: "Search a plan… (try 'farmer' or 'health')",
    searchFoundOne: "1 plan found.",
    searchFoundMany: "plans found.",
    searchNone: "No plan matched that word. Try “farmer”, “health”, “jobs”, “gas” or “student”.",
    cardMore: "Read the good and the not-so-good →",
    finderCtaTitle: "Not sure where to start?",
    finderCtaText: "Answer 6 small questions. We will show the plans that may fit your family.",

    howReadTitle: "How to read a plan page",
    readGoodTitle: "Good things",
    readGoodText: "What the plan really does well. The part that helps you.",
    readBadTitle: "Not-so-good things",
    readBadText: "The problems, limits and extra costs. Every plan has some.",
    readWhoTitle: "Who gets it",
    readWhoText: "So you can quickly see if it is meant for you at all.",
    readHowTitle: "How to apply",
    readHowText: "Steps in order. What papers to carry. What to avoid.",

    disclaimer:
      "<strong>Please read.</strong> This site is not run by the government. It is a simple " +
      "explainer. Rules and money amounts change. Always check the official website before " +
      "you act, and never pay a middleman for something that is free.",
    lastCheckedLabel: "Last checked:",
    backAll: "← All plans",

    goodHeading: "Good things",
    badHeading: "Not-so-good things",
    whoHeading: "Who can get it",
    howHeading: "How to apply, step by step",
    fullNameLabel: "Full name:",
    officialNote: "The official website is the only place with the final rules.",
    officialBtn: "Open the official website ↗",
    checkedLabel: "Information checked:",
    checkedAfter: "Rules and amounts can change after that.",
    notFoundTitle: "We could not find that plan",
    notFoundBody: "The link may be old or typed wrongly. Go back to the list and pick one.",
  },

  hi: {
    brand: "आसान योजनाएँ",
    tagline: "सरकारी योजनाएँ, ऐसी भाषा में जो हर कोई समझे।",
    navFind: "मेरे लिए योजना खोजें",
    langSwitch: "Read in English",

    homeTitle: "आसान योजनाएँ — योजना आपको क्या देती है, और क्या नहीं",
    heroTitle: "यह योजना आपके लिए <em>असल में</em> क्या करती है?",
    lede:
      "हर सरकारी योजना के दो पहलू होते हैं — जो मदद मिलती है, और जो दिक्कतें हैं। " +
      "यहाँ हम दोनों आसान भाषा में लिखते हैं, बिना किसी पक्ष में जाए।",
    promise1: "<strong>छोटे वाक्य।</strong> कोई मुश्किल शब्द नहीं।",
    promise2: "<strong>दोनों पहलू।</strong> अच्छी और कमज़ोर बातें, साथ में।",
    promise3: "<strong>सरकारी लिंक।</strong> ताकि आप खुद जाँच सकें।",

    searchPlaceholder: "योजना खोजें… (जैसे 'किसान' या 'इलाज')",
    searchFoundOne: "1 योजना मिली।",
    searchFoundMany: "योजनाएँ मिलीं।",
    searchNone: "इस शब्द से कोई योजना नहीं मिली। “किसान”, “इलाज”, “रोज़गार”, “गैस” या “पढ़ाई” लिखकर देखें।",
    cardMore: "अच्छी और कमज़ोर बातें पढ़ें →",
    finderCtaTitle: "समझ नहीं आ रहा, कहाँ से शुरू करें?",
    finderCtaText: "छह छोटे सवालों के जवाब दें। हम बताएँगे कौन सी योजनाएँ आपके परिवार के लिए हो सकती हैं।",

    howReadTitle: "योजना का पन्ना कैसे पढ़ें",
    readGoodTitle: "अच्छी बातें",
    readGoodText: "योजना में जो सचमुच काम आता है।",
    readBadTitle: "कमियाँ और दिक्कतें",
    readBadText: "जो दिक्कतें, सीमाएँ और छिपा खर्च हैं। हर योजना में कुछ होती हैं।",
    readWhoTitle: "किसे मिलता है",
    readWhoText: "ताकि आप तुरंत देख सकें कि योजना आपके लिए है या नहीं।",
    readHowTitle: "आवेदन कैसे करें",
    readHowText: "क्रम में कदम। कौन से कागज़ ले जाने हैं। किससे बचना है।",

    disclaimer:
      "<strong>कृपया पढ़ें।</strong> यह साइट सरकार नहीं चलाती। यह सिर्फ़ आसान भाषा में " +
      "जानकारी देती है। नियम और रकम बदल सकते हैं। कुछ भी करने से पहले सरकारी वेबसाइट " +
      "पर जाँच लें, और जो चीज़ मुफ़्त है उसके लिए किसी बिचौलिए को पैसा न दें।",
    lastCheckedLabel: "आखिरी जाँच:",
    backAll: "← सभी योजनाएँ",

    goodHeading: "अच्छी बातें",
    badHeading: "कमियाँ और दिक्कतें",
    whoHeading: "किसे मिल सकता है",
    howHeading: "आवेदन कैसे करें, एक-एक कदम",
    fullNameLabel: "पूरा नाम:",
    officialNote: "अंतिम नियम सिर्फ़ सरकारी वेबसाइट पर ही मिलते हैं।",
    officialBtn: "सरकारी वेबसाइट खोलें ↗",
    checkedLabel: "जानकारी जाँची गई:",
    checkedAfter: "इसके बाद नियम और रकम बदल सकते हैं।",
    notFoundTitle: "यह योजना नहीं मिली",
    notFoundBody: "लिंक पुराना हो सकता है या गलत लिखा हो। सूची पर वापस जाएँ और कोई योजना चुनें।",
  },
};

/* ============================================================
   THE FINDER: 6 small questions.
   Each plan has a "fit" rule in plans.js that uses these answer names:
   rural, land, age60, age70, poor, student
   ============================================================ */

const QUIZ = {
  en: {
    title: "Which plans may fit you?",
    intro:
      "Six small questions. Tap one answer each time. There is no right or wrong answer, " +
      "and nothing you type is saved anywhere.",
    start: "Start",
    questionOf: "Question",
    of: "of",
    back: "Back",
    resultsTitle: "Plans that may fit you",
    resultsIntro: "Open each one and read both sides before you decide.",
    maybe: "Maybe",
    maybeNote:
      "You said you are not sure about the poor list. Check your name in the ration list " +
      "first — these plans need it.",
    noResults:
      "No plan matched these answers. That is normal: most plans are only for certain families. " +
      "You can answer again, or just read all the plans.",
    restart: "Answer again",
    seeAll: "See all plans",
    caveat:
      "This is only a rough guide, not a decision. The final answer always comes from the " +
      "government office.",
    questions: [
      {
        id: "rural",
        q: "Where do you live?",
        options: [
          { value: "yes", label: "In a village" },
          { value: "no", label: "In a town or city" },
        ],
      },
      {
        id: "land",
        q: "Does your family own farm land?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "age60",
        q: "Is anyone in the family 60 years or older?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "age70",
        q: "Is anyone 70 years or older?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "poor",
        q: "Is your family on the government's poor list? (ration card or BPL card)",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "notsure", label: "Not sure" },
        ],
      },
      {
        id: "student",
        q: "Is a student in the family studying in school or college?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },

  hi: {
    title: "आपके लिए कौन सी योजनाएँ हो सकती हैं?",
    intro:
      "छह छोटे सवाल। हर बार एक जवाब चुनें। कोई जवाब सही या गलत नहीं है, " +
      "और आपकी कोई जानकारी कहीं सेव नहीं होती।",
    start: "शुरू करें",
    questionOf: "सवाल",
    of: "में से",
    back: "पीछे",
    resultsTitle: "ये योजनाएँ आपके लिए हो सकती हैं",
    resultsIntro: "हर योजना खोलें और फैसला करने से पहले दोनों पहलू पढ़ें।",
    maybe: "शायद",
    maybeNote:
      "आपने कहा कि गरीबी सूची के बारे में पक्का नहीं पता। पहले राशन सूची में अपना नाम " +
      "देखें — इन योजनाओं के लिए यह ज़रूरी है।",
    noResults:
      "इन जवाबों से कोई योजना नहीं मिली। यह सामान्य है: ज़्यादातर योजनाएँ कुछ खास परिवारों " +
      "के लिए ही होती हैं। दोबारा जवाब दे सकते हैं, या सारी योजनाएँ पढ़ सकते हैं।",
    restart: "दोबारा जवाब दें",
    seeAll: "सभी योजनाएँ देखें",
    caveat:
      "यह सिर्फ़ अंदाज़ा है, कोई फैसला नहीं। अंतिम जवाब हमेशा सरकारी दफ़्तर से ही आता है।",
    questions: [
      {
        id: "rural",
        q: "आप कहाँ रहते हैं?",
        options: [
          { value: "yes", label: "गाँव में" },
          { value: "no", label: "शहर या कस्बे में" },
        ],
      },
      {
        id: "land",
        q: "क्या आपके परिवार के नाम पर खेती की ज़मीन है?",
        options: [
          { value: "yes", label: "हाँ" },
          { value: "no", label: "नहीं" },
        ],
      },
      {
        id: "age60",
        q: "क्या परिवार में कोई 60 साल या उससे ज़्यादा का है?",
        options: [
          { value: "yes", label: "हाँ" },
          { value: "no", label: "नहीं" },
        ],
      },
      {
        id: "age70",
        q: "क्या कोई 70 साल या उससे ज़्यादा का है?",
        options: [
          { value: "yes", label: "हाँ" },
          { value: "no", label: "नहीं" },
        ],
      },
      {
        id: "poor",
        q: "क्या आपका परिवार सरकार की गरीबी सूची में है? (राशन कार्ड या बीपीएल कार्ड)",
        options: [
          { value: "yes", label: "हाँ" },
          { value: "no", label: "नहीं" },
          { value: "notsure", label: "पक्का नहीं पता" },
        ],
      },
      {
        id: "student",
        q: "क्या परिवार में कोई बच्चा स्कूल या कॉलेज में पढ़ रहा है?",
        options: [
          { value: "yes", label: "हाँ" },
          { value: "no", label: "नहीं" },
        ],
      },
    ],
  },
};
