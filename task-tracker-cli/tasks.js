import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";

const file = "tasks.json";

function loadTasks() {
  try {
    const data = fs.readFileSync(file, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

export function addTask() {
  inquirer
    .prompt([
      { type: "input", name: "title", message: "عنوان تسک:" },
      { type: "input", name: "description", message: "توضیحات:" },
    ])
    .then((answers) => {
      const tasks = loadTasks();
      const newTask = {
        id: tasks.length + 1,
        title: answers.title,
        description: answers.description,
        done: false,
      };
      tasks.push(newTask);
      saveTasks(tasks);
      console.log(chalk.green("✅ تسک جدید اضافه شد!"));
    });
}

export function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log(chalk.yellow("📭 لیست تسک‌ها خالی است."));
  } else {
    console.log(chalk.blue("\n📌 لیست تسک‌ها:"));
    tasks.forEach((task) => {
      console.log(
        `${chalk.cyan(task.id)} - ${chalk.bold(task.title)} [${
          task.done ? chalk.green("✔ انجام‌شده") : chalk.red("⏳ درحال انجام")
        }]`
      );
    });
  }
}

export function completeTask(id) {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id == id);
  if (task) {
    task.done = true;
    saveTasks(tasks);
    console.log(chalk.green("✅ تسک انجام شد!"));
  } else {
    console.log(chalk.red("❌ تسک پیدا نشد!"));
  }
}

export function deleteTask(id) {
  let tasks = loadTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id != id);
  if (tasks.length < initialLength) {
    saveTasks(tasks);
    console.log(chalk.green("🗑 تسک حذف شد."));
  } else {
    console.log(chalk.red("❌ تسک پیدا نشد!"));
  }
}
