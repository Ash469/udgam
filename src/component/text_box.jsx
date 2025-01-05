import React from 'react';
import stand from '../assets/stand.png';
import './text_box.css';

const TextBox = ({ title, style }) => {
    return (
        <div className={`flex items-center mt-4 mb-4  ${style?.transform}`} style={{ ...style }}>
            <div className="min-w-[80px]">
                <img src={stand} alt="" className="w-full max-w-[600px]" />
            </div>
            <div className="flex justify-center items-center w-auto min-h-[116px] p-3 md:p-4 rounded-[35.725px] border border-[#222] bg-[#225088]">
                <div className="min-h-[92px] p-4 md:p-5 rounded-[23.817px] bg-[#222] flex justify-center items-center">
                    <div className="text-container" style={{ ...style }}>
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextBox;