import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


function App() {


  function goods(){
    let num = document.getElementById("goodNum").innerText
    let a = Number(num) +1
    document.getElementById('goodNum').innerHTML=a
    }

  
  let [pnum, cpnum] = useState(0);
  function goods2(){
    cpnum(pnum+1)
  }

  
  let [a] = useState(['꿀떡맛집입니까?', '꿀떡꿀떡맛집', '떡볶이 맛집']);
  
  let today = new Date().toLocaleDateString('en-US');  
  
  return (
    <div className="App">
      <div className="black-nav">
        <div > Geabal Blog  </div>
      </div>
      <main className='main'>
        <div className='side-bar'>
            <ul>
              <li>카테고리 1</li>
              <li>카테고리 1d</li>
            </ul>
        </div>
       <article className="contents">
          <div className="contents-info">
            <div className="title">제목</div>
            <div className="date">날짜</div>
          </div>
{/* ================================================================= */}
          <div className="contents-list">
          <div className="title"><h3> {a[0]} <button onClick={goods2}>🤞</button><p id='goodNum'>{pnum}</p></h3></div>
            <div className="date">{today}</div>
          </div>

          <div className="contents-list">
            <div className="title"><h3> {a[1]} <span onClick={goods2}>🤞</span><p id='goodNum'>{pnum}</p></h3></div>
            <div className="date">{today}</div>
          </div>

          <Modal>dk</Modal>
        </article>


      </main>

    </div>
  );
}
function Modal(){
  return(
    <div className="modal">
    <h2>제목</h2>
    <p>날자</p>
    <p>상세내용   </p>
    <p>   </p>

  </div>
  )
}

export default App;

// https://www.youtube.com/watch?v=Qb8Oiy8i9IY
// component 문법
