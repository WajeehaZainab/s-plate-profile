import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Award, Users, Clock, Mail, Phone, MapPin, FileCheck, GraduationCap, FileText, X, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    // Update the page title and meta description
    document.title = "Chef Hasan Portfolio";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional Oriental Chef Hasan Alkhoder - Expert in Arabic, Middle Eastern and International Cuisine');
    
    // Update or create Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Chef Hasan Portfolio');
    
    // Update or create Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Professional Oriental Chef Hasan Alkhoder - Expert in Arabic, Middle Eastern and International Cuisine');
    
    // Update or create Open Graph image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', '/lovable-uploads/c936ec1f-bfc8-435d-bf33-edb8ff88db3a.png');
  }, []);

  const cuisines = [
    {
      name: "Arabic & Middle Eastern",
      image: "/lovable-uploads/8544cf3c-16f4-45f7-bb04-25c08fcf16ab.png",
      link: "/gallery#arabic-cuisine"
    },
    {
      name: "International Cuisine",
      image: "/lovable-uploads/3601ab6d-fa83-46b1-9701-8add846ce164.png",
      link: "/gallery#international-cuisine"
    }
  ];

  const chefIcons = [
    {
      name: "Chef Hasan with Colleague",
      image: "/lovable-uploads/1c6fac87-2b75-46db-9026-6b96be1c0f64.png",
      caption: "Chef Hasan Alkhoder"
    },
    {
      name: "Professional Collaboration",
      image: "/lovable-uploads/b72ce16a-673d-40f1-8987-60c75133172b.png",
      caption: "Chef CZN Burak"
    },
    {
      name: "Chef Hasan with Grandmother",
      image: "/lovable-uploads/7cefe822-3af7-40e3-90a9-9567e2a74fab.png",
      caption: "Chef Hasan with Teta"
    }
  ];

  const skills = ["Arabic Cuisine", "International Cuisine", "Lebanese Cuisine", "Syrian Cuisine", "Menu Development", "Kitchen Management", "Staff Training", "Food Safety", "Buffet Operations", "Cold Kitchen", "Hot Kitchen", "Food Presentation", "Recipe Development", "Hygiene Standards", "Team Leadership"];
  
  const experience = [
    {
      position: "Oriental Chef",
      restaurant: "Address Creek Harbour Hotel - Emaar",
      location: "Dubai",
      period: "June 2024 - Present"
    },
    {
      position: "Junior Sous Chef",
      restaurant: "Bab al Shams Hotel",
      location: "Dubai",
      period: "September 2022 - June 2024"
    },
    {
      position: "Junior Sous Chef",
      restaurant: "Yasmine Palace Restaurant",
      location: "Doha, Qatar",
      period: "February 2021 - July 2022"
    },
    {
      position: "Senior Chef de Partie",
      restaurant: "Sheraton Hotel",
      location: "Doha, Qatar",
      period: "March 2019 - December 2020"
    },
    {
      position: "Chef de Partie",
      restaurant: "Le Royal Hotel",
      location: "Beirut, Lebanon",
      period: "February 2017 - February 2019"
    },
    {
      position: "Chef de Partie",
      restaurant: "Movenpick Hotel",
      location: "Beirut, Lebanon",
      period: "March 2014 - January 2017"
    },
    {
      position: "Demi Chef de Partie",
      restaurant: "Qube Restaurant",
      location: "Beirut, Lebanon",
      period: "April 2012 - 2014"
    },
    {
      position: "Demi Chef de Partie",
      restaurant: "Intercontinental Group Hotel, Riyadh Conference Palace",
      location: "Riyadh, Saudi Arabia",
      period: "February 2010 - February 2012"
    },
    {
      position: "Commis 1",
      restaurant: "Ramsis Hotel",
      location: "Aleppo, Syria",
      period: "May 2008 - January 2010"
    },
    {
      position: "Commis 2",
      restaurant: "Meridian Hotel",
      location: "Aleppo, Syria",
      period: "June 2006 - April 2008"
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

  const handleViewCV = () => {
    setShowCV(true);
  };

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

  const handleGetInTouch = () => {
    const subject = encodeURIComponent("Professional Inquiry - Chef Position");
    const body = encodeURIComponent("Dear Hasan,\n\nI am interested in discussing potential culinary opportunities with you.\n\nBest regards,");
    window.location.href = `mailto:hasankhuder67@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/c936ec1f-bfc8-435d-bf33-edb8ff88db3a.png" 
                alt="Chef Hasan" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <span className="text-lg md:text-xl font-bold text-gray-900">Chef Hasan Portfolio</span>
            </div>
            <div className="flex gap-2 md:gap-3">
              <Link to="/gallery">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white text-sm md:text-base px-3 md:px-4">
                  View My Work
                </Button>
              </Link>
              <Button 
                onClick={handleViewCV}
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 text-sm md:text-base px-3 md:px-4"
              >
                <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                View CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">Hasan Alkhoder - CV</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCV(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4">
              <iframe
                src="/Hasan_Alkhoder_CV.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full h-[70vh]"
                title="Hasan Alkhoder CV"
              />
            </div>
            <div className="p-4 border-t flex justify-center">
              <Button
                onClick={handleDownloadCV}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      )}

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
                <FileText className="w-4 h-4 mr-2" />
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
          <div className="mb-6 md:mb-8 animate-fade-in">
            <ChefHat className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-900 animate-slide-up">
            <span className="text-amber-600">HASAN</span> ALKHODER
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-gray-800 animate-slide-up">
            Professional <span className="text-amber-600">Oriental</span> Chef
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            An experienced and passionate cook with expertise in multiple restaurant and hotel settings, 
            striving to serve the best possible food with innovative menu creation and exceptional leadership skills
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-slide-up animation-delay-400">
            <Link to="/gallery">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-6 md:px-8 py-3 text-base md:text-lg w-full sm:w-auto">
                View My Work
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg" 
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-6 md:px-8 py-3 text-base md:text-lg w-full sm:w-auto"
              onClick={handleViewCV}
            >
              <FileText className="w-4 h-4 mr-2" />
              View CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">About Me</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                I am an experienced and passionate cook with extensive experience in multiple restaurant and hotel settings, 
                always striving to serve the best possible food. Recognized as a visionary chef with deep knowledge of food 
                trends and the ability to think outside the box when it comes to menu creation.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                My in-depth knowledge of flavor and food relationships results in mouth-watering dishes and attractive menus. 
                As a passionate first-choice professional, I am adept at using excellent leadership skills and innovation 
                to guide kitchen planning and operations, ensuring exceptional culinary experiences in every setting.
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                <div>
                  <Award className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">18+</div>
                  <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-xs md:text-sm text-gray-600">Team Members Managed</div>
                </div>
                <div>
                  <Clock className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-amber-600" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">5</div>
                  <div className="text-xs md:text-sm text-gray-600">Countries Worked</div>
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

      {/* Signature Cuisines Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Signature Cuisines</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Explore my culinary expertise across different cuisine types, each showcasing authentic flavors 
              and modern presentation techniques developed through years of professional experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {cuisines.map((cuisine, index) => (
              <Link key={index} to={cuisine.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden cursor-pointer h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={cuisine.image} alt={cuisine.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{cuisine.name}</h3>
                    <span className="text-amber-600 font-semibold text-sm">View Gallery →</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Certifications</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Recognized credentials that validate my expertise and commitment to maintaining 
              the highest standards in food safety and culinary excellence.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {certificates.map((certificate) => (
              <Card key={certificate.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 cursor-pointer overflow-hidden" onClick={() => setSelectedCertificate(certificate.id)}>
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                  <img 
                    src={certificate.image} 
                    alt={`${certificate.name} Certification`} 
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{certificate.name}</h3>
                      <p className="text-amber-600 text-sm md:text-base">{certificate.issuer}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1 text-center">
                    {certificate.validUntil && (
                      <p><span className="font-semibold">Valid Until:</span> {certificate.validUntil}</p>
                    )}
                    {certificate.completed && (
                      <p><span className="font-semibold">Completed:</span> {certificate.completed}</p>
                    )}
                    {certificate.accreditedBy && (
                      <p><span className="font-semibold">Accredited By:</span> {certificate.accreditedBy}</p>
                    )}
                    {certificate.issuedBy && (
                      <p><span className="font-semibold">Issued By:</span> {certificate.issuedBy}</p>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-amber-600 font-medium">Click to view full size</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Icons Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Chef Icons Who Inspire Me</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Working alongside talented professionals who share the same passion for culinary excellence 
              and continuous learning in the kitchen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {chefIcons.map((chef, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={chef.image} 
                    alt={chef.name} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardContent className="p-4 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{chef.caption}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Education & Languages</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Professional training and linguistic abilities that support my international culinary career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Education</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base md:text-lg">Diploma in Tourism and Hospitality</h4>
                    <p className="text-amber-600 text-sm md:text-base">Tourism and Hotels Institute</p>
                    <p className="text-gray-600 text-sm">Aleppo, Syria • 2004 - 2006</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Languages</h3>
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

      {/* Skills Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Culinary Expertise</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive skills developed through years of dedication in prestigious 
              kitchens across the Middle East.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="px-3 md:px-4 py-2 text-xs md:text-sm border-amber-200 text-amber-700 hover:bg-amber-50 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with Background Image */}
      <section 
        className="py-12 md:py-20 px-4 relative bg-gradient-to-br from-slate-50 to-blue-50"
        style={{
          backgroundImage: 'url(/lovable-uploads/52021c57-3d72-4542-9701-ba7759e828f3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Experience</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              My culinary journey through prestigious establishments across the Middle East, 
              building expertise in Arabic and international cuisine from Commis to Oriental Chef.
            </p>
          </div>
          <div className="space-y-6 md:space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-4 md:p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-4 gap-4 md:gap-6 items-start">
                  <div className="md:col-span-1">
                    <Badge className="bg-amber-100 text-amber-800 mb-2 text-xs">{job.period}</Badge>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">{job.location}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{job.position}</h3>
                    <h4 className="text-lg md:text-xl text-amber-600 font-semibold">{job.restaurant}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Let's Create Culinary Excellence Together</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 opacity-90">Ready to bring authentic Arabic flavors and innovative cuisine to your establishment? I'm available for Head chef, executive chef positions, consulting, and menu development.</p>
          <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3" />
              <h3 className="font-semibold mb-1 md:mb-2">Email</h3>
              <p className="opacity-90 text-sm md:text-base break-all">hasankhuder67@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3" />
              <h3 className="font-semibold mb-1 md:mb-2">Phone</h3>
              <p className="opacity-90 text-sm md:text-base">0566284150</p>
            </div>
            <div className="flex flex-col items-center">
              <Linkedin className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3" />
              <h3 className="font-semibold mb-1 md:mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/hasan-khoder-575601265/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-90 text-sm md:text-base hover:underline"
              >
                View Profile
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3" />
              <h3 className="font-semibold mb-1 md:mb-2">Location</h3>
              <p className="opacity-90 text-sm md:text-base">Dubai, UAE</p>
            </div>
          </div>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-amber-600 hover:bg-gray-100 border-white px-6 md:px-8 py-3 text-base md:text-lg"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 bg-gray-900 text-center text-gray-400">
        <p className="text-sm md:text-base">&copy; 2025 Hasan Alkhoder - Professional Oriental Chef Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
