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
  day6: "Day 6 · 广告商如何让我们花钱",
  day7: "Day 7 · 客户来电（复习日）",
  day8: "Day 8 · 诗歌的力量",
  day9: "Day 9 · 与债务共处",
  day10: "Day 10 · 让城市更安静",
  day11: "Day 11 · 阅读如何塑造大脑",
  day12: "Day 12 · 寻找外星生命",
  day13: "Day 13 · 我们为何如此焦虑",
  day14: "Day 14 · 超加工食品该吃吗"
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
  day14: "Day 14 · Should we eat ultra-processed food?"
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
  },

  // —— Day 7 · A phone call from a customer（BC Listening B1 · 复习日）——
  {
    en: "payment terms",
    ipa: "/ˈpeɪmənt tɜːmz/",
    pos: "n.",
    zh: "付款条件；付款期限",
    example: "I need an extension on the payment terms.",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "extension",
    ipa: "/ɪkˈstenʃn/",
    pos: "n.",
    zh: "延期；延长",
    example: "Could we extend the payment terms to 60 days?",
    tags: ["day7", "core"],
    star: true
  },
  {
    en: "cash flow",
    ipa: "/ˈkæʃ fləʊ/",
    pos: "n.",
    zh: "现金流；资金周转",
    example: "We're having some cash flow problems.",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "invoice",
    ipa: "/ˈɪnvɔɪs/",
    pos: "n.",
    zh: "发票；账单",
    example: "Andrea called about the invoice for the latest order.",
    tags: ["day7", "core"],
    star: true
  },
  {
    en: "make an exception",
    ipa: "/meɪk ən ɪkˈsepʃn/",
    pos: "短语",
    zh: "破例；特殊处理",
    example: "I think we can make an exception this time.",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "it works both ways",
    ipa: "/ɪt wɜːks bəʊθ ˈweɪz/",
    pos: "习语",
    zh: "对双方都有利；是相互的",
    example: "We appreciate your business. It works both ways.",
    tags: ["day7", "core", "phrase"],
    star: true
  },
  {
    en: "confirmation",
    ipa: "/ˌkɒnfəˈmeɪʃn/",
    pos: "n.",
    zh: "确认；确认函",
    example: "Could you send me a quick email confirmation?",
    tags: ["day7"],
    star: false
  },
  {
    en: "appreciate",
    ipa: "/əˈpriːʃieɪt/",
    pos: "v.",
    zh: "感激；重视",
    example: "I really appreciate your help.",
    tags: ["day7", "ielts"],
    star: false
  },
  {
    en: "pay on delivery",
    ipa: "/peɪ ɒn dɪˈlɪvəri/",
    pos: "短语",
    zh: "货到付款",
    example: "The new order is for a customer that pays on delivery.",
    tags: ["day7", "phrase"],
    star: false
  },
  {
    en: "do someone a favour",
    ipa: "/duː ˈsʌmwʌn ə ˈfeɪvə/",
    pos: "短语",
    zh: "帮某人一个忙",
    example: "Do you ever do favours for important clients?",
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
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "manufacturing",
    ipa: "/ˌmænjuˈfæktʃərɪŋ/",
    pos: "n.",
    zh: "制造业",
    example: "Bicycle manufacturing took off in the industrial era.",
    tags: ["day2", "ielts"],
    star: false
  },
  {
    en: "wellbeing",
    ipa: "/ˈwelbiːɪŋ/",
    pos: "n.",
    zh: "幸福；身心健康",
    example: "Quality of life is a measure of a person's overall wellbeing.",
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "reputation",
    ipa: "/ˌrepjuˈteɪʃn/",
    pos: "n.",
    zh: "名声；声誉",
    example: "Gulf cities want a reputation as places with a good quality of life.",
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "competitive",
    ipa: "/kəmˈpetətɪv/",
    pos: "adj.",
    zh: "竞争激烈的；好胜的",
    example: "All the cities in the Gulf are very competitive.",
    tags: ["day2", "ielts"],
    star: false
  },
  {
    en: "tourist attraction",
    ipa: "/ˈtʊərɪst əˌtrækʃn/",
    pos: "n.",
    zh: "旅游景点",
    example: "a greener way for visitors to explore tourist attractions",
    tags: ["day2", "phrase", "ielts"],
    star: true
  },
  {
    en: "alternative",
    ipa: "/ɔːlˈtɜːnətɪv/",
    pos: "n.",
    zh: "替代选择",
    example: "Cycling can be a popular and green alternative.",
    tags: ["day2", "ielts"],
    star: true
  },
  {
    en: "roughly",
    ipa: "/ˈrʌfli/",
    pos: "adv.",
    zh: "大约；粗略地",
    example: "Roughly speaking, how many bikes are there in the Netherlands?",
    tags: ["day2"],
    star: false
  },
  {
    en: "referred to as",
    ipa: "/rɪˈfɜːd tuː æz/",
    pos: "短语",
    zh: "被称为",
    example: "The Netherlands is often referred to as Holland.",
    tags: ["day2", "phrase"],
    star: false
  },
  {
    en: "the Netherlands",
    ipa: "/ðə ˈneðələndz/",
    pos: "地名",
    zh: "荷兰",
    example: "There are more bikes than citizens in the Netherlands.",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "Dutch",
    ipa: "/dʌtʃ/",
    pos: "adj.",
    zh: "荷兰的；荷兰人的",
    example: "The bicycle is deeply ingrained into Dutch culture.",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "the United Arab Emirates",
    ipa: "/juˌnaɪtɪd ˌærəb ˈemɪrəts/",
    pos: "地名",
    zh: "阿拉伯联合酋长国（阿联酋 UAE）",
    example: "The UAE is better known for cars than bicycles.",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "Dubai",
    ipa: "/duːˈbaɪ/",
    pos: "地名",
    zh: "迪拜",
    example: "Dubai has already built 600km of cycle tracks.",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "Denmark",
    ipa: "/ˈdenmɑːk/",
    pos: "地名",
    zh: "丹麦",
    example: "It's not a copy and paste of what is good in Holland or Denmark.",
    tags: ["day2", "recog"],
    star: false
  },
  {
    en: "the Gulf",
    ipa: "/ðə ɡʌlf/",
    pos: "地名",
    zh: "海湾地区（波斯湾）",
    example: "All the cities in the Gulf are very competitive.",
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
    tags: ["day3", "phrase"],
    star: true
  },
  {
    en: "hostile",
    ipa: "/ˈhɒstaɪl/",
    pos: "adj.",
    zh: "有敌意的；不友善的",
    example: "emails that are hostile in tone and language",
    tags: ["day3", "ielts"],
    star: true
  },
  {
    en: "justify",
    ipa: "/ˈdʒʌstɪfaɪ/",
    pos: "v.",
    zh: "证明…正当；为…辩护",
    example: "an email requiring them to justify their job",
    tags: ["day3", "ielts"],
    star: true
  },
  {
    en: "accomplish",
    ipa: "/əˈkʌmplɪʃ/",
    pos: "v.",
    zh: "完成；实现",
    example: "listing five things they had accomplished that week",
    tags: ["day3", "ielts"],
    star: true
  },
  {
    en: "resign",
    ipa: "/rɪˈzaɪn/",
    pos: "v.",
    zh: "辞职",
    example: "justify their job by listing what they accomplished — or resign",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "withdraw",
    ipa: "/wɪðˈdrɔː/",
    pos: "v.",
    zh: "退缩；撤回；退出",
    example: "People try to protect themselves by withdrawing or avoiding.",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "anonymous",
    ipa: "/əˈnɒnɪməs/",
    pos: "adj.",
    zh: "匿名的",
    example: "We've got an anonymous one here.",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "inferior",
    ipa: "/ɪnˈfɪəriə/",
    pos: "adj.",
    zh: "较差的；低人一等的",
    example: "Belittling makes people feel inferior or unimportant.",
    tags: ["day3", "ielts"],
    star: false
  },
  {
    en: "work to a deadline",
    ipa: "/wɜːk tuː ə ˈdedlaɪn/",
    pos: "短语",
    zh: "赶截止日期",
    example: "When working to a deadline, it's hard to keep all your emails polite.",
    tags: ["day3", "phrase"],
    star: false
  },
  {
    en: "give someone the credit",
    ipa: "/ɡɪv ˈsʌmwʌn ðə ˈkredɪt/",
    pos: "短语",
    zh: "把功劳归于某人",
    example: "The boss gives someone else the credit for the work you did.",
    tags: ["day3", "phrase"],
    star: false
  },
  {
    en: "Manchester",
    ipa: "/ˈmæntʃɪstə/",
    pos: "地名",
    zh: "曼彻斯特（英国城市）",
    example: "Rachel in Manchester says unnecessary formality annoys her.",
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
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "nutritionist",
    ipa: "/njuˈtrɪʃənɪst/",
    pos: "n.",
    zh: "营养师",
    example: "Charlotte is a child nutritionist and mother of two.",
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "trigger",
    ipa: "/ˈtrɪɡə/",
    pos: "v.",
    zh: "引发；触发",
    example: "Why can what you're eating trigger so much tension?",
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "tension",
    ipa: "/ˈtenʃn/",
    pos: "n.",
    zh: "紧张；紧张气氛",
    example: "Mealtimes can trigger a lot of tension in families.",
    tags: ["day4", "ielts"],
    star: true
  },
  {
    en: "all of a sudden",
    ipa: "/ˌɔːl əv ə ˈsʌdn/",
    pos: "短语",
    zh: "突然",
    example: "All of a sudden their appetite comes right back.",
    tags: ["day4", "phrase"],
    star: false
  },
  {
    en: "it's up to someone",
    ipa: "/ɪts ʌp tuː ˈsʌmwʌn/",
    pos: "短语",
    zh: "由某人决定",
    example: "It's up to kids to decide whether they're going to eat it.",
    tags: ["day4", "phrase"],
    star: true
  },
  {
    en: "restrict",
    ipa: "/rɪˈstrɪkt/",
    pos: "v.",
    zh: "限制",
    example: "Her allergies restricted what she could eat.",
    tags: ["day4", "ielts"],
    star: false
  },
  {
    en: "atmosphere",
    ipa: "/ˈætməsfɪə/",
    pos: "n.",
    zh: "气氛；大气层",
    example: "Create a stress-free atmosphere at dinnertime.",
    tags: ["day4", "ielts"],
    star: false
  },
  {
    en: "pressurise",
    ipa: "/ˈpreʃəraɪz/",
    pos: "v.",
    zh: "向…施压；强迫",
    example: "Don't pressurise kids to finish everything on their plate.",
    tags: ["day4"],
    star: false
  },
  {
    en: "flavour",
    ipa: "/ˈfleɪvə/",
    pos: "n.",
    zh: "味道；风味",
    example: "Introduce your child to lots of new flavours.",
    tags: ["day4"],
    star: false
  },
  {
    en: "Singapore",
    ipa: "/ˌsɪŋəˈpɔː/",
    pos: "地名",
    zh: "新加坡",
    example: "Sharon Wee is a food writer from Singapore.",
    tags: ["day4", "recog"],
    star: false
  },
  {
    en: "Brussels sprouts",
    ipa: "/ˌbrʌslz ˈspraʊts/",
    pos: "n.",
    zh: "球芽甘蓝（抱子甘蓝）",
    example: "Worst of all, of course, are Brussels sprouts!",
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
    tags: ["day5", "ielts"],
    star: true
  },
  {
    en: "access",
    ipa: "/ˈækses/",
    pos: "n.",
    zh: "进入权；使用权",
    example: "banned access to social media apps",
    tags: ["day5", "ielts"],
    star: true
  },
  {
    en: "device",
    ipa: "/dɪˈvaɪs/",
    pos: "n.",
    zh: "设备；装置",
    example: "devices like smartphones, tablets and laptops",
    tags: ["day5", "ielts"],
    star: true
  },
  {
    en: "regulator",
    ipa: "/ˈreɡjuleɪtə/",
    pos: "n.",
    zh: "监管机构",
    example: "According to the UK media regulator...",
    tags: ["day5"],
    star: false
  },
  {
    en: "one in five",
    ipa: "/ˌwʌn ɪn ˈfaɪv/",
    pos: "短语",
    zh: "五分之一",
    example: "One in five children aged three to four have a smartphone.",
    tags: ["day5", "phrase"],
    star: true
  },
  {
    en: "practical",
    ipa: "/ˈpræktɪkl/",
    pos: "adj.",
    zh: "实用的；切实可行的",
    example: "practical, realistic things they can do in their home",
    tags: ["day5", "ielts"],
    star: false
  },
  {
    en: "realistic",
    ipa: "/ˌriːəˈlɪstɪk/",
    pos: "adj.",
    zh: "现实的；实际可行的",
    example: "practical, realistic things parents can do",
    tags: ["day5", "ielts"],
    star: false
  },
  {
    en: "alongside",
    ipa: "/əˌlɒŋˈsaɪd/",
    pos: "prep.",
    zh: "与…一起；在…旁边",
    example: "Children learn and develop alongside technology.",
    tags: ["day5"],
    star: false
  },
  {
    en: "in view",
    ipa: "/ɪn ˈvjuː/",
    pos: "短语",
    zh: "在视线内；看得见",
    example: "Having the device in view doesn't set them up for success.",
    tags: ["day5", "phrase"],
    star: false
  },
  {
    en: "Australia",
    ipa: "/ɒˈstreɪliə/",
    pos: "地名",
    zh: "澳大利亚",
    example: "Australia banned social media for under 16s.",
    tags: ["day5", "recog"],
    star: false
  },
  {
    en: "Cambridge",
    ipa: "/ˈkeɪmbrɪdʒ/",
    pos: "地名",
    zh: "剑桥（英国大学城）",
    example: "a research associate at the University of Cambridge",
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
    tags: ["day6", "phrase"],
    star: true
  },
  {
    en: "credible",
    ipa: "/ˈkredəbl/",
    pos: "adj.",
    zh: "可信的",
    example: "We follow the lead of those we think are credible or knowledgeable.",
    tags: ["day6", "ielts"],
    star: true
  },
  {
    en: "nudge",
    ipa: "/nʌdʒ/",
    pos: "v. n.",
    zh: "轻推；助推（行为科学）",
    example: "Nudge theory says behaviour can be changed by small prompts.",
    tags: ["day6"],
    star: true
  },
  {
    en: "be inclined to",
    ipa: "/bɪ ɪnˈklaɪnd tuː/",
    pos: "短语",
    zh: "倾向于；更愿意",
    example: "You're much more inclined to say yes to these things.",
    tags: ["day6", "phrase"],
    star: true
  },
  {
    en: "behavioural science",
    ipa: "/bɪˌheɪvjərəl ˈsaɪəns/",
    pos: "n.",
    zh: "行为科学",
    example: "Could behavioural science tell us why this happens?",
    tags: ["day6", "phrase"],
    star: false
  },
  {
    en: "proportion",
    ipa: "/prəˈpɔːʃn/",
    pos: "n.",
    zh: "比例；部分",
    example: "A large proportion of people may feel judged.",
    tags: ["day6", "ielts"],
    star: true
  },
  {
    en: "follow the lead",
    ipa: "/ˌfɒləʊ ðə ˈliːd/",
    pos: "短语",
    zh: "效仿；跟随",
    example: "It's easy to follow the lead of those we trust.",
    tags: ["day6", "phrase"],
    star: false
  },
  {
    en: "make sense of",
    ipa: "/meɪk ˈsens ɒv/",
    pos: "短语",
    zh: "理解；弄懂",
    example: "people who help us learn and make sense of the world",
    tags: ["day6", "phrase"],
    star: true
  },
  {
    en: "draw on",
    ipa: "/drɔː ɒn/",
    pos: "短语",
    zh: "利用；凭借",
    example: "Businesses can draw on this through endorsements.",
    tags: ["day6", "phrase"],
    star: false
  },
  {
    en: "imitate",
    ipa: "/ˈɪmɪteɪt/",
    pos: "v.",
    zh: "模仿",
    example: "People learn and change by imitating and observing others.",
    tags: ["day6", "ielts"],
    star: false
  },
  {
    en: "convince",
    ipa: "/kənˈvɪns/",
    pos: "v.",
    zh: "说服；使相信",
    example: "the way that people can be convinced to do things",
    tags: ["day6", "ielts"],
    star: false
  },
  {
    en: "Tunisia",
    ipa: "/tjuˈnɪziə/",
    pos: "地名",
    zh: "突尼斯",
    example: "In Tunisia, the World Food Programme made a TV show set in a restaurant.",
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
    tags: ["day7", "ielts"],
    star: true
  },
  {
    en: "client",
    ipa: "/ˈklaɪənt/",
    pos: "n.",
    zh: "客户",
    example: "Do you ever make exceptions for important clients?",
    tags: ["day7", "ielts"],
    star: true
  },
  {
    en: "place an order",
    ipa: "/pleɪs ən ˈɔːdə/",
    pos: "短语",
    zh: "下订单",
    example: "Andrea's company has just placed a new order.",
    tags: ["day7", "phrase"],
    star: true
  },
  {
    en: "regulation",
    ipa: "/ˌreɡjuˈleɪʃn/",
    pos: "n.",
    zh: "规定；规章",
    example: "Company regulations say payment terms are 30 days.",
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
    tags: ["day8", "preview"],
    star: true
  },
  {
    en: "poet",
    ipa: "/ˈpəʊɪt/",
    pos: "n.",
    zh: "诗人",
    example: "The poet read her work aloud.",
    tags: ["day8", "preview"],
    star: false
  },
  {
    en: "rhyme",
    ipa: "/raɪm/",
    pos: "n. v.",
    zh: "押韵；押韵词",
    example: "'Cat' rhymes with 'hat'.",
    tags: ["day8", "preview"],
    star: true
  },
  {
    en: "verse",
    ipa: "/vɜːs/",
    pos: "n.",
    zh: "诗句；诗节",
    example: "She wrote a few verses about the sea.",
    tags: ["day8", "preview"],
    star: false
  },
  {
    en: "metaphor",
    ipa: "/ˈmetəfə/",
    pos: "n.",
    zh: "隐喻；比喻",
    example: "'Time is money' is a famous metaphor.",
    tags: ["day8", "preview"],
    star: true
  },
  {
    en: "imagery",
    ipa: "/ˈɪmɪdʒəri/",
    pos: "n.",
    zh: "意象；形象化描写",
    example: "The poem is full of vivid imagery.",
    tags: ["day8", "preview"],
    star: false
  },
  {
    en: "recite",
    ipa: "/rɪˈsaɪt/",
    pos: "v.",
    zh: "背诵；朗诵",
    example: "Children recite poems at school.",
    tags: ["day8", "preview"],
    star: true
  },
  {
    en: "evoke",
    ipa: "/ɪˈvəʊk/",
    pos: "v.",
    zh: "唤起（情感、记忆）",
    example: "The poem evokes memories of childhood.",
    tags: ["day8", "preview", "ielts"],
    star: true
  },
  {
    en: "come to terms with",
    ipa: "/kʌm tuː tɜːmz wɪð/",
    pos: "短语",
    zh: "接受（现实）；与…和解",
    example: "Poetry can help you come to terms with personal emotions.",
    tags: ["day8", "preview", "phrase"],
    star: true
  },
  {
    en: "spread the word",
    ipa: "/spred ðə ˈwɜːd/",
    pos: "短语",
    zh: "传播消息；广而告之",
    example: "Poetry can spread the word about important global events.",
    tags: ["day8", "preview", "phrase"],
    star: false
  },

  // —— Day 9 · Living with debt（预习） ——
  {
    en: "debt",
    ipa: "/det/",
    pos: "n.",
    zh: "债务（注意 b 不发音）",
    example: "Many people are living with debt.",
    tags: ["day9", "preview", "ielts"],
    star: true
  },
  {
    en: "owe",
    ipa: "/əʊ/",
    pos: "v.",
    zh: "欠（钱、人情）",
    example: "I owe the bank a lot of money.",
    tags: ["day9", "preview", "ielts"],
    star: true
  },
  {
    en: "borrow",
    ipa: "/ˈbɒrəʊ/",
    pos: "v.",
    zh: "借入",
    example: "People are borrowing money for bills and food.",
    tags: ["day9", "preview"],
    star: true
  },
  {
    en: "lend",
    ipa: "/lend/",
    pos: "v.",
    zh: "借出",
    example: "The bank agreed to lend her money.",
    tags: ["day9", "preview"],
    star: false
  },
  {
    en: "loan",
    ipa: "/ləʊn/",
    pos: "n.",
    zh: "贷款",
    example: "He took out a loan to buy a car.",
    tags: ["day9", "preview", "ielts"],
    star: false
  },
  {
    en: "interest rate",
    ipa: "/ˈɪntrəst reɪt/",
    pos: "n.",
    zh: "利率",
    example: "Interest rates have risen sharply.",
    tags: ["day9", "preview", "phrase", "ielts"],
    star: true
  },
  {
    en: "repay",
    ipa: "/rɪˈpeɪ/",
    pos: "v.",
    zh: "偿还",
    example: "It took years to repay the debt.",
    tags: ["day9", "preview"],
    star: false
  },
  {
    en: "budget",
    ipa: "/ˈbʌdʒɪt/",
    pos: "n. v.",
    zh: "预算；做预算",
    example: "Keep a monthly budget to control spending.",
    tags: ["day9", "preview", "ielts"],
    star: true
  },
  {
    en: "make ends meet",
    ipa: "/meɪk endz miːt/",
    pos: "短语",
    zh: "收支相抵；勉强糊口",
    example: "Many families struggle to make ends meet.",
    tags: ["day9", "preview", "phrase"],
    star: true
  },
  {
    en: "cost of living",
    ipa: "/ˌkɒst əv ˈlɪvɪŋ/",
    pos: "短语",
    zh: "生活成本",
    example: "The rising cost of living forces people to borrow.",
    tags: ["day9", "preview", "phrase", "ielts"],
    star: true
  },
  {
    en: "get out of control",
    ipa: "/ɡet aʊt əv kənˈtrəʊl/",
    pos: "短语",
    zh: "失控",
    example: "Debt can get out of control, causing anxiety and stress.",
    tags: ["day9", "preview", "phrase"],
    star: false
  },

  // —— Day 10 · Making cities feel quieter（预习） ——
  {
    en: "noise pollution",
    ipa: "/ˈnɔɪz pəˌluːʃn/",
    pos: "n.",
    zh: "噪音污染",
    example: "Noise pollution affects people's health in cities.",
    tags: ["day10", "preview", "phrase", "ielts"],
    star: true
  },
  {
    en: "background noise",
    ipa: "/ˈbækɡraʊnd nɔɪz/",
    pos: "n.",
    zh: "背景噪音",
    example: "It's hard to focus with constant background noise.",
    tags: ["day10", "preview", "phrase"],
    star: false
  },
  {
    en: "hustle and bustle",
    ipa: "/ˌhʌsl ən ˈbʌsl/",
    pos: "短语",
    zh: "喧嚣繁忙",
    example: "She loves the hustle and bustle of city life.",
    tags: ["day10", "preview", "phrase"],
    star: true
  },
  {
    en: "tranquil",
    ipa: "/ˈtræŋkwɪl/",
    pos: "adj.",
    zh: "宁静的",
    example: "a tranquil park in the middle of the city",
    tags: ["day10", "preview", "ielts"],
    star: true
  },
  {
    en: "muffle",
    ipa: "/ˈmʌfl/",
    pos: "v.",
    zh: "使（声音）低沉；压低",
    example: "Trees can muffle traffic noise.",
    tags: ["day10", "preview"],
    star: false
  },
  {
    en: "soundscape",
    ipa: "/ˈsaʊndskeɪp/",
    pos: "n.",
    zh: "声音景观；声景",
    example: "Designers think about a city's soundscape.",
    tags: ["day10", "preview"],
    star: false
  },
  {
    en: "urban planning",
    ipa: "/ˌɜːbən ˈplænɪŋ/",
    pos: "n.",
    zh: "城市规划",
    example: "Good urban planning makes cities quieter.",
    tags: ["day10", "preview", "phrase", "ielts"],
    star: true
  },
  {
    en: "green space",
    ipa: "/ˈɡriːn speɪs/",
    pos: "n.",
    zh: "绿地",
    example: "Green spaces make cities more liveable.",
    tags: ["day10", "preview", "phrase", "ielts"],
    star: true
  },
  {
    en: "nuisance",
    ipa: "/ˈnjuːsns/",
    pos: "n.",
    zh: "讨厌的东西；麻烦事",
    example: "Late-night noise is a real nuisance.",
    tags: ["day10", "preview", "ielts"],
    star: false
  },
  {
    en: "insulation",
    ipa: "/ˌɪnsjuˈleɪʃn/",
    pos: "n.",
    zh: "隔音/隔热（材料）",
    example: "Sound insulation keeps flats quiet.",
    tags: ["day10", "preview"],
    star: false
  },

  // —— Day 11 · How reading shapes your brain（预习） ——
  {
    en: "literacy",
    ipa: "/ˈlɪtərəsi/",
    pos: "n.",
    zh: "读写能力；识字",
    example: "Reading early improves children's literacy.",
    tags: ["day11", "preview", "ielts"],
    star: true
  },
  {
    en: "comprehension",
    ipa: "/ˌkɒmprɪˈhenʃn/",
    pos: "n.",
    zh: "理解（力）",
    example: "Reading fiction improves comprehension.",
    tags: ["day11", "preview", "ielts"],
    star: true
  },
  {
    en: "fiction",
    ipa: "/ˈfɪkʃn/",
    pos: "n.",
    zh: "小说；虚构作品",
    example: "She reads a lot of fiction.",
    tags: ["day11", "preview"],
    star: false
  },
  {
    en: "imagination",
    ipa: "/ɪˌmædʒɪˈneɪʃn/",
    pos: "n.",
    zh: "想象力",
    example: "Novels feed the imagination.",
    tags: ["day11", "preview"],
    star: false
  },
  {
    en: "concentration",
    ipa: "/ˌkɒnsnˈtreɪʃn/",
    pos: "n.",
    zh: "专注力",
    example: "Deep reading builds concentration.",
    tags: ["day11", "preview", "ielts"],
    star: false
  },
  {
    en: "empathy",
    ipa: "/ˈempəθi/",
    pos: "n.",
    zh: "共情能力；同理心",
    example: "Reading stories increases empathy.",
    tags: ["day11", "preview", "ielts"],
    star: true
  },
  {
    en: "stimulate",
    ipa: "/ˈstɪmjuleɪt/",
    pos: "v.",
    zh: "刺激；激发",
    example: "Reading stimulates many areas of the brain.",
    tags: ["day11", "preview", "ielts"],
    star: true
  },
  {
    en: "retain",
    ipa: "/rɪˈteɪn/",
    pos: "v.",
    zh: "记住；保留",
    example: "We retain more when we read slowly.",
    tags: ["day11", "preview", "ielts"],
    star: false
  },
  {
    en: "immerse yourself in",
    ipa: "/ɪˈmɜːs jɔːˌself ɪn/",
    pos: "短语",
    zh: "沉浸于",
    example: "Immerse yourself in a good book.",
    tags: ["day11", "preview", "phrase"],
    star: true
  },

  // —— Day 12 · Searching for life on another planet（预习） ——
  {
    en: "astronomer",
    ipa: "/əˈstrɒnəmə/",
    pos: "n.",
    zh: "天文学家",
    example: "Astronomers search for planets like Earth.",
    tags: ["day12", "preview"],
    star: true
  },
  {
    en: "telescope",
    ipa: "/ˈtelɪskəʊp/",
    pos: "n.",
    zh: "望远镜",
    example: "The telescope can detect distant planets.",
    tags: ["day12", "preview"],
    star: false
  },
  {
    en: "orbit",
    ipa: "/ˈɔːbɪt/",
    pos: "n. v.",
    zh: "轨道；绕…运行",
    example: "The planet orbits a distant star.",
    tags: ["day12", "preview", "ielts"],
    star: true
  },
  {
    en: "habitable",
    ipa: "/ˈhæbɪtəbl/",
    pos: "adj.",
    zh: "适宜居住的",
    example: "Is the planet habitable?",
    tags: ["day12", "preview"],
    star: true
  },
  {
    en: "extraterrestrial",
    ipa: "/ˌekstrətəˈrestriəl/",
    pos: "adj.",
    zh: "地球外的；外星的",
    example: "searching for extraterrestrial life",
    tags: ["day12", "preview"],
    star: false
  },
  {
    en: "galaxy",
    ipa: "/ˈɡæləksi/",
    pos: "n.",
    zh: "星系；银河",
    example: "There are billions of stars in our galaxy.",
    tags: ["day12", "preview"],
    star: false
  },
  {
    en: "solar system",
    ipa: "/ˈsəʊlə ˌsɪstəm/",
    pos: "n.",
    zh: "太阳系",
    example: "planets beyond our solar system",
    tags: ["day12", "preview", "phrase"],
    star: true
  },
  {
    en: "universe",
    ipa: "/ˈjuːnɪvɜːs/",
    pos: "n.",
    zh: "宇宙",
    example: "Are we alone in the universe?",
    tags: ["day12", "preview"],
    star: false
  },
  {
    en: "evidence",
    ipa: "/ˈevɪdəns/",
    pos: "n.",
    zh: "证据",
    example: "Scientists look for evidence of life.",
    tags: ["day12", "preview", "ielts"],
    star: true
  },

  // —— Day 13 · Why are we all so stressed?（预习） ——
  {
    en: "burnout",
    ipa: "/ˈbɜːnaʊt/",
    pos: "n.",
    zh: "职业倦怠；身心俱疲",
    example: "Long hours can lead to burnout.",
    tags: ["day13", "preview", "ielts"],
    star: true
  },
  {
    en: "cope with",
    ipa: "/kəʊp wɪð/",
    pos: "短语",
    zh: "应对；对付",
    example: "How do you cope with stress?",
    tags: ["day13", "preview", "phrase", "ielts"],
    star: true
  },
  {
    en: "chronic",
    ipa: "/ˈkrɒnɪk/",
    pos: "adj.",
    zh: "慢性的；长期的",
    example: "Chronic stress harms your health.",
    tags: ["day13", "preview", "ielts"],
    star: true
  },
  {
    en: "stressed out",
    ipa: "/strest aʊt/",
    pos: "短语",
    zh: "压力大的；紧张透了",
    example: "I'm totally stressed out this week.",
    tags: ["day13", "preview", "phrase"],
    star: false
  },
  {
    en: "work-life balance",
    ipa: "/ˌwɜːk laɪf ˈbæləns/",
    pos: "n.",
    zh: "工作与生活的平衡",
    example: "A good work-life balance reduces stress.",
    tags: ["day13", "preview", "phrase", "ielts"],
    star: true
  },
  {
    en: "mindfulness",
    ipa: "/ˈmaɪndflnəs/",
    pos: "n.",
    zh: "正念",
    example: "Mindfulness can help you relax.",
    tags: ["day13", "preview"],
    star: false
  },
  {
    en: "unwind",
    ipa: "/ˌʌnˈwaɪnd/",
    pos: "v.",
    zh: "放松",
    example: "I listen to music to unwind after work.",
    tags: ["day13", "preview"],
    star: true
  },
  {
    en: "under pressure",
    ipa: "/ˌʌndə ˈpreʃə/",
    pos: "短语",
    zh: "承受压力",
    example: "She works well under pressure.",
    tags: ["day13", "preview", "phrase"],
    star: false
  },
  {
    en: "take a break",
    ipa: "/teɪk ə breɪk/",
    pos: "短语",
    zh: "休息一下",
    example: "Take a break every hour when studying.",
    tags: ["day13", "preview", "phrase"],
    star: false
  },

  // —— Day 14 · Should we eat ultra-processed food?（预习） ——
  {
    en: "ultra-processed",
    ipa: "/ˌʌltrə ˈprəʊsest/",
    pos: "adj.",
    zh: "超加工的",
    example: "Should we eat ultra-processed food?",
    tags: ["day14", "preview"],
    star: true
  },
  {
    en: "ingredient",
    ipa: "/ɪnˈɡriːdiənt/",
    pos: "n.",
    zh: "成分；食材",
    example: "Check the ingredients on the label.",
    tags: ["day14", "preview", "ielts"],
    star: true
  },
  {
    en: "additive",
    ipa: "/ˈædətɪv/",
    pos: "n.",
    zh: "添加剂",
    example: "This snack is full of additives.",
    tags: ["day14", "preview", "ielts"],
    star: true
  },
  {
    en: "preservative",
    ipa: "/prɪˈzɜːvətɪv/",
    pos: "n.",
    zh: "防腐剂",
    example: "Preservatives make food last longer.",
    tags: ["day14", "preview"],
    star: false
  },
  {
    en: "nutritious",
    ipa: "/njuˈtrɪʃəs/",
    pos: "adj.",
    zh: "有营养的",
    example: "Fresh vegetables are cheap and nutritious.",
    tags: ["day14", "preview", "ielts"],
    star: true
  },
  {
    en: "consumption",
    ipa: "/kənˈsʌmpʃn/",
    pos: "n.",
    zh: "消费；摄入（量）",
    example: "Reduce your consumption of sugary drinks.",
    tags: ["day14", "preview", "ielts"],
    star: false
  },
  {
    en: "obesity",
    ipa: "/əʊˈbiːsəti/",
    pos: "n.",
    zh: "肥胖（症）",
    example: "Ultra-processed food is linked to obesity.",
    tags: ["day14", "preview", "ielts"],
    star: true
  },
  {
    en: "junk food",
    ipa: "/ˈdʒʌŋk fuːd/",
    pos: "n.",
    zh: "垃圾食品",
    example: "Try to eat less junk food.",
    tags: ["day14", "preview", "phrase"],
    star: false
  },
  {
    en: "crave",
    ipa: "/kreɪv/",
    pos: "v.",
    zh: "渴望；馋",
    example: "We often crave salty, processed snacks.",
    tags: ["day14", "preview"],
    star: false
  }
];
