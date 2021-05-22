

export function getProp<T extends any, V extends any>(
    target: T,
    propPath: string
): V;

export function setProp<T extends any, V extends any>(
    target: T,
    propPath: string,
    value: V
): void;

