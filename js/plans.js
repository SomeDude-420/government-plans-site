/* ============================================================
   ALL THE PLAN INFORMATION LIVES HERE.
   Every plan has English (en) and Hindi (hi) text.
   To add a plan: copy one block, paste it, change the words.
   Keep the commas between blocks.

   "fit" decides when the finder page suggests this plan.
   It uses these answer names: rural, land, age60, age70, poor, student.
   A plan shows if ANY of the groups inside "fit" matches.
   Example: fit: [{ land: true }]  -> only if the family owns land.
   ============================================================ */

const PLANS = [
  {
    id: "pm-kisan",
    emoji: "🌾",
    official: "https://pmkisan.gov.in",
    fit: [{ land: true }],
    en: {
      name: "PM-KISAN",
      fullName: "Pradhan Mantri Kisan Samman Nidhi",
      topic: "Farmers",
      oneLine:
        "The government puts ₹6,000 a year into small farmers' bank accounts, in three payments of ₹2,000.",
      whoGets: [
        "Families that own farm land",
        "Small and medium farmers",
        "Money comes straight to the bank account, no middleman",
      ],
      good: [
        "The money goes directly to the bank account, so there is less chance of it being stolen on the way.",
        "It arrives three times a year, which helps farmers buy seeds and fertiliser before sowing.",
        "You can check your name and payment status online from your phone.",
        "It costs the farmer nothing. There is no form fee.",
      ],
      bad: [
        "₹6,000 a year is about ₹500 a month. That is very little for a farming family.",
        "Only people who own land get it. Farmers who work on other people's land get nothing.",
        "Some families have been marked 'not eligible' by mistake and lose the money.",
        "People who pay income tax, and some government employees, are not allowed to take it.",
        "The money is often late. A payment meant for one season can arrive in the next.",
      ],
      howTo: [
        "Go to the official website and use 'New Farmer Registration'.",
        "You need your Aadhaar number, land papers, and bank account details.",
        "If you are already registered, use the 'Beneficiary Status' button to see your payments.",
        "Your name must match exactly on Aadhaar, bank account and land papers. Small spelling mistakes cause rejections.",
      ],
    },
    hi: {
      name: "पीएम-किसान",
      fullName: "प्रधानमंत्री किसान सम्मान निधि",
      topic: "किसान",
      oneLine:
        "सरकार छोटे किसानों के बैंक खाते में साल में ₹6,000 डालती है, ₹2,000 की तीन किश्तों में।",
      whoGets: [
        "जिन परिवारों के नाम पर खेती की ज़मीन है",
        "छोटे और मंझोले किसान",
        "पैसा सीधे बैंक खाते में आता है, बीच में कोई नहीं",
      ],
      good: [
        "पैसा सीधे बैंक खाते में आता है, इसलिए रास्ते में हड़पने का डर कम है।",
        "साल में तीन बार पैसा आता है, जो बुवाई से पहले बीज और खाद खरीदने में काम आता है।",
        "आप फोन से अपना नाम और भुगतान की स्थिति देख सकते हैं।",
        "किसान को कुछ देना नहीं पड़ता। फॉर्म का कोई पैसा नहीं है।",
      ],
      bad: [
        "साल में ₹6,000 यानी महीने के करीब ₹500। खेती करने वाले परिवार के लिए यह बहुत कम है।",
        "सिर्फ़ जिनके पास अपनी ज़मीन है, उन्हें मिलता है। दूसरों की ज़मीन पर काम करने वालों को कुछ नहीं मिलता।",
        "कुछ परिवारों को गलती से 'पात्र नहीं' कर दिया जाता है और पैसा रुक जाता है।",
        "जो लोग आयकर देते हैं और कुछ सरकारी कर्मचारी इस योजना में नहीं आते।",
        "पैसा अक्सर देर से आता है। किसी मौसम का पैसा अगले मौसम में पहुँचता है।",
      ],
      howTo: [
        "सरकारी वेबसाइट पर जाकर 'New Farmer Registration' चुनें।",
        "आधार नंबर, ज़मीन के कागज़ और बैंक खाते की जानकारी साथ रखें।",
        "अगर पहले से नाम है, तो 'Beneficiary Status' बटन से अपना भुगतान देखें।",
        "आधार, बैंक और ज़मीन के कागज़ों में नाम बिल्कुल एक जैसा होना चाहिए। छोटी सी गलती से आवेदन रुक जाता है।",
      ],
    },
  },

  {
    id: "ayushman-bharat",
    emoji: "🏥",
    official: "https://pmjay.gov.in",
    fit: [{ poor: true }, { age70: true }],
    en: {
      name: "Ayushman Bharat",
      fullName: "Ayushman Bharat PM-JAY (health card)",
      topic: "Health",
      oneLine:
        "A free health card that pays up to ₹5 lakh a year for hospital treatment, for poor and middle-income families.",
      whoGets: [
        "Poor and vulnerable families picked using an old government survey",
        "All senior citizens aged 70 and above, whatever their income",
        "There is no limit on how many people in the family can use it",
      ],
      good: [
        "Hospital treatment is cashless. You show the card, the hospital takes the money from the scheme.",
        "It covers treatment before and after the operation too, not just the operation day.",
        "It works in other states as well, not only where you live.",
        "You can use it many times a year, as long as the total stays under ₹5 lakh.",
        "Getting the card is free, and you can download it yourself.",
      ],
      bad: [
        "Only hospitals that joined the scheme accept it. The nearest good hospital may not be one of them.",
        "It only pays for treatment where you stay in hospital. Small clinic visits and medicines at home are usually not covered.",
        "Private hospitals sometimes ask for extra money for things the scheme does not list.",
        "Many people who are eligible have never got a card, because they were not told about it.",
        "The family must be on the government's list. Being poor is not enough by itself.",
      ],
      howTo: [
        "Check your name on the official website, or call the helpline 14555.",
        "You can also ask at a Common Service Centre (CSC) near you.",
        "You need your Aadhaar card and a mobile number.",
        "Keep the card with you before going to hospital, and ask the hospital first if they accept it.",
      ],
    },
    hi: {
      name: "आयुष्मान भारत",
      fullName: "आयुष्मान भारत पीएम-जय (स्वास्थ्य कार्ड)",
      topic: "इलाज",
      oneLine:
        "एक मुफ़्त स्वास्थ्य कार्ड, जो अस्पताल में इलाज के लिए साल में ₹5 लाख तक का खर्च उठाता है।",
      whoGets: [
        "गरीब और कमज़ोर परिवार, जो सरकार के पुराने सर्वे की सूची में हैं",
        "70 साल या उससे ज़्यादा उम्र के सभी बुज़ुर्ग, चाहे उनकी आय कुछ भी हो",
        "परिवार में कितने लोग इलाज कराएँ, इसकी कोई सीमा नहीं",
      ],
      good: [
        "इलाज के पैसे आपको नहीं देने पड़ते। कार्ड दिखाएँ, अस्पताल सरकार से पैसा लेता है।",
        "ऑपरेशन से पहले और बाद की जाँच और दवाइयाँ भी इसमें आती हैं।",
        "दूसरे राज्य में भी काम करता है, सिर्फ़ अपने राज्य में नहीं।",
        "साल में कई बार इस्तेमाल कर सकते हैं, जब तक कुल खर्च ₹5 लाख से कम रहे।",
        "कार्ड बनवाने का कोई पैसा नहीं लगता, आप खुद भी डाउनलोड कर सकते हैं।",
      ],
      bad: [
        "सिर्फ़ वे अस्पताल कार्ड लेते हैं जो इस योजना में जुड़े हैं। पास का अच्छा अस्पताल उसमें न हो तो दिक्कत है।",
        "पैसा सिर्फ़ उस इलाज पर मिलता है जिसमें अस्पताल में रुकना पड़े। छोटी ओपीडी और घर की दवाइयाँ आम तौर पर शामिल नहीं।",
        "कुछ प्राइवेट अस्पताल सूची में न होने वाली चीज़ों के पैसे अलग से माँगते हैं।",
        "बहुत से लोग कार्ड ही नहीं बनवा पाते, क्योंकि उन्हें इसके बारे में बताया ही नहीं गया।",
        "परिवार का नाम सरकार की सूची में होना ज़रूरी है। सिर्फ़ गरीब होना काफ़ी नहीं है।",
      ],
      howTo: [
        "सरकारी वेबसाइट पर अपना नाम देखें, या 14555 पर फोन करें।",
        "आप पास के कॉमन सर्विस सेंटर (CSC) में भी पूछ सकते हैं।",
        "आधार कार्ड और मोबाइल नंबर साथ ले जाएँ।",
        "अस्पताल जाने से पहले कार्ड साथ रखें, और पहले पूछ लें कि अस्पताल इसे लेता है या नहीं।",
      ],
    },
  },

  {
    id: "ujjwala",
    emoji: "🔥",
    official: "https://www.pmuy.gov.in",
    fit: [{ poor: true }],
    en: {
      name: "Ujjwala Yojana",
      fullName: "Pradhan Mantri Ujjwala Yojana",
      topic: "Cooking gas",
      oneLine:
        "Poor women get a free LPG gas connection, so they can cook with gas instead of wood or coal.",
      whoGets: [
        "Women from poor families (the connection is in her name)",
        "Families without an existing gas connection",
        "Families listed in government poverty or ration records",
      ],
      good: [
        "Cooking on gas means much less smoke, which is better for the mother's and children's lungs.",
        "Women save hours they used to spend collecting firewood.",
        "The connection itself is free. You also get help with the first refill and a stove.",
        "Less cutting of trees, so it is better for the village environment.",
      ],
      bad: [
        "The connection is free, but each gas refill still costs money. For many families that is the real problem.",
        "The cylinder is heavy to carry and to change. Older women often need help.",
        "In places where the gas shop is far away, getting a refill is a full day's work.",
        "Some families took the free connection but went back to wood because refills were too costly.",
        "You need a bank account, an Aadhaar number and an address proof to apply.",
      ],
      howTo: [
        "Go to your nearest LPG gas agency, or apply online at the official website.",
        "Fill the form in the woman's name. She becomes the connection holder.",
        "Carry Aadhaar, bank account details, and a ration card or poverty certificate if you have one.",
        "Ask the agency for the free connection and the first-refill help. Do not pay an agent for what is free.",
      ],
    },
    hi: {
      name: "उज्ज्वला योजना",
      fullName: "प्रधानमंत्री उज्ज्वला योजना",
      topic: "रसोई गैस",
      oneLine:
        "गरीब परिवारों की महिलाओं को मुफ़्त गैस कनेक्शन मिलता है, ताकि वे लकड़ी या कोयले की जगह गैस पर खाना बनाएँ।",
      whoGets: [
        "गरीब परिवारों की महिलाएँ (कनेक्शन उनके नाम पर होता है)",
        "जिन परिवारों के पास पहले से गैस कनेक्शन नहीं है",
        "जो परिवार सरकार के राशन या गरीबी की सूची में हैं",
      ],
      good: [
        "गैस पर खाना बनाने से धुआँ बहुत कम होता है, जिससे माँ और बच्चों के फेफड़े स्वस्थ रहते हैं।",
        "जो समय लकड़ी बीनने में जाता था, वह बच जाता है।",
        "कनेक्शन मुफ़्त है। पहली रिफिल और एक चूल्हे में भी मदद मिलती है।",
        "पेड़ कम कटते हैं, इसलिए गाँव के वातावरण के लिए अच्छा है।",
      ],
      bad: [
        "कनेक्शन मुफ़्त है, पर हर रिफिल के पैसे देने पड़ते हैं। बहुत से परिवारों के लिए असली दिक्कत यही है।",
        "सिलेंडर भारी होता है और बदलना मुश्किल है। बुज़ुर्ग महिलाओं को मदद चाहिए होती है।",
        "जहाँ गैस एजेंसी दूर है, वहाँ रिफिल लाने में पूरा दिन लग जाता है।",
        "कुछ परिवारों ने मुफ़्त कनेक्शन लिया, पर रिफिल महँगी लगने पर फिर लकड़ी पर लौट गए।",
        "आवेदन के लिए बैंक खाता, आधार और पते का सबूत चाहिए।",
      ],
      howTo: [
        "पास की गैस एजेंसी में जाएँ, या सरकारी वेबसाइट पर ऑनलाइन फॉर्म भरें।",
        "फॉर्म महिला के नाम पर भरें। कनेक्शन उनके नाम पर बनेगा।",
        "आधार, बैंक खाते की जानकारी और राशन कार्ड या गरीबी प्रमाण पत्र साथ ले जाएँ।",
        "एजेंसी से मुफ़्त कनेक्शन और पहली रिफिल की मदद माँगें। जो मुफ़्त है, उसके लिए किसी एजेंट को पैसा न दें।",
      ],
    },
  },

  {
    id: "mgnrega",
    emoji: "🛠️",
    official: "https://nrega.nic.in",
    fit: [{ rural: true }],
    en: {
      name: "MGNREGA",
      fullName: "Mahatma Gandhi National Rural Employment Guarantee Act",
      topic: "Jobs",
      oneLine:
        "In villages, any adult can ask for work and the government must give up to 100 days of paid work in a year.",
      whoGets: [
        "Adults living in a village who want work",
        "Every household can ask, not just poor families",
        "Work is for building village things like roads, ponds and wells",
      ],
      good: [
        "It is a legal right. The government must give work, or pay a small allowance if it cannot.",
        "It keeps families going when farming work dries up or the rains fail.",
        "Wages go straight to the bank account, and wage rates must be the same for men and women.",
        "Work must be within 5 km of the village. If it is further, the government pays travel money.",
        "The village meeting decides what work is needed, so people have a say.",
      ],
      bad: [
        "The promise is 100 days, but in many places people get far fewer days.",
        "Wages are often paid late, weeks or months after the work is done.",
        "The work is hard physical labour, digging and carrying. Not everyone can do it.",
        "In some places, people on the record are not the ones who actually worked (fake names).",
        "There are not always enough projects, so work runs out.",
      ],
      howTo: [
        "Ask at your Gram Panchayat office for a job card. It is free.",
        "Give your name, age, Aadhaar and bank details for everyone who wants work.",
        "Ask for work in writing, and keep a copy or note the date you asked.",
        "Keep your job card safe. It records the days you worked and the money due to you.",
      ],
    },
    hi: {
      name: "मनरेगा",
      fullName: "महात्मा गांधी राष्ट्रीय ग्रामीण रोज़गार गारंटी अधिनियम",
      topic: "रोज़गार",
      oneLine:
        "गाँव में कोई भी वयस्क काम माँग सकता है, और सरकार को साल में 100 दिन तक का पगार वाला काम देना पड़ता है।",
      whoGets: [
        "गाँव में रहने वाले वयस्क जो काम चाहते हैं",
        "हर परिवार माँग सकता है, सिर्फ़ गरीब परिवार नहीं",
        "काम गाँव की चीज़ें बनाने का होता है, जैसे सड़क, तालाब और कुआँ",
      ],
      good: [
        "यह कानूनी अधिकार है। सरकार को काम देना ही होता है, वरना कुछ भत्ता देना पड़ता है।",
        "जब खेती का काम खत्म हो जाए या बारिश न हो, तब यह परिवार को चलाता है।",
        "मज़दूरी सीधे बैंक खाते में आती है, और मर्द-औरत की मज़दूरी एक जैसी होनी चाहिए।",
        "काम गाँव से 5 किमी के अंदर मिलना चाहिए। दूर हो तो आने-जाने का खर्च सरकार देती है।",
        "गाँव की सभा तय करती है कि कौन सा काम ज़रूरी है, इसलिए लोगों की बात भी चलती है।",
      ],
      bad: [
        "कागज़ पर 100 दिन है, पर बहुत जगह लोगों को इससे बहुत कम दिन मिलते हैं।",
        "मज़दूरी अक्सर देर से मिलती है — काम खत्म होने के हफ़्तों या महीनों बाद।",
        "काम मेहनत वाला होता है, मिट्टी खोदना और ढोना। हर कोई यह नहीं कर सकता।",
        "कुछ जगहों पर कागज़ पर जो नाम हैं, उन्होंने काम नहीं किया (नकली नाम)।",
        "हमेशा इतने काम नहीं होते, इसलिए काम खत्म हो जाता है।",
      ],
      howTo: [
        "ग्राम पंचायत दफ़्तर से जॉब कार्ड माँगें। इसका कोई पैसा नहीं लगता।",
        "जो भी काम करना चाहते हैं, उन सबका नाम, उम्र, आधार और बैंक की जानकारी दें।",
        "काम लिखकर माँगें, और जिस दिन माँगा उसकी तारीख नोट कर लें या कॉपी रखें।",
        "जॉब कार्ड संभालकर रखें। उसमें लिखा रहता है कि आपने कितने दिन काम किया और कितना पैसा बाकी है।",
      ],
    },
  },

  {
    id: "pm-awas",
    emoji: "🏠",
    official: "https://pmayg.nic.in",
    fit: [{ rural: true, poor: true }],
    en: {
      name: "PM Awas Yojana",
      fullName: "Pradhan Mantri Awas Yojana (Gramin) - rural housing",
      topic: "Housing",
      oneLine:
        "The government helps poor rural families build a pucca house, with money paid in a few stages.",
      whoGets: [
        "Families without a proper pucca house",
        "Families on the government's rural housing list",
        "The first instalment usually comes after the foundation is dug",
      ],
      good: [
        "The help is about ₹1.2 lakh, a little more in hilly areas, given in parts as the house is built.",
        "It also gives help for a toilet, and for a gas or electricity connection.",
        "The house is registered in the woman's name in many cases, which protects her.",
        "Families also get some days of paid work under MGNREGA while building.",
      ],
      bad: [
        "₹1.2 lakh is usually not enough to finish a house. Families add their own money or take a loan.",
        "The money comes in parts, and if the next part is late, building stops in the middle.",
        "You must be on the government list. Being poor and without a house is not enough on its own.",
        "Getting on the list can take a long time and needs land papers in your name.",
        "Some families have received money but are still waiting for the work to be checked and approved.",
      ],
      howTo: [
        "Ask at your Gram Panchayat whether your family is on the housing list.",
        "You need Aadhaar, a job card, bank details and papers showing the land is yours.",
        "Open a bank account in the name of the person the house will be registered to.",
        "Take photos of each stage of building. The next payment is only released after a check.",
      ],
    },
    hi: {
      name: "पीएम आवास योजना",
      fullName: "प्रधानमंत्री आवास योजना (ग्रामीण) — गाँव में घर",
      topic: "घर",
      oneLine:
        "सरकार गरीब ग्रामीण परिवारों को पक्का घर बनाने में मदद देती है, पैसा कुछ हिस्सों में आता है।",
      whoGets: [
        "जिन परिवारों के पास पक्का घर नहीं है",
        "जो परिवार सरकार की ग्रामीण आवास सूची में हैं",
        "पहला हिस्सा आम तौर पर नींव खोदने के बाद मिलता है",
      ],
      good: [
        "करीब ₹1.2 लाख की मदद मिलती है, पहाड़ी इलाकों में थोड़ी ज़्यादा, और घर बनने के साथ-साथ किस्तों में।",
        "शौचालय, और गैस या बिजली कनेक्शन के लिए भी अलग मदद मिलती है।",
        "कई जगह घर महिला के नाम पर बनता है, जिससे उसका हक़ सुरक्षित रहता है।",
        "घर बनाते समय मनरेगा के तहत कुछ दिन की मज़दूरी भी मिलती है।",
      ],
      bad: [
        "₹1.2 लाख में पूरा घर आम तौर पर नहीं बनता। परिवार को अपना पैसा लगाना पड़ता है या कर्ज़ लेना पड़ता है।",
        "पैसा हिस्सों में आता है। अगली किस्त देर से आए तो घर बीच में रुक जाता है।",
        "सरकार की सूची में नाम होना ज़रूरी है। सिर्फ़ गरीब होना और घर न होना काफ़ी नहीं।",
        "सूची में आने में लंबा समय लग सकता है, और ज़मीन के कागज़ आपके नाम पर होने चाहिए।",
        "कुछ परिवारों को पैसा मिल गया, पर काम की जाँच-पड़ताल के लिए महीनों इंतज़ार करना पड़ा।",
      ],
      howTo: [
        "ग्राम पंचायत में पूछें कि आपका परिवार आवास सूची में है या नहीं।",
        "आधार, जॉब कार्ड, बैंक की जानकारी और ज़मीन आपकी होने के कागज़ चाहिए।",
        "जिसके नाम पर घर बनेगा, उसके नाम से बैंक खाता खुलवाएँ।",
        "घर बनने के हर चरण की फोटो रखें। अगला पैसा जाँच के बाद ही मिलता है।",
      ],
    },
  },

  {
    id: "ration-card",
    emoji: "🍚",
    official: "https://nfsa.gov.in",
    fit: [{ poor: true }],
    en: {
      name: "Ration Card",
      fullName: "National Food Security Act - ration card and free grain",
      topic: "Food",
      oneLine:
        "Poor families get free grain every month - 5 kg of rice or wheat per person - from a fair price shop.",
      whoGets: [
        "Families on the government's food list (mostly poor families)",
        "Priority households, and Antyodaya families who are the poorest",
        "The card is in the family's name and works at any fair price shop",
      ],
      good: [
        "5 kg of grain for each person every month, free for priority families.",
        "One card works at any fair price shop in the country, not only your village shop.",
        "It helps most in months when work and money are short.",
        "In many states you also get lentils and cooking oil at low prices.",
      ],
      bad: [
        "The family must be on the government's list. Being poor alone is not enough.",
        "Some families have no card at all, because their name was never added.",
        "Shopkeepers sometimes give less grain, or ask for extra money.",
        "If your name is spelled wrongly or the card is very old, you may be refused grain.",
        "The list is not updated for years, so families who need it most are left out.",
      ],
      howTo: [
        "Check whether your name is in the ration list at your Gram Panchayat or ward office.",
        "Fill the ration card form with Aadhaar and address proof for every family member.",
        "After the card is made, link it to one person's Aadhaar for the shop's machine.",
        "Weigh the grain at the shop. The machine receipt shows what you were given.",
      ],
    },
    hi: {
      name: "राशन कार्ड",
      fullName: "राष्ट्रीय खाद्य सुरक्षा अधिनियम — राशन कार्ड और मुफ़्त अनाज",
      topic: "अनाज",
      oneLine:
        "गरीब परिवारों को हर महीने मुफ़्त अनाज मिलता है — हर व्यक्ति के लिए 5 किलो चावल या गेहूँ — राशन की दुकान से।",
      whoGets: [
        "जो परिवार सरकार की खाद्य सूची में हैं (ज़्यादातर गरीब परिवार)",
        "प्राथमिकता वाले परिवार, और सबसे गरीब अंत्योदय परिवार",
        "कार्ड परिवार के नाम पर होता है और देश की किसी भी राशन दुकान पर चलता है",
      ],
      good: [
        "हर व्यक्ति को महीने में 5 किलो अनाज, प्राथमिकता वाले परिवारों के लिए मुफ़्त।",
        "एक कार्ड देश की किसी भी राशन दुकान पर चलता है, सिर्फ़ गाँव की दुकान पर नहीं।",
        "जब काम और पैसा कम हो, तब यह सबसे ज़्यादा काम आता है।",
        "कई राज्यों में दाल और तेल भी सस्ते दाम पर मिलता है।",
      ],
      bad: [
        "परिवार का नाम सरकार की सूची में होना ज़रूरी है। सिर्फ़ गरीब होना काफ़ी नहीं।",
        "कुछ परिवारों के पास कार्ड ही नहीं, क्योंकि नाम कभी जोड़ा ही नहीं गया।",
        "दुकानदार कभी-कभी कम अनाज देता है, या अलग से पैसे माँगता है।",
        "नाम गलत लिखा हो या कार्ड बहुत पुराना हो तो अनाज देने से मना कर दिया जाता है।",
        "सूची सालों तक नहीं बदलती, इसलिए जिन्हें सबसे ज़्यादा ज़रूरत है वे छूट जाते हैं।",
      ],
      howTo: [
        "ग्राम पंचायत या वार्ड दफ़्तर में देखें कि आपका नाम राशन सूची में है या नहीं।",
        "हर सदस्य के आधार और पते के सबूत के साथ राशन कार्ड का फॉर्म भरें।",
        "कार्ड बनने के बाद उसे एक सदस्य के आधार से जोड़ें, ताकि दुकान की मशीन पहचाने।",
        "दुकान पर अनाज तोलकर लें। मशीन की पर्ची पर लिखा होता है कि आपको क्या मिला।",
      ],
    },
  },

  {
    id: "scholarship",
    emoji: "🎓",
    official: "https://scholarships.gov.in",
    fit: [{ student: true }],
    en: {
      name: "Scholarship (NSP)",
      fullName: "National Scholarship Portal",
      topic: "Students",
      oneLine:
        "Students from poorer families can get money from the government to help pay for school or college.",
      whoGets: [
        "Students studying in school, college or a professional course",
        "Families below the income limit set for that scholarship (often ₹2.5 lakh a year)",
        "Most scholarships also need good marks and regular attendance",
      ],
      good: [
        "The money comes to the student's own bank account, once a year.",
        "One website lists many scholarships, so you do not have to search everywhere.",
        "It covers fees, books and sometimes hostel costs.",
        "Some scholarships are only for girls or for students with disabilities, so there is less competition.",
      ],
      bad: [
        "The forms open for only a few weeks a year. Miss the date and you wait a full year.",
        "One small document mistake, like a name spelling, can cancel the whole application.",
        "The college asks for fees first, but the money often arrives months later.",
        "Many students never get it because nobody told them these scholarships exist.",
        "You usually need an income certificate, a caste certificate and a bank account in the student's name.",
      ],
      howTo: [
        "Ask your school or college office for the scholarship list. Most have one person who helps.",
        "Get the income certificate from the tehsil or ward office first, because it takes time.",
        "Register on the National Scholarship Portal with Aadhaar and bank details.",
        "Fill the form before the last date and keep a printout. Check your status every few weeks.",
      ],
    },
    hi: {
      name: "स्कॉलरशिप (एनएसपी)",
      fullName: "राष्ट्रीय स्कॉलरशिप पोर्टल",
      topic: "पढ़ाई",
      oneLine:
        "गरीब परिवारों के विद्यार्थियों को स्कूल या कॉलेज की पढ़ाई के लिए सरकार से पैसा मिल सकता है।",
      whoGets: [
        "स्कूल, कॉलेज या किसी कोर्स में पढ़ने वाले विद्यार्थी",
        "जिन परिवार की आय उस स्कॉलरशिप की सीमा से कम है (अक्सर साल में ₹2.5 लाख)",
        "ज़्यादातर स्कॉलरशिप में अच्छे नंबर और पूरी उपस्थिति की शर्त होती है",
      ],
      good: [
        "पैसा विद्यार्थी के अपने बैंक खाते में साल में एक बार आता है।",
        "एक ही वेबसाइट पर कई स्कॉलरशिप की जानकारी है, हर जगह भटकना नहीं पड़ता।",
        "फीस, किताबें और कई बार हॉस्टल का खर्च भी इसमें आता है।",
        "कुछ स्कॉलरशिप सिर्फ़ लड़कियों या दिव्यांग विद्यार्थियों के लिए होती हैं, इसलिए मुकाबला कम होता है।",
      ],
      bad: [
        "फॉर्म साल में कुछ हफ़्ते ही खुलते हैं। तारीख निकल गई तो पूरा साल इंतज़ार।",
        "कागज़ में एक छोटी गलती, जैसे नाम की स्पेलिंग, पूरा आवेदन रद्द कर सकती है।",
        "कॉलेज पहले फीस माँगता है, पर पैसा कई बार महीनों बाद आता है।",
        "बहुत से विद्यार्थियों को पता ही नहीं होता कि ये स्कॉलरशिप हैं।",
        "आम तौर पर आय प्रमाण पत्र, जाति प्रमाण पत्र और विद्यार्थी के नाम का बैंक खाता चाहिए।",
      ],
      howTo: [
        "स्कूल या कॉलेज के दफ़्तर से स्कॉलरशिप की सूची माँगें। ज़्यादातर जगह एक व्यक्ति मदद के लिए होता है।",
        "पहले तहसील या वार्ड दफ़्तर से आय प्रमाण पत्र बनवाएँ, क्योंकि इसमें समय लगता है।",
        "राष्ट्रीय स्कॉलरशिप पोर्टल पर आधार और बैंक की जानकारी से रजिस्टर करें।",
        "आखिरी तारीख से पहले फॉर्म भरें और प्रिंट रखें। हर कुछ हफ़्ते में स्थिति देखते रहें।",
      ],
    },
  },

  {
    id: "pension",
    emoji: "👵",
    official: "https://nsap.nic.in",
    fit: [{ age60: true, poor: true }],
    en: {
      name: "Old Age Pension",
      fullName: "National Social Assistance Programme (NSAP)",
      topic: "Pension",
      oneLine:
        "People aged 60 or more from very poor families get a small monthly pension, with a little more after age 80.",
      whoGets: [
        "People aged 60 and above",
        "Families below the poverty line (BPL list)",
        "Some states add their own money on top",
      ],
      good: [
        "A small amount comes to the bank account every month, without fail.",
        "It is the person's own money, so they do not have to ask anyone for it.",
        "Many states add extra money to the central amount.",
        "The amount goes up after the age of 80.",
      ],
      bad: [
        "The central amount is small - about ₹200 to ₹300 a month depending on age. In many states the total is still under ₹1,000.",
        "One person can get only one pension. You cannot take two.",
        "Payments can stop if the yearly check or Aadhaar update is missed.",
        "Mistakes in the BPL list leave out people who are clearly poor.",
        "Applications can sit for months, and some people pay agents to speed them up.",
      ],
      howTo: [
        "Apply at your Gram Panchayat or ward office. There is no fee.",
        "Carry Aadhaar, age proof, a BPL or income certificate, and bank account details.",
        "Ask for the receipt of your application and note the date.",
        "If the money stops, ask the office which check is missing. Do not pay an agent.",
      ],
    },
    hi: {
      name: "वृद्धावस्था पेंशन",
      fullName: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (एनएसएपी)",
      topic: "पेंशन",
      oneLine:
        "60 साल या उससे ज़्यादा उम्र के बहुत गरीब लोगों को हर महीने थोड़ी पेंशन मिलती है, 80 के बाद थोड़ी ज़्यादा।",
      whoGets: [
        "60 साल और उससे ज़्यादा उम्र के लोग",
        "गरीबी रेखा से नीचे (बीपीएल) सूची वाले परिवार",
        "कुछ राज्य अपने पैसे से इसमें और जोड़ते हैं",
      ],
      good: [
        "हर महीने थोड़ा-सा पैसा बैंक खाते में आता है, बिना रुके।",
        "यह अपना पैसा होता है, इसलिए किसी से माँगना नहीं पड़ता।",
        "कई राज्य केंद्र के पैसे के ऊपर अपना पैसा भी देते हैं।",
        "80 साल के बाद रकम थोड़ी बढ़ जाती है।",
      ],
      bad: [
        "केंद्र की रकम बहुत कम है — उम्र के हिसाब से महीने के करीब ₹200 से ₹300। कई राज्यों में कुल ₹1,000 से भी कम रहता है।",
        "एक व्यक्ति को सिर्फ़ एक पेंशन मिलती है, दो नहीं।",
        "सालाना जाँच या आधार अपडेट छूट जाए तो पैसा रुक सकता है।",
        "बीपीएल सूची की गलतियों से साफ़ गरीब लोग भी बाहर रह जाते हैं।",
        "आवेदन महीनों पड़े रहते हैं, और कुछ लोग एजेंट को पैसा देकर जल्दी कराने की कोशिश करते हैं।",
      ],
      howTo: [
        "ग्राम पंचायत या वार्ड दफ़्तर में आवेदन दें। इसका कोई पैसा नहीं लगता।",
        "आधार, उम्र का सबूत, बीपीएल या आय प्रमाण पत्र और बैंक की जानकारी ले जाएँ।",
        "आवेदन की पर्ची ज़रूर माँगें और तारीख नोट करें।",
        "पैसा रुक जाए तो दफ़्तर से पूछें कि कौन सी जाँच बाकी है। किसी एजेंट को पैसा न दें।",
      ],
    },
  },

  {
    id: "fasal-bima",
    emoji: "🌱",
    official: "https://pmfby.gov.in",
    fit: [{ land: true }],
    en: {
      name: "Crop Insurance",
      fullName: "Pradhan Mantri Fasal Bima Yojana",
      topic: "Farmers",
      oneLine:
        "The farmer pays a small part of the insurance cost, and if the crop is damaged by rain, flood or pests, the government pays the rest.",
      whoGets: [
        "Farmers who grow crops that are listed for their area",
        "Farmers who own land, and in many states tenant farmers too",
        "You must apply before the cut-off date for that season",
      ],
      good: [
        "The farmer's share is small - 2% in the kharif season, 1.5% in rabi - and the government pays the rest.",
        "It covers damage from flood, drought, pests, and some damage after harvest.",
        "It saves a family from losing everything after one bad season.",
        "The claim is worked out for the whole area, so one farmer does not have to fight alone.",
      ],
      bad: [
        "If the area's average crop is fine but your own field failed, you may get nothing.",
        "Applying needs the right papers and a date that many farmers never hear about.",
        "Payments often come months later, when the farmer has already borrowed again.",
        "Tenant farmers often cannot claim because they have no land papers.",
        "Many farmers do not know which crops are covered in their area.",
      ],
      howTo: [
        "Ask at your bank or the agriculture office which crops are covered this season.",
        "Apply before the cut-off date, at the bank, a CSC, or the insurance portal.",
        "Keep the receipt, and keep your land papers or tenancy proof ready.",
        "If the crop is damaged, tell the agriculture office or bank within the time limit.",
      ],
    },
    hi: {
      name: "फसल बीमा",
      fullName: "प्रधानमंत्री फसल बीमा योजना",
      topic: "किसान",
      oneLine:
        "किसान बीमा का थोड़ा हिस्सा देता है, और बारिश, बाढ़ या कीड़ों से फसल खराब होने पर सरकार बाकी पैसा देती है।",
      whoGets: [
        "जो किसान अपने इलाके के लिए सूची में शामिल फसल उगाते हैं",
        "ज़मीन वाले किसान, और कई राज्यों में ठेके पर खेती करने वाले किसान भी",
        "उस मौसम की आखिरी तारीख से पहले आवेदन करना ज़रूरी है",
      ],
      good: [
        "किसान का हिस्सा बहुत कम है — खरीफ में 2%, रबी में 1.5% — बाकी सरकार देती है।",
        "बाढ़, सूखा, कीड़े और कटाई के बाद के कुछ नुकसान पर भी पैसा मिलता है।",
        "एक बुरे मौसम के बाद परिवार को पूरी तरह बर्बाद होने से बचाता है।",
        "दावा पूरे इलाके के हिसाब से तय होता है, इसलिए किसान को अकेले लड़ना नहीं पड़ता।",
      ],
      bad: [
        "अगर इलाके का औसत ठीक है पर आपका अपना खेत खराब हुआ, तो पैसा नहीं मिल सकता।",
        "आवेदन के लिए सही कागज़ चाहिए और एक तारीख होती है, जिसके बारे में बहुत किसानों को पता ही नहीं चलता।",
        "पैसा अक्सर महीनों बाद आता है, जब किसान दोबारा कर्ज़ ले चुका होता है।",
        "ठेके पर खेती करने वाले किसान कागज़ न होने से दावा नहीं कर पाते।",
        "बहुत से किसानों को पता ही नहीं कि उनके इलाके में कौन सी फसल बीमित है।",
      ],
      howTo: [
        "बैंक या कृषि दफ़्तर से पूछें कि इस मौसम में कौन सी फसल बीमित है।",
        "आखिरी तारीख से पहले बैंक, सीएससी या बीमा पोर्टल पर आवेदन करें।",
        "पर्ची संभालकर रखें, और ज़मीन के कागज़ या ठेके का सबूत तैयार रखें।",
        "फसल खराब हो तो तय समय के अंदर कृषि दफ़्तर या बैंक को बताएँ।",
      ],
    },
  },
];

/* Shown on every plan page. Change it when you update the numbers. */
const LAST_CHECKED = {
  en: "November 2026",
  hi: "नवंबर 2026",
};
