interface IButtonTagProps {
    tagName: string
    fn: (name: string, value: string) => void
    keys: string[] | undefined
    defaultValue?: string
}

export type { IButtonTagProps }
