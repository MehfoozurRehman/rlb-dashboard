import React from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.scss";
import { Switch, Route, Link } from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import PaymentsPanel from "./PaymentsPanel";
import JobListing from "./JobListing";
import JobPosting from "./JobPosting";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dasboard__container">
        <SideBar />
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPanel />
          </Route>
          <div className="main">
            <Route path="/dashboard/job-posting">
              <JobPosting />
            </Route>
            <Route path="/dashboard/job-listing">
              <JobListing />
            </Route>
            <Route path="/dashboard/applicants">
              <PaymentsPanel />
            </Route>
          </div>
        </Switch>
      </div>
    );
  }
}
