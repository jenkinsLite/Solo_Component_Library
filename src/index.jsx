import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"

function App() {

  // Banner Messages
  const successTitle = "Congratulations!"
  const successInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."

  const warningTitle = "Attention"
  const warningInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."

  const errorTitle = "There is a problem with your application"
  const errorInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."

  const neutralTitle = "Update available"
  const neutralInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
  
  return (
    <>
      <div className="badge-spacing">
        <Badge type="square" color="grey">Badge</Badge> 
        <Badge type="square" color="red">Badge</Badge> 
        <Badge type="square" color="yellow">Badge</Badge> 
        <Badge type="square" color="green">Badge</Badge> 
        <Badge type="square" color="blue">Badge</Badge> 
        <Badge type="square" color="indigo">Badge</Badge> 
        <Badge type="square" color="purple">Badge</Badge> 
        <Badge type="square" color="pink">Badge</Badge> 
      </div>

      <div className="badge-spacing">
        <Badge type="pill" color="grey">Badge</Badge> 
        <Badge type="pill" color="red">Badge</Badge> 
        <Badge type="pill" color="yellow">Badge</Badge> 
        <Badge type="pill" color="green">Badge</Badge> 
        <Badge type="pill" color="blue">Badge</Badge> 
        <Badge type="pill" color="indigo">Badge</Badge> 
        <Badge type="pill" color="purple">Badge</Badge> 
        <Badge type="pill" color="pink">Badge</Badge> 
      </div>
      
      <div className="banner-spacing">
        <Banner type="success" title={successTitle} info={successInfo}></Banner>
        <Banner type="warning" title={warningTitle} info={warningInfo}></Banner>
        <Banner type="error" title={errorTitle} info={errorInfo}></Banner>
        <Banner type="neutral" title={neutralTitle} info={neutralInfo}></Banner>
      </div>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
