import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'
function AboutLink() {
    return (
        <div className="about-link">
            <Link to='/about'>
                <FaQuestion  onMouseEnter={(e) => e.target.style.color = '#7bec5e'} onMouseLeave={(e) => e.target.style.color = 'coral'} style={{color: 'coral'}} size={30} />
            </Link>
        </div>
    )
}

export default AboutLink
