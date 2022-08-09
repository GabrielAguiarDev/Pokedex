import { Link } from 'react-router-dom'
import { MdOutlineDoubleArrow } from 'react-icons/md'

function LinkButton({ to, text }) {
    return (
        <Link to={to}>
            {text} <MdOutlineDoubleArrow />
        </Link>
    )
}

export default LinkButton