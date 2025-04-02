# **Task Tracker CLI**

A simple command-line interface (CLI) tool for tracking tasks. Users can add, list, complete, and delete tasks. All tasks are stored in a local JSON file for persistence.

---

## **Features**

- **Add Tasks**: Add new tasks with a title and description.
- **List Tasks**: View a list of all tasks, including their current status (pending or completed).
- **Complete Tasks**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from the list.

---

## **Installation**

To get started with the Task Tracker CLI project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/task-tracker-cli.git
   ```
   
2. Navigate into the project folder:
   ```bash
   cd task-tracker-cli
   ```

3. Install dependencies (if any):
   ```bash
   npm install
   ```

---

## **Usage**

Run the following commands in your terminal to interact with the Task Tracker CLI:

- **Add a new task:**
  ```bash
  node index.js add
  ```
  Or, if you have linked the CLI globally:
  ```bash
  task add
  ```

- **List all tasks:**
  ```bash
  node index.js list
  ```
  Or:
  ```bash
  task list
  ```

- **Complete a task (by ID):**
  ```bash
  node index.js done <task-id>
  ```

- **Delete a task (by ID):**
  ```bash
  node index.js delete <task-id>
  ```

---

## **File Structure**

Here's a quick overview of the project structure:

```
/task-tracker-cli
│
├── index.js         # Main CLI logic
├── tasks.json       # Stores tasks in JSON format
├── .gitignore       # Specifies files to be ignored by Git
└── package.json     # Project dependencies and metadata
```

---

## **License**

This project is licensed under the MIT License.

---

