import fs from "fs";
const tasks = {};
const categories = ["ADDED", "STARTED", "COMPLETED"];
const priorities = ["HIGH", "MEDIUM", "LOW"];
const count = 100;

const random = (array) => array[Math.floor(Math.random() * array.length)];

for (let i = 0; i < count; i++) {
  const category = random(categories);
  // console.log(randomCategory);
  const id = crypto.randomUUID();
  const title = crypto.randomUUID();
  const description = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  const priority = random(priorities);
  const completeTill = new Date().toISOString();
  const completedAt = new Date().toISOString();
  const taskObj = {
    id,
    title,
    description,
    createdAt,
    updatedAt,
    // category,
    priority,
    completeTill,
    completedAt,
  };
  if (!tasks[category]) tasks[category] = [taskObj];
  else tasks[category].push(taskObj);
}

fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
