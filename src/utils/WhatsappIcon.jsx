import * as React from "react";

export const WhatsappIcon = React.forwardRef(({ color = "currentColor", size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.72 13.06a4.94 4.94 0 0 1-1.63-.26c-.41-.14-.93-.32-1.34-.59-.82-.53-2.5-2.3-2.5-3.34 0-.47.23-.83.5-1.1l.27-.27c.18-.18.27-.39.27-.61s-.1-.43-.25-.62a2.09 2.09 0 0 0-.62-.52.93.93 0 0 0-1.13.18A4.93 4.93 0 0 0 7.7 10.7c0 2.2 2.62 4.72 4.72 5.51.5.18 1.12.3 1.63.3.5 0 .85-.12 1.18-.24.35-.12.76-.25 1.1-.5a.94.94 0 0 0 .18-1.13 2.3 2.3 0 0 0-.52-.63.91.91 0 0 0-.61-.25c-.22 0-.44.09-.61.27l-.28.28c-.27.27-.63.5-1.1.5z" />
    <path d="M21 12a9 9 0 1 1-16.53-5.29L3 21l6.29-1.47A9 9 0 0 1 21 12z" />
  </svg>
));

WhatsappIcon.displayName = "WhatsappIcon";
