import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    indexCount: 0,
  }

  onClickLeftArrow = () => {
    this.setState(prevState => ({indexCount: prevState.indexCount - 1}))
  }

  onClickRightArrow = () => {
    this.setState(prevState => ({indexCount: prevState.indexCount + 1}))
  }

  render() {
    let {indexCount} = this.state
    const {reviewsList} = this.props
    if (indexCount > reviewsList.length - 1) {
      indexCount = reviewsList.length - 1
    } else if (indexCount < 0) {
      indexCount = 0
    }
    const listObj = reviewsList[indexCount]
    const {imgUrl, username, companyName, description} = listObj

    return (
      <div className="bg-container">
        <h1 className="heading-ele">Reviews</h1>
        <div className="reviews-card">
          <button
            type="button"
            className="btn-ele"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="reviewer-details">
            <img src={imgUrl} alt={username} />
            <p className="username-ele">{username}</p>
            <p className="des-ele">{companyName}</p>
            <p className="des-ele">{description}</p>
          </div>
          <button
            type="button"
            className="btn-ele"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
