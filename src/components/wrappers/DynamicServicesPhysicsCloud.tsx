'use client';

import dynamic from 'next/dynamic';

export const DynamicServicesPhysicsCloud = dynamic(
  () => import('@/components/landing/why/ServicesPhysicsCloud').then(mod => mod.ServicesPhysicsCloud),
  { ssr: false }
);
