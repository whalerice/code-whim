"use client"

import { DocsCodeSample } from "@/components/docs-code-sample"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@whalerice/ui/components/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

const ALERT_DEMO_SOURCE = `import { CheckCircle2Icon, InfoIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@whalerice/ui/components/alert"

export function AlertHeroDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to
          your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We've added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
    </div>
  )
}
`

export function AlertHeroDemo() {
  return (
    <div className="flex max-w-xl flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to
          your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function AlertDocsSample() {
  return (
    <DocsCodeSample
      title="사용 예시"
      description={
        <>
          shadcn Alert 문서 상단과 같은 두 가지 알림입니다. 코드는{" "}
          <code className="rounded-md bg-muted px-1 py-0.5 font-mono text-xs">
            @whalerice/ui/components/alert
          </code>
          를 사용합니다.
        </>
      }
      source={ALERT_DEMO_SOURCE}
      preview={<AlertHeroDemo />}
    />
  )
}
