import React from 'react';
import GallaryListItem from '../list_item/gallary_list_item';

const GallaryList = (props) => {
    return (
        <div>
            <h1>2021년 08월</h1>
            <ul>
                <GallaryListItem/>
            </ul>
        </div>
    );
};

export default GallaryList;