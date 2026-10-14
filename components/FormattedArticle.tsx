"use client"

import React from "react"

interface FormattedArticleProps {
  content: string
}

export default function FormattedArticle({ content }: FormattedArticleProps) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []

  let inList = false
  let listItems: React.ReactNode[] = []

  let inTable = false
  let tableRows: string[][] = []

  const flushList = (key: string) => {
    if (inList) {
      elements.push(
        <ul key={key} className="space-y-3 mb-6 pl-5 list-disc text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {listItems}
        </ul>
      )
      inList = false
      listItems = []
    }
  }

  const flushTable = (key: string) => {
    if (inTable && tableRows.length > 0) {
      // First row is header, second row is delimiter (| --- | --- |)
      const headerRow = tableRows[0]
      const bodyRows = tableRows.slice(2) // Skip delimiter

      elements.push(
        <div key={key} className="my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
          <table className="w-full text-left text-sm sm:text-base border-collapse">
            <thead className="bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold">
              <tr>
                {headerRow.map((cell, idx) => (
                  <th key={idx} className="p-3.5 sm:p-4 border-b border-gray-200 dark:border-white/10 whitespace-nowrap">
                    {formatInline(cell.trim())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-white/5 bg-white dark:bg-[#0f0f0f] text-gray-700 dark:text-gray-300">
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 sm:p-4 leading-normal">
                      {formatInline(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      inTable = false
      tableRows = []
    }
  }

  // Format bold (**bold**), code (`code`), and currency ($15k)
  const formatInline = (text: string): React.ReactNode => {
    // Split by ** for bold
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g)
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return <code key={i} className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 font-mono text-xs text-teal-600 dark:text-teal-400">{part.slice(1, -1)}</code>
      }
      return part
    })
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i]
    const trimmed = rawLine.trim()

    // Handle Tables
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList(`list-before-table-${i}`)
      inTable = true
      const cells = trimmed
        .split("|")
        .slice(1, -1) // remove leading and trailing empty items
      tableRows.push(cells)
      continue
    } else if (inTable) {
      flushTable(`table-${i}`)
    }

    // Handle Unordered Lists
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      inList = true
      listItems.push(
        <li key={`li-${i}`}>
          {formatInline(trimmed.slice(2))}
        </li>
      )
      continue
    } else if (inList) {
      flushList(`list-${i}`)
    }

    // Blank lines
    if (!trimmed) {
      continue
    }

    // Headings
    if (trimmed.startsWith("# ")) {
      elements.push(
        <h1 key={`h1-${i}`} className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-8 mb-6 leading-tight">
          {formatInline(trimmed.slice(2))}
        </h1>
      )
      continue
    }

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${i}`} className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-10 mb-4 pb-2 border-b border-gray-200 dark:border-white/10 leading-snug">
          {formatInline(trimmed.slice(3))}
        </h2>
      )
      continue
    }

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3 leading-snug">
          {formatInline(trimmed.slice(4))}
        </h3>
      )
      continue
    }

    if (trimmed.startsWith("#### ")) {
      elements.push(
        <h4 key={`h4-${i}`} className="text-base sm:text-xl font-bold text-[#0d9488] mt-6 mb-2">
          {formatInline(trimmed.slice(5))}
        </h4>
      )
      continue
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      elements.push(
        <blockquote key={`quote-${i}`} className="border-l-4 border-[#0d9488] pl-4 sm:pl-6 italic text-gray-700 dark:text-gray-300 text-base sm:text-lg my-6 bg-gray-50/70 dark:bg-white/[0.02] py-3 rounded-r-lg">
          {formatInline(trimmed.slice(2))}
        </blockquote>
      )
      continue
    }

    // Divider
    if (trimmed === "---") {
      elements.push(
        <hr key={`hr-${i}`} className="my-10 border-gray-200 dark:border-white/10" />
      )
      continue
    }

    // Standard Paragraph
    elements.push(
      <p key={`p-${i}`} className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-8 mb-5">
        {formatInline(trimmed)}
      </p>
    )
  }

  // Final flush
  flushList("list-end")
  flushTable("table-end")

  return <div className="formatted-article-container">{elements}</div>
}

