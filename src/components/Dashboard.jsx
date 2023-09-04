import { Link } from 'react-router-dom'
import { HomeWrapper } from '../assets/Wrappers/HomeWrapper'
import styles from '../assets/styles/home.module.css'
import { Navbar } from './'
function DashBoard() {
  return (
    <div >
      <Navbar />
      <HomeWrapper>
        <div className={styles.links}>
          <Link
            className={[styles.button, styles.showDishes].join(' ')}
            to={'/list'}
          >
            Start Voting
          </Link>
          <Link
            className={[styles.button, styles.results].join(' ')}
            to={'/list/results'}
          >
            Show Result
          </Link>
        </div>
        
      </HomeWrapper>
    </div>
  )
}

export default DashBoard
