import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

type DroppableProps = {
  id: string;
  isDragging: boolean;
  children: ReactNode;
};

const Droppable = ({ id, isDragging, children }: DroppableProps) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} style={{ opacity: isDragging ? 0.7 : 1 }}>
      {children}
    </div>
  );
};

export default Droppable;
