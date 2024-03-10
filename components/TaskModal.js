import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

const TaskModal = ({
  open,
  onCloseModal,
  task,
  setTask,
  defaultData,
  setDefaultData,
  ind,
  group,
}) => {
  const { title, desc, deadline, favourite } = task;

  console.log('group', group);

  const handleChange = (type, value) => {
    setTask((prev) => {
      return { ...prev, [type]: value };
    });
  };

  const handleSubmit = () => {
    let newData = defaultData?.map((item) => {
      if (item.group == group) {
        item.tasks[ind] = task;
      }

      return item;
    });

    setDefaultData(newData);
    onCloseModal();
  };

  return (
    <div className='text-white'>
      <Modal
        open={open}
        onClose={() => {
          onCloseModal();
        }}
        center
        classNames={{
          modal: `rounded-lg min-w-[50vw] overflow-hidden`,
          closeIcon: '-mr-4 -mt-4',
        }}
      >
        <div className='m-0 min-w-full p-3 rounded-md min-h-full bg-black'>
          <div className='flex justify-between items-center w-11/12'>
            <div className=' mb-4'>
              <p className='text-sm font-semibold mb-1'> Title </p>
              <input
                placeholder='Title'
                type='text'
                value={title || ''}
                onChange={(e) => {
                  handleChange('title', e.target.value);
                }}
                maxLength={25}
                className={`h-10 text-white bg-violet-blue font-semibold focus:font-medium focus:outline-none text-left font-primary text-base rounded-md min-w-44 px-2 bg-gray-700`}
              />
            </div>

            <div className=''>
              <p className='text-sm font-semibold mb-1'> Deadline </p>
              <input
                placeholder='Deadline'
                type='date'
                value={deadline || ''}
                onChange={(e) => {
                  handleChange('deadline', e.target.value);
                }}
                className={` h-10 text-white bg-violet-blue font-semibold focus:font-medium focus:outline-none text-left font-primary text-base rounded-md w-44 px-2 bg-gray-700`}
              />
            </div>

            <div
              className='text-2xl cursor-pointer text-red-600 hover:scale-110'
              onClick={() => {
                setTask((prev) => {
                  return { ...prev, favourite: !prev.favourite };
                });
              }}
            >
              {favourite ? (
                <p>
                  <MdOutlineFavorite />
                </p>
              ) : (
                <p>
                  <MdOutlineFavoriteBorder />
                </p>
              )}
            </div>
          </div>

          <div>
            <p className='mb-2 font-semibold '> Description </p>
            <textarea
              name='desc'
              value={desc || ''}
              onChange={(e) => {
                handleChange('desc', e.target.value);
              }}
              className=' border-2 border-gray-800 bg-gray-700 min-h-52 text-white  text-sm rounded-md focus:outline-none block w-full px-2 py-1 '
              placeholder='Take notes here'
            ></textarea>
          </div>
          <div className='flex justify-between items-center text-white  my-4 mx-auto text-sm sm:text-base w-full'>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className={`bg-gray-800 py-1 px-2 sm:py-2 sm:px-3 rounded-lg`}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskModal;
