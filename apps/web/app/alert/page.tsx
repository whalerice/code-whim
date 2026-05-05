import type { ReactNode } from "react"
import { AlertDocsSample } from "./alert-docs-sample"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@whalerice/ui/components/alert"
import { Button } from "@whalerice/ui/components/button"
import { cn } from "@whalerice/ui/lib/utils"
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
} from "lucide-react"

function ExampleBlock({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-base font-medium">{title}</h2>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
      <div className="max-w-xl">{children}</div>
    </section>
  )
}

export default function AlertSamplesPage() {
  return (
    <div className="flex min-h-svh flex-col gap-12 p-6 pb-20">
      <header className="flex max-w-2xl flex-col gap-2">
        <h1 className="font-heading text-xl font-medium">Alert</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Displays a callout for user attention. Examples follow the{" "}
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="https://ui.shadcn.com/docs/components/radix/alert"
            rel="noreferrer"
            target="_blank"
          >
            shadcn/ui Alert
          </a>{" "}
          patterns.
        </p>
      </header>

      <div className="flex max-w-2xl flex-col gap-14">
        <AlertDocsSample />

        <ExampleBlock
          title="Basic"
          description="A basic alert with an icon, title and description."
        >
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Account updated successfully</AlertTitle>
            <AlertDescription>
              Your profile information has been saved. Changes will be
              reflected immediately.
            </AlertDescription>
          </Alert>
        </ExampleBlock>

        <ExampleBlock
          title="Destructive"
          description='Use variant="destructive" for error or critical messages.'
        >
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>
              Your payment could not be processed. Please check your payment
              method and try again.
            </AlertDescription>
          </Alert>
        </ExampleBlock>

        <ExampleBlock
          title="Action"
          description="Use AlertAction for a control such as a button in the top-right corner."
        >
          <Alert>
            <AlertTriangleIcon />
            <AlertTitle>Dark mode is now available</AlertTitle>
            <AlertDescription>
              Enable it under your profile settings to get started.
            </AlertDescription>
            <AlertAction>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </AlertAction>
          </Alert>
        </ExampleBlock>

        <ExampleBlock
          title="Custom colors"
          description={
            <>
              Optional utility classes on{" "}
              <code className="rounded-md bg-muted px-1 py-0.5 font-mono text-xs">
                Alert
              </code>{" "}
              for emphasis (see shadcn docs).
            </>
          }
        >
          <Alert className="border-amber-500/20 bg-amber-50 text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-50">
            <AlertTriangleIcon />
            <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
            <AlertDescription className="text-amber-900/90 dark:text-amber-100/90">
              Renew now to avoid service interruption or upgrade to a paid plan
              to continue using the service.
            </AlertDescription>
          </Alert>
        </ExampleBlock>

        <ExampleBlock
          title="RTL"
          description="Wrap content in a container with dir=&quot;rtl&quot; for right-to-left layouts."
        >
          <div className="max-w-xl" dir="rtl">
            <div className="flex flex-col gap-4">
              <Alert>
                <CheckCircle2Icon />
                <AlertTitle>تم الدفع بنجاح</AlertTitle>
                <AlertDescription>
                  تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى
                  بريدك الإلكتروني.
                </AlertDescription>
              </Alert>
              <Alert>
                <InfoIcon />
                <AlertTitle>ميزة جديدة متاحة</AlertTitle>
                <AlertDescription>
                  أضفنا دعم الوضع الداكن. يمكنك تفعيله في إعدادات حسابك.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </ExampleBlock>
      </div>
    </div>
  )
}
