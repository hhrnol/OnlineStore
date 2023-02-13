import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import TextInput from './components/text-input';
import './manage-product-info-page.css';

const imagePlaceholder = 'https://via.placeholder.com/400x200.png';

const ManageProductInfoPage = () => {
  const product = useSelector(state => state.product.data);
  const [image, setImage] = useState(product.imgSrc);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
    onDrop: acceptedFiles => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  useEffect(() => () => URL.revokeObjectURL(image), [image]);

  return (
    <Container className="product-page">
      <Row>
        <Col className="product-page__picture-and-price">
          <div className="product-page__drag-and-drop">
            <div {...getRootProps({ className: 'product-page__dropzone' })}>
              <input {...getInputProps()} />
              <p>{"Drag 'n' drop an image here, or click to select"}</p>
              <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
          </div>
          <img className="product-page__image" src={image ? image : imagePlaceholder} alt="laptop" />
        </Col>
        <Col className="product-page__title-and-characteristics">
          <Formik initialValues={product}>
            <Form>
              <TextInput label="Product Title" name="title" type="text" />
              <TextInput label="Price" name="price" type="text" />
              <h5>Screen</h5>
              <TextInput label="Diagonal" name="screen.diagonal" type="text" />
              <TextInput label="Refresh rate" name="screen.refreshRate" type="text" />
              <h5>Processor</h5>
              <TextInput label="CPU" name="cpu.processor" type="text" />
              <TextInput label="Operating system" name="cpu.operatingSystem" type="text" />
              <h5>RAM</h5>
              <TextInput label="Amount of RAM" name="ram.amountOfRam" type="text" />
              <h5>Storage</h5>
              <TextInput label="SSD" name="storage.ssd" type="text" />
              <h5>GPU</h5>
              <TextInput label="Video card" name="gpu.videoCard" type="text" />
              <h5>Network adapters</h5>
              <TextInput label="Wi-Fi" name="networkAdapters.wifi" type="text" />
              <TextInput label="Bluetooth" name="networkAdapters.bluetooth" type="text" />
              <Button variant="success" type="submit" className="product-page__save-button">
                Save
              </Button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProductInfoPage;
