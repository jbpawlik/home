import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
// import ProjectCard from "./ProjectCard";
import {Card} from "react-bootstrap"
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row textAlign="center">
        <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">
                   SwimNW
                  <img src="https://raw.githubusercontent.com/jbpawlik/SwimNW/main/src/assets/images/SwimNW.png" alt="SwimNW" width="100%"></img>
                </Card.Title>
                <Card.Text>
                  <p>Cross-platform mobile app for hydrophiles in the Pacific Northwest. Soon to be available on Google Play and the App Store.</p>
                  <a href="https://www.github.com/jbpawlik/SwimNW" alt="SwimNW">Github Repository</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">
                   Mario's Fine Foods
                  <img src="https://github.com/jbpawlik/specialty_foods/blob/main/app/assets/images/specialtyfoodsproducts-cropped.PNG?raw=true" alt="Mario's" width="100%"></img>
                </Card.Title>
                <Card.Text>
                  <p>Website for a specialty grocer written in Ruby on Rails and JavaScript using a SQL database and user authentication.</p>
                  <a href="https://marios-fine-foods.herokuapp.com/" alt="Mario's">Live Site</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">
                  <h5>Currency X Change</h5>
                  <img src="https://raw.githubusercontent.com/jbpawlik/jbpawlik/main/currency-x-change.PNG" alt="Currency X Change" width="100%"></img>
                </Card.Title>
                <Card.Text>
                  <p>Provides forex rates for USD and global currencies. Uses API calls to query a database to allow user to convert currency. Built in JavaScript and HTML/CSS.</p>
                  <a href="https://jbpawlik.github.io/currency-exchanger/" alt="Currency X Change">Live Site</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">
                  <h5>OKBloomer</h5>
                  <img src="https://raw.githubusercontent.com/jbpawlik/OKBloomer/main/app/assets/images/OKBloomerComposite.png" alt="OKBloomer" width="100%"></img>
                </Card.Title>
                <Card.Text>
                  <p>An app for tracking the health of a user's plants.</p>
                  <a href="http://okbloomer.herokuapp.com/" alt="OKBloomer">Live Site</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
