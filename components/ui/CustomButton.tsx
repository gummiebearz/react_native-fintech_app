import { clsx } from 'clsx';
import { ActivityIndicator, Pressable, Text } from 'react-native';

import { colors, textColors } from '@/theme/colors';
import type { ButtonProps, ButtonVariant } from '@/types/ui';

const containerStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  outline: 'border-2 border-white',
  danger: 'bg-error',
};

const labelStyles: Record<ButtonVariant, string> = {
  primary: 'text-onPrimary',
  secondary: 'text-onSecondary',
  outline: 'text-default',
  danger: 'text-onPrimary', // dark text on red; swap if the design says white
};

// ActivityIndicator takes a color value, so it uses raw token
const spinnerColors: Record<ButtonVariant, string> = {
  primary: colors.onPrimary,
  secondary: colors.onSecondary,
  outline: textColors.default,
  danger: colors.onPrimary,
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
