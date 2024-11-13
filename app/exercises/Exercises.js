import React, { useState } from "react";
import problems from "./Exercises.json";
import { Container, Row, Col, Button } from "react-bootstrap";

const Sidebar = ({ languages, onSelectLanguage, selectedLanguage }) => (
  <div className="p-2 bg-gray-800 fixed top-0 left-0 bottom-0 overflow-y-auto w-72">
    <h5 className="text-white pt-20 pb-2">Languages</h5>
    {languages.map((language, index) => (
      <div
        key={index}
        className="topic-item"
        style={{
          backgroundColor:
            selectedLanguage.name === language.name ? "#def452" : "white",
          color:
            selectedLanguage.name === language.name ? "slategrey" : "inherit",
          cursor: "pointer",
          padding: "10px",
          marginBottom: "5px",
        }}
        onClick={() => onSelectLanguage(language)}
      >
        {language.name}
      </div>
    ))}
  </div>
);

const ExerciseSection = ({ language, problems }) => {
  const [visibleSolutionIndex, setVisibleSolutionIndex] = useState(-1);

  const toggleSolution = (index) => {
    if (visibleSolutionIndex === index) {
      setVisibleSolutionIndex(-1); // Hide the solution if clicking on the same button again
    } else {
      setVisibleSolutionIndex(index); // Show the solution for the clicked exercise
    }
  };

  return (
    <div className="p-3">
      {problems.map((problem, index) => (
        <div
          key={index}
          className="mb-4 bg-light p-3 rounded-lg shadow shadow-sm"
        >
          <h6>
            {language.name} Problem {index + 1}
          </h6>
          <p>{problem.question}</p>
          {visibleSolutionIndex === index && (
            <div className="p-2">
              <pre className="bg-slate-500 text-white">
                <code>{problem.solution}</code>
              </pre>
            </div>
          )}
          <Button
            variant="primary"
            onClick={() => toggleSolution(index)}
            className="mt-2"
          >
            {visibleSolutionIndex === index ? "Hide Solution" : "Show Solution"}
          </Button>
        </div>
      ))}
    </div>
  );
};

const ExerciseApp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    problems.languages[0]
  );
  const [showSolution, setShowSolution] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowSolution(false); // Reset solution visibility when changing language
  };

  return (
    <Container fluid className="p-3">
      <Row>
        <Col xs={12} md={3}>
          <Sidebar
            languages={problems.languages}
            onSelectLanguage={handleLanguageSelect}
            selectedLanguage={selectedLanguage}
          />
        </Col>
        <Col xs={12} md={9}>
          <h1 className="mb-4">Exercises</h1>
          <ExerciseSection
            language={selectedLanguage}
            problems={selectedLanguage.problems} // Pass problems for the selected language
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ExerciseApp;
