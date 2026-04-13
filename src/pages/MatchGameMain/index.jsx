import {Component} from 'react'
import AlbumComponent from '../../components/AlbumsComponent'
import Navbar from '../../components/Navbar'
import TabsComponent from '../../components/TabsComponent'
import GameoverComponent from '../../components/GameOverCompo'
import './index.css'

// These are the lists used in the application. You can move them to any component needed.
const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]
const imagesList = [
  {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'a132f546-5b2b-4c0d-b9e4-e524bdf904cc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'd89386da-94db-4275-9cb5-249c6e071a19',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'd810bbb0-1683-407a-8db6-898fe7b75782',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '176aab62-e86a-4ccd-8b89-5b83c3f02506',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '0e8daf1b-45b0-4eb0-9dde-383fede78a9b',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1a38bf4a-659d-4470-956c-56c1bedd26ac',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '97a33ed5-98ed-4c95-a8f0-1595880b3b69',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '07e20159-a950-4c22-9ca8-5ed71563ae24',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '43883239-8a28-47dc-9e93-43ef31654c17',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png',
    category: 'PLACE',
  },
  {
    id: '49865ac4-b5e8-4d04-893b-d69ad6004da8',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '649ab251-7fd6-4d65-aa0f-39020ce25932',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1d0d1c41-e05e-4820-8614-34ee5ada20e0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png',
    category: 'PLACE',
  },
  {
    id: '88b4ab36-a0c1-4c56-9ce5-3b80dd8c7669',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-coyote-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-thumbnail-coyote-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8a841bf8-3222-44da-b0fb-4c60190402d7',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-valley-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-thumbnail-valley-img.png',
    category: 'PLACE',
  },
  {
    id: 'd406e63c-eaaf-49ea-88a6-ed6a1572eb97',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: 'e997ebf9-9a47-4b7e-9035-01ae372d73dc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png',
    category: 'FRUIT',
  },
  {
    id: 'c7fbe10e-3282-4fca-815b-91b75d5228cb',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/goa-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/goa-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '4210274c-7304-44d6-8690-c5251252cd10',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '057b6193-a80d-4036-9e6e-fe847c99fbb6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png',
    category: 'FRUIT',
  },
  {
    id: '4e56c59b-835b-4802-87fe-77aaaa5b9526',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/fox-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fox-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'ad75a7b1-0875-4700-977b-2c45924509aa',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-temple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-thumbnail-temple-img.png',
    category: 'PLACE',
  },
  {
    id: '525aba17-ed5c-4f09-ad1c-b6bff222c97a',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/dog-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dog-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'c6c66b00-c130-47d2-9d3a-1c3378d08aba',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '6078b408-4f10-46d3-8815-db14403dbd73',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'a2baca84-3beb-49d1-bced-f9a88c161bec',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1edac278-8390-4da9-b914-5f41fb49283c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
    category: 'FRUIT',
  },
]

