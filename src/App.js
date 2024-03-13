import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]); //모든 데이터
  const [inputs, setInputs] = useState(''); //input 데이터
  const [edit, setEdit] = useState('');

  const handleOnChange = (e) => {
    setInputs(e.target.value);
    console.log(e.target.value)
  }

  const handleOnClick = () => {
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

  return (
    <div>
      <h1>CRUD APP</h1>
      <div>
        <input onChange={handleOnChange} />
        <button onClick={handleOnClick}>추가</button>
      </div>
    </div>
  );
}

export default App;
