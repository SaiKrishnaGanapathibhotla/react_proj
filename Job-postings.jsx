import { useState } from 'react'

function Jobs() {

    return (
        <>
            <section className="bg-gray-200 py-10">
                <div className="container mx-auto">
                    <h2 className="text-center text-blue-600 text-3xl font-bold">Browse Open Positions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <div className="bg-white p-6 shadow rounded">
                            <p className="text-gray-500">Full-Time</p>
                            <h4 className="text-xl font-bold">Java Developer</h4>
                            <p>We need a Java Developer for our team...</p>
                            <h5 className="text-blue-600">$100 / Hour</h5>
                            <p className="text-blue-600 mb-2">Location: Boston</p>
                            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Details</a>
                        </div>
                        <div className="bg-white p-6 shadow rounded">
                            <p className="text-gray-500">Part-Time</p>
                            <h4 className="text-xl font-bold">Python Developer</h4>
                            <p>We need a skilled Python Developer...</p>
                            <h5 className="text-blue-600">$200 / Hour</h5>
                            <p className="text-blue-600 mb-2">Location: Virginia</p>
                            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Details</a>
                        </div>
                        <div className="bg-white p-6 shadow rounded">
                            <p className="text-gray-500">Contract</p>
                            <h4 className="text-xl font-bold">Laravel Developer</h4>
                            <p>We need a Back-end Laravel Developer...</p>
                            <h5 className="text-blue-600">$100 / Hour</h5>
                            <p className="text-blue-600 mb-2">Location: Washington</p>
                            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Details</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jobs
