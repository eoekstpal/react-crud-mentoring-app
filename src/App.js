import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]); //모든 데이터
  const [inputs, setInputs] = useState(''); //input 데이터
  const [edit, setEdit] = useState('');

  // 입력한 데이터
  const handleInput = (e) => {
    setInputs(e.target.value);
    console.log(e.target.value)
  }
  // 입력한 데이터 가져오기
  const handleSubmit = () => {
    // const newData = {id: crypto.randomUUID(), data};
    // const newDatas = [...newDatas, newData]
    let newData = []
    for (let i = 0; i < data.length; i++) {
      newData = [ ...newData, data[i] ]
    }
    newData = [ ...newData, { id: crypto.randomUUID(), text: inputs, edit: false}]
    setInputs(data)
    setData(newData)
    console.log(inputs)
    console.log(newData)
  }
  // 데이터 수정 하기
  const handleInputEdit(e) => {

  }
  // 수정 btn
  const handleEditDataBtn(data) => {

  }

  const handleEditUndo() => {
    
  }

  const handleDelete() => {

  }

  return (
    <div>
      <h1>CRUD APP</h1>
      <div>
        <input onChange={handleInput} />
        <button onClick={handleSubmit}>글 추가</button>
      </div>
      
      <div>
        {data.map((data, i) => (
          <div>
            {data.edit === true ? //edit === true면 수정할 수 있도록 textarea 띄움
              <div>
                <textarea onChange={handleInputEdit}>{data.text}</textarea>
                <button onClick={(e) => {handleEditDataBtn(data,e)}}>수정완료</button>
                <button onClick={(e) => {handleEditUndo(data, e)}}>수정취소</button>
              </div>
              : // edit === false면 수정하거나 삭제하도록 함
              <div>
                <div>{data.text}</div>
                <button onClick={(e) => {handleEditUndo(data, e)}}>글 수정</button>
                <button onClick={(e) => handleDelete(data.id, e)}>글 삭제</button>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
