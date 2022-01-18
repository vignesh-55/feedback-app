import PropTypes from 'prop-types'


export default function Card(props) {
    return (
        <div className="card" style={{backgroundColor: props.reverse ? "black" : "white", 
          color: props.reverse ? "white" : "black"}}>
            {props.children}
        </div>
    )
}

Card.defaultProps = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
