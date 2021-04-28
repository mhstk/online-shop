import React, {useState} from 'react';

const useSwipeLeft = (handler) => {
   const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 150) {
            // do your stuff here for left swipe
            handler();
        }
    }
    return {handleTouchStart, handleTouchMove,handleTouchEnd}
};

export default useSwipeLeft;