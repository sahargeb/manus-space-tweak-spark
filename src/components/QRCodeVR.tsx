import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Share, QrCode } from 'lucide-react';

interface QRCodeVRProps {
  catalogId: string;
  catalogTitle: string;
  vrUrl: string;
  language: string;
  onClose?: () => void;
}

export default function QRCodeVR({ catalogId, catalogTitle, vrUrl, language, onClose }: QRCodeVRProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const qrCodeRef = useRef<string>('');

  useEffect(() => {
    generateQRCode();
  }, [vrUrl]);

  const generateQRCode = async () => {
    if (canvasRef.current) {
      try {
        // إنشاء رابط كامل للـ VR tour
        const fullVRUrl = `${window.location.origin}/vr-tour/${catalogId}`;
        
        await QRCode.toCanvas(canvasRef.current, fullVRUrl, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          errorCorrectionLevel: 'M'
        });

        // حفظ البيانات للتنزيل
        qrCodeRef.current = await QRCode.toDataURL(fullVRUrl, {
          width: 512,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    }
  };

  const downloadQR = () => {
    if (qrCodeRef.current) {
      const link = document.createElement('a');
      link.href = qrCodeRef.current;
      link.download = `vr-tour-${catalogId}-qr.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const shareQR = async () => {
    const fullVRUrl = `${window.location.origin}/vr-tour/${catalogId}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: catalogTitle,
          text: language === 'ar' 
            ? `استكشف ${catalogTitle} بتقنية VR` 
            : `Explore ${catalogTitle} in VR`,
          url: fullVRUrl
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(fullVRUrl);
      }
    } else {
      navigator.clipboard.writeText(fullVRUrl);
    }
  };

  return (
    <Card className="max-w-sm mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="p-6 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <QrCode className="w-6 h-6 text-primary" />
          <h3 className="font-bold text-lg">
            {language === 'ar' ? 'رمز QR للجولة الافتراضية' : 'VR Tour QR Code'}
          </h3>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <canvas ref={canvasRef} className="mx-auto" />
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">{catalogTitle}</h4>
          <p className="text-sm text-muted-foreground">
            {language === 'ar' 
              ? 'امسح الرمز لبدء الجولة الافتراضية على هاتفك'
              : 'Scan to start VR tour on your device'}
          </p>
        </div>

        <div className="flex gap-3">
          <Button onClick={downloadQR} variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'تحميل' : 'Download'}
          </Button>
          <Button onClick={shareQR} variant="outline" className="flex-1">
            <Share className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'مشاركة' : 'Share'}
          </Button>
        </div>

        {onClose && (
          <Button onClick={onClose} variant="ghost" className="w-full">
            {language === 'ar' ? 'إغلاق' : 'Close'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}