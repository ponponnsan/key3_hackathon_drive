export interface IUser {
    licenseNumber?: string;
}

export interface IToken {
  salt: string;
  to: string;
  message: string;
  longitude: string;
  latitude: string;
}

export interface ActionButtonProps {
  mainText: string;
  subText: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface PopupProps {
  isVisible: boolean;
  errorMessage?: string;
}

export interface TokenRecord {
  licenseNumber: string;
  address: string;
  message: string;
  latitude: string;
  longitude: string;
}

export interface WalletInfoProps {
  accountName: string;
  walletAddress: string;
}

export interface TokenCardProps {
  earnedTokens: number;
  spentTokens: number;
}

export interface ISpeechRecognitionEvent {
  resultIndex: number; 
  isTrusted?: boolean;
  results: {
    isFinal: boolean;
    [key: number]:
      {
          transcript: string;
      };
  }[];
}

export interface ISpeechRecognition extends EventTarget {
  // properties
  grammars: string;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  serviceURI: string;

  // event handlers
  onaudiostart: () => void;
  onaudioend: () => void;
  onend: () => void;
  onerror: () => void;
  onnomatch: () => void;
  onresult: (event: ISpeechRecognitionEvent) => void;
  onsoundstart: () => void;
  onsoundend: () => void;
  onspeechstart: () => void;
  onspeechend: () => void;
  onstart: () => void;

  // methods
  abort(): void;
  start(): void;
  stop(): void;
}

export interface VoiceRecognitionButtonProps {
  onStart: () => void;
  onStop: () => void;
  onTokenRequest: () => void;
}

