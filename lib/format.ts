/** Masking email with * */
export const maskEmail = (email: string) => {
    const [local, domain] = email.split('@');

    if(!domain) return email;

    const visible = local.length > 2 ? 2 : 1;
    return `${local.slice(0, visible)}${'*'.repeat(local.length - visible)}@${domain}`;
}

/** Format countdown for email verification code */
export const formatCountdown = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}