import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Testimonial from './components/Testimonial/Testimonial';

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

  // Card Messages
  const cardTitle = "Easy Deployment"
  const cardInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."

  // Testimonial Messages
  const testimonialName = "Sue Anon"
  const testimonialTitle = "Company Inc, Title"
  const testimonialInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." 

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
        <Banner type="success" title={successTitle} info={successInfo} />
        <Banner type="success" title={successTitle} />

        <Banner type="warning" title={warningTitle} info={warningInfo} />
        <Banner type="warning" title={warningTitle} />

        <Banner type="error" title={errorTitle} info={errorInfo} />
        <Banner type="error" title={errorTitle} />

        <Banner type="neutral" title={neutralTitle} info={neutralInfo} />
        <Banner type="neutral" title={neutralTitle} />
      </div>

      <div className="card-spacing">
        <Card title={cardTitle} info={cardInfo} path="/download" fileName={"test.txt"} />
        <Card title={cardTitle} info={cardInfo} path="/download" fileName={"test.txt"} />
      </div>

      <div className="testimonial-spacing">
        <Testimonial name={testimonialName} title={testimonialTitle} info={testimonialInfo} />
      </div> 

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
