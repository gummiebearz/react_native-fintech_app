import { clsx } from 'clsx';
import { View } from 'react-native';

import type { PageDotsProps } from '@/types/onboarding';

export const PageDots = ({
  count,
  activeIndex,
  hidden = false,
  className,
  ...extras
}: PageDotsProps) => {
  return (
    <View
      accessibilityLabel={`Page ${activeIndex + 1} of ${count}`}
      accessibilityElementsHidden={hidden}
      importantForAccessibility={hidden ? 'no-hide-descendants' : 'auto'}
      pointerEvents="none"
      className={clsx(
        'flex-row items-center justify-center gap-x-2',
        hidden && 'opacity-0',
        className,
      )}
      {...extras}
    >
      {Array.from({ length: count }, (_, index) => (
        <View
          key={index}
          className={clsx(
            'h-2 rounded-full',
            index === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-disabled',
          )}
        />
      ))}
    </View>
  );
};
