"use client";

import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";

export default function Home() {
	return (
		<div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
			<Header>
				<div className="mb-2">
					<h1 className="text-white font-3xl font-semibold">
            Welcome Back
					</h1>
					<div>
						<ListItem image={""} name={""} href={""}/>
					</div>
				</div>
			</Header>
		</div>
	);
}
