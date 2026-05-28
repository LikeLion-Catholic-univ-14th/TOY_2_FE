import googleIcon from '../../assets/google_icon.svg'
import phoneIcon from '../../assets/phone_icon.svg'
import './LoginButtons.css'

function LoginButtons() {
    return (
        <div className="login-buttons-container">
            <button className="btn-phone">
                <img src={phoneIcon} alt="phone" className="btn-icon" />
                <span className="btn-phone-text">Login with Phone</span>
            </button>

            <button className="btn-google">
                <img src={googleIcon} alt="google" className="btn-icon" />
                <span className="btn-google-text">Login with Google</span>
            </button>

            <div className="signup-text">
                <span className="signup-text-default">Don't have an account? </span>
                <span className="signup-text-link">Sign Up</span>
            </div>
        </div>
    )
}

export default LoginButtons