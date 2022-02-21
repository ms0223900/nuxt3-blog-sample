/* eslint-disable no-unused-expressions */
import { ref, watch } from 'vue';

const useToggle = (initToggle = false, cb?: (toggle: boolean) => any) => {
    const toggle = ref(initToggle);

    const handleToggle = () => {
        toggle.value = !toggle.value;
    };

    const setToggle = (_toggle: boolean | ((originToggle?: boolean) => any)) => {
        if (typeof _toggle === 'function') {
            toggle.value = _toggle(toggle.value);
        } else {
            toggle.value = _toggle;
        }
    };

    watch([toggle], () => {
        cb && cb(toggle.value);
    });

    return ({
        toggle,
        setToggle,
        handleToggle,
    });
};

export default useToggle;
