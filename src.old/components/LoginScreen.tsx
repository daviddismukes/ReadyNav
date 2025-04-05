import React, { useState } from 'react'

type Props = {
  onLogin: (name: string, rank: string) => void
}

export default function LoginScreen({ onLogin }: Props) {
  const [name, setName] = useState('')
  const [rank, setRank] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && rank) {
      localStorage.setItem('sailorName', name)
      localStorage.setItem('sailorRank', rank)
      onLogin(name, rank)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#1c1c1c', minHeight: '100vh', color: '#eee' }}>
      <h1 style={{ color: '#3498db' }}>🛳️ ReadyNav Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '0.5rem', marginBottom: '1rem' }} />
        </label>
        <label>
          Rank:
          <input value={rank} onChange={(e) => setRank(e.target.value)} style={{ padding: '0.5rem', marginBottom: '1rem' }} />
        </label>
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#3498db', color: '#fff', border: 'none' }}>
          Enter ReadyNav
        </button>
      </form>
    </div>
  )
}
