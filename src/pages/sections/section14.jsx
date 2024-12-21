import React, { useState } from "react";

const Section14 = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const toggleCollapse = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <React.Fragment>
            <div className="relative ml-16 w-[1px] h-[100px] bg-black"></div>

            <section className="select-none relative w-screen overflow-hidden min-h-[70vh] px-16 mt-[44px] flex flex-col z-[99]">
                <h3 
                    className="text-[54px]">
                    All Your Questions Answered
                </h3>
                <p className="select-none text-lg text-gray-500">
                    Frequently Asked Questions by our customers
                </p>

                {/* First FAQ */}
                <div className="mt-12">
                    <div
                        className="text-[16px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(1)}
                    >
                        How long does the process take?
                    </div>
                    <div
                        className={`${
                            activeIndex === 1 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[16px] text-black leading-loose">
                            <p>
                                The process for wedding planning typically takes
                                a few months, depending on the complexity of
                                your wedding. The full coordination, from
                                planning to execution, can take 1 to 3 months.
                                For decorations and day-of coordination, our
                                team is available to help manage everything on
                                your big day, ensuring a smooth and memorable
                                event.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second FAQ */}
                <div>
                    <div
                        className="text-[16px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(2)}
                    >
                        Can the design be customized?{" "}
                    </div>
                    <div
                        className={`${
                            activeIndex === 2 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[16px] text-black leading-loose">
                            <p>
                                Yes, both our wedding organizing services and
                                digital invitations are fully customizable. We
                                work with you to tailor every detail to match
                                your vision, from the event design to the
                                invitations. Whether you have a specific theme
                                in mind or want something unique, we are here to
                                bring your ideas to life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third FAQ */}
                <div>
                    <div
                        className="text-[16px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(3)}
                    >
                        Can revisions be made if there are any mistakes?
                    </div>
                    <div
                        className={`${
                            activeIndex === 3 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[16px] text-black leading-loose">
                            <p>
                                Absolutely! We understand that adjustments are
                                sometimes necessary. Whether it's a detail in
                                your wedding plans or a correction to the
                                digital invitation, we're happy to make
                                revisions until everything is exactly how you
                                envision it. We ensure your satisfaction with
                                our services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fourth FAQ */}
                <div>
                    <div
                        className="text-[16px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(4)}
                    >
                        Is there a warranty{" "}
                    </div>
                    <div
                        className={`${
                            activeIndex === 4 ? "flex" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[16px] text-black leading-loose">
                            <p>
                                Yes, we offer guarantees for our services. If
                                there are any issues with our wedding organizing
                                services or digital invitations, we will address
                                them promptly. Our goal is to ensure your
                                complete satisfaction with the services we
                                provide, and we stand by the quality of our
                                work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fifth FAQ */}
                <div>
                    <div
                        className="text-[16px] border border-black py-5 mb-4 w-full text-left px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                        onClick={() => toggleCollapse(5)}
                    >
                        My wedding is still far away, can I register now?{" "}
                    </div>
                    <div
                        className={`${
                            activeIndex === 5 ? "block" : "hidden"
                        } mb-4 mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md`}
                    >
                        <div className="text-[16px] text-black leading-loose">
                            <p>
                                Yes, you can register for our wedding organizing
                                services and digital invitations now. We
                                recommend booking early to ensure availability
                                and to give you time to plan and make
                                adjustments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Section14;
