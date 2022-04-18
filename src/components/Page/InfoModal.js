import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function InfoModal({ node }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { issue, user, spentAt } = node;
    const parsedDate = new Date(spentAt);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const newDate = parsedDate.toLocaleDateString("en-US", options)

    return (
        <>
            <Button className='modal-trigger' size="sm" variant="outline-primary" onClick={handleShow}>View More</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div>
                        <h3 className="card-title">{issue.title}</h3>
                        <h6 className="card-subtitle text-muted"><a href={issue.webUrl} className="card-link">Link to</a></h6>
                    </div>
                </Modal.Header>
                <Modal.Body className='card mb-3'>
                    <div className="mb-3">
                        <strong>Description:</strong>
                        <p className='card-text'>{issue.description}</p>
                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <strong>User:</strong>
                                <p className="card-text">{user.name} ({user.username})</p>
                            </div>
                            <div className="col-md-6">
                                <strong>Date:</strong>
                                <p className="card-text">{newDate}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
