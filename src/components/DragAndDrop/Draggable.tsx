import { UseDraggableArguments, useDraggable } from "@dnd-kit/core";
import { ReactNode, useEffect, useState } from "react";

interface DraggableProps extends UseDraggableArguments {
  children: ReactNode;
}

const Draggable = ({ id, children }: DraggableProps) => {
  const { setNodeRef, transform, listeners, attributes, isDragging, node } = useDraggable({
    id: id,
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (node.current) {
      const { height, width } = node.current.getBoundingClientRect();
      setDimensions({ ...dimensions, width, height });
    }
  }, []);

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0) scale(0.5)` : undefined,
        // border: "1px solid white",
        ...(isDragging &&
          {
            // width: dimensions.width * 0.2,
            // height: dimensions.height * 0.2,
          }),
      }}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Draggable;
