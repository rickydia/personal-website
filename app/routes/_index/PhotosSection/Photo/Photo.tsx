import css from "./styles.module.css";

interface PhotoProps {
  name: string;
}

export function Photo({ name }: PhotoProps) {
  return (
    <img
      className={css.photo}
      loading="lazy"
      src={`/photos/${name}.jpg`}
      alt="Photo 1"
    />
  );
}
