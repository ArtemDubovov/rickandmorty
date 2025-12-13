import { FC } from 'react'
import { InfinitySpin } from 'react-loader-spinner'

import './styles/style.css'

const Loader: FC = () => {
    return (
        <div className="spinner">
            <InfinitySpin width="200" color="#4fa94d" />
        </div>
    )
}

export default Loader
