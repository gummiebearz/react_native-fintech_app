import { clsx } from 'clsx';
import { ActivityIndicator, Pressable, Text } from 'react-native';

import { colors, textColors } from '@/theme/colors';
import type { ButtonProps, ButtonVariant } from '@/types/ui';

const containerStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  outline: 'border-2 border-white',
};

const labelStyles: Record<ButtonVariant, string> = {
  primary: 'text-onPrimary',
  outline: 'text-default',
};

// ActivityIndicator takes a color value, so it uses raw token
const spinnerColors: Record<ButtonVariant, string> = {
  primary: colors.onPrimary,
  outline: textColors.default,
};

export const CustomButton = ({
  title,
  loading = false,
  onPress,
  variant = 'primary',
  disabled,
  className,
  textClassName,
  style,
  ...extras
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      className={clsx(
        'h-14 items-center justify-center rounded-full px-6 active:opacity-80',
        containerStyles[variant],
        isDisabled && 'opacity-50',
        className,
      )}
      {...extras}
        onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={spinnerColors[variant]} />
      ) : (
        <Text className={clsx('font-inter-semibold text-lg', labelStyles[variant], textClassName)}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
