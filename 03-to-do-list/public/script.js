document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const formInput = document.querySelector("form input");
  const formAlert = document.querySelector(".form-alert");
  const containerTask = document.querySelector(".container-task");
  const loading = document.querySelector(".loading-text");
  const tasks = document.querySelector(".tasks");

  // Get All Tasks
  const showTask = async () => {
    loading.style.display = "flex";
    try {
      const {
        data: { todos },
      } = await axios.get("/api/v1/todos");
      if (todos.length < 1) {
        containerTask.innerHTML =
          '<h5 class="empty-list">No tasks in your to do list</h5>';
        loading.style.display = "none";
        return;
      }
      const allTasks = todos
        .map((todo) => {
          const { _id: todoID, completed, name } = todo;
          return `<div class="task">
                    <h3>${name}</h3>
                    <div class="icon">
                      <button class="edit-btn" data-id="${todoID}"><i class="fa-solid fa-pen"></i></button>
                      <button class="delete-btn" data-id="${todoID}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </div>`;
        })
        .join("");
      tasks.innerHTML = allTasks;
    } catch (error) {
      containerTask.innerHTML =
        '<h5 class="empty-list">There was an error, please try again later...</h5>';
    }
    loading.style.display = "none";
  };

  showTask();

  // Create Task
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = formInput.value;

    try {
      await axios.post("/api/v1/todos", { name });
      showTask();
      formInput.value = null;
      formAlert.style.display = "block";
      formAlert.textContent = "Successfully Added Task!";
      formAlert.classList.add("success");
    } catch (error) {
      formAlert.style.display = "block";
      formAlert.textContent = "Failed to Add Task!";
      formAlert.classList.add("failed");
    }
    setTimeout(() => {
      formAlert.style.display = "none";
      formAlert.classList.remove("success");
      formAlert.classList.remove("failed");
    }, 3000);
  });

  // Delete Task
  tasks.addEventListener("click", async (e) => {
    const el = e.target;
    if (el.parentElement.classList.contains("delete-btn")) {
      loading.style.display = "flex";
      const id = el.parentElement.dataset.id;
      try {
        await axios.delete(`/api/v1/todos/${id}`);
        showTask();
      } catch (error) {
        console.log(error);
      }
    }
    loading.style.display = "none";
  });
});
