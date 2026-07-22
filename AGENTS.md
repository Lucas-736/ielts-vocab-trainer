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
2. 每条必须有：`en`、`zh`；尽量有：`ipa`、`pos`、`example`、`tags`、`star`。  
3. 音标用 IPA，英式优先，写成 `"/ˈæmpl/"` 这种带斜杠形式。  
4. `tags` 用已有约定：`dayN`、`core`、`phrase`、话题词等。  
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
  tags: ["day2"],
  star: false
},
```

## 改 UI / 学习逻辑时

- 逻辑几乎全在 `index.html` 内联脚本。  
- 改完 **必须** 把 `sw.js` 的 `CACHE` 字符串版本号递增（如 `v2` → `v3`），否则手机可能一直离线旧页。  
- 进度 schema 在 `getProg()`；变更字段时要兼容旧 `localStorage`，或升 `STORAGE` key 并写迁移。  
- 不要默认删除用户进度；「清空」只能是用户点击触发。

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
