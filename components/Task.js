'use client';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import TaskModal from './TaskModal';

function Task({ taskData, group, defaultData, setDefaultData, ind }) {
  const [task, setTask] = useState(taskData);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <TaskModal
        open={open}
        onCloseModal={onCloseModal}
        task={task}
        setTask={setTask}
        defaultData={defaultData}
        setDefaultData={setDefaultData}
        group={group}
        ind={ind}
      />

      <div
        className='px-4 py-1 rounded-md bg-gray-700 text-slate-200 min-w-56 flex items-center justify-between border-2 border-gray-700 hover:border-blue-500 cursor-pointer'
        onClick={() => {
          onOpenModal();
        }}
      >
        <p className=''> {taskData.title || 'No Title'} </p>
        <p>
          <MdModeEditOutline />
        </p>
      </div>
    </>
  );
}

export default Task;
