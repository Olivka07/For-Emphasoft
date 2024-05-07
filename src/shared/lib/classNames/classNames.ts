type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
) {
    return [
        cls,
        Object.entries(mods)
            .filter(([_, key]) => Boolean(key))
            .map(([className]) => className),
        ...additional
    ].join(' ');
}
