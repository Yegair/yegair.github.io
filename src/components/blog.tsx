import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cn from 'classnames';
import { TextLink } from './TextLink';

export const BlogArticle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <article
                {...props}
                ref={ref}
                className={cn(
                    'flex flex-col justify-center',
                    'mx-4 md:mx-auto',
                    'md:w-176 lg:w-200',
                    'space-y-6',
                    className,
                )}
            />
        );
    },
);

export const BlogHeading1 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h1 {...props} ref={ref} className={cn('text-2xl', className)} />;
    },
);

export const BlogHeading2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h2 {...props} ref={ref} className={cn('text-xl', className)} />;
    },
);

export const BlogHeading3 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h3 {...props} ref={ref} className={cn('text-lg', className)} />;
    },
);

export const BlogParagraph = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        return <p {...props} ref={ref} className={cn(className)} />;
    },
);

export const BlogLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
    ({ className, ...props }, ref) => {
        return <TextLink {...props} ref={ref} className={cn(className)} />;
    },
);

export const BlogPre = forwardRef<HTMLPreElement, HTMLAttributes<HTMLPreElement>>(({ className, ...props }, ref) => {
    return <pre {...props} ref={ref} className={cn('bg-gray-800 p-2 text-gray-200 rounded text-sm', className)} />;
});

export const BlogCode = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return <code {...props} ref={ref} className={cn(className)} />;
});

export const BlogInlineCode = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <code
                {...props}
                ref={ref}
                className={cn('bg-gray-800 px-1 py-0.5 text-gray-200 rounded text-sm', className)}
            />
        );
    },
);
