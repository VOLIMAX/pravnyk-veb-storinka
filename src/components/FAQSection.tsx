import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "В якій області права ви спеціалізуєтесь?",
      answer: "Я спеціалізуюся в цивільному, сімейному, трудовому та адміністративному праві. Маю багаторічний досвід роботи в цих сферах та постійно підвищую свою кваліфікацію."
    },
    {
      question: "Скільки часу зазвичай потрібно для вирішення справи?",
      answer: "Тривалість розгляду справи залежить від її складності та специфіки. Прості питання можуть бути вирішені за кілька днів, тоді як складні справи можуть тривати кілька місяців. Я завжди інформую клієнтів про очікувані терміни."
    },
    {
      question: "Чи можна отримати безкоштовну першу консультацію?",
      answer: "Так, я надаю безкоштовну першу консультацію тривалістю до 30 хвилин. Це дозволяє обговорити основні аспекти вашої справи та визначити подальші кроки."
    },
    {
      question: "Які гарантії надаєте вашим клієнтам?",
      answer: "Я гарантую професійний підхід, конфіденційність, своєчасне виконання взятих зобов'язань та постійний зв'язок протягом всього процесу роботи над справою."
    },
    {
      question: "Які документи мені потрібно надати для початку роботи над моєю справою?",
      answer: "Перелік необхідних документів залежить від типу справи. Зазвичай потрібні документи, що підтверджують особу, та всі матеріали, пов'язані з вашою справою. Детальний список я надам після першої консультації."
    },
    {
      question: "Чи надаєте ви представництво в суді?",
      answer: "Так, я надаю повний спектр послуг, включаючи представництво інтересів клієнтів у всіх судових інстанціях України. Маю досвід ведення справ різної складності."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-border flex-1 max-w-32"></div>
            <div className="mx-6 w-16 h-16 rounded-full border-2 border-border bg-background flex items-center justify-center">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
            <div className="h-px bg-border flex-1 max-w-32"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
            Питання / Відповіді
          </h2>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Legal consultation"
                className="w-full rounded-lg shadow-lg object-cover h-96"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="order-1 lg:order-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;