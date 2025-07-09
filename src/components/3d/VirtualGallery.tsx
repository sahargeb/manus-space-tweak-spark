import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, useTexture, Html, Environment, PerspectiveCamera } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Download, Eye, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import * as THREE from 'three';

interface CatalogItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  position: [number, number, number];
}

const catalogItems: CatalogItem[] = [
  {
    id: '1',
    title: 'Bathroom Sanitaryware',
    image: '/lovable-uploads/3e1561ad-88fc-4549-8a29-117ec509071b.png',
    description: 'Premium bathroom fixtures and fittings',
    category: 'Bathroom',
    position: [-4, 1, -2]
  },
  {
    id: '2',
    title: 'Kitchen Lifestyle',
    image: '/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png',
    description: 'Modern kitchen appliances and solutions',
    category: 'Kitchen',
    position: [0, 1, -3]
  },
  {
    id: '3',
    title: 'Outdoor Living',
    image: '/lovable-uploads/183de876-71b4-448d-a15e-10633d816508.png',
    description: 'Outdoor furniture and accessories',
    category: 'Outdoor',
    position: [4, 1, -2]
  },
  {
    id: '4',
    title: 'Tiles & Surfaces',
    image: '/lovable-uploads/a2126c93-c0af-4266-98af-d491626a5d3d.png',
    description: 'Premium tiles and surface materials',
    category: 'Tiles',
    position: [-2, 1, 2]
  },
  {
    id: '5',
    title: 'Slabs Collection',
    image: '/lovable-uploads/bba40e6d-99ca-439a-ba78-e6be4a86e467.png',
    description: 'Natural stone and engineered slabs',
    category: 'Slabs',
    position: [2, 1, 2]
  }
];

interface CatalogFrameProps {
  item: CatalogItem;
  onClick: () => void;
  isSelected: boolean;
}

function CatalogFrame({ item, onClick, isSelected }: CatalogFrameProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(item.image);
  
  useFrame((state) => {
    if (meshRef.current && !isSelected) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const frameColor = isSelected ? '#ff6b35' : '#8b5a3c';
  
  return (
    <group position={item.position}>
      {/* Frame */}
      <Box
        args={[2.2, 1.5, 0.1]}
        position={[0, 0, -0.05]}
      >
        <meshStandardMaterial color={frameColor} />
      </Box>
      
      {/* Image */}
      <Plane
        ref={meshRef}
        args={[2, 1.4]}
        onClick={onClick}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={isSelected ? 1 : 0.9}
        />
      </Plane>
      
      {/* Title */}
      <Text
        position={[0, -1, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        {item.title}
      </Text>
      
      {/* Category Badge */}
      <Text
        position={[0, 0.9, 0.01]}
        fontSize={0.08}
        color="#ff6b35"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        {item.category}
      </Text>
      
      {/* Floating info on hover */}
      <Html
        position={[0, -1.5, 0]}
        center
        style={{
          opacity: isSelected ? 1 : 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none'
        }}
      >
        <Card className="w-64 bg-background/90 backdrop-blur-sm border-primary/20">
          <CardContent className="p-3">
            <div className="space-y-2">
              <Badge variant="secondary">{item.category}</Badge>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 text-xs">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Html>
    </group>
  );
}

function GalleryFloor() {
  return (
    <Plane
      args={[20, 20]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
    >
      <meshStandardMaterial
        color="#2a2a2a"
        roughness={0.8}
        metalness={0.2}
      />
    </Plane>
  );
}

function GalleryWalls() {
  return (
    <>
      {/* Back wall */}
      <Plane
        args={[20, 8]}
        position={[0, 3.5, -5]}
      >
        <meshStandardMaterial color="#3a3a3a" />
      </Plane>
      
      {/* Left wall */}
      <Plane
        args={[10, 8]}
        position={[-10, 3.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="#3a3a3a" />
      </Plane>
      
      {/* Right wall */}
      <Plane
        args={[10, 8]}
        position={[10, 3.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="#3a3a3a" />
      </Plane>
    </>
  );
}

function GalleryLighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 5, 0]} intensity={0.5} />
      <pointLight position={[-5, 3, -2]} intensity={0.3} color="#ff6b35" />
      <pointLight position={[5, 3, -2]} intensity={0.3} color="#4fc3f7" />
    </>
  );
}

interface VirtualGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export default function VirtualGallery({ isOpen, onClose, language }: VirtualGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 2, 8]);

  if (!isOpen) return null;

  const resetCamera = () => {
    setCameraPosition([0, 2, 8]);
    setSelectedItem(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="relative w-full h-full">
        {/* Controls */}
        <div className="absolute top-4 left-4 z-10 space-y-2">
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-4">
              <h3 className="font-bold mb-2">
                {language === 'ar' ? 'المعرض الافتراضي' : 'Virtual Gallery'}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {language === 'ar' 
                  ? 'انقر واسحب للتنقل، اسحب العجلة للتكبير' 
                  : 'Click and drag to navigate, scroll to zoom'}
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={resetCamera}>
                  <RotateCcw className="w-4 h-4 mr-1" />
                  {language === 'ar' ? 'إعادة تعيين' : 'Reset'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Close button */}
        <Button
          onClick={onClose}
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* 3D Canvas */}
        <Canvas
          shadows
          camera={{ position: cameraPosition, fov: 75 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <Environment preset="warehouse" />
            <GalleryLighting />
            <GalleryFloor />
            <GalleryWalls />
            
            {catalogItems.map((item) => (
              <CatalogFrame
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                isSelected={selectedItem === item.id}
              />
            ))}
            
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minDistance={3}
              maxDistance={15}
            />
          </Suspense>
        </Canvas>

        {/* Loading fallback */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">
                {language === 'ar' ? 'جاري تحميل المعرض...' : 'Loading gallery...'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}