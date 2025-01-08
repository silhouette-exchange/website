'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function EmailSignup() {
  const [showInput, setShowInput] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email submission logic
    console.log('Email submitted:', email)
    setShowInput(false)
    setEmail('')
  }

  return (
    <div className="relative">
      {!showInput ? (
        <button onClick={() => setShowInput(true)}>
          <Image
            src="/button.svg"
            alt="Get Notified"
            width={320}
            height={81}
          />
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded-l-md focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

