import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import moment from "moment";
import { useForm, SubmitHandler } from "react-hook-form";
import { Categories, Colors, Priority, TaskItemType } from "src/@types/Task";
import { useAppDispatch } from "src/hooks";
import { addTask } from "src/reducers/tasks";
import { categoryColor, priorityColor } from "src/utility/helper";

type TaskItemInput = Omit<TaskItemType, "id" | "createdAt" | "updatedAt" | "completedAt"> & { category: Categories };

const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
const priorities: Priority[] = ["HIGH", "MEDIUM", "LOW"];
const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
const nextMonthsDate = moment().add(1, "month").format("YYYY-MM-DD");

type TypeFormProps = {
  defaultCategory: Categories;
};
const TaskForm = ({ defaultCategory }: TypeFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TaskItemInput>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TaskItemInput> = ({ category, description, dueDate, priority, title }) => {
    const currentISO = moment().toISOString();
    const taskObj: TaskItemType = {
      id: crypto.randomUUID(),
      createdAt: currentISO,
      updatedAt: currentISO,
      completedAt: null,
      title,
      description,
      dueDate,
      priority,
    };
    dispatch(addTask({ task: taskObj, category }));
  };
  const category = watch("category");
  const priority = watch("priority");

  const cColor = category ? (categoryColor[category as Categories] as Colors) : "default";
  const pColor = priority ? (priorityColor[priority as Priority] as Colors) : "default";

  return (
    <div className="p-2 bg-background m-2 rounded-md backdrop-blur-lg drop-shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2">
          <Input
            label="Title"
            isRequired
            {...register("title", {
              required: { value: true, message: "Title is required" },
              minLength: { value: 2, message: "Title must have atleast one Character" },
              maxLength: { value: 120, message: "Title cannot be more than 120 characters" },
            })}
            isInvalid={!!errors.title?.message}
            errorMessage={errors?.title?.message}
          />
        </div>
        <div className="py-2">
          <Textarea
            label="Description"
            placeholder="Enter your description"
            {...register("description")}
            isInvalid={!!errors.description}
            errorMessage={errors?.description?.message}
          />
        </div>
        <div className="py-2">
          <Select
            items={categories.map((x) => ({ label: x, value: x }))}
            label="Category"
            placeholder="Select a category"
            isRequired
            {...register("category", {
              required: { value: true, message: "category is required" },
              ...(!!defaultCategory && { disabled: true, value: defaultCategory }),
            })}
            isInvalid={!!errors.category}
            errorMessage={errors?.category?.message}
            isDisabled={!!defaultCategory}
            color={cColor}
          >
            {({ label, value }) => (
              <SelectItem key={value} color={categoryColor[value] as Colors} value={value}>
                {label}
              </SelectItem>
            )}
          </Select>
        </div>
        <div className="py-2">
          <Select
            items={priorities.map((x) => ({ label: x, value: x }))}
            label="Priority"
            placeholder="Select a priority"
            isRequired
            {...register("priority", { required: { value: true, message: "priority is required" } })}
            color={pColor}
            isInvalid={!!errors.priority}
            errorMessage={errors?.priority?.message}
          >
            {({ label, value }) => (
              <SelectItem key={value} color={priorityColor[value] as Colors} value={value}>
                {label}
              </SelectItem>
            )}
          </Select>
        </div>
        <div className="py-2">
          <Input
            defaultValue={nextMonthsDate}
            label="Due Date"
            type="Date"
            isRequired
            {...register("dueDate", {
              required: { value: true, message: "dueDate is required" },
              min: { value: tomorrow, message: "Due Date should be after today's date" },
            })}
            isInvalid={!!errors.dueDate}
            errorMessage={errors?.dueDate?.message}
          />
        </div>
        <div className="py-2 flex flex-row items-center justify-center">
          <Button type="submit" variant="shadow" color="primary" size="lg">
            Create Task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
