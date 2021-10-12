import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cn from 'classnames';

export const TextLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
    ({ className, ...props }, ref) => {
        return (
            <a
                {...props}
                ref={ref}
                className={cn('text-red-600 hover:text-red-300', 'transition-colors duration-200', className)}
            />
        );
    },
);
