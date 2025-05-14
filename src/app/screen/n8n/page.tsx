'use client'

import React, { useState } from 'react'
import { Workflow, Copy, Check } from 'lucide-react'
import Link from 'next/link'

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-gray-400 hover:text-white transition"
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  )
}

const N8nPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 text-xl font-bold">
          <Link href='/'>
            <Workflow className="text-yellow-400 w-6 h-6" />
          </Link>
          การติดตั้ง n8n (Docker / npx / npm)
        </div>

        {/* Content */}
        <div className="bg-black rounded-lg p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          <span className="text-yellow-400">🚀 ติดตั้งผ่าน Docker:</span>{"\n"}

          <div className="flex items-center">
            <span className="text-white">docker run -it --rm \</span>
            <CopyButton text="docker run -it --rm \" />
          </div>

          <div className="flex items-center">
            <span className="text-white">-p 5678:5678 \</span>
            <CopyButton text="-p 5678:5678 \" />
          </div>

          <div className="flex items-center">
            <span className="text-white">-v ~/.n8n:/home/node/.n8n \</span>
            <CopyButton text="-v ~/.n8n:/home/node/.n8n \" />
          </div>

          <span className=' text-yellow-400'>คำสั่งรัน</span>{"\n"}
          <div className="flex items-center">
            <span className="text-white">n8nio/n8n</span>
            <CopyButton text="n8nio/n8n" />
          </div>

          {"\n"}
          <span className="text-yellow-400">📦 ติดตั้งผ่าน npx (ทดลองใช้):</span>{"\n"}
          <div className="flex items-center">
            <span className="text-white">npx n8n</span>
            <CopyButton text="npx n8n" />
          </div>

          {"\n"}
          <span className="text-yellow-400">📦 ติดตั้งผ่าน npm (ใช้งานจริง):</span>{"\n"}
          <div className="flex items-center">
            <span className="text-white">npm install n8n -g</span>
            <CopyButton text="npm install n8n -g" />
          </div>

          <span className=' text-yellow-400'>คำสั่งรัน</span>{"\n"}
          <div className="flex items-center">
            <span className="text-white">n8n</span>
            <CopyButton text="n8n" />
          </div>

          {"\n"}
          <span className="text-yellow-400">🌐 เปิดใช้งาน Web UI ที่:</span>{"\n"}
          <span className="text-white">http://localhost:5678</span>
        </div>
      </div>
    </div>
  )
}

export default N8nPage
