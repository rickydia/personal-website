import css from "./styles.module.css";

interface PhotoProps {
  name: string;
}

export function Photo({ name }: PhotoProps) {
  return (
    <img
      className={css.photo}
      loading="lazy"
      src={`/photos/${name}.webp`}
      alt="Photo 1"
    />
  );
}
