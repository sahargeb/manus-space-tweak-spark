
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
        // استخدام الرابط المحدد من المستخدم
        const targetUrl = 'https://preview--ahmed-tweak-spark.lovable.app/';
        
        await QRCode.toCanvas(canvasRef.current, targetUrl, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          errorCorrectionLevel: 'M'
        });

        // حفظ البيانات للتنزيل
        qrCodeRef.current = await QRCode.toDataURL(targetUrl, {
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
    const targetUrl = 'https://preview--ahmed-tweak-spark.lovable.app/';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: catalogTitle,
          text: language === 'ar' 
            ? `استكشف ${catalogTitle} بتقنية VR` 
            : `Explore ${catalogTitle} in VR`,
          url: targetUrl
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(targetUrl);
      }
    } else {
      navigator.clipboard.writeText(targetUrl);
    }
  };

  return (
    <Card className="max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="p-4 sm:p-6 text-center space-y-4 sm:space-y-6">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          <h3 className="font-bold text-base sm:text-lg">
            {language === 'ar' ? 'رمز QR للجولة الافتراضية' : 'VR Tour QR Code'}
          </h3>
        </div>
        
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-inner">
          <canvas ref={canvasRef} className="mx-auto max-w-full h-auto" />
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm sm:text-base text-foreground">{catalogTitle}</h4>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {language === 'ar' 
              ? 'امسح الرمز لبدء الجولة الافتراضية على هاتفك'
              : 'Scan to start VR tour on your device'}
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground break-all">
            https://preview--ahmed-tweak-spark.lovable.app/
          </p>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <Button onClick={downloadQR} variant="outline" className="flex-1 text-xs sm:text-sm px-2 sm:px-4">
            <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {language === 'ar' ? 'تحميل' : 'Download'}
          </Button>
          <Button onClick={shareQR} variant="outline" className="flex-1 text-xs sm:text-sm px-2 sm:px-4">
            <Share className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {language === 'ar' ? 'مشاركة' : 'Share'}
          </Button>
        </div>

        {onClose && (
          <Button onClick={onClose} variant="ghost" className="w-full text-xs sm:text-sm">
            {language === 'ar' ? 'إغلاق' : 'Close'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
