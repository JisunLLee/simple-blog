import React, { useState } from 'react';
import './App.css';

function App() {

  let [posts, postState] = useState(['첫 게시물','두번째 게시물', '세번째 게시물']);
  let [thums, thumsState] = useState([0,0,0]);


  const incrementThums = (n) => {
    const Thums = [...thums];
    Thums[n] = Thums[n] + 1
    thumsState(Thums)
  };

  const changeTitle = () => {
    let newArr = [...posts];
    newArr[0] = '제목 바꿨다'
    postState(newArr);
  }
  const listLendering = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(
        <List 
          key = {i}
          posts = {posts[i]} 
          incrementTumbs= {incrementThums} 
          thums = {thums[i]} 
          number = {i}
        />);
    }
    return result;
  }

  return (
    <div className="App">
      <div className="black-nav">
      <div>심플 Blog</div>
      </div>
      {listLendering()}
      <button onClick={changeTitle}>제목 변경</button>
       
      <Modal/>

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
    <h2> 제목 </h2>
    <p> 날짜 </p>
    <p> 상세내용 </p>
  </div>
  )
}


function List(props){
  return(
    <div className='list'>
    <h3>{ props.posts }</h3>
    <span onClick = {()=>{props.incrementTumbs(props.number)}}>👍</span> {props.thums}
    <p>11월 30일 발행</p>
    <hr/>
  </div>
  )
}
export default App;
