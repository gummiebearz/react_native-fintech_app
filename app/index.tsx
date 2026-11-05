import { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomButton } from '@/components/ui/CustomButton';
import { PageDots } from '@/components/onboarding/PageDots';
import { OnboardingSlide } from '@/components/onboarding/OnboardingSlide';

import { onboardingSlides } from '@/constants/onboarding';

const LAST_INDEX = onboardingSlides.length - 1;

export default function Index() {
  const pagerRef = useRef<PagerView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const isLast = activeIndex === LAST_INDEX;

  return (
    <View
      className="flex-1 justify-between bg-background"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View className="h-12 flex-row justify-end px-8">
        {!isLast && (
          <Pressable
            accessibilityRole="button"
            hitSlop={12}
            onPress={() => pagerRef.current?.setPage(LAST_INDEX)}
          >
            <Text className="text-body font-inter-semibold text-muted">Skip</Text>
          </Pressable>
        )}
      </View>
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setActiveIndex(e.nativeEvent.position)}
        scrollEnabled={!isLast} // Block user from swiping backwards if on the last screen
      >
        {onboardingSlides.map((slide) => (
          <OnboardingSlide
            key={slide.id}
            image={slide.image}
            title={slide.title}
            description={slide.description}
          />
        ))}
      </PagerView>
      <View className="gap-6 px-6 pb-6">
        <PageDots count={onboardingSlides.length} activeIndex={activeIndex} hidden={isLast} />
        {!isLast ? (
          <CustomButton
            title="Next"
            onPress={() => pagerRef.current?.setPage(isLast ? 0 : activeIndex + 1)}
          />
        ) : (
          <View className="gap-y-2">
            <CustomButton
              title="Sign In"
              onPress={() => console.log('Sign In pressed')}
              variant="outline"
            />
            <CustomButton
              title="Create Account"
              onPress={() => console.log('Create Account pressed')}
            />
          </View>
        )}
      </View>
    </View>
  );
}
