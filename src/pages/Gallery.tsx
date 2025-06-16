
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Gallery = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to specific section if hash is present, or to top if no hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Scroll to top when no hash is present
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const arabicDishes = [
    {
      name: "Shish Barak with Vermeceli Rice",
      image: "/lovable-uploads/04e4e5a6-cfed-4c2a-8df6-b4bd2073492b.png"
    },
    {
      name: "Hummus with Sujok",
      image: "/lovable-uploads/85841eeb-60aa-466d-bf15-426b17ad6005.png"
    },
    {
      name: "Roast pepper Hummus",
      image: "/lovable-uploads/2abc89da-c397-49f2-99de-095dd59a737a.png"
    },
    {
      name: "Watermelon with Shanklish",
      image: "/lovable-uploads/aaeec376-0b65-45f6-a795-d62f71966650.png"
    },
    {
      name: "Basil Hummus",
      image: "/lovable-uploads/6d7db0a5-13e0-4df3-879e-c29f1943f913.png"
    },
    {
      name: "Modern Arabic Hummus Presentation",
      image: "/lovable-uploads/e88e3acb-75d8-4aea-a03f-a01f4e68ca73.png"
    },
    {
      name: "Muhammara",
      image: "/lovable-uploads/21e9ff92-0e92-4b87-9996-c303b612b7b2.png"
    },
    {
      name: "Cold Mezza",
      image: "/lovable-uploads/874704c2-a4ae-4938-a9be-10edcb68800e.png"
    },
    {
      name: "Fish Sayadiah",
      image: "/lovable-uploads/a8adaf4f-45ba-48f6-9520-d44e3570001c.png"
    },
    {
      name: "Beef Shawarma",
      image: "/lovable-uploads/4c20a117-b4ec-4d40-b9f3-8b28eef04eda.png"
    },
    {
      name: "Umm Ali",
      image: "/lovable-uploads/8544cf3c-16f4-45f7-bb04-25c08fcf16ab.png"
    },
    {
      name: "Lamb Arayes",
      image: "/lovable-uploads/28a21c8e-a84a-4659-b502-97ac1661ef88.png"
    },
    {
      name: "Arabic Style Spinach Salad",
      image: "/lovable-uploads/6af819e9-2e53-4c7c-a0fb-157d99955364.png"
    }
  ];

  const internationalDishes = [
    {
      name: "Greek Salad",
      image: "/lovable-uploads/28a55d0a-a92a-4612-9b24-18af65e51d43.png"
    },
    {
      name: "Lentil Tabouleh with Burrata Cheese",
      image: "/lovable-uploads/e1cfbf25-617e-4002-9a5a-44818450a2b9.png"
    },
    {
      name: "Beef Wellington",
      image: "/lovable-uploads/553d5e7b-14bc-422f-a234-15b74f91440a.png"
    },
    {
      name: "Salmon Cauliflower Couscous",
      image: "/lovable-uploads/7d31f8b5-c535-4009-b11e-fb91ba296bd9.png"
    },
    {
      name: "Beetroot Carpaccio",
      image: "/lovable-uploads/5b0ad8b0-e2a5-427a-a377-b3d675133a3e.png"
    },
    {
      name: "Grilled Chicken with Vegetables",
      image: "/lovable-uploads/3246030e-8c4b-429d-b5be-7648af76e938.png"
    },
    {
      name: "Stuffed Chicken Breast",
      image: "/lovable-uploads/bd6cfe34-c7c6-4f52-ad2a-eef64f409195.png"
    },
    {
      name: "Herb-Crusted Lamb Chop",
      image: "/lovable-uploads/122fbf6e-2000-48d8-a440-a72cd534b072.png"
    },
    {
      name: "Seared Tuna with Vegetables",
      image: "/lovable-uploads/23086f64-247b-488c-be8e-3bec67636556.png"
    },
    {
      name: "Premium Beef Tenderloin",
      image: "/lovable-uploads/26b5f89d-1f7e-49f0-920a-215e3ccf36d5.png"
    },
    {
      name: "Grilled Chicken with Potato Gratin",
      image: "/lovable-uploads/d6eee233-6a42-4366-b640-ce6c1dd08bb9.png"
    },
    {
      name: "Tomato Fetta Tart",
      image: "/lovable-uploads/58561774-5af3-455f-a3d3-ed68e9f7a946.png"
    },
    {
      name: "Pesto Linguine",
      image: "/lovable-uploads/bea813cc-ef54-4594-bb70-4de70f52a022.png"
    },
    {
      name: "Smoked Salmon with Tzatziki",
      image: "/lovable-uploads/2d702060-b8b5-4aee-9d3c-e8619d76ea07.png"
    },
    {
      name: "Grilled Fish with Mango Sauce",
      image: "/lovable-uploads/3601ab6d-fa83-46b1-9701-8add846ce164.png"
    },
    {
      name: "Pasta Arancini",
      image: "/lovable-uploads/6ed43f96-5f14-4f62-96d9-1260afcea694.png"
    },
    {
      name: "Crab Sandwich",
      image: "/lovable-uploads/b555405d-1142-4b3e-99ea-04940d8373a8.png"
    },
    {
      name: "Club Sandwich",
      image: "/lovable-uploads/7e62d466-bdd0-4f30-b5b5-4e1353e51f28.png"
    },
    {
      name: "Grilled Halloumi with Roasted Pumpkin",
      image: "/lovable-uploads/5886fbb1-1d5b-4ef4-b610-0e91a44e13f6.png"
    },
    {
      name: "Stuffed Turkey",
      image: "/lovable-uploads/46591b91-71db-45cd-947d-ea6d6eb822a5.png"
    },
    {
      name: "Mozzarella Arancini",
      image: "/lovable-uploads/b9835320-12cd-4671-9427-af8c1abe007c.png"
    },
    {
      name: "Vitello Tonnato",
      image: "/lovable-uploads/2d67b5fc-ab78-4a46-a0ed-88afc25c3811.png"
    },
    {
      name: "Fuagra with Fig Pure",
      image: "/lovable-uploads/f28d9cb3-1ea6-469e-818c-c800fab5758b.png"
    },
    {
      name: "Quail Egg Arancini",
      image: "/lovable-uploads/776ca7bd-d30a-4268-ac4b-2166f855639e.png"
    },
    {
      name: "Salmon Pancake Rolls",
      image: "/lovable-uploads/e5706051-383c-4687-a279-397f5f139180.png"
    },
    {
      name: "Eggplant Crab Cake",
      image: "/lovable-uploads/fbac7631-37a6-4566-8944-b70781e61ccb.png"
    },
    {
      name: "Smoked Salmon Cake",
      image: "/lovable-uploads/39d8cbbc-46b1-4ab5-acba-d1da55971d2e.png"
    },
    {
      name: "Burratini",
      image: "/lovable-uploads/e8abda14-6606-429c-9c65-1c0b951c835c.png"
    },
    {
      name: "Tuna Tartare Cones",
      image: "/lovable-uploads/b6e390cf-39de-44cd-9026-4b2d75f05df5.png"
    },
    {
      name: "Creamy Mushroom Risotto",
      image: "/lovable-uploads/50a0c2f6-76a0-467c-abe3-1590c0f6b00b.png"
    },
    {
      name: "Caesar Salad",
      image: "/lovable-uploads/a42fc7b9-994f-45fd-af63-ab79e3cb15fd.png"
    },
    {
      name: "Crème Brûlée",
      image: "/lovable-uploads/2b51d5df-53f0-4f4b-be24-ee461bb53ee5.png"
    }
  ];

  const renderDishSection = (title: string, dishes: any[], sectionColor: string, sectionId: string) => (
    <div id={sectionId} className="mb-20">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-bold mb-4 ${sectionColor}`}>{title}</h2>
        <div className={`w-24 h-1 ${sectionColor.replace('text-', 'bg-')} mx-auto rounded-full`}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{dish.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Culinary Gallery</h1>
          <p className="text-xl opacity-90">A showcase of my signature dishes and culinary creations</p>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {renderDishSection("Arabic & Middle Eastern Cuisine", arabicDishes, "text-amber-600", "arabic-cuisine")}
          {renderDishSection("International Cuisine", internationalDishes, "text-orange-600", "international-cuisine")}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
