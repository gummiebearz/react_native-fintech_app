import type { ImageSource, ImageStyle } from 'expo-image';
import type { ViewProps } from 'react-native';

export type Slide = {
  id: string;
  image: ImageSource;
  title: string;
  description: string;
};

export type OnboardingSlideProps = Omit<ViewProps, 'children'> &
  Omit<Slide, 'id'> & {
    className?: string;
    /** Style for image (like changing height) */
    imageStyle?: ImageStyle;
    titleClassName?: string;
    descriptionClassName?: string;
  };

export type PageDotsProps = Omit<ViewProps, 'children'> & {
  /** Total number of pages */
  count: number;
  /** Zero-based index of the current page */
  activeIndex: number;
  /** Hides the dots but keeps their space, so the layout does not jump */
  hidden?: boolean;
  className?: string;
};
