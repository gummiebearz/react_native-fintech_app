import { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import clsx from 'clsx';

import { onboardingSlides } from '@/constants/onboarding';

const LAST_INDEX = onboardingSlides.length - 1;

export default function Index() {
  const pagerRef = useRef<PagerView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLast = activeIndex === LAST_INDEX;

  return (
    <SafeAreaView className="flex-1 justify-between bg-background">
      <View className="h-12 flex-row justify-end px-8">
        {!isLast && (
          <Pressable
            accessibilityRole="button"
            hitSlop={12}
            onPress={() => pagerRef.current?.setPage(LAST_INDEX)}
          >
            <Text className="text-body font-inter-semibold text-textSecondary">Skip</Text>
          </Pressable>
        )}
      </View>
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setActiveIndex(e.nativeEvent.position)}
      >
        {onboardingSlides.map((slide) => (
          <View key={slide.id} collapsable={false} className="flex-1 px-6">
            <Image
              source={slide.image}
              contentFit="contain"
              accessible={false}
              style={{ width: '100%', height: '50%' }}
            />
            <View className="gap-3 pt-8">
              <Text className="text-display font-inter-bold text-4xl text-textPrimary">
                {slide.title}
              </Text>
              <Text className="font-inter text-body text-xl text-textSecondary">
                {slide.description}
              </Text>
            </View>
          </View>
        ))}
      </PagerView>
      <View className="gap-6 px-6 pb-6">
        <View className="flex-row items-center justify-center gap-x-2">
          {Array.from({ length: onboardingSlides.length }).map((_, index) => (
            <View
              key={index}
              className={clsx(
                'h-2 rounded-full',
                index === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-textDisabled',
              )}
            />
          ))}
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => pagerRef.current?.setPage(isLast ? 0 : activeIndex + 1)}
          className="h-14 items-center justify-center rounded-full bg-primary px-6 active:opacity-80"
        >
          <Text className="text-label font-inter-semibold text-onPrimary">Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
