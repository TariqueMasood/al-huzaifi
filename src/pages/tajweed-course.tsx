import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const TajweedCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Tajweed Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Tajweed course is meticulously designed to provide students
              with an in-depth understanding of the rules and principles that
              govern the proper recitation of the Quran. Tajweed, which means
              "to improve" or "to make better," refers to the set of rules that
              ensures the accurate pronunciation and melodious recitation of the
              Quranic text.
            </p>
            <h5>Course Content:</h5>
            <p>
              The Tajweed course covers a comprehensive curriculum that
              systematically introduces and reinforces the essential aspects of
              Tajweed.The key topics include:
            </p>
            <ol>
              <li>
                <strong>Introduction to Tajweed: </strong>
                Understanding the importance and history of Tajweed in
                preserving the Quranic recitation.
              </li>
              <li>
                <strong>Makharij (Articulation Points): </strong>Identifying and
                practicing the points of articulation for each letter.
              </li>
              <li>
                <strong>Sifat (Characteristics of Letters): </strong>Exploring
                the intrinsic and relative characteristics of Arabic letters.
              </li>
              <li>
                <strong>Noon Saakin and Tanween: </strong>Rules for the
                pronunciation of Noon Saakin and Tanween in various contexts.
              </li>
              <li>
                <strong>Meem Saakin: </strong>Guidelines for the pronunciation
                of Meem Saakin, including Ikhfaa Shafawee, Idghaam Shafawee, and
                Izhaar Shafawee.
              </li>
              <li>
                <strong>Qalqalah: </strong>Understanding and applying the
                Qalqalah rules for specific letters.
              </li>
              <li>
                <strong>Madd (Prolongation): </strong>Rules for elongation of
                sounds in different scenarios, including Madd Tabee'ee, Madd
                Munfasil, Madd Mutasil, and Madd Lazim.
              </li>
              <li>
                <strong>Lahn (Errors in Recitation): </strong>Identifying and
                correcting common mistakes in Quranic recitation.
              </li>
              <li>
                <strong>Practical Application: </strong>Regular practice
                sessions to apply the rules of Tajweed in recitation, with
                feedback from experienced instructors.
              </li>
            </ol>
            <h5>Learning Outcomes: </h5>
            <p>
              Upon successful completion of the Tajweed course, students will
              achieve the following learning outcomes:
            </p>
            <ol>
              <li>
                <strong>Proficient Pronunciation: </strong>Students will be able
                to pronounce Arabic letters correctly, with a clear
                understanding of their articulation points and characteristics.
              </li>
              <li>
                <strong>Application of Tajweed Rules: </strong>Students will
                demonstrate the ability to apply Tajweed rules accurately in
                their recitation, ensuring correct pronunciation and elongation
                of sounds.
              </li>
              <li>
                <strong>Enhanced Recitation Skills: </strong>Students will
                develop a melodious and aesthetically pleasing recitation style,
                reflecting the beauty of the Quran.
              </li>
              <li>
                <strong>Error-Free Recitation: </strong>Students will be capable
                of identifying and correcting common errors in Quranic
                recitation, thereby ensuring precision and clarity.
              </li>
              <li>
                <strong>Deepened Spiritual Connection: </strong>Students will
                experience an enhanced spiritual connection to the Quran,
                facilitated by the beauty and correctness of their recitation.
              </li>
              <li>
                <strong>Confidence in Recitation: </strong>Students will gain
                confidence in their ability to recite the Quran publicly and
                privately, adhering to the principles of Tajweed.
              </li>
            </ol>
            <h5>Who Should Enroll: </h5>
            <p>
              The Tajweed course is suitable for a diverse range of learners who
              are committed to improving their Quranic recitation. This
              includes:
            </p>
            <ol>
              <li>
                <strong>Intermediate Learners: </strong>Individuals who can read
                Arabic and have a basic understanding of Quranic recitation but
                seek to enhance their proficiency and apply Tajweed rules.
              </li>
              <li>
                <strong>Hifz Students: </strong>Those who are memorizing the
                Quran and wish to ensure their recitation adheres to the highest
                standards of accuracy and beauty.
              </li>
              <li>
                <strong>Quran Teachers: </strong>Educators who teach Quranic
                recitation and desire to deepen their knowledge of Tajweed to
                provide more effective instruction to their students.
              </li>
              <li>
                <strong>Imams and Qaris: </strong>Religious leaders and reciters
                who aim to perfect their recitation skills for leading prayers
                and public recitations.
              </li>
              <li>
                <strong>Enthusiastic Learners: </strong>Anyone with a passion
                for the Quran and a desire to recite it in the most beautiful
                and correct manner possible.
              </li>
            </ol>
            <p>
              By enrolling in the Tajweed course, students embark on a
              transformative journey that not only improves their recitation
              skills but also deepens their connection to the sacred text of the
              Quran, enhancing their spiritual experience and devotion.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Tajweed Course</span>
            </h5>
            <h5>
              course code: <span>QRN04</span>
            </h5>
            <h5>
              Learning Mode: <span>Online</span>
            </h5>
            <h5>
              Language: <span>English, Arabic, Urdu</span>
            </h5>
            <h5>
              type: <span>Part Time</span>
            </h5>
            <h5>
              Duration: <span>1 Years</span>
            </h5>
            {/* <h5>
              Fee: <span>75 USD / Per Month</span>
            </h5> */}
            <h5>
              Entry Requirement:{" "}
              <span>Must have proficiency in Quran Recitation</span>
            </h5>
            <h5>
              Application Deadline: <span>Open</span>
            </h5>
            <ButtonContainer>
              <a href="/registration">Apply Here</a>
            </ButtonContainer>
          </CourseDetail>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

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

