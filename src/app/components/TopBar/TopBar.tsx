import React from 'react';
import logo from "../../assets/images/logo.png";
import { GoBell } from 'react-icons/go';
import SearchInput from '../Common/SearchInput';

type Props = {}

function TopBar({ }: Props) {
    return (
        <div className='top-bar'>
            <div>
                <img
                    className="logo"
                    src={logo.src}
                    alt="Logo"
                />
            </div>
            <div className='actions'>
                <div className='search-input'>
                    <SearchInput placeholder="Search" />
                </div>
                <div>
                    <GoBell className='notification-icon' />
                </div>
            </div>
        </div>
    )
}

export default TopBar;
