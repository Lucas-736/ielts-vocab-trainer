# 雅思词库 · 刷词（PWA）

纯前端拼写练习，可安装到手机主屏幕，像 App 一样使用。  
**不需要自己的域名**，使用 GitHub Pages 免费地址即可。

> **给后续 AI 助手的文档：** 改词库、加功能请先读本文 + [`AGENTS.md`](./AGENTS.md)。

---

## 线上地址

```text
https://lucas-736.github.io/ielts-vocab-trainer/
```

代码仓库：

```text
https://github.com/Lucas-736/ielts-vocab-trainer
```

---

## 手机安装成「软件」

（同上）

---

## 章节选择 + 打乱章节（新功能）

在「📚 章节选择」标签页，可以：
- 选择单个章节（Day1、Day2、旅行指南等）
- 点 **「🔀 打乱章节」** 会随机打乱所有词复习

---

## 外观与语言

- 右上角 **🌙 / ☀** 切换 **夜·墨 / 昼·纸** 两套主题；首次打开跟随系统深浅色，之后记住你的选择（`ielts_vocab_theme_v1`）。
- 右上角 **🌐** 切换 **中文 / English** 界面；词条释义仍是中文（那是学习内容）。语言存在 `ielts_vocab_lang_v1`。
- 「⚙ 设置」页顶部也有同样的两个开关。

---

## 如何添加词汇（人 / AI 都按这个做）

（同上）

---

## 技术要点（给 AI 的快捷参考）

| 点 | 说明 |
|----|------|
| 词库 | `words.js` 唯一权威数据源 |
| 进度 | `ielts_vocab_progress_v2` |
| 学习队列 | `buildQueue()` 在 `index.html` 内 |
| 薄弱分 | `weakScore()`：拼错权重更高 |
| 部署 | 推送到 `main` 分支，Pages 自动构建 |
| 缓存 | 改 `sw.js` 的 CACHE 版本号 +1 |

---

## 验收清单

- [ ] `words.js` 无语法错误（`window.VOCAB_BANK` 仍是合法数组）
- [ ] 新词含 `en` + `zh`
- [ ] 已 push `main`
- [ ] 改过前端则已 bump `sw.js` CACHE 版本号

---

## AGENTS.md （给 AI 的详细操作约定）

（同上）

---

## 常见任务速查

| 任务 | 做什么 |
|------|--------|
| 只加单词 | 编辑 `words.js` → push |
| 改学习逻辑 | 编辑 `index.html` → 升 `sw.js` CACHE → push |
| 改图标/名称 | `icons/*`、`manifest.webmanifest` |
| 清空用户进度 | 用户在设置页点「清空学习进度」（勿在代码里清别人的 localStorage） |

---

## License / 隐私

个人学习用。词库与进度默认仅存用户本机浏览器；仓库公开则 `words.js` 全网可见，勿写入隐私信息。
