import type { ImageSource } from 'expo-image'

export type OnboardingSlide = {
    id: string;
    image: ImageSource;
    title: string;
    description: string;
}

export type PageDotsProps = {
    count: number;
    activeIndex: number;
}