
import { useState } from 'react';

const useDropdownMenu = () => {
    const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);

    const handleOpen = () => {
        setDropdownMenuOpen(true);
    };

    const handleClose = () => {
        setDropdownMenuOpen(false);
    };

    return { isDropdownMenuOpen, handleOpen, handleClose };
};

export default useDropdownMenu;
