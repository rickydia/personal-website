import { Tag, Typography, TypographyVariant } from "~/components";

import css from "./styles.module.css";

export interface ExperienceItemProps {
  dates: [string, string];
  title: string;
  description: string;
  tags: string[];
}

export function ExperienceItem({
  dates,
  title,
  description,
  tags,
}: ExperienceItemProps) {
  const baseKey = `${title.toLowerCase().replace(" ", "_")}`;
  return (
    <div className={css.container}>
      <Typography variant={TypographyVariant.DEFAULT} className={css.dateText}>
        {dates[0]} - {dates[1]}
      </Typography>
      <div className={css.description}>
        <Typography variant={TypographyVariant.DEFAULT_BOLD}>
          {title}
        </Typography>
        <Typography variant={TypographyVariant.DEFAULT}>
          {description}
        </Typography>
        <div className={css.tags}>
          {tags.map((tag) => (
            <Tag key={`${baseKey}-tag-${tag.toLowerCase().replace(" ", "_")}`}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
