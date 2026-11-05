import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

import { CustomScreen } from '@/components/ui/CustomScreen';

export default function VerifyEmail() {
  const { email } = useLocalSearchParams<{ email: string }>();
  return (
    <CustomScreen className="items-center justify-center">
      <Text className="font-inter-semibold text-2xl text-default">Verify your email address</Text>
      <Text className="font-inter-regular text-base text-default">
        We have sent a verification link to {email}. Please check your inbox and follow the
        instructions to verify your email address.
      </Text>
    </CustomScreen>
  );
}
