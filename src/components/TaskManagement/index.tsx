import { DndContext } from "@dnd-kit/core";
import { Categories } from "src/@types/TaskCategory";
import { type Key, useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";

const TaskManagement = () => {
  const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
  const [selected, setSelected] = useState<Categories>("ADDED");

  const onTabChange = (category: Key): void => setSelected(category as Categories);

  const categoryColor = {
    ADDED: "primary",
    STARTED: "success",
    COMPLETED: "danger",
  };

  return (
    <div className={"text-center"}>
      <DndContext>
        <div>
          <Tabs
            color={categoryColor[selected] as "primary" | "success" | "danger"}
            aria-label="Categories"
            selectedKey={selected}
            onSelectionChange={onTabChange}
          >
            {categories.map((category) => (
              <Tab key={category} title={category} />
            ))}
          </Tabs>
        </div>
      </DndContext>
    </div>
  );
};

export default TaskManagement;
