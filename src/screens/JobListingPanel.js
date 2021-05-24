import React from "react";
import { Col, Row, Button, Nav, Form } from "react-bootstrap";
import "./JobListingPanel.scss";
import { Switch, Route, Link } from "react-router-dom";
import PostingRow from "../components/PostingRow";
import JobListingDetailsPanel from "./JobListingDetailsPanel";

export default class JobListingPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <Switch>
          <Route path="/dashboard/job-listing" exact>
            <div className="panel__heading">Job Listing</div>
            <div style={{ flex: 1 }}>
              <Col>
                <Row className="posting__table__row__heading">
                  <Col className="title table__heading">Title</Col>
                  <Col className="applicants table__heading">Applicats</Col>
                  <Col className="interested table__heading">Interested</Col>
                  <Col className="visitors table__heading">Visitors</Col>
                  <Col className="date-created table__heading">Created</Col>
                  <Col className="state table__heading">Status</Col>
                  <Col className="edits table__heading">Date</Col>
                </Row>
                <PostingRow status="live" />
                <PostingRow status="live" />
                <PostingRow status="hold" />
                <PostingRow status="live" />
                <PostingRow status="hold" />
                <PostingRow status="closed" />
                <PostingRow status="live" />
                <PostingRow status="live" />
                <PostingRow status="live" />
                <PostingRow status="live" />
              </Col>
            </div>
          </Route>
          <Route path="/dashboard/job-listing/details">
            <div className="panel__heading">Job Listing - Details</div>
            <div style={{ flex: 1 }}>
              <JobListingDetailsPanel />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}