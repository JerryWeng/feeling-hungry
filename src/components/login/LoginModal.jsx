import { CSSTransition } from 'react-transition-group'

const LoginTransition = props => {
    return (
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className= {`login ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="login-content" onClick={e => e.stopPropagation()}>
                    <div className="login-header">
                        <h4 className="login-title">{props.title}</h4>
                    </div>
                    <div className="login-body">
                        {props.children}
                    </div>
                    <div className="login-footer">
                        <button onClick={props.onClose} className="button">Close</button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default LoginTransition