// Replace your code here
class MatchGameMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeElapsedInSec: 0,
      isGameOver: false,
      score: '0',
      currentBigThumbnailId: imagesList[0].id,
      activeTabId: tabsList[0].tabId,
      // below is for adding start btn, error feature
      isGameStart: false,
    }
  }

  componentDidMount() {
    const {isGameOver, isGameStart} = this.state 
    
    // below line is saying that: agar isGameOver: false ; yani game over nhi hua ho + isGameStart: true ho tabhi timer start karna
    !isGameOver && isGameOver ? this.timerId = setInterval(this.startTimer, 1000) : clearInterval(this.timerId)

    // Extra New Concept: Preloading to avoid delay in bigImage change when album gets clicked
    imagesList.forEach(eachObj => {
      const preloadingImgAtBrowserCache = new Image()
      preloadingImgAtBrowserCache.src = eachObj.imageUrl
    })
  }
  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  // Function for Clicked Album Cards
  onClickedthumbnailsImg = rId => {
    const {isGameOver, isGameStart, currentBigThumbnailId} = this.state

    // Agar Start button Clicked hai (isGameStart: true hai) tabhi timer start hoga or album click honge otherwise error jayega click start btn
    if (isGameStart){
      // if statement: agar rId match ho gai imageList ke matched object id se to score increment karo aour current bigImage ko randomly change karo
    // else : otherwise gameover screen ke liye isGameOver: true kardo
    if (rId === currentBigThumbnailId && !isGameOver) {
      // logic of getting random bigThumbnailImage id from the imagesList data
      const randomNum = Math.floor(Math.random() * imagesList.length)
      // console.log('random bigImg num: ', randomNum)
      const randomBigImageId = imagesList[randomNum].id

      //  updating in state
      this.setState(prevState => ({
        score: parseInt(prevState.score) + 1,
        currentBigThumbnailId: randomBigImageId,
      }))
    } else {
      this.setState({isGameOver: true})
      clearInterval(this.timerId)
    }
    } 
    else {
      alert("Click Start Button to Run the GAME")
    }


    
  }

  //   filtering imagesList based on current Tab clicked and sotring/returning in a new arrayOfObjects
  filteredImagesListBasedOnTabs = () => {
    const {activeTabId} = this.state

    // below logic mean: ImagesList me jin jin imageObject ki 'category' 'activeTabId' se match ho jati hai un sabko utha ke new variable 'filterdImagesList' me rakh lo
    const filterdImagesList = imagesList.filter(
      eachImageObj => eachImageObj.category === activeTabId,
    )
    return filterdImagesList
  }

  //   onClicked Tabs in Ui tum state={} me currentTabId update kardo
  onClickedTab = rTabId => {
    this.setState({activeTabId: rTabId})
  }

  // Start button Event listner 
  onClickStartBtn = () => {
    this.setState({isGameStart: true})
    
    if (this.timerId) {
      clearInterval(this.timerId)
    }
    this.timerId = setInterval(this.startTimer, 1000)
  }

  // Play Again button onClick event
  onClickResetBtn = () => {
    this.setState({score: '0', timeElapsedInSec: 0, isGameOver: false, isGameStart: false})
    clearInterval(this.timerId)
    // this.timerId = setInterval(this.startTimer, 1000)
  }

  // setting timer callback function
  startTimer = () => {
    const {timeElapsedInSec} = this.state

    if (timeElapsedInSec === 1 * 60) {
      clearInterval(this.timerId)
      //  agar timer 00 ho jaye UI me or can say (timerLimit of 60 sec complete ho jaye internally) to isGameOver: true kar do
      this.setState({isGameOver: true})
    } else {
      this.setState({timeElapsedInSec: timeElapsedInSec + 1})
    }
  }

  //   formatted time for UI
  formattedTimeForUi() {
    const {timeElapsedInSec} = this.state

    const remainingTimeInSec = 1 * 60 - timeElapsedInSec
    const uiFormattedTime =
      remainingTimeInSec > 9 ? remainingTimeInSec : `0${remainingTimeInSec}`

    return uiFormattedTime
  }

  render() {
    const {isGameOver,isGameStart, score, currentBigThumbnailId, activeTabId} = this.state
    // below is for testing above logic part
    // console.log('Current BigThumbnail: ', currentBigThumbnailId)
    // console.log('is GameOver ? ', isGameOver, 'Score: ', score)

    const filteredThumbnailsList = this.filteredImagesListBasedOnTabs()
    // console.log('Filtered ImagesList: ', filteredThumbnailsList)

    const filteredClickedAlbum = imagesList.filter(
      eachAlbum => eachAlbum.id === currentBigThumbnailId,
    )
    const {imageUrl} = filteredClickedAlbum[0]

    // start button changing text 
    console.log(isGameStart, "GAme start")
    const isStarted = isGameStart ? "disabled" : ""

    return (
      <>
        <div className="matchgame-bg-container">
          <Navbar
            formattedTimeForUi={this.formattedTimeForUi()}
            score={score}
          />
          {isGameOver ? (
            <GameoverComponent
              onClickResetBtn={() => this.onClickResetBtn()}
              score={score}
            />
          ) : (
            <>
              <img className="big-album" src={imageUrl} alt="match" />

              {/* Added Start Button */}
              {isGameStart ? <button disabled onClick={this.onClickStartBtn}  className="game-start-btn" type="button">Game Started</button> 
              : <button onClick={this.onClickStartBtn}  className="game-start-btn" type="button">Start</button>}

              <ul className="tabs-container">
                {tabsList.map(eachTab => (
                  <TabsComponent
                    key={eachTab.tabId}
                    eachTabDetails={eachTab}
                    onClickedTab={this.onClickedTab}
                    isActiveTab={activeTabId === eachTab.tabId}
                  />
                ))}
              </ul>
              <ul className="album-container ">
                {filteredThumbnailsList.map(eachAlbum => (
                  <AlbumComponent
                    key={eachAlbum.id}
                    albumDetails={eachAlbum}
                    onClickedAlbum={this.onClickedthumbnailsImg}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}

export default MatchGameMain
