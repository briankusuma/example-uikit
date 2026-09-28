import React from 'react';

export const Icon = ({ name, size = 20, color = 'currentColor', className = '' }) => {
  switch (name) {
    case 'home':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
        </svg>
      );

    case 'search':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      );

    case 'message':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );

    case 'notification':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      );

    case 'dashboard':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      );

    case 'storefront':
      // Style = Fill (as active in Figma)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          className={className}
        >
          <path d="M21.87 7.15 20.3 3.22A2 2 0 0 0 18.45 2H5.55a2 2 0 0 0-1.85 1.22L2.13 7.15A2 2 0 0 0 2 8v1a4 4 0 0 0 2.5 3.71V20a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7.29A4 4 0 0 0 22 9V8a2 2 0 0 0-.13-.85ZM12 11a2 2 0 0 1-2-2V4h4v5a2 2 0 0 1-2 2Zm-4 0a2 2 0 0 1-2-2V4h2v5a2 2 0 0 1 0 2Zm8-2a2 2 0 0 1-2 2 2 2 0 0 1 0-2V4h2v5Zm-8.5 11v-6.19a4 4 0 0 0 9 0V20Z" />
        </svg>
      );

    case 'cart':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );

    case 'setting':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case 'arrow-left':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      );
      case 'arrow-right':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={{ transform: 'rotate(180deg)' }}
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        );

    case 'verified':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" fill="none">
  <path d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z" fill="#4AB632"/></svg>
      );

    case 'dots-three':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          className={className}
        >
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      );

    case 'calendar':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <circle cx="8" cy="14" r="1" fill={color} />
          <circle cx="12" cy="14" r="1" fill={color} />
          <circle cx="16" cy="14" r="1" fill={color} />
        </svg>
      );

    case 'map-pin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    case 'pencil':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      );

    case 'trash':
    case 'delete':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      );

    case 'plus':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );

    case 'envelope':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );

    case 'phone':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    case 'globe':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );

    case 'empty-box':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 150 150"
          fill="none"
          className={className}
        >
          <circle cx="75" cy="75" r="70" fill="#F8F8F8" />
          <rect x="45" y="55" width="60" height="48" rx="8" fill="#EAEAEA" stroke="#D5D5D5" strokeWidth="2" />
          <path d="M45 70L75 88L105 70" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="75" y1="88" x2="75" y2="103" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" />
          <circle cx="75" cy="40" r="3" fill="#C5C5C5" />
          <circle cx="112" cy="50" r="2.5" fill="#D8D8D8" />
          <circle cx="38" cy="90" r="2.5" fill="#D8D8D8" />
        </svg>
      );

    case 'logo':
      return (
        <svg
          width="128"
          height="24"
          viewBox="0 0 128 24"
          fill="none"
          className={className}
        >
          <circle cx="12" cy="12" r="10" fill="#000000" />
          <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
          <text
            x="30"
            y="17"
            fontFamily="Inter, sans-serif"
            fontSize="18"
            fontWeight="700"
            fill="#000000"
            letterSpacing="-0.03em"
          >
            OWW
          </text>
        </svg>
      );

    case 'close':
    case 'x':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
        >
          <path
            d="M16.2883 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2883 16.2898C16.1122 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1363 16.466 14.9602 16.2898L10 11.3281L5.03828 16.2883C4.86216 16.4644 4.62329 16.5633 4.37422 16.5633C4.12514 16.5633 3.88627 16.4644 3.71015 16.2883C3.53403 16.1122 3.43509 15.8733 3.43509 15.6242C3.43509 15.3751 3.53403 15.1363 3.71015 14.9602L8.67187 10L3.71172 5.03828C3.53559 4.86216 3.43665 4.62329 3.43665 4.37422C3.43665 4.12515 3.53559 3.88628 3.71172 3.71016C3.88784 3.53404 4.12671 3.43509 4.37578 3.43509C4.62485 3.43509 4.86372 3.53404 5.03984 3.71016L10 8.67187L14.9617 3.70937C15.1378 3.53325 15.3767 3.43431 15.6258 3.43431C15.8748 3.43431 16.1137 3.53325 16.2898 3.70937C16.466 3.88549 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.466 4.86138 16.2898 5.0375L11.3281 10L16.2883 14.9617Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'upload':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      );

    case 'caret-down':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
        >
          <path
            d="M5.833 7.917L10 12.083l4.167-4.166"
            stroke={color}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'flag-ss':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={{ borderRadius: '2px', overflow: 'hidden' }}
        >
          <rect width="20" height="20" rx="2" fill="#078930" />
          <rect y="0" width="20" height="6.67" fill="#000000" />
          <rect y="6.67" width="20" height="6.67" fill="#DA121A" />
          <line x1="0" y1="6.67" x2="20" y2="6.67" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="0" y1="13.33" x2="20" y2="13.33" stroke="#FFFFFF" strokeWidth="1" />
          <polygon points="0,0 11.5,10 0,20" fill="#0F47AF" />
          <polygon points="4.5,10 3.2,9 4.7,9 5.2,7.5 5.7,9 7.2,9 5.9,10 6.4,11.5 5.2,10.5 4,11.5" fill="#FCDD09" />
        </svg>
      );

    case 'flag-es':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={{ borderRadius: '2px', overflow: 'hidden' }}
        >
          <rect width="20" height="20" rx="2" fill="#C60B1E" />
          <rect y="5" width="20" height="10" fill="#FFC400" />
          <circle cx="6" cy="10" r="2" fill="#C60B1E" />
        </svg>
      );

    case 'flag-lk':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={{ borderRadius: '2px', overflow: 'hidden' }}
        >
          <rect width="20" height="20" rx="2" fill="#FFBE29" />
          <rect x="2" y="2" width="4" height="16" fill="#00534E" />
          <rect x="6" y="2" width="3" height="16" fill="#EB7A00" />
          <rect x="10" y="2" width="8" height="16" fill="#8D153A" />
        </svg>
      );

    case 'flag-kr':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={{ borderRadius: '2px', overflow: 'hidden' }}
        >
          <rect width="20" height="20" rx="2" fill="#FFFFFF" stroke="#E9E9E9" strokeWidth="0.5" />
          <path d="M10 5a5 5 0 0 1 0 10 5 5 0 0 1 0-10" fill="#0047A0" />
          <path d="M10 5a5 5 0 0 0 0 10c2.76 0 2.5-5 0-5s-2.76-5 0-5" fill="#CD2E3A" />
        </svg>
      );

    case 'flag-ch':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={{ borderRadius: '2px', overflow: 'hidden' }}
        >
          <rect width="20" height="20" rx="2" fill="#D52B1E" />
          <rect x="8.5" y="4" width="3" height="12" fill="#FFFFFF" />
          <rect x="4" y="8.5" width="12" height="3" fill="#FFFFFF" />
        </svg>
      );

    case 'flag-id':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={{ borderRadius: '2px', overflow: 'hidden' }}
        >
          <rect width="20" height="20" rx="2" fill="#FFFFFF" stroke="#E9E9E9" strokeWidth="0.5" />
          <rect width="20" height="10" fill="#E70011" />
        </svg>
      );

    case 'flag-us':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={{ borderRadius: '2px', overflow: 'hidden' }}
        >
          <rect width="20" height="20" rx="2" fill="#FFFFFF" />
          <rect y="0" width="20" height="3" fill="#B22234" />
          <rect y="6" width="20" height="3" fill="#B22234" />
          <rect y="12" width="20" height="3" fill="#B22234" />
          <rect y="17" width="20" height="3" fill="#B22234" />
          <rect width="9" height="10" fill="#3C3B6E" />
        </svg>
      );

    case 'check':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
        >
          <path
            d="M4.5 10.5L8 14L15.5 6.5"
            stroke={color}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'image':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      );

    case 'bag':
    case 'package':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );

    case 'seal-percent':
    case 'ads':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
        >
          <path
            d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57266 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4273 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM16.743 11.1023C16.3687 11.493 15.9812 11.8969 15.7758 12.393C15.5789 12.8695 15.5703 13.4141 15.5625 13.9414C15.5547 14.4883 15.5461 15.0609 15.3031 15.3031C15.0602 15.5453 14.4914 15.5547 13.9414 15.5625C13.4141 15.5703 12.8695 15.5789 12.393 15.7758C11.8969 15.9812 11.493 16.3687 11.1023 16.743C10.7117 17.1172 10.3125 17.5 10 17.5C9.6875 17.5 9.28516 17.1156 8.89766 16.743C8.51016 16.3703 8.10313 15.9812 7.60703 15.7758C7.13047 15.5789 6.58594 15.5703 6.05859 15.5625C5.51172 15.5547 4.93906 15.5461 4.69687 15.3031C4.45469 15.0602 4.44531 14.4914 4.4375 13.9414C4.42969 13.4141 4.42109 12.8695 4.22422 12.393C4.01875 11.8969 3.63125 11.493 3.25703 11.1023C2.88281 10.7117 2.5 10.3125 2.5 10C2.5 9.6875 2.88437 9.28594 3.25703 8.89766C3.62969 8.50938 4.01875 8.10313 4.22422 7.60703C4.42109 7.13047 4.42969 6.58594 4.4375 6.05859C4.44531 5.51172 4.45391 4.93906 4.69687 4.69687C4.93984 4.45469 5.50859 4.44531 6.05859 4.4375C6.58594 4.42969 7.13047 4.42109 7.60703 4.22422C8.10313 4.01875 8.50703 3.63125 8.89766 3.25703C9.28828 2.88281 9.6875 2.5 10 2.5C10.3125 2.5 10.7148 2.88437 11.1023 3.25703C11.4898 3.62969 11.8969 4.01875 12.393 4.22422C12.8695 4.42109 13.4141 4.42969 13.9414 4.4375C14.4883 4.44531 15.0609 4.45391 15.3031 4.69687C15.5453 4.93984 15.5547 5.50859 15.5625 6.05859C15.5703 6.58594 15.5789 7.13047 15.7758 7.60703C15.9812 8.10313 16.3687 8.50703 16.743 8.89766C17.1172 9.28828 17.5 9.6875 17.5 10C17.5 10.3125 17.1156 10.7141 16.743 11.1023ZM9.375 7.5C9.375 7.12916 9.26503 6.76665 9.05901 6.45831C8.85298 6.14996 8.56014 5.90964 8.21753 5.76773C7.87492 5.62581 7.49792 5.58868 7.13421 5.66103C6.77049 5.73337 6.4364 5.91195 6.17417 6.17417C5.91195 6.4364 5.73337 6.77049 5.66103 7.13421C5.58868 7.49792 5.62581 7.87492 5.76773 8.21753C5.90964 8.56014 6.14996 8.85298 6.45831 9.05901C6.76665 9.26503 7.12916 9.375 7.5 9.375C7.99728 9.375 8.47419 9.17746 8.82583 8.82583C9.17746 8.47419 9.375 7.99728 9.375 7.5ZM6.875 7.5C6.875 7.37639 6.91166 7.25555 6.98033 7.15277C7.04901 7.04999 7.14662 6.96988 7.26082 6.92257C7.37503 6.87527 7.50069 6.86289 7.62193 6.88701C7.74317 6.91112 7.85453 6.97065 7.94194 7.05806C8.02935 7.14547 8.08888 7.25683 8.11299 7.37807C8.13711 7.49931 8.12473 7.62497 8.07743 7.73918C8.03012 7.85338 7.95001 7.95099 7.84723 8.01967C7.74445 8.08834 7.62361 8.125 7.5 8.125C7.33424 8.125 7.17527 8.05915 7.05806 7.94194C6.94085 7.82473 6.875 7.66576 6.875 7.5ZM12.5 10.625C12.1292 10.625 11.7666 10.735 11.4583 10.941C11.15 11.147 10.9096 11.4399 10.7677 11.7825C10.6258 12.1251 10.5887 12.5021 10.661 12.8658C10.7334 13.2295 10.912 13.5636 11.1742 13.8258C11.4364 14.088 11.7705 14.2666 12.1342 14.339C12.4979 14.4113 12.8749 14.3742 13.2175 14.2323C13.5601 14.0904 13.853 13.85 14.059 13.5417C14.265 13.2334 14.375 12.8708 14.375 12.5C14.375 12.0027 14.1775 11.5258 13.8258 11.1742C13.4742 10.8225 12.9973 10.625 12.5 10.625ZM12.5 13.125C12.3764 13.125 12.2555 13.0883 12.1528 13.0197C12.05 12.951 11.9699 12.8534 11.9226 12.7392C11.8753 12.625 11.8629 12.4993 11.887 12.3781C11.9111 12.2568 11.9706 12.1455 12.0581 12.0581C12.1455 11.9706 12.2568 11.9111 12.3781 11.887C12.4993 11.8629 12.625 11.8753 12.7392 11.9226C12.8534 11.9699 12.951 12.05 13.0197 12.1528C13.0883 12.2555 13.125 12.3764 13.125 12.5C13.125 12.6658 13.0592 12.8247 12.9419 12.9419C12.8247 13.0592 12.6658 13.125 12.5 13.125ZM13.5672 7.31719L7.31719 13.5672C7.25912 13.6253 7.19018 13.6713 7.11431 13.7027C7.03844 13.7342 6.95712 13.7503 6.875 13.7503C6.79288 13.7503 6.71156 13.7342 6.63569 13.7027C6.55982 13.6713 6.49088 13.6253 6.43281 13.5672C6.37474 13.5091 6.32868 13.4402 6.29725 13.3643C6.26583 13.2884 6.24965 13.2071 6.24965 13.125C6.24965 13.0429 6.26583 12.9616 6.29725 12.8857C6.32868 12.8098 6.37474 12.7409 6.43281 12.6828L12.6828 6.43281C12.7409 6.37474 12.8098 6.32868 12.8857 6.29725C12.9616 6.26583 13.0429 6.24965 13.125 6.24965C13.2071 6.24965 13.2884 6.26583 13.3643 6.29725C13.4402 6.32868 13.5091 6.37474 13.5672 6.43281C13.6253 6.49088 13.6713 6.55982 13.7027 6.63569C13.7342 6.71156 13.7503 6.79288 13.7503 6.875C13.7503 6.95712 13.7342 7.03844 13.7027 7.11431C13.6713 7.19018 13.6253 7.25912 13.5672 7.31719Z"
            fill={color}
          />
        </svg>
      );
      case 'arrow-share':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 18 15"
            fill="none"
            className={className}
          >
            <path
              d="M17.3171 6.4333L11.0671 0.183305C10.9798 0.0958446 10.8684 0.0362559 10.7472 0.0120745C10.626 -0.0121068 10.5003 0.000205338 10.3861 0.0474538C10.2718 0.0947022 10.1742 0.174765 10.1055 0.277516C10.0367 0.380268 10 0.501092 9.99995 0.624711V3.77705C7.97339 3.95049 5.73511 4.94268 3.8937 6.5044C1.67651 8.38565 0.296046 10.8099 0.00620251 13.3302C-0.0164477 13.5261 0.0232818 13.7242 0.119737 13.8963C0.216192 14.0683 0.364458 14.2056 0.543434 14.2885C0.722411 14.3714 0.922979 14.3957 1.11659 14.3581C1.31021 14.3204 1.48701 14.2226 1.62183 14.0786C2.4812 13.1638 5.53901 10.2708 9.99995 10.0161V13.1247C10 13.2483 10.0367 13.3692 10.1055 13.4719C10.1742 13.5747 10.2718 13.6547 10.3861 13.702C10.5003 13.7492 10.626 13.7615 10.7472 13.7373C10.8684 13.7132 10.9798 13.6536 11.0671 13.5661L17.3171 7.31612C17.434 7.19895 17.4997 7.04021 17.4997 6.87471C17.4997 6.70921 17.434 6.55047 17.3171 6.4333ZM11.25 11.6161V9.37471C11.25 9.20895 11.1841 9.04998 11.0669 8.93277C10.9497 8.81556 10.7907 8.74971 10.625 8.74971C8.4312 8.74971 6.29448 9.32237 4.27417 10.4528C3.24522 11.0311 2.28652 11.7264 1.41714 12.5247C1.87026 10.6622 3.01245 8.89112 4.7023 7.45752C6.51636 5.91924 8.73042 4.99971 10.625 4.99971C10.7907 4.99971 10.9497 4.93386 11.0669 4.81665C11.1841 4.69944 11.25 4.54047 11.25 4.37471V2.13409L15.9914 6.87471L11.25 11.6161Z"
              fill={color}
            />
          </svg>
        );

    case 'filter':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
        >
          <path
            d="M15.625 10.625C15.625 10.7908 15.5592 10.9497 15.4419 11.0669C15.3247 11.1842 15.1658 11.25 15 11.25H5C4.83424 11.25 4.67527 11.1842 4.55806 11.0669C4.44085 10.9497 4.375 10.7908 4.375 10.625C4.375 10.4592 4.44085 10.3003 4.55806 10.1831C4.67527 10.0658 4.83424 10 5 10H15C15.1658 10 15.3247 10.0658 15.4419 10.1831C15.5592 10.3003 15.625 10.4592 15.625 10.625ZM18.125 6.25H1.875C1.70924 6.25 1.55027 6.31585 1.43306 6.43306C1.31585 6.55027 1.25 6.70924 1.25 6.875C1.25 7.04076 1.31585 7.19973 1.43306 7.31694C1.55027 7.43415 1.70924 7.5 1.875 7.5H18.125C18.2908 7.5 18.4497 7.43415 18.5669 7.31694C18.6842 7.19973 18.75 7.04076 18.75 6.875C18.75 6.70924 18.6842 6.55027 18.5669 6.43306C18.4497 6.31585 18.2908 6.25 18.125 6.25ZM11.875 13.75H8.125C7.95924 13.75 7.80027 13.8158 7.68306 13.9331C7.56585 14.0503 7.5 14.2092 7.5 14.375C7.5 14.5408 7.56585 14.6997 7.68306 14.8169C7.80027 14.9342 7.95924 15 8.125 15H11.875C12.0408 15 12.1997 14.9342 12.3169 14.8169C12.4342 14.6997 12.5 14.5408 12.5 14.375C12.5 14.2092 12.4342 14.0503 12.3169 13.9331C12.1997 13.8158 12.0408 13.75 11.875 13.75Z"
            fill={color}
          />
        </svg>
      );

    default:
      return null;
  }
};
