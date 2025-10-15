
# 🧩 Missing Letter Detector

## 📖 Overview

**Missing Letter Detector** is a tiny JavaScript utility that finds a **missing letter** in a sequential, lowercased alphabetic range (e.g., `"abdef"` → missing `"c"` returns `"c"`).  
If **no letter is missing**, it returns `undefined`. Perfect for practicing **loops**, **arrays**, and **string logic** in JS. 🧠✨

---

## 📂 Project Structure

```bash
missing-letter-detector/
│
├── .gitignore      # 🧹 Files Git should ignore
├── README.md       # 📘 This documentation
└── source.js       # 💻 Core JavaScript logic
```

---

## 🚀 Getting Started

### 🔧 Requirements
- `Node.js` (to run locally), or a browser console.

### ▶️ Run

```bash
git clone https://github.com/karianjahi/missing-letter-detector.git
cd missing-letter-detector
node source.js
```

---

## 🧠 How It Works

- Accepts a **string of consecutive, lowercase letters** with **at most one missing**.
- Determines the **full expected range** based on the first and last characters.
- Compares expected letters with the input to find the **first missing** one.
- Returns that letter, or `undefined` if none is missing.

---


---

## 🧪 Examples

```js
fearNotLetter("abce");         // "d"  ✅
fearNotLetter("abcdefghj");    // "i"  ✅
fearNotLetter("stuvwxz");      // "y"  ✅
fearNotLetter("mnop");         // undefined (no missing) ✅
```

> ℹ️ Input should be **lowercase**, **alphabetical**, and **sequential** between first and last letters.

---

## 🧱 Concepts Practiced

- 🔁 Looping (`for`)
- 🧩 Array operations (`split`, `indexOf`, `includes`)
- 🧠 Range construction and comparison
- ✅ Early return patterns

---


---


---

## 💡 Possible Improvements

- Handle **uppercase** inputs by normalizing: `string.toLowerCase()`.
- Validate and guard against **non-alphabetic** characters.
- Support **multiple missing letters** by collecting all gaps.

---


---

## 🪄 License

This project is open-source and available

---

## ✨ TL;DR

| Item | Summary |
|---|---|
| Purpose | Find the missing letter in a sequential, lowercase range |
| Input | A string like `"abce"` |
| Output | Missing letter (e.g., `"d"`) or `undefined` |
| Core Skills | Loops, arrays, string handling |

