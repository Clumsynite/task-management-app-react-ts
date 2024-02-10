import { UseDroppableArguments, useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DroppableProps extends UseDroppableArguments {
  children: ReactNode;
}

const Droppable = ({ id, children }: DroppableProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });
  console.log(id, isOver);
  return (
    <div ref={setNodeRef} style={{ ...(isOver && { color: "red", fontWeight: "bold" }) }}>
      {children}
    </div>
  );
};

export default Droppable;
