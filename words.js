/**
 * 词库数据 —— 来自 SecondBrain 雅思笔记
 * 来源：词汇积累.md · Day1-足球运动员的大脑-词汇语法.md
 *       Day2-Should we cycle more?.md
 *       原始资料/6 Minute English：Rude emails · Stress-free family meals
 *         · Limiting screen time for children · How advertisers make us spend money
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
  day6: "Day 6 · 广告商如何让我们花钱"
};

/** 英文界面下的章节标题（缺省回落到 "Day N"） */
window.VOCAB_CHAPTERS_EN = {
  day1: "Day 1 · A footballer's brain",
  day2: "Day 2 · Should we cycle more?",
  day3: "Day 3 · Rude emails",
  day4: "Day 4 · Stress-free family meals",
  day5: "Day 5 · Limiting screen time for children",
  day6: "Day 6 · How advertisers make us spend money"
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
  },
  {
    en: "urban",
    ipa: "/ˈɜː.bən/",
    pos: "adj.",
    zh: "都市的；城市的",
    example: "urban planning in Dubai",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "metropolitan",
    ipa: "/ˌmetrəˈpɒlɪtən/",
    pos: "adj.",
    zh: "大城市的；都市的",
    example: "a metropolitan city",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "expat",
    ipa: "/ˈɛkspæt/",
    pos: "n.",
    zh: "外籍居民；侨居者",
    example: "living as an expat in a foreign country",
    tags: ["day2", "city", "ielts"],
    star: false
  },
  {
    en: "cosmopolitan",
    ipa: "/ˌkɒzməˈpɒlɪtən/",
    pos: "adj.",
    zh: "世界性的；国际化的",
    example: "a cosmopolitan city like Dubai",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "sustainable",
    ipa: "/səˈsteɪnəbl/",
    pos: "adj.",
    zh: "可持续的；环保的",
    example: "sustainable urban development",
    tags: ["day2", "city", "ielts"],
    star: true
  },
  {
    en: "relocate",
    ipa: "/ˌriːləʊˈkeɪt/",
    pos: "v.",
    zh: "迁移；重新安置",
    example: "people who want to relocate to a better city",
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
    tags: ["day3", "core", "phrase"],
    star: true
  },
  {
    en: "uncivil",
    ipa: "/ʌnˈsɪvl/",
    pos: "adj.",
    zh: "无礼的；不礼貌的",
    example: "We're more likely to be uncivil when we're frazzled.",
    tags: ["day3", "core"],
    star: true
  },
  {
    en: "belittle",
    ipa: "/bɪˈlɪtl/",
    pos: "v.",
    zh: "贬低；轻视",
    example: "To belittle someone means to make them feel inferior.",
    tags: ["day3", "core"],
    star: true
  },
  {
    en: "put someone in their place",
    ipa: "/ɪn ðeə ˈpleɪs/",
    pos: "习语",
    zh: "灭某人威风；让某人明白自己没那么重要",
    example: "The boss wants to put you in your place.",
    tags: ["day3", "core", "phrase"],
    star: true
  },
  {
    en: "get something off your plate",
    ipa: "/ɒf jɔː ˈpleɪt/",
    pos: "习语",
    zh: "把（任务/问题）甩给别人处理",
    example: "Such colleagues want to get work off their plate.",
    tags: ["day3", "core", "phrase"],
    star: true
  },
  {
    en: "frazzled",
    ipa: "/ˈfræzld/",
    pos: "adj.",
    zh: "（因事情太多而）精疲力竭的、烦躁的",
    example: "We are operating in environments where we are all quite frazzled.",
    tags: ["day3", "core"],
    star: true
  },
  {
    en: "incivility",
    ipa: "/ˌɪnsɪˈvɪləti/",
    pos: "n.",
    zh: "无礼；不文明行为",
    example: "We are more at risk of engaging in incivility.",
    tags: ["day3"],
    star: false
  },
  {
    en: "on a daily basis",
    ipa: "/ɒn ə ˈdeɪli ˈbeɪsɪs/",
    pos: "短语",
    zh: "每天；日常地",
    example: "We all deal with emails on a daily basis.",
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
    tags: ["day4", "core", "phrase"],
    star: true
  },
  {
    en: "mood",
    ipa: "/muːd/",
    pos: "n.",
    zh: "心情；情绪",
    example: "Your mood is how you feel at a particular time.",
    tags: ["day4", "core"],
    star: true
  },
  {
    en: "battleground",
    ipa: "/ˈbætlɡraʊnd/",
    pos: "n.",
    zh: "战场；冲突发生的地方",
    example: "Dinnertime often becomes a battleground.",
    tags: ["day4", "core"],
    star: true
  },
  {
    en: "a big deal",
    ipa: "/ə bɪɡ ˈdiːl/",
    pos: "短语",
    zh: "重要的事；了不起的事",
    example: "Controlling what they eat is a big deal for kids.",
    tags: ["day4", "core", "phrase"],
    star: true
  },
  {
    en: "food allergy",
    ipa: "/ˈfuːd ˌælədʒi/",
    pos: "n.",
    zh: "食物过敏",
    example: "It's harder if your child has a food allergy.",
    tags: ["day4", "core"],
    star: true
  },
  {
    en: "winning formula",
    ipa: "/ˈwɪnɪŋ ˈfɔːmjələ/",
    pos: "习语",
    zh: "制胜法宝；成功的方法",
    example: "We found the winning formula, which was rice and beans.",
    tags: ["day4", "core", "phrase"],
    star: true
  },
  {
    en: "fussy eater",
    ipa: "/ˈfʌsi ˈiːtə/",
    pos: "n.",
    zh: "挑食的人",
    example: "Are you a fussy eater?",
    tags: ["day4", "phrase"],
    star: false
  },
  {
    en: "eating habits",
    ipa: "/ˈiːtɪŋ ˈhæbɪts/",
    pos: "短语",
    zh: "饮食习惯",
    example: "experts on young children's eating habits",
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
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "the bar needs to be higher",
    ipa: "/ðə bɑː/",
    pos: "习语",
    zh: "标准/期望需要更高",
    example: "Emily believes that the bar needs to be higher.",
    tags: ["day5", "core", "phrase"],
    star: true
  },
  {
    en: "enable",
    ipa: "/ɪˈneɪbl/",
    pos: "v.",
    zh: "使能够；使成为可能",
    example: "If you enable something, you make it possible.",
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "eager",
    ipa: "/ˈiːɡə/",
    pos: "adj.",
    zh: "渴望的；热切的",
    example: "Parents are eager to understand what's happening around technology.",
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "shift",
    ipa: "/ʃɪft/",
    pos: "n.",
    zh: "小的改变；转变",
    example: "Little shifts in daily habits feel better.",
    tags: ["day5", "core"],
    star: true
  },
  {
    en: "set someone up for something",
    ipa: "/set ... ʌp fɔː/",
    pos: "习语",
    zh: "为某人做好…的准备",
    example: "Having the device in view doesn't set them up for success.",
    tags: ["day5", "core", "phrase"],
    star: true
  },
  {
    en: "screen time",
    ipa: "/ˈskriːn taɪm/",
    pos: "n.",
    zh: "屏幕时间（使用电子设备的时间）",
    example: "Governments want to limit the amount of screen time for children.",
    tags: ["day5", "phrase"],
    star: false
  },
  {
    en: "measure",
    ipa: "/ˈmeʒə/",
    pos: "n.",
    zh: "措施；办法",
    example: "Governments are introducing online safety measures.",
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
    tags: ["day6", "core", "phrase"],
    star: true
  },
  {
    en: "judged",
    ipa: "/dʒʌdʒd/",
    pos: "adj.",
    zh: "感到被评判的；担心别人怎么看自己",
    example: "No one feels judged by a computer screen.",
    tags: ["day6", "core"],
    star: true
  },
  {
    en: "upsell",
    ipa: "/ˈʌpsel/",
    pos: "v.",
    zh: "追加销售；引导顾客买更多/更贵的东西",
    example: "If you upsell something, you get someone to spend more.",
    tags: ["day6", "core"],
    star: true
  },
  {
    en: "basket spend",
    ipa: "/ˈbɑːskɪt spend/",
    pos: "n.",
    zh: "单次购物总消费额",
    example: "Upselling can increase people's basket spend.",
    tags: ["day6", "core", "phrase"],
    star: true
  },
  {
    en: "think outside the box",
    ipa: "/θɪŋk aʊtˈsaɪd ðə bɒks/",
    pos: "习语",
    zh: "跳出思维定式；创造性地思考",
    example: "We needed something really creative to think outside the box.",
    tags: ["day6", "core", "phrase"],
    star: true
  },
  {
    en: "model",
    ipa: "/ˈmɒdl/",
    pos: "v.",
    zh: "示范（供他人模仿的行为）",
    example: "If you model behaviour, you behave in a way that others can copy.",
    tags: ["day6", "core"],
    star: true
  },
  {
    en: "rational",
    ipa: "/ˈræʃənl/",
    pos: "adj.",
    zh: "理性的；合理的",
    example: "We like to think we make rational, independent choices.",
    tags: ["day6", "ielts"],
    star: false
  },
  {
    en: "transaction",
    ipa: "/trænˈzækʃn/",
    pos: "n.",
    zh: "交易；一笔买卖",
    example: "the total amount that someone spends in one transaction",
    tags: ["day6", "ielts"],
    star: false
  }
];
