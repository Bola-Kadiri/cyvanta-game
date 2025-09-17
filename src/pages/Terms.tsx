import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertCircle, CreditCard, Truck } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Use of Services",
      content: [
        "You must be at least 18 years old to make purchases or 13+ with parental consent",
        "You agree to provide accurate and complete information when placing orders",
        "You are responsible for maintaining the confidentiality of your account information",
        "You may not use our services for any illegal or unauthorized purposes",
        "We reserve the right to refuse service to anyone for any reason at any time"
      ]
    },
    {
      icon: CreditCard,
      title: "Orders and Payments",
      content: [
        "All prices are subject to change without notice until order confirmation",
        "Payment must be completed before order processing and shipment",
        "We accept various payment methods as displayed during checkout",
        "All transactions are processed in Nigerian Naira (NGN) unless otherwise specified",
        "Order confirmation does not guarantee product availability"
      ]
    },
    {
      icon: Truck,
      title: "Shipping and Returns",
      content: [
        "Delivery times are estimates and may vary based on location and product availability",
        "Risk of loss and title for products pass to you upon delivery",
        "Returns must be initiated within 30 days of delivery",
        "Products must be in original condition with all packaging and accessories",
        "Return shipping costs may be borne by the customer unless the item is defective"
      ]
    },
    {
      icon: AlertCircle,
      title: "Warranties and Disclaimers",
      content: [
        "Products come with manufacturer warranties as specified in product descriptions",
        "We disclaim all warranties beyond those provided by manufacturers",
        "Gaming performance may vary based on individual system configurations",
        "We are not responsible for compatibility issues with existing equipment",
        "Technical specifications may change based on manufacturer updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-primary mr-4" />
            <h1 
              className="text-4xl md:text-6xl font-bold text-glow"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              Terms & Conditions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using our services or making any purchases.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="card-gaming animate-slide-in">
            <CardContent className="p-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Welcome to GameZone Elite. These Terms and Conditions ("Terms") govern your use of our 
                website, products, and services. By accessing our website or making a purchase, you 
                agree to be bound by these Terms. If you do not agree with any part of these terms, 
                please do not use our services.
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Last updated:</strong> September 15, 2025
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <Card 
              key={section.title} 
              className="card-gaming animate-slide-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-glow-secondary">
                  <section.icon className="h-6 w-6 text-primary mr-3" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Limitation of Liability */}
          <Card className="card-gaming animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-glow-secondary">
                <AlertCircle className="h-6 w-6 text-primary mr-3" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, GameZone Elite shall not be liable for:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Indirect, incidental, special, or consequential damages</li>
                <li>• Loss of profits, data, or other intangible losses</li>
                <li>• Damages resulting from unauthorized access to your account</li>
                <li>• Interruptions or delays in service availability</li>
                <li>• Third-party content or services linked from our website</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="card-gaming animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-xl text-glow-secondary">
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                All content on this website, including but not limited to text, graphics, logos, 
                images, and software, is the property of GameZone Elite or its licensors and is 
                protected by copyright and other intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                You may not reproduce, distribute, modify, or create derivative works from any 
                content without our express written permission.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="card-gaming animate-slide-in" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle className="text-xl text-glow-secondary">
                Governing Law and Disputes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Nigeria. 
                Any disputes arising from these Terms or your use of our services shall be subject to 
                the exclusive jurisdiction of the courts of Lagos State, Nigeria.
              </p>
              <p className="text-muted-foreground">
                We encourage you to contact us first to resolve any disputes amicably before 
                pursuing legal action.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-gaming bg-primary-gradient animate-slide-in" style={{ animationDelay: '0.8s' }}>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
              <p className="text-white/90 mb-6">
                If you have any questions about these Terms and Conditions, please contact us. 
                We're here to help clarify any concerns you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/2349151722634" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-medium"
                >
                  WhatsApp Support
                </a>
                <a 
                  href="mailto:legal@gamezoneelite.com"
                  className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-medium"
                >
                  Email Legal Team
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="card-gaming animate-slide-in" style={{ animationDelay: '0.9s' }}>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                <strong>Changes to Terms:</strong> We reserve the right to modify these Terms and 
                Conditions at any time. Changes will be effective immediately upon posting on this 
                page. Your continued use of our services after any changes constitutes acceptance 
                of the new Terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;