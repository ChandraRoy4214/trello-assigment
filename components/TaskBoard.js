import React from 'react';
import Task from './Task';

function TaskBoard() {
  return (
    <article className='bg-black rounded-md px-2 py-4 '>
      <h4 className='mb-2 font-semibold'> To do </h4>

      <div className='flex flex-col gap-2'>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </article>
  );
}

export default TaskBoard;
