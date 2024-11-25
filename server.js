import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express();
const db = new Database('players.db');

app.use(cors());
app.use(express.json());

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    age INTEGER NOT NULL,
    goals INTEGER DEFAULT 0,
    assists INTEGER DEFAULT 0,
    matches_played INTEGER DEFAULT 0
  )
`);

// Routes
app.get('/api/players', (req, res) => {
  const players = db.prepare('SELECT * FROM players').all();
  res.json(players);
});

app.post('/api/players', (req, res) => {
  const { name, position, age, goals, assists, matches_played } = req.body;
  const stmt = db.prepare(`
    INSERT INTO players (name, position, age, goals, assists, matches_played)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const result = stmt.run(name, position, age, goals, assists, matches_played);
  res.json({ id: result.lastInsertRowid });
});

app.get('/api/stats', (req, res) => {
  const stats = db.prepare(`
    SELECT 
      position,
      COUNT(*) as count,
      AVG(goals) as avg_goals,
      AVG(assists) as avg_assists
    FROM players
    GROUP BY position
  `).all();
  res.json(stats);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});