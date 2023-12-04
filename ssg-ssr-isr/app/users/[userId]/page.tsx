import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import getAllUsers from '@/lib/getAllUsers';
import { Suspense } from 'react';
import UserPosts from './components/userPosts';
import { notFound } from 'next/navigation';

type Params = {
	params: {
		userId: string;
	};
};

export default async function UserPage({ params: { userId } }: Params) {
	const userData: Promise<User> = getUser(userId);
	const userPostsData: Promise<Post[]> = getUserPosts(userId);

	const user = await userData;

	if (!user.name) notFound();

	return (
		<>
			<h2>{user.name}</h2>
			<br />
			<Suspense fallback={<h2>Loading...</h2>}>
				<UserPosts promise={userPostsData} />
			</Suspense>
		</>
	);
}

export async function generateStaticParams() {
	const usersData: Promise<User[]> = getAllUsers();
	const users = await usersData;

	return users.map((user) => ({
		userId: user.id.toString(),
	}));
}
