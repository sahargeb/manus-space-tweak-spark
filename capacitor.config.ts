import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.97180f3623f644a3b6842d9fdebe0023',
  appName: 'manus-space-tweak-spark',
  webDir: 'dist',
  server: {
    url: "https://97180f36-23f6-44a3-b684-2d9fdebe0023.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;