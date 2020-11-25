import React from "react";

const KotlinIcon: React.StatelessComponent<{ width: String, height: String }> = ({ children, width, height }) => (
    <svg
        version="1"
        xmlns="http://www.w3.org/2000/svg"
        width={width || '100px'}
        height={height || '100px'}
        viewBox="0 0 32 32">
        <path d="M2,2V30H30v-.047l-6.95-7L16.1,15.946l6.95-7.012L29.938,2Z" fill="#0296d8" />
        <path d="M16.318,2,2,16.318V30h.124L16.132,15.992l-.031-.031L23.05,8.95,29.938,2Z" fill="#f28e0e" />
    </svg>
);

export default KotlinIcon;