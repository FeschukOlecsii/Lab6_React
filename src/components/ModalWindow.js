// // import { click } from "@testing-library/user-event/dist/click";

// export default function Modal(){
//     const btnModal = document.querySelector('btnModal');
//     const modalText = document.querySelector('modalText');
//     // btnModal.addEventListener('click', () => {
//     //     modalText.classList.add('modalTextShow');
//     // })
//     const modalTextShow = () => {
//         modalText.className = 'modalTextShow';
//     }
//     return(
//         <>
//         <button className="btnModal" onClick={modalTextShow}>Hi</button>
//         <h1 className="modalText" >Hide, none</h1>
//         </>
//     )
// }


// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const MyModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Відкрити модальне вікно</button>
//       <Modal isOpen={isOpen} onRequestClose={closeModal}>
//         <h2>Моє модальне вікно</h2>
//         <p>Це просте модальне вікно в ReactJS.</p>
//         <button onClick={closeModal}>Закрити</button>
//       </Modal>
//     </div>
//   );
// };

// export default MyModal;


import React, { useState } from 'react';
import Modal from './Modal';

function ModalWindow () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className='buttonModal' onClick={openModal}>Відкрити модальне вікно</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <h2>Моє модальне вікно</h2>
        <p>Це просте модальне вікно з використанням бібліотеки ReactJS.</p>
        <button className='buttonModal' onClick={closeModal}>Закрити</button>
      </Modal>
    </>
  );
};
export default ModalWindow;