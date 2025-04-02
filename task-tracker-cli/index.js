#!/usr/bin/env node
import { program } from "commander";
import { addTask, listTasks, completeTask, deleteTask } from "./tasks.js";

program.command("add").description("افزودن یک تسک جدید").action(addTask);

program.command("list").description("نمایش لیست تسک‌ها").action(listTasks);

program
  .command("done <id>")
  .description("تکمیل کردن یک تسک")
  .action(completeTask);

program.command("delete <id>").description("حذف یک تسک").action(deleteTask);

program.parse(process.argv);
