import { UsersRound } from "lucide-react";
import { useLanguage } from '../../i18n';
import styled from "styled-components"
import dailydev from '../../assets/daily-dev.svg'
import discord from '../../assets/discord.svg'
import github from '../../assets/github.svg'
import googledev from '../../assets/googledev.svg'
import linkedin from '../../assets/linkedin.png'
import stackoverflow from '../../assets/stackoverflow.svg'

export const SocialFooter = () => {
    const { t } = useLanguage();
    return (
        <>
            <SectionTransition />
            <FooterContainer id="socialmedia">
                <FooterContent>
                    <SocialSection>
                        <h2 className="section-heading"><UsersRound size={24} aria-hidden="true" />{t("Social Media")}</h2>
                        <p>{t("Find me on social networks and follow my work")}</p>

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
                                    <span className="social-desc">{t("Projects and code")}</span>
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
                                    <span className="social-desc">{t("Career and networking")}</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                                href="https://app.daily.dev/victormoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dailydev"
                            >
                                <img src={dailydev} alt="Daily.dev" />
                                <div className="social-info">
                                    <span className="social-name">Daily.dev</span>
                                    <span className="social-desc">{t("Reads and bookmarks")}</span>
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
                                    <span className="social-desc">{t("Questions and answers")}</span>
                                </div>
                            </SocialLink>

                            <SocialLink
                              href="https://me.developers.google.com/u/victormoni"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="googledev"
                          >
                              <img src={googledev} alt="Google Developers" />

                              <div className="social-info">
                                  <span className="social-name">
                                      Google Developers
                                  </span>

                                  <span className="social-desc">
                                      {t("Developer profile and achievements")}</span>
                              </div>
                          </SocialLink>

                          <SocialLink
                              href="https://discord.com/users/victormoni"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="discord"
                          >
                              <img src={discord} alt="Discord" />

                              <div className="social-info">
                                  <span className="social-name">
                                      Discord
                                  </span>

                                  <span className="social-desc">
                                      {t("Communities and networking")}</span>
                              </div>
                          </SocialLink>
                        </SocialGrid>
                    </SocialSection>

                    <FooterBottom>
                        <p>Victor Moni &middot; {t("Full Stack Developer")} &middot; 2026</p>
                        <span>{t("Thoughtfully built with React & TypeScript")}</span>
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
background:var(--background); color:var(--text); min-height:100vh; min-height:100svh; padding:max(104px, var(--section-space)) 0 40px; position:relative; border-top:1px solid var(--border);
`;

const FooterContent = styled.div`
margin:0 auto; padding:0 var(--page-gutter);
`;

const SocialSection = styled.div`
    // text-align: center;
    margin-bottom: 60px;

    h2 {
        font-size:clamp(30px,4vw,40px); letter-spacing:-0.035em;
        margin-bottom: 15px;
        background:var(--text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: fade-up 0.5s 0.32s backwards;
    }

    p {
        font-size:16px;
        color: var(--muted);
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
    gap:16px;
    // max-width: 800px;
    // margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

const SocialLink = styled.a`
  &.github img, &.dailydev img { filter: var(--mono-icon-filter); }
display:flex; align-items:center; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:24px; color:var(--text); transition: var(--control-transition); &:hover { border-color:#3d617b; background:var(--hover-surface); } img { width:32px; height:32px; object-fit:contain; margin-right:16px; } .social-info { display:flex; flex-direction:column; min-width:0; } .social-name { font-size:16px; font-weight:600; margin-bottom:4px; } .social-desc { font-size:13px; color:var(--muted); }
`;

const FooterBottom = styled.div`
    text-align: center;
    padding-top: 40px;
    border-top: 1px solid var(--border);
    animation: fade-up 0.5s 0.8s backwards;

    p {
        font-size: 16px;
        color: var(--muted);
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
