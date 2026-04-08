# শব্দকল্পদ্রুম · Shobdokolpodroom ✦

**A personal German vocabulary flashcard app — built from 8 years of living in Germany.**

🌐 **Live app: https://shobdokolpodroom-production.up.railway.app**
*(Works on any browser — iPhone, Mac, anything. No install needed.)*

---

## The idea

Generic word lists don't stick. Anki decks built from textbooks don't stick.

But the word your German colleague used in a meeting, which you looked up on the U-Bahn home — that one sticks forever.

Every word in this app was collected from real life: conversations, audiobooks, university lectures, bureaucratic letters, satellite communication conferences. The examples aren't made up either — they come from the exact moments the words were first encountered.

This is a personal Wortschatz, built word by word over 8 years in Germany. The app is just the vessel.

---

## The name

*Shobdokolpodroom* (শব্দকল্পদ্রুম) is a nonsense poem by the Bengali poet **Sukumar Ray** (1887–1923). The word means "the wish-fulfilling tree of words." A fitting name for a vocabulary garden.

---

## Make it yours

Fork this repo, delete the words, fill it with your own. Learning French? Japanese? Living in a foreign country and collecting words along the way? Your Shobdokolpodroom is waiting.

You can add words directly from the app on your phone, in the moment you hear them.

---

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) v18 or higher

```bash
git clone https://github.com/Avps1/shobdokolpodroom.git
cd shobdokolpodroom
npm install
node server.js
```

Open `http://localhost:3000` in your browser.

**Deploy to the web (free, works on iPhone anywhere):**

```bash
npm install -g @railway/cli
railway login
railway init
railway up
railway domain
```

Bookmark that URL on your iPhone. Add it to your home screen from Safari — it works like a native app.

---

## Adding words

**From the app:** tap ✚ Neu, fill in the word, meaning and an example sentence, tap save. Done — works on iPhone too.

**Directly in `words.json`:** open the file in any text editor and add an entry:

```json
{
  "word": "Gelassenheit",
  "meaning": "Inner peace / Composure",
  "example": "Ich sehne mich nach mehr Gelassenheit.",
  "source": "custom"
}
```

Then push to redeploy:

```bash
git add words.json
git commit -m "Add new words"
git push
railway up
```

---

## Project structure

```
shobdokolpodroom/
├── server.js        ← Express server
├── words.json       ← Your vocabulary (edit freely)
├── public/
│   └── index.html   ← Full frontend, one file
└── package.json
```

---

## API

| Method | Endpoint | What it does |
|--------|----------|--------------|
| GET | `/api/words` | Get all words |
| POST | `/api/words` | Add a word `{ word, meaning, example }` |
| DELETE | `/api/words/:index` | Delete by index |

---

MIT License — fork it, fill it with your own words. Das ist der Sinn der Sache. 🌱
