import { UseDroppableArguments, useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DroppableProps extends UseDroppableArguments {
  children: ReactNode;
  isDragging?: boolean;
}

const Droppable = ({ id, isDragging, children }: DroppableProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} style={{ opacity: !isDragging || isOver ? 1 : 0.7 }}>
      {children}
    </div>
  );
};

export default Droppable;
