import './PurchaseCard.css'
import overlayImage from '../../assets/overlay.svg'
import crossIcon from '../../assets/cross.svg'
import { useNavigate } from 'react-router-dom'

function AddCard() {
    const navigate = useNavigate()

    return (
        <div className="purchase-card" onClick={() => navigate('/buylog')} style={{ cursor: 'pointer' }}>
            <div className="purchase-card__price-badge" style={{ visibility: 'visible' }}>
            </div>
            <div className="purchase-card__inner">
                <div className="purchase-card__image-wrap" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img src={overlayImage} alt="" className="purchase-card__overlay" />
                    <img src={crossIcon} alt="추가" style={{ position: 'relative', zIndex: 2, width: '26px', height: '26px' }} />
                </div>
            </div>
        </div>
    )
}

export default AddCard