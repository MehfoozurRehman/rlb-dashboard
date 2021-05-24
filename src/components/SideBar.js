import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="side__bar">
        <div className="side__bar__heading">RLB Production</div>
        <Nav
          variant="pills"
          className="sidebar__links"
          defaultActiveKey="/dashboard"
        >
          <Nav.Item>
            <Nav.Link
              as={Link}
              href="/dashboard"
              to="/dashboard"
              className="nav__link__vertical"
            >
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 30 22"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/job-posting"
              className="nav__link__vertical"
              eventKey="link-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32.278 32.278"
                fill="currentColor"
              >
                <g id="_4552678" data-name="4552678" transform="translate(0 0)">
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M25.659,19.039a6.585,6.585,0,0,0-3.983,1.336,5.361,5.361,0,0,0-4.969-3.353H14.185v-.895a6.035,6.035,0,0,0,1.083-.86,5.95,5.95,0,0,0,1.754-4.236V3.467A3.471,3.471,0,0,0,13.554,0H6.62A4.1,4.1,0,0,0,5.043,7.88v3.152A5.95,5.95,0,0,0,6.8,15.267a6.039,6.039,0,0,0,1.083.86v.894H5.359A5.365,5.365,0,0,0,0,22.38v8.952a.946.946,0,0,0,.946.946H21.12a.946.946,0,0,0,.946-.946v-.117a6.619,6.619,0,1,0,3.593-12.176ZM6.62,6.3a2.207,2.207,0,0,1,0-4.413h6.934A1.578,1.578,0,0,1,15.13,3.467V6.16a3.116,3.116,0,0,1-1.858-1.588l-.133-.266a.946.946,0,0,0-1.6-.144A5.384,5.384,0,0,1,7.25,6.3Zm.315,4.728V8.2h.315a7.289,7.289,0,0,0,4.889-1.9A4.982,4.982,0,0,0,15.13,8.108v2.924a4.1,4.1,0,1,1-8.2,0Zm5.359,5.857v2.024a1.261,1.261,0,0,1-2.522,0V16.889a6.06,6.06,0,0,0,2.522,0Zm7.88,13.5H18.283V24.9a.946.946,0,0,0-1.891,0v5.485H5.674V24.9a.946.946,0,0,0-1.891,0v5.485H1.891V22.38a3.471,3.471,0,0,1,3.467-3.467H7.88a3.152,3.152,0,1,0,6.3,0h2.522a3.445,3.445,0,0,1,3.444,3.079,6.607,6.607,0,0,0,.024,7.369Zm.852-3.783h1.821a13.332,13.332,0,0,0,.519,3.187A4.743,4.743,0,0,1,21.026,26.6Zm1.821-1.891H21.026a4.743,4.743,0,0,1,2.339-3.187A13.335,13.335,0,0,0,22.846,24.713ZM25.659,30.3a7.664,7.664,0,0,1-.918-3.7h1.837A7.665,7.665,0,0,1,25.659,30.3Zm-.918-5.588a7.665,7.665,0,0,1,.918-3.7,7.664,7.664,0,0,1,.918,3.7Zm3.212,5.078a13.335,13.335,0,0,0,.519-3.187h1.821A4.743,4.743,0,0,1,27.953,29.791Zm.519-5.078a13.332,13.332,0,0,0-.519-3.187,4.743,4.743,0,0,1,2.339,3.187Z"
                  />
                </g>
              </svg>
              Job Posting
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/job-listing"
              className="nav__link__vertical"
              eventKey="link-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32.278 32.278"
                fill="currentColor"
              >
                <g id="_4552678" data-name="4552678" transform="translate(0 0)">
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M25.659,19.039a6.585,6.585,0,0,0-3.983,1.336,5.361,5.361,0,0,0-4.969-3.353H14.185v-.895a6.035,6.035,0,0,0,1.083-.86,5.95,5.95,0,0,0,1.754-4.236V3.467A3.471,3.471,0,0,0,13.554,0H6.62A4.1,4.1,0,0,0,5.043,7.88v3.152A5.95,5.95,0,0,0,6.8,15.267a6.039,6.039,0,0,0,1.083.86v.894H5.359A5.365,5.365,0,0,0,0,22.38v8.952a.946.946,0,0,0,.946.946H21.12a.946.946,0,0,0,.946-.946v-.117a6.619,6.619,0,1,0,3.593-12.176ZM6.62,6.3a2.207,2.207,0,0,1,0-4.413h6.934A1.578,1.578,0,0,1,15.13,3.467V6.16a3.116,3.116,0,0,1-1.858-1.588l-.133-.266a.946.946,0,0,0-1.6-.144A5.384,5.384,0,0,1,7.25,6.3Zm.315,4.728V8.2h.315a7.289,7.289,0,0,0,4.889-1.9A4.982,4.982,0,0,0,15.13,8.108v2.924a4.1,4.1,0,1,1-8.2,0Zm5.359,5.857v2.024a1.261,1.261,0,0,1-2.522,0V16.889a6.06,6.06,0,0,0,2.522,0Zm7.88,13.5H18.283V24.9a.946.946,0,0,0-1.891,0v5.485H5.674V24.9a.946.946,0,0,0-1.891,0v5.485H1.891V22.38a3.471,3.471,0,0,1,3.467-3.467H7.88a3.152,3.152,0,1,0,6.3,0h2.522a3.445,3.445,0,0,1,3.444,3.079,6.607,6.607,0,0,0,.024,7.369Zm.852-3.783h1.821a13.332,13.332,0,0,0,.519,3.187A4.743,4.743,0,0,1,21.026,26.6Zm1.821-1.891H21.026a4.743,4.743,0,0,1,2.339-3.187A13.335,13.335,0,0,0,22.846,24.713ZM25.659,30.3a7.664,7.664,0,0,1-.918-3.7h1.837A7.665,7.665,0,0,1,25.659,30.3Zm-.918-5.588a7.665,7.665,0,0,1,.918-3.7,7.664,7.664,0,0,1,.918,3.7Zm3.212,5.078a13.335,13.335,0,0,0,.519-3.187h1.821A4.743,4.743,0,0,1,27.953,29.791Zm.519-5.078a13.332,13.332,0,0,0-.519-3.187,4.743,4.743,0,0,1,2.339,3.187Z"
                  />
                </g>
              </svg>
              Job Listing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/applicants"
              className="nav__link__vertical"
              eventKey="link-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32.278 32.278"
                fill="currentColor"
              >
                <g id="_4552678" data-name="4552678" transform="translate(0 0)">
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M25.659,19.039a6.585,6.585,0,0,0-3.983,1.336,5.361,5.361,0,0,0-4.969-3.353H14.185v-.895a6.035,6.035,0,0,0,1.083-.86,5.95,5.95,0,0,0,1.754-4.236V3.467A3.471,3.471,0,0,0,13.554,0H6.62A4.1,4.1,0,0,0,5.043,7.88v3.152A5.95,5.95,0,0,0,6.8,15.267a6.039,6.039,0,0,0,1.083.86v.894H5.359A5.365,5.365,0,0,0,0,22.38v8.952a.946.946,0,0,0,.946.946H21.12a.946.946,0,0,0,.946-.946v-.117a6.619,6.619,0,1,0,3.593-12.176ZM6.62,6.3a2.207,2.207,0,0,1,0-4.413h6.934A1.578,1.578,0,0,1,15.13,3.467V6.16a3.116,3.116,0,0,1-1.858-1.588l-.133-.266a.946.946,0,0,0-1.6-.144A5.384,5.384,0,0,1,7.25,6.3Zm.315,4.728V8.2h.315a7.289,7.289,0,0,0,4.889-1.9A4.982,4.982,0,0,0,15.13,8.108v2.924a4.1,4.1,0,1,1-8.2,0Zm5.359,5.857v2.024a1.261,1.261,0,0,1-2.522,0V16.889a6.06,6.06,0,0,0,2.522,0Zm7.88,13.5H18.283V24.9a.946.946,0,0,0-1.891,0v5.485H5.674V24.9a.946.946,0,0,0-1.891,0v5.485H1.891V22.38a3.471,3.471,0,0,1,3.467-3.467H7.88a3.152,3.152,0,1,0,6.3,0h2.522a3.445,3.445,0,0,1,3.444,3.079,6.607,6.607,0,0,0,.024,7.369Zm.852-3.783h1.821a13.332,13.332,0,0,0,.519,3.187A4.743,4.743,0,0,1,21.026,26.6Zm1.821-1.891H21.026a4.743,4.743,0,0,1,2.339-3.187A13.335,13.335,0,0,0,22.846,24.713ZM25.659,30.3a7.664,7.664,0,0,1-.918-3.7h1.837A7.665,7.665,0,0,1,25.659,30.3Zm-.918-5.588a7.665,7.665,0,0,1,.918-3.7,7.664,7.664,0,0,1,.918,3.7Zm3.212,5.078a13.335,13.335,0,0,0,.519-3.187h1.821A4.743,4.743,0,0,1,27.953,29.791Zm.519-5.078a13.332,13.332,0,0,0-.519-3.187,4.743,4.743,0,0,1,2.339,3.187Z"
                  />
                </g>
              </svg>
              Applicants
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="side__bar__cta">
          <Nav.Link as={Link} to="/" className="nav__link__vertical">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.81 28.805">
              <g id="loguot" transform="translate(29.81 28.805) rotate(180)">
                <path
                  id="Path_31"
                  data-name="Path 31"
                  d="M0,7.479H13.665l-3.457,3.127,1.677,1.854,6.89-6.23L11.885,0,10.208,1.854l3.457,3.126H0Z"
                  transform="translate(0 8.173)"
                  fill="currentColor"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M24.313,0H0V6.1H2.5V2.5H21.813V26.3H2.5v-3.66H0V28.8H24.313Z"
                  transform="translate(5.496)"
                  fill="currentColor"
                />
              </g>
            </svg>
            Logout
          </Nav.Link>
        </div>
      </div>
    );
  }
}