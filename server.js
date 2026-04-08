const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const WORDS_FILE = path.join(__dirname, 'words.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET all words
app.get('/api/words', (req, res) => {
  const words = JSON.parse(fs.readFileSync(WORDS_FILE, 'utf8'));
  res.json(words);
});

// POST a new word
app.post('/api/words', (req, res) => {
  const { word, meaning, example } = req.body;
  if (!word || !meaning) {
    return res.status(400).json({ error: 'word and meaning are required' });
  }
  const words = JSON.parse(fs.readFileSync(WORDS_FILE, 'utf8'));
  const newWord = { word: word.trim(), meaning: meaning.trim(), example: (example || '').trim(), source: 'custom' };
  words.push(newWord);
  fs.writeFileSync(WORDS_FILE, JSON.stringify(words, null, 2), 'utf8');
  res.status(201).json(newWord);
});

// DELETE a word by index
app.delete('/api/words/:index', (req, res) => {
  const idx = parseInt(req.params.index);
  const words = JSON.parse(fs.readFileSync(WORDS_FILE, 'utf8'));
  if (idx < 0 || idx >= words.length) {
    return res.status(404).json({ error: 'Word not found' });
  }
  words.splice(idx, 1);
  fs.writeFileSync(WORDS_FILE, JSON.stringify(words, null, 2), 'utf8');
  res.json({ success: true });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✦ Shobdokolpodroom running at http://localhost:${PORT}`);
  console.log(`  On your iPhone (same WiFi): http://<your-mac-ip>:${PORT}\n`);
});
