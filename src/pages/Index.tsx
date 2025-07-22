import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Phone, Mail, MapPin, Star, Award, Users, Clock, Shield, X, Instagram, Download, FileText, ChevronDown, ChevronUp, Plus, Box, View, Eye, Heart, Menu, Home, User, ShoppingBag, MessageCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import VirtualGallery from "@/components/3d/VirtualGallery";
import Image360Viewer from "@/components/3d/Image360Viewer";
import QRCodeVR from "@/components/QRCodeVR";
const Index = () => {
  const [language, setLanguage] = useState('ar');
  const [tilesExpanded, setTilesExpanded] = useState(false);
  const [showVirtualGallery, setShowVirtualGallery] = useState(false);
  const [show360Viewer, setShow360Viewer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [current360Image, setCurrent360Image] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);
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
      productsTitle: "معرض صالة العرض",
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
      productsTitle: "Our Showroom Gallery",
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
  const products = [{
    id: 1,
    title: language === 'ar' ? "حمام فاخر بالرخام الطبيعي" : "Luxury Bathroom",
    category: t.bathrooms,
    image: "/lovable-uploads/d1095dc8-3451-47b4-9277-ff12bfd87ef7.png",
    description: language === 'ar' ? "تصميم حمام فاخر مع رخام طبيعي وإضاءة ذهبية مميزة" : "Luxury bathroom design with natural marble and distinctive golden lighting"
  }, {
    id: 2,
    title: language === 'ar' ? "حمام عصري بتصميم أنيق" : "Modern Bathroom with Elegant Design",
    category: t.bathrooms,
    image: "/lovable-uploads/5be33a20-22b9-4b6a-aaf2-81f75f80886d.png",
    description: language === 'ar' ? "حمام عصري بمغسلة سوداء وخامات متميزة" : "Modern bathroom with black sink and premium materials"
  }, {
    id: 3,
    title: language === 'ar' ? "مطبخ فاخر متكامل" : "Complete Luxury Kitchen",
    category: t.kitchens,
    image: "/lovable-uploads/a51864f6-9637-4034-9692-ec6a0bc3d9e5.png",
    description: language === 'ar' ? "مطبخ عصري مع جزيرة وإضاءة متطورة" : "Modern kitchen with island and advanced lighting"
  }, {
    id: 4,
    title: language === 'ar' ? "معرض الأدوات الصحية" : "Sanitary Equipment Gallery",
    category: t.sanitaryTools,
    image: "/lovable-uploads/42d3c144-2a91-4e05-bc52-78e9260cbed9.png",
    description: language === 'ar' ? "مجموعة متنوعة من الأدوات الصحية الحديثة" : "Diverse collection of modern sanitary equipment"
  }, {
    id: 5,
    title: language === 'ar' ? "عينات الخامات الفاخرة" : "Luxury Materials Samples",
    category: t.materials,
    image: "/lovable-uploads/d5f6b3ae-a30b-44c2-94c6-dbdb34bd1de5.png",
    description: language === 'ar' ? "مجموعة متنوعة من الرخام والخامات الطبيعية" : "Diverse collection of marble and natural materials"
  }, {
    id: 6,
    title: language === 'ar' ? "حمام ذهبي فاخر" : "Luxury Golden Bathroom",
    category: t.bathrooms,
    image: "/lovable-uploads/4aa1af44-00df-43a4-92f8-7b9cf8fabbd4.png",
    description: language === 'ar' ? "تصميم حمام فاخر بمغسلة ذهبية ورخام مميز" : "Luxury bathroom design with golden sink and distinctive marble"
  }, {
    id: 7,
    title: language === 'ar' ? "حمام بتصميم معاصر" : "Contemporary Design Bathroom",
    category: t.bathrooms,
    image: "/lovable-uploads/8ca1f78e-9660-45af-b2b2-f94fc572a36b.png",
    description: language === 'ar' ? "حمام عصري مع إضاءة مدمجة وتصميم أنيق" : "Modern bathroom with integrated lighting and elegant design"
  }, {
    id: 8,
    title: language === 'ar' ? "حمام فاخر بالإضاءة الذهبية" : "Luxury Bathroom with Golden Lighting",
    category: t.bathrooms,
    image: "/lovable-uploads/4c2bacb3-43c7-441b-8188-489680b11a6e.png",
    description: language === 'ar' ? "تصميم حمام مع إضاءة ذهبية ورخام كلاسيكي" : "Bathroom design with golden lighting and classic marble"
  }, {
    id: 9,
    title: language === 'ar' ? "حمام أسود أنيق" : "Elegant Black Bathroom",
    category: t.bathrooms,
    image: "/lovable-uploads/92353d56-6084-49a5-a45a-0bc3636a2b27.png",
    description: language === 'ar' ? "حمام عصري بحوض أسود وتصميم درامي" : "Modern bathroom with black basin and dramatic design"
  }, {
    id: 10,
    title: language === 'ar' ? "معرض الإكسسوارات" : "Accessories Gallery",
    category: t.accessories,
    image: "/lovable-uploads/7fce98d9-2801-42b0-a8e6-a1f6c0d1ce3d.png",
    description: language === 'ar' ? "مجموعة من الإكسسوارات والإضاءة المنزلية" : "Collection of accessories and home lighting"
  }, {
    id: 11,
    title: language === 'ar' ? "وحدات الفنادق والمرافق" : "Hotel Amenities & Facilities",
    category: t.equipment,
    image: "/lovable-uploads/a6d3fab7-0404-4cf7-8cba-b0710166f428.png",
    description: language === 'ar' ? "مجموعة شاملة من الأجهزة والمرافق الفندقية الحديثة" : "Comprehensive collection of modern hotel equipment and facilities"
  }, {
    id: 12,
    title: language === 'ar' ? "مطبخ خارجي تحت الدرج" : "Outdoor Kitchen Under Stairs",
    category: t.kitchens,
    image: "/lovable-uploads/7114e5a3-0255-4299-b8ef-5d3f1516cf8d.png",
    description: language === 'ar' ? "تصميم مطبخ خارجي أنيق مع شواية تحت الدرج" : "Elegant outdoor kitchen design with grill under stairs"
  }, {
    id: 13,
    title: language === 'ar' ? "حمام رخامي فاخر بالإضاءة المعلقة" : "Luxury Marble Bathroom with Pendant Lighting",
    category: t.bathrooms,
    image: "/lovable-uploads/9c2848bb-6c0e-4d87-a7fe-e6f1aa1f8382.png",
    description: language === 'ar' ? "حمام فاخر بجدران رخامية وإضاءة معلقة مميزة" : "Luxury bathroom with marble walls and distinctive pendant lighting"
  }, {
    id: 14,
    title: language === 'ar' ? "عرض الصنابير والخامات" : "Faucets & Materials Display",
    category: t.sanitaryTools,
    image: "/lovable-uploads/886c01f4-7f8b-4e63-b86f-b8a13bea7e86.png",
    description: language === 'ar' ? "معرض شامل للصنابير والخامات الحديثة" : "Comprehensive display of modern faucets and materials"
  }, {
    id: 15,
    title: language === 'ar' ? "معرض إكسسوارات BAGNODESIGN" : "BAGNODESIGN Accessories Gallery",
    category: t.accessories,
    image: "/lovable-uploads/49a0f7ae-a195-41e7-806d-686296c1c4e0.png",
    description: language === 'ar' ? "عرض مجموعة إكسسوارات BAGNODESIGN الحصرية" : "Display of exclusive BAGNODESIGN accessories collection"
  }, {
    id: 16,
    title: language === 'ar' ? "حمام فاخر بالإضاءة المعلقة" : "Luxury Bathroom with Pendant Lighting",
    category: t.bathrooms,
    image: "/lovable-uploads/eb4032d8-d075-45e8-91cf-43a1856ab4b0.png",
    description: language === 'ar' ? "تصميم حمام فاخر مع إضاءة معلقة وخامات طبيعية" : "Luxury bathroom design with pendant lighting and natural materials"
  }, {
    id: 17,
    title: language === 'ar' ? "مساحة معيشة ومطبخ مفتوح" : "Open Living Space & Kitchen",
    category: t.kitchens,
    image: "/lovable-uploads/d2fc2469-c1ca-47b2-ad16-0112cf49ba97.png",
    description: language === 'ar' ? "تصميم مفتوح يجمع بين المطبخ ومساحة المعيشة" : "Open design combining kitchen and living space"
  }, {
    id: 18,
    title: language === 'ar' ? "حمام مدمج عصري" : "Modern Integrated Bathroom",
    category: t.bathrooms,
    image: "/lovable-uploads/eb1b5131-a9d5-47f7-83dc-57d577c1402b.png",
    description: language === 'ar' ? "حمام مدمج بتصميم عصري وخامات فاخرة" : "Integrated bathroom with modern design and luxury materials"
  }, {
    id: 19,
    title: language === 'ar' ? "حمام فاخر بالخشب والرخام" : "Luxury Bathroom with Wood & Marble",
    category: t.bathrooms,
    image: "/lovable-uploads/97f91dbc-cab8-4dfb-8c22-fb8ffd5de9e4.png",
    description: language === 'ar' ? "حمام فاخر يجمع بين جمال الخشب وأناقة الرخام" : "Luxury bathroom combining the beauty of wood and elegance of marble"
  }, {
    id: 20,
    title: language === 'ar' ? "حمام رخامي بالتشطيبات السوداء" : "Marble Bathroom with Black Finishes",
    category: t.bathrooms,
    image: "/lovable-uploads/6b99bf90-d463-41b5-bc65-e39c7bd80812.png",
    description: language === 'ar' ? "حمام فاخر بجدران رخامية وتشطيبات سوداء أنيقة" : "Luxury bathroom with marble walls and elegant black finishes"
  }, {
    id: 21,
    title: language === 'ar' ? "عرض إكسسوارات TOKO المتنوعة" : "TOKO Diverse Accessories Display",
    category: t.accessories,
    image: "/lovable-uploads/a3e639b1-ed82-419c-addb-c6d957cc408f.png",
    description: language === 'ar' ? "معرض شامل لإكسسوارات TOKO الحديثة والأنيقة" : "Comprehensive display of modern and elegant TOKO accessories"
  }, {
    id: 22,
    title: language === 'ar' ? "حوض استحمام أسود مع صنبور ذهبي" : "Black Bathtub with Golden Faucet",
    category: t.bathrooms,
    image: "/lovable-uploads/9d48a0e5-4174-4bef-827a-fbb82ed4ed2b.png",
    description: language === 'ar' ? "حوض استحمام أسود أنيق مع صنبور ذهبي وخلفية رخامية" : "Elegant black bathtub with golden faucet and marble background"
  }, {
    id: 23,
    title: language === 'ar' ? "ركن جلوس مريح بتصميم عصري" : "Comfortable Seating Corner with Modern Design",
    category: t.accessories,
    image: "/lovable-uploads/1d5c0213-0e34-4497-8267-0cc62b87fa36.png",
    description: language === 'ar' ? "ركن جلوس مريح مع أرفف عرض وإكسسوارات متنوعة" : "Comfortable seating corner with display shelves and diverse accessories"
  }, {
    id: 24,
    title: language === 'ar' ? "حمام فاخر بإضاءة فنية مميزة" : "Luxury Bathroom with Artistic Lighting",
    category: t.bathrooms,
    image: "/lovable-uploads/4c3a6ea7-15b2-44d5-950f-3fb76416d621.png",
    description: language === 'ar' ? "حمام فاخر بحوض أسود وإضاءة فنية مع مرآة مستديرة" : "Luxury bathroom with black tub and artistic lighting with round mirror"
  }, {
    id: 25,
    title: language === 'ar' ? "مساحة عرض الأثاث والإكسسوارات" : "Furniture & Accessories Display Area",
    category: t.accessories,
    image: "/lovable-uploads/51d6f3ef-681b-4454-a28e-01550d21ed53.png",
    description: language === 'ar' ? "مساحة أنيقة لعرض الأثاث والإكسسوارات المنزلية الحديثة" : "Elegant space for displaying modern furniture and home accessories"
  }, {
    id: 26,
    title: language === 'ar' ? "حمام رخامي بمغسلة ذهبية" : "Marble Bathroom with Golden Sink",
    category: t.bathrooms,
    image: "/lovable-uploads/8f4ea90d-110a-42bb-9a4c-d29fab5cd69a.png",
    description: language === 'ar' ? "حمام فاخر بجدران رخامية ومغسلة ذهبية مع إضاءة دافئة" : "Luxury bathroom with marble walls and golden sink with warm lighting"
  }, {
    id: 27,
    title: language === 'ar' ? "حمام متكامل بتصميم عصري" : "Complete Modern Bathroom Design",
    category: t.bathrooms,
    image: "/lovable-uploads/166730c7-f1de-4786-bcbb-9d1fec86135f.png",
    description: language === 'ar' ? "حمام متكامل بجدران رخامية ومغسلة حديثة مع مرآة مضاءة" : "Complete bathroom with marble walls and modern sink with illuminated mirror"
  }, {
    id: 28,
    title: language === 'ar' ? "حمام أنيق بمغسلة خشبية" : "Elegant Bathroom with Wooden Sink",
    category: t.bathrooms,
    image: "/lovable-uploads/7e2f3003-1c14-426c-860b-052db8fbe8e9.png",
    description: language === 'ar' ? "حمام أنيق بمغسلة خشبية وجدران رخامية مع إضاءة معلقة" : "Elegant bathroom with wooden sink and marble walls with pendant lighting"
  }, {
    id: 29,
    title: language === 'ar' ? "حمام فاخر بخامات طبيعية متنوعة" : "Luxury Bathroom with Diverse Natural Materials",
    category: t.bathrooms,
    image: "/lovable-uploads/88ba6ea8-56e8-4735-b149-6f8b131a54c7.png",
    description: language === 'ar' ? "حمام فاخر يجمع بين الخامات الطبيعية المتنوعة والتصميم المعاصر" : "Luxury bathroom combining diverse natural materials with contemporary design"
  }, {
    id: 30,
    title: language === 'ar' ? "مغسلة خشبية دائرية مع صنبور أسود" : "Round Wooden Sink with Black Faucet",
    category: t.sanitaryTools,
    image: "/lovable-uploads/9e14421b-af59-459f-b4a2-a5a20bba48fc.png",
    description: language === 'ar' ? "مغسلة دائرية من الخشب الطبيعي مع صنبور أسود أنيق" : "Round natural wood sink with elegant black faucet"
  }, {
    id: 31,
    title: language === 'ar' ? "حمام رخامي فاخر بإضاءة دائرية مميزة" : "Luxury Marble Bathroom with Distinctive Circular Lighting",
    category: t.bathrooms,
    image: "/lovable-uploads/eeab58b6-6da9-4042-ada0-6c5bbe7fb15b.png",
    description: language === 'ar' ? "حمام فاخر بجدران رخامية وإضاءة دائرية مبتكرة مع تشطيبات ذهبية" : "Luxury bathroom with marble walls and innovative circular lighting with golden finishes"
  }, {
    id: 32,
    title: language === 'ar' ? "معرض أحواض المطابخ الحديثة" : "Modern Kitchen Sinks Gallery",
    category: t.kitchens,
    image: "/lovable-uploads/8aa8d6f3-5d60-48ba-ab5d-8de49bd466d1.png",
    description: language === 'ar' ? "معرض شامل لأحواض المطابخ الحديثة مع تصاميم متنوعة وأنيقة" : "Comprehensive gallery of modern kitchen sinks with diverse and elegant designs"
  }, {
    id: 33,
    title: language === 'ar' ? "مطبخ عصري متكامل بخامات فاخرة" : "Complete Modern Kitchen with Luxury Materials",
    category: t.kitchens,
    image: "/lovable-uploads/4f9aff47-86ee-4f7f-b99f-be11d60a7550.png",
    description: language === 'ar' ? "مطبخ عصري مع رخام طبيعي وأجهزة متطورة وإضاءة مدمجة" : "Modern kitchen with natural marble, advanced appliances and integrated lighting"
  }, {
    id: 34,
    title: language === 'ar' ? "معرض BAGNODESIGN الشامل" : "BAGNODESIGN Comprehensive Gallery",
    category: t.accessories,
    image: "/lovable-uploads/e0efc3d9-9b1d-444c-a750-559276b390d4.png",
    description: language === 'ar' ? "معرض شامل يضم مختلف المنتجات والإكسسوارات من BAGNODESIGN" : "Comprehensive gallery featuring various products and accessories from BAGNODESIGN"
  }, {
    id: 35,
    title: language === 'ar' ? "مرآة دائرية مع مغسلة رخامية أنيقة" : "Circular Mirror with Elegant Marble Sink",
    category: t.bathrooms,
    image: "/lovable-uploads/8cabac5c-f7d5-4125-94a5-a4231c15f166.png",
    description: language === 'ar' ? "تصميم أنيق مع مرآة دائرية ومغسلة رخامية مع إضاءة دافئة" : "Elegant design with circular mirror and marble sink with warm lighting"
  }, {
    id: 36,
    title: language === 'ar' ? "عرض أنظمة الدش المتطورة" : "Advanced Shower Systems Display",
    category: t.sanitaryTools,
    image: "/lovable-uploads/7b5dcc58-4387-4d05-8aeb-aa8c23d6ee14.png",
    description: language === 'ar' ? "مجموعة متنوعة من أنظمة الدش بتشطيبات ذهبية وسوداء حديثة" : "Diverse collection of shower systems with modern golden and black finishes"
  }, {
    id: 37,
    title: language === 'ar' ? "حمام رخامي فاخر بتشطيبات ذهبية" : "Luxury Marble Bathroom with Golden Finishes",
    category: t.bathrooms,
    image: "/lovable-uploads/afb1fa5f-d6cb-4987-a8cc-215960297b0b.png",
    description: language === 'ar' ? "حمام فاخر بجدران رخامية طبيعية ومغسلة مع تشطيبات ذهبية مميزة" : "Luxury bathroom with natural marble walls and sink with distinctive golden finishes"
  }, {
    id: 38,
    title: language === 'ar' ? "حمام مفتوح بحوض أسود أنيق" : "Open Bathroom with Elegant Black Bathtub",
    category: t.bathrooms,
    image: "/lovable-uploads/5d61b391-100f-4211-9905-c3587296fbd4.png",
    description: language === 'ar' ? "تصميم حمام مفتوح مع حوض استحمام أسود وجدران رخامية وإضاءة معلقة" : "Open bathroom design with black bathtub, marble walls and pendant lighting"
  }, {
    id: 39,
    title: language === 'ar' ? "مساحة معيشة فاخرة مفتوحة" : "Luxury Open Living Space",
    category: t.accessories,
    image: "/lovable-uploads/f40e6481-7976-49a1-9622-51df5c3dae7d.png",
    description: language === 'ar' ? "مساحة معيشة فاخرة مفتوحة مع أثاث عصري وإضاءة مبتكرة" : "Luxury open living space with modern furniture and innovative lighting"
  }, {
    id: 40,
    title: language === 'ar' ? "حمام فاخر بخامات طبيعية متنوعة" : "Luxury Bathroom with Diverse Natural Materials",
    category: t.bathrooms,
    image: "/lovable-uploads/592b7bfd-7221-42d6-ba1f-f1a613c16f11.png",
    description: language === 'ar' ? "حمام فاخر يجمع بين الرخام الطبيعي والخشب مع حوض استحمام أبيض أنيق" : "Luxury bathroom combining natural marble and wood with elegant white bathtub"
  }, {
    id: 41,
    title: language === 'ar' ? "معرض الإضاءة والإكسسوارات المنزلية" : "Lighting & Home Accessories Gallery",
    category: t.accessories,
    image: "/lovable-uploads/1c906387-d21f-48cc-b8e1-a3f258918253.png",
    description: language === 'ar' ? "معرض أنيق للإضاءة والإكسسوارات المنزلية مع تصاميم عصرية ومتنوعة" : "Elegant gallery of lighting and home accessories with modern and diverse designs"
  }, {
    id: 42,
    title: language === 'ar' ? "معرض خلاطات المطابخ الحديثة" : "Modern Kitchen Mixers Gallery",
    category: t.kitchens,
    image: "/lovable-uploads/d04a5d33-5de0-4431-84c9-e6ca26caaac0.png",
    description: language === 'ar' ? "معرض شامل لخلاطات المطابخ الحديثة مع مطبخ عرض متكامل" : "Comprehensive gallery of modern kitchen mixers with complete display kitchen"
  }, {
    id: 43,
    title: language === 'ar' ? "عرض منتجات BAGNODESIGN و TOKO" : "BAGNODESIGN & TOKO Products Display",
    category: t.sanitaryTools,
    image: "/lovable-uploads/335c4e5f-0ccd-4f50-b186-3cc1eaf81e94.png",
    description: language === 'ar' ? "عرض متخصص لمنتجات BAGNODESIGN و TOKO من الأدوات الصحية والإكسسوارات" : "Specialized display of BAGNODESIGN and TOKO sanitary products and accessories"
  }, {
    id: 44,
    title: language === 'ar' ? "معرض الحمامات الفاخرة المتكامل" : "Complete Luxury Bathrooms Gallery",
    category: t.bathrooms,
    image: "/lovable-uploads/5fe0b360-3cdb-409d-9b71-5bd4d4270f11.png",
    description: language === 'ar' ? "معرض متكامل للحمامات الفاخرة بجدران رخامية وتصاميم عصرية مبتكرة" : "Complete gallery of luxury bathrooms with marble walls and innovative modern designs"
  }];
  const stats = [{
    icon: Award,
    number: "500+",
    label: t.completedProjects
  }, {
    icon: Clock,
    number: "15+",
    label: t.yearsExperience
  }, {
    icon: Users,
    number: "100%",
    label: t.customerSatisfaction
  }, {
    icon: Shield,
    number: "24/7",
    label: t.customerService
  }];
  const services = [{
    title: t.bathroomDesign,
    description: t.bathroomDesc
  }, {
    title: t.kitchenDesign,
    description: t.kitchenDesc
  }, {
    title: t.sanitarySupply,
    description: t.sanitaryDesc
  }, {
    title: t.lightingDesign,
    description: t.lightingDesc
  }, {
    title: t.designConsultation,
    description: t.designConsultationDesc
  }];
  return <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top Contact Bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center text-sm text-gray-600 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              <div className={`flex items-center space-x-2 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                <MapPin className="h-4 w-4" />
                <span>{language === 'ar' ? 'دبي، الإمارات العربية المتحدة' : 'Find us: Dubai, UAE'}</span>
              </div>
              <div className={`flex items-center space-x-2 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                <Phone className="h-4 w-4" />
                <span>+971 4 507 6000</span>
              </div>
            </div>
            <div className={`flex items-center space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              <span className="hidden sm:block">
                {language === 'ar' ? 'توصيل مجاني خلال 48 ساعة لأكثر من 500 درهم في جميع أنحاء الإمارات' : 'Free 48H delivery over AED 500 across UAE'}
              </span>
              <span className="hidden sm:block">
                {language === 'ar' ? 'انقر واجمع في جميع أنحاء الإمارات' : 'Click & collect across UAE'}
              </span>
              <Button
                variant="outline"
                onClick={toggleLanguage}
                size="sm"
              >
                {language === 'ar' ? 'English' : 'عربي'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b relative sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center py-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              <h1 className="text-3xl font-bold text-gray-900">BAGNODESIGN</h1>
              <span className="text-sm text-gray-500 hidden sm:block">
                {language === 'ar' ? 'معرض الحمامات والمطابخ' : 'BATHROOM & KITCHEN GALLERY'}
              </span>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'البحث...' : 'Search'}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                />
                <button className={`absolute ${language === 'ar' ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2`}>
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className={`flex items-center space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              <div className="hidden md:block">
                <Link to="/brochures" className={`flex items-center space-x-2 text-gray-600 hover:text-blue-600 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                  <BookOpen className="h-5 w-5" />
                  <span>{language === 'ar' ? 'الكتالوجات' : 'Brochures'}</span>
                </Link>
              </div>
              <div className="relative">
                <Button variant="ghost" size="sm" onClick={() => setShowMenu(!showMenu)} className="p-2">
                  <Menu className="w-6 h-6" />
                </Button>
                
                {showMenu && <div className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} top-full mt-2 w-48 bg-white rounded-lg shadow-lg border z-50`}>
                    <div className="py-2">
                      <a href="#home" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                        <Home className="w-4 h-4" />
                        {t.home}
                      </a>
                      <Link to="/about" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                        <User className="w-4 h-4" />
                        {t.about}
                      </Link>
                      <a href="#products" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                        <ShoppingBag className="w-4 h-4" />
                        {t.products}
                      </a>
                      <Link to="/brochures" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                        <BookOpen className="w-4 h-4" />
                        {language === 'ar' ? 'البروشيرز' : 'Brochures'}
                      </Link>
                      <a href="#contact" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                        <MessageCircle className="w-4 h-4" />
                        {t.contact}
                      </a>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className={`flex items-center space-x-8 py-4 overflow-x-auto ${language === 'ar' ? 'space-x-reverse flex-row-reverse' : ''}`}>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'الحمامات' : 'Bathroom'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'البلاط والألواح' : 'Tiles & Slabs'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'المطابخ' : 'Kitchen'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'الخارجي' : 'Outdoor'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'الإضاءة' : 'Lighting'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'الضيافة' : 'Hospitality'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'نمط الحياة' : 'Lifestyle'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'الهدايا' : 'Gifts'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'العلامات التجارية' : 'Brands'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'المشاريع' : 'Projects'}
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium whitespace-nowrap">
                {language === 'ar' ? 'الإلهام' : 'Inspiration'}
              </a>
              <Button variant="destructive" size="sm" className={`${language === 'ar' ? 'mr-auto' : 'ml-auto'} whitespace-nowrap`}>
                {language === 'ar' ? 'تخفيضات' : 'SALE'}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-bold">
              {language === 'ar' ? 'تخفيضات جزئية 25%-75%' : 'PART SALE 25%-75%'}
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Promotional Section */}
      <section className="bg-gradient-to-br from-gray-200 via-gray-300 to-blue-200 relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-orange-400 text-4xl animate-bounce">☀️</div>
        <div className="absolute bottom-20 right-20 text-blue-300 text-2xl">✨</div>
        <div className="absolute top-20 right-40 text-blue-300 text-2xl">✨</div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'} ${language === 'ar' ? 'lg:order-2' : ''}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {language === 'ar' ? 'تخفيضات جزئية صيفية' : 'Summer Part Sale'}
              </h1>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-6">
                <div className="text-center mb-6">
                  <h2 className="text-5xl md:text-7xl font-bold mb-2">
                    <span className="text-yellow-600">
                      {language === 'ar' ? 'تخفيضات جزئية' : 'PART SALE'}
                    </span>
                  </h2>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <span className="text-4xl md:text-6xl font-bold text-blue-600">
                        25<span className="text-2xl">%</span>
                      </span>
                      <div className="text-sm text-blue-600 font-semibold">
                        {language === 'ar' ? 'خصم' : 'OFF'}
                      </div>
                    </div>
                    <span className="text-4xl md:text-6xl font-bold text-gray-400">-</span>
                    <div className="text-center">
                      <span className="text-4xl md:text-6xl font-bold text-blue-600">
                        75<span className="text-2xl">%</span>
                      </span>
                      <div className="text-sm text-blue-600 font-semibold">
                        {language === 'ar' ? 'خصم' : 'OFF'}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                    {language === 'ar' ? 'متوفر أونلاين وفي صالات العرض' : 'AVAILABLE ONLINE & IN SHOWROOMS'}
                  </Button>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 text-lg font-semibold">
                    {language === 'ar' ? 'تسوق الآن' : 'SHOP NOW'}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right Side - Category Grid */}
            <div className={`${language === 'ar' ? 'lg:order-1' : ''}`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/90 backdrop-blur-lg p-4 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border border-gray-200">
                  <h3 className="font-semibold text-sm text-gray-800 tracking-wide">
                    {language === 'ar' ? 'السبا والعافية' : 'SPA & WELLNESS'}
                  </h3>
                </div>
                <div className="bg-white/90 backdrop-blur-lg p-4 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border border-gray-200">
                  <h3 className="font-semibold text-sm text-gray-800 tracking-wide">
                    {language === 'ar' ? 'مستلزمات الفنادق' : 'HOTEL AMENITIES'}
                  </h3>
                </div>
                <div className="bg-white/90 backdrop-blur-lg p-4 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border border-gray-200">
                  <h3 className="font-semibold text-sm text-gray-800 tracking-wide">
                    {language === 'ar' ? 'أسلوب الحياة للمطبخ' : 'KITCHEN LIFESTYLE'}
                  </h3>
                </div>
                <div className="bg-white/90 backdrop-blur-lg p-4 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border border-gray-200">
                  <h3 className="font-semibold text-sm text-gray-800 tracking-wide">
                    {language === 'ar' ? 'البلاط والألواح' : 'TILES & SLABS'}
                  </h3>
                </div>
                <div className="bg-white/90 backdrop-blur-lg p-4 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border border-gray-200">
                  <h3 className="font-semibold text-sm text-gray-800 tracking-wide">
                    {language === 'ar' ? 'الإضاءة' : 'LIGHTING'}
                  </h3>
                </div>
                <div className="bg-white/90 backdrop-blur-lg p-4 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border border-gray-200">
                  <h3 className="font-semibold text-sm text-gray-800 tracking-wide">
                    {language === 'ar' ? 'الحياة الخارجية' : 'OUTDOOR LIVING'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGNODESIGN'S STORY Section - Collapsible */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <Collapsible defaultOpen={false}>
              <CollapsibleTrigger asChild>
                <div className="cursor-pointer group hover:scale-105 transition-transform duration-300">
                  <h2 className={`text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight ${language === 'ar' ? 'text-right' : 'text-left'} md:text-center`}>
                    {language === 'ar' ? 'قصة BAGNODESIGN مصر' : "BAGNODESIGN'S STORY - EGYPT"}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
                  <div className="flex items-center justify-center mt-4">
                    <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm text-gray-500 ml-2">
                      {language === 'ar' ? 'انقر للمزيد' : 'Click to expand'}
                    </span>
                  </div>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-8 text-gray-700 mt-12">
                {/* Egypt Branch Opening Announcement */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-2xl">
                  <div className={`text-center ${language === 'ar' ? 'text-right' : 'text-left'} md:text-center`}>
                    <h3 className="text-3xl font-bold mb-4">
                      {language === 'ar' ? '🎉 الافتتاح الكبير - فرع مصر الجديد!' : '🎉 Grand Opening - New Egypt Branch!'}
                    </h3>
                    <p className="text-xl mb-6">
                      {language === 'ar' 
                        ? 'نفخر بافتتاح أحدث فروعنا في قلب القاهرة، مصر - مركز جديد للتميز في تصميم الحمامات والمطابخ'
                        : 'Proudly opening our newest branch in the heart of Cairo, Egypt - A new center of excellence for bathroom and kitchen design'
                      }
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
                      <h4 className="text-2xl font-bold text-yellow-300 mb-3">
                        {language === 'ar' ? '🏆 عروض الافتتاح الحصرية' : '🏆 Exclusive Opening Offers'}
                      </h4>
                      <ul className={`space-y-2 text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                        <li>✨ {language === 'ar' ? 'خصم 30% على جميع مجموعات الحمامات الفاخرة' : '30% off all luxury bathroom collections'}</li>
                        <li>🎁 {language === 'ar' ? 'تركيب مجاني للمشاريع التي تزيد عن 50,000 جنيه' : 'Free installation for projects over EGP 50,000'}</li>
                        <li>🚚 {language === 'ar' ? 'توصيل مجاني في جميع أنحاء القاهرة الكبرى' : 'Free delivery throughout Greater Cairo'}</li>
                        <li>💎 {language === 'ar' ? 'استشارة تصميم مجانية مع خبراء دوليين' : 'Free design consultation with international experts'}</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-lg font-semibold">
                        {language === 'ar' ? 'العرض ساري حتى نهاية الشهر!' : 'Offer valid until end of month!'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* About Egypt Branch */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <h4 className="text-2xl font-bold text-blue-600 mb-4">
                    {language === 'ar' ? '🏢 فرع BAGNODESIGN مصر' : '🏢 BAGNODESIGN Egypt Branch'}
                  </h4>
                  <p className={`text-lg leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar'
                      ? 'يقع فرعنا الجديد في موقع استراتيجي بقلب القاهرة، ويمتد على مساحة 2000 متر مربع من صالات العرض المتطورة. نقدم أحدث التصاميم الأوروبية والعالمية في عالم الحمامات والمطابخ الفاخرة، مع فريق من المصممين المصريين والدوليين ذوي الخبرة العالية.'
                      : 'Located strategically in the heart of Cairo, our new branch spans 2,000 square meters of cutting-edge showroom space. We offer the latest European and international designs in luxury bathrooms and kitchens, with a team of highly experienced Egyptian and international designers.'
                    }
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <h4 className="text-2xl font-bold text-green-600 mb-4">
                    {language === 'ar' ? '🌟 خدماتنا في مصر' : '🌟 Our Services in Egypt'}
                  </h4>
                  <div className={`grid md:grid-cols-2 gap-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div>
                      <h5 className="font-semibold text-purple-600 mb-2">
                        {language === 'ar' ? 'التصميم والاستشارة' : 'Design & Consultation'}
                      </h5>
                      <p className="text-gray-700">
                        {language === 'ar'
                          ? 'فريق من أمهر المصممين لتحويل رؤيتك إلى واقع مذهل'
                          : 'Expert designers to transform your vision into stunning reality'
                        }
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-600 mb-2">
                        {language === 'ar' ? 'التنفيذ والتركيب' : 'Implementation & Installation'}
                      </h5>
                      <p className="text-gray-700">
                        {language === 'ar'
                          ? 'تنفيذ مشاريع بأعلى معايير الجودة والدقة'
                          : 'Project execution with the highest standards of quality and precision'
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <h4 className="text-2xl font-bold text-indigo-600 mb-4">
                    {language === 'ar' ? '📍 موقعنا ومعلومات الاتصال' : '📍 Location & Contact Information'}
                  </h4>
                  <div className={`space-y-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} space-x-3`}>
                      <MapPin className="h-5 w-5 text-red-500" />
                      <span>
                        {language === 'ar' 
                          ? 'القاهرة الجديدة - التجمع الخامس - شارع التسعين الشمالي'
                          : 'New Cairo - Fifth Settlement - North 90th Street'
                        }
                      </span>
                    </div>
                    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} space-x-3`}>
                      <Phone className="h-5 w-5 text-green-500" />
                      <span>+20 2 27540000</span>
                    </div>
                    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} space-x-3`}>
                      <Mail className="h-5 w-5 text-blue-500" />
                      <span>egypt@bagnodesign.com</span>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>
      

      {/* Stats Section */}
      

      {/* About Section */}
      

      {/* Services Section */}
      

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
            {products.map(product => <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img src={product.image} alt={product.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                      <div className="relative">
                        <img src={product.image} alt={product.title} className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">{t.viewDetails}</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="space-y-4">
                        <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                          <Badge className="mb-3">{product.category}</Badge>
                          <p className="text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex gap-3">
                            
                            <Button variant="outline" className="flex-1">
                              <Heart className="w-4 h-4 mr-2" />
                              {language === 'ar' ? 'إضافة للمفضلة' : 'Add to Favorites'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Catalogs Section */}
      <section id="catalogs" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className={`mb-16 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.catalogsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.catalogsDescription}
            </p>
          </div>
          
          {/* Main Catalogs Grid - Responsive and Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            
            {/* Bathroom Catalog */}
            <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                  <img src="/lovable-uploads/3e1561ad-88fc-4549-8a29-117ec509071b.png" alt="Bathroom sanitaryware & brassware" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Premium</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {language === 'ar' ? 'أدوات صحية ونحاسية للحمامات' : 'Bathroom Sanitaryware & Brassware'}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {language === 'ar' ? 'استكشف مجموعتنا الكاملة من أدوات الحمامات الصحية والنحاسية عالية الجودة من العلامات التجارية الرائدة' : 'Explore our complete collection of premium bathroom sanitaryware and brassware from leading brands'}
                </p>
                <div className="space-y-3 pt-2">
                  <Button className={`w-full ${language === 'ar' ? 'flex-row-reverse' : ''}`} size="default" onClick={() => {
                  // Create a dummy download for demo
                  const link = document.createElement('a');
                  link.href = 'data:text/plain;charset=utf-8,Bathroom Catalog - BAGNODESIGN';
                  link.download = 'bathroom-catalog.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}>
                    <Download className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {t.downloadCatalog}
                  </Button>
                  <div className="grid grid-cols-2 gap-2 mx-0 px-0">
                    <Button variant="outline" className="flex-1" size="default">
                      {t.viewCatalog}
                    </Button>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kitchen Catalog */}
            <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 p-4">
                  <img src="/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png" alt="Kitchen LifeStyle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent/10 text-accent border-accent/20">Luxury</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {language === 'ar' ? 'أسلوب حياة المطبخ' : 'Kitchen LifeStyle'}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {language === 'ar' ? 'اكتشف أجهزة المطبخ الفاخرة من العلامات التجارية الرائدة، بما في ذلك الأفران والثلاجات ومبردات النبيذ والأحواض وصنابير المطبخ' : 'Discover luxury kitchen appliances by leading brands, including ovens, refrigerators, wine coolers, sinks, and kitchen taps'}
                </p>
                <div className="space-y-3 pt-2">
                  <Button className={`w-full ${language === 'ar' ? 'flex-row-reverse' : ''}`} size="default">
                    <Download className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {t.downloadCatalog}
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="flex-1" size="default">
                      {t.viewCatalog}
                    </Button>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Outdoor Living Catalog */}
            <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 p-4">
                  <img src="/lovable-uploads/183de876-71b4-448d-a15e-10633d816508.png" alt="Outdoor Living 2024" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Outdoor</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {language === 'ar' ? 'الحياة الخارجية' : 'Outdoor Living'}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {language === 'ar' ? 'اكتشف مجموعة الأثاث الخارجي، من المدافئ إلى الأثاث المصمم والإضاءة والإكسسوارات المبتكرة' : 'Discover our outdoor furniture range, from fire pits to designer furniture, lighting, and innovative accessories'}
                </p>
                <div className="space-y-3 pt-2">
                  <Button className={`w-full ${language === 'ar' ? 'flex-row-reverse' : ''}`} size="default">
                    <Download className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {t.downloadCatalog}
                  </Button>
                  <Button variant="outline" className="w-full" size="default">
                    {t.viewCatalog}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tiles & Surfaces Catalog */}
            <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 p-4">
                  <img src="/lovable-uploads/e72c357d-8f6e-4527-8d31-7e6824ca05bf.png" alt="Tiles & Surfaces" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20">Surfaces</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {language === 'ar' ? 'البلاط والأسطح' : 'Tiles & Surfaces'}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {language === 'ar' ? 'مجموعة شاملة من البلاط والأسطح عالية الجودة للمساحات الداخلية والخارجية' : 'Comprehensive collection of premium tiles and surfaces for indoor and outdoor spaces'}
                </p>
                <div className="space-y-3 pt-2">
                  <Button className={`w-full ${language === 'ar' ? 'flex-row-reverse' : ''}`} size="default">
                    <Download className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {t.downloadCatalog}
                  </Button>
                  <Button variant="outline" className="w-full" size="default">
                    {t.viewCatalog}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sub-Catalogs Section */}
          <div className="mt-16">
            <div className={`mb-8 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {language === 'ar' ? 'كاتلوجات متخصصة' : 'Specialized Catalogs'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' ? 'استكشف مجموعاتنا المتخصصة لاحتياجات التصميم المحددة' : 'Explore our specialized collections for specific design needs'}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              
              {/* Small Format Tiles */}
              <Card className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                    <img src="/lovable-uploads/a2126c93-c0af-4266-98af-d491626a5d3d.png" alt="Tiles Small Format" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded" />
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h4 className="font-semibold text-foreground text-sm leading-tight">
                    {language === 'ar' ? 'بلاط صغير الحجم' : 'Small Format Tiles'}
                  </h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className={`flex-1 text-xs ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Download className={`w-3 h-3 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </Button>
                    <Button size="sm" className="flex-1 text-xs">
                      {language === 'ar' ? 'عرض' : 'View'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Slabs */}
              <Card className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                    <img src="/lovable-uploads/bba40e6d-99ca-439a-ba78-e6be4a86e467.png" alt="Slabs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded" />
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h4 className="font-semibold text-foreground text-sm leading-tight">
                    {language === 'ar' ? 'ألواح' : 'Slabs'}
                  </h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className={`flex-1 text-xs ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Download className={`w-3 h-3 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </Button>
                    <Button size="sm" className="flex-1 text-xs">
                      {language === 'ar' ? 'عرض' : 'View'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Hokkaido */}
              <Card className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                    <img src="/lovable-uploads/23b17f8b-be1f-4a09-a21b-8458bc4c711d.png" alt="Hokkaido Surfaces" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded" />
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h4 className="font-semibold text-foreground text-sm leading-tight">
                    {language === 'ar' ? 'هوكايدو' : 'Hokkaido'}
                  </h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className={`flex-1 text-xs ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Download className={`w-3 h-3 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </Button>
                    <Button size="sm" className="flex-1 text-xs">
                      {language === 'ar' ? 'عرض' : 'View'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Outdoor Tiles */}
              <Card className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${language === 'ar' ? 'text-right' : 'text-center'}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                    <img src="/lovable-uploads/14d2fb65-2d50-4ef5-b5d0-b7f5e2d1b05d.png" alt="Outdoor Tiles & Landscape Lighting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded" />
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h4 className="font-semibold text-foreground text-sm leading-tight">
                    {language === 'ar' ? 'بلاط خارجي وإضاءة' : 'Outdoor Tiles & Lighting'}
                  </h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className={`flex-1 text-xs ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Download className={`w-3 h-3 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </Button>
                    <Button size="sm" className="flex-1 text-xs">
                      {language === 'ar' ? 'عرض' : 'View'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Digital Catalogs Placeholder */}
              
            </div>
          </div>
        </div>
      </section>

      {/* 3D Virtual Experiences Section */}
      

      {/* AR Features Section */}
      

      {/* New Features Section */}
      

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
      

      {/* 3D Virtual Experiences */}
      <VirtualGallery isOpen={showVirtualGallery} onClose={() => setShowVirtualGallery(false)} language={language} />

      <Image360Viewer isOpen={show360Viewer} onClose={() => {
      setShow360Viewer(false);
      setCurrent360Image(null);
    }} imageUrl={current360Image?.url || ''} title={current360Image?.title || ''} description={current360Image?.description || ''} language={language} />
    </div>;
};
export default Index;