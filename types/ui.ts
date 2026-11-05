import type { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'outline';

export type ButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  loading: boolean;
  onPress: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  /** Extra classes for the button container (spacing, width, etc.) */
  className?: string;
  /** Extra classes for the label text */
  textClassName?: string;
  /** Extra styles for the button container */
  style?: PressableProps['style'];
};
