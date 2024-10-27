import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const WhyChooseUsPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Why choose us?</Title>

        <Discription>
          <h5>1. Authentic Islamic Education with Global Reach:</h5>
          <p>
            At Al-Huzaifi Academy, we are dedicated to delivering an authentic
            and comprehensive Islamic education. Our curriculum is meticulously
            crafted to provide accurate teachings on the Quran, Hadith, Fiqh,
            and other essential Islamic sciences. We uphold the values and
            principles of Islam, ensuring that our students receive knowledge
            that is both trustworthy and grounded in traditional Islamic
            scholarship.
          </p>
          <h5>2.Flexible Online Learning, Anytime, Anywhere:</h5>
          <p>
            Understanding the demands of modern life, we offer flexible online
            classes that allow students to study from the comfort of their own
            homes, at times that suit their schedules. Whether you're a working
            professional, a busy parent, or a student with other commitments,
            our platform is designed to fit your lifestyle, providing access to
            high-quality education without compromising on convenience.
          </p>
          <h5>3. Instructors from Across the Globe:</h5>
          <p>
            Our diverse team of instructors includes scholars and educators from
            various Arab countries, the USA, and Europe, bringing a wealth of
            perspectives and expertise to enrich your learning experience. Each
            instructor is carefully selected for their qualifications,
            knowledge, and dedication, ensuring that you receive a well-rounded
            education from respected figures in the field of Islamic studies.
          </p>
          <h5>4. Dedicated Female Teachers for Female Students:</h5>
          <p>
            We understand the importance of creating a comfortable and
            supportive environment for all learners. Al-Huzaifi Academy offers
            female teachers for female students, allowing them to learn in an
            environment where they feel safe, respected, and understood.
          </p>
          <h5>5. Scholarship Opportunities to Make Learning Accessible:</h5>
          <p>
            Committed to supporting students in their educational journey, we
            offer scholarships for eligible students. Our goal is to remove
            financial barriers to learning, allowing anyone with the desire to
            study Islam to have access to quality education.
          </p>
          <h5>6. Comprehensive Curriculum for All Levels:</h5>
          <p>
            Al-Huzaifi Academy offers a carefully designed curriculum that
            caters to students at all stages, from beginners to advanced
            learners. Our courses cover a wide range of topics, including
            Quranic studies, Hadith, Islamic jurisprudence (Fiqh), and more,
            ensuring that every student can find a course that matches their
            level and interests.
          </p>
          <h5>7. Affordable Tuition and Inclusive Community:</h5>
          <p>
            We believe that financial limitations should never be a barrier to
            learning. That's why we offer affordable tuition fees without
            compromising on the quality of education. Additionally, our academy
            fosters an inclusive and respectful community where students feel
            valued and supported, building meaningful connections within a warm,
            welcoming atmosphere.
          </p>
        </Discription>
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

const Discription = styled.div`
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
