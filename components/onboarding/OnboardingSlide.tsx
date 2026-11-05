import { clsx } from 'clsx';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import type { OnboardingSlideProps } from '@/types/onboarding';

export const OnboardingSlide = ({
  image,
  title,
  description,
  className,
  imageStyle,
  titleClassName,
  descriptionClassName,
  ...extras
}: OnboardingSlideProps) => {
  return (
    <View
      collapsable={false} // PagerView needs each page to be a real react native view
      className={clsx('flex-1 px-6', className)}
      {...extras}
    >
      <Image
        source={image}
        contentFit="contain"
        accessible={false}
        style={[{ width: '100%', height: '50%' }, imageStyle]}
      />
      <View className="gap-3 pt-8">
        <Text className={clsx('font-inter-bold text-4xl text-default', titleClassName)}>
          {title}
        </Text>
        <Text className={clsx('font-inter-regular text-xl text-muted', descriptionClassName)}>
          {description}
        </Text>
      </View>
    </View>
  );
};
