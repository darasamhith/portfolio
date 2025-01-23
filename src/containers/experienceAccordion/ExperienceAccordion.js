import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceList(props) {
  const theme = props.theme;

  return (
    <div className="experience-list" color={theme.text}>
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        {props.sections.map((section) => (
          <div className="section" key={section["title"]}>
            <h3 className="section-title">{section["title"]}</h3>
            <div className="experiences">
              {section["experiences"].map((experience) => (
                <ExperienceCard
                  experience={experience}
                  theme={theme}
                  key={experience.id}
                />
              ))}
            </div>
          </div>
        ))}
      </ThemeProvider>
    </div>
  );
}

export default ExperienceList;
