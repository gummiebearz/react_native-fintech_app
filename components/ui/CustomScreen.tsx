import { clsx } from 'clsx';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { ScreenProps } from '@/types/ui';

export const CustomScreen = ({
  children,
  className,
  scrollable = false,
  keyboardAvoiding = false,
  ...extras
}: ScreenProps) => {
  const insets = useSafeAreaInsets();

  const content = scrollable ? (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className={clsx('flex-1 px-6 pt-2', className)} {...extras}>
        {children}
      </View>
    </ScrollView>
  ) : (
    <View className={clsx('flex-1 px-6 pt-2', className)} {...extras}>
      {children}
    </View>
  );

  return (
    <View
      className="flex-1 bg-background"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {keyboardAvoiding ? (
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {content}
        </KeyboardAvoidingView>
      ) : (
        content
      )}
    </View>
  );
};
