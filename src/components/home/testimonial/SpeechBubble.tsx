import styles from "./SpeechBubble.module.css";

export default function SpeechBubble({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.bubble}>{children}</div>;
}
