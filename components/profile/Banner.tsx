'use client';

import { LazyImage, type LazyImageProps } from '@/components/core/LazyImage';
import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface BannerProps extends ComponentPropsWithoutRef<'div'> {
  imageProps: Partial<LazyImageProps>; // <-- Fixed here
}

export function Banner({
  className,
  imageProps: { alt = 'Banner', src, ...imageProps },
  ...props
}: BannerProps) {
  return (
    <div
      className={twMerge(
        'group relative w-full',
        src ? 'aspect-[4/1]' : 'h-[156px] bg-black/15',
        className,
      )}
      {...props}
    >
      <LazyImage src={src} alt={alt} fill priority {...imageProps} />
    </div>
  );
}
