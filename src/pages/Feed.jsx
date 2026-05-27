import FeedHeader from '../components/feed/FeedHeader'
// import BottomNavBar from '../components/BottomNavBar'
import TodayTitle from '../components/feed/TodayTitle'
import PurchaseCard from '../components/feed/PurchaseCard'
import testImage from '../assets/Eximg.png'

function Feed() {
    return (
        <div>
            <FeedHeader />
            <TodayTitle total="28,500" />
            <PurchaseCard
                imageUrl={testImage}
                itemName="아이스 아메리카노"
                category="카페"
                amount={4500}
                emotionTag="잘샀다"
                createdAt="2024-01-01T10:12:00"
            />
            {/* <BottomNavBar /> */}
        </div>
    )
}

export default Feed