import {Component} from 'react'
import EachTab from '../EachTab'
import EachImage from '../EachImage'
import './index.css'

class MatchGame extends Component {
  state = {
    whichtabIsSelected: this.props.tabsList[0].tabId,
    selectedItem: this.props.imagesList[0],
    selectedImage: this.props.imagesList[0].imageUrl,
    score: 0,
    isSelectedRightImage: true,
  }

  passTabId = tabId => {
    this.setState({whichtabIsSelected: tabId})
  }
  getImageId = eachImage => {
    const {selectedItem} = this.state
    if (eachImage.id === selectedItem.id) {
      const {imagesList} = this.props
      const randomSeletedItem = imagesList[Math.floor(Math.random() * 30)]
      this.setState({
        selectedItem: randomSeletedItem,
        selectedImage: randomSeletedItem.imageUrl,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState(prevState => ({
        isSelectedRightImage: !prevState.isSelectedRightImage,
      }))
      clearInterval(this.timerId)
    }
  }
  onClickResetBtn = () => {
    this.setState({
      whichtabIsSelected: this.props.tabsList[0].tabId,
      selectedItem: this.props.imagesList[0],
      selectedImage: this.props.imagesList[0].imageUrl,
      score: 0,
      isSelectedRightImage: true,
    })
    clearInterval(this.timerId)
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {
      whichtabIsSelected,
      selectedItem,
      selectedImage,
      isSelectedRightImage,
      score,
    } = this.state
    const selectedImagesList = imagesList.filter(
      eachItem => eachItem.category === whichtabIsSelected,
    )

    return (
      <div>
        <ul className="nav-bar">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="website-logo"
            />
          </li>
          <li className="score-and-timer">
            <p>
              Score: <span className="score-time-css">{score}</span>
            </p>
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="img-timer"
              />
              <p className="score-time-css">0 sec</p>
            </div>
          </li>
        </ul>
        <div className="game-section">
          {isSelectedRightImage ? (
            <div className="game-section-game">
              <img alt="match" className="shuffled-image" src={selectedImage} />
              <ul className="ul-list">
                {tabsList.map(each => (
                  <EachTab
                    key={each.tabId}
                    each={each}
                    passTabId={this.passTabId}
                    isTabActive={whichtabIsSelected === each.tabId}
                  />
                ))}
              </ul>
              <ul className="each-image-ul">
                {selectedImagesList.map(eachImage => (
                  <EachImage
                    key={eachImage.id}
                    eachImage={eachImage}
                    getImageId={this.getImageId}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="end-game">
              <img
                className="trophy-image"
                alt="trophy"
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              />
              <p className="your-score">YOUR SCORE</p>
              <h1 className="mar">{score}</h1>
              <button onClick={this.onClickResetBtn} className="btn-reset">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="reset-image"
                />
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
