# AGENTS.md — 给 AI 助手的项目约定

你在修改 **雅思词库刷词（ielts-vocab-trainer）** 时遵循本文。人类说明见 `README.md`。

## 项目是什么

- 静态 PWA：认读教学 → 认读自测 → 拼写；统计薄弱词  
- 无后端、无构建、无 npm  
- 线上：`https://lucas-736.github.io/ielts-vocab-trainer/`  
- 本机：`/Users/tom/Documents/雅思备考/02-词汇/vocab-trainer/`  
- GitHub：`Lucas-736/ielts-vocab-trainer`（`main` → Pages）

## 加词汇时（最高频任务）

1. **只改** `words.js` 里的 `window.VOCAB_BANK` 数组（追加对象）。  
2. 每条必须有：`en`、`zh`；尽量有：`ipa`、`pos`、`example`、`exampleZh`（例句中文翻译，卡片上会显示）、`tags`、`star`。  
3. 音标用 IPA，英式优先，写成 `"/ˈæmpl/"` 这种带斜杠形式。  
4. `tags` 用已有约定：`dayN`、`core`（官方重点词）、`phrase`、`ielts`、`recog`（认读词：地名/专名等，只认读不进拼写关）、`preview`（预习章节，材料还没学到）等。  
5. **不要**重复相同的 `en`（大小写/空格规范化后视为同一词）。  
5.1 章节由 `tags` 里的 `dayN` 决定；新开一章时在 `words.js` 顶部的 `window.VOCAB_CHAPTERS` 里补一条标题（`day3: "Day 3 · 主题"`），没补也能显示成 `Day 3`。  
6. 若词来自用户 SecondBrain 笔记，在 `words.js` 顶部注释写上来源文件名。  
7. 改完后：

```bash
cd "/Users/tom/Documents/雅思备考/02-词汇/vocab-trainer"
git add words.js
git commit -m "Add vocab from <笔记名/DayN>"
git push origin main
```

8. 告知用户：刷新或重开 App；若页面像旧版，可能是 SW 缓存。

## 词条模板（复制用）

```js
{
  en: "word or phrase",
  ipa: "/…/",
  pos: "n.",
  zh: "中文释义",
  example: "Example sentence.",
  exampleZh: "例句中文翻译。",
  tags: ["day2"],
  star: false
},
```

## 改 UI / 学习逻辑时

- **刷词页保持纯净**：`#studyView` 里只能有返回、进度、单词卡、底栏。任何设置/筛选/导出类控件都放首页或对应 tab，不要往刷词页加。
- **按钮归位**：学习流程的操作一律进底部 `#barPrimary`/`#barSecondary`（用 `setBar(primary, secondary, hint)`），不要再往卡片里塞按钮；卡片只放内容。
- **选词维度只有两个**：`chapter`（章节）与 `filter`（范围），都在顶部选择条里；不要再加第三处筛选入口。
- **所有界面文案都要走 i18n**：在 `index.html` 的 `I18N` 对象里同时补 `zh` 和 `en` 两条；静态节点用 `data-i18n="key"`，JS 里用 `t("key", { 参数 })`。不要再往 DOM 里写死中文。
- **配色只用 CSS 变量**（`--accent` `--card` `--text` …），变量在 `:root[data-theme="dark"]` 与 `[data-theme="light"]` 各定义一套；写死色值会导致某个主题下不可读。
- 新章节标题记得同时补 `VOCAB_CHAPTERS` 与 `VOCAB_CHAPTERS_EN`。

- 逻辑几乎全在 `index.html` 内联脚本。  
- 学习模式有四种：`teach` → `read` → `spell` / `listen`（听写，拼对过的词随机升级；`recog` 词只走 read）。含空格的短语在 spell/listen 关自动变成**词块拼凑**（`buildChunks` 生成答案块+干扰块）。  
- 例句用 `exampleHtml(w)` 渲染（目标词高亮 + 🔊 朗读 + `exampleZh` 翻译），不要再手写 `<div class="example">` 放例句。  
- 间隔重复：`scheduleWord(en, ok)`（SM-2 简化阶梯 1→3→×ease），`isDue()` 判到期；范围下拉有「今日复习」，首页有到期 banner。答题终点（spell/listen 判分、read 认错、recog 词 read 认对）都要调 `scheduleWord`。  
- 打卡：`daily`（`ielts_vocab_daily_v1`，`{goal, days:{日期:{n,ok}}}`）；所有判分点都要调 `bumpDaily(ok)`；streak/目标显示在 hero 第二行，`updateDailyHud()` 刷新。  
- 改完 **必须** 把 `sw.js` 的 `CACHE` 字符串版本号递增（如 `v2` → `v3`），否则手机可能一直离线旧页。  
- 进度 schema 在 `getProg()`（含 `listenOk/listenWrong/ivl/ease/due`）；变更字段时要兼容旧 `localStorage`（照 migrate v1/v2 的写法加迁移）。  
- 不要默认删除用户进度；「清空」只能是用户点击触发。
- 完整备份/恢复在设置页（`backupPayload()`：打包所有 `ielts_vocab_*` key；恢复只接受 `app:"ielts-vocab-trainer"` 的文件且只写回 `ielts_vocab_` 前缀）。新增 localStorage key 时记得加进 `backupPayload` 的 keys 列表。
- 云同步（可选）：GitHub Gist 方案，token 存 `ielts_vocab_sync_v1`（**绝不能**进 backupPayload/gist）。`saveProgress/saveDaily/saveCustom` 会 `markLocalUpdate()+scheduleSyncPush()`（4s 防抖）；打开时 `syncPull()` 拉取，`mergeRemote()` 合并（逐词按 last 取新、打卡逐日取大、自定义词并集、偏好按 updatedAt 新旧）。改进度存储结构时同步检查 mergeRemote。

## 不要做的事

- 不要引入必须登录/必须后端才能刷词（除非用户明确要求）。  
- 不要把词库改成只有 JSON 却删掉 `words.js` 入口（除非同步改 `index.html` 引用并保证 Pages 可加载）。  
- 不要提交 API Key、个人隐私。  
- 不要 force-push `main`。

## 验收清单

- [ ] `words.js` 无语法错误（`window.VOCAB_BANK` 仍是合法数组）  
- [ ] 新词含 `en` + `zh`  
- [ ] 已 push `main`（若用户要求上线）  
- [ ] 改过前端则已 bump `sw.js` CACHE  

## 用户笔记位置（抽词时）

- `…/SecondBrain/SecondBrain/30-项目/雅思备考/词汇积累.md`  
- `…/SecondBrain/SecondBrain/30-项目/雅思备考/听力/Day*-词汇语法.md`  
- 计划：`轻松重启学习计划.md`
