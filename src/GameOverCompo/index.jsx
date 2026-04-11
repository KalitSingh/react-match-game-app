import './index.css'

const GameoverComponent = props => {
  const {score, onClickResetBtn} = props

  return (
    <div className="game-over-card-container">
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="score-title">Your Score</p>
      <p className="score">{score}</p>
      <button
        onClick={onClickResetBtn}
        className="play-again-btn"
        type="button"
      >
        <img
          className="reset-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        Play Again
      </button>
    </div>
  )
}

export default GameoverComponent
