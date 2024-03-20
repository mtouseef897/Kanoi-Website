import "./globals.css";

export const metadata = {
  title: "Kanoi",
  description: "― 怪の戦に備えヨ ― A trading card game with grand narratives. Powered by $KANOI.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>     
      {children} 
      </body>
    </html>
  );
}
