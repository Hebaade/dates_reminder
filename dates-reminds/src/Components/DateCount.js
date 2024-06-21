import { Row, Col } from 'react-bootstrap'
export default function DateCount({Data}) {
    return (
      <Row className="justify-content-center">
        <Col sm="8" className="p-2 address">
          You have {Data.length} dates today.
        </Col>
      </Row>
    );
}