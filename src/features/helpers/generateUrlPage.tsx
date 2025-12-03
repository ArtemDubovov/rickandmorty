import { URL } from "../../shared/api/const"

function generateUrlPage(page: number) {
    return `${URL}/page:${page}`;
}

export {generateUrlPage}