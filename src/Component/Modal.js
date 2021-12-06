import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
function Example({ addMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (e) => {
    setShow(false);
    addMovie({
      title: e.target.title.value,
      rating: e.target.rate.value,
      description: "This is a new movie",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHkBW9gMn5ZPQiDmbT0t70Z2AuMdAeVXCKw&usqp=CAU",
    });
    e.preventDefault();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Movie !
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSave}>
          <Modal.Header closeButton>
            <Modal.Title>Add your movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              <Form.Control
                name="title"
                type="string"
                placeholder="Put your movie name here"
              />
            }
            {
              <Form.Control
                name="rate"
                type="number"
                placeholder="Rate your movie here"
                max="5"
                min="1"
              />
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default Example;
