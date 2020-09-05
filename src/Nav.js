import React, { useEffect, useState, useRef } from 'react';
import { MenuList } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { useStateValue } from './StateProvider'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [{ isAvatarHidden }] = useStateValue();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo" />
            {isAvatarHidden && <><img className="nav__avatar" ref={anchorRef} src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avatar Logo" onClick={handleToggle} onMouseOver={handleToggle} />
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal onMouseOver={() => setOpen(true)}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ fontSize: '14px', transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem>
                                            <ListItemIcon>
                                                <img className="nav__sub_avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avatar Logo" />
                                            </ListItemIcon>
                                            <span style={{ fontSize: '14px' }}>{"Drunk Mutant"}</span>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemIcon>
                                                <img className="nav__sub_avatar" src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSz8U4uC6_i0Fuc-oUrLQ-6_4cN4K_0kkS76utZWTEfAAFwG6TB09D0nSC1NqqtCJfckNvLVMajXBYjOSGc7zZi0Dx7z.png?r=b97" alt="Avatar Logo" />
                                            </ListItemIcon>
                                            <span style={{ fontSize: '14px' }}>{"Doraemon"}</span>
                                        </MenuItem>
                                        <MenuItem>
                                            <span onClick={() => window.location.reload(false)} className="nav__exit">{'Exit Profile'}</span>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </>
            }
        </div>
    )
}

export default Nav
