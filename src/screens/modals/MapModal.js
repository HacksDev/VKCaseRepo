import React from 'react';
import { ModalRoot} from '@vkontakte/vkui';
import TimeModal from './TimeModal'
import SearchModal from './SearchModal';
import PhotographerModal from './PhotograhperModal';



const MapModal = ({ activeModal, changeModal, closeModal }) => {


    return (
        <ModalRoot activeModal={activeModal} onClose={closeModal} >
            <PhotographerModal id="photograhper"></PhotographerModal>
            <TimeModal id="time" changeModal={changeModal} closeModal={closeModal} />
            <SearchModal id="search" changeModal={changeModal} closeModal={closeModal} />
        </ModalRoot>

    )
}

export default MapModal;