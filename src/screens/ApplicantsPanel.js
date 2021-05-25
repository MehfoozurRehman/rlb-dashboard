import React from "react";
import "./ApplicantsPanel.scss";
import { Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import ButtonComponent from "../components/Button";
import ApplicantsDetailsPanel from "./ApplicantsDetailsPanel";

function ApplicantsRow() {
  return (
    <div className="applicant__row">
      <div className="applicant__row__heading__row">
        <div className="panel__main__heading__row__entry">Name</div>
        <div className="panel__main__heading__row__entry">SurName</div>
        <div className="panel__main__heading__row__entry">Email</div>
        <div className="panel__main__heading__row__entry">Phone</div>
        <div className="panel__main__heading__row__entry">Message</div>
        <div className="panel__main__heading__row__entry">CV</div>
      </div>
      <div className="panel__main__row">
        <Nav.Link
          className="panel__main__row__link"
          to="/dashboard/applicants/details"
          as={Link}
        >
          <>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">Kamran Akmal</div>
            <div className="panel__main__row__entry">johndoe@jgmail.com</div>
            <div className="panel__main__row__entry">+92132434878</div>
            <div className="panel__main__row__entry">Lorem ipsum dolor</div>
          </>
        </Nav.Link>
        <div className="panel__main__row__entry">
          <ButtonComponent
            variant="download"
            placeholder="Download CV"
            downloadLink="http://www.africau.edu/images/default/sample.pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default class ApplicantsPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <Switch>
          <Route path="/dashboard/applicants" exact>
            <div className="panel__heading">Applicants</div>
            <div style={{ flex: 1 }}>
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">Name</div>
                <div className="panel__main__heading__row__entry">SurName</div>
                <div className="panel__main__heading__row__entry">Email</div>
                <div className="panel__main__heading__row__entry">Phone</div>
                <div className="panel__main__heading__row__entry">Message</div>
                <div className="panel__main__heading__row__entry">CV</div>
              </div>
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <ApplicantsRow />
              <div className="page__slider">
                <div className="slider">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/dashboard/job-posting"
                  >
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
          </Route>
          <Route path="/dashboard/applicants/details">
            <div className="panel__heading">Applicants - Details</div>
            <div style={{ flex: 1 }}>
              <ApplicantsDetailsPanel />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}
