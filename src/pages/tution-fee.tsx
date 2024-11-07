import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const TuitionFeePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Tuition Fee</Title>
        <CourseDiscription>
          <p>
            At <strong>Al-Huzaifi Academy</strong>, our primary objective is to
            serve the Deen by providing quality Islamic education, ensuring that
            we provide the best teachers, resources, and facilities for our
            students.
          </p>
          <p>
            Our vision is to make Islamic knowledge accessible to everyone. We
            aim to nurture individuals who are well-versed in Islam,
            understanding their faith deeply and practicing it sincerely. We do
            not display specific fees on our website because we believe that
            financial concerns should never discourage anyone from seeking
            knowledge. Instead, we encourage you to register first, after which
            we will share all the necessary fee details based on your selected
            course.
          </p>
          <h5>Fee Structure:</h5>
          <p>
            Our fee structure varies according to the type of course you choose.
            Each course is carefully priced to reflect the quality of education,
            the level of expertise of the instructors, and the resources
            provided. Once you have registered for a course, detailed fee
            information specific to your chosen program will be sent to you.
          </p>
          <h5>Why We Collect Fees:</h5>
          <p>The fees collected from students are used for:</p>
          <p>
            <strong>- Enhancing Teaching Quality:</strong> We ensure our
            instructors are well-qualified, experienced, and capable of
            delivering engaging and impactful lessons.
          </p>
          <p>
            <strong>- Providing Better Learning Resources: </strong>Your fees
            help us invest in the latest educational tools, software, and study
            materials to support your learning.
          </p>
          <p>
            <strong>- Maintaining Online Infrastructure: </strong>Fees also go
            towards maintaining our online platforms, ensuring a smooth and
            uninterrupted learning experience.
          </p>
          <h5>Contact Us for Fee Details:</h5>
          <p>
            We encourage you to register without hesitation. After registration,
            our team will provide you with all necessary fee details based on
            your selected course. For any questions or assistance regarding the
            fee structure or payment methods, please feel free to reach out to
            us at [insert contact information]. We are always here to help and
            ensure that financial concerns do not hinder your journey to gaining
            Islamic knowledge.
          </p>
          <h5>Refund Policy:</h5>
          <p>
            We offer a flexible refund policy to ensure satisfaction. Our refund
            policy is designed to be fair and considerate of both the students
            and the academy's operational requirements. Please carefully review
            the following rules and regulations regarding refunds:
          </p>
          <p>
            <strong>- Full Refund: </strong>Students are eligible for a full
            refund if they withdraw from the course within the first 7 days of
            the start date.
          </p>
          <p>
            <strong>- Partial Refund: </strong>If a student withdraws between 8
            to 14 days after the course begins, they are eligible for a partial
            refund (usually 50% of the paid fees). The exact amount will be
            determined based on the course and individual circumstances.
          </p>
          <p>
            <strong>- No Refund: </strong>No refunds will be issued if a student
            withdraws after 14 days from the course start date, except in
            exceptional circumstances (e.g., medical emergencies) that will be
            reviewed on a case-by-case basis.
          </p>

          <h5>Refund Process:</h5>
          <p>
            <strong>- Request Submission: </strong>To initiate a refund,
            students must submit a written request to the academy's
            administration via email at [email address]. The request should
            include the student's name, course details, date of enrollment, and
            reason for withdrawal.
          </p>
          <p>
            <strong>- Processing Time: </strong>Refund requests will be
            processed within 14 business days of receiving the request. Approved
            refunds will be issued through the original method of payment.
          </p>
          <p>
            <strong>- Required Documentation: </strong>In cases of exceptional
            circumstances (e.g., medical reasons), supporting documents such as
            medical certificates must be provided.
          </p>

          <h5>Conditions That Affect Refunds:</h5>
          <p>
            <strong>- Misconduct: </strong>If a student is expelled from the
            course due to misconduct, breach of academy rules, or inappropriate
            behavior, no refund will be provided.
          </p>
          <p>
            <strong>- Course Cancellation by Academy: </strong>If our academy
            cancels a course due to unforeseen circumstances, all affected
            students will receive a full refund or the option to transfer their
            fees to another course.
          </p>
          <h5>Transfer of Fees:</h5>
          <p>
            <strong>- Course Transfers: </strong>Instead of a refund, students
            may request to transfer their fees to another course within the
            academy. This option is subject to course availability and approval
            from the administration.
          </p>
          <p>
            <strong>- Credit Option: </strong>Students can also opt to receive a
            credit for future use at the academy, valid for one year from the
            date of issue.
          </p>
          <h5>Exceptional Circumstances:</h5>
          <p>
            Refunds outside the standard policy will be considered on a
            case-by-case basis in exceptional situations such as:
          </p>
          <p>- Serious illness or injury that prevents course participation.</p>
          <p>- Family emergencies or other significant personal issues.</p>
          <h5>Contact for Refund Inquiries:</h5>
          <p>
            For any questions regarding refunds, students can contact the
            support team at [contact information]. We are here to assist you and
            ensure transparency in our refund process.
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
