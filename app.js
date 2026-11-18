import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: '경로가 없습니다' });
});

// 에러 처리 (맨 마지막)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).json({ error: err.message});
});

export default app;