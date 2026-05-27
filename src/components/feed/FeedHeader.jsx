import './FeedHeader.css'
import BackIcon from '../../assets/Back.svg'
import FilterIcon from '../../assets/Setting.svg'

function FeedHeader() {
    return (
        <header className="feed-header">
            <button className="feed-header__back">
                <img src={BackIcon} alt="뒤로가기" />
            </button>
            <h1 className="feed-header__title">피드</h1>
            <button className="feed-header__filter">
                <img src={FilterIcon} alt="필터" />
            </button>
        </header>
    )
}

export default FeedHeader