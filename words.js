/**
 * 词库数据 —— 来自 SecondBrain 雅思笔记
 * 来源：词汇积累.md · Day1-足球运动员的大脑-词汇语法.md
 *       Day2-Should we cycle more?.md
 *       原始资料/6 Minute English：Rude emails · Stress-free family meals
 *         · Limiting screen time for children · How advertisers make us spend money
 *       雅思最全词汇包/VocabForIELTS_WLM_FrequentlyMisspeltWords.pdf
 *       雅思最全词汇包/雅思听力同义替换汇总.pdf
 *       雅思最全词汇包/10 lists 阅读必备词.pdf
 *       雅思最全词汇包/雅思听力场景类词汇.docx
 *       雅思最全词汇包/写作话题词汇.pdf
 *       雅思最全词汇包/口语话题词汇.pdf
 *
 * 完整词库分层：
 *   Day 1–14  重启材料词汇
 *   Day 15–16 首批易错拼写与同义替换
 *   Day 17–43 AWL / 阅读学术核心
 *   Day 44–45 高频易错拼写补充
 *   Day 46–70 听力场景
 *   Day 71–85 写作话题
 *   Day 86–97 口语话题
 *
 * 字段说明：
 *   en        英文（拼写答案，大小写不敏感）
 *   ipa       音标
 *   pos       词性
 *   zh        中文释义
 *   example   例句
 *   tags      标签（day1 / core / phrase 等）
 *   star      是否重点词
 *
 * 新增单词：按同样格式追加到下方数组即可。
 *
 * 章节：由 tags 里的 dayN 决定；标题在下面的 VOCAB_CHAPTERS 里补充。
 */

/** 章节标题表：key 为 tags 里的 dayN，value 为显示名 */
window.VOCAB_CHAPTERS = {
  day1: "Day 1 · 足球运动员的大脑",
  day2: "Day 2 · Should we cycle more?",
  day3: "Day 3 · 无礼的邮件",
  day4: "Day 4 · 轻松的家庭晚餐",
  day5: "Day 5 · 限制孩子的屏幕时间",
  day6: "Day 6 · 广告商如何让我们花钱",
  day7: "Day 7 · 客户来电（复习日）",
  day8: "Day 8 · 诗歌的力量",
  day9: "Day 9 · 与债务共处",
  day10: "Day 10 · 让城市更安静",
  day11: "Day 11 · 阅读如何塑造大脑",
  day12: "Day 12 · 寻找外星生命",
  day13: "Day 13 · 我们为何如此焦虑",
  day14: "Day 14 · 超加工食品该吃吗",
  day15: "Day 15 · 高频易错拼写",
  day16: "Day 16 · 高频同义替换",
  // BEGIN AUTO CHAPTERS ZH
  day17: "Day 17 · 学术核心词 1/27",
  day18: "Day 18 · 学术核心词 2/27",
  day19: "Day 19 · 学术核心词 3/27",
  day20: "Day 20 · 学术核心词 4/27",
  day21: "Day 21 · 学术核心词 5/27",
  day22: "Day 22 · 学术核心词 6/27",
  day23: "Day 23 · 学术核心词 7/27",
  day24: "Day 24 · 学术核心词 8/27",
  day25: "Day 25 · 学术核心词 9/27",
  day26: "Day 26 · 学术核心词 10/27",
  day27: "Day 27 · 学术核心词 11/27",
  day28: "Day 28 · 学术核心词 12/27",
  day29: "Day 29 · 学术核心词 13/27",
  day30: "Day 30 · 学术核心词 14/27",
  day31: "Day 31 · 学术核心词 15/27",
  day32: "Day 32 · 学术核心词 16/27",
  day33: "Day 33 · 学术核心词 17/27",
  day34: "Day 34 · 学术核心词 18/27",
  day35: "Day 35 · 学术核心词 19/27",
  day36: "Day 36 · 学术核心词 20/27",
  day37: "Day 37 · 学术核心词 21/27",
  day38: "Day 38 · 学术核心词 22/27",
  day39: "Day 39 · 学术核心词 23/27",
  day40: "Day 40 · 学术核心词 24/27",
  day41: "Day 41 · 学术核心词 25/27",
  day42: "Day 42 · 学术核心词 26/27",
  day43: "Day 43 · 学术核心词 27/27",
  day44: "Day 44 · 高频易错拼写 1/2",
  day45: "Day 45 · 高频易错拼写 2/2",
  day46: "Day 46 · 听力场景词 1/25",
  day47: "Day 47 · 听力场景词 2/25",
  day48: "Day 48 · 听力场景词 3/25",
  day49: "Day 49 · 听力场景词 4/25",
  day50: "Day 50 · 听力场景词 5/25",
  day51: "Day 51 · 听力场景词 6/25",
  day52: "Day 52 · 听力场景词 7/25",
  day53: "Day 53 · 听力场景词 8/25",
  day54: "Day 54 · 听力场景词 9/25",
  day55: "Day 55 · 听力场景词 10/25",
  day56: "Day 56 · 听力场景词 11/25",
  day57: "Day 57 · 听力场景词 12/25",
  day58: "Day 58 · 听力场景词 13/25",
  day59: "Day 59 · 听力场景词 14/25",
  day60: "Day 60 · 听力场景词 15/25",
  day61: "Day 61 · 听力场景词 16/25",
  day62: "Day 62 · 听力场景词 17/25",
  day63: "Day 63 · 听力场景词 18/25",
  day64: "Day 64 · 听力场景词 19/25",
  day65: "Day 65 · 听力场景词 20/25",
  day66: "Day 66 · 听力场景词 21/25",
  day67: "Day 67 · 听力场景词 22/25",
  day68: "Day 68 · 听力场景词 23/25",
  day69: "Day 69 · 听力场景词 24/25",
  day70: "Day 70 · 听力场景词 25/25",
  day71: "Day 71 · 写作话题表达 1/15",
  day72: "Day 72 · 写作话题表达 2/15",
  day73: "Day 73 · 写作话题表达 3/15",
  day74: "Day 74 · 写作话题表达 4/15",
  day75: "Day 75 · 写作话题表达 5/15",
  day76: "Day 76 · 写作话题表达 6/15",
  day77: "Day 77 · 写作话题表达 7/15",
  day78: "Day 78 · 写作话题表达 8/15",
  day79: "Day 79 · 写作话题表达 9/15",
  day80: "Day 80 · 写作话题表达 10/15",
  day81: "Day 81 · 写作话题表达 11/15",
  day82: "Day 82 · 写作话题表达 12/15",
  day83: "Day 83 · 写作话题表达 13/15",
  day84: "Day 84 · 写作话题表达 14/15",
  day85: "Day 85 · 写作话题表达 15/15",
  day86: "Day 86 · 口语话题表达 1/12",
  day87: "Day 87 · 口语话题表达 2/12",
  day88: "Day 88 · 口语话题表达 3/12",
  day89: "Day 89 · 口语话题表达 4/12",
  day90: "Day 90 · 口语话题表达 5/12",
  day91: "Day 91 · 口语话题表达 6/12",
  day92: "Day 92 · 口语话题表达 7/12",
  day93: "Day 93 · 口语话题表达 8/12",
  day94: "Day 94 · 口语话题表达 9/12",
  day95: "Day 95 · 口语话题表达 10/12",
  day96: "Day 96 · 口语话题表达 11/12",
  day97: "Day 97 · 口语话题表达 12/12",
  day98: "词包 98 · 阅读真题同义替换补充 1/4",
  day99: "词包 99 · 阅读真题同义替换补充 2/4",
  day100: "词包 100 · 阅读真题同义替换补充 3/4",
  day101: "词包 101 · 阅读真题同义替换补充 4/4"
  // END AUTO CHAPTERS ZH
};

/** 英文界面下的章节标题（缺省回落到 "Day N"） */
window.VOCAB_CHAPTERS_EN = {
  day1: "Day 1 · A footballer's brain",
  day2: "Day 2 · Should we cycle more?",
  day3: "Day 3 · Rude emails",
  day4: "Day 4 · Stress-free family meals",
  day5: "Day 5 · Limiting screen time for children",
  day6: "Day 6 · How advertisers make us spend money",
  day7: "Day 7 · A phone call from a customer",
  day8: "Day 8 · The power of poetry",
  day9: "Day 9 · Living with debt",
  day10: "Day 10 · Making cities feel quieter",
  day11: "Day 11 · How reading shapes your brain",
  day12: "Day 12 · Searching for life on another planet",
  day13: "Day 13 · Why are we all so stressed?",
  day14: "Day 14 · Should we eat ultra-processed food?",
  day15: "Day 15 · Frequently misspelt words",
  day16: "Day 16 · High-frequency paraphrases",
  // BEGIN AUTO CHAPTERS EN
  day17: "Day 17 · Academic core 1/27",
  day18: "Day 18 · Academic core 2/27",
  day19: "Day 19 · Academic core 3/27",
  day20: "Day 20 · Academic core 4/27",
  day21: "Day 21 · Academic core 5/27",
  day22: "Day 22 · Academic core 6/27",
  day23: "Day 23 · Academic core 7/27",
  day24: "Day 24 · Academic core 8/27",
  day25: "Day 25 · Academic core 9/27",
  day26: "Day 26 · Academic core 10/27",
  day27: "Day 27 · Academic core 11/27",
  day28: "Day 28 · Academic core 12/27",
  day29: "Day 29 · Academic core 13/27",
  day30: "Day 30 · Academic core 14/27",
  day31: "Day 31 · Academic core 15/27",
  day32: "Day 32 · Academic core 16/27",
  day33: "Day 33 · Academic core 17/27",
  day34: "Day 34 · Academic core 18/27",
  day35: "Day 35 · Academic core 19/27",
  day36: "Day 36 · Academic core 20/27",
  day37: "Day 37 · Academic core 21/27",
  day38: "Day 38 · Academic core 22/27",
  day39: "Day 39 · Academic core 23/27",
  day40: "Day 40 · Academic core 24/27",
  day41: "Day 41 · Academic core 25/27",
  day42: "Day 42 · Academic core 26/27",
  day43: "Day 43 · Academic core 27/27",
  day44: "Day 44 · Frequently misspelt 1/2",
  day45: "Day 45 · Frequently misspelt 2/2",
  day46: "Day 46 · Listening scenarios 1/25",
  day47: "Day 47 · Listening scenarios 2/25",
  day48: "Day 48 · Listening scenarios 3/25",
  day49: "Day 49 · Listening scenarios 4/25",
  day50: "Day 50 · Listening scenarios 5/25",
  day51: "Day 51 · Listening scenarios 6/25",
  day52: "Day 52 · Listening scenarios 7/25",
  day53: "Day 53 · Listening scenarios 8/25",
  day54: "Day 54 · Listening scenarios 9/25",
  day55: "Day 55 · Listening scenarios 10/25",
  day56: "Day 56 · Listening scenarios 11/25",
  day57: "Day 57 · Listening scenarios 12/25",
  day58: "Day 58 · Listening scenarios 13/25",
  day59: "Day 59 · Listening scenarios 14/25",
  day60: "Day 60 · Listening scenarios 15/25",
  day61: "Day 61 · Listening scenarios 16/25",
  day62: "Day 62 · Listening scenarios 17/25",
  day63: "Day 63 · Listening scenarios 18/25",
  day64: "Day 64 · Listening scenarios 19/25",
  day65: "Day 65 · Listening scenarios 20/25",
  day66: "Day 66 · Listening scenarios 21/25",
  day67: "Day 67 · Listening scenarios 22/25",
  day68: "Day 68 · Listening scenarios 23/25",
  day69: "Day 69 · Listening scenarios 24/25",
  day70: "Day 70 · Listening scenarios 25/25",
  day71: "Day 71 · Writing topics 1/15",
  day72: "Day 72 · Writing topics 2/15",
  day73: "Day 73 · Writing topics 3/15",
  day74: "Day 74 · Writing topics 4/15",
  day75: "Day 75 · Writing topics 5/15",
  day76: "Day 76 · Writing topics 6/15",
  day77: "Day 77 · Writing topics 7/15",
  day78: "Day 78 · Writing topics 8/15",
  day79: "Day 79 · Writing topics 9/15",
  day80: "Day 80 · Writing topics 10/15",
  day81: "Day 81 · Writing topics 11/15",
  day82: "Day 82 · Writing topics 12/15",
  day83: "Day 83 · Writing topics 13/15",
  day84: "Day 84 · Writing topics 14/15",
  day85: "Day 85 · Writing topics 15/15",
  day86: "Day 86 · Speaking topics 1/12",
  day87: "Day 87 · Speaking topics 2/12",
  day88: "Day 88 · Speaking topics 3/12",
  day89: "Day 89 · Speaking topics 4/12",
  day90: "Day 90 · Speaking topics 5/12",
  day91: "Day 91 · Speaking topics 6/12",
  day92: "Day 92 · Speaking topics 7/12",
  day93: "Day 93 · Speaking topics 8/12",
  day94: "Day 94 · Speaking topics 9/12",
  day95: "Day 95 · Speaking topics 10/12",
  day96: "Day 96 · Speaking topics 11/12",
  day97: "Day 97 · Speaking topics 12/12",
  day98: "Pack 98 · Reading paraphrases 1/4",
  day99: "Pack 99 · Reading paraphrases 2/4",
  day100: "Pack 100 · Reading paraphrases 3/4",
  day101: "Pack 101 · Reading paraphrases 4/4"
  // END AUTO CHAPTERS EN
};

/** 资料来源名称与词包默认元数据。旧 dayN ID 保留，仅用于兼容历史进度。 */
window.VOCAB_SOURCE_CATALOG = {
  "restart-materials": { zh: "重启听读材料", en: "Restart materials" },
  "frequently-misspelt": { zh: "Cambridge高频易错拼写", en: "Frequently misspelt words" },
  "listening-paraphrase": { zh: "雅思听力同义替换", en: "Listening paraphrases" },
  "awl-570": { zh: "AWL 570+学术核心词", en: "AWL academic core" },
  "reading-10-lists": { zh: "10 Lists阅读必备词", en: "10 Lists reading vocabulary" },
  "listening-scenarios": { zh: "雅思听力场景类词汇", en: "Listening scenarios" },
  "writing-topic": { zh: "写作话题词汇", en: "Writing topics" },
  "speaking-topic": { zh: "口语话题词汇", en: "Speaking topics" },
  "reading-question-paraphrase": { zh: "阅读题干vs答案同义替换", en: "Reading question paraphrases" }
};

window.VOCAB_METADATA_FOR_PACK = function (packId) {
  const n = Number(String(packId || "").replace(/^day/i, ""));
  if (!Number.isFinite(n)) {
    return { sourceIds: ["custom"], tier: "recognition", skills: ["general"], topic: "自定义" };
  }
  if (n <= 14) {
    return { sourceIds: ["restart-materials"], tier: "active", skills: ["listening", "reading"], topic: "重启材料" };
  }
  if (n === 15 || n === 44 || n === 45) {
    return { sourceIds: ["frequently-misspelt"], tier: "active", skills: ["listening", "writing"], topic: "易错拼写" };
  }
  if (n === 16) {
    return { sourceIds: ["listening-paraphrase"], tier: "active", skills: ["listening", "reading"], topic: "同义替换" };
  }
  if (n >= 17 && n <= 43) {
    return { sourceIds: ["awl-570", "reading-10-lists"], tier: "recognition", skills: ["reading", "writing"], topic: "学术核心" };
  }
  if (n >= 46 && n <= 70) {
    return { sourceIds: ["listening-scenarios"], tier: "recognition", skills: ["listening"], topic: "听力场景" };
  }
  if (n >= 71 && n <= 85) {
    return { sourceIds: ["writing-topic"], tier: "recognition", skills: ["writing"], topic: "写作话题" };
  }
  if (n >= 86 && n <= 97) {
    return { sourceIds: ["speaking-topic"], tier: "recognition", skills: ["speaking"], topic: "口语话题" };
  }
  if (n >= 98 && n <= 101) {
    return { sourceIds: ["reading-question-paraphrase"], tier: "recognition", skills: ["reading"], topic: "阅读同义替换" };
  }
  return { sourceIds: ["custom"], tier: "recognition", skills: ["general"], topic: "其他" };
};

