import styled from "styled-components";
import { CiClock2, CiStickyNote, CiUser } from "react-icons/ci";

type CardProps = {
  cardImage: string;
  courseFee: string | number;
  cardTitle: string;
  studentNumber: number;
  student: string;
  notesNumber: number;
  notes: string;
  hour: string;
  clock: string;
  userImage: string;
  userName: string;
  designation: string;
};

const PopularCourseCard = (props: CardProps) => {
  return (
    <div>
      <Wrapper>
        <ImageContainer>
          <Image src={props.cardImage} alt="Card-Image" />
          <Fee>{props.courseFee}</Fee>
        </ImageContainer>
        <CardContent>
          <CardHeading>{props.cardTitle}</CardHeading>
          <CardDetailWrapper>
            <CardDetail>
              <UserIcon>
                <CiUser />
              </UserIcon>
              <span>{props.studentNumber}</span>
              <span>{props.student}</span>
            </CardDetail>
            <CardDetail>
              <NotesIcon>
                <CiStickyNote />
              </NotesIcon>
              <span>{props.notesNumber}</span>
              <span>{props.notes}</span>
            </CardDetail>
            <CardDetail>
              <ClockIcon>
                <CiClock2 />
              </ClockIcon>
              <span>{props.clock}</span>
              <span>{props.hour}</span>
            </CardDetail>
          </CardDetailWrapper>
          <Author>
            <AuthorDeatil>
              <UserImage src={props.userImage} alt="Image" />
              <span>
                <NameLink href="#">{props.userName}</NameLink>
              </span>
            </AuthorDeatil>
            <span>
              <DesignationLink href="#">{props.designation}</DesignationLink>
            </span>
          </Author>
        </CardContent>
      </Wrapper>
    </div>
  );
};

export default PopularCourseCard;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  width: 100%;
  height: auto;
  box-shadow: 0px 3px 6px 0px rgba(140, 149, 159, 0.15);
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Fee = styled.span`
  position: absolute;
  top: 20px;
  left: 24px;
  background-color: red;
  padding: 7px 18px;
  border-radius: 8px;
  color: #fff;
`;

const Image = styled.img`
  max-width: 420px;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardHeading = styled.h4`
  text-transform: capitalize;
  cursor: pointer;
  line-height: 36px;

  &:hover {
    color: blue;
  }
`;

const CardDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 18px 0px;
  color: #696969;
`;

const UserIcon = styled.span`
  color: red;
`;

const NotesIcon = styled.span`
  color: red;
`;

const ClockIcon = styled.span`
  color: red;
`;

const CardDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Author = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f5f5f5;
  padding-top: 20px;
`;

const AuthorDeatil = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NameLink = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #6b6b6b;

  &:hover {
    color: blue;
  }
`;

const DesignationLink = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  font-weight: 500;
`;

const UserImage = styled.img`
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
`;
