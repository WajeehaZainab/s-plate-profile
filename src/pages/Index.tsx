
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Award, Users, Clock, Mail, Phone, MapPin, Star, FileCheck } from 'lucide-react';

const Index = () => {
  const dishes = [
    {
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Seared Duck Breast",
      description: "Pan-seared duck with cherry reduction and roasted vegetables",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Chocolate Soufflé",
      description: "Light and airy chocolate soufflé with vanilla bean ice cream",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const skills = [
    "French Cuisine", "Italian Cuisine", "Pastry Arts", "Menu Development",
    "Kitchen Management", "Food Presentation", "Wine Pairing", "Molecular Gastronomy"
  ];

  const experience = [
    {
      position: "Executive Chef",
      restaurant: "Le Bernardin",
      period: "2020 - Present",
      description: "Leading a team of 15 chefs, developing seasonal menus, and maintaining Michelin standards"
    },
    {
      position: "Sous Chef",
      restaurant: "The French Laundry",
      period: "2018 - 2020",
      description: "Assisted in kitchen operations, menu planning, and staff training for fine dining service"
    },
    {
      position: "Chef de Partie",
      restaurant: "Daniel",
      period: "2016 - 2018",
      description: "Specialized in sauce station, maintaining quality standards and efficiency during service"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <ChefHat className="w-20 h-20 mx-auto mb-6 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-slide-up">
            Chef <span className="text-amber-600">Alexandre</span> Dubois
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Crafting culinary masterpieces with passion, precision, and creativity for over 15 years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of culinary experience in Michelin-starred restaurants, I bring a unique blend of 
                classical French techniques and modern innovation to every dish I create. My journey began in Lyon, 
                France, where I trained under renowned chefs and developed my passion for exceptional cuisine.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I believe that great food tells a story, evokes emotions, and brings people together. Every plate 
                I prepare is a canvas where technique meets artistry, and tradition embraces innovation.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Team Members Trained</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=750&fit=crop&crop=center"
                  alt="Chef Alexandre in the kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Professional Certifications</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Recognized credentials and certifications that validate my expertise and commitment 
              to maintaining the highest standards in food safety and culinary excellence.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="max-w-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck className="w-8 h-8 text-amber-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Person-in-Charge Advanced Certification</h3>
                    <p className="text-amber-600 font-semibold">TSI Quality Services</p>
                  </div>
                </div>
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/e1e3c53e-bbb2-440e-95a1-67adc9cfd865.png"
                    alt="Person-in-Charge Advanced Certification from TSI Quality Services"
                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Certification:</span> PIC Advanced
                  </div>
                  <div>
                    <span className="font-semibold">Valid Until:</span> October 2029
                  </div>
                  <div>
                    <span className="font-semibold">Accredited By:</span> EIAC & TSI
                  </div>
                  <div>
                    <span className="font-semibold">Scheme Owner:</span> Dubai Municipality
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800 italic">
                    "Taking Food Safety Qualifications To The Next Level" - Specialized training in 
                    advanced food safety management and kitchen leadership.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Signature Dishes</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Each dish represents my commitment to excellence, showcasing the finest ingredients 
              and innovative techniques that define my culinary philosophy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{dish.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{dish.description}</p>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Culinary Expertise</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A comprehensive skill set developed through years of dedication and continuous learning 
              in the world's finest kitchens.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-amber-200 text-amber-700 hover:bg-amber-50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Professional Experience</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              My culinary journey through prestigious establishments has shaped my expertise 
              and refined my approach to exceptional cuisine.
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div className="md:col-span-1">
                    <Badge className="bg-amber-100 text-amber-800 mb-2">{job.period}</Badge>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.position}</h3>
                    <h4 className="text-xl text-amber-600 font-semibold mb-3">{job.restaurant}</h4>
                    <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Extraordinary</h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to elevate your dining experience? I'm available for private events, 
            consulting, and culinary collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90">chef@alexandredubois.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="opacity-90">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="opacity-90">New York City, NY</p>
            </div>
          </div>
          <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 border-white px-8 py-3 text-lg">
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center text-gray-400">
        <p>&copy; 2024 Chef Alexandre Dubois. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
