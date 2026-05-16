import React, { useState } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// functional Component
const Uploader = () => {
  const [files, setFiles] = useState([]);

  const handleFiles = (uploadedFiles) => {
    setFiles([...files, ...uploadedFiles]);
  };

  const handleDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  return (
    <>
        <Container className="pt-5 pb-5">
          <Row className="justify-content-center">
              <h2 className="display-3 mb-5 text-center">Unleash the Power of Knowledge</h2>
              <p className="text-center fw-bold">Turn your notes into a gateway of collective knowledge</p>
            <Col className="text-center" lg="8">
              <div
                className="file-uploader"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="file-uploader-content">
                  <div style={{cursor: "default"}}>
                    <i className="fa fa-solid fa-file display-2"></i>
                  </div>
                  <div className="file-uploader-text">
                    <span>Drag and drop your files here <br/></span>
                    <label htmlFor="file-input" className="text-primary">
                      Or Choose your files
                    </label>
                    <input
                      type="file"
                      id="file-input"
                      className="file-input"
                      multiple
                      onChange={(e) => handleFiles(Array.from(e.target.files))}
                    />
                  </div>
                </div>
              </div>
                <ul className="list-group file-list mt-4">
                    {files.map((file, index) => (
                        <li className="list-group-item d-flex justify-content-between border pt-0 pb-0" key={index}>
                            <p className="file-name text-align-center">{file.name}</p>
                            <button className="btn btn-link delete-button " onClick={() => handleDelete(index)}>
                                <i className="fa fa-times"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </Col>
          </Row>
        </Container>
    </>
  );
};

export default Uploader;
