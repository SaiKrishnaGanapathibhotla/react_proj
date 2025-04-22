import { useState } from 'react'

function Work() {

    return (
        <>
            <section className="py-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 shadow rounded">
                    <h2 className="text-2xl font-bold">Find Work</h2>
                    <p>Browse thousands of listed positions and contact employers directly.</p>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded mt-3 inline-block">Browse Positions</a>
                </div>
                <div className="bg-white p-6 shadow rounded">
                    <h2 className="text-2xl font-bold">List a Position</h2>
                    <p>Post a job and find the best professionals.</p>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded mt-3 inline-block">List Work</a>
                </div>
            </section>
 
        </>
    )
}

export default Work
