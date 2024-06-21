import {Row,Col,Button} from 'react-bootstrap'
export default function Buttons({ deleteData, showData }) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <Button className="btn btn-success p-2" onClick={showData}>
          Show All
        </Button>
        <Button className="btn btn-danger p-2" onClick={deleteData}>
          Delete All
        </Button>
      </Col>
    </Row>
  );
}