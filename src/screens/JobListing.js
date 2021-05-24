import React from "react";
import { Col, Row, Button, Nav, Form } from "react-bootstrap";
import "./JobListing.scss";
import { Switch, Route, Link } from "react-router-dom";
import PostingRow from "../components/PostingRow";
import JobListingDetails from "./JobListingDetails";

export default class Posting extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Payments</div>
        <div className="panel__main__job-posting" style={{ flex: 1 }}>
          <Switch>
            <Route path="/dashboard/job-listing" exact>
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
            </Route>
            <Route path="/dashboard/job-listing/details">
              <JobListingDetails />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
