'use client'

import React, { useState } from 'react'
import { Terminal, Copy, Check } from 'lucide-react'
import Link from 'next/link'

const NextPage = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-next-app@latest')
    setCopied(true)
    setTimeout(() => setCopied(false), 500) 
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex items-center gap-3 text-xl font-bold">
          <Link href="/">
            <Terminal className="text-green-400 w-6 h-6 cursor-pointer" />
          </Link>
          Terminal
        </div>

        <div className="bg-black rounded-lg p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400">npx create-next-app@latest</span>
            <button
              onClick={handleCopy}
              className="text-white hover:text-green-400 transition relative"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {"\n"}
          <span className="text-white">What is your project named?</span> <span className="text-green-400">Name-project</span>{"\n"}
          <span className="text-white">Would you like to use TypeScript?</span> <span className="text-white">No /<span className=' text-green-400'> Yes</span></span>{"\n"}
          <span className="text-white">Would you like to use ESLint?</span> <span className="text-white"><span className=' text-green-400'> No</span> / Yes</span>{"\n"}
          <span className="text-white">Would you like to use Tailwind CSS?</span> <span className="text-white">No /<span className=' text-green-400'> Yes</span></span>{"\n"}
          <span className="text-white">Would you like your code inside a `src/` directory?</span> <span className="text-white">No /<span className=' text-green-400'> Yes</span></span>{"\n"}
          <span className="text-white">Would you like to use App Router? (recommended)</span> <span className="text-white">No /<span className=' text-green-400'> Yes</span></span>{"\n"}
          <span className="text-white">Would you like to use Turbopack for `next dev`?</span> <span className="text-white"><span className=' text-green-400'> No</span> / Yes</span>{"\n"}
          <span className="text-white">Would you like to customize the import alias (`@/*` by default)?</span> <span className="text-white"><span className=' text-green-400'>No</span> / Yes</span>{"\n"}
        </div>
      </div>
    </div>
  )
}

export default NextPage
