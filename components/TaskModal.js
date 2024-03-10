import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const TaskModal = ({ open, onCloseModal }) => {
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
};

export default TaskModal;
