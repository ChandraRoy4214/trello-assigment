import React from 'react';
import TaskBoard from './TaskBoard';

function Index() {
  return (
    <div className='flex bg-red-400 justify-start gap-10'>
      <TaskBoard />
      <TaskBoard />
      <TaskBoard />
    </div>
  );
}

export default Index;
