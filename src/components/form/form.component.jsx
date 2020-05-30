import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <section id="Contact">
        <Row className="m-0 justify-content-center">
          <hr className="separator" />
        </Row>
        <Row className="pt-3 m-0 justify-content-center">
          <Col xs={12}>
            <h5 className="text-center text-white my-4">
              Let's work together to create game-changing experiences.
            </h5>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <form
              className="pt-3 text-center"
              method="post"
              action="https://formspree.io/mknqjakg"
              onSubmit={this.submitForm}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-4"
                  id="Id"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control mb-4"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="_replyto"
                />
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="TextArea"
                    rows="3"
                    placeholder="Message"
                    name="body"
                  ></textarea>
                  <small
                    id="emailHelp"
                    className="form-text text-muted text-center mt-3"
                  >
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </div>
              <Container className="py-4 view-project-btn-container">
                <Row className="justify-content-center">
                  <Col lg={4} className="text-center">
                    {status === 'SUCCESS' ? (
                      <p className="text-white">Thanks!</p>
                    ) : (
                      <Button type="submit" className="custom-btn">
                        Submit
                      </Button>
                    )}
                    {status === 'ERROR' && <p>Ooops! There was an error.</p>}
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Form;
