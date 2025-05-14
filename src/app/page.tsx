'use client'

import React from 'react'
import Link from 'next/link'
import { Terminal, GitBranch, Workflow } from 'lucide-react'

const Page = () => {
  const items = [
    { name: 'next js', path: './screen/next', icon: <Terminal className="text-green-400 w-8 h-8" /> },
    { name: 'git', path: './screen/git', icon: <GitBranch className="text-pink-400 w-8 h-8" /> },
    { name: 'n8n', path: './screen/n8n', icon: <Workflow className="text-yellow-400 w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center p-6">
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Link href={item.path} key={index}>
              <div className="cursor-pointer bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 text-center text-lg font-semibold flex flex-col items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
