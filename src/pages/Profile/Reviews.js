import styled from "styled-components";
import { Title } from "../../styles/profileStyles";
import Stars from "../../components/Stars";

function Reviews({ reviewsData }) {
    return (
        <ReviewsContainer>
            <Title>Depoimentos: </Title>

            <ReviewList>
                {reviewsData.map((review, index) => {
                    return (
                        <Review key={index}>
                            <InnerReviewContainer>
                                <ImageContainer>
                                    <img
                                        src={review.imgUrl}
                                        alt="profile-pic"
                                    />
                                </ImageContainer>

                                <div>
                                    <NameContainer>
                                        <div className="name">
                                            {review.userName}{" "}
                                        </div>
                                        <div>
                                            {<Stars rating={review.rating} />}
                                        </div>
                                    </NameContainer>

                                    <div>{review.comment}</div>
                                </div>
                            </InnerReviewContainer>
                        </Review>
                    );
                })}
            </ReviewList>
        </ReviewsContainer>
    );
}

const ReviewsContainer = styled.div`
    padding-top: 20px;
`;
const ReviewList = styled.ul`
    margin-top: 15px;
`;

const Review = styled.li`
    display: flex;
    margin-bottom: 25px;
`;

const InnerReviewContainer = styled.div`
    display: flex;
`;

const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .name {
        font-weight: bold;
    }
`;

const ImageContainer = styled.div`
    height: auto;
    img {
        width: 75px;
        height: 72px;
    }
`;

export default Reviews;
