import { UseDroppableArguments, useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DroppableProps extends UseDroppableArguments {
  children: ReactNode;
  className?: string;
}

const Droppable = ({ id, children, className }: DroppableProps) => {
  const { setNodeRef, isOver, active } = useDroppable({
    id: id,
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        ...(isOver &&
          (active?.id as string).split("|")[1] !== id && {
            color: "red",
            fontWeight: "bold",
            boxShadow: "0 40px 130px rgba(0, 0, 0, 0.6)",
            // transform: "scale",
          }),
        opacity: !active ? 1 : isOver ? 1 : 0.4,
        zIndex: !active ? 1 : isOver ? 1 : 3,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Droppable;
