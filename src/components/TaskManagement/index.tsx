import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Categories, CategoryColors } from "src/@types/TaskCategory";
import { type Key, useState, useMemo, useCallback } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import Droppable from "../DragAndDrop/Droppable";
import dummyTasks from "src/tasks.json";
import { TaskItemType } from "src/@types/TaskItem";
import TaskItem from "./TaskItem";
import { categoryColor } from "./util";

const TaskManagement = () => {
  const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
  const [selectedTab, setSelectedTab] = useState<Categories>("ADDED");
  const [tasks] = useState<TaskItemType[]>(dummyTasks.slice(0, 100));
  // const taskListRef = useRef(null);
  const [height, setHeight] = useState(0);

  const filterTasks = (tasks: TaskItemType[], tab: Categories) =>
    tasks.filter((task) => (task.category as Categories) === tab);

  const visibleTasks = useMemo(() => filterTasks(tasks, selectedTab), [tasks, selectedTab]);

  const onTabChange = (category: Key): void => setSelectedTab(category as Categories);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;

    if (over) {
      // do stuff
      console.log("DRAG END", over, event);
    }
  };

  const taskListRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const { top } = node.getBoundingClientRect();
      const h = window.innerHeight - top;
      setHeight(h);
      // console.log(node.offsetHeight, node.scrollHeight, node.clientHeight, window.innerHeight, node.getBoundingClientRect())
    }
  }, []);

  return (
    <div className={"text-center"}>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="mb-12">
          <Tabs
            color={categoryColor[selectedTab] as CategoryColors}
            aria-label="Categories"
            selectedKey={selectedTab}
            onSelectionChange={onTabChange}
          >
            {categories.map((category) => (
              <Tab key={category} title={<Droppable id={category}>{category}</Droppable>} />
            ))}
          </Tabs>
        </div>
        <div className="p-2 overflow-auto" style={{ height }}>
          {selectedTab && (
            <div className="masonry sm:masonry-sm md:masonry-md" ref={taskListRef}>
              {visibleTasks.map((task) => (
                <TaskItem key={task.id} {...task} />
              ))}
            </div>
          )}
        </div>
      </DndContext>
    </div>
  );
};

export default TaskManagement;
