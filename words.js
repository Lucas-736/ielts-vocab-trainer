/**
 * 词库数据 —— 来自 SecondBrain 雅思笔记
 * 来源：词汇积累.md · Day1-足球运动员的大脑-词汇语法.md
 *       Day2-Should we cycle more?.md
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
  day2: "Day 2 · Should we cycle more?"
};

window.VOCAB_BANK = [
  // —— Day 1 核心 6 词 ——
  {
    en: "something going on",
    ipa: "/ˈɡəʊɪŋ ɒn/",
    pos: "短语",
    zh: "有某事正在发生（有意思/重要但不完全清楚）",
    example: "There's something going on in the brain.",
    tags: ["day1", "core", "phrase"],
    star: true
  },
  {
    en: "expertise",
    ipa: "/ˌekspɜːˈtiːz/",
    pos: "n.",
    zh: "专长；专业技能/知识",
    example: "absolute expertise in moving his feet",
    tags: ["day1", "core"],
    star: true
  },
  {
    en: "conscious",
    ipa: "/ˈkɒnʃəs/",
    pos: "adj.",
    zh: "有意识的；需要主动注意的",
    example: "with very little conscious effort",
    tags: ["day1", "core"],
    star: true
  },
  {
    en: "driven by",
    ipa: "/ˈdrɪvn baɪ/",
    pos: "短语",
    zh: "由……驱动/影响/推动",
    example: "performance is driven by your emotional state",
    tags: ["day1", "core", "phrase"],
    star: true
  },
  {
    en: "all over the place",
    ipa: "/ˌɔːl ˈəʊvə ðə pleɪs/",
    pos: "习语",
    zh: "乱七八糟；心乱；没条理",
    example: "mentally you're all over the place",
    tags: ["day1", "core", "phrase"],
    star: true
  },
  {
    en: "margin",
    ipa: "/ˈmɑːdʒɪn/",
    pos: "n.",
    zh: "差距；余地；细微差别（可影响结果）",
    example: "those little margins that can make all the difference",
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
    tags: ["day1", "sport"],
    star: true
  },
  {
    en: "elite",
    ipa: "/ɪˈliːt/",
    pos: "adj.",
    zh: "精英的；顶尖的",
    example: "elite clubs",
    tags: ["day1"],
    star: true
  },
  {
    en: "penalty",
    ipa: "/ˈpenəlti/",
    pos: "n.",
    zh: "点球",
    example: "penalties, corners and free kicks",
    tags: ["day1", "sport"],
    star: true
  },
  {
    en: "corner",
    ipa: "/ˈkɔːnə/",
    pos: "n.",
    zh: "角球（本集义）",
    example: "an accurate corner",
    tags: ["day1", "sport"],
    star: true
  },
  {
    en: "free kick",
    ipa: "/ˌfriː ˈkɪk/",
    pos: "n.",
    zh: "任意球",
    example: "penalties, corners and free kicks",
    tags: ["day1", "sport", "phrase"],
    star: true
  },
  {
    en: "athleticism",
    ipa: "/æθˈletɪsɪzəm/",
    pos: "n.",
    zh: "运动能力；体能爆发力",
    example: "skill and athleticism",
    tags: ["day1", "sport"],
    star: false
  },
  {
    en: "athlete",
    ipa: "/ˈæθliːt/",
    pos: "n.",
    zh: "运动员",
    example: "these athletes",
    tags: ["day1", "sport"],
    star: false
  },
  {
    en: "peer",
    ipa: "/pɪə/",
    pos: "n.",
    zh: "同龄人；同等水平的人",
    example: "the brains of his peers",
    tags: ["day1"],
    star: false
  },
  {
    en: "ankle",
    ipa: "/ˈæŋkl/",
    pos: "n.",
    zh: "脚踝",
    example: "rotated his right ankle",
    tags: ["day1"],
    star: false
  },
  {
    en: "rotate",
    ipa: "/rəʊˈteɪt/",
    pos: "v.",
    zh: "旋转；转动",
    example: "rotated his right ankle",
    tags: ["day1"],
    star: false
  },
  {
    en: "accurate",
    ipa: "/ˈækjərət/",
    pos: "adj.",
    zh: "准确的",
    example: "an accurate corner",
    tags: ["day1"],
    star: true
  },
  {
    en: "accuracy",
    ipa: "/ˈækjərəsi/",
    pos: "n.",
    zh: "准确性",
    example: "kick the ball accurately",
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
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "neurologically",
    ipa: "/ˌnjʊərəˈlɒdʒɪkli/",
    pos: "adv.",
    zh: "从神经学角度",
    example: "neurologically or cognitively",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "cognition",
    ipa: "/kɒɡˈnɪʃn/",
    pos: "n.",
    zh: "认知",
    example: "cognition or neuroscience",
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "cognitively",
    ipa: "/ˈkɒɡnətɪvli/",
    pos: "adv.",
    zh: "从认知上",
    example: "neurologically or cognitively",
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "cortex",
    ipa: "/ˈkɔːteks/",
    pos: "n.",
    zh: "（大脑）皮层",
    example: "activity in Neymar's cortex",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "amygdala",
    ipa: "/əˈmɪɡdələ/",
    pos: "n.",
    zh: "杏仁核（处理恐惧与威胁）",
    example: "the amygdala processes fear",
    tags: ["day1", "science"],
    star: true
  },
  {
    en: "brain stem",
    ipa: "/ˈbreɪn stem/",
    pos: "n.",
    zh: "脑干",
    example: "the brain stem",
    tags: ["day1", "science", "phrase"],
    star: false
  },
  {
    en: "cerebellum",
    ipa: "/ˌserəˈbeləm/",
    pos: "n.",
    zh: "小脑",
    example: "the cerebellum",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "brainwave",
    ipa: "/ˈbreɪnweɪv/",
    pos: "n.",
    zh: "脑电波",
    example: "measures player's brainwaves",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "psychologist",
    ipa: "/saɪˈkɒlədʒɪst/",
    pos: "n.",
    zh: "心理学家",
    example: "Academy Psychologist",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "psychology",
    ipa: "/saɪˈkɒlədʒi/",
    pos: "n.",
    zh: "心理学",
    example: "psychology and neuroscience",
    tags: ["day1", "science"],
    star: false
  },
  {
    en: "emotional",
    ipa: "/ɪˈməʊʃənl/",
    pos: "adj.",
    zh: "情绪的",
    example: "emotional state",
    tags: ["day1"],
    star: false
  },
  {
    en: "anxiety",
    ipa: "/æŋˈzaɪəti/",
    pos: "n.",
    zh: "焦虑",
    example: "fear and anxiety",
    tags: ["day1"],
    star: true
  },
  {
    en: "academy",
    ipa: "/əˈkædəmi/",
    pos: "n.",
    zh: "青训学院；研究院",
    example: "Academy Psychologist",
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
    tags: ["day1"],
    star: true
  },
  {
    en: "scenario",
    ipa: "/səˈnɑːriəʊ/",
    pos: "n.",
    zh: "情景；局面",
    example: "high-pressure scenarios",
    tags: ["day1"],
    star: true
  },
  {
    en: "intensity",
    ipa: "/ɪnˈtensəti/",
    pos: "n.",
    zh: "强度",
    example: "the highest intensities",
    tags: ["day1"],
    star: true
  },
  {
    en: "intense",
    ipa: "/ɪnˈtens/",
    pos: "adj.",
    zh: "强烈的",
    example: "intense pressure",
    tags: ["day1"],
    star: false
  },
  {
    en: "split second",
    ipa: "/ˌsplɪt ˈsekənd/",
    pos: "n.",
    zh: "一瞬间",
    example: "decisions in a split second",
    tags: ["day1", "phrase"],
    star: true
  },
  {
    en: "perform",
    ipa: "/pəˈfɔːm/",
    pos: "v.",
    zh: "表现；发挥",
    example: "how well a player performs",
    tags: ["day1"],
    star: true
  },
  {
    en: "performance",
    ipa: "/pəˈfɔːməns/",
    pos: "n.",
    zh: "表现；成绩",
    example: "performance is driven by emotion",
    tags: ["day1"],
    star: true
  },
  {
    en: "precision",
    ipa: "/prɪˈsɪʒn/",
    pos: "n.",
    zh: "精确",
    example: "lack of precision and focus",
    tags: ["day1"],
    star: false
  },
  {
    en: "focus",
    ipa: "/ˈfəʊkəs/",
    pos: "n./v.",
    zh: "专注；焦点",
    example: "if you don't focus right",
    tags: ["day1"],
    star: false
  },
  {
    en: "overwhelm",
    ipa: "/ˌəʊvəˈwelm/",
    pos: "v.",
    zh: "使应接不暇；压垮",
    example: "trying to overwhelm them in training",
    tags: ["day1"],
    star: false
  },
  {
    en: "stillness",
    ipa: "/ˈstɪlnəs/",
    pos: "n.",
    zh: "静止；平静时刻",
    example: "moments of stillness",
    tags: ["day1"],
    star: false
  },
  {
    en: "reveal",
    ipa: "/rɪˈviːl/",
    pos: "v.",
    zh: "揭晓；透露",
    example: "I'll reveal the answer later",
    tags: ["day1"],
    star: false
  },
  {
    en: "reduction",
    ipa: "/rɪˈdʌkʃn/",
    pos: "n.",
    zh: "减少",
    example: "reduction in activity",
    tags: ["day1"],
    star: false
  },
  {
    en: "reflect",
    ipa: "/rɪˈflekt/",
    pos: "v.",
    zh: "反映；表明",
    example: "reflects that he has expertise",
    tags: ["day1"],
    star: false
  },
  {
    en: "essentially",
    ipa: "/ɪˈsenʃəli/",
    pos: "adv.",
    zh: "本质上；基本上",
    example: "essentially done with little effort",
    tags: ["day1"],
    star: false
  },
  {
    en: "decade",
    ipa: "/ˈdekeɪd/",
    pos: "n.",
    zh: "十年",
    example: "decades after this research",
    tags: ["day1"],
    star: false
  },
  {
    en: "detect",
    ipa: "/dɪˈtekt/",
    pos: "v.",
    zh: "察觉；探测",
    example: "detecting threats",
    tags: ["day1"],
    star: false
  },
  {
    en: "threat",
    ipa: "/θret/",
    pos: "n.",
    zh: "威胁",
    example: "processing fear and detecting threats",
    tags: ["day1"],
    star: false
  },
  {
    en: "process",
    ipa: "/ˈprəʊses/",
    pos: "v./n.",
    zh: "处理（信息/情绪）",
    example: "processing fear",
    tags: ["day1"],
    star: false
  },
  {
    en: "absolute",
    ipa: "/ˈæbsəluːt/",
    pos: "adj.",
    zh: "绝对的",
    example: "absolute expertise",
    tags: ["day1"],
    star: false
  },
  {
    en: "effort",
    ipa: "/ˈefət/",
    pos: "n.",
    zh: "努力",
    example: "conscious effort",
    tags: ["day1"],
    star: false
  },
  {
    en: "influence",
    ipa: "/ˈɪnfluəns/",
    pos: "n./v.",
    zh: "影响",
    example: "influenced by their emotional state",
    tags: ["day1"],
    star: false
  },
  {
    en: "control",
    ipa: "/kənˈtrəʊl/",
    pos: "n./v.",
    zh: "控制",
    example: "you can learn to control",
    tags: ["day1"],
    star: false
  },
  {
    en: "relaxed",
    ipa: "/rɪˈlækst/",
    pos: "adj.",
    zh: "放松的",
    example: "how to stay relaxed",
    tags: ["day1"],
    star: false
  },
  {
    en: "mentally",
    ipa: "/ˈmentəli/",
    pos: "adv.",
    zh: "在心理上",
    example: "mentally you're all over the place",
    tags: ["day1"],
    star: false
  },
  {
    en: "chaotic",
    ipa: "/keɪˈɒtɪk/",
    pos: "adj.",
    zh: "混乱的",
    example: "a chaotic mental state",
    tags: ["day1"],
    star: false
  },
  {
    en: "combination",
    ipa: "/ˌkɒmbɪˈneɪʃn/",
    pos: "n.",
    zh: "结合；组合",
    example: "the combination of passion and skill",
    tags: ["day1"],
    star: false
  },
  {
    en: "passion",
    ipa: "/ˈpæʃn/",
    pos: "n.",
    zh: "热情",
    example: "passion and athleticism",
    tags: ["day1"],
    star: false
  },
  {
    en: "recap",
    ipa: "/ˈriːkæp/",
    pos: "n./v.",
    zh: "回顾；小结",
    example: "time for a vocabulary recap",
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
    tags: ["day2", "core", "phrase"],
    star: true
  },
  {
    en: "take off",
    ipa: "/teɪk ɒf/",
    pos: "短语",
    zh: "突然流行；迅速成功",
    example: "Cycling took off after the pandemic.",
    tags: ["day2", "core", "phrase"],
    star: true
  },
  {
    en: "milestone",
    ipa: "/ˈmaɪlstəʊn/",
    pos: "n.",
    zh: "里程碑；重要事件",
    example: "Getting a bike is a milestone for many kids.",
    tags: ["day2", "core"],
    star: true
  },
  {
    en: "quality of life",
    ipa: "/ˈkwɒləti əv laɪf/",
    pos: "短语",
    zh: "生活质量",
    example: "Cycling improves quality of life.",
    tags: ["day2", "core", "phrase"],
    star: true
  },
  {
    en: "liveability",
    ipa: "/ˌlɪvəˈbɪləti/",
    pos: "n.",
    zh: "可居住性；宜居性",
    example: "More bike lanes increase city liveability.",
    tags: ["day2", "core"],
    star: true
  },
  {
    en: "a copy and paste",
    ipa: "/ə ˈkɒpi ənd peɪst/",
    pos: "习语",
    zh: "抄来的；一模一样的东西",
    example: "This argument is a copy and paste of the old one.",
    tags: ["day2", "phrase"],
    star: false
  },
  {
    en: "thriving",
    ipa: "/ˈθraɪvɪŋ/",
    pos: "adj.",
    zh: "繁荣的；兴旺的",
    example: "The cycling scene in Europe is thriving.",
    tags: ["day2"],
    star: false
  },
  {
    en: "infrastructure",
    ipa: "/ˈɪnfrəstrʌktʃə/",
    pos: "n.",
    zh: "基础设施",
    example: "Bike infrastructure is improving.",
    tags: ["day2"],
    star: false
  },
  {
    en: "commuter",
    ipa: "/kəˈmjuːtə/",
    pos: "n.",
    zh: "通勤者",
    example: "The Netherlands has more commuters than any other country.",
    tags: ["day2"],
    star: false
  },
  {
    en: "convenience",
    ipa: "/kənˈviːniəns/",
    pos: "n.",
    zh: "方便；便利",
    example: "Electric bikes increase convenience.",
    tags: ["day2"],
    star: false
  }
];
