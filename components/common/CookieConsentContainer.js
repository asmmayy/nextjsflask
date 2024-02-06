import CookieConsent from 'react-cookie-consent'

const CookieConsentContainer = () => {
    return (
        <CookieConsent
            location='bottom'
            buttonText='Accetto'
            cookieName='userConsentCookie'
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255,255,255, 0.3)',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15px',
                zIndex: '999999',
            }}
            buttonStyle={{
                backgroundColor: '#3B82F6',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px',
                border: 'none',
                borderRadius: '5px'
            }}
            expires={150}
        >
            Questo sito utilizza i cookie per migliorare l'esperienza dell'utente.
            {/* <a 
                href="/cookie-policy" 
                style={{
                    color: '#F7B811', 
                    textDecoration: 'underline',
                    marginLeft: '5px'
                }}
            >
                Cookie Policy
            </a> */}
        </CookieConsent>
    )
}

export default CookieConsentContainer