import TodoItem from "./TodoItem";

const TodoList = ({ todos, refresh }) => { //TodoList nhận props todos (danh sách công việc) và refresh (hàm để tải lại danh sách sau khi có thay đổi).
  return (
    <>
      {todos.map(t => ( //Dùng map để duyệt qua từng công việc trong danh sách todos và tạo một TodoItem cho mỗi công việc.
        <TodoItem key={t.id} todo={t} refresh={refresh} />  //Mỗi TodoItem nhận props todo (công việc cụ thể) và refresh 
                                                            // (hàm để tải lại danh sách sau khi có thay đổi).
      ))}
    </>
  );
};

export default TodoList;