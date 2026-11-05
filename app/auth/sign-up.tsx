import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { clsx } from 'clsx';
import { Link, useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from 'react-native';
import { CustomButton } from '@/components/ui/CustomButton';
import { CustomScreen } from '@/components/ui/CustomScreen';
import { textColors } from '@/theme/colors';

// Define schema validation for email
const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email address')
    .pipe(z.email('Enter a valid email address')),
});

type EmailForm = z.infer<typeof emailSchema>;

export default function SignUp() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  // Fake request so the flow can be tested. Clerk will replace this later
  const sendVerificationCode = async (_email: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };
  const onSubmit = async ({ email }: EmailForm) => {
    await sendVerificationCode(email);
    router.push({ pathname: '/auth/verify-email', params: { email } });
  };

  const submitHandler = () => handleSubmit(onSubmit)();

  return (
    <CustomScreen scrollable={true} keyboardAvoiding={true}>
      <View className="gap-6">
        <View className="gap-2">
          <Text className="font-inter-bold text-4xl text-default">Create Account</Text>
          <Text className="font-inter-regular text-base text-muted">
            Enter your email and we’ll send you a code to verify.
          </Text>
        </View>

        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange, onBlur } }) => (
            <View className="gap-2">
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Email address"
                placeholderTextColor={textColors.muted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                textContentType="emailAddress"
                returnKeyType="send"
                onSubmitEditing={submitHandler}
                accessibilityLabel="Email address"
                className={clsx(
                  'h-14 rounded-2xl border bg-surface px-5 font-inter-regular text-base text-default',
                  errors.email ? 'border-error' : 'border-border',
                )}
              />
              {errors.email && (
                <Text className="font-inter-regular text-sm text-error">
                  {errors?.email.message}
                </Text>
              )}
            </View>
          )}
        />

        <CustomButton title="Continue" loading={isSubmitting} onPress={submitHandler} />

        <Text className="text-center font-inter-medium text-xs text-muted">
          By continuing, you agree to the Terms of Service and Privacy Policy.
        </Text>
      </View>

      {/* Footer at the bottom of the screen */}
      <View className="flex-1" />
      <View className="flex-row items-center justify-center gap-2 pb-4">
        <Text className="font-inter-regular text-sm text-muted">Already have an account?</Text>
        <Link href="/auth/sign-in" replace asChild>
          <Pressable accessibilityRole="link" hitSlop={8}>
            <Text className="font-inter-semibold text-base text-primary">Sign in</Text>
          </Pressable>
        </Link>
      </View>
    </CustomScreen>
  );
}
