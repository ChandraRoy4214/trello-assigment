import React from 'react';
import Task from './Task';

function TaskBoard({ ind, item, defaultData, setDefaultData }) {
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
    </article>
  );
}

export default TaskBoard;
