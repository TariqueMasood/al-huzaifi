import styled from "styled-components";

type CardProps = {
  cardImage: string;
  courseFee: string | number;
  cardTitle: string;
  student: string;
  notes: string;
  hour: string;
  userName: string;
  designation: string;
  link: string;
};

const PopularCourseCard = (props: CardProps) => {
  return (
    <div>
      <Wrapper>
        <ImageContainer>
          <Image src={props.cardImage} alt="Card-Image" />
          {/* <Fee>{props.courseFee}</Fee> */}
        </ImageContainer>
        <CardContent>
          <CardHeading href={props.link}>{props.cardTitle}</CardHeading>
          <CardDetailWrapper>
            <CardDetail>
              <span>{props.student}</span>
            </CardDetail>
            <CardDetail>
              <span>{props.notes}</span>
            </CardDetail>
            <CardDetail>
              <span>{props.hour}</span>
            </CardDetail>
          </CardDetailWrapper>
          {/* <Author>
            <AuthorDeatil>
              <span>
                <NameLink href="#">{props.userName}</NameLink>
              </span>
            </AuthorDeatil>
            <span>
              <DesignationLink href="#">{props.designation}</DesignationLink>
            </span>
          </Author> */}
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
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 20px;
  border: ${(props) => props.theme.border};
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

// const Fee = styled.span`
//   position: absolute;
//   top: 20px;
//   left: 24px;
//   background-color: ${(props) => props.theme.colors.themeColor};
//   padding: 7px 18px;
//   border-radius: 8px;
//   color: #fff;
// `;

const Image = styled.img`
  max-width: 420px;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardContent = styled.div`
  padding: 12px;
`;

const CardHeading = styled.a`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 700;
  // line-height: 24px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.themeColor};
  transition: ease-in-out 0.4s;

  // &:hover {
  //   color: ${(props) => props.theme.colors.themeColor1};
  //   transform: scale(1.1);
  // }
`;

const CardDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 0px;
  color: ${(props) => props.theme.colors.yellowColor};
  font-size: 12px;
  font-weight: 600;
`;

const CardDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const Author = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-top: 1px solid ${(props) => props.theme.cardDividerColor};
//   padding-top: 20px;
// `;

// const AuthorDeatil = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;

// const NameLink = styled.a`
//   text-transform: capitalize;
//   text-decoration: none;
//   font-size: 16px;
//   font-weight: 500;
//   color: #6b6b6b;

//   &:hover {
//     color: ${(props) => props.theme.colors.themeColor};
//   }
// `;

// const DesignationLink = styled.a`
//   text-transform: capitalize;
//   text-decoration: none;
//   font-weight: 500;
// `;
