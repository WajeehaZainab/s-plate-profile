
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Award, Users, Clock, Mail, Phone, MapPin, Star, FileCheck, GraduationCap, Download, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const cuisines = [
    {
      name: "Arabic & Middle Eastern",
      description: "Authentic traditional dishes with modern presentation, featuring mezze, hummus variations, and classic Arabic specialties",
      image: "/lovable-uploads/40e42800-b4b7-4a50-bc02-f90391992e2d.png",
      link: "/gallery#arabic-cuisine"
    },
    {
      name: "International Cuisine",
      description: "Contemporary dishes from around the world, expertly prepared with premium ingredients and innovative techniques",
      image: "/lovable-uploads/bd6cfe34-c7c6-4f52-ad2a-eef64f409195.png",
      link: "/gallery#international-cuisine"
    },
    {
      name: "Gourmet Appetizers & Desserts",
      description: "Sophisticated small plates and elegant desserts with artistic presentation and exceptional flavor profiles",
      image: "/lovable-uploads/2d67b5fc-ab78-4a46-a0ed-88afc25c3811.png",
      link: "/gallery#appetizers-desserts"
    }
  ];

  const skills = ["Arabic Cuisine", "International Cuisine", "Lebanese Cuisine", "Syrian Cuisine", "Menu Development", "Kitchen Management", "Staff Training", "Food Safety", "Buffet Operations", "Cold Kitchen", "Hot Kitchen", "Food Presentation", "Recipe Development", "Hygiene Standards", "Team Leadership"];
  
  const experience = [
    {
      position: "Oriental Chef",
      restaurant: "Address Creek Harbour Hotel - Emaar",
      location: "Dubai",
      period: "June 2024 - Present",
      description: "Managing 7 employees in Arabic kitchen and 3 employees breakfast team. Following up on cleanliness, setting shift schedules and distributing tasks in coordination with chef de cuisine. Responsible for kitchen and refrigerator management, production and expiration date monitoring. Assisting chef de cuisine in developing menu for Alacarte and buffet operations."
    },
    {
      position: "Junior Sous Chef",
      restaurant: "Bab al Shams Hotel",
      location: "Dubai",
      period: "September 2022 - June 2024",
      description: "Responsible for 5 employees in cold Arabic kitchen, training them on dish preparation. Following up on all recipes and presentation methods for Ala Cart and buffet. Enforcing strict health and hygiene standards and helping kitchen chefs to update the menu."
    },
    {
      position: "Junior Sous Chef",
      restaurant: "Yasmine Palace Restaurant",
      location: "Doha, Qatar",
      period: "February 2021 - July 2022",
      description: "Responsible for Arabic and international cooking, managing staff attendance, and coordinating orders. Following up on cleanliness, hygiene, and everything related to flavors and dish decoration standards."
    },
    {
      position: "Senior Chef de Partie",
      restaurant: "Sheraton Hotel",
      location: "Doha, Qatar",
      period: "March 2019 - December 2020",
      description: "Working under supervision of head chef, organizing menus and supervising buffet operations. Organizing work schedules for employees and maintaining hygiene standards."
    },
    {
      position: "Chef de Partie",
      restaurant: "Le Royal Hotel",
      location: "Beirut, Lebanon",
      period: "February 2017 - February 2019",
      description: "Overseeing food preparation and ensuring high standards of quality and consistency. Working under pressure in Arabic and International cuisine."
    },
    {
      position: "Chef de Partie",
      restaurant: "Movenpick Hotel",
      location: "Beirut, Lebanon",
      period: "March 2014 - January 2017",
      description: "Worked in Arabic kitchen for one year and international hot kitchen for two years, gaining comprehensive experience in both cuisines."
    },
    {
      position: "Demi Chef de Partie",
      restaurant: "Qube Restaurant",
      location: "Beirut, Lebanon",
      period: "April 2012 - 2014",
      description: "Worked in oriental kitchen as chef for daily dishes, specializing in all kinds of Lebanese and Syrian cuisine."
    },
    {
      position: "Demi Chef de Partie",
      restaurant: "Intercontinental Group Hotel, Riyadh Conference Palace",
      location: "Riyadh, Saudi Arabia",
      period: "February 2010 - February 2012",
      description: "Worked in Arabic cold kitchen for one year preparing Arabic and local food, then international hot kitchen preparing sauces and main dishes for one year."
    },
    {
      position: "Commis 1",
      restaurant: "Ramsis Hotel",
      location: "Aleppo, Syria",
      period: "May 2008 - January 2010",
      description: "Helper in Arabic and international cold kitchen, gaining foundational experience in professional kitchen operations."
    },
    {
      position: "Commis 2",
      restaurant: "Meridian Hotel",
      location: "Aleppo, Syria",
      period: "June 2006 - April 2008",
      description: "Arabic hot kitchen operations, washing and sterilizing vegetables and fruits, and organizing refrigerator storage."
    }
  ];

  const certificates = [
    {
      id: "pic-advanced",
      name: "Person-in-Charge Advanced",
      issuer: "TSI Quality Services",
      image: "/lovable-uploads/e1e3c53e-bbb2-440e-95a1-67adc9cfd865.png",
      validUntil: "October 2029",
      accreditedBy: "EIAC & TSI"
    },
    {
      id: "food-safety",
      name: "Basic Food Safety",
      issuer: "Emaar Hospitality",
      image: "/lovable-uploads/4164f055-060a-4dda-8a26-c6f302d65971.png",
      completed: "June 27, 2024",
      issuedBy: "Emaar Hospitality"
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Hasan_Alkhoder_CV.pdf';
    link.download = 'Hasan_Alkhoder_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCertificate = (certificateImage: string, certificateName: string) => {
    const link = document.createElement('a');
    link.href = certificateImage;
    link.download = `${certificateName.replace(/\s+/g, '_')}_Certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">Hasan Alkhoder</span>
            </div>
            <div className="flex gap-3">
              <Link to="/gallery">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  View Gallery
                </Button>
              </Link>
              <Button 
                onClick={handleDownloadCV}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {certificates.find(cert => cert.id === selectedCertificate)?.name}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCertificate(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4">
              <img
                src={certificates.find(cert => cert.id === selectedCertificate)?.image}
                alt="Certificate"
                className="w-full h-auto"
              />
            </div>
            <div className="p-4 border-t flex justify-center">
              <Button
                onClick={() => {
                  const cert = certificates.find(cert => cert.id === selectedCertificate);
                  if (cert) {
                    handleDownloadCertificate(cert.image, cert.name);
                  }
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <ChefHat className="w-20 h-20 mx-auto mb-6 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-slide-up">
            <span className="text-amber-600">HASAN</span> ALKHODER
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 animate-slide-up">
            Professional <span className="text-amber-600">Oriental</span> Chef
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            An experienced and passionate cook with expertise in multiple restaurant and hotel settings, 
            striving to serve the best possible food with innovative menu creation and exceptional leadership skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              View My Work
            </Button>
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
                View Gallery
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg" 
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
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
                I am an experienced and passionate cook with extensive experience in multiple restaurant and hotel settings, 
                always striving to serve the best possible food. Recognized as a visionary chef with deep knowledge of food 
                trends and the ability to think outside the box when it comes to menu creation.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My in-depth knowledge of flavor and food relationships results in mouth-watering dishes and attractive menus. 
                As a passionate first-choice professional, I am adept at using excellent leadership skills and innovation 
                to guide kitchen planning and operations, ensuring exceptional culinary experiences in every setting.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-2xl font-bold text-gray-900">18+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Team Members Managed</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Countries Worked</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl overflow-hidden">
                <img src="/lovable-uploads/c936ec1f-bfc8-435d-bf33-edb8ff88db3a.png" alt="Chef Hasan Alkhoder working in professional kitchen" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Education & Languages</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Professional training and linguistic abilities that support my international culinary career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-amber-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Diploma in Tourism and Hospitality</h4>
                    <p className="text-amber-600">Tourism and Hotels Institute</p>
                    <p className="text-gray-600">Aleppo, Syria • 2004 - 2006</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ChefHat className="w-8 h-8 text-amber-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Arabic</span>
                    <Badge className="bg-amber-100 text-amber-800">Native</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">English</span>
                    <Badge className="bg-amber-100 text-amber-800">Professional</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Professional Certifications</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Recognized credentials that validate my expertise and commitment to maintaining 
              the highest standards in food safety and culinary excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((certificate) => (
              <Card key={certificate.id} className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0 cursor-pointer" onClick={() => setSelectedCertificate(certificate.id)}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="w-6 h-6 text-amber-600" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{certificate.name}</h3>
                      <p className="text-amber-600 font-semibold text-sm">{certificate.issuer}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <img src={certificate.image} alt={`${certificate.name} Certification`} className="w-full h-48 object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                  </div>
                  <div className="text-sm text-gray-600">
                    {certificate.validUntil && (
                      <p className="mb-1"><span className="font-semibold">Valid Until:</span> {certificate.validUntil}</p>
                    )}
                    {certificate.completed && (
                      <p className="mb-1"><span className="font-semibold">Completed:</span> {certificate.completed}</p>
                    )}
                    {certificate.accreditedBy && (
                      <p><span className="font-semibold">Accredited By:</span> {certificate.accreditedBy}</p>
                    )}
                    {certificate.issuedBy && (
                      <p><span className="font-semibold">Issued By:</span> {certificate.issuedBy}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Cuisines Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Signature Cuisines</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore my culinary expertise across different cuisine types, each showcasing authentic flavors 
              and modern presentation techniques developed through years of professional experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cuisines.map((cuisine, index) => (
              <Link key={index} to={cuisine.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden cursor-pointer h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={cuisine.image} alt={cuisine.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{cuisine.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{cuisine.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-amber-600 font-semibold text-sm">View Gallery →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Culinary Expertise</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive skills developed through years of dedication in prestigious 
              kitchens across the Middle East.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-amber-200 text-amber-700 hover:bg-amber-50 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Professional Experience</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              My culinary journey through prestigious establishments across the Middle East, 
              building expertise in Arabic and international cuisine from Commis to Oriental Chef.
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div className="md:col-span-1">
                    <Badge className="bg-amber-100 text-amber-800 mb-2">{job.period}</Badge>
                    <p className="text-sm text-gray-600 font-medium">{job.location}</p>
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
          <h2 className="text-4xl font-bold mb-6">Let's Create Culinary Excellence Together</h2>
          <p className="text-xl mb-12 opacity-90">Ready to bring authentic Arabic flavors and innovative cuisine to your establishment? I'm available for Head chef, executive chef positions, consulting, and menu development.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90">hasankhuder67@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="opacity-90">0566284150</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="opacity-90">Dubai, UAE</p>
            </div>
          </div>
          <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 border-white px-8 py-3 text-lg">
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center text-gray-400">
        <p>&copy; 2024 Hasan Alkhoder - Professional Oriental Chef Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