window.VOCAB_BANK = [
  // —— Day 1 核心 6 词 ——
  {
    en: "something going on",
    ipa: "/ˈɡəʊɪŋ ɒn/",
    pos: "短语",
    zh: "有某事正在发生（有意思/重要但不完全清楚）",
    example: "There's something going on in the brain.",
    exampleZh: "大脑里有某种事情正在发生。",
    tags: ["day1", "core", "phrase"],
    star: true
  },
  {
    en: "expertise",
    ipa: "/ˌekspɜːˈtiːz/",
    pos: "n.",
    zh: "专长；专业技能/知识",
    example: "absolute expertise in moving his feet",
    exampleZh: "他移动双脚的绝对专业能力",
    tags: ["day1", "core"],
    star: true
  },
  {
    en: "conscious",
    ipa: "/ˈkɒnʃəs/",
    pos: "adj.",
    zh: "有意识的；需要主动注意的",
    example: "with very little conscious effort",
    exampleZh: "几乎不需要有意识的努力",
    tags: ["day1", "core"],
    star: true
  },
  {
    en: "driven by",
    ipa: "/ˈdrɪvn baɪ/",
    pos: "短语",
    zh: "由……驱动/影响/推动",
    example: "performance is driven by your emotional state",
    exampleZh: "表现由你的情绪状态驱动",
    tags: ["day1", "core", "phrase"],
    star: true
  },
  {
    en: "all over the place",
    ipa: "/ˌɔːl ˈəʊvə ðə pleɪs/",
    pos: "习语",
    zh: "乱七八糟；心乱；没条理",
    example: "mentally you're all over the place",
    exampleZh: "精神上你会一团乱",
    tags: ["day1", "core", "phrase"],
    star: true
  },
  {
    en: "margin",
    ipa: "/ˈmɑːdʒɪn/",
    pos: "n.",
    zh: "差距；余地；细微差别（可影响结果）",
    example: "those little margins that can make all the difference",
    exampleZh: "那些能决定成败的细微差距",
    tags: ["day1", "core"],
    star: true
  },

  // —— Day 1 足球与比赛 ——
  {
    en: "footballer",
    ipa: "/ˈfʊtbɔːlə/",
    pos: "n.",
    zh: "足球运动员",
    example: "a footballer's brain",
    exampleZh: "足球运动员的大脑",
    tags: ["day1", "sport"],
    star: true
  },
  {
    en: "elite",
    ipa: "/ɪˈliːt/",
    pos: "adj.",
    zh: "精英的；顶尖的",
    example: "elite clubs",
    exampleZh: "顶级俱乐部",
    tags: ["day1"],
    star: true
  },
  {
    en: "penalty",
    ipa: "/ˈpenəlti/",
    pos: "n.",
    zh: "点球",
    example: "penalties, corners and free kicks",
    exampleZh: "点球、角球和任意球",
    tags: ["day1", "sport"],
    star: true
  },
  {
    en: "corner",
    ipa: "/ˈkɔːnə/",
    pos: "n.",
    zh: "角球（本集义）",
    example: "an accurate corner",
    exampleZh: "一记精准的角球",
    tags: ["day1", "sport"],
    star: true
  },
  {
    en: "free kick",
    ipa: "/ˌfriː ˈkɪk/",
    pos: "n.",
    zh: "任意球",
    example: "penalties, corners and free kicks",
    exampleZh: "点球、角球和任意球",
    tags: ["day1", "sport", "phrase"],
    star: true
  },
  {
    en: "athleticism",
    ipa: "/æθˈletɪsɪzəm/",
    pos: "n.",
    zh: "运动能力；体能爆发力",
    example: "skill and athleticism",
    exampleZh: "技巧与运动能力",
    tags: ["day1", "sport"],
    star: false
  },
  {
    en: "athlete",
    ipa: "/ˈæθliːt/",
    pos: "n.",
    zh: "运动员",
    example: "these athletes",
    exampleZh: "这些运动员",
    tags: ["day1", "sport"],
    star: false
  },
  {
    en: "peer",
    ipa: "/pɪə/",
    pos: "n.",
    zh: "同龄人；同等水平的人",
    example: "the brains of his peers",
    exampleZh: "他同伴们的大脑",
    tags: ["day1"],
    star: false
  },
  {
    en: "ankle",
    ipa: "/ˈæŋkl/",
    pos: "n.",
    zh: "脚踝",
    example: "rotated his right ankle",
    exampleZh: "转动了他的右脚踝",
    tags: ["day1"],
    star: false
  },
  {
    en: "rotate",
    ipa: "/rəʊˈteɪt/",
    pos: "v.",
    zh: "旋转；转动",
    example: "rotated his right ankle",
    exampleZh: "转动了他的右脚踝",
    tags: ["day1"],
    star: false
  },
  {
    en: "accurate",
    ipa: "/ˈækjərət/",
    pos: "adj.",
    zh: "准确的",
    example: "an accurate corner",
    exampleZh: "一记精准的角球",
    tags: ["day1"],
    star: true
  },
  {
    en: "accuracy",
    ipa: "/ˈækjərəsi/",
    pos: "n.",
    zh: "准确性",
    example: "kick the ball accurately",
    exampleZh: "精准地踢球",
    tags: ["day1"],
    star: true
  },

  // —— Day 1 大脑与科学 ——
  {
    en: "neuroscience",
    ipa: "/ˈnjʊərəʊsaɪəns/",
    pos: "n.",
    zh: "神经科学",
    example: "cognition or neuroscience",
    exampleZh: "认知科学或神经科学",
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "neurologically",
    ipa: "/ˌnjʊərəˈlɒdʒɪkli/",
    pos: "adv.",
    zh: "从神经学角度",
    example: "neurologically or cognitively",
    exampleZh: "从神经或认知层面",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "cognition",
    ipa: "/kɒɡˈnɪʃn/",
    pos: "n.",
    zh: "认知",
    example: "cognition or neuroscience",
    exampleZh: "认知或神经科学",
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "cognitively",
    ipa: "/ˈkɒɡnətɪvli/",
    pos: "adv.",
    zh: "从认知上",
    example: "neurologically or cognitively",
    exampleZh: "从神经或认知层面",
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "cortex",
    ipa: "/ˈkɔːteks/",
    pos: "n.",
    zh: "（大脑）皮层",
    example: "activity in Neymar's cortex",
    exampleZh: "内马尔大脑皮层的活动",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "amygdala",
    ipa: "/əˈmɪɡdələ/",
    pos: "n.",
    zh: "杏仁核（处理恐惧与威胁）",
    example: "the amygdala processes fear",
    exampleZh: "杏仁核负责处理恐惧",
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "brain stem",
    ipa: "/ˈbreɪn stem/",
    pos: "n.",
    zh: "脑干",
    example: "the brain stem",
    exampleZh: "脑干",
    tags: ["day1", "science", "phrase"],
    star: false
  },
  {
    en: "cerebellum",
    ipa: "/ˌserəˈbeləm/",
    pos: "n.",
    zh: "小脑",
    example: "the cerebellum",
    exampleZh: "小脑",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "brainwave",
    ipa: "/ˈbreɪnweɪv/",
    pos: "n.",
    zh: "脑电波",
    example: "measures player's brainwaves",
    exampleZh: "测量球员的脑电波",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "psychologist",
    ipa: "/saɪˈkɒlədʒɪst/",
    pos: "n.",
    zh: "心理学家",
    example: "Academy Psychologist",
    exampleZh: "青训学院心理学家",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "psychology",
    ipa: "/saɪˈkɒlədʒi/",
    pos: "n.",
    zh: "心理学",
    example: "psychology and neuroscience",
    exampleZh: "心理学与神经科学",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "emotional",
    ipa: "/ɪˈməʊʃənl/",
    pos: "adj.",
    zh: "情绪的",
    example: "emotional state",
    exampleZh: "情绪状态",
    tags: ["day1"],
    star: false
  },
  {
    en: "anxiety",
    ipa: "/æŋˈzaɪəti/",
    pos: "n.",
    zh: "焦虑",
    example: "fear and anxiety",
    exampleZh: "恐惧与焦虑",
    tags: ["day1"],
    star: true
  },
  {
    en: "academy",
    ipa: "/əˈkædəmi/",
    pos: "n.",
    zh: "青训学院；研究院",
    example: "Academy Psychologist",
    exampleZh: "青训学院心理学家",
    tags: ["day1"],
    star: false
  },

  // —— Day 1 决策与表现 ——
  {
    en: "high-pressure",
    ipa: "/ˌhaɪ ˈpreʃə/",
    pos: "adj.",
    zh: "高压的",
    example: "high-pressure scenarios",
    exampleZh: "高压场景",
    tags: ["day1"],
    star: true
  },
  {
    en: "scenario",
    ipa: "/səˈnɑːriəʊ/",
    pos: "n.",
    zh: "情景；局面",
    example: "high-pressure scenarios",
    exampleZh: "高压场景",
    tags: ["day1"],
    star: true
  },
  {
    en: "intensity",
    ipa: "/ɪnˈtensəti/",
    pos: "n.",
    zh: "强度",
    example: "the highest intensities",
    exampleZh: "最高强度",
    tags: ["day1"],
    star: true
  },
  {
    en: "intense",
    ipa: "/ɪnˈtens/",
    pos: "adj.",
    zh: "强烈的",
    example: "intense pressure",
    exampleZh: "巨大的压力",
    tags: ["day1"],
    star: false
  },
  {
    en: "split second",
    ipa: "/ˌsplɪt ˈsekənd/",
    pos: "n.",
    zh: "一瞬间",
    example: "decisions in a split second",
    exampleZh: "一瞬间做出决定",
    tags: ["day1", "phrase"],
    star: true
  },
  {
    en: "perform",
    ipa: "/pəˈfɔːm/",
    pos: "v.",
    zh: "表现；发挥",
    example: "how well a player performs",
    exampleZh: "球员表现如何",
    tags: ["day1"],
    star: true
  },
  {
    en: "performance",
    ipa: "/pəˈfɔːməns/",
    pos: "n.",
    zh: "表现；成绩",
    example: "performance is driven by emotion",
    exampleZh: "表现由情绪驱动",
    tags: ["day1"],
    star: true
  },
  {
    en: "precision",
    ipa: "/prɪˈsɪʒn/",
    pos: "n.",
    zh: "精确",
    example: "lack of precision and focus",
    exampleZh: "缺乏精准与专注",
    tags: ["day1"],
    star: false
  },
  {
    en: "focus",
    ipa: "/ˈfəʊkəs/",
    pos: "n./v.",
    zh: "专注；焦点",
    example: "if you don't focus right",
    exampleZh: "如果你不能正确专注",
    tags: ["day1"],
    star: false
  },
  {
    en: "overwhelm",
    ipa: "/ˌəʊvəˈwelm/",
    pos: "v.",
    zh: "使应接不暇；压垮",
    example: "trying to overwhelm them in training",
    exampleZh: "训练中试图压垮他们",
    tags: ["day1"],
    star: false
  },
  {
    en: "stillness",
    ipa: "/ˈstɪlnəs/",
    pos: "n.",
    zh: "静止；平静时刻",
    example: "moments of stillness",
    exampleZh: "静止的瞬间",
    tags: ["day1"],
    star: false
  },
  {
    en: "reveal",
    ipa: "/rɪˈviːl/",
    pos: "v.",
    zh: "揭晓；透露",
    example: "I'll reveal the answer later",
    exampleZh: "稍后我会揭晓答案",
    tags: ["day1"],
    star: false
  },
  {
    en: "reduction",
    ipa: "/rɪˈdʌkʃn/",
    pos: "n.",
    zh: "减少",
    example: "reduction in activity",
    exampleZh: "活动量的降低",
    tags: ["day1"],
    star: false
  },
  {
    en: "reflect",
    ipa: "/rɪˈflekt/",
    pos: "v.",
    zh: "反映；表明",
    example: "reflects that he has expertise",
    exampleZh: "反映出他具备专业能力",
    tags: ["day1"],
    star: false
  },
  {
    en: "essentially",
    ipa: "/ɪˈsenʃəli/",
    pos: "adv.",
    zh: "本质上；基本上",
    example: "essentially done with little effort",
    exampleZh: "基本上不费什么力气就完成了",
    tags: ["day1"],
    star: false
  },
  {
    en: "decade",
    ipa: "/ˈdekeɪd/",
    pos: "n.",
    zh: "十年",
    example: "decades after this research",
    exampleZh: "这项研究之后的几十年",
    tags: ["day1"],
    star: false
  },
  {
    en: "detect",
    ipa: "/dɪˈtekt/",
    pos: "v.",
    zh: "察觉；探测",
    example: "detecting threats",
    exampleZh: "探测威胁",
    tags: ["day1"],
    star: false
  },
  {
    en: "threat",
    ipa: "/θret/",
    pos: "n.",
    zh: "威胁",
    example: "processing fear and detecting threats",
    exampleZh: "处理恐惧、探测威胁",
    tags: ["day1"],
    star: false
  },
  {
    en: "process",
    ipa: "/ˈprəʊses/",
    pos: "v./n.",
    zh: "处理（信息/情绪）",
    example: "processing fear",
    exampleZh: "处理恐惧",
    tags: ["day1"],
    star: false
  },
  {
    en: "absolute",
    ipa: "/ˈæbsəluːt/",
    pos: "adj.",
    zh: "绝对的",
    example: "absolute expertise",
    exampleZh: "绝对的专业能力",
    tags: ["day1"],
    star: false
  },
  {
    en: "effort",
    ipa: "/ˈefət/",
    pos: "n.",
    zh: "努力",
    example: "conscious effort",
    exampleZh: "有意识的努力",
    tags: ["day1"],
    star: false
  },
  {
    en: "influence",
    ipa: "/ˈɪnfluəns/",
    pos: "n./v.",
    zh: "影响",
    example: "influenced by their emotional state",
    exampleZh: "受情绪状态影响",
    tags: ["day1"],
    star: false
  },
  {
    en: "control",
    ipa: "/kənˈtrəʊl/",
    pos: "n./v.",
    zh: "控制",
    example: "you can learn to control",
    exampleZh: "你可以学会控制",
    tags: ["day1"],
    star: false
  },
  {
    en: "relaxed",
    ipa: "/rɪˈlækst/",
    pos: "adj.",
    zh: "放松的",
    example: "how to stay relaxed",
    exampleZh: "如何保持放松",
    tags: ["day1"],
    star: false
  },
  {
    en: "mentally",
    ipa: "/ˈmentəli/",
    pos: "adv.",
    zh: "在心理上",
    example: "mentally you're all over the place",
    exampleZh: "精神上你会一团乱",
    tags: ["day1"],
    star: false
  },
  {
    en: "chaotic",
    ipa: "/keɪˈɒtɪk/",
    pos: "adj.",
    zh: "混乱的",
    example: "a chaotic mental state",
    exampleZh: "混乱的精神状态",
    tags: ["day1"],
    star: false
  },
  {
    en: "combination",
    ipa: "/ˌkɒmbɪˈneɪʃn/",
    pos: "n.",
    zh: "结合；组合",
    example: "the combination of passion and skill",
    exampleZh: "热情与技巧的结合",
    tags: ["day1"],
    star: false
  },
  {
    en: "passion",
    ipa: "/ˈpæʃn/",
    pos: "n.",
    zh: "热情",
    example: "passion and athleticism",
    exampleZh: "热情与运动能力",
    tags: ["day1"],
    star: false
  },
  {
    en: "recap",
    ipa: "/ˈriːkæp/",
    pos: "n./v.",
    zh: "回顾；小结",
    example: "time for a vocabulary recap",
    exampleZh: "该做词汇回顾了",
    tags: ["day1"],
    star: false
  },

  // —— Day 2 · Should we cycle more?（BBC 6 Minute English）——
  {
    en: "deeply ingrained",
    ipa: "/ˈdiːpli ɪnˈɡreɪnd/",
    pos: "adj.",
    zh: "深深植入的；根深蒂固的",
    example: "Cycling is deeply ingrained in Dutch culture.",
    exampleZh: "骑行深深植根于荷兰文化。",
    tags: ["day2", "core", "phrase"],
    star: true
  },
  {
    en: "take off",
    ipa: "/teɪk ɒf/",
    pos: "短语",
    zh: "突然流行；迅速成功",
    example: "Cycling took off after the pandemic.",
    exampleZh: "疫情之后骑行开始流行起来。",
    tags: ["day2", "core", "phrase"],
    star: true
  },
  {
    en: "milestone",
    ipa: "/ˈmaɪlstəʊn/",
    pos: "n.",
    zh: "里程碑；重要事件",
    example: "Getting a bike is a milestone for many kids.",
    exampleZh: "拥有一辆自行车是许多孩子的人生里程碑。",
    tags: ["day2", "core"],
    star: true
  },
  {
    en: "quality of life",
    ipa: "/ˈkwɒləti əv laɪf/",
    pos: "短语",
    zh: "生活质量",
    example: "Cycling improves quality of life.",
    exampleZh: "骑行能提高生活质量。",
    tags: ["day2", "core", "phrase"],
    star: true
  },
  {
    en: "liveability",
    ipa: "/ˌlɪvəˈbɪləti/",
    pos: "n.",
    zh: "可居住性；宜居性",
    example: "More bike lanes increase city liveability.",
    exampleZh: "更多自行车道让城市更宜居。",
    tags: ["day2", "core"],
    star: true
  },
  {
    en: "a copy and paste",
    ipa: "/ə ˈkɒpi ənd peɪst/",
    pos: "习语",
    zh: "抄来的；一模一样的东西",
    example: "This argument is a copy and paste of the old one.",
    exampleZh: "这个论点是旧论点的原样照搬。",
    tags: ["day2", "phrase"],
    star: false
  },
  {
    en: "thriving",
    ipa: "/ˈθraɪvɪŋ/",
    pos: "adj.",
    zh: "繁荣的；兴旺的",
    example: "The cycling scene in Europe is thriving.",
    exampleZh: "欧洲的骑行圈十分兴旺。",
    tags: ["day2"],
    star: false
  },
  {
    en: "infrastructure",
    ipa: "/ˈɪnfrəstrʌktʃə/",
    pos: "n.",
    zh: "基础设施",
    example: "Bike infrastructure is improving.",
    exampleZh: "自行车基础设施在不断改善。",
    tags: ["day2"],
    star: false
  },
  {
    en: "commuter",
    ipa: "/kəˈmjuːtə/",
    pos: "n.",
    zh: "通勤者",
    example: "The Netherlands has more commuters than any other country.",
    exampleZh: "荷兰的通勤者比任何国家都多。",
    tags: ["day2"],
    star: false
  },
  {
    en: "convenience",
    ipa: "/kənˈviːniəns/",
    pos: "n.",
    zh: "方便；便利",
    example: "Electric bikes increase convenience.",
    exampleZh: "电动自行车更加方便。",
    tags: ["day2"],
    star: false
  },
  {
    en: "urban",
    ipa: "/ˈɜː.bən/",
    pos: "adj.",
    zh: "都市的；城市的",
    example: "urban planning in Dubai",
    exampleZh: "迪拜的城市规划",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "metropolitan",
    ipa: "/ˌmetrəˈpɒlɪtən/",
    pos: "adj.",
    zh: "大城市的；都市的",
    example: "a metropolitan city",
    exampleZh: "一座大都市",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "expat",
    ipa: "/ˈɛkspæt/",
    pos: "n.",
    zh: "外籍居民；侨居者",
    example: "living as an expat in a foreign country",
    exampleZh: "在国外做外籍居民",
    tags: ["day2", "city", "ielts"],
    star: false
  },
  {
    en: "cosmopolitan",
    ipa: "/ˌkɒzməˈpɒlɪtən/",
    pos: "adj.",
    zh: "世界性的；国际化的",
    example: "a cosmopolitan city like Dubai",
    exampleZh: "像迪拜这样的国际化都市",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "sustainable",
    ipa: "/səˈsteɪnəbl/",
    pos: "adj.",
    zh: "可持续的；环保的",
    example: "sustainable urban development",
    exampleZh: "可持续的城市发展",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "relocate",
    ipa: "/ˌriːləʊˈkeɪt/",
    pos: "v.",
    zh: "迁移；重新安置",
    example: "people who want to relocate to a better city",
    exampleZh: "想搬去更好城市的人们",
    tags: ["day2", "city", "ielts"],
    star: false
  },

  // —— Day 3 · Rude emails（BBC 6 Minute English）——
  {
    en: "put someone on the defensive",
    ipa: "/ɒn ðə dɪˈfensɪv/",
    pos: "习语",
    zh: "使某人感到受威胁而处于防御状态",
    example: "Starting an email with 'per my last email' puts someone on the defensive.",
    exampleZh: "以「如我上封邮件所说」开头的邮件会让人立刻进入防御状态。",
    tags: ["day3", "core", "phrase"],
    star: true
  },
  {
    en: "uncivil",
    ipa: "/ʌnˈsɪvl/",
    pos: "adj.",
    zh: "无礼的；不礼貌的",
    example: "We're more likely to be uncivil when we're frazzled.",
    exampleZh: "我们精疲力竭时更容易失礼。",
    tags: ["day3", "core"],
    star: true
  },
  {
    en: "belittle",
    ipa: "/bɪˈlɪtl/",
    pos: "v.",
    zh: "贬低；轻视",
    example: "To belittle someone means to make them feel inferior.",
    exampleZh: "贬低某人就是让他们觉得低人一等。",
    tags: ["day3", "core"],
    star: true
  },
  {
    en: "put someone in their place",
    ipa: "/ɪn ðeə ˈpleɪs/",
    pos: "习语",
    zh: "灭某人威风；让某人明白自己没那么重要",
    example: "The boss wants to put you in your place.",
    exampleZh: "老板想灭灭你的威风。",
    tags: ["day3", "core", "phrase"],
    star: true
  },
  {
    en: "get something off your plate",
    ipa: "/ɒf jɔː ˈpleɪt/",
    pos: "习语",
    zh: "把（任务/问题）甩给别人处理",
    example: "Such colleagues want to get work off their plate.",
    exampleZh: "这类同事只想把活儿甩出去。",
    tags: ["day3", "core", "phrase"],
    star: true
  },
  {
    en: "frazzled",
    ipa: "/ˈfræzld/",
    pos: "adj.",
    zh: "（因事情太多而）精疲力竭的、烦躁的",
    example: "We are operating in environments where we are all quite frazzled.",
    exampleZh: "我们所处的环境让每个人都疲惫不堪。",
    tags: ["day3", "core"],
    star: true
  },
  {
    en: "incivility",
    ipa: "/ˌɪnsɪˈvɪləti/",
    pos: "n.",
    zh: "无礼；不文明行为",
    example: "We are more at risk of engaging in incivility.",
    exampleZh: "我们更容易做出不文明行为。",
    tags: ["day3"],
    star: false
  },
  {
    en: "on a daily basis",
    ipa: "/ɒn ə ˈdeɪli ˈbeɪsɪs/",
    pos: "短语",
    zh: "每天；日常地",
    example: "We all deal with emails on a daily basis.",
    exampleZh: "我们每天都要处理邮件。",
    tags: ["day3", "phrase"],
    star: false
  },

  // —— Day 4 · Stress-free family meals（BBC 6 Minute English）——
  {
    en: "ups and downs",
    ipa: "/ˌʌps ən ˈdaʊnz/",
    pos: "短语",
    zh: "起起落落；好事与坏事的交替",
    example: "Family life is full of ups and downs.",
    exampleZh: "家庭生活充满起起落落。",
    tags: ["day4", "core", "phrase"],
    star: true
  },
  {
    en: "mood",
    ipa: "/muːd/",
    pos: "n.",
    zh: "心情；情绪",
    example: "Your mood is how you feel at a particular time.",
    exampleZh: "心情就是你在某一时刻的感受。",
    tags: ["day4", "core"],
    star: true
  },
  {
    en: "battleground",
    ipa: "/ˈbætlɡraʊnd/",
    pos: "n.",
    zh: "战场；冲突发生的地方",
    example: "Dinnertime often becomes a battleground.",
    exampleZh: "晚餐时间常常变成战场。",
    tags: ["day4", "core"],
    star: true
  },
  {
    en: "a big deal",
    ipa: "/ə bɪɡ ˈdiːl/",
    pos: "短语",
    zh: "重要的事；了不起的事",
    example: "Controlling what they eat is a big deal for kids.",
    exampleZh: "对孩子来说，能决定吃什么是件大事。",
    tags: ["day4", "core", "phrase"],
    star: true
  },
  {
    en: "food allergy",
    ipa: "/ˈfuːd ˌælədʒi/",
    pos: "n.",
    zh: "食物过敏",
    example: "It's harder if your child has a food allergy.",
    exampleZh: "如果孩子有食物过敏就更难了。",
    tags: ["day4", "core"],
    star: true
  },
  {
    en: "winning formula",
    ipa: "/ˈwɪnɪŋ ˈfɔːmjələ/",
    pos: "习语",
    zh: "制胜法宝；成功的方法",
    example: "We found the winning formula, which was rice and beans.",
    exampleZh: "我们找到了制胜法宝——米饭加豆子。",
    tags: ["day4", "core", "phrase"],
    star: true
  },
  {
    en: "fussy eater",
    ipa: "/ˈfʌsi ˈiːtə/",
    pos: "n.",
    zh: "挑食的人",
    example: "Are you a fussy eater?",
    exampleZh: "你挑食吗？",
    tags: ["day4", "phrase"],
    star: false
  },
  {
    en: "eating habits",
    ipa: "/ˈiːtɪŋ ˈhæbɪts/",
    pos: "短语",
    zh: "饮食习惯",
    example: "experts on young children's eating habits",
    exampleZh: "研究幼儿饮食习惯的专家",
    tags: ["day4", "phrase"],
    star: false
  },

  // —— Day 5 · Limiting screen time for children（BBC 6 Minute English）——
  {
    en: "intentional",
    ipa: "/ɪnˈtenʃənl/",
    pos: "adj.",
    zh: "有意的；有计划有目的的",
    example: "Being more intentional about screen time helps children.",
    exampleZh: "对屏幕时间更有计划性会帮助孩子。",
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "the bar needs to be higher",
    ipa: "/ðə bɑː/",
    pos: "习语",
    zh: "标准/期望需要更高",
    example: "Emily believes that the bar needs to be higher.",
    exampleZh: "Emily 认为标准应该更高。",
    tags: ["day5", "core", "phrase"],
    star: true
  },
  {
    en: "enable",
    ipa: "/ɪˈneɪbl/",
    pos: "v.",
    zh: "使能够；使成为可能",
    example: "If you enable something, you make it possible.",
    exampleZh: "促成某事，就是让它成为可能。",
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "eager",
    ipa: "/ˈiːɡə/",
    pos: "adj.",
    zh: "渴望的；热切的",
    example: "Parents are eager to understand what's happening around technology.",
    exampleZh: "父母们渴望了解孩子与科技相处的情况。",
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "shift",
    ipa: "/ʃɪft/",
    pos: "n.",
    zh: "小的改变；转变",
    example: "Little shifts in daily habits feel better.",
    exampleZh: "日常习惯上的小改变让人感觉更好。",
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "set someone up for something",
    ipa: "/set ... ʌp fɔː/",
    pos: "习语",
    zh: "为某人做好…的准备",
    example: "Having the device in view doesn't set them up for success.",
    exampleZh: "设备放在眼前，就没法帮他们走向成功。",
    tags: ["day5", "core", "phrase"],
    star: true
  },
  {
    en: "screen time",
    ipa: "/ˈskriːn taɪm/",
    pos: "n.",
    zh: "屏幕时间（使用电子设备的时间）",
    example: "Governments want to limit the amount of screen time for children.",
    exampleZh: "各国政府想限制儿童的屏幕时间。",
    tags: ["day5", "phrase"],
    star: false
  },
  {
    en: "measure",
    ipa: "/ˈmeʒə/",
    pos: "n.",
    zh: "措施；办法",
    example: "Governments are introducing online safety measures.",
    exampleZh: "各国政府正在推出网络安全措施。",
    tags: ["day5", "ielts"],
    star: false
  },

  // —— Day 6 · How advertisers make us spend money（BBC 6 Minute English）——
  {
    en: "mental shortcut",
    ipa: "/ˈmentl ˈʃɔːtkʌt/",
    pos: "n.",
    zh: "思维捷径（帮助快速做决定）",
    example: "A mental shortcut helps us make a decision quickly.",
    exampleZh: "思维捷径帮助我们快速做决定。",
    tags: ["day6", "core", "phrase"],
    star: true
  },
  {
    en: "judged",
    ipa: "/dʒʌdʒd/",
    pos: "adj.",
    zh: "感到被评判的；担心别人怎么看自己",
    example: "No one feels judged by a computer screen.",
    exampleZh: "没有人会觉得被电脑屏幕评判。",
    tags: ["day6", "core"],
    star: true
  },
  {
    en: "upsell",
    ipa: "/ˈʌpsel/",
    pos: "v.",
    zh: "追加销售；引导顾客买更多/更贵的东西",
    example: "If you upsell something, you get someone to spend more.",
    exampleZh: "追加销售就是让顾客花更多的钱。",
    tags: ["day6", "core"],
    star: true
  },
  {
    en: "basket spend",
    ipa: "/ˈbɑːskɪt spend/",
    pos: "n.",
    zh: "单次购物总消费额",
    example: "Upselling can increase people's basket spend.",
    exampleZh: "追加销售能提高单次购物金额。",
    tags: ["day6", "core", "phrase"],
    star: true
  },
  {
    en: "think outside the box",
    ipa: "/θɪŋk aʊtˈsaɪd ðə bɒks/",
    pos: "习语",
    zh: "跳出思维定式；创造性地思考",
    example: "We needed something really creative to think outside the box.",
    exampleZh: "我们需要真正有创意的东西来跳出思维定式。",
    tags: ["day6", "core", "phrase"],
    star: true
  },
  {
    en: "model",
    ipa: "/ˈmɒdl/",
    pos: "v.",
    zh: "示范（供他人模仿的行为）",
    example: "If you model behaviour, you behave in a way that others can copy.",
    exampleZh: "示范行为，就是做出别人可以模仿的举动。",
    tags: ["day6", "core"],
    star: true
  },
  {
    en: "rational",
    ipa: "/ˈræʃənl/",
    pos: "adj.",
    zh: "理性的；合理的",
    example: "We like to think we make rational, independent choices.",
    exampleZh: "我们总以为自己做的是理性、独立的选择。",
    tags: ["day6", "ielts"],
    star: false
  },
  {
    en: "transaction",
    ipa: "/trænˈzækʃn/",
    pos: "n.",
    zh: "交易；一笔买卖",
    example: "the total amount that someone spends in one transaction",
    exampleZh: "某人一笔交易花费的总金额",
    tags: ["day6", "ielts"],
    star: false
  },

  // —— Day 7 · A phone call from a customer（BC Listening B1 · 复习日）——
  {
    en: "payment terms",
    ipa: "/ˈpeɪmənt tɜːmz/",
    pos: "n.",
    zh: "付款条件；付款期限",
    example: "I need an extension on the payment terms.",
    exampleZh: "我需要延长付款期限。",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "extension",
    ipa: "/ɪkˈstenʃn/",
    pos: "n.",
    zh: "延期；延长",
    example: "Could we extend the payment terms to 60 days?",
    exampleZh: "能把付款期限延长到 60 天吗？",
    tags: ["day7", "core"],
    star: true
  },
  {
    en: "cash flow",
    ipa: "/ˈkæʃ fləʊ/",
    pos: "n.",
    zh: "现金流；资金周转",
    example: "We're having some cash flow problems.",
    exampleZh: "我们遇到了一些现金流问题。",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "invoice",
    ipa: "/ˈɪnvɔɪs/",
    pos: "n.",
    zh: "发票；账单",
    example: "Andrea called about the invoice for the latest order.",
    exampleZh: "Andrea 来电询问最近一笔订单的发票。",
    tags: ["day7", "core"],
    star: true
  },
  {
    en: "make an exception",
    ipa: "/meɪk ən ɪkˈsepʃn/",
    pos: "短语",
    zh: "破例；特殊处理",
    example: "I think we can make an exception this time.",
    exampleZh: "我想这次我们可以破例。",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "it works both ways",
    ipa: "/ɪt wɜːks bəʊθ ˈweɪz/",
    pos: "习语",
    zh: "对双方都有利；是相互的",
    example: "We appreciate your business. It works both ways.",
    exampleZh: "感谢你们的生意，这对双方都有利。",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "confirmation",
    ipa: "/ˌkɒnfəˈmeɪʃn/",
    pos: "n.",
    zh: "确认；确认函",
    example: "Could you send me a quick email confirmation?",
    exampleZh: "能给我发一封简短的确认邮件吗？",
    tags: ["day7"],
    star: false
  },
  {
    en: "appreciate",
    ipa: "/əˈpriːʃieɪt/",
    pos: "v.",
    zh: "感激；重视",
    example: "I really appreciate your help.",
    exampleZh: "我非常感激你的帮助。",
    tags: ["day7", "ielts"],
    star: false
  },
  {
    en: "pay on delivery",
    ipa: "/peɪ ɒn dɪˈlɪvəri/",
    pos: "短语",
    zh: "货到付款",
    example: "The new order is for a customer that pays on delivery.",
    exampleZh: "新订单的客户是货到付款。",
    tags: ["day7", "phrase"],
    star: false
  },
  {
    en: "do someone a favour",
    ipa: "/duː ˈsʌmwʌn ə ˈfeɪvə/",
    pos: "短语",
    zh: "帮某人一个忙",
    example: "Do you ever do favours for important clients?",
    exampleZh: "你会为重要客户破例帮忙吗？",
    tags: ["day7", "phrase"],
    star: false
  },

  // —— Day 2 补充 · 地道表达与难词 ——
  {
    en: "accessible",
    ipa: "/əkˈsesəbl/",
    pos: "adj.",
    zh: "易到达的；容易使用的",
    example: "Electric bikes are making cycling accessible to more people.",
    exampleZh: "电动自行车让更多人骑得上车。",
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "manufacturing",
    ipa: "/ˌmænjuˈfæktʃərɪŋ/",
    pos: "n.",
    zh: "制造业",
    example: "Bicycle manufacturing took off in the industrial era.",
    exampleZh: "自行车制造业在工业时代腾飞。",
    tags: ["day2", "ielts"],
    star: false
  },
  {
    en: "wellbeing",
    ipa: "/ˈwelbiːɪŋ/",
    pos: "n.",
    zh: "幸福；身心健康",
    example: "Quality of life is a measure of a person's overall wellbeing.",
    exampleZh: "生活质量衡量的是一个人的整体幸福感。",
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "reputation",
    ipa: "/ˌrepjuˈteɪʃn/",
    pos: "n.",
    zh: "名声；声誉",
    example: "Gulf cities want a reputation as places with a good quality of life.",
    exampleZh: "海湾城市想要「生活质量高」的好名声。",
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "competitive",
    ipa: "/kəmˈpetətɪv/",
    pos: "adj.",
    zh: "竞争激烈的；好胜的",
    example: "All the cities in the Gulf are very competitive.",
    exampleZh: "海湾各城市之间竞争非常激烈。",
    tags: ["day2", "ielts"],
    star: false
  },
  {
    en: "tourist attraction",
    ipa: "/ˈtʊərɪst əˌtrækʃn/",
    pos: "n.",
    zh: "旅游景点",
    example: "a greener way for visitors to explore tourist attractions",
    exampleZh: "游客游览景点的更环保方式",
    tags: ["day2", "phrase", "ielts"],
    star: true
  },
  {
    en: "alternative",
    ipa: "/ɔːlˈtɜːnətɪv/",
    pos: "n.",
    zh: "替代选择",
    example: "Cycling can be a popular and green alternative.",
    exampleZh: "骑行可以成为受欢迎的绿色替代方案。",
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "roughly",
    ipa: "/ˈrʌfli/",
    pos: "adv.",
    zh: "大约；粗略地",
    example: "Roughly speaking, how many bikes are there in the Netherlands?",
    exampleZh: "粗略地说，荷兰有多少辆自行车？",
    tags: ["day2"],
    star: false
  },
  {
    en: "referred to as",
    ipa: "/rɪˈfɜːd tuː æz/",
    pos: "短语",
    zh: "被称为",
    example: "The Netherlands is often referred to as Holland.",
    exampleZh: "荷兰常被称作 Holland。",
    tags: ["day2", "phrase"],
    star: false
  },
  {
    en: "the Netherlands",
    ipa: "/ðə ˈneðələndz/",
    pos: "地名",
    zh: "荷兰",
    example: "There are more bikes than citizens in the Netherlands.",
    exampleZh: "荷兰的自行车比国民还多。",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "Dutch",
    ipa: "/dʌtʃ/",
    pos: "adj.",
    zh: "荷兰的；荷兰人的",
    example: "The bicycle is deeply ingrained into Dutch culture.",
    exampleZh: "自行车深深植根于荷兰文化。",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "the United Arab Emirates",
    ipa: "/juˌnaɪtɪd ˌærəb ˈemɪrəts/",
    pos: "地名",
    zh: "阿拉伯联合酋长国（阿联酋 UAE）",
    example: "The UAE is better known for cars than bicycles.",
    exampleZh: "阿联酋以汽车闻名，而非自行车。",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "Dubai",
    ipa: "/duːˈbaɪ/",
    pos: "地名",
    zh: "迪拜",
    example: "Dubai has already built 600km of cycle tracks.",
    exampleZh: "迪拜已建成 600 公里自行车道。",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "Denmark",
    ipa: "/ˈdenmɑːk/",
    pos: "地名",
    zh: "丹麦",
    example: "It's not a copy and paste of what is good in Holland or Denmark.",
    exampleZh: "这不是对荷兰或丹麦的照搬。",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "the Gulf",
    ipa: "/ðə ɡʌlf/",
    pos: "地名",
    zh: "海湾地区（波斯湾）",
    example: "All the cities in the Gulf are very competitive.",
    exampleZh: "海湾各城市竞争非常激烈。",
    tags: ["day2", "recog"],
    star: false
  },

  // —— Day 3 补充 · 地道表达与难词 ——
  {
    en: "fight-or-flight response",
    ipa: "/ˌfaɪt ɔː ˈflaɪt rɪˌspɒns/",
    pos: "n.",
    zh: "战斗或逃跑反应（应激反应）",
    example: "Rudeness in emails is based on a fight-or-flight response.",
    exampleZh: "邮件里的无礼源于战斗或逃跑反应。",
    tags: ["day3", "phrase"],
    star: true
  },
  {
    en: "hostile",
    ipa: "/ˈhɒstaɪl/",
    pos: "adj.",
    zh: "有敌意的；不友善的",
    example: "emails that are hostile in tone and language",
    exampleZh: "语气和措辞充满敌意的邮件",
    tags: ["day3", "ielts"],
    star: true
  },
  {
    en: "justify",
    ipa: "/ˈdʒʌstɪfaɪ/",
    pos: "v.",
    zh: "证明…正当；为…辩护",
    example: "an email requiring them to justify their job",
    exampleZh: "一封要求他们证明自己工作价值的邮件",
    tags: ["day3", "ielts"],
    star: true
  },
  {
    en: "accomplish",
    ipa: "/əˈkʌmplɪʃ/",
    pos: "v.",
    zh: "完成；实现",
    example: "listing five things they had accomplished that week",
    exampleZh: "列出那一周完成的五件事",
    tags: ["day3", "ielts"],
    star: true
  },
  {
    en: "resign",
    ipa: "/rɪˈzaɪn/",
    pos: "v.",
    zh: "辞职",
    example: "justify their job by listing what they accomplished — or resign",
    exampleZh: "列出成果证明工作价值——否则辞职",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "withdraw",
    ipa: "/wɪðˈdrɔː/",
    pos: "v.",
    zh: "退缩；撤回；退出",
    example: "People try to protect themselves by withdrawing or avoiding.",
    exampleZh: "人们通过退缩或回避来保护自己。",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "anonymous",
    ipa: "/əˈnɒnɪməs/",
    pos: "adj.",
    zh: "匿名的",
    example: "We've got an anonymous one here.",
    exampleZh: "我们收到了一条匿名来信。",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "inferior",
    ipa: "/ɪnˈfɪəriə/",
    pos: "adj.",
    zh: "较差的；低人一等的",
    example: "Belittling makes people feel inferior or unimportant.",
    exampleZh: "贬低让人觉得低人一等、无足轻重。",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "work to a deadline",
    ipa: "/wɜːk tuː ə ˈdedlaɪn/",
    pos: "短语",
    zh: "赶截止日期",
    example: "When working to a deadline, it's hard to keep all your emails polite.",
    exampleZh: "赶截止日期时，很难保证每封邮件都有礼貌。",
    tags: ["day3", "phrase"],
    star: false
  },
  {
    en: "give someone the credit",
    ipa: "/ɡɪv ˈsʌmwʌn ðə ˈkredɪt/",
    pos: "短语",
    zh: "把功劳归于某人",
    example: "The boss gives someone else the credit for the work you did.",
    exampleZh: "老板把你做的工作归功于别人。",
    tags: ["day3", "phrase"],
    star: false
  },
  {
    en: "Manchester",
    ipa: "/ˈmæntʃɪstə/",
    pos: "地名",
    zh: "曼彻斯特（英国城市）",
    example: "Rachel in Manchester says unnecessary formality annoys her.",
    exampleZh: "曼彻斯特的 Rachel 说不必要的拘谨让她恼火。",
    tags: ["day3", "recog"],
    star: false
  },

  // —— Day 4 补充 · 地道表达与难词 ——
  {
    en: "appetite",
    ipa: "/ˈæpɪtaɪt/",
    pos: "n.",
    zh: "食欲；胃口",
    example: "Their appetite is much lower, and then all of a sudden it comes right back.",
    exampleZh: "他们的食欲会变差，然后突然又恢复了。",
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "nutritionist",
    ipa: "/njuˈtrɪʃənɪst/",
    pos: "n.",
    zh: "营养师",
    example: "Charlotte is a child nutritionist and mother of two.",
    exampleZh: "Charlotte 是儿童营养师，也是两个孩子的妈妈。",
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "trigger",
    ipa: "/ˈtrɪɡə/",
    pos: "v.",
    zh: "引发；触发",
    example: "Why can what you're eating trigger so much tension?",
    exampleZh: "为什么吃什么能引发这么多紧张气氛？",
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "tension",
    ipa: "/ˈtenʃn/",
    pos: "n.",
    zh: "紧张；紧张气氛",
    example: "Mealtimes can trigger a lot of tension in families.",
    exampleZh: "用餐时间常在家庭里引发紧张。",
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "all of a sudden",
    ipa: "/ˌɔːl əv ə ˈsʌdn/",
    pos: "短语",
    zh: "突然",
    example: "All of a sudden their appetite comes right back.",
    exampleZh: "突然之间他们的食欲又回来了。",
    tags: ["day4", "phrase"],
    star: false
  },
  {
    en: "it's up to someone",
    ipa: "/ɪts ʌp tuː ˈsʌmwʌn/",
    pos: "短语",
    zh: "由某人决定",
    example: "It's up to kids to decide whether they're going to eat it.",
    exampleZh: "吃不吃由孩子自己决定。",
    tags: ["day4", "phrase"],
    star: true
  },
  {
    en: "restrict",
    ipa: "/rɪˈstrɪkt/",
    pos: "v.",
    zh: "限制",
    example: "Her allergies restricted what she could eat.",
    exampleZh: "过敏限制了她能吃的东西。",
    tags: ["day4", "ielts"],
    star: false
  },
  {
    en: "atmosphere",
    ipa: "/ˈætməsfɪə/",
    pos: "n.",
    zh: "气氛；大气层",
    example: "Create a stress-free atmosphere at dinnertime.",
    exampleZh: "在晚餐时营造无压力的氛围。",
    tags: ["day4", "ielts"],
    star: false
  },
  {
    en: "pressurise",
    ipa: "/ˈpreʃəraɪz/",
    pos: "v.",
    zh: "向…施压；强迫",
    example: "Don't pressurise kids to finish everything on their plate.",
    exampleZh: "别逼孩子吃光盘子里的所有东西。",
    tags: ["day4"],
    star: false
  },
  {
    en: "flavour",
    ipa: "/ˈfleɪvə/",
    pos: "n.",
    zh: "味道；风味",
    example: "Introduce your child to lots of new flavours.",
    exampleZh: "让孩子尝试各种新口味。",
    tags: ["day4"],
    star: false
  },
  {
    en: "Singapore",
    ipa: "/ˌsɪŋəˈpɔː/",
    pos: "地名",
    zh: "新加坡",
    example: "Sharon Wee is a food writer from Singapore.",
    exampleZh: "Sharon Wee 是来自新加坡的美食作家。",
    tags: ["day4", "recog"],
    star: false
  },
  {
    en: "Brussels sprouts",
    ipa: "/ˌbrʌslz ˈspraʊts/",
    pos: "n.",
    zh: "球芽甘蓝（抱子甘蓝）",
    example: "Worst of all, of course, are Brussels sprouts!",
    exampleZh: "当然，最难吃的是抱子甘蓝！",
    tags: ["day4", "recog"],
    star: false
  },

  // —— Day 5 补充 · 地道表达与难词 ——
  {
    en: "ban",
    ipa: "/bæn/",
    pos: "v. n.",
    zh: "禁止；禁令",
    example: "Australia banned access to social media apps for under 16s.",
    exampleZh: "澳大利亚禁止 16 岁以下使用社交媒体。",
    tags: ["day5", "ielts"],
    star: true
  },
  {
    en: "access",
    ipa: "/ˈækses/",
    pos: "n.",
    zh: "进入权；使用权",
    example: "banned access to social media apps",
    exampleZh: "禁止使用社交媒体应用",
    tags: ["day5", "ielts"],
    star: true
  },
  {
    en: "device",
    ipa: "/dɪˈvaɪs/",
    pos: "n.",
    zh: "设备；装置",
    example: "devices like smartphones, tablets and laptops",
    exampleZh: "智能手机、平板、笔记本等设备",
    tags: ["day5", "ielts"],
    star: true
  },
  {
    en: "regulator",
    ipa: "/ˈreɡjuleɪtə/",
    pos: "n.",
    zh: "监管机构",
    example: "According to the UK media regulator...",
    exampleZh: "据英国媒体监管机构称……",
    tags: ["day5"],
    star: false
  },
  {
    en: "one in five",
    ipa: "/ˌwʌn ɪn ˈfaɪv/",
    pos: "短语",
    zh: "五分之一",
    example: "One in five children aged three to four have a smartphone.",
    exampleZh: "三到四岁的孩子中五分之一有智能手机。",
    tags: ["day5", "phrase"],
    star: true
  },
  {
    en: "practical",
    ipa: "/ˈpræktɪkl/",
    pos: "adj.",
    zh: "实用的；切实可行的",
    example: "practical, realistic things they can do in their home",
    exampleZh: "他们在家就能做到的实用做法",
    tags: ["day5", "ielts"],
    star: false
  },
  {
    en: "realistic",
    ipa: "/ˌriːəˈlɪstɪk/",
    pos: "adj.",
    zh: "现实的；实际可行的",
    example: "practical, realistic things parents can do",
    exampleZh: "父母能做到的实用且现实的事",
    tags: ["day5", "ielts"],
    star: false
  },
  {
    en: "alongside",
    ipa: "/əˌlɒŋˈsaɪd/",
    pos: "prep.",
    zh: "与…一起；在…旁边",
    example: "Children learn and develop alongside technology.",
    exampleZh: "孩子与科技共同学习成长。",
    tags: ["day5"],
    star: false
  },
  {
    en: "in view",
    ipa: "/ɪn ˈvjuː/",
    pos: "短语",
    zh: "在视线内；看得见",
    example: "Having the device in view doesn't set them up for success.",
    exampleZh: "设备放在眼前，就没法帮他们走向成功。",
    tags: ["day5", "phrase"],
    star: false
  },
  {
    en: "Australia",
    ipa: "/ɒˈstreɪliə/",
    pos: "地名",
    zh: "澳大利亚",
    example: "Australia banned social media for under 16s.",
    exampleZh: "澳大利亚禁止 16 岁以下用社交媒体。",
    tags: ["day5", "recog"],
    star: false
  },
  {
    en: "Cambridge",
    ipa: "/ˈkeɪmbrɪdʒ/",
    pos: "地名",
    zh: "剑桥（英国大学城）",
    example: "a research associate at the University of Cambridge",
    exampleZh: "剑桥大学的研究员",
    tags: ["day5", "recog"],
    star: false
  },

  // —— Day 6 补充 · 地道表达与难词 ——
  {
    en: "celebrity endorsement",
    ipa: "/səˌlebrəti ɪnˈdɔːsmənt/",
    pos: "n.",
    zh: "名人代言",
    example: "I bought it because I saw a celebrity endorsement in an advert.",
    exampleZh: "我买它是因为在广告里看到了名人代言。",
    tags: ["day6", "phrase"],
    star: true
  },
  {
    en: "credible",
    ipa: "/ˈkredəbl/",
    pos: "adj.",
    zh: "可信的",
    example: "We follow the lead of those we think are credible or knowledgeable.",
    exampleZh: "我们会效仿那些我们认为可信、懂行的人。",
    tags: ["day6", "ielts"],
    star: true
  },
  {
    en: "nudge",
    ipa: "/nʌdʒ/",
    pos: "v. n.",
    zh: "轻推；助推（行为科学）",
    example: "Nudge theory says behaviour can be changed by small prompts.",
    exampleZh: "助推理论认为小提示就能改变行为。",
    tags: ["day6"],
    star: true
  },
  {
    en: "be inclined to",
    ipa: "/bɪ ɪnˈklaɪnd tuː/",
    pos: "短语",
    zh: "倾向于；更愿意",
    example: "You're much more inclined to say yes to these things.",
    exampleZh: "你会更倾向于对这些提议说「好」。",
    tags: ["day6", "phrase"],
    star: true
  },
  {
    en: "behavioural science",
    ipa: "/bɪˌheɪvjərəl ˈsaɪəns/",
    pos: "n.",
    zh: "行为科学",
    example: "Could behavioural science tell us why this happens?",
    exampleZh: "行为科学能解释为什么会这样吗？",
    tags: ["day6", "phrase"],
    star: false
  },
  {
    en: "proportion",
    ipa: "/prəˈpɔːʃn/",
    pos: "n.",
    zh: "比例；部分",
    example: "A large proportion of people may feel judged.",
    exampleZh: "很大比例的人可能会觉得被评判。",
    tags: ["day6", "ielts"],
    star: true
  },
  {
    en: "follow the lead",
    ipa: "/ˌfɒləʊ ðə ˈliːd/",
    pos: "短语",
    zh: "效仿；跟随",
    example: "It's easy to follow the lead of those we trust.",
    exampleZh: "效仿我们信任的人是很容易的。",
    tags: ["day6", "phrase"],
    star: false
  },
  {
    en: "make sense of",
    ipa: "/meɪk ˈsens ɒv/",
    pos: "短语",
    zh: "理解；弄懂",
    example: "people who help us learn and make sense of the world",
    exampleZh: "帮助我们学习和理解世界的人",
    tags: ["day6", "phrase"],
    star: true
  },
  {
    en: "draw on",
    ipa: "/drɔː ɒn/",
    pos: "短语",
    zh: "利用；凭借",
    example: "Businesses can draw on this through endorsements.",
    exampleZh: "商家可以借助代言来利用这一点。",
    tags: ["day6", "phrase"],
    star: false
  },
  {
    en: "imitate",
    ipa: "/ˈɪmɪteɪt/",
    pos: "v.",
    zh: "模仿",
    example: "People learn and change by imitating and observing others.",
    exampleZh: "人们通过模仿和观察他人来学习和改变。",
    tags: ["day6", "ielts"],
    star: false
  },
  {
    en: "convince",
    ipa: "/kənˈvɪns/",
    pos: "v.",
    zh: "说服；使相信",
    example: "the way that people can be convinced to do things",
    exampleZh: "人们被说服去做事的方式",
    tags: ["day6", "ielts"],
    star: false
  },
  {
    en: "Tunisia",
    ipa: "/tjuˈnɪziə/",
    pos: "地名",
    zh: "突尼斯",
    example: "In Tunisia, the World Food Programme made a TV show set in a restaurant.",
    exampleZh: "在突尼斯，世界粮食计划署拍了一部餐厅题材的电视剧。",
    tags: ["day6", "recog"],
    star: false
  },

  // —— Day 7 补充 · 商务词汇 ——
  {
    en: "supplier",
    ipa: "/səˈplaɪə/",
    pos: "n.",
    zh: "供应商",
    example: "Junko works for the supplier, and Andrea is the customer.",
    exampleZh: "Junko 在供应商工作，Andrea 是客户。",
    tags: ["day7", "ielts"],
    star: true
  },
  {
    en: "client",
    ipa: "/ˈklaɪənt/",
    pos: "n.",
    zh: "客户",
    example: "Do you ever make exceptions for important clients?",
    exampleZh: "你会为重要客户破例吗？",
    tags: ["day7", "ielts"],
    star: true
  },
  {
    en: "place an order",
    ipa: "/pleɪs ən ˈɔːdə/",
    pos: "短语",
    zh: "下订单",
    example: "Andrea's company has just placed a new order.",
    exampleZh: "Andrea 的公司刚下了一笔新订单。",
    tags: ["day7", "phrase"],
    star: true
  },
  {
    en: "regulation",
    ipa: "/ˌreɡjuˈleɪʃn/",
    pos: "n.",
    zh: "规定；规章",
    example: "Company regulations say payment terms are 30 days.",
    exampleZh: "公司规定付款期限是 30 天。",
    tags: ["day7", "ielts"],
    star: false
  },

  // —— Day 8 · The power of poetry（预习） ——
  {
    en: "poetry",
    ipa: "/ˈpəʊətri/",
    pos: "n.",
    zh: "诗歌（总称）",
    example: "Poetry can help you connect with others.",
    exampleZh: "诗歌能帮你与他人建立连接。",
    tags: ["day8"],
    star: true
  },
  {
    en: "poet",
    ipa: "/ˈpəʊɪt/",
    pos: "n.",
    zh: "诗人",
    example: "The poet read her work aloud.",
    exampleZh: "诗人朗读了她的作品。",
    tags: ["day8"],
    star: false
  },
  {
    en: "rhyme",
    ipa: "/raɪm/",
    pos: "n. v.",
    zh: "押韵；押韵词",
    example: "'Cat' rhymes with 'hat'.",
    exampleZh: "cat 和 hat 押韵。",
    tags: ["day8"],
    star: true
  },
  {
    en: "verse",
    ipa: "/vɜːs/",
    pos: "n.",
    zh: "诗句；诗节",
    example: "She wrote a few verses about the sea.",
    exampleZh: "她写了几节关于大海的诗。",
    tags: ["day8"],
    star: false
  },
  {
    en: "metaphor",
    ipa: "/ˈmetəfə/",
    pos: "n.",
    zh: "隐喻；比喻",
    example: "'Time is money' is a famous metaphor.",
    exampleZh: "「时间就是金钱」是一个著名的隐喻。",
    tags: ["day8"],
    star: true
  },
  {
    en: "imagery",
    ipa: "/ˈɪmɪdʒəri/",
    pos: "n.",
    zh: "意象；形象化描写",
    example: "The poem is full of vivid imagery.",
    exampleZh: "这首诗充满生动的意象。",
    tags: ["day8"],
    star: false
  },
  {
    en: "recite",
    ipa: "/rɪˈsaɪt/",
    pos: "v.",
    zh: "背诵；朗诵",
    example: "Children recite poems at school.",
    exampleZh: "孩子们在学校背诵诗歌。",
    tags: ["day8"],
    star: true
  },
  {
    en: "evoke",
    ipa: "/ɪˈvəʊk/",
    pos: "v.",
    zh: "唤起（情感、记忆）",
    example: "The poem evokes memories of childhood.",
    exampleZh: "这首诗唤起了童年的回忆。",
    tags: ["day8", "ielts"],
    star: true
  },
  {
    en: "come to terms with",
    ipa: "/kʌm tuː tɜːmz wɪð/",
    pos: "短语",
    zh: "接受（现实）；与…和解",
    example: "Poetry can help you come to terms with personal emotions.",
    exampleZh: "诗歌能帮你接受自己的情绪。",
    tags: ["day8", "phrase"],
    star: true
  },
  {
    en: "spread the word",
    ipa: "/spred ðə ˈwɜːd/",
    pos: "短语",
    zh: "传播消息；广而告之",
    example: "Poetry can spread the word about important global events.",
    exampleZh: "诗歌能传播重要的全球议题。",
    tags: ["day8", "phrase"],
    star: false
  },

  // —— Day 9 · Living with debt（预习） ——
  {
    en: "debt",
    ipa: "/det/",
    pos: "n.",
    zh: "债务（注意 b 不发音）",
    example: "Many people are living with debt.",
    exampleZh: "许多人背负着债务生活。",
    tags: ["day9", "ielts", "core"],
    star: true
  },
  {
    en: "owe",
    ipa: "/əʊ/",
    pos: "v.",
    zh: "欠（钱、人情）",
    example: "I owe the bank a lot of money.",
    exampleZh: "我欠银行很多钱。",
    tags: ["day9", "ielts"],
    star: true
  },
  {
    en: "borrow",
    ipa: "/ˈbɒrəʊ/",
    pos: "v.",
    zh: "借入",
    example: "People are borrowing money for bills and food.",
    exampleZh: "人们为了账单和食物而借钱。",
    tags: ["day9"],
    star: true
  },
  {
    en: "lend",
    ipa: "/lend/",
    pos: "v.",
    zh: "借出",
    example: "The bank agreed to lend her money.",
    exampleZh: "银行同意借钱给她。",
    tags: ["day9"],
    star: false
  },
  {
    en: "loan",
    ipa: "/ləʊn/",
    pos: "n.",
    zh: "贷款",
    example: "He took out a loan to buy a car.",
    exampleZh: "他贷款买了一辆车。",
    tags: ["day9", "ielts"],
    star: false
  },
  {
    en: "interest rate",
    ipa: "/ˈɪntrəst reɪt/",
    pos: "n.",
    zh: "利率",
    example: "Interest rates have risen sharply.",
    exampleZh: "利率大幅上升了。",
    tags: ["day9", "phrase", "ielts"],
    star: true
  },
  {
    en: "repay",
    ipa: "/rɪˈpeɪ/",
    pos: "v.",
    zh: "偿还",
    example: "It took years to repay the debt.",
    exampleZh: "还清这笔债务花了很多年。",
    tags: ["day9"],
    star: false
  },
  {
    en: "budget",
    ipa: "/ˈbʌdʒɪt/",
    pos: "n. v.",
    zh: "预算；做预算",
    example: "Keep a monthly budget to control spending.",
    exampleZh: "记好每月预算来控制开销。",
    tags: ["day9", "ielts"],
    star: true
  },
  {
    en: "make ends meet",
    ipa: "/meɪk endz miːt/",
    pos: "短语",
    zh: "收支相抵；勉强糊口",
    example: "Many families struggle to make ends meet.",
    exampleZh: "许多家庭挣扎着维持收支平衡。",
    tags: ["day9", "phrase", "core"],
    star: true
  },
  {
    en: "cost of living",
    ipa: "/ˌkɒst əv ˈlɪvɪŋ/",
    pos: "短语",
    zh: "生活成本",
    example: "The rising cost of living forces people to borrow.",
    exampleZh: "不断上涨的生活成本迫使人们借钱。",
    tags: ["day9", "phrase", "ielts"],
    star: true
  },
  {
    en: "get out of control",
    ipa: "/ɡet aʊt əv kənˈtrəʊl/",
    pos: "短语",
    zh: "失控",
    example: "Debt can get out of control, causing anxiety and stress.",
    exampleZh: "债务可能失控，带来焦虑和压力。",
    tags: ["day9", "phrase"],
    star: false
  },

  // —— Day 10 · Making cities feel quieter（预习） ——
  {
    en: "noise pollution",
    ipa: "/ˈnɔɪz pəˌluːʃn/",
    pos: "n.",
    zh: "噪音污染",
    example: "Noise pollution affects people's health in cities.",
    exampleZh: "噪音污染影响城市居民的健康。",
    tags: ["day10", "phrase", "ielts"],
    star: true
  },
  {
    en: "background noise",
    ipa: "/ˈbækɡraʊnd nɔɪz/",
    pos: "n.",
    zh: "背景噪音",
    example: "It's hard to focus with constant background noise.",
    exampleZh: "持续的背景噪音让人难以专注。",
    tags: ["day10", "phrase"],
    star: false
  },
  {
    en: "hustle and bustle",
    ipa: "/ˌhʌsl ən ˈbʌsl/",
    pos: "短语",
    zh: "喧嚣繁忙",
    example: "She loves the hustle and bustle of city life.",
    exampleZh: "她喜欢城市生活的熙熙攘攘。",
    tags: ["day10", "phrase"],
    star: true
  },
  {
    en: "tranquil",
    ipa: "/ˈtræŋkwɪl/",
    pos: "adj.",
    zh: "宁静的",
    example: "a tranquil park in the middle of the city",
    exampleZh: "市中心一座宁静的公园",
    tags: ["day10", "ielts"],
    star: true
  },
  {
    en: "muffle",
    ipa: "/ˈmʌfl/",
    pos: "v.",
    zh: "使（声音）低沉；压低",
    example: "Trees can muffle traffic noise.",
    exampleZh: "树木可以压低交通噪音。",
    tags: ["day10"],
    star: false
  },
  {
    en: "soundscape",
    ipa: "/ˈsaʊndskeɪp/",
    pos: "n.",
    zh: "声音景观；声景",
    example: "Designers think about a city's soundscape.",
    exampleZh: "设计师会考虑城市的声音景观。",
    tags: ["day10"],
    star: false
  },
  {
    en: "urban planning",
    ipa: "/ˌɜːbən ˈplænɪŋ/",
    pos: "n.",
    zh: "城市规划",
    example: "Good urban planning makes cities quieter.",
    exampleZh: "好的城市规划让城市更安静。",
    tags: ["day10", "phrase", "ielts"],
    star: true
  },
  {
    en: "green space",
    ipa: "/ˈɡriːn speɪs/",
    pos: "n.",
    zh: "绿地",
    example: "Green spaces make cities more liveable.",
    exampleZh: "绿地让城市更宜居。",
    tags: ["day10", "phrase", "ielts"],
    star: true
  },
  {
    en: "nuisance",
    ipa: "/ˈnjuːsns/",
    pos: "n.",
    zh: "讨厌的东西；麻烦事",
    example: "Late-night noise is a real nuisance.",
    exampleZh: "深夜的噪音真让人讨厌。",
    tags: ["day10", "ielts"],
    star: false
  },
  {
    en: "insulation",
    ipa: "/ˌɪnsjuˈleɪʃn/",
    pos: "n.",
    zh: "隔音/隔热（材料）",
    example: "Sound insulation keeps flats quiet.",
    exampleZh: "隔音材料让公寓保持安静。",
    tags: ["day10"],
    star: false
  },

  // —— Day 11 · How reading shapes your brain（预习） ——
  {
    en: "literacy",
    ipa: "/ˈlɪtərəsi/",
    pos: "n.",
    zh: "读写能力；识字",
    example: "Reading early improves children's literacy.",
    exampleZh: "早期阅读能提高孩子的读写能力。",
    tags: ["day11", "ielts"],
    star: true
  },
  {
    en: "comprehension",
    ipa: "/ˌkɒmprɪˈhenʃn/",
    pos: "n.",
    zh: "理解（力）",
    example: "Reading fiction improves comprehension.",
    exampleZh: "读小说能提高理解力。",
    tags: ["day11", "ielts"],
    star: true
  },
  {
    en: "fiction",
    ipa: "/ˈfɪkʃn/",
    pos: "n.",
    zh: "小说；虚构作品",
    example: "She reads a lot of fiction.",
    exampleZh: "她读很多小说。",
    tags: ["day11"],
    star: false
  },
  {
    en: "imagination",
    ipa: "/ɪˌmædʒɪˈneɪʃn/",
    pos: "n.",
    zh: "想象力",
    example: "Novels feed the imagination.",
    exampleZh: "小说滋养想象力。",
    tags: ["day11"],
    star: false
  },
  {
    en: "concentration",
    ipa: "/ˌkɒnsnˈtreɪʃn/",
    pos: "n.",
    zh: "专注力",
    example: "Deep reading builds concentration.",
    exampleZh: "深度阅读锻炼专注力。",
    tags: ["day11", "ielts"],
    star: false
  },
  {
    en: "empathy",
    ipa: "/ˈempəθi/",
    pos: "n.",
    zh: "共情能力；同理心",
    example: "Reading stories increases empathy.",
    exampleZh: "读故事能增强共情能力。",
    tags: ["day11", "ielts"],
    star: true
  },
  {
    en: "stimulate",
    ipa: "/ˈstɪmjuleɪt/",
    pos: "v.",
    zh: "刺激；激发",
    example: "Reading stimulates many areas of the brain.",
    exampleZh: "阅读能激活大脑的许多区域。",
    tags: ["day11", "ielts"],
    star: true
  },
  {
    en: "retain",
    ipa: "/rɪˈteɪn/",
    pos: "v.",
    zh: "记住；保留",
    example: "We retain more when we read slowly.",
    exampleZh: "慢读时我们记住的更多。",
    tags: ["day11", "ielts"],
    star: false
  },
  {
    en: "immerse yourself in",
    ipa: "/ɪˈmɜːs jɔːˌself ɪn/",
    pos: "短语",
    zh: "沉浸于",
    example: "Immerse yourself in a good book.",
    exampleZh: "沉浸在一本好书里吧。",
    tags: ["day11", "phrase"],
    star: true
  },

  // —— Day 12 · Searching for life on another planet（预习） ——
  {
    en: "astronomer",
    ipa: "/əˈstrɒnəmə/",
    pos: "n.",
    zh: "天文学家",
    example: "Astronomers search for planets like Earth.",
    exampleZh: "天文学家寻找类似地球的行星。",
    tags: ["day12"],
    star: true
  },
  {
    en: "telescope",
    ipa: "/ˈtelɪskəʊp/",
    pos: "n.",
    zh: "望远镜",
    example: "The telescope can detect distant planets.",
    exampleZh: "这台望远镜能探测到遥远的行星。",
    tags: ["day12"],
    star: false
  },
  {
    en: "orbit",
    ipa: "/ˈɔːbɪt/",
    pos: "n. v.",
    zh: "轨道；绕…运行",
    example: "The planet orbits a distant star.",
    exampleZh: "这颗行星绕着一颗遥远的恒星运行。",
    tags: ["day12", "ielts"],
    star: true
  },
  {
    en: "habitable",
    ipa: "/ˈhæbɪtəbl/",
    pos: "adj.",
    zh: "适宜居住的",
    example: "Is the planet habitable?",
    exampleZh: "这颗行星适宜居住吗？",
    tags: ["day12", "core"],
    star: true
  },
  {
    en: "extraterrestrial",
    ipa: "/ˌekstrətəˈrestriəl/",
    pos: "adj.",
    zh: "地球外的；外星的",
    example: "searching for extraterrestrial life",
    exampleZh: "寻找外星生命",
    tags: ["day12"],
    star: false
  },
  {
    en: "galaxy",
    ipa: "/ˈɡæləksi/",
    pos: "n.",
    zh: "星系；银河",
    example: "There are billions of stars in our galaxy.",
    exampleZh: "我们的星系中有数十亿颗恒星。",
    tags: ["day12"],
    star: false
  },
  {
    en: "solar system",
    ipa: "/ˈsəʊlə ˌsɪstəm/",
    pos: "n.",
    zh: "太阳系",
    example: "planets beyond our solar system",
    exampleZh: "太阳系之外的行星",
    tags: ["day12", "phrase"],
    star: true
  },
  {
    en: "universe",
    ipa: "/ˈjuːnɪvɜːs/",
    pos: "n.",
    zh: "宇宙",
    example: "Are we alone in the universe?",
    exampleZh: "宇宙中只有我们吗？",
    tags: ["day12"],
    star: false
  },
  {
    en: "evidence",
    ipa: "/ˈevɪdəns/",
    pos: "n.",
    zh: "证据",
    example: "Scientists look for evidence of life.",
    exampleZh: "科学家寻找生命存在的证据。",
    tags: ["day12", "ielts"],
    star: true
  },

  // —— Day 13 · Why are we all so stressed?（预习） ——
  {
    en: "burnout",
    ipa: "/ˈbɜːnaʊt/",
    pos: "n.",
    zh: "职业倦怠；身心俱疲",
    example: "Long hours can lead to burnout.",
    exampleZh: "长时间工作会导致职业倦怠。",
    tags: ["day13", "ielts", "core"],
    star: true
  },
  {
    en: "cope with",
    ipa: "/kəʊp wɪð/",
    pos: "短语",
    zh: "应对；对付",
    example: "How do you cope with stress?",
    exampleZh: "你是如何应对压力的？",
    tags: ["day13", "phrase", "ielts"],
    star: true
  },
  {
    en: "chronic",
    ipa: "/ˈkrɒnɪk/",
    pos: "adj.",
    zh: "慢性的；长期的",
    example: "Chronic stress harms your health.",
    exampleZh: "慢性压力损害健康。",
    tags: ["day13", "ielts", "core"],
    star: true
  },
  {
    en: "stressed out",
    ipa: "/strest aʊt/",
    pos: "短语",
    zh: "压力大的；紧张透了",
    example: "I'm totally stressed out this week.",
    exampleZh: "这周我压力大到不行。",
    tags: ["day13", "phrase"],
    star: false
  },
  {
    en: "work-life balance",
    ipa: "/ˌwɜːk laɪf ˈbæləns/",
    pos: "n.",
    zh: "工作与生活的平衡",
    example: "A good work-life balance reduces stress.",
    exampleZh: "良好的工作生活平衡能减轻压力。",
    tags: ["day13", "phrase", "ielts"],
    star: true
  },
  {
    en: "mindfulness",
    ipa: "/ˈmaɪndflnəs/",
    pos: "n.",
    zh: "正念",
    example: "Mindfulness can help you relax.",
    exampleZh: "正念能帮你放松。",
    tags: ["day13"],
    star: false
  },
  {
    en: "unwind",
    ipa: "/ˌʌnˈwaɪnd/",
    pos: "v.",
    zh: "放松",
    example: "I listen to music to unwind after work.",
    exampleZh: "下班后我听音乐放松。",
    tags: ["day13"],
    star: true
  },
  {
    en: "under pressure",
    ipa: "/ˌʌndə ˈpreʃə/",
    pos: "短语",
    zh: "承受压力",
    example: "She works well under pressure.",
    exampleZh: "她在压力下也能好好工作。",
    tags: ["day13", "phrase"],
    star: false
  },
  {
    en: "take a break",
    ipa: "/teɪk ə breɪk/",
    pos: "短语",
    zh: "休息一下",
    example: "Take a break every hour when studying.",
    exampleZh: "学习时每小时休息一下。",
    tags: ["day13", "phrase"],
    star: false
  },

  // —— Day 14 · Should we eat ultra-processed food?（预习） ——
  {
    en: "ultra-processed",
    ipa: "/ˌʌltrə ˈprəʊsest/",
    pos: "adj.",
    zh: "超加工的",
    example: "Should we eat ultra-processed food?",
    exampleZh: "我们该吃超加工食品吗？",
    tags: ["day14"],
    star: true
  },
  {
    en: "ingredient",
    ipa: "/ɪnˈɡriːdiənt/",
    pos: "n.",
    zh: "成分；食材",
    example: "Check the ingredients on the label.",
    exampleZh: "看看标签上的成分表。",
    tags: ["day14", "ielts"],
    star: true
  },
  {
    en: "additive",
    ipa: "/ˈædətɪv/",
    pos: "n.",
    zh: "添加剂",
    example: "This snack is full of additives.",
    exampleZh: "这种零食全是添加剂。",
    tags: ["day14", "ielts"],
    star: true
  },
  {
    en: "preservative",
    ipa: "/prɪˈzɜːvətɪv/",
    pos: "n.",
    zh: "防腐剂",
    example: "Preservatives make food last longer.",
    exampleZh: "防腐剂让食物保存更久。",
    tags: ["day14"],
    star: false
  },
  {
    en: "nutritious",
    ipa: "/njuˈtrɪʃəs/",
    pos: "adj.",
    zh: "有营养的",
    example: "Fresh vegetables are cheap and nutritious.",
    exampleZh: "新鲜蔬菜便宜又有营养。",
    tags: ["day14", "ielts"],
    star: true
  },
  {
    en: "consumption",
    ipa: "/kənˈsʌmpʃn/",
    pos: "n.",
    zh: "消费；摄入（量）",
    example: "Reduce your consumption of sugary drinks.",
    exampleZh: "减少含糖饮料的摄入。",
    tags: ["day14", "ielts"],
    star: false
  },
  {
    en: "obesity",
    ipa: "/əʊˈbiːsəti/",
    pos: "n.",
    zh: "肥胖（症）",
    example: "Ultra-processed food is linked to obesity.",
    exampleZh: "超加工食品与肥胖有关联。",
    tags: ["day14", "ielts"],
    star: true
  },
  {
    en: "junk food",
    ipa: "/ˈdʒʌŋk fuːd/",
    pos: "n.",
    zh: "垃圾食品",
    example: "Try to eat less junk food.",
    exampleZh: "尽量少吃垃圾食品。",
    tags: ["day14", "phrase"],
    star: false
  },
  {
    en: "crave",
    ipa: "/kreɪv/",
    pos: "v.",
    zh: "渴望；馋",
    example: "We often crave salty, processed snacks.",
    exampleZh: "我们常常馋咸味的加工零食。",
    tags: ["day14"],
    star: false
  },

  // —— Day 8 官方核心词 + 补充（The power of poetry） ——
  {
    en: "open mic night",
    ipa: "/ˌəʊpən ˈmaɪk naɪt/",
    pos: "n.",
    zh: "开放麦之夜（任何人可上台表演）",
    example: "A good place to hear poetry is an open mic night.",
    exampleZh: "听诗的好去处是开放麦之夜。",
    tags: ["day8", "core", "phrase"],
    star: true
  },
  {
    en: "touch your soul",
    ipa: "/tʌtʃ jɔː ˈsəʊl/",
    pos: "短语",
    zh: "触动心灵；深深打动",
    example: "People can really touch your soul with what they're saying.",
    exampleZh: "人们的话语真的能触动你的心灵。",
    tags: ["day8", "core", "phrase"],
    star: true
  },
  {
    en: "jargon",
    ipa: "/ˈdʒɑːɡən/",
    pos: "n.",
    zh: "行话；术语",
    example: "A lot of this jargon is really hard to understand.",
    exampleZh: "这些行话真的很难懂。",
    tags: ["day8", "core", "ielts"],
    star: true
  },
  {
    en: "impenetrable",
    ipa: "/ɪmˈpenɪtrəbl/",
    pos: "adj.",
    zh: "无法理解的；无法穿透的",
    example: "Jargon can make scientific papers impenetrable.",
    exampleZh: "行话会让科学论文变得无法理解。",
    tags: ["day8", "core"],
    star: true
  },
  {
    en: "turn-off",
    ipa: "/ˈtɜːn ɒf/",
    pos: "n.",
    zh: "令人反感/无兴趣的东西",
    example: "Too much jargon makes science an instant turn-off.",
    exampleZh: "太多行话让人立刻对科学失去兴趣。",
    tags: ["day8", "core"],
    star: true
  },
  {
    en: "get goosebumps",
    ipa: "/ɡet ˈɡuːsbʌmps/",
    pos: "短语",
    zh: "起鸡皮疙瘩（因感动/寒冷/害怕）",
    example: "It still gives me goosebumps when I hear it now.",
    exampleZh: "现在听到它我还是会起鸡皮疙瘩。",
    tags: ["day8", "core", "phrase"],
    star: true
  },
  {
    en: "stroke",
    ipa: "/strəʊk/",
    pos: "n.",
    zh: "中风",
    example: "Maria's poem is about a friend who suffered a stroke.",
    exampleZh: "Maria 的诗写的是一位中风的朋友。",
    tags: ["day8", "ielts"],
    star: false
  },
  {
    en: "heal",
    ipa: "/hiːl/",
    pos: "v.",
    zh: "治愈；愈合",
    example: "Poetry has the power to heal emotions.",
    exampleZh: "诗歌有治愈情绪的力量。",
    tags: ["day8", "ielts"],
    star: false
  },

  // —— Day 9 官方核心词 + 补充（Living with debt） ——
  {
    en: "pay off",
    ipa: "/peɪ ɒf/",
    pos: "短语",
    zh: "还清（债务）（= pay back / clear）",
    example: "I could clear them all one day, even if it means five years paying them off.",
    exampleZh: "我希望有天能还清，哪怕要花五年慢慢还。",
    tags: ["day9", "core", "phrase"],
    star: true
  },
  {
    en: "in arrears",
    ipa: "/ɪn əˈrɪəz/",
    pos: "习语",
    zh: "拖欠（本应已付的钱）",
    example: "Many residents were in arrears with their monthly payments.",
    exampleZh: "许多居民的月供都有拖欠。",
    tags: ["day9", "core", "phrase"],
    star: true
  },
  {
    en: "the never-never",
    ipa: "/ðə ˌnevə ˈnevə/",
    pos: "习语",
    zh: "分期付款（英式口语）",
    example: "Jason was living on the never-never.",
    exampleZh: "Jason 靠分期付款过日子。",
    tags: ["day9", "core", "phrase"],
    star: true
  },
  {
    en: "financial strain",
    ipa: "/faɪˌnænʃl ˈstreɪn/",
    pos: "n.",
    zh: "经济压力",
    example: "The financial strain on him and his partner increased.",
    exampleZh: "他和伴侣的经济压力越来越大。",
    tags: ["day9", "core", "phrase"],
    star: true
  },
  {
    en: "overdraft",
    ipa: "/ˈəʊvədrɑːft/",
    pos: "n.",
    zh: "透支（额度）",
    example: "British adults are in debt through credit cards, overdrafts and personal loans.",
    exampleZh: "英国成年人的债务来自信用卡、透支和个人贷款。",
    tags: ["day9"],
    star: false
  },
  {
    en: "fluctuate",
    ipa: "/ˈflʌktʃueɪt/",
    pos: "v.",
    zh: "波动；起伏不定",
    example: "Jason fluctuated between wanting to clear his debts and living on the never-never.",
    exampleZh: "Jason 在还清债务和分期度日之间摇摆。",
    tags: ["day9", "ielts"],
    star: true
  },
  {
    en: "distress",
    ipa: "/dɪˈstres/",
    pos: "n.",
    zh: "痛苦；困苦",
    example: "For those on low incomes, debt can cause serious distress.",
    exampleZh: "对低收入者来说，债务会带来严重痛苦。",
    tags: ["day9", "ielts"],
    star: false
  },
  {
    en: "moral obligation",
    ipa: "/ˌmɒrəl ˌɒblɪˈɡeɪʃn/",
    pos: "n.",
    zh: "道德义务",
    example: "He questioned the supposed moral obligation to pay his debts.",
    exampleZh: "他质疑所谓「必须还债」的道德义务。",
    tags: ["day9", "phrase"],
    star: false
  },

  // —— Day 10 官方核心词 + 补充（Making cities feel quieter） ——
  {
    en: "decibel",
    ipa: "/ˈdesɪbel/",
    pos: "n.",
    zh: "分贝",
    example: "Daytime noise levels in Mumbai regularly hit 80 decibels.",
    exampleZh: "孟买白天的噪音常常达到 80 分贝。",
    tags: ["day10", "core"],
    star: true
  },
  {
    en: "dress loud",
    ipa: "/dres laʊd/",
    pos: "短语",
    zh: "穿得花哨张扬",
    example: "We dress loud, we talk loud, we celebrate loud.",
    exampleZh: "我们穿得张扬、说话大声、庆祝也热闹。",
    tags: ["day10", "core", "phrase"],
    star: true
  },
  {
    en: "handle",
    ipa: "/ˈhændl/",
    pos: "v.",
    zh: "应对；处理（难题）",
    example: "When I got back, I realised I couldn't handle the noise anymore.",
    exampleZh: "回国后我发现自己再也受不了那噪音了。",
    tags: ["day10", "core", "ielts"],
    star: true
  },
  {
    en: "art installation",
    ipa: "/ˈɑːt ˌɪnstəˌleɪʃn/",
    pos: "n.",
    zh: "艺术装置",
    example: "He set up an immersive sound art installation in the park.",
    exampleZh: "他在公园里布置了沉浸式声音艺术装置。",
    tags: ["day10", "core", "phrase"],
    star: true
  },
  {
    en: "squeaky",
    ipa: "/ˈskwiːki/",
    pos: "adj.",
    zh: "吱吱作响的；尖声的",
    example: "The sand makes some squeaky sounds when you walk on it.",
    exampleZh: "走在沙子上会发出吱吱的响声。",
    tags: ["day10", "core"],
    star: true
  },
  {
    en: "counterintuitive",
    ipa: "/ˌkaʊntərɪnˈtjuːɪtɪv/",
    pos: "adj.",
    zh: "反直觉的",
    example: "It's counterintuitive, but you can make a park less noisy by adding calmer sounds.",
    exampleZh: "很反直觉——加入更平静的声音反而让公园显得更安静。",
    tags: ["day10", "core"],
    star: true
  },
  {
    en: "whisper",
    ipa: "/ˈwɪspə/",
    pos: "v. n.",
    zh: "低语；耳语",
    example: "How many decibels would it be if I whispered?",
    exampleZh: "如果我耳语会是多少分贝？",
    tags: ["day10"],
    star: false
  },
  {
    en: "immersive",
    ipa: "/ɪˈmɜːsɪv/",
    pos: "adj.",
    zh: "沉浸式的",
    example: "an immersive sound art installation",
    exampleZh: "沉浸式声音艺术装置",
    tags: ["day10", "ielts"],
    star: false
  },
  {
    en: "overseas",
    ipa: "/ˌəʊvəˈsiːz/",
    pos: "adv. adj.",
    zh: "在海外（的）",
    example: "Chhavi returned to India after living overseas.",
    exampleZh: "Chhavi 在海外生活后回到印度。",
    tags: ["day10", "ielts"],
    star: false
  },
  {
    en: "Mumbai",
    ipa: "/mʊmˈbaɪ/",
    pos: "地名",
    zh: "孟买（印度城市）",
    example: "Mumbai is one of the noisiest cities in the world.",
    exampleZh: "孟买是世界上最吵的城市之一。",
    tags: ["day10", "recog"],
    star: false
  },
  {
    en: "India",
    ipa: "/ˈɪndiə/",
    pos: "地名",
    zh: "印度",
    example: "Chhavi returned to India after 12 years abroad.",
    exampleZh: "Chhavi 在国外 12 年后回到印度。",
    tags: ["day10", "recog"],
    star: false
  },
  {
    en: "the World Health Organisation",
    ipa: "/wɜːld helθ ˌɔːɡənaɪˈzeɪʃn/",
    pos: "专名",
    zh: "世界卫生组织（WHO）",
    example: "20 decibels higher than World Health Organisation recommendations",
    exampleZh: "比世界卫生组织的建议高 20 分贝",
    tags: ["day10", "recog"],
    star: false
  },

  // —— Day 11 官方核心词 + 补充（How reading shapes your brain） ——
  {
    en: "natural",
    ipa: "/ˈnætʃrəl/",
    pos: "adj.",
    zh: "天生的；自然的",
    example: "We think of language as natural, but reading isn't natural at all.",
    exampleZh: "我们以为语言是天生的，但阅读完全不是。",
    tags: ["day11", "core"],
    star: true
  },
  {
    en: "dedicated",
    ipa: "/ˈdedɪkeɪtɪd/",
    pos: "adj.",
    zh: "专用的；专门的",
    example: "Our brain hasn't had time to develop a dedicated reading network.",
    exampleZh: "大脑还没来得及进化出专门的阅读网络。",
    tags: ["day11", "core", "ielts"],
    star: true
  },
  {
    en: "co-opt",
    ipa: "/ˌkəʊˈɒpt/",
    pos: "v.",
    zh: "挪用；拉…来用",
    example: "To read, we co-opt parts of the brain involved in vision and language.",
    exampleZh: "为了阅读，我们挪用大脑中负责视觉和语言的部分。",
    tags: ["day11", "core"],
    star: true
  },
  {
    en: "circuit",
    ipa: "/ˈsɜːkɪt/",
    pos: "n.",
    zh: "回路；线路",
    example: "The brain's circuit reflects the requirements of Chinese.",
    exampleZh: "大脑的回路反映了中文的特点。",
    tags: ["day11", "core"],
    star: true
  },
  {
    en: "inevitably",
    ipa: "/ɪnˈevɪtəbli/",
    pos: "adv.",
    zh: "不可避免地",
    example: "Chinese characters inevitably mean more visual processing.",
    exampleZh: "汉字不可避免地需要更多视觉处理。",
    tags: ["day11", "core", "ielts"],
    star: true
  },
  {
    en: "intricate",
    ipa: "/ˈɪntrɪkət/",
    pos: "adj.",
    zh: "精细复杂的",
    example: "those beautifully intricate symbols or characters",
    exampleZh: "那些精美复杂的符号或汉字",
    tags: ["day11", "core"],
    star: true
  },
  {
    en: "evolve",
    ipa: "/ɪˈvɒlv/",
    pos: "v.",
    zh: "进化；逐步发展",
    example: "Our brains haven't evolved to include a dedicated reading brain.",
    exampleZh: "我们的大脑还没进化出专门的「阅读脑」。",
    tags: ["day11", "ielts"],
    star: true
  },
  {
    en: "auditory",
    ipa: "/ˈɔːdətri/",
    pos: "adj.",
    zh: "听觉的",
    example: "parts of the brain involved in vision and auditory processing",
    exampleZh: "大脑中负责视觉和听觉处理的部分",
    tags: ["day11"],
    star: false
  },
  {
    en: "symbol",
    ipa: "/ˈsɪmbl/",
    pos: "n.",
    zh: "符号；象征",
    example: "the visual qualities of Chinese symbols",
    exampleZh: "汉字符号的视觉特点",
    tags: ["day11", "ielts"],
    star: false
  },

  // —— Day 12 官方核心词 + 补充（Searching for life on another planet） ——
  {
    en: "zone",
    ipa: "/zəʊn/",
    pos: "n.",
    zh: "地带；区域",
    example: "The planet exists in the habitable zone around its sun.",
    exampleZh: "这颗行星位于其恒星的宜居带内。",
    tags: ["day12", "core"],
    star: true
  },
  {
    en: "potential",
    ipa: "/pəˈtenʃl/",
    pos: "adj. n.",
    zh: "潜在的；潜力",
    example: "Scientists are looking at the potential atmosphere around TRAPPIST-1e.",
    exampleZh: "科学家在研究 TRAPPIST-1e 可能存在的大气层。",
    tags: ["day12", "core", "ielts"],
    star: true
  },
  {
    en: "rule out",
    ipa: "/ruːl aʊt/",
    pos: "短语",
    zh: "排除（可能性）",
    example: "They've ruled out that it's full of hydrogen or carbon dioxide.",
    exampleZh: "他们已排除了大气层充满氢气或二氧化碳的可能。",
    tags: ["day12", "core", "phrase"],
    star: true
  },
  {
    en: "dominate",
    ipa: "/ˈdɒmɪneɪt/",
    pos: "v.",
    zh: "主导；支配",
    example: "It might be a nitrogen-dominated atmosphere.",
    exampleZh: "它的大气可能以氮气为主。",
    tags: ["day12", "core", "ielts"],
    star: true
  },
  {
    en: "fingers crossed",
    ipa: "/ˌfɪŋɡəz ˈkrɒst/",
    pos: "习语",
    zh: "祈祷好运；但愿如此",
    example: "Fingers crossed it has nitrogen.",
    exampleZh: "但愿它有氮气。",
    tags: ["day12", "core", "phrase"],
    star: true
  },
  {
    en: "greenhouse gas",
    ipa: "/ˈɡriːnhaʊs ɡæs/",
    pos: "n.",
    zh: "温室气体",
    example: "Hydrogen and carbon dioxide are greenhouse gases.",
    exampleZh: "氢气和二氧化碳是温室气体。",
    tags: ["day12", "phrase", "ielts"],
    star: true
  },
  {
    en: "carbon dioxide",
    ipa: "/ˌkɑːbən daɪˈɒksaɪd/",
    pos: "n.",
    zh: "二氧化碳",
    example: "Greenhouse gases like carbon dioxide would make the planet really hot.",
    exampleZh: "二氧化碳等温室气体会让行星变得非常热。",
    tags: ["day12", "ielts"],
    star: false
  },
  {
    en: "nitrogen",
    ipa: "/ˈnaɪtrədʒən/",
    pos: "n.",
    zh: "氮气",
    example: "There are clues that it might be a nitrogen-dominated atmosphere.",
    exampleZh: "有线索表明它的大气可能以氮气为主。",
    tags: ["day12"],
    star: false
  },
  {
    en: "clue",
    ipa: "/kluː/",
    pos: "n.",
    zh: "线索",
    example: "another clue that there could be life there",
    exampleZh: "那里可能存在生命的又一条线索",
    tags: ["day12"],
    star: false
  },

  // —— Day 13 官方核心词 + 补充（Why are we all so stressed?） ——
  {
    en: "sharpen the mind",
    ipa: "/ˌʃɑːpən ðə ˈmaɪnd/",
    pos: "短语",
    zh: "使头脑清醒（= concentrate the mind）",
    example: "Nerves sharpen your thinking and allow you to do your best.",
    exampleZh: "紧张能让思维更敏锐，帮你发挥最佳水平。",
    tags: ["day13", "core", "phrase"],
    star: true
  },
  {
    en: "nerves",
    ipa: "/nɜːvz/",
    pos: "n.",
    zh: "紧张；焦虑（口语）",
    example: "It's normal to feel nerves before an exam.",
    exampleZh: "考试前感到紧张很正常。",
    tags: ["day13", "core"],
    star: true
  },
  {
    en: "one-size-fits-all",
    ipa: "/ˌwʌn saɪz fɪts ˈɔːl/",
    pos: "adj.",
    zh: "一刀切的；万能的",
    example: "There's no one-size-fits-all solution to stress.",
    exampleZh: "应对压力没有一刀切的方案。",
    tags: ["day13", "core", "phrase"],
    star: true
  },
  {
    en: "to-do list",
    ipa: "/tə ˈduː lɪst/",
    pos: "n.",
    zh: "待办事项清单",
    example: "Accept that your to-do list is never going to end.",
    exampleZh: "接受吧，你的待办清单永远做不完。",
    tags: ["day13", "core", "phrase"],
    star: true
  },
  {
    en: "combat",
    ipa: "/ˈkɒmbæt/",
    pos: "v.",
    zh: "对抗；防止",
    example: "There are many ways to combat stress.",
    exampleZh: "对抗压力的方法有很多。",
    tags: ["day13", "ielts"],
    star: false
  },
  {
    en: "exhaustion",
    ipa: "/ɪɡˈzɔːstʃən/",
    pos: "n.",
    zh: "精疲力竭",
    example: "Burnout is mental or physical exhaustion caused by working too hard.",
    exampleZh: "职业倦怠是过度工作导致的身心俱疲。",
    tags: ["day13", "ielts"],
    star: false
  },

  // —— Day 14 官方核心词 + 补充（Ultra-processed food / Meeting an old friend） ——
  {
    en: "ready meal",
    ipa: "/ˌredi ˈmiːl/",
    pos: "n.",
    zh: "（超市）即食餐",
    example: "With a ready meal, you put it in the microwave for a couple of minutes.",
    exampleZh: "即食餐放进微波炉几分钟就行。",
    tags: ["day14", "core", "phrase"],
    star: true
  },
  {
    en: "from scratch",
    ipa: "/frəm ˈskrætʃ/",
    pos: "习语",
    zh: "从零开始",
    example: "Cooking a fresh meal from scratch can take a really long time.",
    exampleZh: "从零开始做一顿新鲜饭菜要花很长时间。",
    tags: ["day14", "core", "phrase"],
    star: true
  },
  {
    en: "guilty pleasure",
    ipa: "/ˌɡɪlti ˈpleʒə/",
    pos: "n.",
    zh: "罪恶快感；明知不好却喜欢的东西",
    example: "Chocolate is my guilty pleasure.",
    exampleZh: "巧克力是我的罪恶快感。",
    tags: ["day14", "core", "phrase"],
    star: true
  },
  {
    en: "once in a while",
    ipa: "/ˌwʌns ɪn ə ˈwaɪl/",
    pos: "短语",
    zh: "偶尔",
    example: "Is it OK to have a packet of crisps once in a while?",
    exampleZh: "偶尔吃包薯片可以吗？",
    tags: ["day14", "core", "phrase"],
    star: true
  },
  {
    en: "from time to time",
    ipa: "/frəm ˌtaɪm tə ˈtaɪm/",
    pos: "短语",
    zh: "不时；偶尔",
    example: "a way for us to still enjoy them from time to time",
    exampleZh: "让我们还能偶尔享受它们的办法",
    tags: ["day14", "core", "phrase"],
    star: false
  },
  {
    en: "everything in moderation",
    ipa: "/ˌevriθɪŋ ɪn ˌmɒdəˈreɪʃn/",
    pos: "习语",
    zh: "凡事适度",
    example: "Everything is fine in moderation.",
    exampleZh: "凡事适度就好。",
    tags: ["day14", "core", "phrase"],
    star: true
  },
  {
    en: "cut out",
    ipa: "/kʌt aʊt/",
    pos: "短语",
    zh: "戒掉；剔除",
    example: "Should we cut ultra-processed foods out of our diets completely?",
    exampleZh: "我们该把超加工食品从饮食中完全剔除吗？",
    tags: ["day14", "phrase"],
    star: true
  },
  {
    en: "microwave",
    ipa: "/ˈmaɪkrəweɪv/",
    pos: "n.",
    zh: "微波炉",
    example: "Put the ready meal in the microwave for a couple of minutes.",
    exampleZh: "把即食餐放进微波炉热几分钟。",
    tags: ["day14"],
    star: false
  },
  {
    en: "work out",
    ipa: "/wɜːk aʊt/",
    pos: "短语",
    zh: "成功；行得通；解决",
    example: "I was in London for a couple of years, but it didn't work out.",
    exampleZh: "我在伦敦待了两年，但没能如愿。",
    tags: ["day14", "phrase"],
    star: true
  },
  {
    en: "come round",
    ipa: "/kʌm raʊnd/",
    pos: "短语",
    zh: "（到某人家）串门",
    example: "You should really come round to the house one day.",
    exampleZh: "你真该找一天来家里坐坐。",
    tags: ["day14", "phrase"],
    star: false
  },
  {
    en: "swap numbers",
    ipa: "/swɒp ˈnʌmbəz/",
    pos: "短语",
    zh: "交换电话号码",
    example: "Let's swap numbers and keep in touch.",
    exampleZh: "我们交换电话号码，保持联系吧。",
    tags: ["day14", "phrase"],
    star: false
  },
  {
    en: "it's been ages",
    ipa: "/ɪts biːn ˈeɪdʒɪz/",
    pos: "口语",
    zh: "好久不见了",
    example: "It's been ages — at least fifteen years!",
    exampleZh: "好久不见了——至少十五年了吧！",
    tags: ["day14", "recog", "phrase"],
    star: true
  },
  {
    en: "how time flies",
    ipa: "/haʊ taɪm ˈflaɪz/",
    pos: "口语",
    zh: "时间过得真快",
    example: "I'm just amazed how time flies!",
    exampleZh: "我只是感叹时间过得真快！",
    tags: ["day14", "recog", "phrase"],
    star: true
  },

  // —— Day 15：Cambridge 高频易错拼写（首批 20 词） ——
  {
    en: "accommodation",
    ipa: "/əˌkɒməˈdeɪʃn/",
    pos: "n.",
    zh: "住宿；住处",
    example: "The university provides affordable accommodation for overseas students.",
    exampleZh: "这所大学为海外学生提供价格合理的住宿。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "achievement",
    ipa: "/əˈtʃiːvmənt/",
    pos: "n.",
    zh: "成就；成绩",
    example: "Finishing the research project was a major achievement.",
    exampleZh: "完成这个研究项目是一项重大成就。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "advertisement",
    ipa: "/ədˈvɜːtɪsmənt/",
    pos: "n.",
    zh: "广告",
    example: "The advertisement was designed to attract younger consumers.",
    exampleZh: "这则广告旨在吸引更年轻的消费者。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "affect",
    ipa: "/əˈfekt/",
    pos: "v.",
    zh: "影响",
    example: "A lack of sleep can affect academic performance.",
    exampleZh: "睡眠不足会影响学业表现。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "although",
    ipa: "/ɔːlˈðəʊ/",
    pos: "conj.",
    zh: "尽管；虽然",
    example: "Although the scheme is costly, it may bring long-term benefits.",
    exampleZh: "尽管该方案成本高，但它可能带来长期收益。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "available",
    ipa: "/əˈveɪləbl/",
    pos: "adj.",
    zh: "可获得的；可用的",
    example: "Reliable public transport is not available in every rural area.",
    exampleZh: "并非每个农村地区都有可靠的公共交通。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "beneficial",
    ipa: "/ˌbenɪˈfɪʃl/",
    pos: "adj.",
    zh: "有益的",
    example: "Regular exercise is beneficial to both physical and mental health.",
    exampleZh: "经常锻炼对身心健康都有益。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "beginning",
    ipa: "/bɪˈɡɪnɪŋ/",
    pos: "n.",
    zh: "开始；开端",
    example: "The figures rose steadily at the beginning of the period.",
    exampleZh: "在该时期开始时，数据稳步上升。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "believe",
    ipa: "/bɪˈliːv/",
    pos: "v.",
    zh: "相信；认为",
    example: "Many people believe that education should be free.",
    exampleZh: "许多人认为教育应该免费。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "career",
    ipa: "/kəˈrɪə/",
    pos: "n.",
    zh: "职业；事业",
    example: "Young adults often change career paths more than once.",
    exampleZh: "年轻人往往不止一次改变职业道路。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "colleague",
    ipa: "/ˈkɒliːɡ/",
    pos: "n.",
    zh: "同事",
    example: "She discussed the proposal with a colleague.",
    exampleZh: "她和一位同事讨论了这份提案。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "committee",
    ipa: "/kəˈmɪti/",
    pos: "n.",
    zh: "委员会",
    example: "The committee will review the policy next month.",
    exampleZh: "委员会将在下个月审查这项政策。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "comparison",
    ipa: "/kəmˈpærɪsn/",
    pos: "n.",
    zh: "比较；对照",
    example: "The chart allows a clear comparison between the two age groups.",
    exampleZh: "该图表可以清楚比较两个年龄组。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "convenient",
    ipa: "/kənˈviːniənt/",
    pos: "adj.",
    zh: "方便的；便利的",
    example: "Online services are convenient for people who live far from cities.",
    exampleZh: "在线服务对远离城市居住的人很方便。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "development",
    ipa: "/dɪˈveləpmənt/",
    pos: "n.",
    zh: "发展；开发",
    example: "Economic development can create new employment opportunities.",
    exampleZh: "经济发展可以创造新的就业机会。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "difference",
    ipa: "/ˈdɪfrəns/",
    pos: "n.",
    zh: "差异；不同",
    example: "There was a significant difference between the two results.",
    exampleZh: "两个结果之间存在显著差异。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "environment",
    ipa: "/ɪnˈvaɪrənmənt/",
    pos: "n.",
    zh: "环境",
    example: "Public transport can reduce pressure on the environment.",
    exampleZh: "公共交通可以减轻环境压力。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "especially",
    ipa: "/ɪˈspeʃəli/",
    pos: "adv.",
    zh: "尤其；特别",
    example: "The problem is especially serious in large cities.",
    exampleZh: "这个问题在大城市尤其严重。",
    tags: ["day15", "ielts"],
    star: false
  },
  {
    en: "necessary",
    ipa: "/ˈnesəsəri/",
    pos: "adj.",
    zh: "必要的",
    example: "Government support may be necessary during the transition.",
    exampleZh: "在转型期间，政府支持可能是必要的。",
    tags: ["day15", "ielts"],
    star: true
  },
  {
    en: "opportunity",
    ipa: "/ˌɒpəˈtjuːnəti/",
    pos: "n.",
    zh: "机会",
    example: "Volunteering gives students an opportunity to gain practical experience.",
    exampleZh: "志愿服务给学生提供了获得实践经验的机会。",
    tags: ["day15", "ielts"],
    star: true
  },

  // —— Day 16：听读写高频同义替换（首批 20 词/短语） ——
  {
    en: "address",
    ipa: "/əˈdres/",
    pos: "v.",
    zh: "处理；应对（问题）",
    example: "The new policy aims to address the shortage of affordable housing.",
    exampleZh: "新政策旨在解决可负担住房短缺的问题。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "tackle",
    ipa: "/ˈtækl/",
    pos: "v.",
    zh: "处理；应对（难题）",
    example: "Cities must tackle air pollution more effectively.",
    exampleZh: "城市必须更有效地应对空气污染。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "impair",
    ipa: "/ɪmˈpeə/",
    pos: "v.",
    zh: "损害；削弱",
    example: "Excessive noise can impair children's ability to concentrate.",
    exampleZh: "过度噪音会损害儿童的专注能力。",
    tags: ["day16", "ielts"],
    star: false
  },
  {
    en: "undermine",
    ipa: "/ˌʌndəˈmaɪn/",
    pos: "v.",
    zh: "逐渐削弱；损害",
    example: "Misinformation can undermine public trust.",
    exampleZh: "虚假信息会削弱公众信任。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "foster",
    ipa: "/ˈfɒstə/",
    pos: "v.",
    zh: "培养；促进",
    example: "Group projects can foster cooperation among students.",
    exampleZh: "小组项目可以促进学生之间的合作。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "drawback",
    ipa: "/ˈdrɔːbæk/",
    pos: "n.",
    zh: "缺点；不利条件",
    example: "The main drawback of remote work is social isolation.",
    exampleZh: "远程工作的主要缺点是社交隔离。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "crucial",
    ipa: "/ˈkruːʃl/",
    pos: "adj.",
    zh: "至关重要的",
    example: "Parental support is crucial to a child's development.",
    exampleZh: "父母的支持对儿童发展至关重要。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "significant",
    ipa: "/sɪɡˈnɪfɪkənt/",
    pos: "adj.",
    zh: "显著的；重要的",
    example: "There was a significant rise in the number of commuters.",
    exampleZh: "通勤者人数显著上升。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "ensure",
    ipa: "/ɪnˈʃʊə/",
    pos: "v.",
    zh: "确保",
    example: "Clear rules help ensure the safety of all participants.",
    exampleZh: "清晰的规则有助于确保所有参与者的安全。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "preserve",
    ipa: "/prɪˈzɜːv/",
    pos: "v.",
    zh: "保护；保存",
    example: "Local communities are working to preserve historic buildings.",
    exampleZh: "当地社区正在努力保护历史建筑。",
    tags: ["day16", "ielts"],
    star: false
  },
  {
    en: "detrimental",
    ipa: "/ˌdetrɪˈmentl/",
    pos: "adj.",
    zh: "有害的；不利的",
    example: "Long working hours can be detrimental to mental health.",
    exampleZh: "长时间工作可能有害心理健康。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "eliminate",
    ipa: "/ɪˈlɪmɪneɪt/",
    pos: "v.",
    zh: "消除；淘汰",
    example: "The scheme is intended to eliminate unnecessary waste.",
    exampleZh: "该计划旨在消除不必要的浪费。",
    tags: ["day16", "ielts"],
    star: false
  },
  {
    en: "approximately",
    ipa: "/əˈprɒksɪmətli/",
    pos: "adv.",
    zh: "大约",
    example: "Approximately 40 percent of respondents chose public transport.",
    exampleZh: "大约 40% 的受访者选择了公共交通。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "account for",
    ipa: "/əˈkaʊnt fɔː/",
    pos: "phr. v.",
    zh: "占（比例）；解释",
    example: "Online sales accounted for nearly half of the total.",
    exampleZh: "线上销售占总量的近一半。",
    tags: ["day16", "ielts", "phrase"],
    star: true
  },
  {
    en: "constitute",
    ipa: "/ˈkɒnstɪtjuːt/",
    pos: "v.",
    zh: "构成；组成",
    example: "People aged 18 to 25 constitute the largest group.",
    exampleZh: "18 至 25 岁人群构成最大的群体。",
    tags: ["day16", "ielts"],
    star: false
  },
  {
    en: "demonstrate",
    ipa: "/ˈdemənstreɪt/",
    pos: "v.",
    zh: "表明；展示",
    example: "The results demonstrate the importance of early intervention.",
    exampleZh: "结果表明早期干预的重要性。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "remain stable",
    ipa: "/rɪˌmeɪn ˈsteɪbl/",
    pos: "短语",
    zh: "保持稳定",
    example: "The figure remained stable at around 30 percent.",
    exampleZh: "该数值稳定在约 30%。",
    tags: ["day16", "ielts", "phrase"],
    star: true
  },
  {
    en: "sharply",
    ipa: "/ˈʃɑːpli/",
    pos: "adv.",
    zh: "急剧地；显著地",
    example: "The unemployment rate fell sharply after 2015.",
    exampleZh: "2015 年后失业率急剧下降。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "gradually",
    ipa: "/ˈɡrædʒuəli/",
    pos: "adv.",
    zh: "逐渐地",
    example: "The proportion increased gradually over the next decade.",
    exampleZh: "在接下来的十年里，这一比例逐渐上升。",
    tags: ["day16", "ielts"],
    star: true
  },
  {
    en: "result in",
    ipa: "/rɪˈzʌlt ɪn/",
    pos: "短语",
    zh: "导致",
    example: "Poor planning may result in higher costs.",
    exampleZh: "规划不当可能导致更高的成本。",
    tags: ["day16", "ielts", "phrase"],
    star: true
  },

  // BEGIN AUTO WORD ENTRIES
  {
    en: "analyze",
    ipa: "/ˈænəlaiz/",
    pos: "vt.",
    zh: "分析, 分解, 解释",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "establish",
    ipa: "/isˈtæbliʃ/",
    pos: "vt.",
    zh: "建立, 成立安置确定, 证实",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "indicate",
    ipa: "/ˈindikeit/",
    pos: "vt.",
    zh: "标示, 指示, 指出象征; 表明或暗示…的可能性",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "occur",
    ipa: "/əˈkə:/",
    pos: "vi.",
    zh: "发生; 举行; 存在被发现; 想到[起]",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "role",
    ipa: "/rəul/",
    pos: "n.",
    zh: "作用, 职责角色",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "approach",
    ipa: "/əˈprəutʃ/",
    pos: "n.",
    zh: "靠近, 接近, 临近通路, 入口, 途径方式, 方法",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "context",
    ipa: "/ˈkɔntekst/",
    pos: "n.",
    zh: "背景, 环境上下文, 语境",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "estimate",
    ipa: "/ˈestimeit/",
    pos: "n.",
    zh: "估计, 估价报价判断",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "individual",
    ipa: "/ˌɪndiˈvidjuəl/",
    pos: "adj.",
    zh: "个别的, 单独的, 个人的独特的",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "percent",
    ipa: "/pəˈsent/",
    pos: "n.",
    zh: "百分比,百分数",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "section",
    ipa: "/ˈsekʃən/",
    pos: "n.",
    zh: "章节部分部门, 科截面, 剖面地区, 区",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "area",
    ipa: "/ˈɛəriə/",
    pos: "n.",
    zh: "面积区域, 地区领域, 方面",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "contract",
    ipa: "/kənˈtrækt/",
    pos: "n.",
    zh: "契约, 合同",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "evident",
    ipa: "/ˈevidənt/",
    pos: "adj.",
    zh: "明显的, 明白的",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "interpret",
    ipa: "/inˈtə:prit/",
    pos: "vt.",
    zh: "解释; 说明",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "period",
    ipa: "/ˈpiəriəd/",
    pos: "n.",
    zh: "一段)时间时期, 时代学时, 课时句号, 句点",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "sector",
    ipa: "/ˈsektə/",
    pos: "n.",
    zh: "部门; 领域防御地区, 防卫区域扇形, 扇形面",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "assess",
    ipa: "/əˈses/",
    pos: "vt.",
    zh: "估价, 估计评定, 核定",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "create",
    ipa: "/kriˈeit/",
    pos: "vt.",
    zh: "创造, 创作, 创建引起, 产生",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "export",
    ipa: "/eksˈpɔ:t/",
    pos: "n.",
    zh: "输出, 出口输出[出口]物",
    tags: ["day17", "ielts", "awl"],
    star: false
  },
  {
    en: "involve",
    ipa: "/inˈvɔlv/",
    pos: "vt.",
    zh: "使某事物成为必要条件或结果; 需要使参与, 牵涉",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "policy",
    ipa: "/ˈpɔləsi/",
    pos: "n.",
    zh: "政策, 方针策略, 精明的行为, 上策保险单",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "assume",
    ipa: "/əˈsju:m/",
    pos: "vt.",
    zh: "假设, 臆断, 猜想假装承担, 担任, 就职呈现, 采取",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "data",
    ipa: "/ˈdeitə/",
    pos: "n.",
    zh: "资料, 材料",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "factor",
    ipa: "/ˈfæktə/",
    pos: "n.",
    zh: "因素, 要素因子, 因数",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "issue",
    ipa: "/ˈisju:/",
    pos: "n.",
    zh: "问题, 议题; 争论点发行物放出, 流出; 发出, 发行结果, 结",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "principle",
    ipa: "/ˈprinsəpl/",
    pos: "n.",
    zh: "原则, 原理准则, 规范操守, 道义工作原理",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "similar",
    ipa: "/ˈsimilə/",
    pos: "adj.",
    zh: "类似的; 同类的; 相似的; 同样的",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "authority",
    ipa: "/ɔ:ˈθɔriti/",
    pos: "n.",
    zh: "权力, 职权官方, 当局权威, 专家",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "define",
    ipa: "/diˈfain/",
    pos: "vt.",
    zh: "精确地解释; 界定规定, 确定",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "finance",
    ipa: "/faiˈnæns/",
    pos: "n.",
    zh: "财政, 金融财源, 资金, 财务情况",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "labour",
    ipa: "/ˈleibə/",
    pos: "n.",
    zh: "劳动, 努力; 工作劳工, 工人分娩, (分娩时的)阵痛",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "proceed",
    ipa: "/prəˈsi:d/",
    pos: "vi.",
    zh: "前进; 行进进行; 继续下去",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "source",
    ipa: "/sɔ:s/",
    pos: "n.",
    zh: "河流的源头, 发源地来源, 出处原因提供资料者, 资料来源",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "derive",
    ipa: "/diˈraiv/",
    pos: "vt. & vi.",
    zh: "得到源于",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "formula",
    ipa: "/ˈfɔ:mjulə/",
    pos: "n.",
    zh: "准则, 原则公式, 方程式配方",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "legal",
    ipa: "/ˈli:ɡəl/",
    pos: "adj.",
    zh: "法律上的; 合法的; 法定的",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "specific",
    ipa: "/spiˈsifik/",
    pos: "adj.",
    zh: "明确的, 确切的, 详尽的具体的, 特有的, 特定的仅限于…",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "benefit",
    ipa: "/ˈbenifit/",
    pos: "n.",
    zh: "益处, 好处救济金, 保险金",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "distribute",
    ipa: "/disˈtribju:t/",
    pos: "vt.",
    zh: "分配, 分给散发; 散播; 分布",
    tags: ["day18", "ielts", "awl"],
    star: false
  },
  {
    en: "function",
    ipa: "/ˈfʌŋkʃən/",
    pos: "n.",
    zh: "功能; 作用; 职责函数; 与另一事物有密切关系的事物社交",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "legislate",
    ipa: "/ˈledʒisleit/",
    pos: "vt. & vi.",
    zh: "立法; 制定法律",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "require",
    ipa: "/riˈkwaiə/",
    pos: "vt.",
    zh: "有赖于…; 需要命令, 指示要求, 规定想要",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "structure",
    ipa: "/ˈstrʌktʃə/",
    pos: "n.",
    zh: "结构, 构造有结构的事物; 复杂的整体; 建筑物",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "concept",
    ipa: "/ˈkɔnsept/",
    pos: "n.",
    zh: "概念; 观念; 想法",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "economy",
    ipa: "/iˈkɔnəmi/",
    pos: "n.",
    zh: "节约, 节省经济体制, 经济状况",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "identify",
    ipa: "/aiˈdentifai/",
    pos: "vt.",
    zh: "认出, 识别支持, 同情",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "major",
    ipa: "/ˈmeidʒə/",
    pos: "adj.",
    zh: "较大的; 主要的; 严重的",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "research",
    ipa: "/riˈsə:tʃ/",
    pos: "n.",
    zh: "研究; 探讨",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "theory",
    ipa: "/ˈθiəri/",
    pos: "n.",
    zh: "学说理论, 原理意见, 看法",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "consist",
    ipa: "/kənˈsist/",
    pos: "vi.",
    zh: "组成, 构成在于, 存在于",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "income",
    ipa: "/ˈinkəm/",
    pos: "n.",
    zh: "收入, 所得, 收益",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "method",
    ipa: "/ˈmeθəd/",
    pos: "n.",
    zh: "方法, 办法秩序, 条理",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "respond",
    ipa: "/riˈspɔnd/",
    pos: "vi.",
    zh: "有反应; 有效果; 有影响",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "vary",
    ipa: "/ˈvɛəri/",
    pos: "vi.",
    zh: "呈现不同",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "achieve",
    ipa: "/əˈtʃi:v/",
    pos: "vt.",
    zh: "取得, 获得实现, 达到, 完成",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "community",
    ipa: "/kəˈmju:niti/",
    pos: "n.",
    zh: "社区, 社会, 团体大众, 公众共有, 共享",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "design",
    ipa: "/diˈzain/",
    pos: "n.",
    zh: "图样, 设计图设计, 布局目的, 打算",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "institute",
    ipa: "/ˈinstitju:t/",
    pos: "n.",
    zh: "协会, 学会; 学院, 研究院",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "acquire",
    ipa: "/əˈkwaiə/",
    pos: "vt.",
    zh: "获得, 得到, 养成",
    tags: ["day19", "ielts", "awl"],
    star: false
  },
  {
    en: "complex",
    ipa: "/ˈkɔmpleks/",
    pos: "adj.",
    zh: "由许多部分组成的, 复合的复杂的, 难懂的",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "distinct",
    ipa: "/disˈtiŋkt/",
    pos: "adj.",
    zh: "截然不同的, 完全分开的清晰的, 明白的, 明显的",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "invest",
    ipa: "/inˈvest/",
    pos: "vt.",
    zh: "授予",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "previous",
    ipa: "/ˈpri:viəs/",
    pos: "adj.",
    zh: "先前的, 以前的过早的, 过急的",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "secure",
    ipa: "/siˈkjuə/",
    pos: "adj.",
    zh: "牢固的; 可靠的有把握的; 确切的",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "administer",
    ipa: "/ədˈministə/",
    pos: "vt.",
    zh: "管理, 支配给予执行, 实施",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "compute",
    ipa: "/kəmˈpju:t/",
    pos: "vt.",
    zh: "计算, 估算",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "element",
    ipa: "/ˈelimənt/",
    pos: "n.",
    zh: "化学)元素成分, 要素, 原件一伙人基础, 纲要, 原理",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "item",
    ipa: "/ˈaitəm/",
    pos: "n.",
    zh: "一项, 一件, 一条; 项目",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "primary",
    ipa: "/ˈpraiməri/",
    pos: "adj.",
    zh: "首要的; 主要的; 基本的最初的; 初级的",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "seek",
    ipa: "/si:k/",
    pos: "vi.",
    zh: "企图; 试图",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "conclude",
    ipa: "/kənˈklu:d/",
    pos: "vt.",
    zh: "得出结论; 断定决定",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "equate",
    ipa: "/iˈkweit/",
    pos: "vt.",
    zh: "认为某事物(与另一事物)相等或相仿",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "journal",
    ipa: "/ˈdʒə:nl/",
    pos: "n.",
    zh: "杂志, 期刊日志, 日记",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "purchase",
    ipa: "/ˈpə:tʃəs/",
    pos: "n.",
    zh: "购买, 购置买到的东西",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "select",
    ipa: "/siˈlekt/",
    pos: "adj.",
    zh: "精选的, 挑选出来的限制性的, 选择严格的",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "appropriate",
    ipa: "/əˈprəupriit/",
    pos: "adj.",
    zh: "适当的, 恰当的",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "conduct",
    ipa: "/kənˈdʌkt/",
    pos: "n.",
    zh: "举止, 行为管理(方式), 实施(方式)",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "evaluate",
    ipa: "/iˈvæljueit/",
    pos: "vt.",
    zh: "评价, 估计, 估价",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "maintain",
    ipa: "/meinˈtein/",
    pos: "vt.",
    zh: "保持; 继续保养, 维护坚持; 主张供给; 赡养",
    tags: ["day20", "ielts", "awl"],
    star: false
  },
  {
    en: "range",
    ipa: "/reindʒ/",
    pos: "n.",
    zh: "一系列变化幅度, 范围射程, 距离(山)脉",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "site",
    ipa: "/sait/",
    pos: "n.",
    zh: "位置, 场所, 地点",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "aspect",
    ipa: "/ˈæspekt/",
    pos: "n.",
    zh: "方面方位, 朝向面貌, 模样, 神态",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "consequent",
    ipa: "/ˈkɔnsikwənt/",
    pos: "adj.",
    zh: "作为结果的, 随之发生的",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "feature",
    ipa: "/ˈfi:tʃə/",
    pos: "n.",
    zh: "特征, 特色面貌, 相貌特写, 专题节目(电影的)正片, 故事片",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "normal",
    ipa: "/ˈnɔ:məl/",
    pos: "adj.",
    zh: "正常的, 平常的正规的; 标准的",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "region",
    ipa: "/ˈri:dʒən/",
    pos: "n.",
    zh: "地区; 地带; 区域; 范围",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "strategy",
    ipa: "/ˈstrætidʒi/",
    pos: "n.",
    zh: "战略学, 兵法战略, 策略策略, 计谋",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "assist",
    ipa: "/əˈsist/",
    pos: "vt. & vi.",
    zh: "帮助, 促进",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "construct",
    ipa: "/kənˈstrʌkt/",
    pos: "vt.",
    zh: "修建, 建立构成, 组成",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "final",
    ipa: "/ˈfainəl/",
    pos: "adj.",
    zh: "最后的, 最终的决定性的, 确定性的",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "obtain",
    ipa: "/əbˈtein/",
    pos: "vi.",
    zh: "通行; 流行",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "regulate",
    ipa: "/ˈreɡjuleit/",
    pos: "vt.",
    zh: "控制, 管理调整; 调节",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "survey",
    ipa: "/səˈvei/",
    pos: "n.",
    zh: "调查",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "category",
    ipa: "/ˈkætiɡəri/",
    pos: "n.",
    zh: "种类, 类别",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "consume",
    ipa: "/kənˈsju:m/",
    pos: "vt.",
    zh: "消耗, 消费, 耗尽大吃, 大喝烧毁, 毁灭",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "participate",
    ipa: "/pɑ:ˈtisipeit/",
    pos: "vt. & vi.",
    zh: "参加, 参与",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "relevant",
    ipa: "/ˈreləvənt/",
    pos: "adj.",
    zh: "有关的, 切题的",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "text",
    ipa: "/tekst/",
    pos: "n.",
    zh: "正文, 本文原文, 全文教科书, 课本",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "chapter",
    ipa: "/ˈtʃæptə/",
    pos: "n.",
    zh: "章, 回, 篇",
    tags: ["day21", "ielts", "awl"],
    star: false
  },
  {
    en: "credit",
    ipa: "/ˈkredit/",
    pos: "n.",
    zh: "赊购; 赊购制度存款; 存款数额借款; 贷款赞扬, 荣誉, 功劳信",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "impact",
    ipa: "/ˈimpækt/",
    pos: "n.",
    zh: "影响, 作用冲击(力), 碰撞",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "perceive",
    ipa: "/pəˈsi:v/",
    pos: "vt.",
    zh: "感觉, 察觉, 理解",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "reside",
    ipa: "/riˈzaid/",
    pos: "vi.",
    zh: "居住; 定居",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "tradition",
    ipa: "/trəˈdiʃən/",
    pos: "n.",
    zh: "传统惯例",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "commission",
    ipa: "/kəˈmiʃən/",
    pos: "n.",
    zh: "授权, 委托委员会佣金, 回扣",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "culture",
    ipa: "/ˈkʌltʃə/",
    pos: "n.",
    zh: "文化休养, 教养, 精神文明养殖, 培养, 栽培",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "injure",
    ipa: "/ˈindʒə/",
    pos: "vt.",
    zh: "伤害, 损害",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "positive",
    ipa: "/ˈpɔzitiv/",
    pos: "adj.",
    zh: "确实的, 明确的积极的; 肯定的表现得有信心和有希望的",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "resource",
    ipa: "/riˈsɔ:s/",
    pos: "n.",
    zh: "资源(必要时可给予)帮助、支持或安慰的事物才智; 机敏; 创",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "transfer",
    ipa: "/trænsˈfə:/",
    pos: "n.",
    zh: "转移; 转让; 转录中转, 换乘, 改变路线",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "convene",
    ipa: "/kənˈvi:n/",
    pos: "vt. & vi.",
    zh: "召开, 召集",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "emphasis",
    ipa: "/ˈemfəsis/",
    pos: "n.",
    zh: "强调, 重点",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "interact",
    ipa: "/ˌɪntərˈækt/",
    pos: "vi.",
    zh: "相互作用[影响], 互相配合",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "philosophy",
    ipa: "/fiˈlɔsəfi/",
    pos: "n.",
    zh: "哲学人生哲学, 人生观达观",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "sex",
    ipa: "/seks/",
    pos: "n.",
    zh: "性别; 性男性; 女性性关系性活动, 性行为",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "circumstance",
    ipa: "/ˈsə:kəmstəns/",
    pos: "n.",
    zh: "环境, 条件, 情况境遇, 经济状况",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "coordinate",
    ipa: "/kəuˈɔ:dineit/",
    pos: "adj.",
    zh: "同等的, 并列的",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "physical",
    ipa: "/ˈfizikəl/",
    pos: "adj.",
    zh: "身体的, 肉体的物质的自然规律的, 按自然法则的自然(界)",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "comment",
    ipa: "/ˈkɔment/",
    pos: "n.",
    zh: "评论, 意见, 解释, 批评",
    tags: ["day22", "ielts", "awl"],
    star: false
  },
  {
    en: "core",
    ipa: "/kɔ:/",
    pos: "n.",
    zh: "果核核心, 精髓, 要点",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "exclude",
    ipa: "/iksˈklu:d/",
    pos: "vt.",
    zh: "排除; 不包括在内",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "layer",
    ipa: "/ˈleiə/",
    pos: "n.",
    zh: "层, 层次",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "specify",
    ipa: "/ˈspesifai/",
    pos: "vt.",
    zh: "详述指定",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "compensate",
    ipa: "/ˈkɔmpenseit/",
    pos: "vt. & vi.",
    zh: "补偿, 报酬",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "corporate",
    ipa: "/ˈkɔ:pərit/",
    pos: "adj.",
    zh: "社团的, 法人的",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "framework",
    ipa: "/ˈfreimwə:k/",
    pos: "n.",
    zh: "构架; 结构",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "link",
    ipa: "/liŋk/",
    pos: "n.",
    zh: "环, 联系, 纽带",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "publish",
    ipa: "/ˈpʌbliʃ/",
    pos: "vt. & vi.",
    zh: "出版公布",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "sufficient",
    ipa: "/səˈfiʃənt/",
    pos: "adj.",
    zh: "足够的; 充足的",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "component",
    ipa: "/kəmˈpəunənt/",
    pos: "n.",
    zh: "成分, 组成部分, 部件, 元件",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "correspond",
    ipa: "/ˌkɔrisˈpɔnd/",
    pos: "vi.",
    zh: "相符合, 相一致相当, 相类似通信",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "fund",
    ipa: "/fʌnd/",
    pos: "n.",
    zh: "基金, 专款现款; 资金储备, 蕴藏",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "locate",
    ipa: "/ləuˈkeit/",
    pos: "vt.",
    zh: "找出, 指出(地点或位置)",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "react",
    ipa: "/riˈækt/",
    pos: "vi.",
    zh: "起反应; 有影响反对; 对抗",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "task",
    ipa: "/tɑ:sk/",
    pos: "n.",
    zh: "工作; 任务; 差事",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "consent",
    ipa: "/kənˈsent/",
    pos: "n.",
    zh: "准许, 同意, 赞成",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "criteria",
    ipa: "/kraɪˈtɪərɪə/",
    pos: "n.",
    zh: "标准",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "illustrate",
    ipa: "/ˈiləstreit/",
    pos: "vt.",
    zh: "给…加插图说明, 阐明; 表明",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "maximise",
    ipa: "/ˈmæksimaiz/",
    pos: "vt.",
    zh: "使(某事物)增至最大限度最大限度地利用(某事物)",
    tags: ["day23", "ielts", "awl"],
    star: false
  },
  {
    en: "register",
    ipa: "/ˈredʒistə/",
    pos: "n.",
    zh: "登记(表), 注册(簿)记录器暖气, 调风器",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "technical",
    ipa: "/ˈteknikəl/",
    pos: "adj.",
    zh: "技术的; 应用科学的艺术的, 工艺的(指书等)要求有专",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "considerable",
    ipa: "/kənˈsidərəbl/",
    pos: "adj.",
    zh: "相当大(或多)的",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "deduce",
    ipa: "/diˈdju:s/",
    pos: "vt.",
    zh: "推论, 演绎",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "immigrate",
    ipa: "/ˈimiɡreit/",
    pos: "vi.",
    zh: "移入",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "minor",
    ipa: "/ˈmainə/",
    pos: "adj.",
    zh: "较小的, 较少的, 低级的, 次要的",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "rely",
    ipa: "/riˈlai/",
    pos: "vi.",
    zh: "信任; 信赖; 依赖, 依靠",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "technique",
    ipa: "/tekˈni:k/",
    pos: "n.",
    zh: "技巧, 手法, 技术技能",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "constant",
    ipa: "/ˈkɔnstənt/",
    pos: "adj.",
    zh: "始终如一的, 恒久不变的不断的, 连续发生的忠实的",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "imply",
    ipa: "/imˈplai/",
    pos: "vt.",
    zh: "暗示, 暗指必然包含",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "negate",
    ipa: "/niˈɡeit/",
    pos: "vt.",
    zh: "取消, 使无效否定; 否认",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "remove",
    ipa: "/riˈmu:v/",
    pos: "vi.",
    zh: "迁移; 移居",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "technology",
    ipa: "/tekˈnɔlədʒi/",
    pos: "n.",
    zh: "科技(总称); 工艺; 应用科学工业技术",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "constrain",
    ipa: "/kənˈstrein/",
    pos: "vt.",
    zh: "强迫, 强使; 限制, 约束",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "document",
    ipa: "/ˈdɔkjumənt/",
    pos: "n.",
    zh: "公文, 文件, 文献",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "initial",
    ipa: "/iˈniʃəl/",
    pos: "adj.",
    zh: "最初的, 开头的",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "outcome",
    ipa: "/ˈautkʌm/",
    pos: "n.",
    zh: "结果",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "scheme",
    ipa: "/ski:m/",
    pos: "n.",
    zh: "阴谋, 诡计计划, 方案",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "valid",
    ipa: "/ˈvælid/",
    pos: "adj.",
    zh: "正当的, 有充分根据的, 符合逻辑的有效的有法律效力的",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "contribute",
    ipa: "/kənˈtribjut/",
    pos: "vi.",
    zh: "起促成作用",
    tags: ["day24", "ielts", "awl"],
    star: false
  },
  {
    en: "instance",
    ipa: "/ˈinstəns/",
    pos: "n.",
    zh: "例子, 实例",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "partner",
    ipa: "/ˈpɑ:tnə/",
    pos: "n.",
    zh: "伙伴, 同伙, 合伙人, 股东同伴, 搭档配偶, 情人",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "sequence",
    ipa: "/ˈsi:kwəns/",
    pos: "n.",
    zh: "有关联的一组事物, 一连串先后次序, 顺序, 连续",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "volume",
    ipa: "/ˈvɔlju:m/",
    pos: "n.",
    zh: "卷, 册, 书卷体积; 容积, 容量音量, 响度",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "communicate",
    ipa: "/kəˈmju:nikeit/",
    pos: "vi.",
    zh: "通讯; 交际, 交流相连; 相通",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "error",
    ipa: "/ˈerə/",
    pos: "n.",
    zh: "错误过失, 失误",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "internal",
    ipa: "/inˈtə:nəl/",
    pos: "adj.",
    zh: "内部的国内的, 内政的体内的",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "parallel",
    ipa: "/ˈpærəlel/",
    pos: "adj.",
    zh: "指至少两条线)平行的类似的; 相对应的",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "resolve",
    ipa: "/riˈzɔlv/",
    pos: "vt.",
    zh: "指委员会或集会)表决解决(问题、疑问等)分解, 解析(某物)",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "adequate",
    ipa: "/ˈædikwit/",
    pos: "adj.",
    zh: "充分的, 足够的适当的, 胜任的",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "concentrate",
    ipa: "/ˈkɔnsəntreit/",
    pos: "vt.",
    zh: "浓缩",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "ethnic",
    ipa: "/ˈeθnik/",
    pos: "adj.",
    zh: "种族的, 部落的某文化群体的",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "investigate",
    ipa: "/inˈvestiɡeit/",
    pos: "vt.",
    zh: "调查; 审查",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "parameter",
    ipa: "/pəˈræmitə/",
    pos: "n.",
    zh: "限定性的)因素, 特性, 界限 参量, 参数",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "annual",
    ipa: "/ˈænjuəl/",
    pos: "adj.",
    zh: "每年的, 年度的, 一年一次的",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "confer",
    ipa: "/kənˈfə:/",
    pos: "vi.",
    zh: "商谈, 商议",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "goal",
    ipa: "/ɡəul/",
    pos: "n.",
    zh: "球门进球得的分努力的对象, 目标",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "job",
    ipa: "/dʒɔb/",
    pos: "n.",
    zh: "职业, 职位(一件)工作职责, 责任",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "phase",
    ipa: "/feiz/",
    pos: "n.",
    zh: "阶段, 时期(月亮、行星的)位相",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "series",
    ipa: "/ˈsiəri:z/",
    pos: "n.",
    zh: "连续的同类事物, 系列串联",
    tags: ["day25", "ielts", "awl"],
    star: false
  },
  {
    en: "apparent",
    ipa: "/əˈpærənt/",
    pos: "adj.",
    zh: "显然的, 明白的, 清晰可见的表面上的, 貌似(真实)的",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "contrast",
    ipa: "/ˈkɔntræst/",
    pos: "n.",
    zh: "对比, 对照差异, 差别对照物, 明显的对比物",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "grant",
    ipa: "/ɡrɑ:nt/",
    pos: "n.",
    zh: "补助金, 助学金, 津贴",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "label",
    ipa: "/ˈleibəl/",
    pos: "n.",
    zh: "标签, 标记称号; 符号; 标示",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "predict",
    ipa: "/priˈdikt/",
    pos: "vt. & vi.",
    zh: "预言; 预测; 预示",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "statistic",
    ipa: "/stəˈtistik/",
    pos: "adj.",
    zh: "统计的,统计学的",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "approximate",
    ipa: "/əˈprɔksimit/",
    pos: "adj.",
    zh: "近似的, 大约的",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "cycle",
    ipa: "/ˈsaikl/",
    pos: "n.",
    zh: "循环, 周期自行车, 摩托车",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "hence",
    ipa: "/hens/",
    pos: "adv.",
    zh: "从此时起, 从此处因此, 所以",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "mechanism",
    ipa: "/ˈmekənizəm/",
    pos: "n.",
    zh: "机械装置构造, 机制办法, 技巧, 途径",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "principal",
    ipa: "/ˈprinsəpəl/",
    pos: "adj.",
    zh: "最重要的; 主要的",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "status",
    ipa: "/ˈsteitəs/",
    pos: "n.",
    zh: "身份, 地位情形, 状况",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "attitude",
    ipa: "/ˈætitju:d/",
    pos: "n.",
    zh: "态度, 看法姿态, 姿势",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "debate",
    ipa: "/diˈbeit/",
    pos: "n.",
    zh: "讨论, 辩论",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "hypothesis",
    ipa: "/haiˈpɔθisis/",
    pos: "n.",
    zh: "假说, 假设, 前提",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "obvious",
    ipa: "/ˈɔbviəs/",
    pos: "adj.",
    zh: "明显的; 显而易见的",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "prior",
    ipa: "/ˈpraiə/",
    pos: "adj.",
    zh: "优先的; 在前的; 较早的",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "stress",
    ipa: "/stres/",
    pos: "n.",
    zh: "压力, 紧张强调, 重要性重力重音",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "attribute",
    ipa: "/əˈtribju:t/",
    pos: "n.",
    zh: "属性, 特性",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "despite",
    ipa: "/disˈpait/",
    pos: "prep.",
    zh: "不管, 尽管",
    tags: ["day26", "ielts", "awl"],
    star: false
  },
  {
    en: "implement",
    ipa: "/ˈimplimənt/",
    pos: "n.",
    zh: "工具, 器具, 用具",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "occupy",
    ipa: "/ˈɔkjupai/",
    pos: "vt.",
    zh: "占领; 占有使从事; 使忙于",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "professional",
    ipa: "/prəˈfeʃənəl/",
    pos: "adj.",
    zh: "职业的, 专业的内行的, 有经验的有意的, 故意的",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "subsequent",
    ipa: "/ˈsʌbsikwənt/",
    pos: "adj.",
    zh: "随后的, 继…之后的",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "civil",
    ipa: "/ˈsivl/",
    pos: "adj.",
    zh: "公民的, 平民的; 非军职的, 非宗教的; 国民间的, 民用的民事的",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "dimension",
    ipa: "/diˈmenʃən/",
    pos: "n.",
    zh: "尺寸, 度量方面, 部分规模, 程度",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "implicate",
    ipa: "/ˈimplikeit/",
    pos: "vt.",
    zh: "牵连, 涉及",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "option",
    ipa: "/ˈɔpʃən/",
    pos: "n.",
    zh: "选择(的自由)可选择的办法附件, 配件买卖选择权, 期权",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "project",
    ipa: "/prəˈdʒekt/",
    pos: "n.",
    zh: "项目, 计划, 方案, 课题",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "sum",
    ipa: "/sʌm/",
    pos: "n.",
    zh: "总数, 总和金额算术",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "code",
    ipa: "/kəud/",
    pos: "n.",
    zh: "法典, 法规, 章程密码, 电码代号, 编码",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "domestic",
    ipa: "/dəˈmestik/",
    pos: "adj.",
    zh: "本国的, 国内的家庭的, 家用的驯养的",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "impose",
    ipa: "/imˈpəuz/",
    pos: "vi.",
    zh: "利用, 占便宜; 欺骗",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "output",
    ipa: "/ˈautput/",
    pos: "n.",
    zh: "产量输出, 输出功率",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "promote",
    ipa: "/prəˈməut/",
    pos: "vt.",
    zh: "提升, 提拔筹划, 发起, 创立推销促进; 推动; 增",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "summary",
    ipa: "/ˈsʌməri/",
    pos: "adj.",
    zh: "即刻的, 立即的匆忙的, 草率的概括的; 简要的",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "commit",
    ipa: "/kəˈmit/",
    pos: "vt.",
    zh: "犯罪; 犯错承诺; 使自己受约束托付; 交付",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "emerge",
    ipa: "/iˈmə:dʒ/",
    pos: "vi.",
    zh: "出现; 显出; 暴露",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "integrate",
    ipa: "/ˈintiɡreit/",
    pos: "vt.",
    zh: "使结合成为整体",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "overall",
    ipa: "/ˈəuvərɔ:l/",
    pos: "adj.",
    zh: "总体的; 全面的; 综合的全面考虑的",
    tags: ["day27", "ielts", "awl"],
    star: false
  },
  {
    en: "regime",
    ipa: "/reiˈʒi:m/",
    pos: "n.",
    zh: "政治制度, 政权, 政体",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "undertake",
    ipa: "/ˌʌndəˈteik/",
    pos: "vt.",
    zh: "担任, 承揽; 保证着手, 开始",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "consult",
    ipa: "/kənˈsʌlt/",
    pos: "vt.",
    zh: "请教, 咨询; 找(医生)诊治翻阅, 查阅顾及, 考虑",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "licence",
    ipa: "/ˈlaisəns/",
    pos: "n.",
    zh: "许可证, 执照许可, 特许放纵, 放肆",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "orient",
    ipa: "/ˈɔ:riənt/",
    pos: "n.",
    zh: "东方, 亚洲",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "style",
    ipa: "/stail/",
    pos: "n.",
    zh: "风格, 格调; 文体行为方式, 作风种类, 类型; 流行式样; 款式风度",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "adjust",
    ipa: "/əˈdʒʌst/",
    pos: "vt. & vi.",
    zh: "改变…以)适应; 调整; 校正",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "contact",
    ipa: "/ˈkɔntækt/",
    pos: "n.",
    zh: "接触联系, 联络, 交往社会关系, 熟人, 门路触点, 接头",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "expand",
    ipa: "/iksˈpænd/",
    pos: "vt. & vi.",
    zh: "使…变大, 扩大, 扩张伸展, 伸开, 张开, 展开",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "logic",
    ipa: "/ˈlɔdʒik/",
    pos: "n.",
    zh: "逻辑(学), 逻辑性推理方法合理的想法",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "perspective",
    ipa: "/pəˈspektiv/",
    pos: "n.",
    zh: "远景, 景前途; 希望透视透视图观点, 想法",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "substitute",
    ipa: "/ˈsʌbstitju:t/",
    pos: "vt. & vi.",
    zh: "代替, 替换, 代用",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "alter",
    ipa: "/ˈɔ:ltə/",
    pos: "vt. & vi.",
    zh: "改变, 更改",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "decline",
    ipa: "/diˈklain/",
    pos: "n.",
    zh: "下降, 减少, 衰退",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "expose",
    ipa: "/iksˈpəuz/",
    pos: "vt.",
    zh: "曝光暴露; 显露揭露, 袒露",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "precise",
    ipa: "/priˈsais/",
    pos: "adj.",
    zh: "精确的, 准确的恰好的; 正是的周密的, 细密的, 精细的",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "sustain",
    ipa: "/səˈstein/",
    pos: "vt.",
    zh: "承受, 支撑维持长期保持; 使继续经受, 遭受",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "amend",
    ipa: "/əˈmend/",
    pos: "vt. & vi.",
    zh: "改良; 修改, 修订",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "discrete",
    ipa: "/disˈkri:t/",
    pos: "adj.",
    zh: "分离的, 不相关联的",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "external",
    ipa: "/eksˈtə:nl/",
    pos: "adj.",
    zh: "外面的, 外部的外观的, 表面的外国的",
    tags: ["day28", "ielts", "awl"],
    star: false
  },
  {
    en: "medical",
    ipa: "/ˈmedikəl/",
    pos: "adj.",
    zh: "医学的, 医疗的, 医术的内科的",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "prime",
    ipa: "/praim/",
    pos: "adj.",
    zh: "首要的; 主要的; 基本的最好的, 第一流的",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "aware",
    ipa: "/əˈwɛə/",
    pos: "adj.",
    zh: "意识到的, 知道的",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "draft",
    ipa: "/drɑ:ft/",
    pos: "n.",
    zh: "草稿, 草案, 草图汇票应召入伍者; 特遣队",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "facilitate",
    ipa: "/fəˈsiliteit/",
    pos: "vt.",
    zh: "使便利, 减轻…的困难",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "mental",
    ipa: "/ˈmentl/",
    pos: "adj.",
    zh: "精神的, 头脑的, 心理的, 智力的精神病的",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "target",
    ipa: "/ˈtɑ:ɡit/",
    pos: "n.",
    zh: "射击的)靶子(欲达到的)目[指]标(服务的)对象; (攻击的)对象",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "capacity",
    ipa: "/kəˈpæsiti/",
    pos: "n.",
    zh: "容量, 容积才能, 能力身份, 职位",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "fundamental",
    ipa: "/ˌfʌndəˈmentəl/",
    pos: "adj.",
    zh: "基本的; 重要的, 必要的",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "modify",
    ipa: "/ˈmɔdifai/",
    pos: "vt.",
    zh: "修饰",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "pursue",
    ipa: "/pəˈsju:/",
    pos: "vt.",
    zh: "追捕, 追击追求继续; 从事, 经营",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "transit",
    ipa: "/ˈtrænsit/",
    pos: "n.",
    zh: "搬运; 载运; 运输",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "challenge",
    ipa: "/ˈtʃælindʒ/",
    pos: "n.",
    zh: "挑战, 邀请比赛怀疑, 质问艰巨的任务",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "energy",
    ipa: "/ˈenədʒi/",
    pos: "n.",
    zh: "活力, 干劲, 能力精力能, 能量, 能源",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "generate",
    ipa: "/ˈdʒenəreit/",
    pos: "vt.",
    zh: "生成, 产生引起, 导致",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "monitor",
    ipa: "/ˈmɔnitə/",
    pos: "n.",
    zh: "监视器, 监听器; 检测器(学校)班长; 纠察员",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "ratio",
    ipa: "/ˈreiʃiəu/",
    pos: "n.",
    zh: "比, 比率",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "trend",
    ipa: "/trend/",
    pos: "n.",
    zh: "趋势, 倾向流行",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "clause",
    ipa: "/klɔ:z/",
    pos: "n.",
    zh: "从句(法律文件等的)条款",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "enforce",
    ipa: "/inˈfɔ:s/",
    pos: "vt.",
    zh: "实施, 执行强迫, 迫使",
    tags: ["day29", "ielts", "awl"],
    star: false
  },
  {
    en: "generation",
    ipa: "/ˌdʒenəˈreiʃən/",
    pos: "n.",
    zh: "同时代的人, 一代人, 一代产生, 发生",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "network",
    ipa: "/ˈnetwə:k/",
    pos: "n.",
    zh: "网状物(电视与计算机)网络, 网状系统广播网, 电视网",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "reject",
    ipa: "/riˈdʒekt/",
    pos: "n.",
    zh: "被拒货品, 不合格产品",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "version",
    ipa: "/ˈvə:ʃən/",
    pos: "n.",
    zh: "个人对事件的)描述, 说法, 看法版本, 形式译本, 剧本",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "compound",
    ipa: "/ˈkɔmpaund/",
    pos: "n.",
    zh: "复合物, 化合物(筑有围墙的)院子, (围起来的)场地",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "entity",
    ipa: "/ˈentiti/",
    pos: "n.",
    zh: "实体, 独立存在体, 实际存在物",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "image",
    ipa: "/ˈimidʒ/",
    pos: "n.",
    zh: "形象, 概念镜像, 影像, 图像印象酷似的人[物], 翻版比喻, 引",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "notion",
    ipa: "/ˈnəuʃən/",
    pos: "n.",
    zh: "概念, 观念, 看法突然的念头, 奇想; 意图, 打算",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "revenue",
    ipa: "/ˈrevənju:/",
    pos: "n.",
    zh: "收入, 收益; 财政收入, 税收",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "welfare",
    ipa: "/ˈwelfɛə/",
    pos: "n.",
    zh: "健康, 幸福, 繁荣福利政府的福利(制度)",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "conflict",
    ipa: "/ˈkɔnflikt/",
    pos: "n.",
    zh: "战斗, 斗争冲突, 抵触, 争论",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "equivalent",
    ipa: "/iˈkwivələnt/",
    pos: "adj.",
    zh: "相等的, 相当的",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "liberal",
    ipa: "/ˈlibərəl/",
    pos: "adj.",
    zh: "心胸宽阔的, 无偏见的慷慨的, 大方的开放的; 主张变革的自",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "objective",
    ipa: "/əbˈdʒektiv/",
    pos: "adj.",
    zh: "客观的; 不带偏见的",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "stable",
    ipa: "/ˈsteibl/",
    pos: "adj.",
    zh: "稳定的; 安定的沉稳[持重]的",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "whereas",
    ipa: "/hwɛərˈæz/",
    pos: "conj.",
    zh: "但是, 而",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "abstract",
    ipa: "/ˈæbstrækt/",
    pos: "adj.",
    zh: "抽象的抽象派的",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "capable",
    ipa: "/ˈkeipəbl/",
    pos: "adj.",
    zh: "有能力的, 有技能的",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "exceed",
    ipa: "/ikˈsi:d/",
    pos: "vi.",
    zh: "在数量、质量上)突出, 领先",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "incidence",
    ipa: "/ˈinsidəns/",
    pos: "n.",
    zh: "发生率, 影响范围",
    tags: ["day30", "ielts", "awl"],
    star: false
  },
  {
    en: "migrate",
    ipa: "/maiˈɡreit/",
    pos: "vi.",
    zh: "迁移; 移往",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "recover",
    ipa: "/riˈkʌvə/",
    pos: "vi.",
    zh: "恢复健康(体力、能力等)",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "cite",
    ipa: "/sait/",
    pos: "vt.",
    zh: "引用, 举例表彰, 嘉奖传唤, 传讯",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "expert",
    ipa: "/ˈekspə:t/",
    pos: "adj.",
    zh: "专家的, 内行的, 熟练的",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "incorporate",
    ipa: "/inˈkɔ:pəreit/",
    pos: "vt.",
    zh: "包含, 加上, 吸收把…合并, 使并入组成公司",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "minimum",
    ipa: "/ˈminiməm/",
    pos: "adj.",
    zh: "最低的, 最小的",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "acknowledge",
    ipa: "/əkˈnɔlidʒ/",
    pos: "vt.",
    zh: "承认, 供认告知已收到鸣谢, 感谢",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "cooperate",
    ipa: "/kəuˈɔpəreit/",
    pos: "vi.",
    zh: "合作; 配合, 协助",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "explicit",
    ipa: "/iksˈplisit/",
    pos: "adj.",
    zh: "详述的, 明确的, 明晰的直言的, 毫不隐瞒的, 露骨的",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "index",
    ipa: "/ˈindeks/",
    pos: "n.",
    zh: "索引标志, 象征; 量度(物价或工资的)指数指数, 幂",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "ministry",
    ipa: "/ˈministri/",
    pos: "n.",
    zh: "政府的)部",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "scope",
    ipa: "/skəup/",
    pos: "n.",
    zh: "余地, 机会(处理、研究事务的)范围",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "aggregate",
    ipa: "/ˈæɡriɡit/",
    pos: "n.",
    zh: "数, 总计",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "discriminate",
    ipa: "/disˈkrimineit/",
    pos: "vi.",
    zh: "歧视, 有差别地对待",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "federal",
    ipa: "/ˈfedərəl/",
    pos: "adj.",
    zh: "联邦(制)的联邦政府的",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "inhibit",
    ipa: "/inˈhibit/",
    pos: "vt.",
    zh: "阻止; 抑制",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "motive",
    ipa: "/ˈməutiv/",
    pos: "n.",
    zh: "动机, 目的",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "subsidy",
    ipa: "/ˈsʌbsidi/",
    pos: "n.",
    zh: "补贴, 津贴, 补助金",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "allocate",
    ipa: "/ˈæləkeit/",
    pos: "vt.",
    zh: "分配, 分派把…拨给",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "display",
    ipa: "/disˈplei/",
    pos: "n.",
    zh: "陈列, 展览陈列的货物、艺术品等",
    tags: ["day31", "ielts", "awl"],
    star: false
  },
  {
    en: "fee",
    ipa: "/fi:/",
    pos: "n.",
    zh: "费, 酬金",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "initiate",
    ipa: "/iˈniʃieit/",
    pos: "vt.",
    zh: "开始, 着手传授; 使初步了解接纳新成员, 让…加入",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "neutral",
    ipa: "/ˈnju:trəl/",
    pos: "adj.",
    zh: "中立的, 不偏不倚的中立(国家)的暗淡的; 非彩色的(化学",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "tape",
    ipa: "/teip/",
    pos: "n.",
    zh: "带子录音磁带; 录像带",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "assign",
    ipa: "/əˈsain/",
    pos: "vt.",
    zh: "分配; 交给指派, 选派指定, 订出",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "diverse",
    ipa: "/daiˈvəs/",
    pos: "adj.",
    zh: "不同的, 多种多样的",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "flexible",
    ipa: "/ˈfleksəbl/",
    pos: "adj.",
    zh: "易弯曲的, 柔韧的灵活的, 可变通的",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "input",
    ipa: "/ˈinput/",
    pos: "n.",
    zh: "输入, 投入输入端输入的数据",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "nevertheless",
    ipa: "/ˌnevəðəˈles/",
    pos: "adv.",
    zh: "仍然, 然而, 不过",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "trace",
    ipa: "/treis/",
    pos: "n.",
    zh: "踪迹; 痕迹; 形迹极微的量",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "attach",
    ipa: "/əˈtætʃ/",
    pos: "vt. & vi.",
    zh: "贴上; 系; 附上",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "domain",
    ipa: "/dəuˈmein/",
    pos: "n.",
    zh: "范围, 领域版图, 领土地产, 产业",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "furthermore",
    ipa: "/ˈfə:ðəˌmɔ:/",
    pos: "adv.",
    zh: "而且, 此外",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "instruct",
    ipa: "/inˈstrʌkt/",
    pos: "vt.",
    zh: "命令, 指示教, 指导通知",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "transform",
    ipa: "/trænsˈfɔ:m/",
    pos: "vt. & vi.",
    zh: "改变",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "author",
    ipa: "/ˈɔ:θə/",
    pos: "n.",
    zh: "著作家, 作者创造者, 创始人; 发起人",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "edit",
    ipa: "/ˈedit/",
    pos: "vt.",
    zh: "剪辑(电影、录音磁带、无线电或电视节目、书等)",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "gender",
    ipa: "/ˈdʒendə/",
    pos: "n.",
    zh: "性",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "intelligent",
    ipa: "/inˈtelidʒənt/",
    pos: "adj.",
    zh: "聪明的; 理解力强的",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "precede",
    ipa: "/ˌpriˈsi:d/",
    pos: "vt. & vi.",
    zh: "在…之前, 先于",
    tags: ["day32", "ielts", "awl"],
    star: false
  },
  {
    en: "transport",
    ipa: "/trænsˈpɔ:t/",
    pos: "vt.",
    zh: "运送; 流放使万分激动",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "bond",
    ipa: "/bɔnd/",
    pos: "n.",
    zh: "联系, 关系连接, 接合, 结合有息债券合同, 契约, 票据",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "enhance",
    ipa: "/inˈhɑ:ns/",
    pos: "vt.",
    zh: "提高, 增加, 加强",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "ignorant",
    ipa: "/ˈiɡnərənt/",
    pos: "adj.",
    zh: "无知的, 愚昧的",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "interval",
    ipa: "/ˈintəvəl/",
    pos: "n.",
    zh: "间隔时间幕间休息",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "presume",
    ipa: "/priˈzju:m/",
    pos: "vi.",
    zh: "冒昧地做某事; 错用自作主张, 放肆",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "underlie",
    ipa: "/ˌʌndəˈlai/",
    pos: "vt.",
    zh: "位于或存在于(某物)之下构成…的基础(或起因); 引起",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "brief",
    ipa: "/bri:f/",
    pos: "adj.",
    zh: "短暂的, 短时间的简洁的, 简短的",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "estate",
    ipa: "/isˈteit/",
    pos: "n.",
    zh: "土地, 地区庄园, 种植园地产, 财产; 遗产",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "incentive",
    ipa: "/inˈsentiv/",
    pos: "n.",
    zh: "激励某人做某事的事物; 刺激; 诱因, 动机",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "lecture",
    ipa: "/ˈlektʃə/",
    pos: "n.",
    zh: "演讲; 讲课冗长的训斥[谴责]",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "utilize",
    ipa: "/ˈju:tilaiz/",
    pos: "vt.",
    zh: "利用, 使用",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "adapt",
    ipa: "/əˈdæpt/",
    pos: "vt.",
    zh: "改编, 改写",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "contrary",
    ipa: "/ˈkɔntrəri/",
    pos: "adj.",
    zh: "相反的, 相违的",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "empirical",
    ipa: "/emˈpirikəl/",
    pos: "adj.",
    zh: "以观察或实验为依据的",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "identical",
    ipa: "/aiˈdentikəl/",
    pos: "adj.",
    zh: "同一的",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "phenomenon",
    ipa: "/fiˈnɔminən/",
    pos: "n.",
    zh: "现象特殊的人[事物]",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "submit",
    ipa: "/səbˈmit/",
    pos: "vi.",
    zh: "屈服, 认输",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "adult",
    ipa: "/ˈædʌlt/",
    pos: "adj.",
    zh: "成熟的成年人的, 适宜于成年人的",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "convert",
    ipa: "/kənˈvə:t/",
    pos: "vt. & vi.",
    zh: "使)转变, (使)转化皈依, 改变(信仰)",
    tags: ["day33", "ielts", "awl"],
    star: false
  },
  {
    en: "equip",
    ipa: "/iˈkwip/",
    pos: "vt.",
    zh: "装备, 配备使有能力, 使胜任",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "ideology",
    ipa: "/ˌaidiˈɔlədʒi/",
    pos: "n.",
    zh: "思想(体系), 思想意识",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "priority",
    ipa: "/praiˈɔriti/",
    pos: "n.",
    zh: "优先权, 重点优先考虑的事",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "successor",
    ipa: "/səkˈsesə/",
    pos: "n.",
    zh: "接替的人或事物, 继任者, 继承人",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "advocate",
    ipa: "/ˈædvəkeit/",
    pos: "n.",
    zh: "提倡者, 拥护者辩护律师, 辩护人",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "couple",
    ipa: "/ˈkʌpl/",
    pos: "n.",
    zh: "一对, 一双一些, 几个夫妻, 情侣",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "extract",
    ipa: "/iksˈtrækt/",
    pos: "n.",
    zh: "摘录, 引用提炼物, 浓缩物",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "infer",
    ipa: "/inˈfə:/",
    pos: "vt.",
    zh: "推断, 推知",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "prohibit",
    ipa: "/prəˈhibit/",
    pos: "vt.",
    zh: "禁止; 阻止",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "survive",
    ipa: "/səˈvaiv/",
    pos: "vi.",
    zh: "幸存, 活下来",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "aid",
    ipa: "/eid/",
    pos: "n.",
    zh: "帮助, 援助, 救助助手, 辅助物, 辅助手段",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "file",
    ipa: "/fail/",
    pos: "n.",
    zh: "文件夹, 公文箱卷宗, 文件; 计算机文件纵列",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "innovate",
    ipa: "/ˈinəuveit/",
    pos: "vi.",
    zh: "改革, 创新",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "publication",
    ipa: "/ˌpʌbliˈkeiʃən/",
    pos: "n.",
    zh: "发表, 公布出版, 刊行, 发行出版物, 书刊",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "thesis",
    ipa: "/ˈθi:sis/",
    pos: "n.",
    zh: "论题, 命题, 论点论文, 毕业(或学位)论文",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "channel",
    ipa: "/ˈtʃænl/",
    pos: "n.",
    zh: "海峡通道; 水沟, 水渠渠道, 途径频道",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "definite",
    ipa: "/ˈdefinit/",
    pos: "adj.",
    zh: "明确的, 确切的一定的, 肯定的",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "finite",
    ipa: "/ˈfainait/",
    pos: "adj.",
    zh: "有限的, 有限度的限定的",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "insert",
    ipa: "/inˈsə:t/",
    pos: "n.",
    zh: "添入物(尤指一页印刷品图中插入或套印的小图)",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "quote",
    ipa: "/kwəut/",
    pos: "vt.",
    zh: "提到…以支持某论点报(价); 开(价)",
    tags: ["day34", "ielts", "awl"],
    star: false
  },
  {
    en: "topic",
    ipa: "/ˈtɔpik/",
    pos: "n.",
    zh: "题目, 论题, 话题",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "chemical",
    ipa: "/ˈkemikəl/",
    pos: "adj.",
    zh: "化学的",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "deny",
    ipa: "/diˈnai/",
    pos: "vt.",
    zh: "否认知情拒绝",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "foundation",
    ipa: "/faunˈdeiʃən/",
    pos: "n.",
    zh: "建立, 设立, 创办基础, 基本原理, 根据地基基金",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "intervene",
    ipa: "/ˌɪntəˈvi:n/",
    pos: "vi.",
    zh: "干涉, 干预; 调解干扰, 阻碍",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "release",
    ipa: "/riˈli:s/",
    pos: "n.",
    zh: "释放, 排放, 解除释放令公映的新影片, 发布的新闻[消息]",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "transmit",
    ipa: "/trænzˈmit/",
    pos: "vt.",
    zh: "传播, 传染传导",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "classic",
    ipa: "/ˈklæsik/",
    pos: "adj.",
    zh: "著作, 赛事等)最优秀的, (可作)典范的(病例等)典型的, 标",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "differentiate",
    ipa: "/ˌdifəˈrenʃieit/",
    pos: "vi.",
    zh: "区别对待",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "globe",
    ipa: "/ɡləub/",
    pos: "n.",
    zh: "地球, 世界球体; 球状物地球仪",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "isolate",
    ipa: "/ˈaisəleit/",
    pos: "vt.",
    zh: "使隔离, 使孤立, 使脱离",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "reverse",
    ipa: "/riˈvə:s/",
    pos: "adj.",
    zh: "相反的, 颠倒的, 反向的",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "ultimate",
    ipa: "/ˈʌltimit/",
    pos: "adj.",
    zh: "最后的, 最终的基本的, 根本的最大的, 极限程度的",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "comprehensive",
    ipa: "/ˌkɔmpriˈhensiv/",
    pos: "adj.",
    zh: "广泛的, 综合的",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "dispose",
    ipa: "/disˈpəuz/",
    pos: "vt.",
    zh: "布置使愿意或准备做",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "grade",
    ipa: "/ɡreid/",
    pos: "n.",
    zh: "官阶、质量)等级, 品级, 阶段, 程度 (考试或作业的)",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "media",
    ipa: "/ˈmi:djə/",
    pos: "n.",
    zh: "媒体",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "simulate",
    ipa: "/ˈsimjuleit/",
    pos: "vt.",
    zh: "假装模仿, 模拟",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "unique",
    ipa: "/ju:ˈni:k/",
    pos: "adj.",
    zh: "独一无二的, 仅有的, 惟一的异常的, 特有的, 少见的",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "comprise",
    ipa: "/kəmˈpraiz/",
    pos: "vt.",
    zh: "包含, 包括, 由…组成组成, 构成",
    tags: ["day35", "ielts", "awl"],
    star: false
  },
  {
    en: "dynamic",
    ipa: "/daiˈnæmik/",
    pos: "adj.",
    zh: "有活力的, 强有力的不断变化的动力的, 动态的",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "guarantee",
    ipa: "/ˌɡærənˈti:/",
    pos: "n.",
    zh: "保证, 保障; 保证书; 保用期担保, 担保人担保品, 抵",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "mode",
    ipa: "/məud/",
    pos: "n.",
    zh: "方式, 样式样式, 风格",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "sole",
    ipa: "/səul/",
    pos: "adj.",
    zh: "单独的, 惟一的专有的, 独占的",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "visible",
    ipa: "/ˈvizəbl/",
    pos: "adj.",
    zh: "看得见的, 可见的, 有形的明显的, 可察觉到的",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "confirm",
    ipa: "/kənˈfə:m/",
    pos: "vt.",
    zh: "证实, 证明; 肯定, 确认使巩固, 加强批准; 认可",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "hierarchy",
    ipa: "/ˈhaiərɑ:ki/",
    pos: "n.",
    zh: "等级制度统治集团, 领导层",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "paradigm",
    ipa: "/ˈpærədaim/",
    pos: "n.",
    zh: "一词的)词形变化表范例; 样式; 模范",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "somewhat",
    ipa: "/ˈsʌmhwɔt/",
    pos: "adv.",
    zh: "稍微, 有点, 达到某种程度",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "voluntary",
    ipa: "/ˈvɔləntəri/",
    pos: "adj.",
    zh: "自愿的, 志愿的义务的, 无偿的",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "abandon",
    ipa: "/əˈbændən/",
    pos: "n.",
    zh: "放任; 纵情",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "clarify",
    ipa: "/ˈklærifai/",
    pos: "vt. & vi.",
    zh: "使清楚; 澄清",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "deviate",
    ipa: "/ˈdi:vieit/",
    pos: "vi.",
    zh: "偏离; 越轨",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "induce",
    ipa: "/inˈdju:s/",
    pos: "vt.",
    zh: "引诱, 劝导引起, 导致",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "plus",
    ipa: "/plʌs/",
    pos: "adj.",
    zh: "正的比所示数量多的附加的, 称心的, 有利的",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "tense",
    ipa: "/tens/",
    pos: "adj.",
    zh: "拉紧的肌肉绷紧的神经紧张的",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "accompany",
    ipa: "/əˈkʌmpəni/",
    pos: "vt.",
    zh: "陪伴, 陪同伴随…同时发生伴奏",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "commodity",
    ipa: "/kəˈmɔditi/",
    pos: "n.",
    zh: "商品, 货物有用的东西",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "displace",
    ipa: "/disˈpleis/",
    pos: "vt.",
    zh: "替换, 取代移走",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "inevitable",
    ipa: "/inˈevitəbl/",
    pos: "adj.",
    zh: "不可避免的, 必然发生的总会发生的, 照例必",
    tags: ["day36", "ielts", "awl"],
    star: false
  },
  {
    en: "practitioner",
    ipa: "/prækˈtiʃənə/",
    pos: "n.",
    zh: "习艺者, 实习者从业者(尤指医师)",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "terminate",
    ipa: "/ˈtə:mineit/",
    pos: "vt. & vi.",
    zh: "结束; 使终结",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "accumulate",
    ipa: "/əˈkju:mjuleit/",
    pos: "vt. & vi.",
    zh: "堆积; 积累",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "complement",
    ipa: "/ˈkɔmplimənt/",
    pos: "n.",
    zh: "补充, 互为补充的东西需要的或允许的数额补足",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "drama",
    ipa: "/ˈdrɑ:mə/",
    pos: "n.",
    zh: "戏剧, 剧本戏剧文学[艺术]戏剧性事件[场面]",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "predominant",
    ipa: "/priˈdɔminənt/",
    pos: "adj.",
    zh: "占主导地位的, 显著的",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "theme",
    ipa: "/θi:m/",
    pos: "n.",
    zh: "主题, 主旨, 题目",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "ambiguous",
    ipa: "/æmˈbiɡjuəs/",
    pos: "adj.",
    zh: "引起歧义的; 模棱两可的, 含糊不清的",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "conform",
    ipa: "/kənˈfɔ:m/",
    pos: "vi.",
    zh: "遵守, 符合顺应, 一致",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "eventual",
    ipa: "/iˈventjuəl/",
    pos: "adj.",
    zh: "事件)最终发生的; 结果的",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "inspect",
    ipa: "/inˈspekt/",
    pos: "vt.",
    zh: "检查, 检验视察",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "prospect",
    ipa: "/ˈprɔspekt/",
    pos: "n.",
    zh: "景象, 景色前景; 前途可能成为主顾的人; 有希望的候选",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "thereby",
    ipa: "/ˈðɛəbai/",
    pos: "adv.",
    zh: "由此; 因而",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "append",
    ipa: "/əˈpend/",
    pos: "vt.",
    zh: "附加",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "contemporary",
    ipa: "/kənˈtempərəri/",
    pos: "adj.",
    zh: "当代的同时代的, 同属一个时期的",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "exhibit",
    ipa: "/iɡˈzibit/",
    pos: "n.",
    zh: "展览品, 陈列品在法庭提出的证物",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "radical",
    ipa: "/ˈrædikəl/",
    pos: "adj.",
    zh: "根本的, 基本的; 彻底的, 完全的激进的, 激进派的",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "uniform",
    ipa: "/ˈju:nifɔ:m/",
    pos: "adj.",
    zh: "全都相同的, 一律的, 清一色的",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "contradict",
    ipa: "/ˌkɔntrəˈdikt/",
    pos: "vt.",
    zh: "与…发生矛盾, 与…抵触",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "exploit",
    ipa: "/iksˈplɔit/",
    pos: "n.",
    zh: "业绩, 功绩, 功勋, 事迹",
    tags: ["day37", "ielts", "awl"],
    star: false
  },
  {
    en: "manipulate",
    ipa: "/məˈnipjuleit/",
    pos: "vt.",
    zh: "熟练控制[操作]",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "random",
    ipa: "/ˈrændəm/",
    pos: "adj.",
    zh: "任意的; 无计划的(统计)随机的",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "vehicle",
    ipa: "/ˈvi:ɪkl/",
    pos: "n.",
    zh: "交通工具, 车辆传播媒介, 手段",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "arbitrary",
    ipa: "/ˈɑ:bitrəri/",
    pos: "adj.",
    zh: "随意的, 主观的专横的, 独断专行的",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "minimise",
    ipa: "/ˈminimaiz/",
    pos: "vt.",
    zh: "把…减至最低数量[程度]对(某事物)作最低估计; 极力",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "reinforce",
    ipa: "/ˌri:ɪnˈfɔ:s/",
    pos: "vt.",
    zh: "增强; 加强",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "via",
    ipa: "/ˈvaiə/",
    pos: "prep.",
    zh: "表示方式)通过(某人), 凭借(某种手段)(表示关涉)经由, 经过",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "automate",
    ipa: "/ˈɔ:təmeit/",
    pos: "vt. & vi.",
    zh: "使)自动化",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "currency",
    ipa: "/ˈkʌrənsi/",
    pos: "n.",
    zh: "通货, 货币流通, 通用, 流行",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "guideline",
    ipa: "/ˈɡaidlain/",
    pos: "n.",
    zh: "指导方针, 准则",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "nuclear",
    ipa: "/ˈnju:kliə/",
    pos: "adj.",
    zh: "核的, 原子核的使用或生产核能的",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "restore",
    ipa: "/riˈstɔ:/",
    pos: "vt.",
    zh: "归还; 交还使恢复修复; 重建",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "virtual",
    ipa: "/ˈvə:tjuəl/",
    pos: "adj.",
    zh: "实质上的, 事实上的, 实际上的",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "bias",
    ipa: "/ˈbaiəs/",
    pos: "n.",
    zh: "偏见, 偏心, 偏袒",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "denote",
    ipa: "/diˈnəut/",
    pos: "vt.",
    zh: "为…的符号; 为…的名称指示; 指出",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "highlight",
    ipa: "/ˈhailait/",
    pos: "n.",
    zh: "最精彩的部分, 最重要的事情",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "offset",
    ipa: "/ˈɔfset/",
    pos: "vt.",
    zh: "抵消, 补偿",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "revise",
    ipa: "/riˈvaiz/",
    pos: "vt.",
    zh: "修订, 修改",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "visual",
    ipa: "/ˈviʒuəl/",
    pos: "adj.",
    zh: "视觉的, 看得见的",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "chart",
    ipa: "/tʃɑ:t/",
    pos: "n.",
    zh: "图表航海图唱片的每周流行榜",
    tags: ["day38", "ielts", "awl"],
    star: false
  },
  {
    en: "implicit",
    ipa: "/imˈplisit/",
    pos: "adj.",
    zh: "不言明[含蓄]的无疑问的, 绝对的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "paragraph",
    ipa: "/ˈpærəɡrɑ:f/",
    pos: "n.",
    zh: "段落短篇报道",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "schedule",
    ipa: "/ˈʃedju:əl/",
    pos: "n.",
    zh: "时间表, 日程安排表清单, 明细表",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "widespread",
    ipa: "/ˈwaidspred/",
    pos: "adj.",
    zh: "分布广的; 普遍的, 广泛的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "accommodate",
    ipa: "/əˈkɔmədeit/",
    pos: "vt.",
    zh: "容纳向…提供住处使适应, 顺应",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "commence",
    ipa: "/kəˈmens/",
    pos: "vt. & vi.",
    zh: "开始",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "duration",
    ipa: "/djuəˈreiʃən/",
    pos: "n.",
    zh: "持续, 持续的时间, 期间",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "mature",
    ipa: "/məˈtjuə/",
    pos: "adj.",
    zh: "成熟的, 成年人的深思的; 慎重的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "preliminary",
    ipa: "/priˈliminəri/",
    pos: "adj.",
    zh: "初步的, 预备的, 开端的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "sphere",
    ipa: "/sfiə/",
    pos: "n.",
    zh: "球(体)(兴趣或活动的)范围, 领域",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "analogy",
    ipa: "/əˈnælədʒi/",
    pos: "n.",
    zh: "类似, 相似类推, 类推法",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "compatible",
    ipa: "/kəmˈpætəbl/",
    pos: "adj.",
    zh: "可以并存的, 相容的, 协调的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "erode",
    ipa: "/iˈrəud/",
    pos: "vt. & vi.",
    zh: "侵蚀, 腐蚀",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "mediate",
    ipa: "/ˈmi:dieit/",
    pos: "vi.",
    zh: "调停, 调解, 斡旋",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "protocol",
    ipa: "/ˈprəutəkɔl/",
    pos: "n.",
    zh: "礼仪; 外交礼仪(外交条约的)草案, 草约; (尤指)议定的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "subordinate",
    ipa: "/səˈbɔ:dinit/",
    pos: "adj.",
    zh: "级别或职位较低的, 下级的次要的, 附属的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "anticipate",
    ipa: "/ænˈtisipeit/",
    pos: "vt.",
    zh: "先于…行动预感, 期望",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "concurrent",
    ipa: "/kənˈkʌrənt/",
    pos: "adj.",
    zh: "同时存在(发生、完成)的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "ethic",
    ipa: "/ˈeθik/",
    pos: "n.",
    zh: "道德规范,伦理",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "medium",
    ipa: "/ˈmi:djəm/",
    pos: "adj.",
    zh: "中等的, 适中的",
    tags: ["day39", "ielts", "awl"],
    star: false
  },
  {
    en: "qualitative",
    ipa: "/ˈkwɔlitətiv/",
    pos: "adj.",
    zh: "定性的, 性质(上)的; 质量的",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "supplement",
    ipa: "/ˈsʌpliment/",
    pos: "n.",
    zh: "补遗, 补编",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "assure",
    ipa: "/əˈʃuə/",
    pos: "vt.",
    zh: "使相信; 使确信保险",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "confine",
    ipa: "/kənˈfain/",
    pos: "n.",
    zh: "界限, 范围",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "format",
    ipa: "/ˈfɔ:mæt/",
    pos: "n.",
    zh: "设计, 安排格式, 样式, 版式",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "military",
    ipa: "/ˈmilitəri/",
    pos: "adj.",
    zh: "军事的, 军用的; 军人的",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "refine",
    ipa: "/riˈfain/",
    pos: "vt.",
    zh: "精炼; 精制; 使纯净使文雅高尚; 使去掉粗俗言行; 使变得完",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "suspend",
    ipa: "/səˈspend/",
    pos: "vt.",
    zh: "暂停, 终止悬, 挂, 吊",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "attain",
    ipa: "/əˈtein/",
    pos: "vt. & vi.",
    zh: "实现, 达到, 得到",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "controversy",
    ipa: "/ˈkɔntrəvə:si/",
    pos: "n.",
    zh: "公开辩论, 论战",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "found",
    ipa: "/faund/",
    pos: "vt.",
    zh: "创办, 成立; 建立",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "minimal",
    ipa: "/ˈminiməl/",
    pos: "adj.",
    zh: "最小的; 极少的",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "relax",
    ipa: "/riˈlæks/",
    pos: "vt. & vi.",
    zh: "使)轻松(使)松弛; 放宽",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "team",
    ipa: "/ti:m/",
    pos: "n.",
    zh: "队, 组",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "behalf",
    ipa: "/biˈhɑ:f/",
    pos: "n.",
    zh: "方面, 利益, 赞同",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "converse",
    ipa: "/kənˈvə:s/",
    pos: "adj.",
    zh: "相反的, 逆的",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "inherent",
    ipa: "/inˈhiərənt/",
    pos: "adj.",
    zh: "固有的; 内在的",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "mutual",
    ipa: "/ˈmju:tʃuəl/",
    pos: "adj.",
    zh: "相互的, 彼此的共同的, 共有的",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "restrain",
    ipa: "/risˈtrein/",
    pos: "vt.",
    zh: "抑制, 遏制; 管制, 克制, 约束",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "temporary",
    ipa: "/ˈtempərəri/",
    pos: "adj.",
    zh: "临时的, 暂时的, 短时间的",
    tags: ["day40", "ielts", "awl"],
    star: false
  },
  {
    en: "bulk",
    ipa: "/bʌlk/",
    pos: "n.",
    zh: "巨大)物体, (大)块, (大)团主体, 绝大部分",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "insight",
    ipa: "/ˈinsait/",
    pos: "n.",
    zh: "洞察力, 洞悉, 深刻的见解领悟, 顿悟",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "norm",
    ipa: "/nɔ:m/",
    pos: "n.",
    zh: "标准, 规范准则, 行为模式",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "revolution",
    ipa: "/ˌrevəˈlu:ʃən/",
    pos: "n.",
    zh: "革命彻底改变, 重大变革旋转; 运行, 公转",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "cease",
    ipa: "/si:s/",
    pos: "vt. & vi.",
    zh: "停止, 终止, 结束",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "devote",
    ipa: "/diˈvəut/",
    pos: "vt.",
    zh: "把…奉献(给), 把…专用(于)",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "integral",
    ipa: "/ˈintiɡrəl/",
    pos: "adj.",
    zh: "构成整体所必需的",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "overlap",
    ipa: "/ˌəuvəˈlæp/",
    pos: "n.",
    zh: "重叠的部分",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "rigid",
    ipa: "/ˈridʒid/",
    pos: "adj.",
    zh: "刚硬的; 僵硬的; 不弯曲的严格的; 死板的; 不变的",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "unify",
    ipa: "/ˈju:nifai/",
    pos: "vt.",
    zh: "使联合, 统一使相同; 使一致",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "coherent",
    ipa: "/kəuˈhiərənt/",
    pos: "adj.",
    zh: "条理清楚的, 连贯的; 前后一致的",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "diminish",
    ipa: "/diˈminiʃ/",
    pos: "vt. & vi.",
    zh: "使)减少; 缩小减弱…的权势",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "intermediate",
    ipa: "/ˌɪntəˈmi:djət/",
    pos: "adj.",
    zh: "中间的; 中级的",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "passive",
    ipa: "/ˈpæsiv/",
    pos: "adj.",
    zh: "被动的; 消极的; 不抵抗的冷漠的, 不关心的",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "route",
    ipa: "/ru:t/",
    pos: "n.",
    zh: "路, 路途, 路线, 路程",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "violate",
    ipa: "/ˈvaiəleit/",
    pos: "vt.",
    zh: "违反, 违背亵渎侵犯, 妨碍",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "coincide",
    ipa: "/ˌkəuinˈsaid/",
    pos: "vi.",
    zh: "同时发生相符, 一致",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "distort",
    ipa: "/disˈtɔ:t/",
    pos: "vt.",
    zh: "歪曲, 曲解扭曲, 使变形",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "manual",
    ipa: "/ˈmænjuəl/",
    pos: "adj.",
    zh: "用手的, 手工的",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "portion",
    ipa: "/ˈpɔ:ʃən/",
    pos: "n.",
    zh: "一部分, 一份",
    tags: ["day41", "ielts", "awl"],
    star: false
  },
  {
    en: "vision",
    ipa: "/ˈviʒən/",
    pos: "n.",
    zh: "视力, 视觉想像(力), 幻想, 幻觉, 梦想",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "adjacent",
    ipa: "/əˈdʒeisənt/",
    pos: "adj.",
    zh: "邻近的",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "enormous",
    ipa: "/iˈnɔ:məs/",
    pos: "adj.",
    zh: "巨大的, 极大的, 庞大的",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "odd",
    ipa: "/ɔd/",
    pos: "adj.",
    zh: "奇怪的; 古怪的单的奇数的临时的余下的; 零头的",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "albeit",
    ipa: "/ɔ:lˈbi:ɪt/",
    pos: "conj.",
    zh: "尽管, 即使",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "forthcoming",
    ipa: "/fɔ:θˈkʌmiŋ/",
    pos: "adj.",
    zh: "即将到来的现成的, 唾手可得的",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "ongoing",
    ipa: "/ˈɔnˌɡəuiŋ/",
    pos: "adj.",
    zh: "继续进行的; 不断前进[发展]中的",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "assemble",
    ipa: "/əˈsembl/",
    pos: "vt.",
    zh: "装配, 组合",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "incline",
    ipa: "/inˈklain/",
    pos: "n.",
    zh: "斜坡, 斜面",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "panel",
    ipa: "/ˈpænəl/",
    pos: "n.",
    zh: "专门小组面; 板控制板, 仪表盘",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "collapse",
    ipa: "/kəˈlæps/",
    pos: "n.",
    zh: "倒塌, 崩溃",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "integrity",
    ipa: "/inˈteɡriti/",
    pos: "n.",
    zh: "正直; 诚实, 诚恳完整, 完全, 完善",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "persist",
    ipa: "/pəˈsist/",
    pos: "vt. & vi.",
    zh: "坚持, 固执",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "intrinsic",
    ipa: "/inˈtrinsik/",
    pos: "adj.",
    zh: "固有的, 内在的, 本质的",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "pose",
    ipa: "/pəuz/",
    pos: "n.",
    zh: "姿势, 姿态装腔作势, 伪装",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "compile",
    ipa: "/kəmˈpail/",
    pos: "vt.",
    zh: "收集; 编辑, 编制",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "invoke",
    ipa: "/inˈvəuk/",
    pos: "vt.",
    zh: "援引, 援用; 行使(权利等)祈求救助恳求; 乞求",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "reluctance",
    ipa: "/riˈlʌktəns/",
    pos: "n.",
    zh: "不愿意；勉强",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "conceive",
    ipa: "/kənˈsi:v/",
    pos: "vt. & vi.",
    zh: "想出, 构想, 设想怀孕",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "levy",
    ipa: "/ˈlevi/",
    pos: "n.",
    zh: "征收; 征税",
    tags: ["day42", "ielts", "awl"],
    star: false
  },
  {
    en: "so-called",
    ipa: "/ˈsəʊˈkɔ:ld/",
    pos: "adj.",
    zh: "所谓的,号称的",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "likewise",
    ipa: "/ˈlaikwaiz/",
    pos: "adv.",
    zh: "同样地, 照样地也, 又",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "straightforward",
    ipa: "/streitˈfɔ:wəd/",
    pos: "adj.",
    zh: "人或其态度)正直的, 坦率的; 老实的简单",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "depress",
    ipa: "/diˈpres/",
    pos: "vt.",
    zh: "压下; 推下; 拉下使愁苦; 使沮丧使跌价; 使萧条",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "nonetheless",
    ipa: "/ˌnʌnðəˈles/",
    pos: "adv.",
    zh: "虽然如此,但是",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "undergo",
    ipa: "/ˌʌndəˈɡəu/",
    pos: "vt.",
    zh: "经历, 承受",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "encounter",
    ipa: "/inˈkauntə/",
    pos: "n.",
    zh: "突然遇到",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "notwithstanding",
    ipa: "/ˌnɔtwiθˈstændiŋ/",
    pos: "adv.",
    zh: "尽管如此; 仍然; 然而",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "whereby",
    ipa: "/hwɛəˈbai/",
    pos: "adv.",
    zh: "靠那个; 凭那个; 借以",
    tags: ["day43", "ielts", "awl"],
    star: false
  },
  {
    en: "education",
    zh: "教育",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "account",
    zh: "账户",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "change",
    zh: "兑换，改变",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "energetic",
    zh: "精力充沛的",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "engineer",
    zh: "工程师",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "independent",
    zh: "有主见的，独立自主的",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "industry",
    zh: "工业",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "apartment",
    zh: "公寓",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "constructive",
    zh: "建设性的",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "audience",
    zh: "观众",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "family",
    zh: "家庭环境",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "department",
    zh: "部门",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "luxury",
    zh: "奢侈品",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "manner",
    zh: "礼貌",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "disappear",
    zh: "消失、不见",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "bullying",
    zh: "欺负，霸凌",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "harmony",
    zh: "和声，融洽",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "museum",
    zh: "博物馆",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "temperature",
    zh: "温度",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "religious",
    zh: "宗教上的",
    tags: ["day44", "ielts", "spelling"],
    star: true
  },
  {
    en: "tourist",
    zh: "旅行者",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "rhythm",
    zh: "节奏",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "university",
    zh: "大学",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "salary",
    zh: "薪水",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "scene",
    zh: "景色",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "orchestra",
    zh: "管弦乐队",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "pension",
    zh: "养老金",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "stability",
    zh: "稳定性",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "strength",
    zh: "力量、力气",
    tags: ["day45", "ielts", "spelling"],
    star: true
  },
  {
    en: "rural",
    pos: "adj.",
    zh: "乡下的，田园的",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "fence",
    pos: "n.",
    zh: "篱笆",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "house",
    pos: "n.",
    zh: "住宅",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "lawn",
    pos: "n.",
    zh: "草坪",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "roommate",
    pos: "n.",
    zh: "室友",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "sea",
    pos: "n.",
    zh: "海洋",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "homestay",
    pos: "n.",
    zh: "在当地居民家居住的时期",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "notice",
    pos: "n.",
    zh: "布告，通知",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "mansion",
    pos: "n.",
    zh: "大厦，宅邸",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "furnish",
    pos: "v.",
    zh: "提供，装备，布置",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "cottage",
    pos: "n.",
    zh: "村舍，小别墅",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "facility",
    pos: "n.",
    zh: "设施",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "hall",
    pos: "n.",
    zh: "大厅",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "decorate",
    pos: "v.",
    zh: "装修",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "lobby",
    pos: "n.",
    zh: "大厅，休息室",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "ceiling",
    pos: "n.",
    zh: "天花板",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "corridor",
    pos: "n.",
    zh: "走廊",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "sofa",
    pos: "n.",
    zh: "沙发",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "room",
    pos: "n.",
    zh: "屋子",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "carpet",
    pos: "n.",
    zh: "毯子，地毯",
    tags: ["day46", "ielts", "listening"],
    star: false
  },
  {
    en: "bedsit",
    pos: "n.",
    zh: "卧室兼起居室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "cushion",
    pos: "n.",
    zh: "垫子，软垫，加衬垫",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "bedroom",
    pos: "n.",
    zh: "卧室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "curtain",
    pos: "n.",
    zh: "窗帘，装上门帘",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "bathroom",
    pos: "n.",
    zh: "浴室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "cabinet",
    pos: "n.",
    zh: "橱柜",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "schoolroom",
    pos: "n.",
    zh: "教室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "closet",
    pos: "n.",
    zh: "衣柜，储藏室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "boardroom",
    pos: "n.",
    zh: "会议室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "bookshelf",
    pos: "n.",
    zh: "书架",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "storehouse",
    pos: "n.",
    zh: "储藏室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "bed",
    pos: "n.",
    zh: "床",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "basement",
    pos: "n.",
    zh: "地下室",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "mattress",
    pos: "n.",
    zh: "床垫",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "balcony",
    pos: "n.",
    zh: "阳台",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "sheet",
    pos: "n.",
    zh: "床单，被褥",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "garage",
    pos: "n.",
    zh: "车库",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "pillow",
    pos: "n.",
    zh: "枕头",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "fire-escape",
    pos: "n.",
    zh: "防火梯",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "tub",
    pos: "n.",
    zh: "浴缸",
    tags: ["day47", "ielts", "listening"],
    star: false
  },
  {
    en: "cooker",
    pos: "n.",
    zh: "厨具，炊具",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "surroundings",
    pos: "n.",
    zh: "环境",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "wash",
    pos: "v.",
    zh: "清洗",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "layout",
    pos: "n.",
    zh: "布局",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "oven",
    pos: "n.",
    zh: "烤箱，烤炉",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "stove",
    pos: "n.",
    zh: "火炉",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "refrigerator",
    pos: "n.",
    zh: "冰箱",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "utensil",
    pos: "n.",
    zh: "器皿，家用器具",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "stereo",
    pos: "n.",
    zh: "立体声",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "payment",
    pos: "n.",
    zh: "付款，支付",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "laptop",
    pos: "n.",
    zh: "笔记本电脑",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "deposit",
    pos: "n.",
    zh: "押金，存放",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "desktop",
    pos: "n.",
    zh: "台式电脑",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "switch",
    pos: "n.",
    zh: "开关，转换",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "clean",
    pos: "adj.",
    zh: "干净的，整洁的",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "lease",
    pos: "n.",
    zh: "契约，租约，出租",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "heater",
    pos: "n.",
    zh: "加热器",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "bill",
    pos: "n.",
    zh: "账单，钞票",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "mop",
    pos: "n.",
    zh: "拖把",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "dustbin",
    pos: "n.",
    zh: "垃圾桶",
    tags: ["day48", "ielts", "listening"],
    star: false
  },
  {
    en: "broom",
    pos: "n.",
    zh: "扫帚，扫除",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "landlord",
    pos: "n.",
    zh: "房东",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "tour",
    pos: "n.",
    zh: "旅行，游历，漫游",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "excursion",
    pos: "n.",
    zh: "远足，短途旅行",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "lifeboat",
    pos: "n.",
    zh: "救生船",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "expedition",
    pos: "n.",
    zh: "远征，探险",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "seasick",
    pos: "adj.",
    zh: "晕船的",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "lodge",
    pos: "n.",
    zh: "旅社；小木屋",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "tourism",
    pos: "n.",
    zh: "旅游业",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "brochure",
    pos: "n.",
    zh: "小册子",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "ecotourism",
    pos: "n.",
    zh: "生态旅游",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "backpack",
    pos: "n.",
    zh: "背包",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "guide",
    pos: "n.",
    zh: "导游，向导",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "beach",
    pos: "n.",
    zh: "沙滩",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "package",
    pos: "n.",
    zh: "包裹，打包",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "sunglasses",
    pos: "n.",
    zh: "太阳镜",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "landscape",
    pos: "n.",
    zh: "风景；景色",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "tent",
    pos: "n.",
    zh: "帐篷",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "resort",
    pos: "n.",
    zh: "风景胜地",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "compass",
    pos: "n.",
    zh: "指南针；罗盘",
    tags: ["day49", "ielts", "listening"],
    star: false
  },
  {
    en: "destination",
    pos: "n.",
    zh: "目的地",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "torch",
    pos: "n.",
    zh: "手电筒；火炬",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "indigenous",
    pos: "adj.",
    zh: "本土的",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "trousers",
    pos: "n.",
    zh: "长裤",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "local",
    pos: "adj.",
    zh: "当地的",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "pants",
    pos: "n.",
    zh: "长裤",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "conserve",
    pos: "v.",
    zh: "保护，保存",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "boot",
    pos: "n.",
    zh: "靴子",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "conservative",
    pos: "n.",
    zh: "保守的人",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "ill-equipped",
    pos: "adj.",
    zh: "装备差的",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "wetland",
    pos: "n.",
    zh: "湿地",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "cycling",
    pos: "n.",
    zh: "骑车兜风",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "waterfalls",
    pos: "n.",
    zh: "瀑布",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "gallery",
    pos: "n.",
    zh: "画廊",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "spring",
    pos: "n.",
    zh: "泉水",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "temple",
    pos: "n.",
    zh: "庙，寺庙",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "brook",
    pos: "n.",
    zh: "小溪",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "cathedral",
    pos: "n.",
    zh: "大教堂",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "picnic",
    pos: "n.",
    zh: "野餐",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "church",
    pos: "n.",
    zh: "教堂",
    tags: ["day50", "ielts", "listening"],
    star: false
  },
  {
    en: "souvenir",
    pos: "n.",
    zh: "纪念品",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "land",
    pos: "v.",
    zh: "降落；陆地",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "reserve",
    pos: "v.",
    zh: "预约，预定",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "lounge",
    pos: "n.",
    zh: "休息室",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "takeoff",
    pos: "n.",
    zh: "起飞",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "passport",
    pos: "n.",
    zh: "护照",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "license",
    pos: "n.",
    zh: "驾照",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "visa",
    pos: "n.",
    zh: "签证",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "expire",
    pos: "v.",
    zh: "证件）等到期",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "sport",
    pos: "n.",
    zh: "运动",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "stadium",
    pos: "n.",
    zh: "体育场",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "court",
    pos: "n.",
    zh: "球场",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "karaoke",
    pos: "n.",
    zh: "卡拉OK",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "studio",
    pos: "n.",
    zh: "工作室",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "string",
    pos: "n.",
    zh: "绳子",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "membership",
    pos: "n.",
    zh: "会员资格",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "swing",
    pos: "n.",
    zh: "秋千，摆动",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "kite",
    pos: "n.",
    zh: "风筝",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "reception",
    pos: "n.",
    zh: "接待处；接待",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "chess",
    pos: "n.",
    zh: "象棋",
    tags: ["day51", "ielts", "listening"],
    star: false
  },
  {
    en: "billiards",
    pos: "n.",
    zh: "台球",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "parachuting",
    pos: "n.",
    zh: "跳伞",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "discount",
    pos: "n.",
    zh: "折扣",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "racing",
    pos: "n.",
    zh: "赛车，竞赛，比赛的",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "cash",
    pos: "n.",
    zh: "现金",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "episode",
    pos: "n.",
    zh: "一段情节，插曲",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "card",
    pos: "n.",
    zh: "卡",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "sitcom",
    pos: "n.",
    zh: "连续剧",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "check",
    pos: "n.",
    zh: "支票",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "celebrity",
    pos: "n.",
    zh: "名人",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "ballet",
    pos: "n.",
    zh: "芭蕾",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "adventure",
    pos: "n.",
    zh: "冒险经历，冒险",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "activity",
    pos: "n.",
    zh: "活动",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "suspense",
    pos: "n.",
    zh: "悬疑片",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "rowing",
    pos: "n.",
    zh: "划船",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "romance",
    pos: "n.",
    zh: "爱情片",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "horror",
    pos: "n.",
    zh: "恐怖片",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "jogging",
    pos: "n.",
    zh: "慢跑",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "action",
    pos: "n.",
    zh: "动作片",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "volleyball",
    pos: "n.",
    zh: "排球",
    tags: ["day52", "ielts", "listening"],
    star: false
  },
  {
    en: "skating",
    pos: "n.",
    zh: "滑冰",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "badminton",
    pos: "n.",
    zh: "羽毛球",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "motor",
    pos: "n.",
    zh: "汽车，机动车",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "judo",
    pos: "n.",
    zh: "柔道",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "movie",
    pos: "n.",
    zh: "电影",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "yoga",
    pos: "n.",
    zh: "瑜伽",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "comedy",
    pos: "n.",
    zh: "喜剧",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "kick-boxing",
    pos: "n.",
    zh: "拳击",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "cheerleader",
    pos: "n.",
    zh: "啦啦队长",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "western",
    pos: "adj.",
    zh: "西部的",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "tie",
    pos: "v.",
    zh: "平局",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "recreation",
    pos: "n.",
    zh: "娱乐，消遣",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "outscore",
    pos: "v.",
    zh: "比分领先",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "baseball",
    pos: "n.",
    zh: "棒球",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "basketball",
    pos: "n.",
    zh: "篮球",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "ground",
    pos: "n.",
    zh: "场地",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "referee",
    pos: "n.",
    zh: "裁判员，裁判",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "show",
    pos: "n.",
    zh: "表演，演出",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "coach",
    pos: "n.",
    zh: "教练",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "entertainment",
    pos: "n.",
    zh: "娱乐，消遣",
    tags: ["day53", "ielts", "listening"],
    star: false
  },
  {
    en: "premiere",
    pos: "v.",
    zh: "首次公演，首映，突出的",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "mask",
    pos: "n.",
    zh: "面具",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "set",
    pos: "n.",
    zh: "布景",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "organ",
    pos: "n.",
    zh: "风琴",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "accordion",
    pos: "n.",
    zh: "手风琴",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "keyboard",
    pos: "n.",
    zh: "琴键，键盘",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "instrument",
    pos: "n.",
    zh: "乐器",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "band",
    pos: "n.",
    zh: "乐队",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "tune",
    pos: "n.",
    zh: "曲子",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "beat",
    pos: "n.",
    zh: "节拍，拍子",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "symphony",
    pos: "n.",
    zh: "交响乐",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "lyric",
    pos: "n.",
    zh: "歌词",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "concerto",
    pos: "n.",
    zh: "协奏曲",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "sonata",
    pos: "n.",
    zh: "奏鸣曲",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "melodious",
    pos: "adj.",
    zh: "悦耳的",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "pop",
    pos: "adj.",
    zh: "热门的，通俗的，热门",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "soulful",
    pos: "adj.",
    zh: "充满热情的",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "jazz",
    pos: "adj.",
    zh: "爵士乐的，奏爵士乐，爵士乐",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "rock",
    pos: "v.",
    zh: "摆动，摇滚",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "blue",
    pos: "n.",
    zh: "蓝调",
    tags: ["day54", "ielts", "listening"],
    star: false
  },
  {
    en: "conductor",
    pos: "n.",
    zh: "指挥",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "exhibition",
    pos: "n.",
    zh: "展览",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "drum",
    pos: "n.",
    zh: "鼓",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "sketch",
    pos: "n.",
    zh: "素描，草图",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "brass",
    pos: "n.",
    zh: "管铜乐器",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "mural",
    pos: "adj.",
    zh: "壁上的，壁画",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "trumpet",
    pos: "n.",
    zh: "小号",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "sculpt",
    pos: "v.",
    zh: "雕刻",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "horn",
    pos: "n.",
    zh: "号，喇叭，管",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "pottery",
    pos: "n.",
    zh: "陶器",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "bugle",
    pos: "n.",
    zh: "军号",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "potter",
    pos: "n.",
    zh: "陶塑家",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "flute",
    pos: "n.",
    zh: "笛子",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "craftsman",
    pos: "n.",
    zh: "木匠",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "oboe",
    pos: "n.",
    zh: "双簧管",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "photograph",
    pos: "n.",
    zh: "摄影作品，照片",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "clarinet",
    pos: "n.",
    zh: "单簧管",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "frame",
    pos: "v.",
    zh: "构成，框架，画框",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "bass",
    pos: "n.",
    zh: "贝斯",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "portrait",
    pos: "n.",
    zh: "人物肖像",
    tags: ["day55", "ielts", "listening"],
    star: false
  },
  {
    en: "cello",
    pos: "n.",
    zh: "大提琴",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "harp",
    pos: "n.",
    zh: "竖琴",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "piano",
    pos: "n.",
    zh: "钢琴",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "guitar",
    pos: "n.",
    zh: "吉他",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "tone",
    pos: "n.",
    zh: "音调",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "music hall",
    zh: "音乐厅",
    tags: ["day56", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "classical music",
    zh: "古典音乐",
    tags: ["day56", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "hip pop",
    zh: "街舞",
    tags: ["day56", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "folk song",
    zh: "民歌",
    tags: ["day56", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "pulse",
    pos: "n.",
    zh: "脉搏",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "mixture",
    pos: "n.",
    zh: "混合冲剂",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "operation",
    pos: "n.",
    zh: "手术",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "penicillin",
    pos: "n.",
    zh: "青霉素",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "dental",
    pos: "adj.",
    zh: "牙齿的",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "charge",
    pos: "v.",
    zh: "收费，医药费，费用",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "exercise",
    pos: "v.",
    zh: "锻炼，练习",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "pharmacy",
    pos: "n.",
    zh: "药店",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "precaution",
    pos: "n.",
    zh: "预防",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "eye",
    pos: "n.",
    zh: "眼睛",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "skin",
    pos: "n.",
    zh: "皮肤",
    tags: ["day56", "ielts", "listening"],
    star: false
  },
  {
    en: "medium-built",
    pos: "adj.",
    zh: "中等身材的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "figure",
    pos: "n.",
    zh: "身材",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "cheek",
    pos: "n.",
    zh: "脸颊",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "height",
    pos: "n.",
    zh: "身高",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "chin",
    pos: "n.",
    zh: "下巴",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "tall",
    pos: "adj.",
    zh: "高的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "lip",
    pos: "n.",
    zh: "嘴唇",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "slim",
    pos: "adj.",
    zh: "苗条的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "nose",
    pos: "n.",
    zh: "鼻子",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "lean",
    pos: "adj.",
    zh: "瘦的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "ambitious",
    pos: "adj.",
    zh: "雄心壮志的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "well-built",
    pos: "adj.",
    zh: "健壮的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "analytical",
    pos: "adj.",
    zh: "善于分析的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "sturdy",
    pos: "adj.",
    zh: "强健的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "apprehensive",
    pos: "adj.",
    zh: "有理解力的，担心的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "stout",
    pos: "adj.",
    zh: "粗壮的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "aspiring",
    pos: "adj.",
    zh: "有志气的，有抱负的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "plump adj",
    zh: "丰满的",
    tags: ["day57", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "competent",
    pos: "adj.",
    zh: "能胜任的",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "overweight",
    pos: "n.",
    zh: "超重",
    tags: ["day57", "ielts", "listening"],
    star: false
  },
  {
    en: "confident",
    pos: "adj.",
    zh: "自信的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "broad-shouldered",
    pos: "adj.",
    zh: "宽肩膀的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "considerate",
    pos: "adj.",
    zh: "体贴的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "bald",
    pos: "adj.",
    zh: "秃顶的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "blond",
    pos: "adj.",
    zh: "金发的，金发女人",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "dependable",
    pos: "adj.",
    zh: "可靠的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "hair",
    pos: "n.",
    zh: "头发",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "diplomatic",
    pos: "adj.",
    zh: "老练的，有策略的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "hairstyle",
    pos: "n.",
    zh: "发型",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "dutiful",
    pos: "adj.",
    zh: "尽职的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "alert",
    pos: "adj.",
    zh: "机灵的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "responsible",
    pos: "adj.",
    zh: "负责任的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "hospitable",
    pos: "adj.",
    zh: "殷勤的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "earnest",
    pos: "adj.",
    zh: "认真的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "humble",
    pos: "adj.",
    zh: "恭顺的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "well-educated",
    pos: "adj.",
    zh: "受过良好教育的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "humorous",
    pos: "adj.",
    zh: "幽默的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "efficient",
    pos: "adj.",
    zh: "有效率的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "impartial",
    pos: "adj.",
    zh: "公正的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "enthusiastic",
    pos: "adj.",
    zh: "充满热情的",
    tags: ["day58", "ielts", "listening"],
    star: false
  },
  {
    en: "ingenious",
    pos: "adj.",
    zh: "有独创性的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "expressive",
    pos: "adj.",
    zh: "善于表达的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "initiative",
    pos: "n.",
    zh: "首创精神",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "faithful",
    pos: "adj.",
    zh: "守信的，忠诚的，信徒",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "just",
    pos: "adj.",
    zh: "正直的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "forceful",
    pos: "adj.",
    zh: "坚强的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "loyal",
    pos: "adj.",
    zh: "忠心耿耿的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "frank",
    pos: "adj.",
    zh: "直率的，真诚的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "modest",
    pos: "adj.",
    zh: "谦虚的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "generous",
    pos: "adj.",
    zh: "宽宏大量的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "motivated",
    pos: "adj.",
    zh: "目的明确的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "hearty",
    pos: "adj.",
    zh: "精神饱满的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "reliable",
    pos: "adj.",
    zh: "可信赖的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "orderly",
    pos: "adj.",
    zh: "守纪律的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "self-conscious",
    pos: "adj.",
    zh: "自觉的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "original",
    pos: "adj.",
    zh: "有原创性的，原作",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "selfless",
    pos: "adj.",
    zh: "无私的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "qualified",
    pos: "adj.",
    zh: "合格的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "sweet-tempered",
    pos: "adj.",
    zh: "性情温和的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "tireless",
    pos: "adj.",
    zh: "孜孜不倦的",
    tags: ["day59", "ielts", "listening"],
    star: false
  },
  {
    en: "motor car",
    zh: "汽车",
    tags: ["day60", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "electric car",
    zh: "电车",
    tags: ["day60", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "trolley",
    pos: "n.",
    zh: "电车",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "commuter car",
    zh: "市郊客车",
    tags: ["day60", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "railroad car",
    zh: "有轨电车",
    tags: ["day60", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "passenger",
    pos: "n.",
    zh: "乘客",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "shuttle",
    pos: "n.",
    zh: "往返汽车，穿梭巴士",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "plane",
    pos: "n.",
    zh: "飞机",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "tube",
    pos: "n.",
    zh: "地铁",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "yacht",
    pos: "n.",
    zh: "游艇",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "signpost",
    pos: "n.",
    zh: "路标",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "amber light",
    zh: "黄灯",
    tags: ["day60", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "mall",
    pos: "n.",
    zh: "购物中心",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "store",
    pos: "n.",
    zh: "商场",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "grocery",
    pos: "n.",
    zh: "杂货店",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "window-shopping",
    pos: "n.",
    zh: "逛商店",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "shawl",
    pos: "n.",
    zh: "披肩",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "chain store",
    pos: "n.",
    zh: "连锁店",
    tags: ["day60", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "scarf",
    pos: "n.",
    zh: "围巾",
    tags: ["day60", "ielts", "listening"],
    star: false
  },
  {
    en: "convenience store",
    pos: "n.",
    zh: "便利店",
    tags: ["day60", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "department store",
    pos: "n.",
    zh: "百货商店",
    tags: ["day61", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "goods",
    pos: "n.",
    zh: "商品",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "on sale",
    zh: "促销",
    tags: ["day61", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "for sale",
    zh: "待售",
    tags: ["day61", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "stock",
    pos: "n.",
    zh: "储备品，供应物",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "out of stock",
    zh: "断货",
    tags: ["day61", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "fashionable",
    pos: "adj.",
    zh: "时尚的",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "outdated",
    pos: "adj.",
    zh: "过时的",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "old-fashioned",
    pos: "adj.",
    zh: "过时的",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "receipt",
    pos: "n.",
    zh: "收据，发票",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "cashier",
    pos: "n.",
    zh: "出纳员",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "necessity",
    pos: "n.",
    zh: "必需品",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "waiter",
    pos: "n.",
    zh: "侍者",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "seafood",
    pos: "n.",
    zh: "海鲜",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "cabbage",
    pos: "n.",
    zh: "卷心菜",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "tough",
    pos: "adj.",
    zh: "硬的，强硬的",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "bitterness",
    pos: "n.",
    zh: "苦味；心酸",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "lawyer",
    pos: "n.",
    zh: "律师",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "chairman",
    pos: "n.",
    zh: "主席",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "therapist",
    pos: "n.",
    zh: "治疗专家",
    tags: ["day61", "ielts", "listening"],
    star: false
  },
  {
    en: "officer",
    pos: "n.",
    zh: "官员，职员",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "stockbroker",
    pos: "n.",
    zh: "股票经纪人",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "president",
    pos: "n.",
    zh: "总统",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "pilot",
    pos: "n.",
    zh: "飞行员",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "manager",
    pos: "n.",
    zh: "经理",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "musician",
    pos: "n.",
    zh: "音乐家",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "representative",
    pos: "n.",
    zh: "代表",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "writer",
    pos: "n.",
    zh: "作家",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "supervisor",
    pos: "n.",
    zh: "总管",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "blue-collar",
    pos: "n.",
    zh: "蓝领阶级的",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "clerk",
    pos: "n.",
    zh: "职员",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "white-collar",
    pos: "adj.",
    zh: "白领阶层的",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "interview",
    pos: "n.",
    zh: "面试",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "interviewee",
    pos: "n.",
    zh: "受访者；被面试人员",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "trainee",
    pos: "n.",
    zh: "实习生；新兵",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "interviewer",
    pos: "n.",
    zh: "面试官；会见者",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "dentist",
    pos: "n.",
    zh: "牙医",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "occupation",
    pos: "n.",
    zh: "职业",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "artist",
    pos: "n.",
    zh: "艺术家",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "candidate",
    pos: "n.",
    zh: "候选人",
    tags: ["day62", "ielts", "listening"],
    star: false
  },
  {
    en: "programmer",
    pos: "n.",
    zh: "程序员",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "applicant",
    pos: "n.",
    zh: "申请者",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "secretary",
    pos: "n.",
    zh: "秘书",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "staff",
    pos: "n.",
    zh: "员工",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "editor",
    pos: "n.",
    zh: "编辑",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "resume",
    pos: "n.",
    zh: "简历",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "market",
    pos: "n.",
    zh: "市场",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "architect",
    pos: "n.",
    zh: "建筑师",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "questionnaire",
    pos: "n.",
    zh: "问卷调查",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "reporter",
    pos: "n.",
    zh: "记者",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "qualification",
    pos: "n.",
    zh: "资格，条件",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "journalist",
    pos: "n.",
    zh: "新闻记者，新闻工作者",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "reward",
    pos: "n.",
    zh: "报酬",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "correspondent",
    pos: "n.",
    zh: "通讯记者",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "bank",
    pos: "n.",
    zh: "银行",
    tags: ["day63", "ielts", "listening"],
    star: false
  },
  {
    en: "commercial bank",
    zh: "商业银行",
    tags: ["day63", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "investment bank",
    zh: "投资银行",
    tags: ["day63", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "savings account",
    zh: "存折；储蓄账户",
    tags: ["day63", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "current account",
    zh: "活期账户",
    tags: ["day63", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "deposit account",
    zh: "定期账户",
    tags: ["day63", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "account bill",
    zh: "账单",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "account-payee",
    zh: "转账支票",
    tags: ["day64", "ielts", "listening"],
    star: false
  },
  {
    en: "insurance",
    pos: "n.",
    zh: "保险",
    tags: ["day64", "ielts", "listening"],
    star: false
  },
  {
    en: "password",
    pos: "n.",
    zh: "口令，密码",
    tags: ["day64", "ielts", "listening"],
    star: false
  },
  {
    en: "rate",
    pos: "n.",
    zh: "比率",
    tags: ["day64", "ielts", "listening"],
    star: false
  },
  {
    en: "annual interest rate",
    zh: "年利率",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "exchange rate",
    zh: "汇率",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "primary school",
    pos: "n.",
    zh: "小学",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "secondary school",
    pos: "n.",
    zh: "中学",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "high school",
    pos: "n.",
    zh: "中学",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "junior school",
    pos: "n.",
    zh: "初中",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "senior school",
    pos: "n.",
    zh: "高中",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "graduate school",
    pos: "n.",
    zh: "研究院",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "school of arts",
    pos: "n.",
    zh: "文科学校",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "school of science",
    pos: "n.",
    zh: "理科学校",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "vocational school",
    pos: "n.",
    zh: "职业学校",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "full-time boarding school",
    pos: "n.",
    zh: "全日制寄宿学校",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "key university",
    pos: "n.",
    zh: "重点大学",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "comprehensive university",
    pos: "n.",
    zh: "综合大学",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "normal university",
    pos: "n.",
    zh: "师范大学",
    tags: ["day64", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "medical university",
    pos: "n.",
    zh: "医学院",
    tags: ["day65", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "engineering institute",
    pos: "n.",
    zh: "工业学校",
    tags: ["day65", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "community college",
    pos: "n.",
    zh: "社区学校",
    tags: ["day65", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "campus",
    pos: "n.",
    zh: "大学）校园",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "apply",
    pos: "v.",
    zh: "申请",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "textbook",
    pos: "n.",
    zh: "教科书",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "handout",
    pos: "n.",
    zh: "讲义",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "outline",
    pos: "n.",
    zh: "提纲；描述轮廓",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "syllabus",
    pos: "n.",
    zh: "提纲",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "material",
    pos: "n.",
    zh: "材料",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "assignment",
    pos: "n.",
    zh: "作业，分派",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "essay",
    pos: "n.",
    zh: "短论文；评论；尝试",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "paper",
    pos: "n.",
    zh: "论文",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "assessment",
    pos: "n.",
    zh: "评估",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "poll",
    pos: "n.",
    zh: "民意调查；投票",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "feedback",
    pos: "n.",
    zh: "反馈",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "database",
    pos: "n.",
    zh: "数据库",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "statistics",
    pos: "n.",
    zh: "统计数据",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "investigation",
    pos: "n.",
    zh: "调查，研究",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "content",
    pos: "n.",
    zh: "内容；使满足；满意的",
    tags: ["day65", "ielts", "listening"],
    star: false
  },
  {
    en: "vice-president",
    pos: "n.",
    zh: "副校长",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "chancellor",
    pos: "n.",
    zh: "名誉校长",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "dean",
    pos: "n.",
    zh: "大学校长",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "coordinator",
    pos: "n.",
    zh: "班主任",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "building",
    pos: "n.",
    zh: "大楼",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "centre",
    pos: "n.",
    zh: "中心",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "main central of social life",
    pos: "n.",
    zh: "社会活动中心",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "hi-tech centre",
    pos: "n.",
    zh: "高科技中心",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "city centre",
    pos: "n.",
    zh: "市中心",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "sports centre",
    pos: "n.",
    zh: "体育中心",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "central park",
    pos: "n.",
    zh: "中央公园",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "sport club",
    pos: "n.",
    zh: "健身俱乐部",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "salad bar",
    pos: "n.",
    zh: "沙拉台",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "pub",
    pos: "n.",
    zh: "酒吧",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "main hall",
    pos: "n.",
    zh: "大厅，主堂",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "main square",
    pos: "n.",
    zh: "主广场",
    tags: ["day66", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "indoor",
    pos: "adj.",
    zh: "室内的",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "pond",
    pos: "n.",
    zh: "池塘",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "garden",
    pos: "n.",
    zh: "花园",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "island",
    pos: "n.",
    zh: "岛，岛屿",
    tags: ["day66", "ielts", "listening"],
    star: false
  },
  {
    en: "stream",
    pos: "n.",
    zh: "小溪；流出；涌出",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "length",
    pos: "n.",
    zh: "长度",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "zoology",
    pos: "n.",
    zh: "动物学",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "entomology",
    pos: "n.",
    zh: "昆虫学",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "animal",
    pos: "n.",
    zh: "动物",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "creature",
    pos: "n.",
    zh: "生物",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "bird",
    pos: "n.",
    zh: "鸟类",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "wildlife",
    pos: "n.",
    zh: "野生动植物",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "mammal",
    pos: "n.",
    zh: "哺乳动物",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "species",
    pos: "n.",
    zh: "物种；种类",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "subspecies",
    pos: "n.",
    zh: "亚种",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "female",
    pos: "n.",
    zh: "雌性；雌性的",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "male",
    pos: "adj.",
    zh: "雄性的",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "horse",
    pos: "n.",
    zh: "马；骑马",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "mare",
    pos: "n.",
    zh: "母马",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "ecosystem",
    pos: "n.",
    zh: "生态系统",
    tags: ["day67", "ielts", "listening"],
    star: false
  },
  {
    en: "energy source",
    zh: "能源",
    tags: ["day67", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "nuclear energy",
    zh: "核能",
    tags: ["day67", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "solar energy",
    zh: "太阳能",
    tags: ["day67", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "solar radiation",
    zh: "太阳辐射",
    tags: ["day67", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "carbon",
    pos: "n.",
    zh: "碳",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "oxygen",
    pos: "n.",
    zh: "氧气",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "ozone",
    pos: "n.",
    zh: "臭氧",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "ozone layer",
    zh: "臭氧层",
    tags: ["day68", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "vegetation",
    pos: "n.",
    zh: "植被",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "barren",
    pos: "n.",
    zh: "贫瘠的；荒地",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "grassland",
    pos: "n.",
    zh: "草原；牧草地",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "woodland",
    pos: "n.",
    zh: "林地",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "forest",
    pos: "n.",
    zh: "森林",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "tropical rain forest",
    zh: "热带雨林",
    tags: ["day68", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "original forest",
    zh: "原始森林",
    tags: ["day68", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "soil",
    pos: "n.",
    zh: "土壤",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "fertile soil",
    zh: "肥沃的土壤",
    tags: ["day68", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "soil erosion",
    zh: "土壤侵蚀",
    tags: ["day68", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "recycling",
    pos: "n.",
    zh: "循环，再利用",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "reuse",
    pos: "v.",
    zh: "重新利用",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "reusable",
    pos: "adj.",
    zh: "可再度使用的",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "biodegradable",
    pos: "adj.",
    zh: "能进行生物降解的",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "cleanup",
    pos: "n.",
    zh: "清除，清理",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "sanitary",
    pos: "adj.",
    zh: "卫生的，清洁的",
    tags: ["day68", "ielts", "listening"],
    star: false
  },
  {
    en: "durable",
    pos: "adj.",
    zh: "耐用的，持久的",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "decomposition",
    pos: "n.",
    zh: "分解，糜烂",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "classify",
    pos: "v.",
    zh: "分类",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "purification",
    pos: "n.",
    zh: "净化",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "disposable",
    pos: "adj.",
    zh: "一次性的",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "fertilizer",
    pos: "n.",
    zh: "肥料",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "organic fertilizer",
    zh: "有机肥料",
    tags: ["day69", "ielts", "listening", "phrase"],
    star: false
  },
  {
    en: "nature",
    pos: "n.",
    zh: "自然",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "indispensable",
    pos: "adj.",
    zh: "不可或缺的",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "modernize",
    pos: "v.",
    zh: "使现代化",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "conservation",
    pos: "n.",
    zh: "保护",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "economist",
    pos: "n.",
    zh: "经济学家",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "economic",
    pos: "adj.",
    zh: "经济的；经济学的",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "globalization",
    pos: "n.",
    zh: "全球化",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "boom",
    pos: "n.",
    zh: "经济繁荣；兴隆",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "prosperous",
    pos: "adj.",
    zh: "繁荣的",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "recovery",
    pos: "n.",
    zh: "经济复原",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "recession",
    pos: "n.",
    zh: "衰退，萧条",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "depression",
    pos: "n.",
    zh: "衰退",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "stagnation",
    pos: "n.",
    zh: "衰退；滞后",
    tags: ["day69", "ielts", "listening"],
    star: false
  },
  {
    en: "trade",
    pos: "v.",
    zh: "贸易，交易",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "power",
    pos: "n.",
    zh: "力量",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "scarcity",
    pos: "n.",
    zh: "缺乏，短缺",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "tariff",
    pos: "n.",
    zh: "关税",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "treaty",
    pos: "n.",
    zh: "条约，谈判",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "surplus",
    pos: "adj.",
    zh: "盈余，过剩的",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "deficit",
    pos: "n.",
    zh: "赤字",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "crisis",
    pos: "n.",
    zh: "危机",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "hydroelectric",
    pos: "adj.",
    zh: "水力发电的",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "engineering",
    pos: "adj.",
    zh: "工程学",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "flow",
    pos: "v.",
    zh: "流动；循环",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "management",
    pos: "n.",
    zh: "管理",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "quality",
    pos: "n.",
    zh: "质量",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "substation",
    pos: "n.",
    zh: "变电站",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "voltage",
    pos: "n.",
    zh: "电压",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "current",
    pos: "n.",
    zh: "电流",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "resistor",
    pos: "n.",
    zh: "电阻",
    tags: ["day70", "ielts", "listening"],
    star: false
  },
  {
    en: "assimilate",
    pos: "v.",
    zh: "融入",
    tags: ["day71", "ielts", "writing"],
    star: false
  },
  {
    en: "country of origin",
    pos: "n.",
    zh: "祖国",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "culturally and linguistically diverse",
    zh: "不同的文化和语言背景",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cross-cultural communication",
    zh: "跨文化交流",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural assimilation",
    zh: "文化同化",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural background",
    zh: "文化背景",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural clash",
    zh: "文化冲突，碰撞",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural diversity",
    zh: "文化多元性",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural heritage",
    zh: "文化遗产",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural identity",
    zh: "文化认同感",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural impact",
    zh: "文化影响",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural sustainability",
    zh: "文化可延续性",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cultural tradition",
    zh: "文化传统",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "minority culture",
    zh: "少数文化",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "minority ethnic group",
    zh: "少数民族",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "minority language",
    zh: "少数语言",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "global integration",
    zh: "全球一体化",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "global village",
    zh: "地球村",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "globalized world",
    zh: "全球化的世界",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "historic places",
    zh: "历史遗址",
    tags: ["day71", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "home country",
    zh: "祖国",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "host country",
    zh: "当地社区",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "impoverished",
    zh: "贫穷国家/欠发达国家",
    tags: ["day72", "ielts", "writing"],
    star: false
  },
  {
    en: "industrialised",
    zh: "工业化国家/发达国家",
    tags: ["day72", "ielts", "writing"],
    star: false
  },
  {
    en: "language barrier",
    zh: "语言障碍",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "language difference",
    zh: "语言差异",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "multi-cultural society",
    zh: "多元文化社会",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "multicultural setting",
    zh: "多元文化环境",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "multiracial",
    zh: "多民族的",
    tags: ["day72", "ielts", "writing"],
    star: false
  },
  {
    en: "nationals",
    zh: "国民，公民",
    tags: ["day72", "ielts", "writing"],
    star: false
  },
  {
    en: "native language",
    zh: "母语",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "on a global scale",
    zh: "全球范围",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "tourism industry",
    zh: "旅游业",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "tourist attractions",
    zh: "旅游景点",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "tourist destinations",
    zh: "旅游胜地",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "transition countries",
    zh: "经济转型的国家",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "western culture",
    zh: "西方文化",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "westernization",
    zh: "西方化",
    tags: ["day72", "ielts", "writing"],
    star: false
  },
  {
    en: "consumer society",
    zh: "崇尚消费的社会",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "increase international trade",
    zh: "增进国际贸易",
    tags: ["day72", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are too materialistic",
    zh: "过于物质化",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "luxury items",
    zh: "奢侈品",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "multinational",
    zh: "跨国公司",
    tags: ["day73", "ielts", "writing"],
    star: false
  },
  {
    en: "international aid",
    zh: "国际援助",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "threaten cultural diversity",
    zh: "威胁文化的多样性",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "misuse the aid money",
    zh: "滥用援助资金",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "donor countries",
    zh: "援助国",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "recipient countries",
    zh: "受援国",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are more interconnected",
    zh: "彼此之间更密切的相互联系着",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "protect their heritage",
    zh: "保护他们的文化传承",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "form part of their heritage",
    zh: "构成他们文化传承的一部分",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "heritage",
    zh: "节",
    tags: ["day73", "ielts", "writing"],
    star: false
  },
  {
    en: "form part of their cultural identity",
    zh: "构成他们文化特征的一部分",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "erode their sense of cultural identity",
    zh: "削弱他们的文化认同感",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "customs and traditions",
    zh: "风俗和传统",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "a multicultural society",
    zh: "一个多元化的社会",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are more open-minded",
    zh: "心态更开放",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "build good relationships",
    zh: "建立良好的关系",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "understand and appreciate cultural differences",
    zh: "理解而且欣赏文化差异",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "promote peace and understanding",
    zh: "促进和平与互相理解",
    tags: ["day73", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "authorities",
    zh: "权力机构",
    tags: ["day74", "ielts", "writing"],
    star: false
  },
  {
    en: "budget constraint",
    zh: "预算限制",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "deprived",
    zh: "贫困人口",
    tags: ["day74", "ielts", "writing"],
    star: false
  },
  {
    en: "for-profit corporation",
    zh: "私人企业",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "financial aid",
    zh: "经济资助",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "government agencies",
    zh: "政府官员",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "government budget",
    zh: "政府预算",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "government funding",
    zh: "政府投资",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "income disparity",
    zh: "收入不均",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "misspending",
    zh: "误用",
    tags: ["day74", "ielts", "writing"],
    star: false
  },
  {
    en: "people from low-income backgrounds",
    zh: "低收入群体",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "policymaker",
    zh: "决策者",
    tags: ["day74", "ielts", "writing"],
    star: false
  },
  {
    en: "private sector",
    zh: "私人企业",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "public funds",
    zh: "公款",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "public expenditure",
    zh: "公共支出",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "public service",
    zh: "公共服务（如交通，医疗）",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "social problems",
    zh: "社会问题",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "state-owned",
    zh: "国有的，国营的",
    tags: ["day74", "ielts", "writing"],
    star: false
  },
  {
    en: "state-funded",
    zh: "国家资助的",
    tags: ["day74", "ielts", "writing"],
    star: false
  },
  {
    en: "state sector",
    zh: "公共行业",
    tags: ["day74", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "taxpayer",
    zh: "纳税人",
    tags: ["day75", "ielts", "writing"],
    star: false
  },
  {
    en: "underdeveloped",
    zh: "欠发达/贫穷地区",
    tags: ["day75", "ielts", "writing"],
    star: false
  },
  {
    en: "utility",
    zh: "公共服务（如水电煤气供应）",
    tags: ["day75", "ielts", "writing"],
    star: false
  },
  {
    en: "vulnerable groups",
    zh: "弱势群体",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "make the country more competitive",
    zh: "让国家变得更具竞争力",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "improve public services",
    zh: "改善公共服务",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "state pensions",
    zh: "由政府发放的公共养老金",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "protect national security",
    zh: "保卫公家的安全",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "maintain law and order",
    zh: "维持法律和社会秩序",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "improve infrastructure",
    zh: "改善基础设施",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "reduce poverty",
    zh: "减少贫困现象",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "reduce social inequality",
    zh: "减少社会不公",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "is practical and fair",
    zh: "是切实可行而且公正的",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "is a short-sighted policy",
    zh: "是一项短视的政策",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "run campaign to encourage people",
    zh: "举办大规模的宣传活动以鼓励人",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "promote fair competition",
    zh: "促进公平的竞争",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "make large profits",
    zh: "获得高额的利润",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "rely on the government for money",
    zh: "依赖政府的资助",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "become financially independent",
    zh: "实现财务独立",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "should allocate money fairly",
    zh: "应该公正地分配资金",
    tags: ["day75", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "is vital to a country's development",
    zh: "对于国家的发展是至关重要的",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "government tax revenue",
    zh: "政府的税收",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "contribute to the economy",
    zh: "对经济做贡献",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "make the country less competitive",
    zh: "削弱国家的竞争力",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "boost",
    zh: "振兴/阻碍经济",
    tags: ["day76", "ielts", "writing"],
    star: false
  },
  {
    en: "lead a similar lifestyle",
    zh: "过着相似的生活",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are driven by profit",
    zh: "是盈利目的所驱动的",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "lead to more corruption",
    zh: "导致更多的腐败",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "armed forces",
    zh: "武装力量",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "military technology",
    zh: "军事科技",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "military spending",
    zh: "军用开支",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "criminal",
    zh: "罪犯，违法者",
    tags: ["day76", "ielts", "writing"],
    star: false
  },
  {
    en: "commit crimes",
    zh: "动宾短语)犯法",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "fine",
    zh: "罚款",
    tags: ["day76", "ielts", "writing"],
    star: false
  },
  {
    en: "non-serious crimes",
    zh: "轻罪",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "prison terms",
    zh: "刑罚",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "serious crimes",
    zh: "严重的罪行",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "repeat offender",
    zh: "惯犯",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "repeat offense",
    zh: "再次犯罪",
    tags: ["day76", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "retribution",
    zh: "惩罚",
    tags: ["day76", "ielts", "writing"],
    star: false
  },
  {
    en: "nonviolent solutions",
    zh: "和平的方法",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "one-time offenders",
    zh: "首犯",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "reduce crime rates",
    zh: "降低犯罪率",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "prevent crime",
    zh: "预防犯罪",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "violent crime",
    zh: "暴力犯罪",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "deter anti-social behaviour",
    zh: "震慑反社会行为",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "reform criminals",
    zh: "改造罪犯",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "have a steady source of income",
    zh: "有一个稳定的收入来源",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "become law-abiding citizens",
    zh: "变成守法的公民",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "give them harsh punishment",
    zh: "给他们严厉的惩罚",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are sent to prison",
    zh: "被关进监狱",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "serve long sentences",
    zh: "长时间的服刑",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cause prison overcrowding",
    zh: "导致监狱里人满为患",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "lead to resentment",
    zh: "导致怨恨情绪",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are likely to re-offend",
    zh: "很可能再次犯罪",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "address the root causes of crime",
    zh: "从根本上去解决犯罪问题",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "threaten people's safety",
    zh: "威胁人们的安全",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "increase police patrols",
    zh: "强化治安巡逻",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "install security cameras",
    zh: "安装安全监控摄像头",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "media violence",
    zh: "媒体里的暴力内容",
    tags: ["day77", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "glorify violence",
    zh: "美化暴力",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "develop anti-social behaviour",
    zh: "形成反社会行为",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "computer hackers",
    zh: "电脑黑客",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "online fraud",
    zh: "网络诈骗",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "break traffic rules",
    zh: "违反交通规则",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "improve traffic",
    zh: "改善交通安全",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "involve high risks",
    zh: "涉及到很高的风险",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "biological differences",
    zh: "生理差异",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "childcare responsibility",
    zh: "照顾小孩的责任",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "dual-income",
    zh: "父母都工作的家庭",
    tags: ["day78", "ielts", "writing"],
    star: false
  },
  {
    en: "gender appropriate",
    zh: "性别合适的",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "gender balance",
    zh: "性别平衡",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "gender bias",
    zh: "性别的偏见",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "gender difference",
    zh: "男女差异",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "gender equality",
    zh: "男女平等",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "gender imbalance",
    zh: "男女不平等",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "gender role",
    zh: "性别角色",
    tags: ["day78", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "household",
    zh: "家庭责任",
    tags: ["day78", "ielts", "writing"],
    star: false
  },
  {
    en: "male-dominated",
    zh: "男性主导的",
    tags: ["day78", "ielts", "writing"],
    star: false
  },
  {
    en: "masculinity",
    zh: "男子气概",
    tags: ["day78", "ielts", "writing"],
    star: false
  },
  {
    en: "physical capabilities",
    zh: "身体能力",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "sex ratio",
    zh: "性别比例",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "sex discrimination",
    zh: "性别歧视",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "promote gender equality",
    zh: "促进性别平等",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "violate their privacy",
    zh: "侵犯他们的隐私",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "aging population",
    zh: "老龄人口",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "aging society",
    zh: "人口老龄化",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "caregivers",
    zh: "护理工作人员",
    tags: ["day79", "ielts", "writing"],
    star: false
  },
  {
    en: "health care",
    zh: "健康护理",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "later years",
    zh: "晚年",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "retiree",
    zh: "退休人员",
    tags: ["day79", "ielts", "writing"],
    star: false
  },
  {
    en: "retirement age",
    zh: "退休年龄",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "retirement homes",
    zh: "养老院",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "sense of exclusion",
    zh: "被孤立或者被抛弃的感觉",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "the elderly",
    zh: "老年人",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "younger generation",
    zh: "年轻一代",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "generation gap",
    zh: "代沟",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "lead to misunderstanding",
    zh: "导致误解",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "anti-pollution policies",
    zh: "治污政策",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "biodegradable materials",
    zh: "可分解材料",
    tags: ["day79", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "carbon emissions",
    zh: "碳排放",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "carbon footprint",
    zh: "碳足迹",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "ecological sustainability",
    zh: "生态持续性",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "energy efficient",
    zh: "节能的",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "energy inefficient",
    zh: "耗能的",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmental awareness",
    zh: "环境意识",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmental degradation",
    zh: "环境恶化",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmental effect",
    zh: "对环境长生殿后果和影响",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmental protection",
    zh: "环境保护",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmental responsibility",
    zh: "环境责任",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmental standards",
    zh: "环境标准",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmentally",
    zh: "环保的",
    tags: ["day80", "ielts", "writing"],
    star: false
  },
  {
    en: "global warming",
    zh: "全球变暖",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "greenhouse gas emissions",
    zh: "温室气体排放",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "natural resources",
    zh: "自然资源",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "nature conservation",
    zh: "自然维护",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "pollution reduction",
    zh: "污染减排/缓解措施",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "resource-intensive",
    zh: "消耗资源的",
    tags: ["day80", "ielts", "writing"],
    star: false
  },
  {
    en: "wildlife habitat",
    zh: "野生生物栖息地",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "boost crop yield",
    zh: "提高农作物产量",
    tags: ["day80", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "damage the environment",
    zh: "破坏环境",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "household waste",
    zh: "家庭的生活垃圾",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "industrial waste",
    zh: "工业垃圾",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "industrial production",
    zh: "工业生产",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "toxic waste",
    zh: "有毒的废料",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "cause smog and acid rain",
    zh: "导致雾霾和酸雨",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "traffic noise",
    zh: "交通噪声",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "car fumes",
    zh: "汽车尾气",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "increase greenhouse gas emissions",
    zh: "导致温室效应气体的排放增多",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "fossil fuels",
    zh: "化石燃料",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "wind energy",
    zh: "风能",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "water power",
    zh: "水电",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are non-renewable energy sources",
    zh: "是不可再生的能源",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "energy crisis",
    zh: "能源危机",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "depend on weather conditions",
    zh: "取决于天气的状况",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "help reduce greenhouse gas emissions",
    zh: "有助于减少温室效应气体的排放量",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "rapid population growth",
    zh: "人口的快速增长",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "consumer goods",
    zh: "消费品",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "use more raw materials",
    zh: "使用更多的原材料",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "promote sustainable development",
    zh: "促进可持续发展",
    tags: ["day81", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "conserve energy",
    zh: "节约能源",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "meet their environmental responsibilities",
    zh: "履行他们对于环境的义务",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are overcrowded",
    zh: "过度拥挤",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "genetically-modified food",
    zh: "转基因食物",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "log forests",
    zh: "砍伐森林",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "the tourism industry",
    zh: "旅游产业",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "long-distance food transport",
    zh: "被远距离运输的食物",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "animal testing",
    zh: "动物研究，动物实验",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "animal maltreatment",
    zh: "虐待动物",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "animal pain",
    zh: "动物的痛苦",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "animal rights",
    zh: "动物权利",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "animal rights activists",
    zh: "动物权利运动者",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "die out",
    zh: "消失，消亡",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "domestic animals",
    zh: "家养动物",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "endangered",
    zh: "稀有动物",
    tags: ["day82", "ielts", "writing"],
    star: false
  },
  {
    en: "extinct",
    zh: "灭绝",
    tags: ["day82", "ielts", "writing"],
    star: false
  },
  {
    en: "farm animals",
    zh: "农畜，家畜",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "food chain",
    zh: "食物链",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "higher animals",
    zh: "高等动物",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "natural habitat",
    zh: "自然栖息地",
    tags: ["day82", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "natural surroundings",
    zh: "自然环境",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "pet",
    zh: "宠物",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "sentient",
    zh: "意识，有感知的",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "wild animals",
    zh: "野生动物",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "raise awareness of wildlife protection",
    zh: "提高野生动物保护意识",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "reduce biodiversity",
    zh: "削弱生物的多样性",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "ivory products",
    zh: "象牙交易",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "illegal wildlife products",
    zh: "非法的野生生物制品",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "are kept in cages",
    zh: "被关在笼子里",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "adolescence",
    zh: "青春期",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "adulthood",
    zh: "成年",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "age-appropriate",
    zh: "适龄的",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "aggressive",
    zh: "好斗的，有进取心的",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "anti-social",
    zh: "反社会",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "at school",
    zh: "在学校",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "at college or university",
    zh: "在大学",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "compulsory schooling",
    zh: "义务教育",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "core subject",
    zh: "核心课程",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "disposition",
    zh: "天性/倾向",
    tags: ["day83", "ielts", "writing"],
    star: false
  },
  {
    en: "early adulthood",
    zh: "成年早期",
    tags: ["day83", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "environmental factor",
    zh: "环境因素",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "extra-curricular activities",
    zh: "课外活动",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "field work",
    zh: "实践工作",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "first-hand experience",
    zh: "亲身经验",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "formal education",
    zh: "学习教育",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "formative years",
    zh: "形成性格时期",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "hands-on",
    zh: "实践经验",
    tags: ["day84", "ielts", "writing"],
    star: false
  },
  {
    en: "heredity",
    zh: "遗传",
    tags: ["day84", "ielts", "writing"],
    star: false
  },
  {
    en: "impressionable",
    zh: "易受影响的",
    tags: ["day84", "ielts", "writing"],
    star: false
  },
  {
    en: "indulgent parents",
    zh: "纵容型父母",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "innate",
    zh: "先天的，遗传的",
    tags: ["day84", "ielts", "writing"],
    star: false
  },
  {
    en: "job market",
    zh: "就业市场，劳动力市场",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "juvenile delinquency",
    zh: "青少年犯罪",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "learning difficulty",
    zh: "学习障碍",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "neglectful parents",
    zh: "不负责任的父母",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "newborn",
    zh: "婴幼儿",
    tags: ["day84", "ielts", "writing"],
    star: false
  },
  {
    en: "nurturing parents",
    zh: "关爱型父母",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "obedient",
    zh: "顺从的",
    tags: ["day84", "ielts", "writing"],
    star: false
  },
  {
    en: "peer influence",
    zh: "同伴影响",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "peer learning",
    zh: "同伴学习",
    tags: ["day84", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "peer pressure",
    zh: "同辈压力",
    tags: ["day85", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "preschoolers",
    zh: "学龄前儿童",
    tags: ["day85", "ielts", "writing"],
    star: false
  },
  {
    en: "puberty",
    zh: "青春期",
    tags: ["day85", "ielts", "writing"],
    star: false
  },
  {
    en: "pupil",
    zh: "小学生",
    tags: ["day85", "ielts", "writing"],
    star: false
  },
  {
    en: "rebellious",
    zh: "叛逆的",
    tags: ["day85", "ielts", "writing"],
    star: false
  },
  {
    en: "school-age children",
    zh: "学龄儿童",
    tags: ["day85", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "school performance",
    zh: "学业成绩",
    tags: ["day85", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "school-to-work transition",
    zh: "从学校过渡到工作",
    tags: ["day85", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "secondary education",
    zh: "中等教育",
    tags: ["day85", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "self-control",
    zh: "自律的",
    tags: ["day85", "ielts", "writing"],
    star: false
  },
  {
    en: "socio-economic background",
    zh: "社会经济背景/地位",
    tags: ["day85", "ielts", "writing", "phrase"],
    star: false
  },
  {
    en: "wrist watch",
    zh: "腕表",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "smart watch",
    zh: "智能手表",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "sport watch",
    zh: "运动手表",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "pocket watch",
    zh: "怀表",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "analog watch",
    zh: "指针式",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "digital watch",
    zh: "电子手表",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "oval",
    zh: "椭圆",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "rectangle",
    zh: "长方形",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "round",
    zh: "圆的",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "square",
    zh: "正方形",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "tonneau",
    zh: "酒桶形",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "waterproof",
    zh: "防水的",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "leather band",
    zh: "皮表带",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "eco-drive",
    zh: "光动能",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "flats",
    zh: "平底鞋",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "high heels",
    zh: "高跟鞋",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "stiletto heel",
    zh: "细高跟",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "kitten heel",
    zh: "小戳跟",
    tags: ["day86", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "wedge",
    zh: "坡跟",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "platform",
    zh: "厚底/ 水台",
    tags: ["day86", "ielts", "speaking"],
    star: false
  },
  {
    en: "pointed toe",
    zh: "尖头",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "round toe",
    zh: "圆头",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "open toe",
    zh: "鱼嘴",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "high-top or low-top",
    zh: "高/低帮",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "dress shoes",
    zh: "正装鞋",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "slip-ons",
    zh: "无扣鞋",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "sandals",
    zh: "凉鞋",
    tags: ["day87", "ielts", "speaking"],
    star: false
  },
  {
    en: "slippers",
    zh: "拖鞋",
    tags: ["day87", "ielts", "speaking"],
    star: false
  },
  {
    en: "flip flops",
    zh: "人字拖",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "lace up",
    zh: "系带",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "clutches",
    zh: "手包",
    tags: ["day87", "ielts", "speaking"],
    star: false
  },
  {
    en: "cross-body bags",
    zh: "单肩包",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "tote",
    zh: "手提包",
    tags: ["day87", "ielts", "speaking"],
    star: false
  },
  {
    en: "science-fiction video game",
    zh: "科幻类游戏",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "shooter game",
    zh: "射击类游戏",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "games for girls",
    zh: "女生游戏",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "role-playing video game",
    zh: "角色扮演类游戏",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "sense of humor",
    zh: "幽默感",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "burst into laughter",
    zh: "大笑",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "tell jokes",
    zh: "讲笑话",
    tags: ["day87", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "amusing",
    zh: "好笑的",
    tags: ["day88", "ielts", "speaking"],
    star: false
  },
  {
    en: "witty",
    zh: "诙谐的",
    tags: ["day88", "ielts", "speaking"],
    star: false
  },
  {
    en: "comical",
    zh: "滑稽的",
    tags: ["day88", "ielts", "speaking"],
    star: false
  },
  {
    en: "bring the house down",
    zh: "让人捧腹大笑/赢得满堂喝彩",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "lame jokes",
    zh: "冷笑话",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "off-color joke",
    zh: "低俗下流的笑话",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "have a big laugh",
    zh: "大笑",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "crack me up",
    zh: "让我捧腹大笑",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "slapstick comedy",
    zh: "低俗喜剧",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "have a clever play on words",
    zh: "台词巧妙的",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "watch a light-hearted comedy",
    zh: "看一场轻松的喜剧",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "reduce stress from my studies",
    zh: "减轻我的学习压力",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "a versatile comedian",
    zh: "多才多艺的",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "punchlines",
    zh: "笑点",
    tags: ["day88", "ielts", "speaking"],
    star: false
  },
  {
    en: "funny anecdotes",
    zh: "有趣的奇闻轶事",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "behave badly",
    zh: "表现得很差",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "role model",
    zh: "榜样",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "poor behavior",
    zh: "不良行为",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "first educator",
    zh: "第一个启蒙老师",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "show respect",
    zh: "展示出尊重",
    tags: ["day88", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "speak in a friendly manner",
    zh: "说话有礼貌",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "show courtesy",
    zh: "有礼貌",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "stand out from the crowd",
    zh: "脱颖而出",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "act as acceptable members of society",
    zh: "成为好公民",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "from an early age",
    zh: "从幼年开始",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "parenting skills",
    zh: "管教方式",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "maintain discipline",
    zh: "维持纪律",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "find enjoyment",
    zh: "发现乐趣",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "devote time",
    zh: "付出时间",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "rote learning",
    zh: "死记硬背",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "cram for exams",
    zh: "填鸭学习应付考试",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "spend quality time",
    zh: "度过宝贵时间",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "a sense of loneliness",
    zh: "孤独感",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "a sense of isolation",
    zh: "孤立感",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "a loving family",
    zh: "一个有爱的家庭",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "start from scratch",
    zh: "白手起家",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "achieve fame",
    zh: "成名",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "big name",
    zh: "知名人士",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "determination",
    zh: "决心",
    tags: ["day89", "ielts", "speaking"],
    star: false
  },
  {
    en: "lead a life of luxury",
    zh: "奢侈生活",
    tags: ["day89", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "prestigious",
    zh: "奢侈的",
    tags: ["day90", "ielts", "speaking"],
    star: false
  },
  {
    en: "luxurious",
    zh: "奢华的",
    tags: ["day90", "ielts", "speaking"],
    star: false
  },
  {
    en: "extravagant",
    zh: "过度的；过分的",
    tags: ["day90", "ielts", "speaking"],
    star: false
  },
  {
    en: "designer clothes",
    zh: "名牌衣服",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "brand new clothes",
    zh: "崭新衣服",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "low-key",
    zh: "低调",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "inspire the next generation",
    zh: "激励下一代",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "emulate pop star",
    zh: "模仿偶像",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "admire",
    zh: "崇拜",
    tags: ["day90", "ielts", "speaking"],
    star: false
  },
  {
    en: "self-made",
    zh: "自我成就的",
    tags: ["day90", "ielts", "speaking"],
    star: false
  },
  {
    en: "devoted fans",
    zh: "忠实粉丝",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "get rid of poverty",
    zh: "摆脱贫穷",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "break the cycle of poverty",
    zh: "打破贫穷的循环",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "raise funds",
    zh: "筹款",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "raise money for charity",
    zh: "为慈善机构筹款",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "needy people",
    zh: "有需要的人",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "protect privacy",
    zh: "保护隐私",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "invade privacy",
    zh: "侵犯隐私",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "expose privacy",
    zh: "泄露隐私",
    tags: ["day90", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "paparazzi",
    zh: "狗仔队",
    tags: ["day90", "ielts", "speaking"],
    star: false
  },
  {
    en: "comfort zone",
    zh: "舒适圈",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "carry cameras and shoot all the time",
    zh: "无时无刻不在拍",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "foster innovation",
    zh: "促进创新",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "brain development",
    zh: "头脑发展",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "stifle creativity",
    zh: "扼杀创造力",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "achieve creative potential",
    zh: "发挥创造能力",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "apply skills to work",
    zh: "把技能运用到工作",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "come up with brilliant ideas",
    zh: "提出好想法",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "increase productivity",
    zh: "增加效率",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "a lifelong friendship",
    zh: "终生友谊",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "forge",
    zh: "形成牢固的关系",
    tags: ["day91", "ielts", "speaking"],
    star: false
  },
  {
    en: "take in scenery",
    zh: "领略风景",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "lighten mood",
    zh: "让心情更好",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "bestie",
    zh: "最好的朋友（女）",
    tags: ["day91", "ielts", "speaking"],
    star: false
  },
  {
    en: "reading",
    zh: "读书",
    tags: ["day91", "ielts", "speaking"],
    star: false
  },
  {
    en: "deadly boring",
    zh: "非常无聊的",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "bookworm",
    zh: "书虫",
    tags: ["day91", "ielts", "speaking"],
    star: false
  },
  {
    en: "big reader",
    zh: "书迷",
    tags: ["day91", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "pastime",
    zh: "消遣",
    tags: ["day91", "ielts", "speaking"],
    star: false
  },
  {
    en: "downtime",
    zh: "消遣",
    tags: ["day91", "ielts", "speaking"],
    star: false
  },
  {
    en: "hectic life",
    zh: "繁忙的生活",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "knowledgeable",
    zh: "博识的",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "insightful view",
    zh: "独到的见解",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "time-consuming",
    zh: "消耗时间的",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "work extra hours",
    zh: "加班",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "book-to-movie adaptation",
    zh: "改编自小说的电影",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "full-length fiction",
    zh: "长篇小说",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "flick through",
    zh: "快速浏览",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "heavy going",
    zh: "沉重的（难读的书）",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "a walk in the park",
    zh: "简单轻松的事",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "coastal city",
    zh: "沿海城市",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "inland city",
    zh: "内陆城市",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "small city",
    zh: "大都市",
    tags: ["day92", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "crowded",
    zh: "拥挤的",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "peaceful",
    zh: "宁静的",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "harsh",
    zh: "严酷的",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "downtown",
    zh: "市中心",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "suburb",
    zh: "郊区",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "cramped",
    zh: "狭窄的",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "spacious",
    zh: "宽敞的",
    tags: ["day92", "ielts", "speaking"],
    star: false
  },
  {
    en: "messy",
    zh: "凌乱的",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "organized",
    zh: "整洁的",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "subway",
    zh: "地铁",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "station",
    zh: "地铁站",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "ferry",
    zh: "轮渡",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "eco-friendly",
    zh: "环保的",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "get rid of traffic jams",
    zh: "摆脱交通堵塞",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "get stuck in traffic jams",
    zh: "堵在路上",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "punctual",
    zh: "准时的",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "economical",
    zh: "经济实惠的",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "get to the destination directly",
    zh: "直达",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "light music",
    zh: "轻音乐",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "dancing music",
    zh: "舞曲",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "pop music",
    zh: "流行",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "folk music",
    zh: "民谣",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "country music",
    zh: "乡村音乐",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "blues",
    zh: "布鲁斯蓝调",
    tags: ["day93", "ielts", "speaking"],
    star: false
  },
  {
    en: "heavy metal",
    zh: "重金属",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "brit pop",
    zh: "英伦流行",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "beijing opera",
    zh: "京剧",
    tags: ["day93", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "pleasant",
    zh: "悦耳的",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "relaxing",
    zh: "令人放松的",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "touching",
    zh: "感人的",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "pleasing to the ear",
    zh: "悦耳的",
    tags: ["day94", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "lyrics",
    zh: "歌词",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "composition",
    zh: "音乐作品",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "melody",
    zh: "旋律",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "tempo",
    zh: "拍子",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "violin",
    zh: "小提琴",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "viola",
    zh: "中提琴",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "saxophone",
    zh: "萨克斯",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "color film",
    zh: "彩色片",
    tags: ["day94", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "silent film",
    zh: "默片，无声片",
    tags: ["day94", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "dubbed film",
    zh: "配音复制的影片，译制片",
    tags: ["day94", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "silent cinema",
    zh: "无声电影",
    tags: ["day94", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "sound motion picture",
    zh: "有声电影",
    tags: ["day94", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "title",
    zh: "片名",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "original version",
    zh: "原著",
    tags: ["day94", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "dialogue",
    zh: "对白",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "subtitles",
    zh: "字幕",
    tags: ["day94", "ielts", "speaking"],
    star: false
  },
  {
    en: "western movies",
    zh: "西部片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "serial",
    zh: "系列片",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "animation",
    zh: "卡通片，动画片",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "literary film",
    zh: "文艺片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "musicals",
    zh: "音乐片",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "action movie",
    zh: "动作片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "tragedy",
    zh: "悲剧片",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "horror movie",
    zh: "恐怖片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "swordsmen film",
    zh: "武侠片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "detective film",
    zh: "侦探片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "ethical film",
    zh: "伦理片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "romance film",
    zh: "爱情片",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "fantasy film",
    zh: "魔幻电影",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "attention-grabbing",
    zh: "引人入胜的",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "breathtaking",
    zh: "惊险刺激的",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "nail-biting",
    zh: "紧张的",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "unforgettable",
    zh: "难忘的",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "thought-provoking",
    zh: "引人深思的",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "best-seller",
    zh: "畅销书",
    tags: ["day95", "ielts", "speaking"],
    star: false
  },
  {
    en: "literary classics",
    zh: "文学经典",
    tags: ["day95", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "suspense novels",
    zh: "悬疑小说",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "motivational books",
    zh: "励志书",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "biography",
    zh: "传记",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "headline",
    zh: "标题/头条",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "business section",
    zh: "贸易栏目",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "financial section",
    zh: "金融栏目",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "domestic section",
    zh: "国内栏目",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "entertainment section",
    zh: "娱乐栏目",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "local happenings",
    zh: "当地新闻",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "paper media",
    zh: "纸媒",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "insightful",
    zh: "有洞见的",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "up-to-date",
    zh: "最新的",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "public service advertising",
    zh: "公益广告",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "commercials",
    zh: "商业广告",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "billboard advertising",
    zh: "广告牌",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "flyers",
    zh: "传单",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "popup",
    zh: "弹出广告",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "exaggerate functions",
    zh: "夸大功能",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "false advertising",
    zh: "虚假广告",
    tags: ["day96", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "unreliable",
    zh: "不可靠的",
    tags: ["day96", "ielts", "speaking"],
    star: false
  },
  {
    en: "inappropriate",
    zh: "不恰当的",
    tags: ["day97", "ielts", "speaking"],
    star: false
  },
  {
    en: "publicize their products",
    zh: "宣传产品",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "weather forecast",
    zh: "天气预报",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "talk show",
    zh: "脱口秀",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "quiz show",
    zh: "智力竞答",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "entertainment show",
    zh: "娱乐节目",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "reality show",
    zh: "真人秀",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "talent show",
    zh: "选秀节目",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "variety show",
    zh: "综艺节目",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "outfits",
    zh: "服装",
    tags: ["day97", "ielts", "speaking"],
    star: false
  },
  {
    en: "formal wear",
    zh: "正装",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "leisure wear",
    zh: "休闲装",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  },
  {
    en: "track suit",
    zh: "运动套装",
    tags: ["day97", "ielts", "speaking", "phrase"],
    star: false
  }
  // END AUTO WORD ENTRIES
];

/**
 * 2026-07-31 扩容：从《雅思阅读真题题干vs答案同义词替换》筛选，
 * 与原 1,935 条标准化去重后新增 74 条。默认识别扩展，真题命中时可在App一键升级。
 */
window.VOCAB_SUPPLEMENT_20260731 = [
  ["adjunct", "n.", "附加物", "addition"],
  ["adorn", "v.", "装饰", "decorate"],
  ["adversely", "adv.", "不利地；有害地", "negatively"],
  ["aesthetically", "adv.", "审美地；美学地", "artistically"],
  ["annihilate", "v.", "消灭；彻底摧毁", "conquer"],
  ["antagonist", "n.", "对手；敌手", "enemy"],
  ["antecedent", "n.", "先例；先辈；前件", "predecessor"],
  ["arduous", "adj.", "艰巨的；费力的", "difficult"],
  ["assortment", "n.", "各种各样；混合品", "variety"],
  ["attire", "n.", "衣着；服装", "clothing"],
  ["avid", "adj.", "渴望的；热衷的", "eager"],
  ["brittle", "adj.", "易碎的；脆的", "easily broken"],
  ["celestial", "adj.", "天空的；天体的", "astronomical"],
  ["chronicle", "v.", "记述；按时间记录", "describe"],
  ["coarse", "adj.", "粗糙的；粗劣的", "rough"],
  ["conclusive", "adj.", "决定性的；结论性的", "definitive"],
  ["conspicuous", "adj.", "显著的；显眼的", "noticeable"],
  ["constituent", "n.", "成分；构成要素", "component"],
  ["convergence", "n.", "汇聚；趋同", "gathering"],
  ["counteract", "v.", "抵消；对抗", "negate"],
  ["counterpart", "n.", "对应的人或物", "version"],
  ["crisscross", "v.", "交叉往来；纵横交错", "move back and forth"],
  ["connoisseur", "n.", "鉴赏家；行家", "critical judge"],
  ["cumbersome", "adj.", "笨重的；麻烦的", "burdensome"],
  ["deft", "adj.", "熟练的；灵巧的", "skilled"],
  ["demise", "n.", "死亡；终止", "death"],
  ["detectable", "adj.", "可察觉的", "apparent"],
  ["devastated", "adj.", "被严重破坏的", "ruined"],
  ["devote to", "v.", "致力于；献身于", "dedicate"],
  ["diffuse", "v.", "扩散；传播", "spread"],
  ["discard", "v.", "丢弃；抛弃", "get rid of"],
  ["disseminate", "v.", "散布；传播", "spread"],
  ["divergence", "n.", "分歧；差异", "difference"],
  ["dividing line", "n.", "分界线", "boundary"],
  ["durability", "n.", "耐久性", "endurance"],
  ["elevate", "v.", "提高；提升", "promote"],
  ["elicit", "v.", "引出；诱出", "bring out"],
  ["emit", "v.", "发出；排放", "give off"],
  ["encompass", "v.", "包含；涵盖", "include"],
  ["entomb", "v.", "埋葬；封入", "trap"],
  ["eradicate", "v.", "根除；消灭", "eliminate"],
  ["misconception", "n.", "误解；错误观念", "erroneous idea"],
  ["erroneously", "adv.", "错误地", "mistakenly"],
  ["exalted", "adj.", "崇高的；高贵的", "superior"],
  ["exert", "v.", "施加；运用", "cause"],
  ["exorbitant", "adj.", "过高的；昂贵得离谱的", "expensive"],
  ["expendable", "adj.", "可牺牲的；可消耗的", "dispensable"],
  ["extol", "v.", "赞美；颂扬", "praise"],
  ["fabricate", "v.", "制造；编造", "make"],
  ["faction", "n.", "派系；小集团", "side"],
  ["fatal", "adj.", "致命的", "deadly"],
  ["flattering", "adj.", "奉承的；讨好的", "complimentary"],
  ["flourish", "v.", "繁荣；茁壮成长", "thrive"],
  ["formidable", "adj.", "艰巨的；令人敬畏的", "difficult"],
  ["forward-looking", "adj.", "有远见的；前瞻的", "progressive"],
  ["functional", "adj.", "实用的；功能正常的", "usable"],
  ["graphic", "adj.", "生动的；图示的", "vivid"],
  ["herald", "v.", "预示；宣布", "announce"],
  ["immutable", "adj.", "不可改变的", "unchangeable"],
  ["impediment", "n.", "妨碍；阻碍", "obstacle"],
  ["imperceptibly", "adv.", "难以察觉地", "subtly"],
  ["inception", "n.", "开端；起初", "beginning"],
  ["incinerate", "v.", "焚烧；烧毁", "burn up"],
  ["incised", "adj.", "雕刻的；切入的", "carved"],
  ["inclination", "n.", "倾向；偏好", "preference"],
  ["insignificant", "adj.", "不重要的；微小的", "unimportant"],
  ["iterate", "v.", "重复；反复说明", "repeat"],
  ["portable", "adj.", "便携的；轻便的", "easily moved"],
  ["prevalent", "adj.", "普遍的；流行的", "widespread"],
  ["rudimentary", "adj.", "基础的；初步的", "basic"],
  ["subtly", "adv.", "微妙地；不明显地", "imperceptibly"],
  ["unreachable", "adj.", "无法到达的", "inaccessible"],
  ["uphold", "v.", "维护；支持；确认", "confirm"],
  ["weigh", "v.", "权衡；有分量", "count"]
].map(function (row, index) {
  const pack = "day" + (98 + Math.floor(index / 20));
  return {
    en: row[0],
    ipa: "",
    pos: row[1],
    zh: row[2],
    example: "Reading paraphrase: " + row[0] + " ≈ " + row[3] + ".",
    tags: [pack, "ielts", "reading", "paraphrase"],
    star: false,
    sourceIds: ["reading-question-paraphrase"],
    tier: "recognition",
    skills: ["reading"],
    topic: "阅读同义替换"
  };
});

window.VOCAB_BANK.push.apply(window.VOCAB_BANK, window.VOCAB_SUPPLEMENT_20260731);
