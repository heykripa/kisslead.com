import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const QUESTIONS = [
  "What's included in the monthly package?",
  "How long does a project usually take?",
  "Do you offer ongoing support after launch?",
  "Can I hire you for just a logo or one-off design?",
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl font-normal mb-12">FAQ.</h2>
      <Accordion type="single" collapsible className="w-full">
        {QUESTIONS.map((question, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-xl text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg">
              We tailor our services to your needs. Reach out to discuss specific details about this topic.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
