import { UseDraggableArguments, useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DraggableProps extends UseDraggableArguments {
  children: ReactNode;
}

const Draggable = ({ id, children }: DraggableProps) => {
  const { setNodeRef } = useDraggable({
    id: id,
  });
  return <div ref={setNodeRef}>{children}</div>;
};

export default Draggable;
