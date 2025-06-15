
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!subject.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both subject and message fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Create mailto link with subject and body
      const mailtoLink = `mailto:hasankhuder67@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your default email client should open with the message pre-filled.",
      });
      
      // Clear form after successful send
      setSubject('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
          <p className="text-xl opacity-90">Let's discuss your culinary needs and opportunities</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-amber-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base font-medium text-gray-700">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px] text-base resize-none"
                />
              </div>
              
              <Button
                onClick={handleSend}
                disabled={isLoading}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-base font-semibold"
                size="lg"
              >
                {isLoading ? (
                  "Opening email client..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
              
              <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                <p>You can also reach me directly at:</p>
                <p className="font-medium text-amber-600">hasankhuder67@gmail.com</p>
                <p className="font-medium text-amber-600">+971 56 628 4150</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
