/**
 * 词库数据 —— 来自 SecondBrain 雅思笔记
 * 来源：词汇积累.md · Day1-足球运动员的大脑-词汇语法.md
 *       Day2-Should we cycle more?.md
 *       原始资料/6 Minute English：Rude emails · Stress-free family meals
 *         · Limiting screen time for children · How advertisers make us spend money
 *       雅思最全词汇包/VocabForIELTS_WLM_FrequentlyMisspeltWords.pdf
 *       雅思最全词汇包/雅思听力同义替换汇总.pdf
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
  day16: "Day 16 · 高频同义替换"
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
  day16: "Day 16 · High-frequency paraphrases"
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
  }
];
