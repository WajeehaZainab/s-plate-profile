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
      name: "Arabic Fattoush Salad",
      image: "/lovable-uploads/40e42800-b4b7-4a50-bc02-f90391992e2d.png",
      description: "Fresh mixed greens with pomegranate, avocado, and crispy bread, dressed with traditional sumac vinaigrette"
    },
    {
      name: "Shish Barak with Vermeceli Rice",
      image: "/lovable-uploads/5427e9d1-0f52-42f3-a48c-8c257c6942e2.png",
      description: "Authentic Arabic dish with toasted bread, chickpeas, and creamy tahini sauce, garnished with fresh herbs"
    },
    {
      name: "Traditional Fatteh",
      image: "/lovable-uploads/04e4e5a6-cfed-4c2a-8df6-b4bd2073492b.png",
      description: "Authentic Arabic fatteh with crispy vermicelli, creamy yogurt sauce, and toasted pine nuts"
    },
    {
      name: "Fattoush",
      image: "/lovable-uploads/313bc143-911e-4d53-91c2-f571d70abd98.png",
      description: "Vibrant Arabic salad with mixed greens, cherry tomatoes, and traditional crispy bread garnish"
    },
    {
      name: "Hummus with Sujok",
      image: "/lovable-uploads/85841eeb-60aa-466d-bf15-426b17ad6005.png",
      description: "Traditional Lebanese spiced meat with almonds, served in fresh bread with aromatic herbs"
    },
    {
      name: "Greek Salad",
      image: "/lovable-uploads/28a55d0a-a92a-4612-9b24-18af65e51d43.png",
      description: "Fresh Mediterranean salad with tomatoes, cucumber, olives, and feta cheese with mint garnish"
    },
    {
      name: "Lentil Tabouleh with Burrata Cheese ",
      image: "/lovable-uploads/e1cfbf25-617e-4002-9a5a-44818450a2b9.png",
      description: "Creamy labneh topped with fresh herbs, olive oil, and toasted bread crumbs"
    },
    {
      name: "Roast pepper Hummus",
      image: "/lovable-uploads/2abc89da-c397-49f2-99de-095dd59a737a.png",
      description: "Traditional hummus with artistic pistachio garnish and decorative bread crisp"
    },
    {
      name: "Watermelon with Shanklish",
      image: "/lovable-uploads/aaeec376-0b65-45f6-a795-d62f71966650.png",
      description: "Fresh watermelon cubes with crumbled feta cheese, fresh mint, and pistachios for a refreshing Arabic-style appetizer"
    },
    {
      name: "Basil Hummus",
      image: "/lovable-uploads/6d7db0a5-13e0-4df3-879e-c29f1943f913.png",
      description: "Traditional Arabic hummus served with fresh vegetable sticks and artistic presentation on decorative plate"
    },
    {
      name: "Charcoal Hummus",
      image: "/lovable-uploads/44624705-285b-4c8e-bb9a-ed7c34836b14.png",
      description: "Contemporary presentation of traditional and charcoal hummus with artistic garnishes and fresh vegetables"
    },
    {
      name: "Fresh Watermelon & Cheese Cubes",
      image: "/lovable-uploads/fa2d858f-6fb8-480c-80ff-a74d41cc0ae1.png",
      description: "Traditional Middle Eastern refresher with fresh watermelon cubes topped with white cheese and fresh mint"
    },
    {
      name: "Modern Arabic Hummus Presentation",
      image: "/lovable-uploads/e88e3acb-75d8-4aea-a03f-a01f4e68ca73.png",
      description: "Contemporary dual hummus presentation featuring traditional and charcoal varieties with fresh garnishes"
    }
  ];

  const internationalDishes = [
    {
      name: "Grilled Chicken with Vegetables",
      image: "/lovable-uploads/3246030e-8c4b-429d-b5be-7648af76e938.png",
      description: "Perfectly grilled chicken breast with sautéed mushrooms and green beans, finished with fresh microgreens"
    },
    {
      name: "Fish Sayadiah",
      image: "/lovable-uploads/a8adaf4f-45ba-48f6-9520-d44e3570001c.png",
      description: "Traditional stuffed chicken breast filled with seasoned rice and herbs, served with rich gravy"
    },
    {
      name: "Stuffed Chicken Breast",
      image: "/lovable-uploads/bd6cfe34-c7c6-4f52-ad2a-eef64f409195.png",
      description: "Expertly prepared chicken breast stuffed with herbs and spices, served with roasted vegetables and signature sauce"
    },
    {
      name: "Herb-Crusted Lamb Chop",
      image: "/lovable-uploads/122fbf6e-2000-48d8-a440-a72cd534b072.png",
      description: "Premium lamb rack with herb crust, served with seasonal vegetables and rich jus"
    },
    {
      name: "Seared Tuna with Vegetables",
      image: "/lovable-uploads/23086f64-247b-488c-be8e-3bec67636556.png",
      description: "Perfectly seared tuna with fresh vegetables and artistic plating"
    },
    {
      name: "Watermelon Feta Salad",
      image: "/lovable-uploads/3d9f3a49-7d28-4553-8b25-cfd122dd7d64.png",
      description: "Fresh watermelon cubes with crumbled feta, mint, and microgreens for a refreshing modern appetizer"
    },
    {
      name: "Premium Beef Tenderloin",
      image: "/lovable-uploads/26b5f89d-1f7e-49f0-920a-215e3ccf36d5.png",
      description: "Perfectly cooked beef tenderloin with grilled asparagus, cherry tomatoes, and rich reduction"
    },
    {
      name: "Grilled Chicken with Potato Gratin",
      image: "/lovable-uploads/d6eee233-6a42-4366-b640-ce6c1dd08bb9.png",
      description: "Elegant layered vegetable tart with asparagus, featuring modern presentation and rich flavors"
    },
    {
      name: "Tomato Bruschetta",
      image: "/lovable-uploads/58561774-5af3-455f-a3d3-ed68e9f7a946.png",
      description: "Artisanal bruschetta topped with heritage tomatoes, fresh arugula, and aged cheese on crispy bread"
    },
    {
      name: "Pesto Linguine",
      image: "/lovable-uploads/bea813cc-ef54-4594-bb70-4de70f52a022.png",
      description: "Fresh linguine pasta tossed in homemade basil pesto with parmesan cheese and fresh basil garnish"
    },
    {
      name: "Elegant Layered Potato Dish",
      image: "/lovable-uploads/2640e12f-0d6e-451a-b564-b4936432c225.png",
      description: "Sophisticated layered potato gratin with asparagus spears and microgreens, finished with savory sauce"
    },
    {
      name: "Contemporary Tomato Tart",
      image: "/lovable-uploads/406dc03e-ea6f-4071-a9c0-8ae5849e8b48.png",
      description: "Modern interpretation of classic tomato tart with colorful cherry tomatoes, arugula, and artisanal bread base"
    },
    {
      name: "Fresh Pesto Spaghetti",
      image: "/lovable-uploads/53a8ea26-b120-428b-bc20-f78d73f8b39f.png",
      description: "Traditional spaghetti with fresh basil pesto, topped with grated parmesan and fresh basil leaves"
    }
  ];

  const appetizersAndDesserts = [
    {
      name: "Mushroom Arancini",
      image: "/lovable-uploads/b9835320-12cd-4671-9427-af8c1abe007c.png",
      description: "Elegant appetizer selection with crispy elements and flavorful dipping sauce"
    },
    {
      name: "Artistic Dessert Presentation",
      image: "/lovable-uploads/a514be23-29e2-4657-82b0-a2110a467a9c.png",
      description: "Elegant dessert with artistic plating, featuring delicate garnishes and creative presentation"
    },
    {
      name: "Vitello Tonnato",
      image: "/lovable-uploads/2d67b5fc-ab78-4a46-a0ed-88afc25c3811.png",
      description: "Thinly sliced premium carpaccio with fresh greens, edible flowers, and artisanal garnishes"
    },
    {
      name: "Fuagra with Fig Pure ",
      image: "/lovable-uploads/f28d9cb3-1ea6-469e-818c-c800fab5758b.png",
      description: "Contemporary presentation featuring foie gras, grilled vegetables, and artistic sauce work"
    },
    {
      name: "Quail Egg Arancini",
      image: "/lovable-uploads/776ca7bd-d30a-4268-ac4b-2166f855639e.png",
      description: "Elegant egg-based canapés with artistic presentation, perfect for sophisticated events and fine dining"
    },
    {
      name: "Salmon Pancake Rolls",
      image: "/lovable-uploads/e5706051-383c-4687-a279-397f5f139180.png",
      description: "Delicate pancake rolls filled with smoked salmon, cream cheese, and caviar, beautifully presented on banana leaf"
    },
    {
      name: "Charcoal Hummus",
      image: "/lovable-uploads/d8278996-5919-4528-94dd-f8b24afe73e5.png",
      description: "Innovative charcoal-colored dumplings with artistic presentation and contemporary garnishes"
    },
    {
      name: "Eggplant Crab Cake",
      image: "/lovable-uploads/fbac7631-37a6-4566-8944-b70781e61ccb.png",
      description: "Modern quinoa salad with colorful vegetables, herbs, and artistic carrot garnish on slate presentation"
    },
    {
      name: "Gourmet Egg Rolls",
      image: "/lovable-uploads/d48d3cad-9585-4454-95a8-72e8cd641d1d.png",
      description: "Elegantly plated crispy egg rolls with artistic presentation and garnishes, served on individual spoons"
    },
    {
      name: "Sophisticated Pancake Rolls",
      image: "/lovable-uploads/b815a150-b48a-4642-8ff2-bb7fbf36664f.png",
      description: "Delicate pancake rolls with smoked salmon, cream cheese, and caviar, beautifully arranged on banana leaf"
    },
    {
      name: "Creative Green Hummus",
      image: "/lovable-uploads/023eb149-c2c9-4206-a32f-4985a54227fe.png",
      description: "Innovative green-colored hummus with pine nuts and fresh vegetable sticks, artistically presented"
    },
    {
      name: "Artistic Charcoal Dumplings",
      image: "/lovable-uploads/e9093a19-cb96-46b9-96c7-6587b9215d86.png",
      description: "Stunning charcoal-colored dumplings with modern plating and artistic sauce presentation"
    },
    {
      name: "Gourmet Couscous Cake",
      image: "/lovable-uploads/14d38dcc-38a7-4196-808f-a4015cf6da2d.png",
      description: "Modern couscous cake with colorful vegetables, herbs, and artistic carrot garnish on slate board"
    }
  ];

  const healthyOptions = [
    {
      name: "Avocado Quinoa",
      image: "/lovable-uploads/90e6f4a1-32c2-4aa6-a3e8-60ea56476762.png",
      description: "Modern healthy dish featuring avocado and quinoa with artistic presentation"
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
              <p className="text-gray-700 leading-relaxed">{dish.description}</p>
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
          {renderDishSection("Appetizers & Desserts", appetizersAndDesserts, "text-amber-700", "appetizers-desserts")}
          {renderDishSection("Healthy & Modern Options", healthyOptions, "text-green-600", "healthy-options")}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
