import React from 'react'

type Props = {
  title: string
  onClick: () => void
}

export default function TopicCard({ title, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: '#2e2e2e',
        color: '#f1c40f',
        padding: '1.5rem',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        textAlign: 'center',
        cursor: 'pointer',
        width: '200px',
        transition: 'all 0.2s',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#444';
        e.currentTarget.style.color = '#1abc9c';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#2e2e2e';
        e.currentTarget.style.color = '#f1c40f';
      }}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
  )
}
