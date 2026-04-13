import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import "./index.css"


const InstructionPage = () => {
    // calling useNavigate to implement it for play button
    const navigate = useNavigate()

    // setting state
    const [isChecked, setCheckbox] = useState(false)

    // checkbox event listner 
    const onClickCheckBox = (event) => (setCheckbox(event.target.checked))
    
    // Play Button Event listners + condition based navigation via 'useNavigate' child of react-router-dom 
    const onClickPlayBtn = () => {
        if (isChecked){
            navigate("/matchgame")
        } 
        else {
            alert("Please mark the instructions read !")
        }
    }


    return(
        <>
            <div className="instruction-container">
                <h1 className="instruction-heading">Match Game ! Lets Play</h1>
                <img className="instruction-img" src="match-game-img.png" />
                 <ul className="instruction-list-container">
                    <li>🎯 <strong>Objective:</strong> Match the big image with the correct thumbnail</li>

                    <li>🕹️ <strong>How to Play:</strong>
                    <ul>
                        <li>📸 A big image will be shown at the top</li>
                        <li>🖼️ Multiple thumbnails will appear below</li>
                        <li>👉 Click the thumbnail that matches the big image</li>
                    </ul>
                    </li>

                    <li>✅ <strong>Correct Match:</strong>
                    <ul>
                        <li>➕ Score increases by 1</li>
                        <li>🔄 New image will appear</li>
                    </ul>
                    </li>

                    <li>❌ <strong>Wrong Match:</strong>
                    <ul>
                        <li>💀 Game will be over immediately</li>
                    </ul>
                    </li>

                    <li>⏳ <strong>Time Limit:</strong>
                    <ul>
                        <li>⏱️ You have 60 seconds to play</li>
                        <li>⌛ Game ends when time runs out</li>
                    </ul>
                    </li>

                    <li>📂 <strong>Categories:</strong>
                    <ul>
                        <li>🍎 Fruits</li>
                        <li>🐘 Animals</li>
                        <li>🌍 Places</li>
                    </ul>
                    </li>

                    <li>🔁 <strong>Restart:</strong>
                    <ul>
                        <li>🔄 Click "Play Again" to restart the game</li>
                    </ul>
                    </li>

                    <li>🏆 <strong>Goal:</strong> Score as high as possible!</li>

                    <li>💡 <strong>Tips:</strong>
                    <ul>
                        <li>⚡ Be fast and accurate</li>
                        <li>👀 Observe the big image carefully</li>
                    </ul>
                    </li>
                </ul>
                <div className="instructions-btn-container">
                    <div className="instruction-checkbox-container">
                        <input onClick={onClickCheckBox} id="InstructionCheckbox" type="checkbox" />
                        <label htmlFor="InstructionCheckbox" className="instruction-checkbox-label" >Have You Read it ?</label>
                    </div> 
                    {/* removed <Link> child replaced it via useNavigate() children */}
                    <button onClick={onClickPlayBtn} className="instruction-btn">Play !</button>
                </div>
            </div>
        </>
    )
} 

export default InstructionPage 
