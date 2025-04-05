import React from 'react'

type Props = {
  question: string
  options: string[]
  answer: number
  onAnswer: (correct: boolean) => void
}

export default function Question({ question, options, answer, onAnswer }: Props) {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((opt, idx) => (
        <button key={idx} onClick={() => onAnswer(idx === answer)} style={{ display: 'block', margin: '0.5rem 0' }}>
          {opt}
        </button>
      ))}
    </div>
  )
}
