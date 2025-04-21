import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/about-us-bg-img.jpeg";

export const WhyChooseUsPage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>About Us</Title>
          <Discription>
            <p>
              Welcome to <strong>"Al-Huzaifi Academy"</strong>, an Online
              Islamic Educational hub, where knowledge and faith converge in a
              seamless learning experience. This academy is a pioneering
              institution, dedicated to offer a comprehensive curriculum that
              integrates Islamic teachings with academic subjects, providing
              students with a well-rounded education.
            </p>
            <p>
              <strong>Al-Huzaifi Academy</strong> outshined with a passion to
              provide accessible, authentic Islamic education in the digital
              age. Our founders recognized the need to bridge traditional
              teachings with contemporary learning methods, ensuring our
              students to receive a holistic educational experience that
              resonates with their spiritual and intellectual growth.
            </p>
            <p>
              <strong>Al-Huzaifi Academy</strong> has grown into a renowned
              institution known for its academic rigor and commitment to
              excellence. <br />
              With students from across the globe, our academy proudly serves a
              diverse community united by a shared dedication to Islamic
              learning.
            </p>
            <p>
              At <strong>Al-Huzaifi Academy</strong>, we uphold the values of
              integrity, compassion, and academic rigor in everything we do. Our
              commitment to excellence extends beyond academics to encompass
              personal development, community service, and fostering a culture
              of respect and understanding among our students and staff.
            </p>
            <Title>Our Mission and Vision</Title>
            <h5>Mission:</h5>
            <p>
              At <strong>Al-Huzaifi Academy</strong>, our mission is to empower
              individuals worldwide through transformative Islamic education. We
              strive to be a global leader in online learning, offering
              comprehensive courses that blend traditional Islamic teachings
              with modern educational tools. Our commitment is to offer a
              diverse range of courses tailored to meet the need of students
              from all backgrounds and enrich their level of understanding. We
              strive to make learning engaging, interactive and convenient
              through innovative technology and expert instructors.
            </p>
            <h5>Vision:</h5>
            <p>
              Our vision at <strong>Al-Huzaifi Academy</strong> is to be the
              foremost institution for Islamic education globally, recognized
              for excellence, innovation, and impact. We envision a future where
              every individual, regardless of background or location, has access
              to authentic Islamic knowledge that enriches their lives and
              strengthens their faith. Through cutting-edge technology and a
              commitment to scholarly rigor, we aspire to educate and empower a
              new generation, who embody the teachings of Islam with wisdom,
              compassion, and integrity. Together, we strive to build a more
              connected, enlightened, and harmonious global community.
            </p>
            <Title>Why choose us?</Title>
            <h5>1. Authentic Islamic Education with Global Reach:</h5>
            <p>
              At <strong>Al-Huzaifi Academy</strong>, we are dedicated to
              delivering an authentic and comprehensive Islamic education. Our
              curriculum is meticulously crafted to provide accurate teachings
              on the Quran, Hadith, Fiqh, and other essential Islamic sciences.
              We uphold the values and principles of Islam, ensuring that our
              students receive knowledge that is both trustworthy and grounded
              in traditional Islamic scholarship.
            </p>
            <h5>2. Flexible Online Learning, Anytime, Anywhere:</h5>
            <p>
              Understanding the demands of modern life, we offer flexible online
              classes that allow students to study from the comfort of their own
              homes, at times that suit their schedules. Whether you're a
              working professional, a busy parent, or a student with other
              commitments, our platform is designed to fit your lifestyle,
              providing access to high-quality education without compromising on
              convenience.
            </p>
            <h5>3. Instructors from Across the Globe:</h5>
            <p>
              Our diverse team of instructors includes scholars and educators
              from various Arab countries, the USA, and Europe, bringing a
              wealth of perspectives and expertise to enrich your learning
              experience. Each instructor is carefully selected for their
              qualifications, knowledge, and dedication, ensuring that you
              receive a well-rounded education from respected figures in the
              field of Islamic studies.
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
              <strong>Al-Huzaifi Academy</strong> offers a carefully designed
              curriculum that caters to students at all stages, from beginners
              to advanced learners. Our courses cover a wide range of topics,
              including Quranic studies, Hadith, Islamic jurisprudence (Fiqh),
              and more, ensuring that every student can find a course that
              matches their level and interests.
            </p>
            <h5>7. Affordable Tuition and Inclusive Community:</h5>
            <p>
              We believe that financial limitations should never be a barrier to
              learning. That's why we offer affordable tuition fees without
              compromising on the quality of education. Additionally, our
              academy fosters an inclusive and respectful community where
              students feel valued and supported, building meaningful
              connections within a warm, welcoming atmosphere.
            </p>
          </Discription>
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
