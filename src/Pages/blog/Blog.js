import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container w-75">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between authorization and authentication
          </Accordion.Header>
          <Accordion.Body>
            Simply put, authentication is the process of verifying who someone
            is, whereas authorization is the process of verifying what specific
            applications, files, and data a user has access to. The situation is
            like that of an airline that needs to determine which people can
            come on board
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            You can use Firebase Authentication to allow users to sign in to
            your app using one or more sign-in methods, including email address
            and password sign-in, and federated identity providers such as
            Google Sign-in and Facebook Login. This tutorial gets you started
            with Firebase Authentication by showing you how to add email address
            and password sign-in to your app. Add and initial
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
