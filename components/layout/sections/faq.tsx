import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services do we offer?",
    answer: "Our Services include: Website Development, Social Media Marketing, Search Engine Optimization, Content Writing, Graphics Design, Video Editing, Content Marketing through Email campaign, & Lead Generation.",
    value: "item-1",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "After you contact with us we get knowledge about your business and share with you the unique strategy that can help you understand your business’s digital needs.",
    value: "item-2",
  },
  {
    question:
      "Do you work with businesses of all sizes?",
    answer:
      "We usually work with start-ups and enterprises. But definitely we work with all businesses with different approach and different solutions.",
    value: "item-3",
  },
  {
    question: "How do I get started with your services?",
    answer: "Make a call or just start a chat on whatsapp to immediately get started with our services. You can email us also on mypromoffical@gmail.com. Whatsapp Us: wa.me/+916297654712 Call Us: +91 629765412",
    value: "item-4",
  },
  {
    question:
      "What is digital marketing, and why is it important?",
    answer: "In today’s world if your business is not online, your business does not even exist. Here comes the importance of digital marketig/ online marketing. It’s the most important part in Business today if you want to grow you business fast with clear visibility of the marketing result.",
    value: "item-5",
  },
  {
    question:
      "How long does it take to see results from digital marketing?",
    answer: "It depends on business to business. Some may get result from day 1 and some may take years to build their right customer base. Consult with us to know your potential.",
    value: "item-6",
  },
  {
    question:
      "Do you offer SEO services?",
    answer: "Yes, we do.",
    value: "item-7",
  },
  {
    question:
      "Can you manage my social media accounts?",
    answer: "Yes we can.",
    value: "item-8",
  },
  {
    question:
      "What types of websites do you design?",
    answer: "We design static, dynamic and e-commerce websites.",
    value: "item-9",
  },
  {
    question:
      "How long does it take to build a website?",
    answer: "It depends; if it’s a small business website then we deliver it within 30 days. And if it’s a ecommerce site of site with large data bases it takes time upto 3 months after collecting each and every website materials & informations from client.",
    value: "item-10",
  },
  {
    question:
      "Will my website be mobile-friendly?",
    answer: "We ensure that your site performs flawlessly across all devices and screen sizes, providing a seamless experience for users on desktop, tablet, and mobile.",
    value: "item-11",
  },
  {
    question:
      "Can you redesign my existing website?",
    answer: "Of course we can. Just contact us now to get the best idea about it.",
    value: "item-12",
  },
  {
    question:
      "Do you provide website maintenance services?",
    answer: "Yes, we do.",
    value: "item-13",
  },
  {
    question:
      "How much do your services cost?",
    answer: "Kindly contact us to know about the pricings. Email: mypromofficial@gmail.com Or whatsapp: +916297654712",
    value: "item-14",
  },
  {
    question:
      "What is your payment process?",
    answer: "For all the payment related enquiries please contact us. Email: mypromofficial@gmail.com Or whatsapp: +916297654712",
    value: "item-15",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[900px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left text-xl">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
