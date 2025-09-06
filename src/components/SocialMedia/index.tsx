import styled from "styled-components"
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.png'
import reddit from '../../assets/reddit.svg'
import dailydev from '../../assets/daily-dev.svg'
import stackoverflow from '../../assets/stackoverflow.svg'
import facebook from '../../assets/facebook.svg'
import codepen from '../../assets/codepen.png'
import instagram from '../../assets/instagram.svg'
import devto from '../../assets/devto.svg'
import discord from '../../assets/discord.svg'

export const SocialFooter = () => {
    return (
        <>
            <SectionTransition />
            <FooterContainer id="socialmedia">
                <FooterContent>
                    <SocialSection>
                        <h2>Social Media</h2>
                        <p>Find me on social networks and follow my work</p>

                        <SocialGrid>
                            <SocialLink
                                href="https://github.com/victormoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github"
                            >
                                <img src={github} alt="GitHub" />
                                <div className="social-info">
                                    <span className="social-name">GitHub</span>
                                    <span className="social-desc">Projects and code</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                                href="https://www.linkedin.com/in/victormoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedin"
                            >
                                <img src={linkedin} alt="LinkedIn" />
                                <div className="social-info">
                                    <span className="social-name">LinkedIn</span>
                                    <span className="social-desc">Career and networking</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                                href="https://www.reddit.com/user/victor-moni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reddit"
                            >
                                <img src={reddit} alt="Reddit" />
                                <div className="social-info">
                                    <span className="social-name">Reddit</span>
                                    <span className="social-desc">Discussions and tips</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                                href="https://app.daily.dev/victormoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dailydev"
                            >
                                <img src={dailydev} alt="DailyDev" />
                                <div className="social-info">
                                    <span className="social-name">daily.dev</span>
                                    <span className="social-desc">Reads and bookmarks</span>
                                </div>
                            </SocialLink>

                              <SocialLink
                                href="https://stackoverflow.com/users/9859219/victor-moni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="stackoverflow"
                            >
                                <img src={stackoverflow} alt="StackOverflow" />
                                <div className="social-info">
                                    <span className="social-name">Stack Overflow</span>
                                    <span className="social-desc">Questions and answers</span>
                                </div>
                            </SocialLink>

                               <SocialLink
                                href="https://www.facebook.com/vabmoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="facebook"
                            >
                                <img src={facebook} alt="Facebook" />
                                <div className="social-info">
                                    <span className="social-name">Facebook</span>
                                    <span className="social-desc">Personal network</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                                href="https://codepen.io/victormoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="codepen"
                            >
                                <img src={codepen} alt="Codepen" />
                                <div className="social-info">
                                    <span className="social-name">Codepen</span>
                                    <span className="social-desc">Demos and experiments</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                                href="https://www.instagram.com/vabmoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="instagram"
                            >
                                <img src={instagram} alt="Instagram" />
                                <div className="social-info">
                                    <span className="social-name">Instagram</span>
                                    <span className="social-desc">Personal network</span>
                                </div>
                            </SocialLink>

                             <SocialLink
                                href="https://discordapp.com/users/victormoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="discord"
                            >
                                <img src={discord} alt="Discord" />
                                <div className="social-info">
                                    <span className="social-name">Discord</span>
                                    <span className="social-desc">Community and support</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                                href="https://dev.to/victormoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="devto"
                            >
                                <img src={devto} alt="dev.to" />
                                <div className="social-info">
                                    <span className="social-name">dev.to</span>
                                    <span className="social-desc">Articles and posts</span>
                                </div>
                            </SocialLink>
                        </SocialGrid>
                    </SocialSection>

                    <FooterBottom>
                        <p>&copy; 2025 Victor Moni. Full Stack Developer</p>
                        <span>Built with ❤️ and lots of code</span>
                    </FooterBottom>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

const SectionTransition = styled.div`
    position: relative;
    width: 100%;
    height: 0px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
    z-index: 1;
    margin-top: -1px;
`;

const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
    color: white;
    padding: 80px 0 40px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primary), transparent);
    }
`;

const FooterContent = styled.div`
    // max-width: 1200px;
    margin: 0 auto;
    padding: 0 150px;

    @media (max-width: 1024px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const SocialSection = styled.div`
    // text-align: center;
    margin-bottom: 60px;

    h2 {
        font-size: 48px;
        margin-bottom: 15px;
        background: linear-gradient(45deg, var(--primary), var(--primary-light));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: fade-up 0.5s 0.2s backwards;
    }

    p {
        font-size: 20px;
        color: #c2c2c2;
        margin-bottom: 50px;
        animation: fade-up 0.5s 0.4s backwards;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 32px;
        }

        p {
            font-size: 18px;
        }
    }
`;

const SocialGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    // max-width: 800px;
    // margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    animation: fade-up 0.5s 0.6s backwards;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateY(-5px);
        border-color: var(--primary);
        box-shadow: 0 20px 40px rgba(134, 1, 243, 0.3);

        &::before {
            left: 100%;
        }
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 10px;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }

    .social-info {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .social-name {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .social-desc {
        font-size: 14px;
        color: #c2c2c2;
    }

    &.github:hover {
        border-color: #c4c4c4ff;
        box-shadow: 0 20px 40px rgba(175, 175, 175, 0.3);
    }

    &.linkedin:hover {
        border-color: #0077b5;
        box-shadow: 0 20px 40px rgba(0, 119, 181, 0.3);
    }

    &.reddit:hover {
        border-color: #FF4500;
        box-shadow: 0 20px 40px rgba(255, 68, 0, 0.68);
    }

    &.dailydev:hover {
        border-color: #b9b9b9ff;
        box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
    }

    &.stackoverflow:hover {
        border-color: #F48024;
        box-shadow: 0 20px 40px rgba(244, 130, 36, 0.4);
    }

    &.facebook:hover {
        border-color: #16A4FB;
        box-shadow: 0 20px 40px rgba(22, 163, 251, 0.45);
    }

    &.codepen:hover {
        border-color: #FFFFFF;
        box-shadow: 0 20px 40px rgba(255, 255, 255, 0.32);
    }

    &.instagram:hover {
        border-color: #D33D93;
        box-shadow: 0 20px 40px rgba(211, 61, 146, 0.47);
    }

    &.discord:hover {
        border-color: #889AF8;
        box-shadow: 0 20px 40px rgba(136, 155, 248, 0.52);
    }

      &.devto:hover {
       border-color: #FFFFFF;
       box-shadow: 0 20px 40px rgba(255, 255, 255, 0.32);
    }


    @media (max-width: 768px) {
        padding: 20px;

        img {
            width: 40px;
            height: 40px;
            margin-right: 15px;
        }

        .social-name {
            font-size: 18px;
        }
    }
`;

const FooterBottom = styled.div`
    text-align: center;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    animation: fade-up 0.5s 0.8s backwards;

    p {
        font-size: 16px;
        color: #c2c2c2;
        margin-bottom: 10px;
    }

    span {
        font-size: 14px;
        color: var(--primary-light);
    }

    @media (max-width: 768px) {
        margin-bottom: 70px;
        p {
            font-size: 14px;
        }

        span {
            font-size: 12px;
        }
    }
`;
