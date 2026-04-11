import './index.css'

const Navbar = props => {
  const {formattedTimeForUi, score} = props
  console.log(score, 'Score------------')

  return (
    <>
      <nav className="navbar">
        <img
          className="navbar-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <ul className="nav-items">
          <li className="nav-item-score">
            <p>Score:{score}</p>
          </li>
          <li className="nav-item-timer">
            <img
              className="nav-item-timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="nav-item-score">{formattedTimeForUi} Sec</p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
