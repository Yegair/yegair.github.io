import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cn from 'classnames';

export const Section = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return (
        <section
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
});

export const SectionCopy = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return <div {...props} ref={ref} className={cn('text-xl', className)} />;
    },
);

export const SectionHeading = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h3 {...props} ref={ref} className={cn('text-xl', className)} />;
    },
);

export const SectionSubheading = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h4 {...props} ref={ref} className={cn('text-lg', className)} />;
    },
);

export const SectionParagraph = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        return <p {...props} ref={ref} className={cn(className)} />;
    },
);

export const SectionList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
    ({ className, ...props }, ref) => {
        return <ul {...props} ref={ref} className={cn('list-disc list-inside space-y-2 text-sm', className)} />;
    },
);
