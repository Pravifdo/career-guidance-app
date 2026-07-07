import React from "react";

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            {/* Hero Section */}
            <section className="bg-blue-800 py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="mb-6 text-5xl font-bold">About CareerHub</h1>
                    <p className="mx-auto max-w-3xl text-lg text-blue-100">
                        CareerHub is your trusted platform for academic writing,
                        professional career services, internship opportunities, and student
                        success. We help students and graduates achieve their academic and
                        career goals with confidence.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-gray-900">
                            Who We Are
                        </h2>
                        <p className="mb-4 text-gray-600 leading-8">
                            CareerHub is dedicated to helping university students and fresh
                            graduates build successful careers. We provide high-quality
                            academic support, professional CV writing, internship guidance,
                            and career development resources.
                        </p>

                        <p className="text-gray-600 leading-8">
                            Our experienced team ensures every service is delivered with
                            quality, professionalism, and attention to detail.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-8 shadow-lg">
                        <h2 className="mb-6 text-3xl font-bold text-blue-800">
                            Our Mission
                        </h2>

                        <p className="text-gray-600 leading-8">
                            Our mission is to empower students and professionals by providing
                            reliable educational support and career development services that
                            inspire confidence and long-term success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="mb-10 text-center text-4xl font-bold text-gray-900">
                        What We Offer
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Professional CV Writing",
                            "Cover Letter Writing",
                            "Final Year Project Reports",
                            "Project Proposals",
                            "Assignment Writing",
                            "Internship Opportunities",
                        ].map((service) => (
                            <div
                                key={service}
                                className="rounded-xl bg-gray-50 p-6 shadow transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <h3 className="mb-3 text-xl font-semibold text-blue-800">
                                    {service}
                                </h3>

                                <p className="text-gray-600">
                                    High-quality service delivered by experienced professionals
                                    with quick turnaround times.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="bg-blue-800 py-16 text-white">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-4">
                    <div>
                        <h3 className="text-5xl font-bold">500+</h3>
                        <p className="mt-2 text-blue-100">Happy Students</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">100+</h3>
                        <p className="mt-2 text-blue-100">CVs Completed</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">50+</h3>
                        <p className="mt-2 text-blue-100">Internship Partners</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">98%</h3>
                        <p className="mt-2 text-blue-100">Client Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 text-center shadow-xl">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                        Ready to Start Your Journey?
                    </h2>

                    <p className="mb-8 text-gray-600">
                        Join CareerHub today and unlock professional services that help you
                        achieve academic excellence and career success.
                    </p>

                    <a
                        href="/contact"
                        className="rounded-lg bg-blue-800 px-8 py-4 text-white transition hover:bg-blue-900"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;