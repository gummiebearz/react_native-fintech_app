import { Stack } from 'expo-router';
import { colors } from '@/theme/colors';

// Nested navigators don't inherit root screenOptions
export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.background },
            }}
        />
    )
}