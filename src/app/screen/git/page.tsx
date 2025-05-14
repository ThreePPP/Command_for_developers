'use client'

import React, { useState } from 'react'
import { GitBranch, Copy, Check } from 'lucide-react'
import Link from 'next/link'

const GitPage = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 500)
  }

  const CopyButton = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2">
      <span className="text-white break-all">{text}</span>
      {copiedText === text ? (
        <Check className="w-4 h-4 text-green-400 transition" />
      ) : (
        <Copy
          className="w-4 h-4 cursor-pointer hover:text-pink-400 transition"
          onClick={() => copyToClipboard(text)}
        />
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex items-center gap-3 text-xl font-bold">
          <Link href="/" title="กลับหน้าหลัก">
            <GitBranch className="text-pink-400 w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          </Link>
          Git Commands
        </div>

        <div className="bg-black rounded-lg p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap space-y-3">
          <div className="text-pink-400"># Clone with HTTPS</div>
          <CopyButton text="git clone https://gitlab.com/username/repo.git" />

          <div className="text-pink-400"># Checkout to another branch</div>
          <CopyButton text="git checkout branch-name" />

          <div className="text-pink-400"># Install dependencies</div>
          <CopyButton text="npm install" />

          <div className="text-pink-400"># Push to origin</div>
          <CopyButton text='git push origin branch-name' />
          <CopyButton text='git commit -m "Your commit message here"' />
          <CopyButton text="git push origin developer" />

          <div className="text-pink-400"># Pull from origin</div>
          <CopyButton text="git pull origin branch-name" />

          <div className="text-pink-400"># Push over old files</div>
          <CopyButton text="git push --force origin developer" />

          <div className="text-pink-400"># Push selected specific files</div>
          <CopyButton text="git add src/screens/UserProfile/sections/ContentSection/ContentSection.tsx" />
        </div>
      </div>
    </div>
  )
}

export default GitPage
