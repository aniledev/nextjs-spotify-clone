import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Sidebar } from "./components/Sidebar";
import "./globals.css";
import { SupabaseProvider } from "./providers/SupabaseProvider";
import { UserProvider } from "./providers/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone",
	description: "Music for Everyone",
};

/**
 * @todo Clean up className object with constants
 * @body `className` objects can be cleaned up with constants. DRY code.
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<SupabaseProvider>
					<UserProvider>
						<Sidebar>{children}</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
