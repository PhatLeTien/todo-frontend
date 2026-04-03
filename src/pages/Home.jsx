import { useState } from "react";
import { addTodo } from "../services/todoService";
import { useTodos } from "../hooks/useTodos";
import TodoList from "../components/TodoList";
import "../styles/glass.css";
import "../styles/formelements.css";

const Home = () => {
  const { todos, fetchTodos } = useTodos(); 
  const [input, setInput] = useState("");

  const handleAdd = async () => { 
    await addTodo(input); // Gọi hàm addTodo để gửi yêu cầu thêm công việc mới lên Server. 
                          // Hàm này trả về một Promise, nên ta dùng await để chờ kết quả.
    setInput(""); // Sau khi thêm xong, ta reset input về chuỗi rỗng để người dùng có thể nhập công việc mới.
    fetchTodos(); // Sau khi Server xong việc, ta gọi fetchTodos() để tải lại danh sách công việc mới nhất từ Server, 
                 // đảm bảo giao diện luôn đồng bộ với dữ liệu. 
                 // Đây là một bước cực kỳ quan trọng để giữ cho ứng dụng luôn cập nhật và phản hồi nhanh chóng với các thay đổi của người dùng.
  };

  return (
    <div className="container">
      <h1>To-Do-List</h1>

      <div className="input-box">
        <input value={input} onChange={e => setInput(e.target.value)} /> {/* Input này được điều khiển bởi state input. 
                                                                          Khi người dùng gõ vào, onChange sẽ cập nhật state input với giá trị mới. */}
        <button onClick={handleAdd}>Add</button> {/* Khi click vào nút Add, nó sẽ gọi hàm handleAdd để thêm công việc mới vào 
                                                    Database và tải lại danh sách công việc. */}
      </div>

      <TodoList todos={todos} refresh={fetchTodos} />
    </div>
  );
};

export default Home;