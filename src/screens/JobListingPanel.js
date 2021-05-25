import React from "react";
import { Col, Row } from "react-bootstrap";
import "./JobListingPanel.scss";
import { Switch, Route } from "react-router-dom";
import PostingRow from "../components/PostingRow";

export default class JobListingPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
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
      </div>
    );
  }
}
