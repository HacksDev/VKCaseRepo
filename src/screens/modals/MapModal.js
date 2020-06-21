import React from 'react';
import { ModalRoot } from '@vkontakte/vkui';
import TimeModal from './TimeModal'
import SearchModal from './SearchModal';
import PersonModal from './PersonModal';
import TimerModal from './TimerModal';



const MapModal = ({ activeModal, changeModal, closeModal, openAlert,
    setProfileTopBar, setHeaderVisibleStatus, setButtonTitleFromText, setHeaderTitleFromText, setNextModelFromText
}) => {


    return (
        <ModalRoot activeModal={activeModal} onClose={closeModal} >
            <PersonModal id="photograhper" closeModal={closeModal}></PersonModal>
            <TimeModal id="time" changeModal={changeModal} closeModal={closeModal} />
            <SearchModal id="search" changeModal={changeModal} closeModal={closeModal} openAlert={openAlert} />
            <TimerModal
                closeModal={closeModal}
                setProfileTopBar={setProfileTopBar}
                setHeaderVisibleStatus={setHeaderVisibleStatus}
                setButtonTitleFromText={setButtonTitleFromText}
                setHeaderTitleFromText={setHeaderTitleFromText}
                setNextModelFromText={setNextModelFromText}
                id="timer"
            ></TimerModal>
        </ModalRoot>

    )
}

export default MapModal;