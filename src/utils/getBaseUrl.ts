type Options = {
    readonly productionUrl?: string;
    readonly previewUrl?: string;
    readonly developmentUrl?: string;
};

export function getBaseUrl({
    productionUrl = 'https://yegair.io',
    previewUrl = process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : 'https://snippidy-git-develop-yegair.vercel.app',
    developmentUrl = 'http://localhost:3000',
}: Options = {}) {
    return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
        ? productionUrl
        : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
        ? previewUrl
        : developmentUrl;
}
