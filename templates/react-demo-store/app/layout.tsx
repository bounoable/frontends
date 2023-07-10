import "./globals.css";
import { Inter } from "next/font/google";
import { useNavigation } from "@/hooks/useNavigation";
import LayoutFooter from "@/app/components/LayoutFooter";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loadNavigationElements } = useNavigation();
  const footerData = await loadNavigationElements();
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LayoutFooter menu={footerData} />
      </body>
    </html>
  );
}
