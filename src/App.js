// import { useState } from 'react';
// import './App.css';
// import uuid from 'react-uuid';

// function App() {
//   const [data, setData] = useState([]); // 모든 데이터
//   const [inputs, setInputs] = useState(''); // input 데이터
//   const [edit, setEdit] = useState(''); // 수정한 input 데이터

//   // 입력한 데이터
//   const handleInput = (e) => {
//     setInputs(e.target.value);
//   }
//   // 입력한 데이터 가져오기
//   const handleSubmit = (e) => {
//     // const newData = {id: crypto.randomUUID(), data};
//     // const newDatas = [...newDatas, newData]
//     // e.preventDefault();
//     let newData = []
//     for (let i = 0; i < data.length; i++) {
//       newData = [ ...newData, data[i] ]
//     }
//     newData = [ ...newData, { id: uuid(), text: inputs, editstate: false}]
//     setData(newData)
//     // !!!!!! 버튼 클릭시 input칸 내용 삭제 안됨 !!!!!!
//      // setInputs('')
//     console.log(newData)
//   }
//   // 수정할 데이터
//   function handleInputEdit(e){
//     setEdit(e.target.value)
//   }
//   // 데이터 수정하기
//   function handleEditDataBtn(id) {
//     // const editdata = data.find(data => data.id === id)
//     let newArr = []
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].id === id){
//         newArr = [ ...newArr, { id: id, text: edit, editstate: false}]
//       } else {
//         newArr = [ ...newArr, data[i]]
//       }
//       setData(newArr)
//     }
//   }

//   function handleEditUndo(inputdata) {
//     let newArr = []
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].id === inputdata.id) {
//         if (inputdata.editstate === false) { // editstate true로 바꿔서 edit 할 수 있도록
//           newArr = [ ...newArr, {id: inputdata.id, test: inputdata.text, editstate: true}]
//         } else { // // editstate true로 바꿔서 edit 종료
//           newArr = [ ...newArr, {id: inputdata.id, test: inputdata.text, editstate: false}]
//         }
//       } else {
//         newArr = [ ...newArr, data[i]]
//       } setData(newArr)
//     }
//   }

//   function handleDelete(id) {
//     setData(data.filter(data => data.id !== id))
//   }

//   return (
//     <div>
//       <h1>CRUD APP</h1>
//       <div>
//         <input onChange={handleInput} />
//         <button onClick={handleSubmit}>글 추가</button>
//       </div>
      
//       <div>
//         {data.map((data) => (
//           <div>
//             {data.editstate === true ? //edit === true면 수정할 수 있도록 textarea 띄움
//               <div>
//                 {/* !!!!!! 글 수정하기시 기존 글이 안불러옴(빈칸) 
//                 취소 누르면 빈칸으로 다시 수정되어 입력됨 !!!!!! */}
//                 <textarea onChange={handleInputEdit}>{data.text}</textarea>
//                 <button onClick={(e) => {handleEditDataBtn(data.id, e)}}>수정완료</button>
//                 <button onClick={(e) => {handleEditUndo(data, e)}}>수정취소</button>
//               </div>
//               : // edit === false면 수정하거나 삭제하도록 함
//               <div>
//                 <div>{data.text}</div>
//                 <button onClick={(e) => {handleEditUndo(data, e)}}>글 수정</button>
//                 <button onClick={(e) => {handleDelete(data.id, e)}}>글 삭제</button>
//               </div>
//             }
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";

function App() {
  const [data, setData] = useState([]); // 모든 데이터
  const [inputs, setInputs] = useState(""); // input 데이터
  const [edit, setEdit] = useState(""); // 수정한 input 데이터

  // 입력한 데이터
  const handleInput = (e) => {
    setInputs(e.target.value);
  };
  // 입력한 데이터 가져오기
  const handleSubmit = (e) => {
    // const newData = {id: crypto.randomUUID(), data};
    // const newDatas = [...newDatas, newData]
    // e.preventDefault();
    let newData = [];
    for (let i = 0; i < data.length; i++) {
      newData = [...newData, data[i]];
    }
    newData = [...newData, { id: uuid(), text: inputs, editstate: false }];
    setData(newData);
    // !!!!!! 버튼 클릭시 input칸 내용 삭제 안됨 !!!!!!
    // setInputs('')
    // 📌
    // textarea에 value={data.text}로 value 바인딩 해주면 해결될 것
    console.log(newData);
  };

  // 📌
  // loop 방식을 간단하게 spread operator 방식으로 변경해봤습니다
  const handleSubmit2222 = (e) => {
    const newData = [...data, { id: uuid(), text: inputs, editstate: false }];
    setData(newData);
    setInputs("");
  };

  // 수정할 데이터
  function handleInputEdit(e) {
    setEdit(e.target.value);
  }
  // 데이터 수정하기
  function handleEditDataBtn(id) {
    // const editdata = data.find(data => data.id === id)
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        newArr = [...newArr, { id: id, text: edit, editstate: false }];
      } else {
        newArr = [...newArr, data[i]];
      }
      setData(newArr);
    }
  }
  // 📌
  // for 루프를 map으로 간단화
  function handleEditDataBtn22222(id) {
    const newArr = data.map((item) =>
      item.id === id ? { id: id, text: edit, editstate: false } : item
    );
    setData(newArr);
  }

  function handleEditUndo(inputdata) {
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === inputdata.id) {
        if (inputdata.editstate === false) {
          // editstate true로 바꿔서 edit 할 수 있도록
          newArr = [
            ...newArr,
            { id: inputdata.id, test: inputdata.text, editstate: true },
          ];
        } else {
          // // editstate true로 바꿔서 edit 종료
          newArr = [
            ...newArr,
            { id: inputdata.id, test: inputdata.text, editstate: false },
          ];
        }
      } else {
        newArr = [...newArr, data[i]];
      }
      setData(newArr);
    }
  }

  function handleDelete(id) {
    setData(data.filter((data) => data.id !== id));
  }

  return (
    <div>
      <h1>CRUD APP</h1>
      <div>
        <input onChange={handleInput} />
        <button onClick={handleSubmit}>글 추가</button>
      </div>

      <div>
        {data.map((data) => (
          <div>
            {data.editstate === true ? ( //edit === true면 수정할 수 있도록 textarea 띄움
              <div>
                {/* !!!!!! 글 수정하기시 기존 글이 안불러옴(빈칸) 
                취소 누르면 빈칸으로 다시 수정되어 입력됨 !!!!!! */}
                <textarea onChange={handleInputEdit} value={data.text}>
                  {data.text}
                </textarea>
                {/* 📌 */}
                {/* <textarea
                  onChange={handleInputEdit}
                  value={data.text}
                ></textarea> */}
                <button
                  onClick={(e) => {
                    handleEditDataBtn(data.id, e);
                  }}
                >
                  수정완료
                </button>
                <button
                  onClick={(e) => {
                    handleEditUndo(data, e);
                  }}
                >
                  수정취소
                </button>
              </div>
            ) : (
              // edit === false면 수정하거나 삭제하도록 함
              <div>
                <div>{data.text}</div>
                <button
                  onClick={(e) => {
                    handleEditUndo(data, e);
                  }}
                >
                  글 수정
                </button>
                <button
                  onClick={(e) => {
                    handleDelete(data.id, e);
                  }}
                >
                  글 삭제
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;