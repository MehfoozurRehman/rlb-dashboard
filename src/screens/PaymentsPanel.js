import React from "react";
import "./PaymentsPanel.scss";
import { Col, Row, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import InputboxComponent from "../components/Inputbox";
import ButtonComponent from "../components/Button";

export default class PaymentsPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Payments</div>
        <div className="panel__main__job-posting" style={{ flex: 1 }}>
          <div className="panel__main__heading__row">
            <div className="panel__main__heading__row__entry">
              Transaction ID
            </div>
            <div className="panel__main__heading__row__entry">Company Name</div>
            <div className="panel__main__heading__row__entry">Date</div>
            <div className="panel__main__heading__row__entry">Plan</div>
            <div className="panel__main__heading__row__entry">Amount</div>
          </div>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <Nav.Link className="panel__main__row">
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">DSME.co</div>
            <div className="panel__main__row__entry">6/4/21</div>
            <div className="panel__main__row__entry">Plan Name</div>
            <div className="panel__main__row__entry">50$</div>
          </Nav.Link>
          <div className="page__slider">
            <div className="slider">
              <Nav variant="pills" defaultActiveKey="/dashboard/job-posting">
                <Nav.Link
                  to="/dashboard/job-posting"
                  href="/dashboard/job-posting"
                  as={Link}
                  className="nav__link__horizontal"
                >
                  1
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/job-posting"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-1"
                >
                  2
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/job-posting"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-2"
                >
                  3
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/job-posting"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-3"
                >
                  4
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/job-posting"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-4"
                >
                  5
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/job-posting"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-5"
                >
                  6
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
