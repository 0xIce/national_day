import { useNavigate, useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // 检查是否是根路径
  const isRootPath = location.pathname === '/'
  
  return (
    <div className="app">
      {/* 只显示按钮选择界面 */}
      <div className="selection-screen">
        <div className="button-container">
          <button 
            className="selection-button flag-button"
            onClick={() => navigate('/flag')}
          >
            国旗动画
          </button>
          <button 
            className="selection-button word-button"
            onClick={() => navigate('/word')}
          >
            祖国万岁
          </button>
        </div>
      </div>
      {/* 底部标签 */}
      <div className="footer-label">@奇技课堂</div>
    </div>
  )
}

export default App
