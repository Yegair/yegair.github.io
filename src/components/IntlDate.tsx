import { intlFormat, parseISO } from 'date-fns';

type Props = {
    readonly date: Date | number | string | null | undefined;
};

export function IntlDate({ date }: Props) {
    return date ? (
        <>
            {intlFormat(parseIfRequired(date), {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}
        </>
    ) : null;
}

function parseIfRequired(date: Date | number | string): Date | number {
    if (typeof date === 'string') {
        return parseISO(date);
    }

    return date;
}
