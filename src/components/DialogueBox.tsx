export function DialogueBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialogue">
      <span className="dialogue__marker" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}
