import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { createPortal } from "react-dom";

interface MediaTypes {
    images: string[];
}

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 0;
`;

const MediaContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow: hidden;

  .keen-slider__slide {
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    overflow: visible;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;

    .keen-slider__slide {
      flex: 0 1 calc(50% - 10px); /* 2 colunas */
      max-width: calc(50% - 10px);
      cursor: pointer;
    }
  }
`;

const Slide = styled.div`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 250px;
  height: 180px;
  object-fit: cover;
  border: 1px solid #a6a6a6;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #1a1a1a;
  border: 1px solid #333;
  color: white;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-out;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

const ArrowLeft = styled(Arrow)`
  left: -10px;
`;

const ArrowRight = styled(Arrow)`
  right: -10px;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2147483646; /* muito alto */
  cursor: zoom-out;
  pointer-events: auto;

  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 40px 80px rgba(0,0,0,0.8);
  z-index: 2147483647;
  position: relative;
`;


const MediaGallery = ({ images }: MediaTypes) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: false,
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 3.2,
                    spacing: 16,
                },
            },
            "(max-width: 768px)": {
                slides: {
                    perView: 2.2,
                    spacing: 16,
                },
            },
            "(max-width: 500px)": {
                slides: {
                    perView: 1.4,
                    spacing: 16,
                },
            },
        },
        slides: {
            perView: 0,
            spacing: 16,
        },
    });

    useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedImage(null);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };

        if (selectedImage) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

   return (
    <>
      <SliderWrapper>
        <MediaContent ref={sliderRef} className="keen-slider">
          {images.map((img, index) => (
            <Slide key={index} className="keen-slider__slide" onClick={() => setSelectedImage(img)}>
              <StyledImg src={img} alt={`media-${index}`} loading="lazy" />
            </Slide>
          ))}
        </MediaContent>

        {slider && slider.current && (
          <>
            <ArrowLeft onClick={() => slider.current?.prev()}>&#10094;</ArrowLeft>
            <ArrowRight onClick={() => slider.current?.next()}>&#10095;</ArrowRight>
          </>
        )}
      </SliderWrapper>

      {selectedImage &&
        createPortal(
          <Modal onClick={() => setSelectedImage(null)}>
            <ModalImage src={selectedImage} alt="expanded" />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default MediaGallery;
