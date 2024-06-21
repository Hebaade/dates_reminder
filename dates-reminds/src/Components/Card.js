import { Row, Col } from "react-bootstrap";
export default function Card({person}) {
    return (
    
    <Row className="justify-content-center my-2">
      <Col sm="8">
        <div className="rectangle">
          {person.length ? (
            person.map((person, index) => (
              <div className="d-flex border-bottom mx-3 my-2" key={index}>
                <img className="img" src={person.img} alt="img" />
                <div className="px-3">
                  <p className="d-inline fs-5">{person.name}</p>
                  <p className="fs-6">{person.date}</p>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center m-5">No dates today</h3>
          )}
        </div>
      </Col>
    </Row>
    
    )
}
