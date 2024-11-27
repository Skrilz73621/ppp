import React from 'react';
import styled from 'styled-components';

const Card = ({ gradientColors, IconComponent, title, width, waveMargin, onClick }) => {
  return (
    <StyledWrapper gradientColors={gradientColors} width={width} waveMargin={waveMargin}>
      <div className="e-card playing" onClick={onClick}>
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop">
          <IconComponent className="icon" />
          <div className="name">{title}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .e-card {
    margin: 80px;
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
    position: relative;
    width: ${({ width }) => width || "240px"}; /* Привязка width через props */
    height: 330px;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .e-card:hover {
    transform: scale(1.05); /* Увеличение карточки */
  }

  .wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.6;
    left: ${({waveMargin}) => waveMargin || "0px"};
    top: 0px;
    margin-left: -50%;
    margin-top: -70%;
    background: ${({ gradientColors }) => `linear-gradient(744deg, ${gradientColors[0]}, ${gradientColors[1]} 60%, ${gradientColors[2]})`};
    transition: filter 0.3s ease;
  }

  .e-card:hover .wave {
    filter: brightness(0.7); /* Затемнение только фона */
  }

  .icon {
    width: 3em;
    height: 3em;
    margin-top: -1em;
    padding-bottom: 1em;
    color: #ffffff;
  }

  .infotop {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 5.6em;
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }

  .name {
    font-size: 2rem;
    font-weight: 100;
    position: relative;
    top: 1em;
    text-transform: lowercase;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Card;
