import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import ChatArea from './components/ChatArea';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-nova-bg text-nova-text overflow-hidden font-sans">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Profile & Settings */}
        <div className="hidden lg:flex w-[320px] flex-col border-r border-[#1C212E] bg-nova-bg overflow-y-auto custom-scrollbar">
          <LeftSidebar />
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-[#0F1219] min-w-0">
          <ChatArea />
        </div>

        {/* Right Sidebar - Tasks & Gamification */}
        <div className="hidden xl:flex w-[320px] flex-col border-l border-[#1C212E] bg-nova-bg overflow-y-auto custom-scrollbar">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default App
