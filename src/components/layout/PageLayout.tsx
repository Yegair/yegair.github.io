import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cn from 'classnames';

type Props = HTMLAttributes<HTMLDivElement>;

export const PageLayout = forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
    return <div {...props} ref={ref} className={cn('h-full min-h-screen', 'w-full', 'flex flex-col', className)} />;
});
