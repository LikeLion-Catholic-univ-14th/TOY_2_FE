import './PurchaseCard.css'
import overlayImage from '../../assets/overlay.svg'

function PurchaseCard({ imageUrl, itemName, category, amount, emotionTag, createdAt }) {
    const time = new Date(createdAt).toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
    })

    return (
        <div className="purchase-card">
            <div className="purchase-card__image-wrap">
                <img src={imageUrl} alt={itemName} className="purchase-card__image" />
                <img src={overlayImage} alt="" className="purchase-card__overlay-image" />
                <div className="purchase-card__overlay">
                    <p className="purchase-card__time">{time}</p>
                    <span className="purchase-card__category">{category}</span>
                    <p className="purchase-card__name">{itemName}</p>
                    <div className="purchase-card__emotion">
                        <span className="purchase-card__emotion-text">{emotionTag}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseCard