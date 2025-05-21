import React, { useState } from "react";
import { Container, Form, Row, Col, Table } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import CountryList from "./country-list";
import {
  facultyOptions,
  genderOptions,
  languageOptions,
  timingOptions,
} from "../constants/registration";
import { validationSchema } from "../utils/registration-schema";
import * as Yup from "yup";
import Select from "react-select";

const RegistrationForm = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<
    keyof typeof facultyOptions | ""
  >("");
  const [courses, setCourses] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    religion: "",
    nativeLanguage: "",
    knownLanguage: [] as string[], // Update to an array for multi-selection
    guardianName: "",
    relationship: "",
    faculty: "",
    course: "",
    availability: "",
    timing: "",
    country: "",
  });
  const [submittedData, setSubmittedData] = useState<any[]>([]);
  const [errors, setErrors] = useState<{
    [key: string]: string | { scholarshipReason?: string };
  }>({});
  const [applyForScholarship, setApplyForScholarship] = useState(false);
  const [scholarshipOptions, setScholarshipOptions] = useState({
    meritBased: false,
    siblingScholarship: false,
    specialCircumstances: false,
    scholarshipReason: "",
  });

  const handleFormValueChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, multiple, options } = e.target as HTMLSelectElement;
    if (multiple) {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormValue((prevValues) => ({
        ...prevValues,
        [name]: selectedValues,
      }));
    } else {
      setFormValue((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const faculty = e.target.value as keyof typeof facultyOptions;
    setSelectedFaculty(faculty);
    setCourses(facultyOptions[faculty] || []);
    setSelectedCourse(""); // reset course
    setFormValue((prevValues) => ({
      ...prevValues,
      faculty, // Update formValue.faculty
      course: "", // Reset formValue.course
    }));
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const course = e.target.value;
    setSelectedCourse(course);
    setFormValue((prevValues) => ({
      ...prevValues,
      course, // Update formValue.course
    }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormValue((prevValues) => ({
      ...prevValues,
      country: value, // Update formValue.country
    }));
  };

  const handleScholarshipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setScholarshipOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleScholarshipReasonChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setScholarshipOptions((prev) => ({
      ...prev,
      scholarshipReason: value,
    }));
  };

  const handleApplyForScholarshipChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setApplyForScholarship(e.target.checked);
    if (!e.target.checked) {
      setScholarshipOptions({
        meritBased: false,
        siblingScholarship: false,
        specialCircumstances: false,
        scholarshipReason: "",
      });
    }
  };

  // Update error handling logic to ensure proper parsing of scholarshipOptions errors
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValue, { abortEarly: false }); // Validate form values
      setErrors({}); // Clear errors if validation passes
      setSubmittedData((prevData) => [
        ...prevData,
        { ...formValue, scholarshipOptions },
      ]); // Include scholarship options in submitted data
      setFormValue({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        religion: "",
        nativeLanguage: "",
        knownLanguage: [] as string[], // Reset knownLanguage
        guardianName: "",
        relationship: "",
        faculty: "",
        course: "",
        availability: "",
        timing: "",
        country: "",
      }); // Reset form values
      setSelectedFaculty(""); // Reset selectedFaculty
      setSelectedCourse(""); // Reset selectedCourse
    } catch (validationErrors) {
      const formattedErrors: { [key: string]: any } = {};
      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            const pathParts = error.path.split(".");
            if (pathParts[0] === "scholarshipOptions") {
              if (!formattedErrors.scholarshipOptions) {
                formattedErrors.scholarshipOptions = {};
              }
              formattedErrors.scholarshipOptions[pathParts[1]] = error.message;
            } else {
              formattedErrors[error.path] = error.message;
            }
          }
        });
      }
      setErrors(formattedErrors); // Set validation errors
    }
  };

  const languageOptionsDropdown = languageOptions.map((language) => ({
    value: language,
    label: language,
  }));

  const handleKnownLanguageChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setFormValue((prevValues) => ({
      ...prevValues,
      knownLanguage: selectedValues,
    }));
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={12} md={6}>
            <FormHeading>Registration</FormHeading>
            <FormSubTitle>Please fill the form below to register</FormSubTitle>
            <Instruction>Instructions:</Instruction>
            <OrderList>
              <li>
                Provide your primary active email and phone number for proper
                communication.
              </li>
              <li>Write the best available time for your local time zone.</li>
            </OrderList>
            <FormWrapper onSubmit={handleSubmit}>
              <FlexRow>
                <StyledFormGroup controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <StyledFormControl
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formValue.firstName}
                    onChange={handleFormValueChange}
                  />
                  {typeof errors.firstName === "string" && (
                    <ErrorText>{errors.firstName}</ErrorText>
                  )}
                </StyledFormGroup>

                <StyledFormGroup controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <StyledFormControl
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formValue.lastName}
                    onChange={handleFormValueChange}
                  />
                  {typeof errors.lastName === "string" && (
                    <ErrorText>{errors.lastName}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>
              <FlexRow>
                <StyledFormGroup controlId="age">
                  <Form.Label>Age</Form.Label>
                  <StyledFormControl
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formValue.age}
                    onChange={handleFormValueChange}
                  />
                  {typeof errors.age === "string" && (
                    <ErrorText>{errors.age}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <StyledSelect
                    name="gender"
                    value={formValue.gender} // Bind the value to formValue.gender
                    onChange={handleSelectChange} // Use the new handler for <select>
                  >
                    <option value="">Choose...</option>
                    {genderOptions.map((gender) => (
                      <option value={gender} key={gender}>
                        {gender}
                      </option>
                    ))}
                  </StyledSelect>
                  {typeof errors.gender === "string" && (
                    <ErrorText>{errors.gender}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>
              <FlexRow>
                <StyledFormGroup controlId="country">
                  <CountryList
                    name="country"
                    value={formValue.country || ""}
                    onChange={handleCountryChange}
                  />
                  {typeof errors.country === "string" && (
                    <ErrorText>{errors.country}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="email">
                  <Form.Label>Email</Form.Label>
                  <StyledFormControl
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formValue.email}
                    onChange={handleFormValueChange}
                  />
                  {typeof errors.email === "string" && (
                    <ErrorText>{errors.email}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>

              <StyledFormGroup controlId="phone">
                <Form.Label>WhatsApp Number</Form.Label>
                <StyledFormControl
                  id="phoneInput"
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formValue.phone}
                  onChange={handleFormValueChange}
                />
                {typeof errors.phone === "string" && (
                  <ErrorText>{errors.phone}</ErrorText>
                )}
              </StyledFormGroup>

              <FlexRow>
                <StyledFormGroup controlId="gender">
                  <Form.Label>Religion</Form.Label>
                  <StyledSelect
                    name="religion"
                    value={formValue.religion}
                    onChange={handleFormValueChange}
                  >
                    <option value="">Choose Religion...</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Non-Muslim">Non-Muslim</option>
                  </StyledSelect>
                  {typeof errors.religion === "string" && (
                    <ErrorText>{errors.religion}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="gender">
                  <Form.Label>Native Language</Form.Label>
                  <StyledSelect
                    name="nativeLanguage"
                    value={formValue.nativeLanguage}
                    onChange={handleFormValueChange}
                  >
                    <option value="">Native Language...</option>
                    {languageOptions.map((language) => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </StyledSelect>
                  {typeof errors.nativeLanguage === "string" && (
                    <ErrorText>{errors.nativeLanguage}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="gender">
                  <Form.Label>Known Languages</Form.Label>
                  <Select
                    isMulti
                    name="knownLanguage"
                    options={languageOptionsDropdown}
                    value={languageOptionsDropdown.filter((option) =>
                      formValue.knownLanguage.includes(option.value)
                    )} // Bind selected values
                    onChange={handleKnownLanguageChange} // Handle changes
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  {typeof errors.knownLanguage === "string" && (
                    <ErrorText>{errors.knownLanguage}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>

              <FlexRow>
                <StyledFormGroup controlId="address1">
                  <Form.Label>Guardian Name</Form.Label>
                  <StyledFormControl
                    type="text"
                    name="guardianName"
                    placeholder="Guardian Name..."
                    value={formValue.guardianName}
                    onChange={handleFormValueChange}
                  />
                  {typeof errors.guardianName === "string" && (
                    <ErrorText>{errors.guardianName}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="address2">
                  <Form.Label>Relationship with Student</Form.Label>
                  <StyledFormControl
                    type="text"
                    name="relationship"
                    placeholder="Relationship..."
                    value={formValue.relationship}
                    onChange={handleFormValueChange}
                  />
                  {typeof errors.relationship === "string" && (
                    <ErrorText>{errors.relationship}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>

              <FlexRow>
                <StyledFormGroup controlId="facultySelect">
                  <Form.Label>Choose Faculty</Form.Label>
                  <StyledSelect
                    name="faculty"
                    value={formValue.faculty}
                    onChange={handleFacultyChange}
                  >
                    <option value="">-- Select Faculty --</option>
                    {Object.keys(facultyOptions).map((faculty) => (
                      <option key={faculty} value={faculty}>
                        {faculty}
                      </option>
                    ))}
                  </StyledSelect>
                  {typeof errors.faculty === "string" && (
                    <ErrorText>{errors.faculty}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="courseSelect">
                  <Form.Label>Select Course</Form.Label>
                  <StyledSelect
                    name="course"
                    value={formValue.course}
                    onChange={handleCourseChange}
                  >
                    <option value="">-- Select Course --</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </StyledSelect>
                  {typeof errors.course === "string" && (
                    <ErrorText>{errors.course}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>
              <FlexRow>
                <StyledFormGroup controlId="gender">
                  <Form.Label>Availability</Form.Label>
                  <StyledSelect
                    name="availability"
                    value={formValue.availability}
                    onChange={handleFormValueChange}
                  >
                    <option value="">Days...</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekend">Weekend</option>
                  </StyledSelect>
                  {typeof errors.availability === "string" && (
                    <ErrorText>{errors.availability}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="timingSelect">
                  <Form.Label>Timing</Form.Label>
                  <StyledSelect
                    name="timing"
                    value={formValue.timing}
                    onChange={handleFormValueChange}
                  >
                    <option value="">Select Timing...</option>
                    {timingOptions.map((timing) => (
                      <option key={timing} value={timing}>
                        {timing}
                      </option>
                    ))}
                  </StyledSelect>
                  {typeof errors.timing === "string" && (
                    <ErrorText>{errors.timing}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>
              <StyledFormGroup controlId="applyForScholarship">
                <Form.Check
                  type="checkbox"
                  label="Do you want to apply for a scholarship?"
                  checked={applyForScholarship}
                  onChange={handleApplyForScholarshipChange}
                />
              </StyledFormGroup>
              {applyForScholarship && (
                <>
                  <FlexRow>
                    <Form.Check
                      type="radio"
                      label="Merit-Based"
                      name="scholarshipType"
                      id="meritBased"
                      checked={scholarshipOptions.meritBased}
                      onChange={() =>
                        setScholarshipOptions((prev) => ({
                          ...prev,
                          meritBased: true,
                          siblingScholarship: false,
                          specialCircumstances: false,
                        }))
                      }
                      inline
                    />
                    <Form.Check
                      type="radio"
                      label="Sibling Scholarship"
                      name="scholarshipType"
                      id="siblingScholarship"
                      checked={scholarshipOptions.siblingScholarship}
                      onChange={() =>
                        setScholarshipOptions((prev) => ({
                          ...prev,
                          meritBased: false,
                          siblingScholarship: true,
                          specialCircumstances: false,
                        }))
                      }
                      inline
                    />
                    <Form.Check
                      type="radio"
                      label="Special Circumstances"
                      name="scholarshipType"
                      id="specialCircumstances"
                      checked={scholarshipOptions.specialCircumstances}
                      onChange={() =>
                        setScholarshipOptions((prev) => ({
                          ...prev,
                          meritBased: false,
                          siblingScholarship: false,
                          specialCircumstances: true,
                        }))
                      }
                      inline
                    />
                  </FlexRow>
                  {typeof errors.scholarshipOptions === "string" && (
                    <ErrorText>{errors.scholarshipOptions}</ErrorText>
                  )}
                  <StyledFormGroup controlId="scholarshipReason">
                    <Form.Label>
                      In your words, explain why you deserve this scholarship?
                    </Form.Label>
                    <StyledFormControl
                      as="textarea"
                      rows={3}
                      name="scholarshipReason"
                      value={scholarshipOptions.scholarshipReason}
                      onChange={handleScholarshipReasonChange}
                    />
                    {typeof errors.scholarshipOptions === "object" &&
                      errors.scholarshipOptions.scholarshipReason && (
                        <ErrorText>
                          {errors.scholarshipOptions.scholarshipReason}
                        </ErrorText>
                      )}
                  </StyledFormGroup>
                </>
              )}
              <Submit type="submit">Register</Submit>
            </FormWrapper>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Religion</th>
                  <th>Native Language</th>
                  <th>Known Languages</th>
                  <th>Guardian Name</th>
                  <th>Relationship</th>
                  <th>Faculty</th>
                  <th>Course</th>
                  <th>Availability</th>
                  <th>Timing</th>
                  <th>Country</th>
                  <th>Scholarship Options</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.religion}</td>
                    <td>{data.nativeLanguage}</td>
                    <td>{data.knownLanguage.join(", ")}</td>{" "}
                    <td>{data.guardianName}</td>
                    <td>{data.relationship}</td>
                    <td>{data.faculty}</td>
                    <td>{data.course}</td>
                    <td>{data.availability}</td>
                    <td>{data.timing}</td>
                    <td>{data.country}</td>
                    <td>
                      {data.scholarshipOptions?.meritBased && "Merit-Based "}
                      {data.scholarshipOptions?.siblingScholarship &&
                        "Sibling Scholarship "}
                      {data.scholarshipOptions?.specialCircumstances &&
                        "Special Circumstances "}
                      {data.scholarshipOptions?.scholarshipReason && (
                        <div>
                          <strong>Reason:</strong>{" "}
                          {data.scholarshipOptions.scholarshipReason}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default RegistrationForm;

const Wrapper = styled.div`
  background-color: #e3e3e3;
  padding: 30px 0px;
};

  ${mq("md")} {
    padding: 60px 0px;
  }
`;

const FormHeading = styled.h3`
  font-weight: 600;
  ${mq("md")} {
    padding: 30px 0px;
  }
`;

const FormSubTitle = styled.p`
  font-weight: 600;
  padding: 20px 0px;
`;

const Instruction = styled.p`
  padding-bottom: 30px;
`;

const OrderList = styled.ol`
  margin-bottom: 30px;
`;

const FormWrapper = styled(Form)`
  max-width: 800px;
  width: 100%;
`;

const FlexRow = styled.div`
  ${mq("md")} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const Submit = styled.button`
  padding: 6px 24px;
  margin: 24px 0px;
  border: 1px solid ${(props) => props.theme.colors.themeColor};
  color: ${(props) => props.theme.colors.themeColor};
  background-color: #ffffff;
  border-radius: 8px;
  transition: all ease-in 0.4s;

  &:hover {
    background-color: ${(props) => props.theme.colors.themeColor};
    color: #fff;
  }

  ${mq("md")} {
    padding: 9px 36px;
    margin: 24px 0px;
    border: 1px solid ${(props) => props.theme.colors.themeColor};
    color: ${(props) => props.theme.colors.themeColor};
    background-color: #ffffff;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    transition: all ease-in 0.4s;
  }
`;

const StyledFormGroup = styled(Form.Group)`
  width: 100%;
`;

const StyledFormControl = styled(Form.Control)`
  width: 100%;
`;

const StyledSelect = styled(Form.Select)`
  width: 100%;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
