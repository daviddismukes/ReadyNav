// utils/saveResult.ts
export function saveQuizResult(topic: string, score: number, total: number) {
  const existing = JSON.parse(localStorage.getItem('readyNavResults') || '[]');
  const newEntry = {
    topic,
    score,
    total,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem('readyNavResults', JSON.stringify([newEntry, ...existing]));
}
