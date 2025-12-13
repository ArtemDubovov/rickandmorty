/* -------------------------------------------------------------------------- */
/*            Вынести в отдельный тип  {path: string, name: string}           */
/* -------------------------------------------------------------------------- */
interface IHeaderProps {
    links: { path: string; name: string }[]
}

export type { IHeaderProps }
