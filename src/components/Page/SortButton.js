import React from 'react'
import { Button } from 'react-bootstrap';
import { FaSort } from 'react-icons/fa';

export default function SortButton({ clickHandle }) {
    return (
        <Button variant="link" className='sort-button' onClick={clickHandle}><FaSort /></Button>
    )
}
