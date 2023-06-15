import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styles from './Form.module.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const Forms = () => {
  return (
    <div className={styles.container}>
        <Image className={styles.imgStyle} src="https://carthagebeauty.com/wp-content/uploads/2021/10/Carthage_Cb2-Crema-Contorno-de-Ojos-2000x2000-A-300x300.jpg"  />   
      <Form className={`${styles["space"]} ${styles["width50"]}`}>
      <h4 className={styles.center}> If you want more information about us and our products, let us know!</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Row>
          <Col xs={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="jime" />
          </Col>
          <Col xs={6}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="jimena@email.com"
            />
          </Col>
          
        </Row>
      </Form.Group>
      <Button className = {styles.buttonStyle} as="input" type="submit" value="Submit" />{' '}
    </Form>
    </div>
    
  );
};

export default Forms;