const SubTitle = styled.h4`
  text-align: center;
  font-style: italic;
  font-size: 18px;
  color: ${(props) => props.theme.colors.themeTextColor2};

  ${mq("sm")} {
    text-align: center;
    font-style: italic;
    text-decoration: underline;
    font-size: 20px;
    color: ${(props) => props.theme.colors.themeTextColor2};
  }

  ${mq("md")} {
    text-align: center;
    font-style: italic;
    text-decoration: underline;
    margin-bottom: 30px;
    font-size: 22px;
    color: ${(props) => props.theme.colors.themeTextColor2};
  }
`;

const Content = styled.div`
  padding: 7px 0px;
  display: flex;
  flex-direction: column-reverse;
  gap: 25px;

  ${mq("md")} {
    padding: 30px 0px;
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
    padding: 12px 0px;
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
      padding: 12px 0px;
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
  flex: 2;
    margin: 20px 0px;

    h5 {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
    p {
      padding: 12px 0px;
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

// const Divider = styled.div`
//   width: 1px;
//   height: auto;
//   background-color: black;
// `;

const CourseDetail = styled.div`
  margin: 12px 0px;

  h5:first-of-type {
    border-top: 1px solid ${(props) => props.theme.colors.themeTextColor2};
  }

  h5:last-of-type {
    border-bottom: 1px solid ${(props) => props.theme.colors.themeTextColor2};
  }

  h5:nth-of-type(2) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5:nth-of-type(4) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5:nth-of-type(6) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5:nth-of-type(8) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5 {
    color: ${(props) => props.theme.colors.themeTextColor2};
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 26px;
    padding: 0px 6px 10px;

    span {
      font-weight: normal;
      font-size: 14px;
    }
  }

  ${mq("sm")} {
    flex: 1;
    margin: 20px 0px;

    h5:first-of-type {
      border-top: none;
    }

    h5 {
      color: ${(props) => props.theme.colors.themeTextColor2};
      font-size: 18px;
      font-weight: 600;
      text-transform: capitalize;
      line-height: 28px;
      padding-bottom: 16px;

      span {
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 1px;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  a {
    display: block;
    text-align: center;
    border: 1px solid ${(props) => props.theme.colors.themeColor};
    background: transparent;
    padding: 9px 16px;
    border-radius: 6px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.themeColor};
    transition: all ease-in-out 0.5s;
    font-size: 14px;
  }

  a:hover {
    background-color: ${(props) => props.theme.colors.themeColor};
    color: #fff;
  }

  ${mq("sm")} {
    margin-top: 30px;
    a {
      display: block;
      text-align: center;
      border: 1px solid ${(props) => props.theme.colors.themeColor};
      background: transparent;
      padding: 14px 20px;
      border-radius: 6px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.themeColor};
      transition: all ease-in-out 0.5s;
      font-size: 16px;
    }

    a:hover {
      background-color: ${(props) => props.theme.colors.themeColor};
      color: #fff;
    }
  }


  ${mq("md")}{
  margin-top: 50px;
    a {
      display: block;
      text-align: center;
      border: 1px solid ${(props) => props.theme.colors.themeColor};
      background: transparent;
      padding: 20px;
      border-radius: 6px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.themeColor};
      transition: all ease-in-out 0.5s;
      font-size: 18px;
    }

    a:hover {
      background-color: ${(props) => props.theme.colors.themeColor};
      color: #fff;
    }
  }
  }
`;
