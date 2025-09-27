import { useState, useEffect, useRef } from 'react'
import './WordAnimation.css'

function WordAnimation() {
  const [showWords, setShowWords] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showCode, setShowCode] = useState(true)
  const animationRef = useRef(null)

  useEffect(() => {
    // 自动滚动动画
    let startTime = null
    const duration = 5000 // 5秒完成自动滚动
    const targetScroll = 600 // 滚动到600px位置

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // 计算当前滚动位置
      const currentScroll = progress * targetScroll
      setScrollPosition(currentScroll)
      
      // 当滚动到一定位置时隐藏代码，显示文字
      if (currentScroll > 300) {
        setShowCode(false)
        setShowWords(true)
      }
      
      // 继续动画直到完成
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateScroll)
      }
    }

    // 开始自动滚动动画
    animationRef.current = requestAnimationFrame(animateScroll)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // 生成代码滚动效果
  const renderCodeScroll = () => {
    const codeLines = [
      '// 庆祝国庆节',
      'function celebrateNationalDay() {',
      '  const message = "祖国万岁！";',
      '  const fireworks = createFireworks();',
      '  const music = playPatrioticSong();',
      '  return { message, fireworks, music };',
      '}',
      '',
      '// 祝福祖国繁荣昌盛',
      'const wishes = [',
      '  "愿祖国更加繁荣富强",',
      '  "愿人民幸福安康",',
      '  "愿未来更加美好",',
      '  "祖国万岁！"',
      '];',
      '',
      '// 执行庆祝函数',
      'const celebration = celebrateNationalDay();',
      'console.log(celebration.message);'
    ]

    return (
      <div className={`code-scroll-container ${showCode ? 'visible' : 'hidden'}`}>
        <div 
          className="code-scroll" 
          style={{ transform: `translateY(-${scrollPosition * 0.5}px)` }}
        >
          {codeLines.map((line, index) => (
            <div key={index} className="code-line">
              <span className="code-text">{line}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="word-animation-container">
      {renderCodeScroll()}
      <div className={`word-grid ${showWords ? 'visible' : 'hidden'}`}>
        <div className="character-container">
          <div className="character-text">祖</div>
        </div>
        <div className="character-container">
          <div className="character-text">国</div>
        </div>
        <div className="character-container">
          <div className="character-text">万</div>
        </div>
        <div className="character-container">
          <div className="character-text">岁</div>
        </div>
      </div>
    </div>
  )
}

export default WordAnimation