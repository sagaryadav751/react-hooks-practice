/* eslint-disable react/prop-types */



// eslint-disable-next-line react/prop-types
const Todo = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
         <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default Todo
