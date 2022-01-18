import Card from '../components/styledComp/Card'
import {Link} from 'react-router-dom'

function AboutPage({reverse}) {
    return (
        <Card reverse={reverse}>
            <div className='about'>
                <h1>Your Feedback</h1>
                <p>A simple web page made with react used with some basic concepts of React</p>

                <p><Link to="/" style={{textDecoration:'none'}}>Go Back</Link></p>
            </div>
        </Card>
    )
}

export default AboutPage
