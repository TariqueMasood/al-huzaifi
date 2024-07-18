import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

const countryOptions = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const RegistrationForm: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col lg={12} md={6}>
            <FormHeading>Registeration</FormHeading>
            <FormSubTitle>Please fill the form below to register</FormSubTitle>
            <Instruction>Instructions:</Instruction>
            <OrderList>
              <li>
                Provide your primary active email and phone number for proper
                communication.
              </li>
              <li>Write the best available time for your local time zone.</li>
            </OrderList>
            <FormWrapper>
              <FormName>
                <Form.Group style={{ width: "100%" }} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                </Form.Group>

                <Form.Group style={{ width: "100%" }} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </FormName>
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender">
                  <option value="">Choose...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dateOfBirth" />
              </Form.Group>

              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" name="age" />
              </Form.Group>

              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" name="country">
                  <option value="">Choose...</option>
                  {countryOptions.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  id="phoneInput"
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </Form.Group>

              <AddressLine>
                <Form.Group style={{ width: "100%" }} controlId="address1">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    name="address1"
                    placeholder="Address Line 1"
                  />
                </Form.Group>
                <Form.Group style={{ width: "100%" }} controlId="address2">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    name="address2"
                    placeholder="Address Line 2"
                  />
                </Form.Group>
              </AddressLine>

              <CityState>
                <Form.Group style={{ width: "100%" }} controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" name="city" placeholder="City" />
                </Form.Group>

                <Form.Group style={{ width: "100%" }} controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" name="state" placeholder="State" />
                </Form.Group>
              </CityState>

              <ZipCode>
                <Form.Group style={{ width: "100%" }} controlId="zipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" name="zipCode" placeholder="Zip" />
                </Form.Group>

                <Form.Group style={{ width: "100%" }} controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select" name="country">
                    <option value="">Choose...</option>
                    {countryOptions.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </ZipCode>

              <Form.Group controlId="gender">
                <Form.Label>Course</Form.Label>
                <Form.Control as="select" name="course">
                  <option value="">Choose Course...</option>
                  <option value="male">Noorani Qaedah Course</option>
                  <option value="female">Quran Recitation Course</option>
                  <option value="other">Quran Memorization Course</option>
                  <option value="other">Tajweed Course</option>
                  <option value="other">Seven Qiraats Course</option>
                  <option value="other">Quran Ijazah Program</option>
                  <option value="other">Quran’s Translation Course</option>
                  <option value="other">Tafseer Course</option>
                  <option value="other">DEENIYAT FOR KIDS</option>
                  <option value="other">Deeniyat For Men</option>
                  <option value="other">Deeniyat For Women</option>
                  <option value="other">Alimiyat (Dars-e-nizami)</option>
                  <option value="other">Alimiyat (Modern Curriculum)</option>
                  <option value="other">Fazilat In Quranic Science</option>
                  <option value="other">Fazlital In Hadith Science</option>
                  <option value="other">
                    Fazilat In Islamic Jurisprudence
                  </option>
                  <option value="other">Fazilat In Theology</option>
                  <option value="other">Fazilat In Islamic Finance</option>
                  <option value="other">Fazilat In Arabic Language</option>
                  <option value="other">Foundation Arabic Course</option>
                  <option value="other">Arabic Speaking Course</option>
                  <option value="other">Quranic Arabic Course</option>
                  <option value="other">Classical Arabic Course</option>
                  <option value="other">Nah & Sarf Course</option>
                  <option value="other">Balaghat Course</option>
                  <option value="other">Arooz & Quafiyah Course</option>
                  <option value="other">Ibaadat Course</option>
                  <option value="other">Zakat Course</option>
                  <option value="other">Ramazan Special Course</option>
                  <option value="other">Hajj & Umrah Course</option>
                  <option value="other">Seerat Course</option>
                  <option value="other">Meeras Course</option>
                  <option value="other">Imamat Course</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
              <RadioBtn>
                <p>Preferred Language:</p>
                <input
                  type="radio"
                  id="english"
                  name="language"
                  value="English"
                ></input>
                <label htmlFor="english">English</label>
                <br />
                <input
                  type="radio"
                  id="urdu"
                  name="language"
                  value="EnUrduglish"
                ></input>
                <label htmlFor="urdu">Urdu</label>
                <br />
                <input
                  type="radio"
                  id="arabic"
                  name="language"
                  value="EnUrduglish"
                ></input>
                <label htmlFor="arabic">Arabic</label>
              </RadioBtn>

              <TextAreaContainer>
                <p>Previous Islamic Education</p>
                <textarea placeholder="Briefly describe your islamic education background..."></textarea>
                <p>Islamic Institutes Attended</p>
                <textarea placeholder="Briefly describe your islamic education background..."></textarea>
              </TextAreaContainer>

              <Availability>
                <p>Your availability</p>
                <input type="checkbox" id="weekDayM" name="weekDayM" />
                <label htmlFor="weekDayM">Monday</label>
                <br />
                <input type="checkbox" id="weekDayN" name="weekDayN" />
                <label htmlFor="weekDayN">Tuesday</label>
                <br />
                <input type="checkbox" id="weekDayE" name="weekDayE" />
                <label htmlFor="weekDayE">Wednesday</label>
                <br />
                <input type="checkbox" id="weekEndM" name="weekEndM" />
                <label htmlFor="weekEndM">Thursday</label>
                <br />
                <input type="checkbox" id="weekEndN" name="weekEndN" />
                <label htmlFor="weekEndN">Friday</label>
                <br />
                <input type="checkbox" id="weekEndE" name="weekEndE" />
                <label htmlFor="weekEndE">Saturday</label>
                <br />
                <input type="checkbox" id="weekEnd" name="weekEnd" />
                <label htmlFor="weekEnd">Sunday</label>
              </Availability>
              <Acknowledgment>
                <p>Acknowledgment & Declaration</p>
                <input type="checkbox" id="declaration" name="declaration" />
                <label htmlFor="declaration">
                  I hereby declare, and confirm that I will abide by the
                  policies of the Shah Maseehullah Academy.
                </label>
              </Acknowledgment>
              <Security>
                <p>Background & Security Check</p>
                <input
                  type="checkbox"
                  id="illegalActivities"
                  name="illegalActivities"
                />
                <label htmlFor="illegalActivities">
                  1. I declare that I am not engaged in any illegal activities,
                  espionage, sabotage, or any kind of controlled violations.
                </label>
                <br />
                <input type="checkbox" id="violence" name="violence" />
                <label htmlFor="violence">
                  2. Al-Huzaifi denounces terrorism and it does not teach any
                  form of terrorism or violence in any of its courses, If I am
                  found promoting any form of terrorism, I will be terminated
                  indefinitely.
                </label>
                <br />
                <input type="checkbox" id="support" name="support" />
                <label htmlFor="support">
                  3. I do not intend to provide any kind of assistance to
                  terrorists or support any terrorist organizations.
                </label>
                <br />
                <input type="checkbox" id="member" name="member" />
                <label htmlFor="member">
                  4. I am not a member or representative of any terrorist
                  organization.
                </label>
                <br />
                <input type="checkbox" id="activities" name="activities" />
                <label htmlFor="activities">
                  5. I agree to not share any course related activities, such
                  as, live class streaming, class recordings, and anything else
                  that I might be asked to add to this list.
                </label>
                <br />
                <input type="checkbox" id="rule" name="rule" />
                <label htmlFor="rule">
                  6. If I am found guilty of violating any of Al-Huzaifi rules,
                  regulations, instructions, written or verbally communicated
                  policies, I shall be terminated of my enrollment indefinitely
                  or for a specific period of time as deemed appropriate by the
                  administration.
                </label>
                <br />
                <label htmlFor="disclaimer"></label>
                <br />
                <input
                  type="checkbox"
                  id="disclaimer"
                  name="actidisclaimervities"
                />
                <label htmlFor="disclaimer">
                  Upon submitting my application, I acknowledge that I have read
                  and understood the above terms and obligations.
                </label>
              </Security>
              <Submit type="submit">Register</Submit>
            </FormWrapper>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default RegistrationForm;

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
  label {
    margin-top: 18px;
  }
`;

const FormName = styled.div`
  ${mq("md")} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;

const AddressLine = styled.div`
  ${mq("md")} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;

const CityState = styled.div`
  ${mq("md")} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;

const ZipCode = styled.div`
  ${mq("md")} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;

const RadioBtn = styled.div`
  p {
    margin-top: 24px;
    font-weight: 500;
  }

  label {
    margin-top: 9px;
    margin-left: 7px;
  }
`;

const TextAreaContainer = styled.div`
  textarea {
    max-width: 450px;
    width: 100%;
    height: 90px;
    padding-left: 7px;
  }

  p {
    margin: 16px 0px;
    font-weight: 500;
  }
`;

const Availability = styled.div`
  p {
    margin-top: 16px;
  }

  label {
    margin-top: 12px;
  }

  input {
    margin-right: 7px;
  }
`;

const Acknowledgment = styled.div`
  margin: 24px 0px;

  p {
    margin-bottom: 7px;
  }

  input {
    margin-right: 7px;
  }

  label {
    display: inline;
  }
`;

const Security = styled.div`
  input {
    margin-top: 12px;
    margin-right: 7px;
  }

  label {
    margin-top: 12px;
    display: inline;
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
