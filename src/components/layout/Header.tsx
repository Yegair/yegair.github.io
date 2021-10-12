import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';
import cn from 'classnames';
import { Icon } from '../Icon';

type Props = HTMLAttributes<HTMLDivElement>;

export const Header = forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
        <header {...props} ref={ref} className={cn('flex-shrink-0', className)}>
            <nav
                className={cn(
                    'relative',
                    'flex justify-between items-center',
                    'pt-6',
                    'px-4 md:px-0',
                    'md:mx-auto',
                    'md:w-176 lg:w-200',
                    'h-24',
                    'sm:bg-transparent',
                    visible ? 'bg-gray-200' : 'bg-gray-100',
                )}
            >
                <a href="/" className="flex items-center h-18">
                    <div className="h-16 w-16 rounded-full p-1 shadow bg-white">
                        <img src="/profile.png" className="h-full rounded-full mr-10" alt="Profile Picture" />
                    </div>
                </a>
                <button className="sm:hidden" onClick={() => setVisible(it => !it)}>
                    <Icon id="menu" />
                </button>
                <ul
                    className={cn(
                        'absolute top-24 left-0 sm:static',
                        'w-full sm:w-auto',
                        'p-12 sm:p-0',
                        visible ? 'flex' : 'hidden',
                        'sm:flex flex-col sm:flex-row',
                        'items-end sm:items-center',
                        'sm:space-x-6',
                        'space-y-4 sm:space-y-0',
                        'shadow-md sm:shadow-none',
                        visible ? 'bg-gray-200' : 'bg-gray-100',
                        'sm:bg-transparent',
                        'border-b border-ash-700 sm:border-0',
                    )}
                >
                    <li>
                        <NavLink href="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink href="/blog">Blog</NavLink>
                    </li>
                </ul>
            </nav>
            {children}
        </header>
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
