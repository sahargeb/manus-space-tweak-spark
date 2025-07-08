import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Phone, Mail, MapPin, Star, Award, Users, Clock, Shield, X, Instagram, Download, FileText, ChevronDown, ChevronUp } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState('ar');
  const [tilesExpanded, setTilesExpanded] = useState(false);
  
  const translations = {
    ar: {
      // Header
      home: "الرئيسية",
      about: "عن الشركة",
      services: "الخدمات",
      products: "المنتجات",
      catalogs: "الكاتلوجات",
      contact: "تواصل معنا",
      callUs: "اتصل بنا",
      // Hero
      heroTitle: "معرض الحمامات والمطابخ الفاخرة",
      heroDescription: "نقدم لكم أحدث التصاميم العصرية للحمامات والمطابخ بأعلى معايير الجودة والأناقة",
      exploreProducts: "استكشف منتجاتنا",
      contactUs: "تواصل معنا",
      // Stats
      completedProjects: "مشروع مكتمل",
      yearsExperience: "سنة خبرة",
      customerSatisfaction: "رضا العملاء",
      customerService: "خدمة عملاء",
      // About
      aboutTitle: "عن BAGNODESIGN",
      aboutDescription: "نحن في BAGNODESIGN نتخصص في تقديم أحدث التصاميم للحمامات والمطابخ الفاخرة. مع سنوات من الخبرة في هذا المجال، نقدم لعملائنا حلولاً متكاملة تجمع بين الأناقة والوظائف العملية.",
      highQuality: "جودة عالية",
      highQualityDesc: "نستخدم أفضل المواد والخامات في جميع منتجاتنا",
      professionalTeam: "فريق محترف",
      professionalTeamDesc: "فريق من المصممين والفنيين ذوي الخبرة العالية",
      fullService: "خدمة شاملة",
      fullServiceDesc: "من التصميم إلى التركيب والصيانة",
      qualityGuarantee: "ضمان الجودة",
      qualityGuaranteeDesc: "ضمان شامل على جميع منتجاتنا وخدماتنا",
      // Services
      servicesTitle: "خدماتنا",
      servicesDescription: "نقدم مجموعة شاملة من الخدمات المتخصصة في تصميم وتنفيذ الحمامات والمطابخ الفاخرة",
      bathroomDesign: "تصميم وتنفيذ الحمامات الفاخرة",
      bathroomDesc: "نقدم تصاميم حمامات فاخرة بأحدث المعايير العالمية",
      kitchenDesign: "تصميم وتنفيذ المطابخ العصرية",
      kitchenDesc: "مطابخ عملية وأنيقة تجمع بين الجمال والوظائف",
      sanitarySupply: "توريد وتركيب الأدوات الصحية",
      sanitaryDesc: "أفضل الأدوات الصحية من العلامات التجارية الرائدة",
      lightingDesign: "تصميم أنظمة الإضاءة المتطورة",
      lightingDesc: "إضاءة مبتكرة تبرز جمال التصميم الداخلي",
      designConsultation: "استشارات التصميم الداخلي",
      designConsultationDesc: "خدمات استشارية متخصصة لتحقيق رؤيتك",
      learnMore: "اعرف المزيد",
      // Products
      productsTitle: "معرض المنتجات",
      productsDescription: "استكشف مجموعتنا المتنوعة من التصاميم الفاخرة للحمامات والمطابخ",
      viewDetails: "عرض التفاصيل",
      // Contact
      contactTitle: "تواصل معنا",
      contactDescription: "نحن هنا لمساعدتك في تحقيق حلمك بالحصول على حمام أو مطبخ مثالي",
      phone: "اتصل بنا",
      email: "راسلنا",
      location: "زورنا",
      // Footer
      footerDescription: "معرض الحمامات والمطابخ الفاخرة - نحو تصميم أفضل لمنزلك",
      ourServices: "خدماتنا",
      bathroomDesignShort: "تصميم الحمامات",
      kitchenDesignShort: "تصميم المطابخ",
      sanitaryEquipment: "الأدوات الصحية",
      lighting: "الإضاءة",
      quickLinks: "روابط سريعة",
      aboutCompany: "عن الشركة",
      gallery: "المعرض",
      contactInfo: "معلومات التواصل",
      allRightsReserved: "جميع الحقوق محفوظة",
      // Catalogs
      catalogsTitle: "كاتلوجات المنتجات",
      catalogsDescription: "تصفح واستعرض كاتلوجاتنا الحصرية للحصول على معلومات تفصيلية عن منتجاتنا وخدماتنا",
      bathroomsCatalog: "Bathroom sanitaryware & brassware",
      kitchensCatalog: "Kitchen LifeStyle",
      tilesCatalog: "TILES & SLABS",
      // Tiles sub-catalogs
      ceramicTiles: "البلاط السيراميك",
      porcelainTiles: "بلاط البورسلين",
      naturalStone: "الحجر الطبيعي",
      marbleSlabs: "ألواح الرخام",
      materialsCatalog: "كاتلوج الخامات",
      accessoriesCatalog: "كاتلوج الإكسسوارات",
      lightingCatalog: "كاتلوج الإضاءة",
      downloadCatalog: "تحميل الكاتلوج",
      viewCatalog: "عرض الكاتلوج",
      // Categories
      bathrooms: "حمامات",
      kitchens: "مطابخ",
      sanitaryTools: "أدوات صحية",
      materials: "خامات",
      accessories: "إكسسوارات",
      equipment: "أجهزة"
    },
    en: {
      // Header
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      catalogs: "Catalogs",
      contact: "Contact",
      callUs: "Call Us",
      // Hero
      heroTitle: "Luxury Bathrooms & Kitchens Gallery",
      heroDescription: "We offer the latest modern designs for bathrooms and kitchens with the highest standards of quality and elegance",
      exploreProducts: "Explore Our Products",
      contactUs: "Contact Us",
      // Stats
      completedProjects: "Completed Projects",
      yearsExperience: "Years Experience",
      customerSatisfaction: "Customer Satisfaction",
      customerService: "Customer Service",
      // About
      aboutTitle: "About BAGNODESIGN",
      aboutDescription: "At BAGNODESIGN, we specialize in providing the latest designs for luxury bathrooms and kitchens. With years of experience in this field, we offer our clients integrated solutions that combine elegance and practical functions.",
      highQuality: "High Quality",
      highQualityDesc: "We use the best materials and finishes in all our products",
      professionalTeam: "Professional Team",
      professionalTeamDesc: "A team of highly experienced designers and technicians",
      fullService: "Full Service",
      fullServiceDesc: "From design to installation and maintenance",
      qualityGuarantee: "Quality Guarantee",
      qualityGuaranteeDesc: "Comprehensive warranty on all our products and services",
      // Services
      servicesTitle: "Our Services",
      servicesDescription: "We provide a comprehensive range of specialized services in designing and implementing luxury bathrooms and kitchens",
      bathroomDesign: "Luxury Bathroom Design & Implementation",
      bathroomDesc: "We offer luxury bathroom designs with the latest international standards",
      kitchenDesign: "Modern Kitchen Design & Implementation",
      kitchenDesc: "Practical and elegant kitchens that combine beauty and functionality",
      sanitarySupply: "Sanitary Equipment Supply & Installation",
      sanitaryDesc: "The best sanitary equipment from leading brands",
      lightingDesign: "Advanced Lighting System Design",
      lightingDesc: "Innovative lighting that highlights the beauty of interior design",
      designConsultation: "Interior Design Consultation",
      designConsultationDesc: "Specialized consulting services to achieve your vision",
      learnMore: "Learn More",
      // Products
      productsTitle: "Products Gallery",
      productsDescription: "Explore our diverse collection of luxury bathroom and kitchen designs",
      viewDetails: "View Details",
      // Contact
      contactTitle: "Contact Us",
      contactDescription: "We are here to help you achieve your dream of having the perfect bathroom or kitchen",
      phone: "Call Us",
      email: "Email Us",
      location: "Visit Us",
      // Footer
      footerDescription: "Luxury Bathrooms & Kitchens Gallery - Towards Better Home Design",
      ourServices: "Our Services",
      bathroomDesignShort: "Bathroom Design",
      kitchenDesignShort: "Kitchen Design",
      sanitaryEquipment: "Sanitary Equipment",
      lighting: "Lighting",
      quickLinks: "Quick Links",
      aboutCompany: "About Company",
      gallery: "Gallery",
      contactInfo: "Contact Information",
      allRightsReserved: "All Rights Reserved",
      // Catalogs
      catalogsTitle: "Product Catalogs",
      catalogsDescription: "Browse and explore our exclusive catalogs to get detailed information about our products and services",
      bathroomsCatalog: "Bathroom sanitaryware & brassware",
      kitchensCatalog: "Kitchen LifeStyle",
      tilesCatalog: "TILES & SLABS",
      // Tiles sub-catalogs
      ceramicTiles: "Ceramic Tiles",
      porcelainTiles: "Porcelain Tiles",
      naturalStone: "Natural Stone",
      marbleSlabs: "Marble Slabs",
      materialsCatalog: "Materials Catalog",
      accessoriesCatalog: "Accessories Catalog",
      lightingCatalog: "Lighting Catalog",
      downloadCatalog: "Download Catalog",
      viewCatalog: "View Catalog",
      // Categories
      bathrooms: "Bathrooms",
      kitchens: "Kitchens",
      sanitaryTools: "Sanitary Tools",
      materials: "Materials",
      accessories: "Accessories",
      equipment: "Equipment"
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  const products = [
    {
      id: 1,
      title: language === 'ar' ? "حمام فاخر بالرخام الطبيعي" : "Luxury Bathroom with Natural Marble",
      category: t.bathrooms,
      image: "/lovable-uploads/d1095dc8-3451-47b4-9277-ff12bfd87ef7.png",
      description: language === 'ar' ? "تصميم حمام فاخر مع رخام طبيعي وإضاءة ذهبية مميزة" : "Luxury bathroom design with natural marble and distinctive golden lighting"
    },
    {
      id: 2,
      title: language === 'ar' ? "حمام عصري بتصميم أنيق" : "Modern Bathroom with Elegant Design",
      category: t.bathrooms,
      image: "/lovable-uploads/5be33a20-22b9-4b6a-aaf2-81f75f80886d.png",
      description: language === 'ar' ? "حمام عصري بمغسلة سوداء وخامات متميزة" : "Modern bathroom with black sink and premium materials"
    },
    {
      id: 3,
      title: language === 'ar' ? "مطبخ فاخر متكامل" : "Complete Luxury Kitchen",
      category: t.kitchens,
      image: "/lovable-uploads/a51864f6-9637-4034-9692-ec6a0bc3d9e5.png",
      description: language === 'ar' ? "مطبخ عصري مع جزيرة وإضاءة متطورة" : "Modern kitchen with island and advanced lighting"
    },
    {
      id: 4,
      title: language === 'ar' ? "معرض الأدوات الصحية" : "Sanitary Equipment Gallery",
      category: t.sanitaryTools,
      image: "/lovable-uploads/42d3c144-2a91-4e05-bc52-78e9260cbed9.png",
      description: language === 'ar' ? "مجموعة متنوعة من الأدوات الصحية الحديثة" : "Diverse collection of modern sanitary equipment"
    },
    {
      id: 5,
      title: language === 'ar' ? "عينات الخامات الفاخرة" : "Luxury Materials Samples",
      category: t.materials,
      image: "/lovable-uploads/d5f6b3ae-a30b-44c2-94c6-dbdb34bd1de5.png",
      description: language === 'ar' ? "مجموعة متنوعة من الرخام والخامات الطبيعية" : "Diverse collection of marble and natural materials"
    },
    {
      id: 6,
      title: language === 'ar' ? "حمام ذهبي فاخر" : "Luxury Golden Bathroom",
      category: t.bathrooms,
      image: "/lovable-uploads/4aa1af44-00df-43a4-92f8-7b9cf8fabbd4.png",
      description: language === 'ar' ? "تصميم حمام فاخر بمغسلة ذهبية ورخام مميز" : "Luxury bathroom design with golden sink and distinctive marble"
    },
    {
      id: 7,
      title: language === 'ar' ? "حمام بتصميم معاصر" : "Contemporary Design Bathroom",
      category: t.bathrooms,
      image: "/lovable-uploads/8ca1f78e-9660-45af-b2b2-f94fc572a36b.png",
      description: language === 'ar' ? "حمام عصري مع إضاءة مدمجة وتصميم أنيق" : "Modern bathroom with integrated lighting and elegant design"
    },
    {
      id: 8,
      title: language === 'ar' ? "حمام فاخر بالإضاءة الذهبية" : "Luxury Bathroom with Golden Lighting",
      category: t.bathrooms,
      image: "/lovable-uploads/4c2bacb3-43c7-441b-8188-489680b11a6e.png",
      description: language === 'ar' ? "تصميم حمام مع إضاءة ذهبية ورخام كلاسيكي" : "Bathroom design with golden lighting and classic marble"
    },
    {
      id: 9,
      title: language === 'ar' ? "حمام أسود أنيق" : "Elegant Black Bathroom",
      category: t.bathrooms,
      image: "/lovable-uploads/92353d56-6084-49a5-a45a-0bc3636a2b27.png",
      description: language === 'ar' ? "حمام عصري بحوض أسود وتصميم درامي" : "Modern bathroom with black basin and dramatic design"
    },
    {
      id: 10,
      title: language === 'ar' ? "معرض الإكسسوارات" : "Accessories Gallery",
      category: t.accessories,
      image: "/lovable-uploads/7fce98d9-2801-42b0-a8e6-a1f6c0d1ce3d.png",
      description: language === 'ar' ? "مجموعة من الإكسسوارات والإضاءة المنزلية" : "Collection of accessories and home lighting"
    },
    {
      id: 11,
      title: language === 'ar' ? "وحدات الفنادق والمرافق" : "Hotel Amenities & Facilities",
      category: t.equipment,
      image: "/lovable-uploads/a6d3fab7-0404-4cf7-8cba-b0710166f428.png",
      description: language === 'ar' ? "مجموعة شاملة من الأجهزة والمرافق الفندقية الحديثة" : "Comprehensive collection of modern hotel equipment and facilities"
    },
    {
      id: 12,
      title: language === 'ar' ? "مطبخ خارجي تحت الدرج" : "Outdoor Kitchen Under Stairs",
      category: t.kitchens,
      image: "/lovable-uploads/7114e5a3-0255-4299-b8ef-5d3f1516cf8d.png",
      description: language === 'ar' ? "تصميم مطبخ خارجي أنيق مع شواية تحت الدرج" : "Elegant outdoor kitchen design with grill under stairs"
    },
    {
      id: 13,
      title: language === 'ar' ? "حمام رخامي فاخر بالإضاءة المعلقة" : "Luxury Marble Bathroom with Pendant Lighting",
      category: t.bathrooms,
      image: "/lovable-uploads/9c2848bb-6c0e-4d87-a7fe-e6f1aa1f8382.png",
      description: language === 'ar' ? "حمام فاخر بجدران رخامية وإضاءة معلقة مميزة" : "Luxury bathroom with marble walls and distinctive pendant lighting"
    },
    {
      id: 14,
      title: language === 'ar' ? "عرض الصنابير والخامات" : "Faucets & Materials Display",
      category: t.sanitaryTools,
      image: "/lovable-uploads/886c01f4-7f8b-4e63-b86f-b8a13bea7e86.png",
      description: language === 'ar' ? "معرض شامل للصنابير والخامات الحديثة" : "Comprehensive display of modern faucets and materials"
    },
    {
      id: 15,
      title: language === 'ar' ? "معرض إكسسوارات BAGNODESIGN" : "BAGNODESIGN Accessories Gallery",
      category: t.accessories,
      image: "/lovable-uploads/49a0f7ae-a195-41e7-806d-686296c1c4e0.png",
      description: language === 'ar' ? "عرض مجموعة إكسسوارات BAGNODESIGN الحصرية" : "Display of exclusive BAGNODESIGN accessories collection"
    },
    {
      id: 16,
      title: language === 'ar' ? "حمام فاخر بالإضاءة المعلقة" : "Luxury Bathroom with Pendant Lighting",
      category: t.bathrooms,
      image: "/lovable-uploads/eb4032d8-d075-45e8-91cf-43a1856ab4b0.png",
      description: language === 'ar' ? "تصميم حمام فاخر مع إضاءة معلقة وخامات طبيعية" : "Luxury bathroom design with pendant lighting and natural materials"
    },
    {
      id: 17,
      title: language === 'ar' ? "مساحة معيشة ومطبخ مفتوح" : "Open Living Space & Kitchen",
      category: t.kitchens,
      image: "/lovable-uploads/d2fc2469-c1ca-47b2-ad16-0112cf49ba97.png",
      description: language === 'ar' ? "تصميم مفتوح يجمع بين المطبخ ومساحة المعيشة" : "Open design combining kitchen and living space"
    },
    {
      id: 18,
      title: language === 'ar' ? "حمام مدمج عصري" : "Modern Integrated Bathroom",
      category: t.bathrooms,
      image: "/lovable-uploads/eb1b5131-a9d5-47f7-83dc-57d577c1402b.png",
      description: language === 'ar' ? "حمام مدمج بتصميم عصري وخامات فاخرة" : "Integrated bathroom with modern design and luxury materials"
    },
    {
      id: 19,
      title: language === 'ar' ? "حمام فاخر بالخشب والرخام" : "Luxury Bathroom with Wood & Marble",
      category: t.bathrooms,
      image: "/lovable-uploads/97f91dbc-cab8-4dfb-8c22-fb8ffd5de9e4.png",
      description: language === 'ar' ? "حمام فاخر يجمع بين جمال الخشب وأناقة الرخام" : "Luxury bathroom combining the beauty of wood and elegance of marble"
    },
    {
      id: 20,
      title: language === 'ar' ? "حمام رخامي بالتشطيبات السوداء" : "Marble Bathroom with Black Finishes",
      category: t.bathrooms,
      image: "/lovable-uploads/6b99bf90-d463-41b5-bc65-e39c7bd80812.png",
      description: language === 'ar' ? "حمام فاخر بجدران رخامية وتشطيبات سوداء أنيقة" : "Luxury bathroom with marble walls and elegant black finishes"
    },
    {
      id: 21,
      title: language === 'ar' ? "عرض إكسسوارات TOKO المتنوعة" : "TOKO Diverse Accessories Display",
      category: t.accessories,
      image: "/lovable-uploads/a3e639b1-ed82-419c-addb-c6d957cc408f.png",
      description: language === 'ar' ? "معرض شامل لإكسسوارات TOKO الحديثة والأنيقة" : "Comprehensive display of modern and elegant TOKO accessories"
    },
    {
      id: 22,
      title: language === 'ar' ? "حوض استحمام أسود مع صنبور ذهبي" : "Black Bathtub with Golden Faucet",
      category: t.bathrooms,
      image: "/lovable-uploads/9d48a0e5-4174-4bef-827a-fbb82ed4ed2b.png",
      description: language === 'ar' ? "حوض استحمام أسود أنيق مع صنبور ذهبي وخلفية رخامية" : "Elegant black bathtub with golden faucet and marble background"
    },
    {
      id: 23,
      title: language === 'ar' ? "ركن جلوس مريح بتصميم عصري" : "Comfortable Seating Corner with Modern Design",
      category: t.accessories,
      image: "/lovable-uploads/1d5c0213-0e34-4497-8267-0cc62b87fa36.png",
      description: language === 'ar' ? "ركن جلوس مريح مع أرفف عرض وإكسسوارات متنوعة" : "Comfortable seating corner with display shelves and diverse accessories"
    },
    {
      id: 24,
      title: language === 'ar' ? "حمام فاخر بإضاءة فنية مميزة" : "Luxury Bathroom with Artistic Lighting",
      category: t.bathrooms,
      image: "/lovable-uploads/4c3a6ea7-15b2-44d5-950f-3fb76416d621.png",
      description: language === 'ar' ? "حمام فاخر بحوض أسود وإضاءة فنية مع مرآة مستديرة" : "Luxury bathroom with black tub and artistic lighting with round mirror"
    },
    {
      id: 25,
      title: language === 'ar' ? "مساحة عرض الأثاث والإكسسوارات" : "Furniture & Accessories Display Area",
      category: t.accessories,
      image: "/lovable-uploads/51d6f3ef-681b-4454-a28e-01550d21ed53.png",
      description: language === 'ar' ? "مساحة أنيقة لعرض الأثاث والإكسسوارات المنزلية الحديثة" : "Elegant space for displaying modern furniture and home accessories"
    },
    {
      id: 26,
      title: language === 'ar' ? "حمام رخامي بمغسلة ذهبية" : "Marble Bathroom with Golden Sink",
      category: t.bathrooms,
      image: "/lovable-uploads/8f4ea90d-110a-42bb-9a4c-d29fab5cd69a.png",
      description: language === 'ar' ? "حمام فاخر بجدران رخامية ومغسلة ذهبية مع إضاءة دافئة" : "Luxury bathroom with marble walls and golden sink with warm lighting"
    },
    {
      id: 27,
      title: language === 'ar' ? "حمام متكامل بتصميم عصري" : "Complete Modern Bathroom Design",
      category: t.bathrooms,
      image: "/lovable-uploads/166730c7-f1de-4786-bcbb-9d1fec86135f.png",
      description: language === 'ar' ? "حمام متكامل بجدران رخامية ومغسلة حديثة مع مرآة مضاءة" : "Complete bathroom with marble walls and modern sink with illuminated mirror"
    },
    {
      id: 28,
      title: language === 'ar' ? "حمام أنيق بمغسلة خشبية" : "Elegant Bathroom with Wooden Sink",
      category: t.bathrooms,
      image: "/lovable-uploads/7e2f3003-1c14-426c-860b-052db8fbe8e9.png",
      description: language === 'ar' ? "حمام أنيق بمغسلة خشبية وجدران رخامية مع إضاءة معلقة" : "Elegant bathroom with wooden sink and marble walls with pendant lighting"
    },
    {
      id: 29,
      title: language === 'ar' ? "حمام فاخر بخامات طبيعية متنوعة" : "Luxury Bathroom with Diverse Natural Materials",
      category: t.bathrooms,
      image: "/lovable-uploads/88ba6ea8-56e8-4735-b149-6f8b131a54c7.png",
      description: language === 'ar' ? "حمام فاخر يجمع بين الخامات الطبيعية المتنوعة والتصميم المعاصر" : "Luxury bathroom combining diverse natural materials with contemporary design"
    },
    {
      id: 30,
      title: language === 'ar' ? "مغسلة خشبية دائرية مع صنبور أسود" : "Round Wooden Sink with Black Faucet",
      category: t.sanitaryTools,
      image: "/lovable-uploads/9e14421b-af59-459f-b4a2-a5a20bba48fc.png",
      description: language === 'ar' ? "مغسلة دائرية من الخشب الطبيعي مع صنبور أسود أنيق" : "Round natural wood sink with elegant black faucet"
    },
    {
      id: 31,
      title: language === 'ar' ? "حمام رخامي فاخر بإضاءة دائرية مميزة" : "Luxury Marble Bathroom with Distinctive Circular Lighting",
      category: t.bathrooms,
      image: "/lovable-uploads/eeab58b6-6da9-4042-ada0-6c5bbe7fb15b.png",
      description: language === 'ar' ? "حمام فاخر بجدران رخامية وإضاءة دائرية مبتكرة مع تشطيبات ذهبية" : "Luxury bathroom with marble walls and innovative circular lighting with golden finishes"
    },
    {
      id: 32,
      title: language === 'ar' ? "معرض أحواض المطابخ الحديثة" : "Modern Kitchen Sinks Gallery",
      category: t.kitchens,
      image: "/lovable-uploads/8aa8d6f3-5d60-48ba-ab5d-8de49bd466d1.png",
      description: language === 'ar' ? "معرض شامل لأحواض المطابخ الحديثة مع تصاميم متنوعة وأنيقة" : "Comprehensive gallery of modern kitchen sinks with diverse and elegant designs"
    },
    {
      id: 33,
      title: language === 'ar' ? "مطبخ عصري متكامل بخامات فاخرة" : "Complete Modern Kitchen with Luxury Materials",
      category: t.kitchens,
      image: "/lovable-uploads/4f9aff47-86ee-4f7f-b99f-be11d60a7550.png",
      description: language === 'ar' ? "مطبخ عصري مع رخام طبيعي وأجهزة متطورة وإضاءة مدمجة" : "Modern kitchen with natural marble, advanced appliances and integrated lighting"
    },
    {
      id: 34,
      title: language === 'ar' ? "معرض BAGNODESIGN الشامل" : "BAGNODESIGN Comprehensive Gallery",
      category: t.accessories,
      image: "/lovable-uploads/e0efc3d9-9b1d-444c-a750-559276b390d4.png",
      description: language === 'ar' ? "معرض شامل يضم مختلف المنتجات والإكسسوارات من BAGNODESIGN" : "Comprehensive gallery featuring various products and accessories from BAGNODESIGN"
    },
    {
      id: 35,
      title: language === 'ar' ? "مرآة دائرية مع مغسلة رخامية أنيقة" : "Circular Mirror with Elegant Marble Sink",
      category: t.bathrooms,
      image: "/lovable-uploads/8cabac5c-f7d5-4125-94a5-a4231c15f166.png",
      description: language === 'ar' ? "تصميم أنيق مع مرآة دائرية ومغسلة رخامية مع إضاءة دافئة" : "Elegant design with circular mirror and marble sink with warm lighting"
    },
    {
      id: 36,
      title: language === 'ar' ? "عرض أنظمة الدش المتطورة" : "Advanced Shower Systems Display",
      category: t.sanitaryTools,
      image: "/lovable-uploads/7b5dcc58-4387-4d05-8aeb-aa8c23d6ee14.png",
      description: language === 'ar' ? "مجموعة متنوعة من أنظمة الدش بتشطيبات ذهبية وسوداء حديثة" : "Diverse collection of shower systems with modern golden and black finishes"
    },
    {
      id: 37,
      title: language === 'ar' ? "حمام رخامي فاخر بتشطيبات ذهبية" : "Luxury Marble Bathroom with Golden Finishes",
      category: t.bathrooms,
      image: "/lovable-uploads/afb1fa5f-d6cb-4987-a8cc-215960297b0b.png",
      description: language === 'ar' ? "حمام فاخر بجدران رخامية طبيعية ومغسلة مع تشطيبات ذهبية مميزة" : "Luxury bathroom with natural marble walls and sink with distinctive golden finishes"
    },
    {
      id: 38,
      title: language === 'ar' ? "حمام مفتوح بحوض أسود أنيق" : "Open Bathroom with Elegant Black Bathtub",
      category: t.bathrooms,
      image: "/lovable-uploads/5d61b391-100f-4211-9905-c3587296fbd4.png",
      description: language === 'ar' ? "تصميم حمام مفتوح مع حوض استحمام أسود وجدران رخامية وإضاءة معلقة" : "Open bathroom design with black bathtub, marble walls and pendant lighting"
    },
    {
      id: 39,
      title: language === 'ar' ? "مساحة معيشة فاخرة مفتوحة" : "Luxury Open Living Space",
      category: t.accessories,
      image: "/lovable-uploads/f40e6481-7976-49a1-9622-51df5c3dae7d.png",
      description: language === 'ar' ? "مساحة معيشة فاخرة مفتوحة مع أثاث عصري وإضاءة مبتكرة" : "Luxury open living space with modern furniture and innovative lighting"
    },
    {
      id: 40,
      title: language === 'ar' ? "حمام فاخر بخامات طبيعية متنوعة" : "Luxury Bathroom with Diverse Natural Materials",
      category: t.bathrooms,
      image: "/lovable-uploads/592b7bfd-7221-42d6-ba1f-f1a613c16f11.png",
      description: language === 'ar' ? "حمام فاخر يجمع بين الرخام الطبيعي والخشب مع حوض استحمام أبيض أنيق" : "Luxury bathroom combining natural marble and wood with elegant white bathtub"
    },
    {
      id: 41,
      title: language === 'ar' ? "معرض الإضاءة والإكسسوارات المنزلية" : "Lighting & Home Accessories Gallery",
      category: t.accessories,
      image: "/lovable-uploads/1c906387-d21f-48cc-b8e1-a3f258918253.png",
      description: language === 'ar' ? "معرض أنيق للإضاءة والإكسسوارات المنزلية مع تصاميم عصرية ومتنوعة" : "Elegant gallery of lighting and home accessories with modern and diverse designs"
    },
    {
      id: 42,
      title: language === 'ar' ? "معرض خلاطات المطابخ الحديثة" : "Modern Kitchen Mixers Gallery",
      category: t.kitchens,
      image: "/lovable-uploads/d04a5d33-5de0-4431-84c9-e6ca26caaac0.png",
      description: language === 'ar' ? "معرض شامل لخلاطات المطابخ الحديثة مع مطبخ عرض متكامل" : "Comprehensive gallery of modern kitchen mixers with complete display kitchen"
    },
    {
      id: 43,
      title: language === 'ar' ? "عرض منتجات BAGNODESIGN و TOKO" : "BAGNODESIGN & TOKO Products Display",
      category: t.sanitaryTools,
      image: "/lovable-uploads/335c4e5f-0ccd-4f50-b186-3cc1eaf81e94.png",
      description: language === 'ar' ? "عرض متخصص لمنتجات BAGNODESIGN و TOKO من الأدوات الصحية والإكسسوارات" : "Specialized display of BAGNODESIGN and TOKO sanitary products and accessories"
    },
    {
      id: 44,
      title: language === 'ar' ? "معرض الحمامات الفاخرة المتكامل" : "Complete Luxury Bathrooms Gallery",
      category: t.bathrooms,
      image: "/lovable-uploads/5fe0b360-3cdb-409d-9b71-5bd4d4270f11.png",
      description: language === 'ar' ? "معرض متكامل للحمامات الفاخرة بجدران رخامية وتصاميم عصرية مبتكرة" : "Complete gallery of luxury bathrooms with marble walls and innovative modern designs"
    }
  ];

  const stats = [
    { icon: Award, number: "500+", label: t.completedProjects },
    { icon: Clock, number: "15+", label: t.yearsExperience },
    { icon: Users, number: "100%", label: t.customerSatisfaction },
    { icon: Shield, number: "24/7", label: t.customerService }
  ];

  const services = [
    {
      title: t.bathroomDesign,
      description: t.bathroomDesc
    },
    {
      title: t.kitchenDesign,
      description: t.kitchenDesc
    },
    {
      title: t.sanitarySupply,
      description: t.sanitaryDesc
    },
    {
      title: t.lightingDesign,
      description: t.lightingDesc
    },
    {
      title: t.designConsultation,
      description: t.designConsultationDesc
    }
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">BAGNODESIGN</h1>
                <p className="text-sm text-muted-foreground">معرض الحمامات والمطابخ الفاخرة</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">{t.home}</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.about}</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">{t.services}</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">{t.products}</a>
              <a href="#catalogs" className="text-foreground hover:text-primary transition-colors">{t.catalogs}</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.contact}</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={toggleLanguage}>
                <span className="mr-2">{language === 'ar' ? 'English' : 'العربية'}</span>
              </Button>
              <Button onClick={() => window.location.href = 'tel:0226134401'}>{t.callUs}</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.heroDescription}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              {t.exploreProducts}
            </Button>
            <Button variant="outline" size="lg">
              {t.contactUs}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">{t.aboutTitle}</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {t.aboutDescription}
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.highQuality}</h3>
                <p className="text-sm text-muted-foreground">{t.highQualityDesc}</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.professionalTeam}</h3>
                <p className="text-sm text-muted-foreground">{t.professionalTeamDesc}</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.fullService}</h3>
                <p className="text-sm text-muted-foreground">{t.fullServiceDesc}</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.qualityGuarantee}</h3>
                <p className="text-sm text-muted-foreground">{t.qualityGuaranteeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.servicesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.servicesDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" size="sm">{t.learnMore}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.productsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.productsDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full">{t.viewDetails}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogs Section */}
      <section id="catalogs" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.catalogsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.catalogsDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-full h-80 mb-6 rounded-lg overflow-hidden bg-gray-50">
                <img 
                  src="/lovable-uploads/3e1561ad-88fc-4549-8a29-117ec509071b.png" 
                  alt="Bathroom sanitaryware & brassware"
                  className="w-full h-full object-contain hover-scale"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t.bathroomsCatalog}</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {language === 'ar' ? 'استكشف مجموعتنا الكاملة من أدوات الحمامات الصحية والنحاسية' : 'Explore our complete collection of bathroom sanitaryware and brassware'}
              </p>
              <Button className="w-full mb-3" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                {t.viewCatalog}
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-full h-80 mb-6 rounded-lg overflow-hidden bg-gray-50">
                <img 
                  src="/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png" 
                  alt="Kitchen LifeStyle"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t.kitchensCatalog}</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {language === 'ar' ? 'اكتشف أجهزة المطبخ الفاخرة من العلامات التجارية الرائدة، بما في ذلك الأفران والثلاجات ومبردات النبيذ والأحواض وصنابير المطبخ والمزيد.' : 'Discover our luxury kitchen appliances by leading brands, including ovens, refrigerators, wine coolers, sinks, kitchen taps and more.'}
              </p>
              <Button className="w-full mb-3" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                {t.viewCatalog}
              </Button>
            </Card>

            <Collapsible 
              open={tilesExpanded} 
              onOpenChange={setTilesExpanded}
              className="space-y-2"
            >
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CollapsibleTrigger className="w-full">
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-gray-50">
                    <img 
                      src="/lovable-uploads/740f7f90-ba42-4f4f-a9ca-434e9bf4fb23.png" 
                      alt="Surfaces BAGNODESIGN 2025"
                      className="w-full h-full object-cover hover-scale"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{t.tilesCatalog}</h3>
                    {tilesExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {language === 'ar' ? 'اكتشف مجموعة البلاط والألواح من العلامات التجارية الأوروبية الرائدة بمجموعة متنوعة من الأنماط والأحجام والتشطيبات' : 'Discover our tiles and slabs from leading European brands in an array of styles, sizes, and finishes'}
                  </p>
                  <Button className="w-full mb-3" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    {t.downloadCatalog}
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="mt-4 space-y-3 animate-accordion-down">
                  <div className="grid grid-cols-1 gap-3">
                    <Card className="p-4 hover:shadow-md transition-shadow bg-secondary/30">
                      <h4 className="font-semibold text-foreground mb-2">{t.ceramicTiles}</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-3 h-3 mr-1" />
                          {t.downloadCatalog}
                        </Button>
                        <Button size="sm" className="flex-1">
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-4 hover:shadow-md transition-shadow bg-secondary/30">
                      <h4 className="font-semibold text-foreground mb-2">{t.porcelainTiles}</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-3 h-3 mr-1" />
                          {t.downloadCatalog}
                        </Button>
                        <Button size="sm" className="flex-1">
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-4 hover:shadow-md transition-shadow bg-secondary/30">
                      <h4 className="font-semibold text-foreground mb-2">{t.naturalStone}</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-3 h-3 mr-1" />
                          {t.downloadCatalog}
                        </Button>
                        <Button size="sm" className="flex-1">
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-4 hover:shadow-md transition-shadow bg-secondary/30">
                      <h4 className="font-semibold text-foreground mb-2">{t.marbleSlabs}</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-3 h-3 mr-1" />
                          {t.downloadCatalog}
                        </Button>
                        <Button size="sm" className="flex-1">
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t.materialsCatalog}</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {language === 'ar' ? 'اكتشف أفضل الخامات والمواد عالية الجودة' : 'Discover the finest high-quality materials and finishes'}
              </p>
              <Button className="w-full mb-3" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                {t.viewCatalog}
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t.accessoriesCatalog}</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {language === 'ar' ? 'تصفح مجموعة الإكسسوارات والتجهيزات المنزلية' : 'Browse our collection of accessories and home fixtures'}
              </p>
              <Button className="w-full mb-3" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                {t.viewCatalog}
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t.lightingCatalog}</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {language === 'ar' ? 'استكشف مجموعة حلول الإضاءة الحديثة والمبتكرة' : 'Explore our collection of modern and innovative lighting solutions'}
              </p>
              <Button className="w-full mb-3" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                {t.viewCatalog}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.contactTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contactDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">{t.phone}</h3>
              <a href="tel:0226134401" className="text-muted-foreground hover:text-primary transition-colors">0226134401</a>
            </div>
            
            <div className="text-center p-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">{t.email}</h3>
              <a href="mailto:Info@bagnodesignmisr.com" className="text-muted-foreground hover:text-primary transition-colors">Info@bagnodesignmisr.com</a>
            </div>
            
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">{t.location}</h3>
              <a href="https://maps.app.goo.gl/BJRtY19x8amtMckF8?g_st=ac" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{language === 'ar' ? 'القاهرة، جمهورية مصر العربية' : 'Cairo, Egypt'}</a>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{language === 'ar' ? 'تابعنا' : 'Follow Us'}</h3>
              <a href="https://www.instagram.com/bagnodesignmisr?igsh=NW8yM3V3Mm1yczVh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@bagnodesignmisr</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">B</span>
                </div>
                <span className="font-bold text-lg">BAGNODESIGN</span>
              </div>
              <p className="text-background/70">
                {t.footerDescription}
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/bagnodesignmisr?igsh=NW8yM3V3Mm1yczVh" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="mailto:Info@bagnodesignmisr.com" className="text-background/70 hover:text-primary transition-colors">
                  Email
                </a>
                <a href="tel:0226134401" className="text-background/70 hover:text-primary transition-colors">
                  Phone
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t.ourServices}</h4>
              <ul className="space-y-2 text-background/70">
                <li>{t.bathroomDesignShort}</li>
                <li>{t.kitchenDesignShort}</li>
                <li>{t.sanitaryEquipment}</li>
                <li>{t.lighting}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t.quickLinks}</h4>
              <ul className="space-y-2 text-background/70">
                <li>{t.aboutCompany}</li>
                <li>{t.products}</li>
                <li>{t.gallery}</li>
                <li>{t.contact}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t.contactInfo}</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="tel:0226134401" className="hover:text-primary transition-colors">0226134401</a></li>
                <li><a href="mailto:Info@bagnodesignmisr.com" className="hover:text-primary transition-colors">Info@bagnodesignmisr.com</a></li>
                <li><a href="https://maps.app.goo.gl/BJRtY19x8amtMckF8?g_st=ac" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 BAGNODESIGN. {t.allRightsReserved}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;