import { useState, useEffect, useRef } from 'react'
import './App.css'

function FlagAnimation() {
  const [showFlag, setShowFlag] = useState(false)
  const [isScrolling, setIsScrolling] = useState(true)
  const codeRef = useRef(null)

  // 生成随机代码行
  const generateRandomCode = () => {
    const keywords = ['const', 'let', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import']
    const functions = ['animateFlag', 'drawStar', 'createBackground', 'calculateWind', 'renderPattern']
    const variables = ['red', 'yellow', 'stars', 'windForce', 'animationSpeed', 'canvas', 'context', 'flag']
    
    const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)]
    
    const codeTypes = [
      `${randomChoice(keywords)} ${randomChoice(variables)} = ${Math.random() > 0.5 ? Math.floor(Math.random() * 100) : `'${randomChoice(variables)}'`};`,
      `${randomChoice(keywords)} ${randomChoice(functions)} = () => {};`,
      `if (${randomChoice(variables)} > ${Math.floor(Math.random() * 10)}) {`,
      `  ${randomChoice(keywords)} ${randomChoice(variables)} = ${Math.random() > 0.5 ? 'true' : 'false'};`,
      `}`,
      `${randomChoice(functions)}(${Array(Math.floor(Math.random() * 3) + 1).fill().map(() => randomChoice(variables)).join(', ')});`
    ]
    
    return randomChoice(codeTypes)
  }

  // 生成代码矩阵
  const generateCodeMatrix = (rows) => {
    return Array(rows).fill().map(() => generateRandomCode())
  }
  
  const codeLines = generateCodeMatrix(1000)

  useEffect(() => {
    // 代码滚动效果
    const codeElement = codeRef.current
    if (!codeElement) return
    
    let scrollPosition = 0
    const scrollSpeed = 20 // 增加滚动速度
    
    const scrollInterval = setInterval(() => {
      if (isScrolling) {
        scrollPosition += scrollSpeed
        codeElement.scrollTop = scrollPosition
        
        // 滚动到一定位置后显示国旗
        if (scrollPosition > 2000) {
          setIsScrolling(false)
          setTimeout(() => {
            setShowFlag(true)
          }, 300) // 缩短过渡延迟
        }
      }
    }, 15) // 减小间隔时间，使滚动更流畅
    
    return () => clearInterval(scrollInterval)
  }, [isScrolling])

  return (
    <div className="app">
      {!showFlag ? (
        // 代码滚动界面
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-title">国旗动画系统</div>
          </div>
          <div className="terminal-content" ref={codeRef}>
            {codeLines.map((line, index) => (
              <div key={index} className="code-line">
                <span className="line-number">{index + 1}</span>
                <span className="line-content">{line}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 国旗动画界面
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
      )}
      {/* 底部标签 */}
      <div className="footer-label">@奇技课堂</div>
    </div>
  )
}

export default FlagAnimation