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
  const [language, setLanguage] = useState('en');
  const [tilesExpanded, setTilesExpanded] = useState(false);
  const [showVirtualGallery, setShowVirtualGallery] = useState(false);
  const [show360Viewer, setShow360Viewer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState('');
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
    id: 0,
    title: language === 'ar' ? "مقر BAGNODESIGN الرئيسي" : "BAGNODESIGN Main Showroom",
    category: language === 'ar' ? "المعرض الرئيسي" : "Main Showroom",
    image: "/lovable-uploads/950fa16a-992c-4d30-bf67-0a0f88707089.png",
    description: language === 'ar' ? "مقر شركة BAGNODESIGN للحمامات والمطابخ الفاخرة" : "BAGNODESIGN headquarters for luxury bathrooms and kitchens"
  }, {
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
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-end justify-center pb-4 sm:pb-6 md:pb-8" style={{
      backgroundImage: `url('/lovable-uploads/03159fbd-3b58-48fe-94b2-9e367a5243c9.png')`
    }}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Header Buttons on Image */}
        <div className="absolute top-0 left-0 right-0 z-20 p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between">
            {/* Language Toggle - Responsive */}
            <Button variant="outline" size="sm" onClick={toggleLanguage} className="text-xs sm:text-sm md:text-lg px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white/95">
              {language === 'ar' ? 'EN' : 'AR'}
            </Button>
            
            {/* 3-dot Menu - Responsive */}
            <div className="relative">
              <Button variant="ghost" size="sm" onClick={() => setShowMenu(!showMenu)} className="p-1.5 sm:p-2 md:p-4 bg-white/90 backdrop-blur-sm hover:bg-white/95 rounded-lg">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </Button>
              
              {showMenu && <div className="absolute right-0 top-full mt-2 w-44 sm:w-48 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    <a href="#home" className="flex items-center gap-3 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                      <Home className="w-4 h-4" />
                      {t.home}
                    </a>
                    <Link to="/about" className="flex items-center gap-3 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                      <User className="w-4 h-4" />
                      {t.about}
                    </Link>
                    <a href="#products" className="flex items-center gap-3 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                      <ShoppingBag className="w-4 h-4" />
                      {t.products}
                    </a>
                    <Link to="/brochures" className="flex items-center gap-3 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                      <BookOpen className="w-4 h-4" />
                      {language === 'ar' ? 'البروشيرز' : 'Brochures'}
                    </Link>
                    <a href="#contact" className="flex items-center gap-3 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setShowMenu(false)}>
                      <MessageCircle className="w-4 h-4" />
                      {t.contact}
                    </a>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-3 sm:px-4">
          {/* Category Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto">
            {/* First Row */}
            <div className="bg-white/90 backdrop-blur-lg p-2 sm:p-3 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl border border-gray-200 group">
              <h3 className="font-semibold text-xs sm:text-sm text-gray-800 tracking-wide">
                <span className="drop-shadow-lg">SPA & WELLNESS</span>
              </h3>
            </div>
            <div className="bg-white/90 backdrop-blur-lg p-2 sm:p-3 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl border border-gray-200 group">
              <h3 className="font-semibold text-xs sm:text-sm text-gray-800 tracking-wide">
                <span className="drop-shadow-lg">HOTEL AMENITIES</span>
              </h3>
            </div>
            <div className="bg-white/90 backdrop-blur-lg p-2 sm:p-3 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl border border-gray-200 group col-span-2 sm:col-span-1">
              <h3 className="font-semibold text-xs sm:text-sm text-gray-800 tracking-wide">
                <span className="drop-shadow-lg">KITCHEN LIFESTYLE</span>
              </h3>
            </div>
            
            {/* Second Row */}
            <div className="bg-white/90 backdrop-blur-lg p-2 sm:p-3 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl border border-gray-200 group">
              <h3 className="font-semibold text-xs sm:text-sm text-gray-800 tracking-wide">
                <span className="drop-shadow-lg">TILES & SLABS</span>
              </h3>
            </div>
            <div className="bg-white/90 backdrop-blur-lg p-2 sm:p-3 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl border border-gray-200 group">
              <h3 className="font-semibold text-xs sm:text-sm text-gray-800 tracking-wide">
                <span className="drop-shadow-lg">LIGHTING</span>
              </h3>
            </div>
            <div className="bg-white/90 backdrop-blur-lg p-2 sm:p-3 rounded-lg text-center hover:bg-white/95 hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl border border-gray-200 group col-span-2 sm:col-span-1">
              <h3 className="font-semibold text-xs sm:text-sm text-gray-800 tracking-wide">
                <span className="drop-shadow-lg">OUTDOOR LIVING</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* BAGNODESIGN'S STORY Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-3 sm:px-4 max-w-5xl">
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
              {language === 'ar' ? 'قصة BAGNODESIGN' : "BAGNODESIGN'S STORY"}
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-700">
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">BAGNODESIGN</span> offers complete solutions for creating dream bathrooms. Our knowledgeable and talented team draws on years of experience to bring you the finest in design-led, contemporary, and classic collections.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Find the inspiration you need from our extensive range of <span className="font-semibold text-emerald-700">sanitaryware, furniture, brassware, accessories, bath & shower components, and spa solutions</span>. Transforming the most personal spaces into spa-like sanctuaries, BAGNODESIGN is where comfort meets quality and function meets the latest artisanal thinking.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                From sculptural washbasins crafted from the finest materials in a wonderful array of colors, to beautiful functional furniture to suit any scheme, baths and showers that invite rejuvenation, and stunning brassware and accessories in an enviable range of <span className="font-semibold text-orange-700">trendsetting finishes</span>.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Backed by a reputable product portfolio and strategically located logistics centers, BAGNODESIGN is positioned to deliver your next project, serving <span className="font-semibold text-indigo-700">architects, designers, developers, retailers, and consumers</span> across all sectors from large commercial to private residential projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Stats Section */}
      

      {/* About Section */}
      

      {/* Services Section */}
      

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">{t.productsTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              {t.productsDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map(product => <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img src={product.image} alt={product.title} className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-4xl w-full p-2 sm:p-0 bg-transparent border-none">
                      <div className="relative">
                        <img src={product.image} alt={product.title} className="w-full h-auto max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg" />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <Badge variant="secondary" className="text-xs sm:text-sm">{product.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full mt-3 text-xs sm:text-sm">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {t.viewDetails}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-2xl">
                      <div className="space-y-4">
                        <img src={product.image} alt={product.title} className="w-full h-48 sm:h-64 object-cover rounded-lg" />
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{product.title}</h3>
                          <Badge className="mb-3 text-xs sm:text-sm">{product.category}</Badge>
                          <p className="text-sm sm:text-base text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex gap-2 sm:gap-3">
                            <Button variant="outline" className="flex-1 text-xs sm:text-sm">
                              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
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
      

      {/* 3D Virtual Experiences Section */}
      

      {/* AR Features Section */}
      

      {/* New Features Section */}
      

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Link to="/brochures">
              <Button variant="outline" size="lg" className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                BROCHURES
              </Button>
            </Link>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">{t.contactTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              {t.contactDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center p-3 sm:p-4 md:p-6">
              <button onClick={() => setShowContactInfo('phone')} className="block w-full">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <span className="block mt-2 text-xs sm:text-sm text-muted-foreground">
                  {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                </span>
              </button>
            </div>
            
            <div className="text-center p-3 sm:p-4 md:p-6">
              <button onClick={() => setShowContactInfo('email')} className="block w-full">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <span className="block mt-2 text-xs sm:text-sm text-muted-foreground">
                  {language === 'ar' ? 'راسلنا' : 'Email Us'}
                </span>
              </button>
            </div>
            
            <div className="text-center p-3 sm:p-4 md:p-6">
              <a href="https://maps.app.goo.gl/BJRtY19x8amtMckF8?g_st=ac" target="_blank" rel="noopener noreferrer" className="block">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <span className="block mt-2 text-xs sm:text-sm text-muted-foreground">
                  {language === 'ar' ? 'زورنا' : 'Visit Us'}
                </span>
              </a>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6">
              <a href="https://www.instagram.com/bagnodesignmisr?igsh=NW8yM3V3Mm1yczVh" target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="block mt-2 text-xs sm:text-sm text-muted-foreground">
                  Instagram
                </span>
              </a>
            </div>
          </div>

          {/* Website Link */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <a href="https://www.sanipexgroup.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm sm:text-base md:text-lg font-medium underline decoration-primary break-all">
              www.sanipexgroup.com
            </a>
          </div>

          {/* Contact Info Display */}
          {showContactInfo && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
              <div className="bg-background rounded-lg p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md w-full mx-3 sm:mx-4 text-center relative">
                <button onClick={() => setShowContactInfo('')} className="absolute top-3 sm:top-4 right-3 sm:right-4 text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                {showContactInfo === 'phone' && <div>
                    <Phone className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">0226134401</p>
                    <Button asChild className="w-full text-sm sm:text-base">
                      <a href="tel:0226134401">
                        {language === 'ar' ? 'اتصال الآن' : 'Call Now'}
                      </a>
                    </Button>
                  </div>}
                
                {showContactInfo === 'email' && <div>
                    <Mail className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      {language === 'ar' ? 'راسلنا' : 'Email Us'}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 break-all">Info@bagnodesignmisr.com</p>
                    <Button asChild className="w-full text-sm sm:text-base">
                      <a href="mailto:Info@bagnodesignmisr.com">
                        {language === 'ar' ? 'إرسال إيميل' : 'Send Email'}
                      </a>
                    </Button>
                  </div>}
              </div>
            </div>}
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