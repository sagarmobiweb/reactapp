import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegCommentDots, FaWeight } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";

function Blog() {
  return (
    <>
      <div className="bnnr2 justify-content-between pt-3  witeheading  blogstyle">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Blog</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5">
        <Row>
          <Col sm={4} >
            <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-2 ">
                    <HiOutlineUser style={{ height: "20px", width: "20px" }} />
                    John Doe
                  </span>

                  <span className="pe-2">
                    <MdOutlineWatchLater
                      style={{ height: "20px", width: "20px" }}
                    />
                    Jan 1, 2020
                  </span>

                  <span className="pe-2">
                    <FaRegCommentDots
                      style={{ height: "20px", width: "20px" }}
                    />
                    12 
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </Card.Text>
                <Card.Text>
                  <BiRightArrowCircle
                    className="me-2"
                    style={{ height: "24px", width: "24px" }}
                  />
                  IOS Mobile Application
                </Card.Text>
                <Button className="cntbtnsty mt-3" type="submit" >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        <Col sm={4}>
            <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-2 ">
                    <HiOutlineUser style={{ height: "20px", width: "20px" }} />
                    John Doe
                  </span>

                  <span className="pe-2">
                    <MdOutlineWatchLater
                      style={{ height: "20px", width: "20px" }}
                    />
                    Jan 1, 2020
                  </span>

                  <span className="pe-2">
                    <FaRegCommentDots
                      style={{ height: "20px", width: "20px" }}
                    />
                    12 
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </Card.Text>
                <Card.Text>
                  <BiRightArrowCircle
                    className="me-2"
                    style={{ height: "24px", width: "24px" }}
                  />
                  IOS Mobile Application
                </Card.Text>
                <Button className="cntbtnsty mt-3" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
            <Col sm={4} >
            <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-2 ">
                    <HiOutlineUser style={{ height: "20px", width: "20px" }} />
                    John Doe
                  </span>

                  <span className="pe-2">
                    <MdOutlineWatchLater
                      style={{ height: "20px", width: "20px" }}
                    />
                    Jan 1, 2020
                  </span>

                  <span className="pe-2">
                    <FaRegCommentDots
                      style={{ height: "20px", width: "20px" }}
                    />
                    12 
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </Card.Text>
                <Card.Text>
                  <BiRightArrowCircle
                    className="me-2"
                    style={{ height: "24px", width: "24px" }}
                  />
                  IOS Mobile Application
                </Card.Text>
                <Button className="cntbtnsty mt-3" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
   
        <Row>
          <Col sm={4} className="mt-2">
            <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-2 ">
                    <HiOutlineUser style={{ height: "20px", width: "20px" }} />
                    John Doe
                  </span>

                  <span className="pe-2">
                    <MdOutlineWatchLater
                      style={{ height: "20px", width: "20px" }}
                    />
                    Jan 1, 2020
                  </span>

                  <span className="pe-2">
                    <FaRegCommentDots
                      style={{ height: "20px", width: "20px" }}
                    />
                    12 
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </Card.Text>
                <Card.Text>
                  <BiRightArrowCircle
                    className="me-2"
                    style={{ height: "24px", width: "24px" }}
                  />
                  IOS Mobile Application
                </Card.Text>
                <Button className="cntbtnsty mt-3" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        <Col sm={4} className="mt-2">
            <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-2 ">
                    <HiOutlineUser style={{ height: "20px", width: "20px" }} />
                    John Doe
                  </span>

                  <span className="pe-2">
                    <MdOutlineWatchLater
                      style={{ height: "20px", width: "20px" }}
                    />
                    Jan 1, 2020
                  </span>

                  <span className="pe-2">
                    <FaRegCommentDots
                      style={{ height: "20px", width: "20px" }}
                    />
                    12 
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </Card.Text>
                <Card.Text>
                  <BiRightArrowCircle
                    className="me-2"
                    style={{ height: "24px", width: "24px" }}
                  />
                  IOS Mobile Application
                </Card.Text>
                <Button className="cntbtnsty mt-3" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
            <Col sm={4} className="mt-2">
            <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-2 ">
                    <HiOutlineUser style={{ height: "20px", width: "20px" }} />
                    John Doe
                  </span>

                  <span className="pe-2">
                    <MdOutlineWatchLater
                      style={{ height: "20px", width: "20px" }}
                    />
                    Jan 1, 2020
                  </span>

                  <span className="pe-2">
                    <FaRegCommentDots
                      style={{ height: "20px", width: "20px" }}
                    />
                    12 
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </Card.Text>
                <Card.Text>
                  <BiRightArrowCircle
                    className="me-2"
                    style={{ height: "24px", width: "24px" }}
                  />
                  IOS Mobile Application
                </Card.Text>
                <Button className="cntbtnsty mt-3" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
