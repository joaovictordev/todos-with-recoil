import { useState } from 'react'
import { useSetRecoilState } from 'recoil';

import { todoListState } from '../recoil/atoms'

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState)

  function onChangeInput(e) {
    setInputValue(e.target.value)
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Math.random(),
        text: inputValue,
        isComplete: false
      }
    ])
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChangeInput} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
