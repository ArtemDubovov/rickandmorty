interface IButtonTagProps {
    tagName: string;
    fn: (value: string) => void;
    keys: string[] | undefined,
    defaultValue?: string
}

export type {IButtonTagProps};