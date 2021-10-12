import type { Icon as IconComponent } from 'react-feather';
import { GitHub, Menu, Twitter } from 'react-feather';

export type IconId = 'github' | 'menu' | 'twitter';

type Props = {
    readonly id: IconId;
    readonly className?: string;
};

const ICON_COMPONENTS: { readonly [TKey in IconId]: IconComponent } = {
    github: GitHub,
    menu: Menu,
    twitter: Twitter,
};

export function Icon({ id, className }: Props) {
    const Component = ICON_COMPONENTS[id];

    if (!Component) {
        return null;
    }

    return <Component className={className} />;
}
