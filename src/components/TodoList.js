import { useRecoilValue } from 'recoil'

import { todoListState } from '../recoil/atoms'
import TodoItemCreator from '../components/TodoItemCreator'
import TodoItem from '../components/TodoItem'

export default function TodoList() {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListstats />
      <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}