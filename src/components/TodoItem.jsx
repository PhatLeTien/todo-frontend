import { updateTodo, deleteTodo } from "../services/todoService";

const TodoItem = ({ todo, refresh }) => { //refresh để callback function được truyền từ Component cha (thường là App.js). 
                                          // Sau khi xóa hoặc cập nhật xong, ta gọi refresh() để báo cho Component cha tải lại
                                          // Danh sách mới nhất từ Database.                                  
  const toggle = async () => {
    await updateTodo(todo.id, !todo.completed); // Gửi lệnh Update lên Server để thay đổi trạng thái hoàn thành của công việc
    refresh(); // Sau khi Server xong việc, tải lại danh sách
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.completed}          //Nó sẽ luôn hiển thị đúng trạng thái từ Database nhờ checked={todo.completed}.
        onChange={toggle}                 // Khi bạn click vào, nó kích hoạt hàm toggle.
      />

      <span style={{
        textDecoration: todo.completed ? "line-through" : "none" //Logic: Nếu todo.completed là true, chữ sẽ bị gạch ngang (line-through). 
                                                                // Nếu là false, chữ hiện bình thường (none). 
                                                                // Đây là một chi tiết UX cực kỳ quan trọng cho ứng dụng To-Do.
      }}>
        {todo.title}
      </span>

      <button onClick={() => {
        deleteTodo(todo.id);   // Khi click vào nút X, nó sẽ gọi hàm deleteTodo để xóa công việc khỏi Database.
        refresh();  // Sau khi xóa xong, nó sẽ gọi refresh() để tải lại danh sách công việc mới nhất từ Database, 
                    // đảm bảo giao diện luôn đồng bộ với dữ liệu.
      }}>X</button> 
    </div>
  );
};

export default TodoItem;