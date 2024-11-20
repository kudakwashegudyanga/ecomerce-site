import { useUserStore } from "../stores/useUserStore";

const Profile = () => {
	const { user } = useUserStore();

	if (!user) {
		return <p className="text-center text-gray-500 mt-10">Please log in to view your profile.</p>;
	}

	return (
		<div className='container mx-auto px-4 py-10'>
			<h1 className='text-2xl font-bold text-emerald-600 mb-6'>Profile</h1>
			<div className='bg-gray-100 p-6 rounded-lg shadow-md'>
				<p className='mb-4'>
					<strong>Name:</strong> {user.name || "N/A"}
				</p>
				<p className='mb-4'>
					<strong>Email:</strong> {user.email}
				</p>
				<h2 className='text-xl font-bold text-gray-700 mt-6 mb-4'>Past Orders</h2>
				<ul className='list-disc list-inside'>
					{user.orders?.length ? (
						user.orders.map((order, index) => (
							<li key={index}>
								Order #{order.id} - {order.date} - ${order.total.toFixed(2)}
							</li>
						))
					) : (
						<p className='text-gray-500'>No past orders available.</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
