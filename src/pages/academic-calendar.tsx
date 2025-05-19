import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/acadmic-calendar-bg-img.jpeg";

export const AcademicCalendarPage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Academic Calendar</Title>
          <Content>
            <CourseDiscription>
              <p>
                At Al-Huzaifi Academy, our academic calendar is designed to
                provide flexibility and accessibility to students worldwide. Our
                courses are structured to accommodate different learning
                schedules, with some courses available throughout the year and
                others offered during specific semesters. Below is our detailed
                academic calendar outlining key dates and important information
                for all students.
              </p>
              <h5>Year-Round Courses</h5>
              <br />
              <h5>Courses Available:</h5>

              <p>QRN01 - Noorani Qa'edah Course</p>
              <p>QRN02 - Quran Recitation Course</p>
              <p>QRN03 - Quran Memorization Course</p>
              <p>QRN04 - Tajweed Course</p>
              <p>QRN06 - Quran Ijazah Program</p>
              <br />
              <p>DNY01 - Deeniyat for Kids</p>
              <p>DNY02 - Deeniyat for Men</p>
              <p>DNY03 - Deeniyat for Women</p>
              <br />
              <p>ARB01 - Foundation Arabic Course</p>
              <p>ARB02 - Arabic Speaking Course</p>
              <p>ARB03 - Quranic Arabic Course</p>
              <p>ARB05 - Arabic Grammer Course</p>
              <br />
              <p>ENG01 - Elementary English Course</p>
              <p>ENG02 - Intermediate English Course</p>
              <p>ENG03 - Advanced English Course</p>
              <br />
              <p>URD01 - Elementary Urdu Course</p>
              <p>URD02 - Intermediate Urdu Course</p>
              <p>URD03 - Advanced Urdu Course</p>
              <br />
              <p>SRT01 - Islamic Worships (Ibadaat) Course</p>
              <p>SRT02 - Zakat Course</p>
              <p>SRT03 - Ramadan Special Course</p>
              <p>SRT04 - Hajj & Umrah Course</p>
              <p>SRT05 - Life of Prophet (Seerat) Course</p>
              <p>SRT06 - Inheritance (Meerath) Course</p>
              <p>SRT07 - Imamat Course</p>

              <h5>Open Enrollment Period: </h5>
              <p>
                Enrollment for these courses is open throughout the year.
                Students can start at any time, allowing maximum flexibility to
                accommodate their schedules.
              </p>
              <h5>Key Dates for Year-Round Courses: </h5>
              <p>
                <strong>Course Start Date: </strong>Courses begin immediately
                upon enrollment and completion of the registration process.
              </p>
              <p>
                <strong>Registration Deadline: </strong>No specific deadlines;
                enroll anytime.
              </p>
              <p>
                <strong>Fee Payment: </strong>Fees must be paid in full or as
                per the agreed installment plan before starting the course.
              </p>
              <p>
                <strong>Progress Assessments: </strong>Conducted quarterly to
                ensure student progress.
              </p>
              <p>
                <strong>Course Completion: </strong>Students can complete the
                course at their own pace within the maximum allowable time frame
                set for each program.
              </p>
              <h5>Semester-Based Courses (Fall and Spring Enrollment)</h5>
              <br />
              <h5>Courses Available:</h5>
              <p>QRN06 - Seven Qira'ats Course</p>
              <p>QRN07 - Quran Translation Course</p>
              <p>QRN08 - Tafseer Course</p>
              <br />
              <p>ALM01 - Alimiyat Course (Dars-e-Nizami)</p>
              <p>ALM02 - Alimiyat Course (Modern)</p>
              <br />
              <p>FZL01 - Fazilat in Quranic Science</p>
              <p>FZL02 - Fazilat in Hadith Science</p>
              <p>FZL03 - Fazilat in Islamic Jurisprudence</p>
              <p>FZL04 - Fazilat in Theology</p>
              <p>FZL05 - Fazilat in Islamic Finance</p>
              <p>FZL06 - Fazilat in Arabic Language</p>
              <br />
              <p>ARB04 - Classical Arabic Course</p>
              <p>ARB06 - Arabic Rhetoric (Balaghat) Course</p>
              <p>ARB07 - Arabic Prosody and Rhyme (Arooz & Qafiyah) Course</p>
              <h5>Spring Semester</h5>
              <p>Application Opens: January 2, 2025</p>
              <p>Registration Deadline: January 31, 2025</p>
              <p>Scheduled Classes: February 3 - March 27, 2025</p>
              <p>Mid-Semester Break: March 28 - April 6, 2025</p>
              <p>Scheduled Classes: April 7 - May 30, 2025</p>
              <p>Exam Revision Break: May 31 - June 8, 2025</p>
              <p>Examinations: June 9 - 21, 2025</p>
              <p>Semester Ends: June 28, 2025</p>
              <h5>Fall Semester</h5>
              <p>Application Opens: July 1, 2025</p>
              <p>Registration Deadline: August 1, 2025</p>
              <p>Scheduled Classes: August 4 - September 26, 2025</p>
              <p>Mid-Semester Break: September 27 - October 5, 2025</p>
              <p>Scheduled Classes: October 6 - November 28, 2025</p>
              <p>Exam Revision Break: November 29 - December 7, 2025</p>
              <p>Examinations: December 8 - 19, 2025</p>
              <p>Semester Ends: December 26, 2025</p>
              <br />
              <h5>Key Semester Policies:</h5>
              <p>
                <strong>Late Registration: </strong>A late fee may apply for
                registrations completed after the deadline.
              </p>
              <p>
                <strong>Examination Dates: </strong>All students must adhere to
                the exam schedule. Requests for rescheduling exams will only be
                considered under exceptional circumstances.
              </p>
              <h5>Ramadan Adjustments:</h5>
              <p>
                During Ramadan, class timings may be adjusted to accommodate
                fasting schedules. Specific changes will be communicated closer
                to the date.
              </p>
              <h5>Additional Information:</h5>
              <p>
                <strong>Course Materials and Resources: </strong>Available
                online once the course begins.
              </p>
              <p>
                <strong>Student Support: </strong>Our support team is available
                year-round to assist with any academic or administrative
                queries.
              </p>
              <p>
                <strong>Continuing Education: </strong> Students completing
                courses successfully may enroll in advanced classes or other
                programs.
              </p>
              <p>
                For questions regarding enrollment, course schedules, or
                academic policies, please contact our admissions office at
                [contact information].
              </p>
            </CourseDiscription>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.themeColor};
  padding: 16px 0px;
  font-size: 20px;

  ${mq("sm")} {
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.themeColor};
    padding: 24px 0px;
    font-size: 24px;
  }

  ${mq("md")} {
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.themeColor};
    padding: 30px 0px;
    font-size: 36px;
  }
`;

const Content = styled.div`
  padding: 7px 0px;
  display: flex;
  flex-direction: column-reverse;
  gap: 25px;

  ${mq("md")} {
    display: flex;
    flex-direction: row;
    gap: 45px;
    justify-content: space-between;
  }
`;

const CourseDiscription = styled.div`
  h5 {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
  }
  p {
    padding: 7px 0px;
    font-size: 16px;
    letter-spacing: 1px;
  }

  li {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 26px;
  }

  ${mq("sm")} {
    margin: 12px 0px;

    h5 {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
    p {
      padding: 9px 0px;
      font-size: 18px;
      letter-spacing: 1px;
    }

    li {
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 30px;
    }
  }


  ${mq("md")}{
  

    h5 {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
    p {
      padding: 9px 0px;
      font-size: 18px;
      letter-spacing: 1px;
    }

    li {
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 30px;
    }
  }
  }
`;
