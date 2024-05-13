import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'YOUR_APP_ID',
  appName: 'YOUR_APP_NAME',
  webDir: 'www',
  plugins: {
    Keyboard: {
    // resize: 'body' as KeyboardStyle,
      style: undefined, // Set style to undefined
      resizeOnFullScreen: true
    }
  }
};

export default config;
