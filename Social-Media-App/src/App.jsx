
import { useState } from 'react'
import './App.css'
import CreatePost from './components/CreatePost'
import Footer from './components/Footer'
import Header from './components/Header'
import PostList from './components/PostList'
import SideBar from './components/SideBar'
import PostListProvider from './store/post-list-store'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home")


  return (
    <PostListProvider>
    
    <div className='d-flex'>
    <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    <div className='content'>
    <Header/>
    {selectedTab === "Home" ? (  <PostList/>  ) : (<CreatePost/> )}
    <Footer/> 
    </div>
    
    </div>
    </PostListProvider>
  )
}

export default App
