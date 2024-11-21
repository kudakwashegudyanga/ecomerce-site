import { useUserStore } from "../stores/useUserStore";

const Profile = () => {
    const { user } = useUserStore();

    if (!user) {
        return <p className="text-center text-gray-500 mt-10 text-lg font-medium">Please log in to view your profile.</p>;
    }

    return (
        <div className="container  mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-emerald-600 mb-8">Your Profile</h1> {/*Increased font size*/}
            <div className="bg-gradient-to-r from-gray-700 bg-emerald-700 p-8 rounded-lg shadow-lg"> {/* Changed background color for better contrast*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/*Responsive grid layout*/}
                    <div>
                        <p className="mb-4 text-lg font-medium text-white-800">
                            <span className="font-bold">Name:</span> {user.name || "N/A"}
                        </p>
                        <p className="mb-4 text-lg font-medium text-white-800">
                            <span className="font-bold">Email:</span> {user.email}
                        </p>
                    </div>
                    <div>
                         {/* Add other profile details here if needed.  Example: */}
                        <p className="mb-4 text-lg font-medium text-white-800">
                            <span className="font-bold">Address:</span> {user.address || "N/A"}
                        </p>
                        <p className="mb-4 text-lg font-medium text-white-800">
                            <span className="font-bold">Phone:</span> {user.phone || "N/A"}
                        </p>

                    </div>
                </div>
                <h2 className="text-xl font-bold text-white-800 mt-8 mb-4">Past Orders</h2>
                <ul className="list-disc list-inside text-white-100"> {/*Improved order list styling*/}
                    {user.orders?.length ? (
                        user.orders.map((order, index) => (
                            <li key={index} className="mb-2">
                                <span className="font-medium">Order # {order.id}</span> - {order.date} - ${order.total.toFixed(2)}
                            </li>
                        ))
                    ) : (
                        <p className="text-white-500 text-lg font-medium">No past orders available.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Profile;