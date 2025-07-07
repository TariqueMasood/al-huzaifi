import React from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner, Alert, Card } from "react-bootstrap";
import styled from "styled-components";
import { useRegistrationDetails } from "../../hooks/use-queries";
import { scholarshipTypeLabels } from "../../components/registration-form";

const RegistrationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useRegistrationDetails(id);

  if (isLoading) return <Spinner animation="border" />;
  if (isError || !data) {
    // Log error for debugging
    console.error("Registration details error:", error);
    return <Alert variant="danger">Failed to load registration details.</Alert>;
  }

  return (
    <Wrapper>
      <Card>
        <Card.Header>
          <h3>
            Registration Details
            <Link
              to="/dashboard/registrations"
              className="btn btn-link"
              style={{ float: "right" }}
            >
              Back to List
            </Link>
          </h3>
        </Card.Header>
        <Card.Body>
          <DetailList>
            <li>
              <strong>First Name:</strong> {data.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {data.lastName}
            </li>
            <li>
              <strong>Age:</strong> {data.age}
            </li>
            <li>
              <strong>Gender:</strong> {data.gender}
            </li>
            <li>
              <strong>Email:</strong> {data.email}
            </li>
            <li>
              <strong>Phone:</strong> {data.phone}
            </li>
            <li>
              <strong>Religion:</strong> {data.religion}
            </li>
            <li>
              <strong>Native Language:</strong> {data.nativeLanguage}
            </li>
            <li>
              <strong>Known Languages:</strong>{" "}
              {Array.isArray(data.knownLanguage)
                ? data.knownLanguage.join(", ")
                : data.knownLanguage}
            </li>
            <li>
              <strong>Guardian Name:</strong> {data.guardianName}
            </li>
            <li>
              <strong>Relationship:</strong> {data.relationship}
            </li>
            <li>
              <strong>Faculty:</strong> {data.faculty}
            </li>
            <li>
              <strong>Course:</strong> {data.course}
            </li>
            <li>
              <strong>Availability:</strong> {data.availability}
            </li>
            <li>
              <strong>Timing:</strong> {data.timing}
            </li>
            <li>
              <strong>Country:</strong> {data.country}
            </li>
            <li>
              <strong>Scholarship Type:</strong>{" "}
              {data.scholarshipType
                ? scholarshipTypeLabels[data.scholarshipType] ||
                  data.scholarshipType
                : "-"}
            </li>
            <li>
              <strong>Scholarship Reason:</strong>{" "}
              {data.scholarshipReason || "-"}
            </li>
            <li>
              <strong>Created At:</strong>{" "}
              {new Date(data.createdAt).toLocaleString()}
            </li>
            <li>
              <strong>Updated At:</strong>{" "}
              {new Date(data.updatedAt).toLocaleString()}
            </li>
          </DetailList>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default RegistrationDetails;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 12px;
    font-size: 1rem;
  }
`;
