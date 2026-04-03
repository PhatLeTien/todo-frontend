import { useEffect, useState } from "react";
import { getTodos } from "../services/todoService";

export const useTodos = () => {
  const [todos, setTodos] = useState([]); // Khởi tạo state todos để lưu trữ danh sách công việc, ban đầu là một mảng rỗng.

  const fetchTodos = async () => { //async function fetchTodos để lấy danh sách công việc từ Server.
    const res = await getTodos(); // Gọi hàm getTodos để lấy danh sách công việc từ Server. 
                                  // Hàm này trả về một Promise, nên ta dùng await để chờ kết quả.
    setTodos(res.data); // Sau khi nhận được dữ liệu từ Server, ta cập nhật state todos bằng cách gọi setTodos với res.data.
  };

  useEffect(() => { // Sử dụng useEffect để gọi fetchTodos khi component được mount lần đầu tiên.
    fetchTodos();
  }, []);

  return { todos, fetchTodos };
};