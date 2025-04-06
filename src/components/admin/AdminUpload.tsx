import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const AdminUpload = () => {
  const [message, setMessage] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const quizData = XLSX.utils.sheet_to_json(sheet);
      localStorage.setItem('uploadedQuizData', JSON.stringify(quizData));
      setMessage('Quiz data uploaded and saved to local storage.');
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Quiz Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
};

export default AdminUpload;
