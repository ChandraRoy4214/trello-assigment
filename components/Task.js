'use client';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import TaskModal from './TaskModal';

function Task() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div
      className='px-4 py-1 rounded-md bg-gray-700 text-slate-200 min-w-56 flex items-center justify-between border-2 border-gray-700 hover:border-blue-500 cursor-pointer'
      onClick={() => {
        onOpenModal();
      }}
    >
      <TaskModal open={open} onCloseModal={onCloseModal} />

      <p className=''> project planning </p>
      <p>
        <MdModeEditOutline />
      </p>
    </div>
  );
}

export default Task;
