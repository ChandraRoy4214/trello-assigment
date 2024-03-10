import { useState } from 'react';
import Task from './Task';
import { HiOutlinePlusSm } from 'react-icons/hi';
import TaskModal from './TaskModal';

function TaskBoard({ item, defaultData, setDefaultData }) {
  const [task, setTask] = useState({ id: item?.tasks?.length + 1 });
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleSectionTitle = (value) => {
    let newData = defaultData?.map((obj) => {
      if (obj.group == item.group) {
        obj.sectionTitle = value;
      }

      return obj;
    });

    setDefaultData(newData);
  };

  return (
    <>
      <TaskModal
        open={open}
        onCloseModal={onCloseModal}
        task={task}
        setTask={setTask}
        defaultData={defaultData}
        setDefaultData={setDefaultData}
        group={item?.group}
        newTask
      />

      <article className='bg-black rounded-md px-2 py-4 min-h-[80vh]'>
        <input
          placeholder='Title'
          type='text'
          value={item?.sectionTitle || ''}
          onChange={(e) => {
            handleSectionTitle(e.target.value);
          }}
          maxLength={25}
          className={`h-10 text-white bg-violet-blue font-semibold focus:font-medium focus:outline-none text-left font-primary text-base rounded-md min-w-44 px-2 bg-black mb-4 focus:border focus:border-gray-700`}
        />

        <div className='flex flex-col gap-4'>
          {item?.tasks?.map((task, ind) => {
            return (
              <div key={ind}>
                <Task
                  taskData={task}
                  group={item?.group}
                  defaultData={defaultData}
                  setDefaultData={setDefaultData}
                  ind={ind}
                />
              </div>
            );
          })}
        </div>

        <div
          className='flex gap-4 cursor-pointer py-2 px-2 border border-gray-400 rounded-md mt-2'
          onClick={onOpenModal}
        >
          <p>
            <HiOutlinePlusSm />
          </p>
          <p className='text-sm'> Add a card </p>
        </div>
      </article>
    </>
  );
}

export default TaskBoard;
