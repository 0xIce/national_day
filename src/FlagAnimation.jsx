import { useState, useEffect } from 'react'
import './App.css'

function FlagAnimation() {
  const [showFlag, setShowFlag] = useState(false)

  useEffect(() => {
    // 页面加载后立即显示国旗
    setShowFlag(true)
  }, [])

  return (
    <div className="app">
      <div className={`flag-container ${showFlag ? 'visible' : ''}`}>
        <div className="flagpole"></div>
        <div className="flag">
          {/* 旗帜飘扬层 - 从左到右的水平波浪效果 */}
          <div className="flag-layer"></div>
          <div className="flag-layer"></div>
          <div className="flag-layer"></div>
          
          <div className="stars">
            <div className="big-star"></div>
            <div className="small-stars">
              <div className="star star1"></div>
              <div className="star star2"></div>
              <div className="star star3"></div>
              <div className="star star4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlagAnimation