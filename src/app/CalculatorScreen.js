export function CalculatorScreen({ input, result }) {
  return (
    <div className="whitespace-normal break-words bg-input p-3 text-end text-2xl text-input-foreground">
      <span data-testid="input">{input || 0}</span>
      <span data-testid="result">{result ? `=${result}` : ""}</span>
    </div>
  );
}
