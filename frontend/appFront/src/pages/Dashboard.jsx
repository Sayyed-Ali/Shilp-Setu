import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MetricCard from "../components/MetricCard"

function Dashboard() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <div className="max-w-7xl mx-auto px-6 py-12 dark:bg-[#0f1626] flex-1">
                    <h1 className="text-3xl font-serif font-extrabold mb-1 dark:text-white">
                        Hello!, Admin
                    </h1>
                    <p className="text-[#6b5f4e] dark:text-gray-400 mb-8">
                        Here's what's happening with your listings today.
                    </p>

                    {/* metric cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        <MetricCard label="Total Listings" value="24" />
                        <MetricCard label="New Inquiries" value="4" />
                        <MetricCard label="Confirmed Orders" value="11" />
                        <MetricCard label="AI Descriptions" value="19" />
                    </div>

                    {/* placeholder for inquiry table - coming later */}
                    <div className="bg-white dark:bg-[#1a2238] border border-[#ddd3c4] dark:border-[#2a3552] rounded-2xl p-6">
                        <h2 className="font-semibold text-lg mb-2 dark:text-white">Recent Inquiries</h2>
                        <p className="text-[#6b5f4e] dark:text-gray-400 text-sm">
                            Inquiry tracking table will be built here once the backend is connected.
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Dashboard