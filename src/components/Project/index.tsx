import {
  Code2,
  SquareDashedMousePointer
} from "lucide-react";
import React from "react";
import styled from "styled-components";
import Heart from "../../assets/heart.png";
import Star from "../../assets/stars.png";
import UnfilledHeart from "../../assets/unfilledHeart.png";
import UnfilledStar from "../../assets/unfilledstars.png";

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
  isFavorite = false
}) => {
  return (
    <Card>
      <Cover src={cover} alt={title} />

      <Content>
        <CategoryRow>
          <Category>{category}</Category>

          <FavoriteButton
            type="button"
            onClick={onFavorite}
            aria-label={
              isFavorite
                ? "Remove project from favorites"
                : "Add project to favorites"
            }
          >
            <FavoriteIcon
              src={isFavorite ? Heart : UnfilledHeart}
              alt=""
            />
          </FavoriteButton>
        </CategoryRow>

        <Title>{title}</Title>

        {description && (
          <Description>{description}</Description>
        )}

        {rating !== undefined && (
          <Stars aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, index) => (
              <StarImg
                key={index}
                src={index < rating ? Star : UnfilledStar}
                alt=""
              />
            ))}
          </Stars>
        )}

        {(repoLink || liveLink) && (
          <ActionMethods>
            {liveLink ? (
              <a
                href={liveLink}
                className="links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareDashedMousePointer size={17} />
                Demonstration
              </a>
            ) : (
              <DisabledButton
                className="links disabled"
                aria-disabled="true"
              >
                <SquareDashedMousePointer size={17} />
                No Demonstration
              </DisabledButton>
            )}

            {repoLink && (
              <a
                href={repoLink}
                className="links secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={17} />
                Repository
              </a>
            )}
          </ActionMethods>
        )}

        <LastUpdated>
          Last update: {lastUpdated}
        </LastUpdated>
      </Content>
    </Card>
  );
};

// Styled Components

const Card = styled.article`
  width: 100%;
  max-width: 360px;
  min-width: 250px;

  overflow: hidden;
  background: #0e0f11;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  color: #fff;
  font-family: "Inter", sans-serif;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 330px;
    min-width: 240px;
  }

  @media (max-width: 450px) {
    max-width: 100%;
    min-width: 0;
  }
`;

const Cover = styled.img`
  display: block;
  width: 100%;
  height: 210px;

  padding: 8px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 450px) {
    height: 190px;
  }
`;

const Content = styled.div`
  padding: 8px 12px 10px;
`;

const CategoryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 30px;
  margin-bottom: 6px;
`;

const Category = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 5px 12px;

  color: #eaeaea;
  background: #015c94;
  border-radius: 15px;

  font-size: 0.78rem;
  font-weight: 500;
`;

const FavoriteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 4px;

  background: none;
  border: none;

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--primary-light);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const FavoriteIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const Title = styled.h3`
  margin: 5px 0 6px;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
`;

const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;

  margin: 0 0 10px;

  color: #aaa;

  font-size: 0.88rem;
  line-height: 1.3;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
`;

const StarImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;

const ActionMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  width: 100%;
  margin: 8px 0;

  .links {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    min-height: 34px;
    padding: 6px 9px;

    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 6px;

    color: white;
    text-decoration: none;

    font-size: 0.76rem;
    font-weight: 500;

    transition:
      background 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      background: var(--primary-light);
      border-color: var(--primary-light);
    }
  }

  .links.secondary {
    background: transparent;

    &:hover {
      background: var(--primary);
      color: white;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;

    .links {
      width: 100%;
    }
  }
`;

const DisabledButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  min-height: 36px;
  padding: 7px 10px;

  background: #2e2e2e !important;
  border: 2px solid #2e2e2e !important;
  border-radius: 6px;

  color: #999 !important;

  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;

  opacity: 0.7;
  cursor: not-allowed;
`;

const LastUpdated = styled.p`
  margin: 8px 0 0;

  color: #888;

  font-size: 0.72rem;
  line-height: 1.2;
`;
