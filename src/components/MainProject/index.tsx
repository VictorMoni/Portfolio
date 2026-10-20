import { useIsLightTheme } from "../../hooks/useIsLightTheme";
import { useLanguage } from "../../i18n";
import ProjectActions from "../ProjectActions";
import {
  Section,
  Container,
  Content,
  Header,
  Status,
  Description,
  ProjectScope,
  Footer,
  ActionMethods,
  Technologies,
} from "./styles";
import { featuredProject as content } from "../../data/featuredProject";

import MediaGallery from "../MediaGallery";

export default function MainProject() {
  const isLight = useIsLightTheme();
  const { t } = useLanguage();
  return (
    <Section>
      <Container>
        <Content>
          {content.status && (
            <Status>
              <span>{t(content.status)}</span>
            </Status>
          )}
          <Header>
            <h2>{content.title}</h2>
          </Header>

          {content.description && (
            <Description>{t(content.description)}</Description>
          )}

          <Technologies aria-label={t("Technologies")}>
            {content.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </Technologies>
        </Content>
        <Content className="project-gallery">
          <MediaGallery
            images={isLight ? content.images.light : content.images.dark}
          />
        </Content>
        <Content className="project-details">
          <ActionMethods>
            <ProjectActions demoLink={content.demoLink} />
          </ActionMethods>

          <ProjectScope>
            <strong>{t("Architecture & scope")}</strong>
            {t(content.scope)}
          </ProjectScope>
          <Footer>
            <span>{t(content.footer)}</span>
          </Footer>
        </Content>
      </Container>
    </Section>
  );
}
