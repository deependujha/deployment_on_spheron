import React from 'react';
import Link from 'next/link';
const hello = () => {
	return (
		<div className="h-screen bg-[url(/bg3.jpg)]">
			<div className="font-bold text-blue-500 text-center">
				This is hello page.
			</div>
			<Link href="/">
				<div className="text-red-500 underline">Go back to index page</div>
			</Link>
		</div>
	);
};

export default hello;
