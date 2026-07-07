const stages = [
  { label: "Idea", className: "orbit-node--idea" },
  { label: "Architecture", className: "orbit-node--architecture" },
  { label: "Secure Build", className: "orbit-node--build" },
  { label: "Deployment", className: "orbit-node--deployment" },
];

export function SystemOrbit() {
  return (
    <div className="system-orbit" aria-hidden="true">
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--inner" />
      <div className="orbit-core">
        <span>System</span>
        <strong>Architecture</strong>
      </div>
      {stages.map((stage) => (
        <div key={stage.label} className={`orbit-node ${stage.className}`}>
          <span className="orbit-node-dot" />
          {stage.label}
        </div>
      ))}
      <span className="orbit-packet orbit-packet--one" />
      <span className="orbit-packet orbit-packet--two" />
      <span className="orbit-tag orbit-tag--api">API</span>
      <span className="orbit-tag orbit-tag--data">DATABASE</span>
      <span className="orbit-tag orbit-tag--cloud">CLOUD</span>
      <span className="orbit-tag orbit-tag--security">SECURITY</span>
    </div>
  );
}
