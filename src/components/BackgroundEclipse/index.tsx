import styled from 'styled-components';

const Container = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

const EclipseTop = styled.div`
  position: absolute;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(200px);
  background-color: #014B7D;
  will-change: transform;
`;

const EclipseBottom = styled.div`
  position: absolute;
  bottom: -300px;
  right: 50%;
  transform: translateX(50%);
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(200px);
  background-color: #011522ff;
  will-change: transform;
`;

export function Background() {
  return (
    <Container>
      <EclipseTop />
      <EclipseBottom />
    </Container>
  );
}
