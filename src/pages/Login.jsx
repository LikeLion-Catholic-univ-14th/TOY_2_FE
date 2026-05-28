import LoginButtons from '../components/auth/LoginButtons'

function Login() {
    return (
        <div style={{
            width: '390px',
            height: '844px',
            backgroundColor: '#FFFFFF',
            position: 'relative',
            margin: '0 auto',
            overflow: 'hidden',
        }}>
            <h1 style={{
                position: 'absolute',
                top: '251px',
                left: '88px',
                width: '231px',
                height: '83px',
                fontFamily: 'Bakbak One',
                fontWeight: 400,
                fontSize: '64px',
                lineHeight: '130%',
                letterSpacing: '0px',
                color: '#4B164C',
                margin: 0,
            }}>
                Buylog
            </h1>

            <LoginButtons />
        </div>
    )
}

export default Login