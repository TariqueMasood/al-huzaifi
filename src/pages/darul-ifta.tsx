import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const DarulIftaPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Darul Ifta</Title>
        <SubHeading>A Center for Authentic Islamic Legal Guidance</SubHeading>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <CourseDiscription>
          <p>
            The <strong>Darul Ifta</strong> at{" "}
            <strong>Al-Huzaifi Academy</strong> serves as a beacon of Islamic
            jurisprudence, offering trusted and reliable religious verdicts
            (fatwas) to Muslims around the world. Our mission is to provide
            clear and authentic guidance on Islamic rulings, ensuring that
            individuals, families, and communities can navigate their lives in
            accordance with the teachings of Islam in a modern context. Whether
            addressing traditional queries or contemporary issues, Darul Ifta is
            committed to offering scholarly advice grounded in the Quran,
            Sunnah, and the established schools of Islamic jurisprudence.
          </p>
          <h5>Services We Offer:</h5>
          <p>
            Our <strong>Darul Ifta</strong> department caters to a wide range of
            queries and legal matters, providing Muslims with a comprehensive
            resource for Islamic guidance. We address:
          </p>
          <p>
            <strong>- Personal Worship and Rituals: </strong>Detailed guidance
            on performing religious duties such as Salah (prayer), Sawm
            (fasting), Zakat (charity), and Hajj (pilgrimage), as well as
            rulings on purification (Tahara) and other acts of worship.
          </p>
          <p>
            <strong>- Family and Social Matters: </strong>Issuing fatwas on
            family-related concerns including marriage, divorce (Talaq), child
            custody, inheritance (Mirath), and other domestic affairs in line
            with Islamic law. We offer support on fostering Islamic family
            values and maintaining harmony in relationships.
          </p>
          <p>
            <strong>- Financial and Business Ethics: </strong>Comprehensive
            fatwas on financial transactions, investments, contracts, and
            Islamic banking. We provide guidance on zakat calculations, halal
            trade, interest (riba), and modern financial instruments, ensuring
            that business dealings are Shariah-compliant.
          </p>
          <p>
            <strong>- Health and Medical Ethics: </strong>Our Muftis offer
            rulings on sensitive issues related to medical procedures, organ
            donation, end-of-life care, and bioethical concerns such as in-vitro
            fertilization (IVF), cloning, and genetic research. We bridge the
            gap between Islamic ethics and modern medical challenges.
          </p>
          <p>
            <strong>- Modern Technological Concerns: </strong>In an era of rapid
            technological advancement, we provide fatwas on contemporary issues
            such as artificial intelligence, cryptocurrency, data privacy, and
            social media use, helping Muslims align their digital lives with
            Islamic principles.
          </p>
          <br />
          <h5>Our Scholars: Expertise and Dedication:</h5>
          <p>
            The <strong>Darul Ifta</strong> team is composed of esteemed Muftis
            and Islamic scholars with deep expertise in various fields of
            Islamic jurisprudence (fiqh). Each member of our team has undergone
            extensive education in both traditional Islamic sciences and
            contemporary fields, allowing them to address complex questions with
            wisdom and balance. Our scholars are trained in the classical
            schools of thought - Hanafi, Maliki, Shafi'i, and Hanbali - and are
            equipped to deliver rulings that reflect the diversity within
            Islamic jurisprudence.
          </p>
          <p>
            Beyond their expertise, our Muftis are committed to engaging with
            the unique cultural, social, and individual contexts of each
            questioner, ensuring that their fatwas are practical and applicable
            in real-life situations. Our goal is to uphold the integrity of
            Islamic law while providing flexible and compassionate solutions to
            today's challenges.
          </p>
          <br />
          <h5>Darul Ifta Question Submission Form</h5>
          <p>
            If you have a question regarding Islamic rulings or require guidance
            on a specific matter, please complete the form below. By providing
            clear and detailed information, you allow our scholars to address
            your question accurately and effectively.
          </p>
        </CourseDiscription>
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

const SubHeading = styled.h3`
  text-align: center;
  font-size: 20px;
  margin-bottom: 9px;
  color: ${(props) => props.theme.colors.themeTextColor2};

  ${mq("sm")} {
    text-align: center;
    font-style: italic;
    font-size: 22px;
    color: ${(props) => props.theme.colors.themeTextColor2};
  }

  ${mq("md")} {
    text-align: center;
    font-style: italic;
    margin-bottom: 20px;
    font-size: 26px;
    color: ${(props) => props.theme.colors.themeTextColor2};
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
