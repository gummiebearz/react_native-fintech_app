import type { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'outline';

export type ButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  loading?: boolean; // make loading optional
  variant?: ButtonVariant;
  /** Extra classes for the button container (spacing, width, etc.) */
  className?: string;
  /** Extra classes for the label text */
  textClassName?: string;
};
