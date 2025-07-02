import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

interface Topic {
  title: string;
  description: string;
  questions?: {
    prompt: string;
    options: string[];
    answer: string;
  }[];
}

const AdminPanel = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('quizTopics');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTopics(Array.isArray(parsed) ? parsed : []);
      } catch {
        console.warn('Failed to parse quizTopics from localStorage.');
      }
    }
  }, []);

  const saveTopics = (updated: Topic[]) => {
    localStorage.setItem('quizTopics', JSON.stringify(updated));
    setTopics(updated);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);

      const grouped: Record<string, Topic> = {};

      rows.forEach((row: any) => {
        const topicKey = row['Topic Title'];
        if (!grouped[topicKey]) {
          grouped[topicKey] = {
            title: topicKey,
            description: row['Description'],
            questions: [],
          };
        }
        grouped[topicKey].questions?.push({
          prompt: row['Question'],
          options: [row['Option A'], row['Option B'], row['Option C'], row['Option D']],
          answer: row['Answer'],
        });
      });

      const mergedTopics = [...topics];
      Object.values(grouped).forEach((newTopic) => {
        const index = mergedTopics.findIndex(t => t.title === newTopic.title);
        if (index !== -1) {
          mergedTopics[index].questions = [
            ...(mergedTopics[index].questions || []),
            ...(newTopic.questions || []),
          ];
        } else {
          mergedTopics.push(newTopic);
        }
      });

      saveTopics(mergedTopics);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        className="mb-4"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{topic.title}</h3>
            <p className="text-sm text-gray-600">{topic.description}</p>
            <p className="text-xs text-gray-400">{topic.questions?.length || 0} questions</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
