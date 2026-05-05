import type { ReactNode } from "react"
import { AccordionDocsSample } from "./accordion-docs-sample"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@whalerice/ui/components/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@whalerice/ui/components/card"
import { cn } from "@whalerice/ui/lib/utils"

function ExampleBlock({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-base font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="max-w-sm">{children}</div>
    </section>
  )
}

export default function AccordionSamplesPage() {
  return (
    <div className="flex min-h-svh flex-col gap-12 p-6 pb-20">
      <header className="flex max-w-2xl flex-col gap-2">
        <h1 className="font-heading text-xl font-medium">Accordion</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A vertically stacked set of interactive headings that each reveal a
          section of content. Patterns mirror the{" "}
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="https://ui.shadcn.com/docs/components/radix/accordion"
            rel="noreferrer"
            target="_blank"
          >
            shadcn/ui Accordion
          </a>{" "}
          examples.
        </p>
      </header>

      <div className="flex max-w-2xl flex-col gap-14">
        <AccordionDocsSample />

        <ExampleBlock
          title="Basic"
          description="One item open at a time. The first item is open by default."
        >
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                Click on &apos;Forgot Password&apos; on the login page, enter
                your email, and we&apos;ll send you a link. The link expires in
                24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I change my subscription plan?</AccordionTrigger>
              <AccordionContent>
                Yes — open Billing in your account and choose a new plan. Changes
                apply at the start of the next cycle unless you upgrade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept major cards, Apple Pay, Google Pay, and ACH where
                available.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleBlock>

        <ExampleBlock
          title="Multiple"
          description='Use type="multiple" to allow several items open at once.'
        >
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Notification settings</AccordionTrigger>
              <AccordionContent>
                Manage email alerts and push notifications from the Notifications
                tab in Settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Privacy &amp; security</AccordionTrigger>
              <AccordionContent>
                Enable two-factor authentication and review connected apps under
                Security.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Billing &amp; subscription</AccordionTrigger>
              <AccordionContent>
                Update your payment method or download invoices from Billing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleBlock>

        <ExampleBlock
          title="Disabled"
          description="Use the disabled prop on AccordionItem to disable individual items."
        >
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I access my account history?</AccordionTrigger>
              <AccordionContent>
                Yes — your full activity log is available under Account → History.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" disabled>
              <AccordionTrigger>Premium feature information</AccordionTrigger>
              <AccordionContent>
                This section is disabled in the demo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I update my email address?</AccordionTrigger>
              <AccordionContent>
                Go to Profile → Contact and verify the new address with the code we
                send you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleBlock>

        <ExampleBlock
          title="Borders"
          description="Add border to the Accordion and border-b on each item for a divided list."
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="border">
            <AccordionItem value="item-1" className="border-b px-4 last:border-b-0">
              <AccordionTrigger>How does billing work?</AccordionTrigger>
              <AccordionContent>
                Plans renew automatically each billing period. You can cancel
                anytime; access continues through the end of the paid period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b px-4 last:border-b-0">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                Data is encrypted in transit and at rest. See our security page
                for certifications and subprocessors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b px-4 last:border-b-0">
              <AccordionTrigger>What integrations do you support?</AccordionTrigger>
              <AccordionContent>
                We offer native integrations with popular CRM, analytics, and
                communication tools. Custom webhooks are available on Pro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ExampleBlock>

        <ExampleBlock
          title="Card"
          description="Wrap the accordion in a Card for a contained FAQ block."
        >
          <Card className="max-w-sm">
            <CardHeader className="border-b">
              <CardTitle>Subscription &amp; billing</CardTitle>
              <CardDescription>
                Common questions about your account, plans, payments, and
                cancellations.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What subscription plans do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    Starter, Professional, and Enterprise tiers with increasing
                    limits, API access, and support options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does billing work?</AccordionTrigger>
                  <AccordionContent>
                    You are charged at the start of each cycle. Usage overages may
                    appear on the next invoice.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
                  <AccordionContent>
                    Cancel from Billing → Subscription. You keep access until the
                    current period ends.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </ExampleBlock>

        <ExampleBlock
          title="RTL"
          description="Set dir=&quot;rtl&quot; on a container for right-to-left layout."
        >
          <div dir="rtl">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>كيف أعيد تعيين كلمة المرور؟</AccordionTrigger>
                <AccordionContent>
                  اختر &quot;نسيت كلمة المرور&quot; في صفحة تسجيل الدخول، أدخل
                  بريدك الإلكتروني، وسنرسل لك رابطًا. صلاحية الرابط 24 ساعة.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>هل يمكنني تغيير الاشتراك؟</AccordionTrigger>
                <AccordionContent>
                  نعم — من إعدادات الفوترة يمكنك اختيار خطة أخرى.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>ما طرق الدفع المتاحة؟</AccordionTrigger>
                <AccordionContent>
                  البطاقات الشائعة والمحافظ الرقمية حيثما توفرت.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ExampleBlock>
      </div>
    </div>
  )
}
