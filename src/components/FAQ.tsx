import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How much do you charge for your service?",
    answer:
      "Our services are tailored to meet the specific needs of your videos. Feel free to email us at jayrealestate98@gmail.com or send us a message on facebook or instagram",
  },
  {
    question: "How long is the turn around time for each videos?",
    answer:
      "We typically deliver the initial video (prior to revisions) within 24 hours. However, due to the current busy season, please allow 12 to 48 hours for delivery — though in most cases, we still manage to send it within 24 hours.",
  },
  {
    question: "How much do you charge for revision?",
    answer:
      "For the first revision we do not charge for it. For succeeding revisions, the cost will depend on the scope of the revision.",
  },
  {
    question: "Can you cater multiple videos at a time?",
    answer: "Yes, we definitely can!",
  },
  {
    question: "What is the mode of payment used?",
    answer: "For our transactions we use PayPal.",
  },
  {
    question: "When do I make payments?",
    answer:
      "We follow a weekly invoicing policy. For new clients, we require payment upfront for the first order. After the initial order, weekly invoicing will apply.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-24 bg-stone-950 text-white font-inter overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-4xl text-center animate-fade-in">
        {/* Header */}
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Frequently{" "}
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
            Asked Questions
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Here are some of the common questions we receive. Still have more?
          Don't hesitate to reach out!
        </p>

        {/* ShadCN Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full text-left text-white space-y-2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base md:text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-white/80 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
