import PropTypes from "prop-types"; // Add this import
import { Cancel01Icon } from "hugeicons-react";
import ThreeDModel from "./model";

const ModalBuild = ({ handleClose }) => {
    return (
        <div className="fixed left-0 top-0 w-[100vw] overflow-hidden h-[100vh] z-[9999999999]">
            <div className="w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
                <div className="w-[70vw] h-[70vh] overflow-hidden flex">
                    <div className="relative rounded-[20px] top-[-12px] bg-white items-end h-[86vh] w-[30%] shadow-md flex pt-20 justify-center">
                        <ThreeDModel
                            url={"/hotel3.glb"}
                            speed={1}
                            intensity={0.8}
                            scaleCustom={[0.045, 0.045, 0.045]}
                        />
                    </div>
                    <div className="w-[70%] h-full">
                        <div className="relative w-full h-[60%] bg-white p-8 text-black">
                            <h2 className="text-[24px] mb-2">
                                Wedding Venue Rental
                            </h2>
                            <p className="text-[12px] leading-loose text-slate-500">
                                Our building is available for your dream wedding                            
                            </p>
                            <div className="w-full ml-4 mt-4">
                                <ul>
                                    <li className="mb-3 list-disc text-[12px] text-slate-500">
                                        1,200 guests for a standing reception
                                    </li>
                                    <li className="mb-3 list-disc text-[12px] text-slate-500">
                                        Photography and Videography Services
                                    </li>
                                    <li className="mb-3 list-disc text-[12px] text-slate-500">
                                        600 guests for a seated banquet.
                                    </li>
                                    <li className="mb-3 list-disc text-[12px] text-slate-500">
                                        1,500 square meters
                                    </li>
                                </ul>
                            </div>

                            <div
                                onClick={() => handleClose()}
                                className="absolute cursor-pointer active:scale-[0.96] hover:brightness-[90%] duration-100 rounded-md right-[16px] top-[16px] bg-red-500 text-white w-[40px] h-[40px] shadow-md flex items-center justify-center"
                            >
                                <Cancel01Icon className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="w-max border-r border-b border-white h-[20%] text-white text-[30px] flex items-center px-16">
                            <p>LuvlyWed Prymer, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Prop validation
ModalBuild.propTypes = {
    handleClose: PropTypes.func.isRequired, // Adding validation for handleClose
};

export default ModalBuild;
