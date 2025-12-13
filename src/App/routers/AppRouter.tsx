import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../layout/Layout'
import { ROUTERS } from './const'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {ROUTERS.map((r) => (
                    <Route
                        key={r.path}
                        path={r.path}
                        element={<Layout page={r.element} />}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
