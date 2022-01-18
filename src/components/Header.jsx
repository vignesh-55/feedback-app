import PropTypes from 'prop-types'
// to use what type of props that'll be used

function Header(props) {  // {content, bgColor, letterColor} - destructuring
    const headerStyles = {
        fontFamily: props.font,
        backgroundColor: props.bgColor,
        color: props.letterColor,
    }
    //style={{backgroundColor: 'red', color: 'blue'}}
    return (
        <header style={headerStyles}>
            <h1 className="container">
                {props.content}
            </h1>
        </header>
    )
}

// sets the default prop if not specified
Header.defaultProps = {
    content: "Your Feedback",
    bgColor: "#344CB7",
    letterColor: "#EBE645",
    font: 'Nunito',
}

// sets the type that it will accept
Header.propTypes = {
    content: PropTypes.string,
    bgColor: PropTypes.string,
    letterColor: PropTypes.string
}

export default Header
