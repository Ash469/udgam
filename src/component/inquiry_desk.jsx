import React, { useState } from 'react';

const FAQSection = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        { question: "What is the purpose of this application?", answer: "This application is designed to help users manage inquiries efficiently." },
        { question: "How do I create an account?", answer: "You can create an account by clicking on the 'Sign Up' button on the homepage." },
        { question: "What should I do if I forget my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page." },
        { question: "How can I contact support?", answer: "You can contact support via the 'Contact Us' page or by emailing support@example.com." },
        { question: "Is my data secure?", answer: "Yes, we take data security very seriously and implement various measures to protect your information." },
        { question: "Can I delete my account?", answer: "Yes, you can delete your account by going to the account settings and selecting 'Delete Account'." },
    ];

    const sharedStyles = {
        fontFamily: '"PP Mori", sans-serif',
        fontWeight: '400',
        fontSize: '18px',
        letterSpacing: '0.4px',
        textTransform: 'capitalize',
    };

    return (
        <div className="w-full pt-2 p-12 ">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="mb-4 border border-gray-300 rounded overflow-hidden transition-all duration-300"
                >
                    <button
                        className="w-full text-left py-3 px-5 rounded focus:outline-none flex items-center justify-between"
                        onClick={() => toggle(index)}
                        style={{
                            ...sharedStyles,
                            backgroundColor: open === index ? '#222' : '#F4F5F6',
                            color: open === index ? '#fff' : '#222',
                            transition: 'background-color 0.3s, color 0.3s',
                        }}
                    >
                        <span>{faq.question}</span>
                        <span
                            style={{
                                fontSize: '24px',
                                fontWeight: '800',
                            }}
                        >
                            {open === index ? '×' : '+'}
                        </span>
                    </button>
                    <div
                        className="transition-max-height duration-300 ease-in-out"
                        style={{
                            maxHeight: open === index ? '300px' : '0',
                            padding: open === index ? '15px' : '0',
                            backgroundColor: '#F4F5F6',
                            color: '#222',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease, padding 0.3s ease',
                            ...sharedStyles,
                        }}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;
