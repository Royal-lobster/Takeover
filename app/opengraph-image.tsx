import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "InstallKit - Homebrew App Picker";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#1c1c1c",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "16px",
            background: "#85CD22",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 256 256"
            fill="#1a3d1f"
            role="img"
            aria-label="Terminal"
          >
            <path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z" />
          </svg>
        </div>

        <span
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "monospace",
            letterSpacing: "-0.02em",
          }}
        >
          INSTALLKIT
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "32px",
            color: "#a3a3a3",
            fontFamily: "monospace",
          }}
        >
          Select apps → Copy brew command → Paste in terminal
        </span>

        <div
          style={{
            marginTop: "24px",
            padding: "16px 32px",
            background: "rgba(133, 205, 34, 0.1)",
            border: "1px solid rgba(133, 205, 34, 0.3)",
            borderRadius: "8px",
            display: "flex",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              color: "#85CD22",
              fontFamily: "monospace",
            }}
          >
            brew install --cask arc spotify vscode figma
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
