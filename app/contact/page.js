"use client";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.post("api/mailer", {
                to: "eliasitisme@gmail.com",
                subject: `New message from: ${formData.email} (${formData.name})`,
                text: formData.message,
            });

            if (response.status === 200) {
                alert("Your message has been sent!");
                setFormData({ name: "", email: "", message: "" }); // Clear form
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setErrorMessage("Failed to send your message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Get In Touch
                    </p>
                </div>
                <div className="mt-10 max-w-lg mx-auto">
                    <form className="grid grid-cols-1 gap-6" onSubmit={sendEmail}>
                        <div>
                            <label
                                htmlFor="name"
                                className=" py-2 block text-sm font-medium text-gray-200"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className=" py-2 block w-full bg-gray-700 sm:text-sm border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-ring-slate-600"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className=" py-2 block text-sm font-medium text-gray-200"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="py-2 block w-full bg-gray-700 sm:text-sm border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-ring-slate-600"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className=" py-2 block text-sm font-medium text-gray-200"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className=" py-2 block w-full bg-gray-700 sm:text-sm border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-ring-slate-600"
                                required
                            ></textarea>
                        </div>
                        {errorMessage && (
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        )}
                        <div>
                            <button
                                type="submit"
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-cyan-600 hover:bg-cyan-400"
                                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-300 hover:text-white`}
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
