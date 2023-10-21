"use client";

import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";

/**
 * @todo Modularize `Home` component into another component for content
 * @body `Home` can be composed of a `Header` and `MainContent` component for readibility and maintainability purposes.
 */
export default function Home() {
	return (
		<div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
			<Header>
				<div className="mb-2">
					<h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
						<ListItem
							image="/images/liked.png"
							name="Liked Songs"
							href="liked"
						/>
					</div>
				</div>
			</Header>
			<div className="mt-2 mb-7 px-4">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
				</div>
				<div>List of songs here</div>
			</div>
		</div>
	);
}
