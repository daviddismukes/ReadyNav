import React, { useState } from 'react'
import * as XLSX from 'xlsx'

type Question = {
  question: string
  options: string[]
  answer: string
}

type ParsedQuiz = {
  topic: string
  questions: Question[]
}

const AdminUpload = ({ onConfirm }: { onConfirm: (data: ParsedQuiz) => void }) => {
  const [parsedQuiz, setParsedQuiz] = useState<ParsedQuiz | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (evt) => {
      const bstr = evt.target?.result
      const wb = XLSX.read(bstr, { type: 'binary' })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      const data: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1 })

      const topic = data[0]?.[0] || 'Untitled'
      const questions: Question[] = []

      for (let i = 1; i < data.length; i++) {
        const row = data[i]
        if (row.length >= 6) {
          const q: Question = {
            question: row[0],
            options: [row[1], row[2], row[3], row[4]],
            answer: row[5]
          }
          questions.push(q)
        }
      }

      setParsedQuiz({ topic, questions })
    }
    reader.readAsBinaryString(file)
  }

  return (
    <div style={{ background: '#222', padding: '1rem', color: '#eee', marginTop: '2rem' }}>
      <h3 style={{ color: '#0ff' }}>📥 Upload Quiz File</h3>
      <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} />

      {parsedQuiz && (
        <div style={{ marginTop: '1rem' }}>
          <h4>Topic: {parsedQuiz.topic}</h4>
          <p>Questions parsed: {parsedQuiz.questions.length}</p>
          <button onClick={() => onConfirm(parsedQuiz)} style={{ padding: '0.5rem', marginTop: '1rem' }}>
            ✅ Confirm & Load
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminUpload
