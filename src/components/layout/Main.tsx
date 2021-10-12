import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cn from 'classnames';

type Props = HTMLAttributes<HTMLDivElement> & {};

export const Main = forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
    return (
        <main {...props} ref={ref} className={cn('flex-grow space-y-24', className)}>
            {children}
        </main>
    );
});

export const MainHeading = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return (
            <h2
                {...props}
                ref={ref}
                className={cn('text-2xl uppercase', 'mx-4', 'md:mx-auto md:w-176', 'lg:w-200', className)}
            />
        );
    },
);

export const MainParagraph = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <p {...props} ref={ref} className={cn('mx-4', 'md:mx-auto md:w-176', 'lg:w-200', className)} />;
    },
);
