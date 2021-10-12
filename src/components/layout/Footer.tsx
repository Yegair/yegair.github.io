import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cn from 'classnames';
import type { IconId } from '../Icon';
import { Icon } from '../Icon';
import { Navigation } from 'react-feather';

type Props = HTMLAttributes<HTMLDivElement>;

export const Footer = forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
    return (
        <footer
            {...props}
            ref={ref}
            className={cn(
                'flex-shrink-0',
                'flex flex-row justify-center items-center sm:items-end',
                'min-h-32',
                'mx-4 mt-16',
                'pb-10',
                'space-y-2 sm:space-y-6',
                'md:mx-auto md:w-176',
                'lg:w-200',
                'text-sm',
                className,
            )}
        >
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
                <li>
                    <IconLink icon="twitter" href="https://twitter.com/yegairio" target="_blank" rel="noreferrer">
                        Twitter
                    </IconLink>
                </li>
                <li>
                    <IconLink icon="github" href="https://github.com/Yegair" target="_blank" rel="noreferrer">
                        GitHub
                    </IconLink>
                </li>
                <li>
                    <NavLink href="/impressum">Impressum</NavLink>
                </li>
            </ul>
            {children}
        </footer>
    );
});

const NavLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
    ({ className, ...props }, ref) => {
        return (
            <a
                {...props}
                ref={ref}
                className={cn('text-blue-800 hover:text-blue', 'transition transition-colors duration-150', className)}
            />
        );
    },
);

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly icon: IconId;
};

const IconLink = forwardRef<HTMLAnchorElement, IconLinkProps>(({ icon, className, children, ...props }, ref) => {
    return (
        <a
            {...props}
            ref={ref}
            className={cn('text-gray-600 hover:text-black', 'transition-colors duration-200', className)}
        >
            <Icon id={icon} />
            <span className="sr-only">{children}</span>
        </a>
    );
});
