import HomeIcon from '../assets/Home.svg'
import AddIcon from '../assets/Add.svg'
import MatchesIcon from '../assets/Matches.svg'
import CalendarIcon from '../assets/uil_calender.svg'
import IconIcon from '../assets/Icon.svg'

function BottomNavBar({ active }) {
    return (
        <nav style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#FFFFFF',
            borderRadius: '40px',
            height: '64px',
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '8px 0px 40px rgba(117, 34, 119, 0.15)',
            width: '327px',
            padding: '8px',
        }}>
            <img src={HomeIcon} width={62} height={48} />
            <img src={IconIcon} width={24} height={24} />
            <img src={AddIcon} width={62} height={48} />
            <img src={CalendarIcon} width={24} height={24} />
            <img src={MatchesIcon} width={62} height={48} />
        </nav>
    )
}

export default BottomNavBar