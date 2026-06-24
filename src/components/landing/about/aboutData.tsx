/**
 * aboutData.tsx
 * ─────────────
 * Data for the floating badges around the center card.
 * Coordinates are based on percentage for responsive positioning.
 */

import React, { ReactNode } from 'react';
import {
  SiGoogleads,
  SiMeta,
  SiTiktok,
  SiInstagram,
  SiSnapchat,
  SiWordpress,
  SiReact
} from 'react-icons/si';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';

export interface BadgeData {
  id: string;
  label: string;
  icon: ReactNode;
  iconPosition: 'left' | 'right';
  bgColor: string;
  textColor: string;
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  delay: number;
}

export const FLOATING_BADGES: BadgeData[] = [
  // ── LEFT SIDE ──
  {
    id: 'google-ads',
    label: 'إعلانات جوجل',
    icon: <SiGoogleads size={16} />,
    iconPosition: 'right',
    bgColor: '#34A853',
    textColor: '#ffffff',
    top: '15%',
    left: '2%',
    rotate: -8,
    delay: 0,
  },
  {
    id: 'meta-ads',
    label: 'إعلانات ميتا',
    icon: <SiMeta size={16} />,
    iconPosition: 'right',
    bgColor: '#0081FB',
    textColor: '#ffffff',
    top: '40%',
    left: '5%',
    rotate: 5,
    delay: 0.2,
  },
  {
    id: 'tiktok',
    label: 'تيك توك',
    icon: <SiTiktok size={16} />,
    iconPosition: 'right',
    bgColor: '#111111',
    textColor: '#ffffff',
    top: '62%',
    left: '1%',
    rotate: -3,
    delay: 0.4,
  },
  {
    id: 'mobile-apps',
    label: 'تطبيقات الجوال',
    icon: <FaFlutter size={16} />,
    iconPosition: 'right',
    bgColor: '#02569B',
    textColor: '#ffffff',
    top: '80%',
    left: '8%',
    rotate: 7,
    delay: 0.6,
  },

  // ── RIGHT SIDE ──
  {
    id: 'instagram',
    label: 'إنستغرام',
    icon: <SiInstagram size={16} />,
    iconPosition: 'right',
    bgColor: '#E4405F',
    textColor: '#ffffff',
    top: '12%',
    right: '3%',
    rotate: 6,
    delay: 0.1,
  },
  {
    id: 'snapchat',
    label: 'سناب شات',
    icon: <SiSnapchat size={16} />,
    iconPosition: 'right',
    bgColor: '#FFFC00',
    textColor: '#111111',
    top: '40%',
    right: '1%',
    rotate: -5,
    delay: 0.3,
  },
  {
    id: 'cms',
    label: 'إدارة المحتوى',
    icon: <SiWordpress size={16} />,
    iconPosition: 'right',
    bgColor: '#21759B',
    textColor: '#ffffff',
    top: '62%',
    right: '6%',
    rotate: 4,
    delay: 0.5,
  },
  {
    id: 'frontend',
    label: 'تطوير الواجهات',
    icon: <SiReact size={16} />,
    iconPosition: 'right',
    bgColor: '#61DAFB',
    textColor: '#111111',
    top: '80%',
    right: '1%',
    rotate: -6,
    delay: 0.7,
  },
];
