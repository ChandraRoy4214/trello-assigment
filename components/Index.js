'use client';
import { useEffect, useState } from 'react';
import TaskBoard from './TaskBoard';
import { data } from '../data';

function Index() {
  const [defaultData, setDefaultData] = useState(data);

  return (
    <div className='flex justify-start gap-10'>
      {defaultData?.map((item, ind) => {
        return (
          <div key={ind}>
            <TaskBoard
              ind={ind}
              item={item}
              defaultData={defaultData}
              setDefaultData={setDefaultData}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Index;
