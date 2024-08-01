import React, { useState } from 'react';

const createMoodModal = () => {
    return (
        <div className="border border-blue">
            Outer div
            <div>Inner Div</div>
        </div>
    );
};

const MoodTracker: React.FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <div>
            <div onClick={toggleModal}>MoodTracker</div>
            {isModalVisible && createMoodModal()}
        </div>
    );
}

export default MoodTracker;