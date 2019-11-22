import React from 'react'
import Layout, { PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import Link from 'next/link' 
import { IconRight } from '../components/Layout/icons';

const LandingStyle = {
  Header: styled.header`
    min-height:45vh; 
    display:flex;
    align-items:center;
    justify-contents:center;
    .intro__text{
      font-size: 54px;
      font-weight: 900; 
      margin: 2rem 0rem 1.5rem ;
      position: relative;
      // &:hover{
        &::before,
      &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; 
        height: 100%;
      }
      &::before {
        left: 2px;
        text-shadow: -1px 0 blue;
        background: #fff;
        animation: noise-anim-2 15s infinite linear alternate-reverse;
      }
      &::after {
        left: -2px;
        text-shadow: 3px 0 red;
        animation: noise-anim 2s infinite linear alternate-reverse;
        background: #fff;
      }
      @keyframes noise-anim {
        0% {
          clip-path: inset(29% 0 25% 0);
        }
        5% {
          clip-path: inset(9% 0 38% 0);
        }
        10% {
          clip-path: inset(96% 0 1% 0);
        }
        15% {
          clip-path: inset(75% 0 23% 0);
        }
        20% {
          clip-path: inset(46% 0 50% 0);
        }
        25% {
          clip-path: inset(3% 0 46% 0);
        }
        30% { 
          clip-path: inset(82% 0 2% 0);
        }
        35% {
          clip-path: inset(88% 0 1% 0);
        }
        40% {
          clip-path: inset(91% 0 8% 0);
        }
        45% {
          clip-path: inset(96% 0 2% 0);
        }
        50% {
          clip-path: inset(59% 0 38% 0);
        }
        55% {
          clip-path: inset(41% 0 53% 0);
        }
        60% {
          clip-path: inset(21% 0 47% 0);
        }
        65% {
          clip-path: inset(89% 0 4% 0);
        }
        70% {
          clip-path: inset(1% 0 95% 0);
        }
        75% {
          clip-path: inset(86% 0 4% 0);
        }
        80% {
          clip-path: inset(95% 0 5% 0);
        }
        85% {
          clip-path: inset(54% 0 36% 0);
        }
        90% {
          clip-path: inset(70% 0 27% 0);
        }
        95% {
          clip-path: inset(6% 0 16% 0);
        }
        100% {
          clip-path: inset(95% 0 2% 0);
        }
      }
      @keyframes noise-anim-2 {
        0% {
          clip-path: inset(76% 0 21% 0);
        }
        5% {
          clip-path: inset(54% 0 7% 0);
        }
        10% {
          clip-path: inset(55% 0 29% 0);
        }
        15% {
          clip-path: inset(89% 0 3% 0);
        }
        20% {
          clip-path: inset(33% 0 40% 0); 
        }
        25% {
          clip-path: inset(17% 0 56% 0);
        }
        30% {
          clip-path: inset(37% 0 51% 0);
        }
        35% {
          clip-path: inset(38% 0 19% 0);
        }
        40% {
          clip-path: inset(93% 0 4% 0);
        }
        45% {
          clip-path: inset(44% 0 14% 0);
        }
        50% {
          clip-path: inset(53% 0 26% 0);
        }
        55% {
          clip-path: inset(67% 0 11% 0);
        }
        60% {
          clip-path: inset(85% 0 13% 0);
        }
        65% {
          clip-path: inset(27% 0 37% 0);
        }
        70% {
          clip-path: inset(87% 0 4% 0);
        }
        75% {
          clip-path: inset(10% 0 8% 0);
        } 
        80% {
          clip-path: inset(51% 0 27% 0);
        }
        85% {
          clip-path: inset(10% 0 60% 0);
        }
        90% {
          clip-path: inset(83% 0 3% 0);
        }
        95% {
          clip-path: inset(23% 0 55% 0);
        }
        100% {
          clip-path: inset(1% 0 81% 0);
        }
      }
      // }
      
    }
    p{
      font-size: 16px;
      line-height: 2.3;
      font-weight: 400;
      color: var(--article-color) !important;
    }
    img{ 
      height: 160px;
    }
    button{
      font-size: 16px;
      background: var(--mark);
      border: none;
      border-radius: 5px;
      padding: 0px 9px;  
    }
  ` ,
  FirstSection: styled.div`
    p{
      font-size: 14px; 
      transition: all 1s ease;
      svg{
        margin-left: 1rem;
        animation-name: forward;
        animation-duration: .5s;
        animation-iteration-count: infinite;
        animation-direction:alternate;
      }
      &:hover {
        svg{
         
        }

        @keyframes forward {
          from {
            margin-left: 1rem;
          }
          to {
            margin-left: 2rem;
          }
        }
      }
    }
  
  `
}
class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      x: 0,
      y: 0,
    }
  }
  render(){
    const startMouseEvent = (e) => {
      let x = e.clientX, 
      y = e.clientY
      this.setState({x:x, y: y})
    }    
    const stopCapture = () => {
      let x = 0, 
      y = 0
      this.setState({x:x, y: y})
    }    
    const copyText = (e) => {
      console.log(e)
      var textField = document.createElement('textarea')
      textField.innerText = 'hellocodewonders@gmail.com'
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }
    const {x, y} = this.state
    
    return (
      <Layout>
        <LandingStyle.Header>
          <PageWrapper>
            <h1 data-text="I'm Adenekan Wonderful" className="intro__text" onMouseMove={startMouseEvent} onMouseLeave={stopCapture}><mark className="mark">I'm Adenekan Wonderful</mark></h1>
            <p> Frontend developer and javascript engineer, <Link href="/"><a><button>Photochromic Glasses</button></a></Link> enthusiast, practicing minimalist, and <a href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V" target="_blank"><button>Pop Music { '&&' } Jazz lover</button></a> in search of flow.</p>

            <p>Working with my village people to design better ways to signin fast on websites. View my <a href="https://twitter.com"><button>Projects</button></a>, <a href="https://twitter.com"><button>Resumé</button></a>, <a href="https://twitter.com"><button>Contact Me</button></a>, or send me an email at <button style={{cursor: 'crosshair'}} title="Copy to clipboard" onClick={copyText}>hellocodewonders@gmail.com</button>.</p>
          </PageWrapper>
        </LandingStyle.Header>
        <PageWrapper>
          <LandingStyle.FirstSection>
            <Link href="/"><a><p>See More <IconRight/></p></a></Link>
          </LandingStyle.FirstSection> 
        </PageWrapper>
      </Layout> 
    )
  }
}

export default Home
  