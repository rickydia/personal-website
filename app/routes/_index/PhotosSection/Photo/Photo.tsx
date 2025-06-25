import css from "./styles.module.css";

interface PhotoProps {
  name: string;
  alt: string;
}

export function Photo({ name, alt }: PhotoProps) {
  return (
    <img
      className={css.photo}
      loading="lazy"
      src={`/photos/${name}.webp`}
      alt={alt}
    />
  );
}
