import fs from "fs";
import readline from "readline";

const FILE = "task.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([]));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loadTasks = () => {
  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
};

const showMenu = () => {
  console.log("\n======== Todo  Application =========\n");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Delete Task");
  console.log("4. Exit\n");
  rl.question("Choose an option: ", handleMenu);
};

function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Enter Task:", (task) => {
        const tasks = loadTasks();
        tasks.push({ task, done: false });
        saveTasks(tasks);
        console.log("Task added successfully!");
        showMenu();
      });
      break;
    case "2":
      const tasks = loadTasks();
      if (tasks.length === 0) {
        console.log("No tasks found.");
      } else {
        tasks.forEach((t, index) => {
          console.log(`${index + 1} ${t.task}`);
        });
      }
      showMenu();
      break;
    case "3":
      const allTasks = loadTasks();
      if (allTasks.length === 0) {
        console.log("No tasks to delete.");
        showMenu();
        return;
      }
      console.log("Tasks:");
      allTasks.forEach((t, index) => {
        console.log(`${index + 1}, ${t.task}`);
      });
      rl.question("Enter task number to delete: ", (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < allTasks.length) {
          allTasks.splice(index, 1);
          saveTasks(allTasks);
          console.log("Task deleted successfully!");
        } else {
          console.log("Invalid task number.");
        }
        showMenu();
      });
      break;
    case "4":
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please try again.");
      showMenu();
  }
}
showMenu();
