import React from 'react';
import Link from 'next/link';
import getTest from '@/lib/getTest'

export default async function Test() {
	const testData: Promise<Test> = getTest();

	const test = await testData;

	return (
		<section>
			<h2>
				<Link href='/'>Back to Home</Link>
			</h2>
			<br />
            <div>{test.message}</div>
			{test.array.map((item, index) => {
				return (
					<>
                        <span>{item}</span>
						{/* <p key={index}>
							<Link href='/'>
								{item.message}
							</Link>
						</p> */}
						<br />
					</>
				);
			})}
		</section>
	);
}