import { Link } from 'react-router-dom'
import { MdOutlineDoubleArrow } from 'react-icons/md'

import './LinkButton.css'

const LinkButton = ({ to, text }) => {
    return (
        <Link className='btn' to={to}>
            {text} <MdOutlineDoubleArrow />
        </Link>
    )
}

export default LinkButton