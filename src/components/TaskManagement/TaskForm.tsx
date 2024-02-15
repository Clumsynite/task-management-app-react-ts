import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import moment from "moment";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Categories, Colors, Priority, TaskItemInput, TaskItemType, TaskMode } from "src/@types/Task";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { isDarkMode } from "src/reducers/darkMode";
import { closeModal } from "src/reducers/taskModal";
import { addTask, editTask } from "src/reducers/tasks";
import { categoryColor, priorityColor } from "src/utility/helper";

const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
const priorities: Priority[] = ["HIGH", "MEDIUM", "LOW"];
const dateFormat = "YYYY-MM-DD";

const tomorrow = moment().add(1, "day").format(dateFormat);
const nextMonthsDate = moment().add(1, "month").format(dateFormat);

type TypeFormProps = {
  defaultCategory: Categories | undefined;
  mode: TaskMode;
  task: TaskItemType | undefined;
};
const TaskForm = ({ defaultCategory, mode, task }: TypeFormProps) => {
  const defaultValues: Partial<TaskItemInput> = {
    category: defaultCategory,
    description: task?.description,
    dueDate: moment(task?.dueDate).format(dateFormat),
    priority: task?.priority,
    title: task?.title,
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TaskItemInput>({ defaultValues });

  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(isDarkMode);

  const onSubmit: SubmitHandler<TaskItemInput> = ({ category, description, dueDate, priority, title }) => {
    if (mode === "Edit" && defaultCategory && task) {
      dispatch(
        editTask({
          oldCategory: defaultCategory,
          newCategory: category,
          task: { ...task, description, dueDate, priority, title },
        })
      );
    } else {
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
    }
    dispatch(closeModal());
  };

  const category = watch("category");
  const priority = watch("priority");

  const cColor = category ? (categoryColor[category as Categories] as Colors) : "default";
  const pColor = priority ? (priorityColor[priority as Priority] as Colors) : "default";

  const viewOnly = mode === "View";

  return (
    <div className={`${darkMode ? "dark" : ""} bg-background text-foreground rounded-md`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2">
          <Controller
            name="title"
            rules={{
              required: { value: true, message: "Title is required" },
              minLength: { value: 2, message: "Title must have atleast one Character" },
              maxLength: { value: 120, message: "Title cannot be more than 120 characters" },
            }}
            control={control}
            render={({ field }) => (
              <Input
                isReadOnly={viewOnly}
                isInvalid={!!errors.title?.message}
                errorMessage={errors?.title?.message}
                label="Title"
                isRequired
                autoFocus={!viewOnly}
                {...field}
              />
            )}
          />
        </div>
        <div className="py-2">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                label="Description"
                placeholder="Enter your description"
                isInvalid={!!errors.description}
                errorMessage={errors?.description?.message}
                isReadOnly={viewOnly}
                {...field}
              />
            )}
          />
        </div>
        <div className="py-2">
          <Controller
            control={control}
            name="category"
            rules={{
              required: { value: true, message: "category is required" },
              ...(!!defaultCategory && !task && { disabled: true, value: defaultCategory }),
            }}
            render={({ field }) => (
              <Select
                {...field}
                items={categories.map((x) => ({ label: x, value: x }))}
                label="Category"
                placeholder="Select a category"
                isRequired
                isInvalid={!!errors.category}
                errorMessage={errors?.category?.message}
                color={cColor}
                defaultSelectedKeys={defaultValues.category ? [defaultValues.category] : []}
                selectedKeys={category ? [category] : []}
                {...(((!!defaultCategory && !task) || viewOnly) && { isOpen: false })}
              >
                {({ label, value }) => (
                  <SelectItem key={value} color={categoryColor[value] as Colors}>
                    {label}
                  </SelectItem>
                )}
              </Select>
            )}
          />
        </div>
        <div className="py-2">
          <Controller
            control={control}
            name="priority"
            rules={{
              required: { value: true, message: "Priority is required" },
            }}
            render={({ field }) => (
              <Select
                {...field}
                items={priorities.map((x) => ({ label: x, value: x }))}
                label="Priority"
                placeholder="Select a priority"
                isRequired
                color={pColor}
                isInvalid={!!errors.priority}
                errorMessage={errors?.priority?.message}
                defaultSelectedKeys={defaultValues.priority ? [defaultValues.priority] : []}
                selectedKeys={priority ? [priority] : []}
                {...(viewOnly && { isOpen: false })}
              >
                {({ label, value }) => (
                  <SelectItem key={value} color={priorityColor[value] as Colors} value={value}>
                    {label}
                  </SelectItem>
                )}
              </Select>
            )}
          />
        </div>
        <div className="py-2">
          <Controller
            name="dueDate"
            rules={{
              required: { value: true, message: "dueDate is required" },
              min: { value: tomorrow, message: "Due Date should be after today's date" },
            }}
            control={control}
            render={({ field }) => (
              <Input
                defaultValue={nextMonthsDate}
                label="Due Date"
                type="Date"
                isRequired
                isInvalid={!!errors.dueDate}
                errorMessage={errors?.dueDate?.message}
                isReadOnly={viewOnly}
                {...field}
              />
            )}
          />
        </div>
        {!viewOnly ? (
          <div className="py-2 flex flex-row items-center justify-center">
            <Button type="submit" variant="shadow" color="primary" size="lg">
              {mode} Task
            </Button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
