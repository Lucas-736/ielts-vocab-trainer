# 雅思词库 · 刷词（PWA）

个人雅思词汇练习站：先认读、再拼写，自动统计薄弱词。  
纯前端，可装到手机主屏幕。托管在 GitHub Pages（无需自有域名）。

> **给后续 AI / 协作者：** 改词库、加功能请先读本文 + [`AGENTS.md`](./AGENTS.md)。  
> 词库源文件是 **`words.js`**，不要另起一套未说明的数据格式。

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

## 目录结构

```text
vocab-trainer/
├── README.md                 ← 本说明（人读 + AI 读）
├── AGENTS.md                 ← 给 AI 的操作约定（加词 / 部署）
├── index.html                ← 全部 UI + 学习逻辑
├── words.js                  ← ★ 词库唯一权威数据源
├── manifest.webmanifest      ← PWA 安装配置
├── sw.js                     ← Service Worker（离线缓存）
├── .nojekyll                 ← GitHub Pages 用
└── icons/
    ├── icon-180.png          ← iOS 主屏幕
    ├── icon-192.png
    └── icon-512.png
```

| 本地路径 | 说明 |
|----------|------|
| `/Users/tom/Documents/雅思备考/02-词汇/vocab-trainer/` | 本机工作副本 |
| SecondBrain `30-项目/雅思备考/` | 笔记源头（词汇积累、Day 精读） |

**约定：** 笔记在 SecondBrain 里写；可刷的词同步进本项目的 `words.js`。

---

## 手机安装成「软件」

### iPhone

1. 用 **Safari** 打开线上地址（不要用微信内置浏览器）
2. 分享 → **添加到主屏幕**

### 安卓

1. **Chrome** 打开线上地址  
2. 菜单 → 安装应用 / 添加到主屏幕

---

## 记忆模式（产品行为）

1. **① 认读教学**（新词必走）：英文 + 音标 + 中文 + 例句，自动读音  
2. **② 认读自测**：只给中文 →「认识 / 不认识」→ 统计 **认对 / 认错**  
3. **③ 拼写**：中文 → 写英文 → 统计 **拼对 / 拼错**  

- 错词提高权重、插回本轮队列  
- 「薄弱」页按加权排序（拼错权重大于认错）  
- 进度在浏览器 `localStorage`，**手机与电脑默认不同步**

进度键名：`ielts_vocab_progress_v2`（兼容读取旧的 `v1`）。

---

## 如何添加词汇（人 / AI 都按这个做）

### 方式 A：改 `words.js`（推荐，全设备生效）

1. 打开 `words.js`  
2. 在 `window.VOCAB_BANK = [ ... ]` 数组中 **追加** 对象（不要删掉已有词，除非用户明确要求）  
3. 保存后部署到 GitHub `main`（见下文）

#### 单词对象格式（必须遵守）

```js
{
  en: "expertise",           // 必填：英文（拼写答案；大小写不敏感；短语保留空格）
  ipa: "/ˌekspɜːˈtiːz/",    // 强烈建议：IPA 音标，用斜杠包起来
  pos: "n.",                 // 建议：词性，如 n. / v. / adj. / 短语 / 习语
  zh: "专长；专业技能",       // 必填：中文释义
  example: "absolute expertise in moving his feet",  // 建议：例句
  tags: ["day1", "core"],    // 建议：标签数组，用于筛选
  star: true                 // 可选：是否重点词（★筛选）
}
```

#### 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `en` | ✅ | 拼写比对用；勿前后多余空格；短语如 `"driven by"` |
| `zh` | ✅ | 认读/拼写题目展示 |
| `ipa` | 强烈建议 | 英式 IPA 优先（BBC 材料） |
| `pos` | 建议 | 界面小字展示 |
| `example` | 建议 | 教学页例句 |
| `tags` | 建议 | 见下方标签约定 |
| `star` | 可选 | `true` = 重点词 |

#### 标签 `tags` 约定（可扩展，保持小写）

| tag | 含义 |
|-----|------|
| `day1`, `day2`, … | 来自第几天精读 |
| `core` | 节目/笔记核心词 |
| `phrase` | 短语/习语 |
| `sport` / `science` 等 | 话题 |
| `custom` | 用户手动导入 |

同一 `en`（忽略大小写与多余空格）在数组里应只出现一次；重复时以后者为准的逻辑在应用层合并时生效，**维护时请直接去重**。

#### 从笔记批量加词时的建议流程（给 AI）

1. 读取用户 SecondBrain 中对应笔记（如 `词汇积累.md`、`听力/DayN-…-词汇语法.md`）  
2. 抽取：英文、音标、词性、中文、例句  
3. 映射为上述 JSON 对象  
4. **追加**到 `words.js` 的 `VOCAB_BANK`  
5. 更新 `words.js` 文件头注释里的「来源」一行  
6. 提交并 `git push origin main`  
7. 若改了 `index.html` / `sw.js`，把 `sw.js` 里的 `CACHE` 版本号 +1，避免用户手机一直用旧缓存  

### 方式 B：网页内 JSON 导入（仅当前浏览器）

设置页粘贴数组 →「合并导入」。  
数据存在该浏览器 `localStorage`（`ielts_vocab_custom_v1`），**不会**自动同步到 GitHub 或其他设备。  
适合临时加词；长期词库仍应写入 `words.js`。

---

## 本地开发与部署

### 本地预览

```bash
open "/Users/tom/Documents/雅思备考/02-词汇/vocab-trainer/index.html"
```

或任意静态服务器在该目录启动。  
注意：`file://` 下 Service Worker / 安装 PWA 可能不可用；完整体验用线上 HTTPS。

### 发布到 GitHub Pages

仓库：`Lucas-736/ielts-vocab-trainer`  
分支：`main` 根目录 → Pages  

```bash
cd "/Users/tom/Documents/雅思备考/02-词汇/vocab-trainer"
git add -A
git commit -m "描述你的改动"
git push origin main
```

约 1 分钟后刷新：  
https://lucas-736.github.io/ielts-vocab-trainer/

### 改完前端后用户仍看到旧版？

1. 提高 `sw.js` 中 `const CACHE = "ielts-vocab-vN"` 的版本号  
2. 推送 `main`  
3. 手机端强制刷新或关掉 App 重开  

---

## 技术要点（给改功能的人）

| 点 | 说明 |
|----|------|
| 无构建工具 | 无 npm/webpack；直接静态文件 |
| 词库加载 | `<script src="words.js">` → `window.VOCAB_BANK` |
| 进度 | `localStorage` key `ielts_vocab_progress_v2` |
| 学习队列 | 在 `index.html` 内 `buildQueue()`：新词 teach→read，旧词 read/spell |
| 薄弱分 | `weakScore()`：拼错×4 + 认错×2.5 − 做对扣分 |
| 掌握条件 | 已认读 + 拼对≥2 + 认对≥1 + 拼对比拼错多 + 认对比认错多 |

**不要**在未沟通时改成必须后端/登录；当前产品目标是离线个人刷词。

---

## 与 SecondBrain 的关系

| 内容 | 位置 |
|------|------|
| 学习计划、精读笔记 | `SecondBrain/30-项目/雅思备考/` |
| 词汇笔记 | `词汇积累.md`、`听力/DayN-…` |
| 可练习词库 | **本仓库 `words.js`** |
| 刷词入口（笔记里） | 备考中心 / 词汇积累 已链到线上 URL |

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
