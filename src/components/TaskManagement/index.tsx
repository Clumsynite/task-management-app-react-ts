import { DndContext, DragEndEvent, rectIntersection } from "@dnd-kit/core";
import { type Key, useState, useMemo, useCallback } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import Droppable from "../DragAndDrop/Droppable";
import dummyTasks from "src/tasks.json";
import { TaskItemType } from "src/@types/TaskItem";
import TaskItem from "./TaskItem";
import { categoryColor } from "./util";
import Draggable from "../DragAndDrop/Draggable";
import { Tasks, Categories } from "src/@types/Task";

const TaskManagement = () => {
  const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
  const [selectedTab, setSelectedTab] = useState<Categories>("ADDED");
  const [tasks] = useState<TaskItem[]>(dummyTasks.slice(0, 100));
  // const taskListRef = useRef(null);
  // const [height, setHeight] = useState(0);

  const onTabChange = (category: Key): void => setSelectedTab(category as Categories);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;

    if (over) {
      // do stuff
      // console.log("DRAG END", over, event);
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
      <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
        {/* <div className="my-12">
          <Tabs
            color={categoryColor[selectedTab] as CategoryColors}
            aria-label="Categories"
            selectedKey={selectedTab}
            onSelectionChange={onTabChange}
            size="lg"
          >
            {categories.map((category) => (
              <Tab
                key={category}
                style={{ padding: 12 }}
                className="p-2"
                title={<Droppable id={category}>{category}</Droppable>}
              />
            ))}
          </Tabs>
        </div> */}
        <div className="p-2">
          {selectedTab && (
            <div className="masonry sm:masonry-sm md:masonry-md" ref={taskListRef}>
              {visibleTasks.map((task) => (
                <Draggable key={task.id} id={task.id}>
                  <TaskItem {...task} />
                </Draggable>
              ))}
            </div>
          )}
        </div>
      </DndContext>
    </div>
  );
};

export default TaskManagement;
