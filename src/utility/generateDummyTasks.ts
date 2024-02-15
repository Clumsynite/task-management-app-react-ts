// import fs from "fs";
import { faker } from "@faker-js/faker";
import { Categories, Priority, TaskItemType, Tasks } from "src/@types/Task";

const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
const priorities: Priority[] = ["HIGH", "MEDIUM", "LOW"];

const random = (array: Array<string>) => array[Math.floor(Math.random() * array.length)];

// fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 2));

const generateDummyTasks = (count: number = 100) => {
  const tasks: Tasks = { ADDED: [], COMPLETED: [], STARTED: [] };

  for (let i = 0; i < count; i++) {
    const category = random(categories) as Categories;
    // console.log(randomCategory);
    const id = crypto.randomUUID();
    const title = faker.word.words({ count: { min: 2, max: 6 } });
    const description = faker.lorem.paragraphs({ max: 4, min: 1 });
    const createdAt = faker.date.past().toISOString();
    const updatedAt = createdAt;
    const priority = random(priorities) as Priority;
    const dueDate = faker.date.future({ years: 1, refDate: createdAt }).toISOString();
    const completedAt =
      category === "COMPLETED" ? faker.date.between({ from: createdAt, to: dueDate }).toISOString() : null;
    const taskObj: TaskItemType = {
      id,
      title,
      description,
      createdAt,
      updatedAt,
      priority,
      dueDate,
      completedAt,
    };
    tasks[category].push(taskObj);
  }
  return tasks;
};

export { generateDummyTasks };
