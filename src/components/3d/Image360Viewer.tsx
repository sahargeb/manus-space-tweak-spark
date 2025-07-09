import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture, Html, PerspectiveCamera } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, RotateCcw, Info, Download, Share } from 'lucide-react';
import * as THREE from 'three';

interface Hotspot {
  id: string;
  position: [number, number, number];
  title: string;
  description: string;
  link?: string;
}

interface Image360ViewerProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
  hotspots?: Hotspot[];
  language: string;
}

function Hotspot({ hotspot, onClick }: { hotspot: Hotspot; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  return (
    <group position={hotspot.position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <circleGeometry args={[0.05, 16]} />
        <meshBasicMaterial
          color="#ff6b35"
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Hotspot ring */}
      <mesh>
        <ringGeometry args={[0.05, 0.08, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

function Image360Sphere({ imageUrl }: { imageUrl: string }) {
  const texture = useTexture(imageUrl);
  
  // Flip the texture for inside view
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  
  return (
    <Sphere args={[10, 64, 32]}>
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
      />
    </Sphere>
  );
}

export default function Image360Viewer({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  hotspots = [],
  language
}: Image360ViewerProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  if (!isOpen) return null;

  const resetView = () => {
    setSelectedHotspot(null);
    setShowInfo(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="relative w-full h-full">
        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
          <Card className="bg-background/90 backdrop-blur-sm max-w-md">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
              {showInfo && (
                <div className="mt-3 pt-3 border-t space-y-2">
                  <p className="text-xs text-muted-foreground">
                    {language === 'ar' 
                      ? 'اسحب لاستكشاف الصورة بزاوية 360 درجة' 
                      : 'Drag to explore 360° view'}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3 mr-1" />
                      {language === 'ar' ? 'تحميل' : 'Download'}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="w-3 h-3 mr-1" />
                      {language === 'ar' ? 'مشاركة' : 'Share'}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex gap-2">
            <Button
              onClick={() => setShowInfo(!showInfo)}
              variant="outline"
              size="sm"
              className="bg-background/90 backdrop-blur-sm"
            >
              <Info className="w-4 h-4" />
            </Button>
            <Button
              onClick={resetView}
              variant="outline"
              size="sm"
              className="bg-background/90 backdrop-blur-sm"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              className="bg-background/90 backdrop-blur-sm"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Hotspot Info Panel */}
        {selectedHotspot && (
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <Card className="bg-background/95 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{selectedHotspot.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedHotspot.description}
                    </p>
                  </div>
                  <Button
                    onClick={() => setSelectedHotspot(null)}
                    variant="ghost"
                    size="sm"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                {selectedHotspot.link && (
                  <Button size="sm" className="mt-3">
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
          <Suspense fallback={null}>
            <Image360Sphere imageUrl={imageUrl} />
            
            {hotspots.map((hotspot) => (
              <Hotspot
                key={hotspot.id}
                hotspot={hotspot}
                onClick={() => setSelectedHotspot(hotspot)}
              />
            ))}
            
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={0.1}
              maxDistance={5}
              rotateSpeed={0.5}
              zoomSpeed={0.5}
            />
          </Suspense>
        </Canvas>

        {/* Loading indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Card className="bg-background/90 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">
                {language === 'ar' ? 'جاري التحميل...' : 'Loading...'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}