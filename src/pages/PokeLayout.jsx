import React from 'react';
import { Outlet } from 'react-router-dom';

function PokeLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
export default PokeLayout
