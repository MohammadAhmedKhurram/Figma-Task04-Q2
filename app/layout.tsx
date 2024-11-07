export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body style={{margin: "0px", padding: "0px", border: "0px", boxSizing: "border-box", backgroundColor: "#FAF5F5"}}>
      {children} 
    </body>
  </html>
  );
}
