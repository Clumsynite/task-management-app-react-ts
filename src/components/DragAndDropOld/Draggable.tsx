import { UseDraggableArguments, useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DraggableProps extends UseDraggableArguments {
  children: ReactNode;
}

const Draggable = ({ id, children }: DraggableProps) => {
  const { setNodeRef, transform, listeners, attributes } = useDraggable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0) scale(0.5)` : undefined,
      }}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Draggable;
