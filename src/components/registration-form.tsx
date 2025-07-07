import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
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
import { RegistrationPayload } from "../@types/registration";
import { useRegistrationMutation } from "../hooks/use-queries";
import CustomToast from "./toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

// --- Types ---
type FormState = {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  email: string;
  phone: string;
  religion: string;
  nativeLanguage: string;
  knownLanguage: string[];
  guardianName: string;
  relationship: string;
  faculty: string;
  course: string;
  availability: string;
  timing: string;
  country: string;
  scholarshipType: string;
  scholarshipReason: string;
  applyForScholarship: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

// --- Initial State ---
const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  email: "",
  phone: "",
  religion: "",
  nativeLanguage: "",
  knownLanguage: [],
  guardianName: "",
  relationship: "",
  faculty: "",
  course: "",
  availability: "",
  timing: "",
  country: "",
  scholarshipType: "",
  scholarshipReason: "",
  applyForScholarship: false,
};

const RegistrationForm = () => {
  // --- State ---
  const [formValue, setFormValue] = useState<FormState>(initialFormState);
  const [courses, setCourses] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState[]>([]);

  const registrationMutation = useRegistrationMutation();

  // --- Handlers ---
  // For input and textarea (including checkbox)
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setFormValue((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  // For select elements
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  // For react-select multi-select (knownLanguage)
  const handleKnownLanguageChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setFormValue((prev) => ({ ...prev, knownLanguage: selectedValues }));
  };

  // Faculty/course logic
  const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const faculty = e.target.value as keyof typeof facultyOptions;
    setCourses(facultyOptions[faculty] || []);
    setFormValue((prev) => ({ ...prev, faculty, course: "" }));
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValue((prev) => ({ ...prev, course: e.target.value }));
  };

  // Update handleCountryChange to accept the event
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormValue((prev) => ({ ...prev, country: value }));
  };

  // --- Form Submission ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValue, { abortEarly: false });
      setErrors({});
      registrationMutation.mutate(
        {
          ...formValue,
        } as RegistrationPayload,
        {
          onSuccess: () => {
            setShowToast(false);
            setTimeout(() => {
              setToastMessage("Registration successful!");
              setShowToast(true);
            }, 0);
            setSubmittedData((prev) => [...prev, { ...formValue }]);
            setFormValue(initialFormState);
            setCourses([]);
          },
          onError: (error: any) => {
            setShowToast(false);
            setTimeout(() => {
              setToastMessage(
                error?.response?.data?.message ||
                  error?.message ||
                  "Registration failed"
              );
              setShowToast(true);
            }, 0);
          },
        }
      );
    } catch (validationErrors) {
      const formattedErrors: FormErrors = {};
      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            // Patch for age NaN error message
            if (
              error.path === "age" &&
              error.message.includes("must be a `number` type")
            ) {
              formattedErrors[error.path as keyof FormState] =
                "Please enter a valid age";
            } else {
              formattedErrors[error.path as keyof FormState] = error.message;
            }
          }
        });
      }
      setErrors(formattedErrors);
    }
  };

  // --- Toast auto-hide ---
  useEffect(() => {
    if (showToast && toastMessage) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showToast, toastMessage]);

  // --- Dropdown options ---
  const languageOptionsDropdown = languageOptions.map((language) => ({
    value: language,
    label: language,
  }));

  // --- Render ---
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
              {/* Name fields */}
              <FlexRow>
                <StyledFormGroup controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <StyledFormControl
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formValue.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
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
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
                </StyledFormGroup>
              </FlexRow>
              {/* Age & Gender */}
              <FlexRow>
                <StyledFormGroup controlId="age">
                  <Form.Label>Age</Form.Label>
                  <StyledFormControl
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formValue.age}
                    onChange={handleInputChange}
                  />
                  {errors.age && <ErrorText>{errors.age}</ErrorText>}
                </StyledFormGroup>
                <StyledFormGroup controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <StyledSelect
                    name="gender"
                    value={formValue.gender}
                    onChange={handleSelectChange}
                  >
                    <option value="">Choose...</option>
                    {genderOptions.map((gender) => (
                      <option value={gender} key={gender}>
                        {gender}
                      </option>
                    ))}
                  </StyledSelect>
                  {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
                </StyledFormGroup>
              </FlexRow>
              {/* Country & Email */}
              <FlexRow>
                <StyledFormGroup controlId="country">
                  <CountryList
                    name="country"
                    value={formValue.country || ""}
                    onChange={handleCountryChange}
                  />
                  {errors.country && <ErrorText>{errors.country}</ErrorText>}
                </StyledFormGroup>
                <StyledFormGroup controlId="email">
                  <Form.Label>Email</Form.Label>
                  <StyledFormControl
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formValue.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </StyledFormGroup>
              </FlexRow>
              {/* Phone with country code and flag */}
              <StyledFormGroup controlId="phone">
                <Form.Label>WhatsApp Number</Form.Label>
                <PhoneInput
                  country={"in"}
                  value={formValue.phone}
                  onChange={(
                    value: string,
                    countryData: any,
                    event: React.ChangeEvent<HTMLInputElement>,
                    formattedValue: string
                  ) => {
                    setFormValue((prev) => ({
                      ...prev,
                      phone: value,
                    }));
                  }}
                  inputProps={{
                    name: "phone",
                    required: true,
                    id: "phoneInput",
                    autoComplete: "off",
                  }}
                  inputStyle={{ width: "100%" }}
                  containerStyle={{ width: "100%" }}
                  specialLabel=""
                  enableSearch
                  countryCodeEditable={false}
                />
                {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
              </StyledFormGroup>
              {/* Religion, Native Language, Known Languages */}
              <FlexRow>
                <StyledFormGroup controlId="religion">
                  <Form.Label>Religion</Form.Label>
                  <StyledSelect
                    name="religion"
                    value={formValue.religion}
                    onChange={handleSelectChange}
                  >
                    <option value="">Choose Religion...</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Non-Muslim">Non-Muslim</option>
                  </StyledSelect>
                  {errors.religion && <ErrorText>{errors.religion}</ErrorText>}
                </StyledFormGroup>
                <StyledFormGroup controlId="nativeLanguage">
                  <Form.Label>Native Language</Form.Label>
                  <StyledSelect
                    name="nativeLanguage"
                    value={formValue.nativeLanguage}
                    onChange={handleSelectChange}
                  >
                    <option value="">Native Language...</option>
                    {languageOptions.map((language) => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </StyledSelect>
                  {errors.nativeLanguage && (
                    <ErrorText>{errors.nativeLanguage}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="knownLanguage">
                  <Form.Label>Known Languages</Form.Label>
                  <Select
                    isMulti
                    name="knownLanguage"
                    options={languageOptionsDropdown}
                    value={languageOptionsDropdown.filter((option) =>
                      formValue.knownLanguage.includes(option.value)
                    )}
                    onChange={handleKnownLanguageChange}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  {errors.knownLanguage && (
                    <ErrorText>{errors.knownLanguage}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>
              {/* Guardian & Relationship */}
              <FlexRow>
                <StyledFormGroup controlId="guardianName">
                  <Form.Label>Guardian Name</Form.Label>
                  <StyledFormControl
                    type="text"
                    name="guardianName"
                    placeholder="Guardian Name..."
                    value={formValue.guardianName}
                    onChange={handleInputChange}
                  />
                  {errors.guardianName && (
                    <ErrorText>{errors.guardianName}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="relationship">
                  <Form.Label>Relationship with Student</Form.Label>
                  <StyledFormControl
                    type="text"
                    name="relationship"
                    placeholder="Relationship..."
                    value={formValue.relationship}
                    onChange={handleInputChange}
                  />
                  {errors.relationship && (
                    <ErrorText>{errors.relationship}</ErrorText>
                  )}
                </StyledFormGroup>
              </FlexRow>
              {/* Faculty & Course */}
              <FlexRow>
                <StyledFormGroup controlId="faculty">
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
                  {errors.faculty && <ErrorText>{errors.faculty}</ErrorText>}
                </StyledFormGroup>
                <StyledFormGroup controlId="course">
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
                  {errors.course && <ErrorText>{errors.course}</ErrorText>}
                </StyledFormGroup>
              </FlexRow>
              {/* Availability & Timing */}
              <FlexRow>
                <StyledFormGroup controlId="availability">
                  <Form.Label>Availability</Form.Label>
                  <StyledSelect
                    name="availability"
                    value={formValue.availability}
                    onChange={handleSelectChange}
                  >
                    <option value="">Days...</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekend">Weekend</option>
                  </StyledSelect>
                  {errors.availability && (
                    <ErrorText>{errors.availability}</ErrorText>
                  )}
                </StyledFormGroup>
                <StyledFormGroup controlId="timing">
                  <Form.Label>Timing</Form.Label>
                  <StyledSelect
                    name="timing"
                    value={formValue.timing}
                    onChange={handleSelectChange}
                  >
                    <option value="">Select Timing...</option>
                    {timingOptions.map((timing) => (
                      <option key={timing} value={timing}>
                        {timing}
                      </option>
                    ))}
                  </StyledSelect>
                  {errors.timing && <ErrorText>{errors.timing}</ErrorText>}
                </StyledFormGroup>
              </FlexRow>
              {/* Scholarship Checkbox */}
              <StyledFormGroup controlId="applyForScholarship">
                <Form.Check
                  type="checkbox"
                  label="Do you want to apply for a scholarship?"
                  name="applyForScholarship"
                  checked={formValue.applyForScholarship}
                  onChange={handleInputChange}
                />
              </StyledFormGroup>
              {/* Scholarship Fields (conditional) */}
              {formValue.applyForScholarship && (
                <>
                  <FlexRow>
                    <StyledFormGroup controlId="scholarshipType">
                      <Form.Label>Scholarship Type</Form.Label>
                      <StyledSelect
                        name="scholarshipType"
                        value={formValue.scholarshipType}
                        onChange={handleSelectChange}
                      >
                        <option value="">-- Select Scholarship Type --</option>
                        <option value="meritBased">Merit-Based</option>
                        <option value="siblingScholarship">
                          Sibling Scholarship
                        </option>
                        <option value="specialCircumstances">
                          Special Circumstances
                        </option>
                      </StyledSelect>
                      {errors.scholarshipType && (
                        <ErrorText>{errors.scholarshipType}</ErrorText>
                      )}
                    </StyledFormGroup>
                  </FlexRow>
                  <FlexRow>
                    <StyledFormGroup controlId="scholarshipReason">
                      <Form.Label>
                        In your words, explain why you deserve this scholarship?
                      </Form.Label>
                      <StyledFormControl
                        as="textarea"
                        rows={3}
                        name="scholarshipReason"
                        value={formValue.scholarshipReason}
                        onChange={handleInputChange}
                      />
                      {errors.scholarshipReason && (
                        <ErrorText>{errors.scholarshipReason}</ErrorText>
                      )}
                    </StyledFormGroup>
                  </FlexRow>
                </>
              )}
              <Submit type="submit">Register</Submit>
            </FormWrapper>
            <CustomToast
              message={toastMessage}
              show={showToast}
              onClose={() => setShowToast(false)}
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default RegistrationForm;

// --- Styled Components ---
const Wrapper = styled.div`
  padding: 30px 0px;
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

// --- Scholarship Type Labels Mapping ---
export const scholarshipTypeLabels: Record<string, string> = {
  meritBased: "Merit-Based",
  siblingScholarship: "Sibling Scholarship",
  specialCircumstances: "Special Circumstances",
};
