import type { OnboardingSlide } from '@/types/onboarding'

// Images use require() (the Expo way). TypeScript doesn't know `import x from './x.png'`.
export const onboardingSlides: OnboardingSlide[] = [
    {
        id: 'send',
        image: require('@/assets/images/firstOnboarding.png'),
        title: 'Send money in seconds',
        description: 'Pay and request from friends, right from your home screen.',
    },
    {
        id: 'track',
        image: require('@/assets/images/secondOnboarding.png'),
        title: 'Know where your money goes',
        description: 'Track expenses, income, and recurring bills in one place.',
    },
    {
        id: 'watch',
        image: require('@/assets/images/thirdOnboarding.png'),
        title: 'Keep an eye on the markets',
        description: 'Follow your favorite stocks and crypto in a watchlist.',
    }
]