import React from "react";
import styled from "styled-components";
import Star from '../../assets/stars.png'
import UnfilledStar from '../../assets/unfilledstars.png'
import Heart from '../../assets/heart.png'
import UnfilledHeart from '../../assets/unfilledHeart.png'
import { Code2, SquareDashedMousePointer } from "lucide-react";

type CardProjectProps = {
  cover: string;
  category: string;
  title: string;
  description?: string;
  rating?: number;
  lastUpdated: string;
  repoLink?: string;
  liveLink?: string;
  onFavorite?: () => void;
  isFavorite?: boolean;
};

export const Project: React.FC<CardProjectProps> = ({
  cover,
  category,
  title,
  description,
  rating,
  lastUpdated,
  onFavorite,
  repoLink,
  liveLink,
  isFavorite = false,
}) => {
  return (
    <Card>
      <Cover src={cover} alt={title} />
      <Content>
        <CategoryRow>
          <Category>{category}</Category>
          <FavoriteButton onClick={onFavorite}>
            <StarImg
              src={isFavorite ? Heart : UnfilledHeart}
              alt={isFavorite ? "favorite" : "Not favorite"}
            />

          </FavoriteButton>
        </CategoryRow>

        <Title>{title}</Title>
        <Description>{description}</Description>

        {rating && (
          <Stars>
            {Array.from({ length: 5 }, (_, i) => (
              <StarImg
                key={i}
                src={i < rating ? Star : UnfilledStar}
                alt={i < rating ? "Filled start" : "Unfilled star"}
              />
            ))}
          </Stars>
        )}


        {repoLink || liveLink ? (
          <ActionMethods>
            {liveLink ? (
              <a
                href={liveLink}
                className="links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareDashedMousePointer size={18} />
                Demonstration
              </a>
            ) : (
              <DisabledButton className="links disabled">
                <SquareDashedMousePointer size={18} />
                No Demonstration
              </DisabledButton>
            )}
            <a href={repoLink} className="links secondary" target="BLANK" rel="noopener noreferrer">
              <Code2 size={18} />
              Repository
            </a>

          </ActionMethods>
        ) : null}

        <LastUpdated>Last update: {lastUpdated}</LastUpdated>
      </Content>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  background: #0E0F11;
  border-radius: 12px;
  overflow: hidden;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-family: "Inter", sans-serif;
`;

const Cover = styled.img`
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 18px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 12px;
`;

const CategoryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Category = styled.span`
  font-size: 0.85rem;
  color: #eaeaeaf8;
  padding: 6px 14px;
  font-weight: 500;
  background: #015c94ff;
  // border: 1px solid #0372b8ff;
  border-radius: 15px;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: inherit;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: semibold;
  margin: 8px 0 8px;
`;

const Description = styled.p`
  color: #aaa;
  margin-bottom: 1rem;

`

const Stars = styled.div`
  font-size: 1rem;
  color: #ffcc00;
  margin-bottom: 8px;
`;

const StarImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

const ActionMethods = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;

    width: fit-content;

    .links {
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    background: var(--primary);
    color: white;
    gap: 10px;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    transition: background 0.2s;
    &:hover {
      background: var(--primary-light);
        }
    }

    .links.secondary {
      background: transparent;
      border: 2px solid var(--primary);

      &:hover {
        background: var(--primary);
        color: white;
        }
    }

    @media(max-width: 450px){
      flex-direction: column;
    }
`

const LastUpdated = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

const DisabledButton = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  background: #2e2e2e;
  color: #999;
  gap: 10px;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.7;
  cursor: not-allowed;
  text-decoration: none;
`;


