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
      question: "What types of gaming products do you offer?",
      answer: "We offer a comprehensive range of premium gaming products including headsets, keyboards, mice, monitors, chairs, webcams, and various gaming accessories. All our products are carefully curated from top gaming brands to ensure the highest quality and performance."
    },
    {
      question: "Do you provide warranty on your products?",
      answer: "Yes, all our gaming products come with manufacturer warranty. The warranty period varies by product and brand, typically ranging from 1-3 years. We also provide additional warranty protection services for premium purchases."
    },
    {
      question: "How fast is your delivery?",
      answer: "We offer fast and secure delivery across Nigeria. Standard delivery takes 2-5 business days within Lagos and 3-7 business days for other states. Express delivery options are available for urgent orders."
    },
    {
      question: "Can I return a product if I'm not satisfied?",
      answer: "Yes, we have a 30-day return policy for unused products in original packaging. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange."
    },
    {
      question: "Do you offer technical support?",
      answer: "Absolutely! Our team includes gaming experts who can provide technical support, setup assistance, and product recommendations. You can reach us via WhatsApp, email, or phone for immediate assistance."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, we only sell 100% authentic products directly from authorized distributors and manufacturers. All products come with original packaging, documentation, and warranty cards."
    },
    {
      question: "Do you offer bulk discounts for gaming cafes or organizations?",
      answer: "Yes, we offer special pricing for bulk orders, gaming cafes, esports teams, and educational institutions. Contact our admin for custom quotes and bulk purchase arrangements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, online payments, and cash on delivery (for local orders). Contact us for specific payment arrangements."
    },
    {
      question: "Can you help me build a complete gaming setup?",
      answer: "Definitely! Our gaming experts can help you design and build a complete gaming setup based on your budget, preferences, and performance requirements. We offer consultation services and custom gaming builds."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is processed, you'll receive tracking information via WhatsApp or email. You can also contact our customer service team for real-time order updates."
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
                  <a href="https://wa.me/2349151722634" target="_blank" rel="noopener noreferrer">
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