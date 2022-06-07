import React from 'react';

type Props = {
    primary: boolean;
    label?: string;
};

const Button = ({ label = "Button", primary = true }: Props) => (
    <div>
        <h1>{label}</h1>
    </div>
);

export default Button;