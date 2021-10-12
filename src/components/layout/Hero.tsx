import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cn from 'classnames';

type Props = HTMLAttributes<HTMLDivElement> & {};

export const Hero = forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
    return (
        <div
            {...props}
            ref={ref}
            className={cn(
                'md:w-176',
                'min-h-40 sm:min-h-80',
                'flex flex-col items-center justify-center',
                'mx-4 md:mx-auto',
                'space-y-12',
                className,
            )}
        >
            {children}
        </div>
    );
});

export const HeroHeading = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h2 {...props} ref={ref} className={cn('text-3xl text-center', className)} />;
    },
);
