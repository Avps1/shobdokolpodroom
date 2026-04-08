# শব্দকল্পদ্রুম · Shobdokolpodroom ✦
### A personal German vocabulary flashcard app

> *"শব্দকল্পদ্রুম" (Shobdokolpodroom) — the wish-fulfilling tree of words.*
> Named after the beloved nonsense poem by **Sukumar Ray** (1887–1923), Bengali poet and father of absurdist literature.

---

## What is this?

A self-hosted flashcard web app for learning German — built around **words you collect yourself**, not a generic word list.

The idea: every word in this app was encountered in real life — in conversations, audiobooks, lectures, articles, professional meetings. That personal context makes them stick far better than any textbook list.

This project was built by **Abhipshito Bhattacharya**, a PhD researcher in wireless communications at RWTH Aachen, over 8 years of living in Germany.

---

## Features

- 🃏 **Flashcard practice** — flip, mark known/unknown, track session progress
- ✚ **Add words on the fly** — from the app itself, saved permanently to `words.json`
- 📚 **Searchable word list** — filter by source (Notion / ChatGPT / your own)
- 📱 **Works on iPhone** — open in Safari, no app install needed
- 🗂️ **You own your data** — everything lives in a plain `words.json` file you can edit directly

---

## Make it yours — The Philosophy

The real power of this app is that **you bring your own words**.

Every word you encounter — in a podcast, a meeting, a Harry Potter audiobook, a bureaucratic letter — belongs in your Wortschatz. This app is just the vessel.

**How to collect words for your own version:**
1. Keep a running note (Notion, Apple Notes, ChatGPT thread — anything works)
2. When you have a batch, format them as: `Wort | Bedeutung | Beispielsatz`
3. Add them to `words.json` manually, or use the in-app **✚ Neu** form

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/shobdokolpodroom.git
cd shobdokolpodroom
npm install
```

### Run locally

```bash
node server.js
```

Open `http://localhost:3000` in your browser.

### Access on iPhone (same WiFi)

```bash
ipconfig getifaddr en0   # find your Mac's local IP
```

Then open `http://<your-ip>:3000` in iPhone Safari.

### Deploy (permanent URL, works anywhere)

Using [Railway](https://railway.app/) (free tier):

```bash
npm install -g @railway/cli
railway login
railway init
railway up
railway open
```

---

## Project Structure

```
shobdokolpodroom/
├── server.js          ← Express server (API + static files)
├── words.json         ← Your vocabulary database (edit freely!)
├── public/
│   └── index.html     ← Full frontend (single file, no build step)
└── package.json
```

---

## words.json format

```json
[
  {
    "word": "Gelassenheit",
    "meaning": "Inner peace / Composure",
    "example": "Ich sehne mich nach mehr Gelassenheit.",
    "source": "notion"
  }
]
```

`source` can be `"notion"`, `"chatgpt"`, or `"custom"`. Used for filtering in the app.

---

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/words` | Get all words |
| POST | `/api/words` | Add a new word `{ word, meaning, example }` |
| DELETE | `/api/words/:index` | Delete word by index |

---

## Tribute

This app is named after **"শব্দকল্পদ্রুম"** (*Shobdokolpodroom*), a poem by Sukumar Ray — the wish-fulfilling tree of words. A fitting name for a personal vocabulary garden built word by word, over years of living in a foreign land.

---

## License

MIT — fork it, clone it, fill it with your own words. Das ist der Sinn der Sache. 🌱
