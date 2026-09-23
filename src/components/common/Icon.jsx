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

    case 'verified':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
        >
          <circle cx="10" cy="10" r="10" fill="#1D9BF0" />
          <path
            d="M6 10.2L8.7 13L14.2 7.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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

    default:
      return null;
  }
};
