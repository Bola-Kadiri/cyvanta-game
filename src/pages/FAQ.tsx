import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What does Cyvanta Technologies do?",
      answer: "Cyvanta Technologies is a tech and electronics brand that offers sales, installation, and support services for gaming setups, smart homes, CCTV systems, and solar solutions."
    },
    {
      question: "Where is Cyvanta located?",
      answer: "We’re based in Ilorin, Kwara State, Nigeria."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we deliver nationwide. Delivery fees depend on the location and order size."
    },
    {
      question: "Do you offer product warranty?",
      answer: "Yes, all products come with a manufacturer or store warranty depending on the brand."
    },
    {
      question: "Can I pre-order unavailable products?",
      answer: "Yes, pre-order is available for high-demand items. Delivery timelines will be confirmed upon order."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes. We provide professional installation for CCTV, smart home devices, gaming setups, and solar systems."
    },
    {
      question: "How can I contact Cyvanta Technologies?",
      answer: "Via email at info@cyvanta.com or through our social media handles @cyvantatech"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-primary mr-4" />
            <h1 
              className="text-4xl md:text-6xl font-bold text-glow"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              FAQ
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to commonly asked questions about our gaming products and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Card className="card-gaming mb-12 animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl text-glow-secondary">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border/30 rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="card-gaming bg-primary-gradient animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our gaming experts are here to help! 
                Get instant support and personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <a href="https://wa.me/2349036957619" target="_blank" rel="noopener noreferrer">
                    WhatsApp Support
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <a href="/contact">
                    Contact Form
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;