import type { PressableProps, ViewProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

export type ButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  loading?: boolean; // make loading optional
  variant?: ButtonVariant;
  /** Extra classes for the button container (spacing, width, etc.) */
  className?: string;
  /** Extra classes for the label text */
  textClassName?: string;
};

export type ScreenProps = ViewProps & {
  className?: string;
  /** Wrap content in a ScrollView, for forms or long lists */
  scrollable?: boolean;
  /** Lift content above the keyboard */
  keyboardAvoiding?: boolean;
}