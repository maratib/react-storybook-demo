import React from 'react';
import Button from '../ui/Button';

type Props = {
    name?: string;
};

const Header = ({ name }: Props) => (
    <div>
        <h1 className='text-red-500'>Header</h1>
        <Button primary label='Ok' />
    </div>
);

export default Header;