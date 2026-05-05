"use client"

import { useCallback, useMemo, useState, type ReactNode } from "react"
import { Button } from "@whalerice/ui/components/button"
import { cn } from "@whalerice/ui/lib/utils"
import { CheckIcon, CopyIcon } from "lucide-react"

const KEYWORD =
  /^(import|from|export|function|return|default|const|let|var)$/
const PROP =
  /^(type|collapsible|defaultValue|className|value|variant|role)$/

function highlightLine(line: string): ReactNode[] {
  const out: ReactNode[] = []
  let i = 0
  let k = 0

  const pushText = (text: string, className?: string) => {
    if (!text) return
    out.push(
      <span key={k++} className={className}>
        {text}
      </span>
    )
  }

  while (i < line.length) {
    const ch = line.charAt(i)

    if (/\s/.test(ch)) {
      let j = i + 1
      while (j < line.length && /\s/.test(line.charAt(j))) {
        j++
      }
      pushText(line.slice(i, j))
      i = j
      continue
    }

    if (ch === '"' || ch === "'") {
      const quote = ch
      let j = i + 1
      while (j < line.length && line.charAt(j) !== quote) {
        if (line.charAt(j) === "\\") j++
        j++
      }
      if (j < line.length) j++
      pushText(
        line.slice(i, j),
        "text-teal-700 dark:text-teal-400/90"
      )
      i = j
      continue
    }

    if (ch === "<") {
      const start = i
      let j = i + 1
      if (line.charAt(j) === "/") {
        j++
      }
      while (j < line.length && /[A-Za-z0-9]/.test(line.charAt(j))) {
        j++
      }
      pushText(
        line.slice(start, j),
        "text-blue-600 dark:text-blue-400"
      )
      i = j
      continue
    }

    if (/[A-Za-z_$]/.test(ch)) {
      let j = i + 1
      while (j < line.length && /[A-Za-z0-9_$]/.test(line.charAt(j))) {
        j++
      }
      const word = line.slice(i, j)
      if (KEYWORD.test(word)) {
        pushText(word, "text-rose-600 dark:text-rose-400")
      } else if (PROP.test(word)) {
        pushText(word, "text-violet-600 dark:text-violet-400")
      } else if (/^[A-Z]/.test(word)) {
        pushText(word, "text-blue-600 dark:text-blue-400")
      } else {
        pushText(word)
      }
      i = j
      continue
    }

    pushText(ch)
    i++
  }

  return out
}

function CodeBody({
  lines,
  startLine = 1,
}: {
  lines: readonly string[]
  startLine?: number
}) {
  return (
    <div className="flex min-w-0 gap-0 font-mono text-[13px] leading-6">
      <div
        aria-hidden
        className="sticky left-0 shrink-0 select-none border-r border-border/60 bg-muted/30 py-4 pr-3 pl-4 text-right tabular-nums text-muted-foreground/70"
      >
        {lines.map((_, idx) => (
          <div key={idx}>{startLine + idx}</div>
        ))}
      </div>
      <div className="min-w-0 flex-1 overflow-x-auto py-4 pr-4 pl-4 text-foreground/90">
        {lines.map((line, idx) => (
          <div key={idx} className="whitespace-pre">
            {highlightLine(line)}
          </div>
        ))}
      </div>
    </div>
  )
}

const COLLAPSED_PREVIEW_LINES = 3

export type DocsCodeSampleProps = {
  title: string
  description: ReactNode
  source: string
  preview: ReactNode
  previewClassName?: string
}

export function DocsCodeSample({
  title,
  description,
  source,
  preview,
  previewClassName = "px-6 py-8 md:px-10 md:py-10",
}: DocsCodeSampleProps) {
  const [copied, setCopied] = useState(false)
  const [codeExpanded, setCodeExpanded] = useState(false)

  const allLines = useMemo(
    () => source.replace(/\n$/, "").split("\n"),
    [source]
  )

  const previewLines = allLines.slice(0, COLLAPSED_PREVIEW_LINES)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(source)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [source])

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-base font-medium">{title}</h2>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-xs">
        <div
          className={cn(
            "border-b border-border/80 bg-background",
            previewClassName
          )}
        >
          {preview}
        </div>

        <div className="relative bg-muted/50">
          {codeExpanded ? (
            <>
              <div className="absolute top-3 right-3 z-10">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="size-9 bg-background/80 shadow-xs backdrop-blur-sm"
                  aria-label={copied ? "복사됨" : "코드 복사"}
                  onClick={handleCopy}
                >
                  {copied ? (
                    <CheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <CopyIcon className="size-4" />
                  )}
                </Button>
              </div>
              <div
                className={cn(
                  "max-h-[min(28rem,55vh)] overflow-auto",
                  "pt-14 pb-2"
                )}
              >
                <CodeBody lines={allLines} />
              </div>
              <div className="flex justify-center border-t border-border/60 px-4 py-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                  onClick={() => setCodeExpanded(false)}
                >
                  코드 접기
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-5 p-5">
              <div className="relative rounded-lg border border-border/60 bg-background/60">
                <CodeBody lines={previewLines} startLine={1} />
              </div>
              <div className="flex justify-center">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="min-w-32 shadow-xs"
                  onClick={() => setCodeExpanded(true)}
                >
                  코드 보기
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
