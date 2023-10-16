import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createOrUpdatePet, getPetById } from "../../services/main/pets";

export default function PetForm() {
        const { pet_id } = useParams();

        const [petData, setPetData] = useState(null)
        const [isLoading, setIsLoading] = useState(true)
        const [hasError, setHasError] = useState(false)
        const [valuesError, setValuesError] = useState({
                name: "",
                breed: "",
                dateOfBirth: ""
        });

        const [pageState, setPageState] = useState("view"); // "view" | "edit"
        const navigate = useNavigate();

        const handleChange = (e) => {
                const { name, value } = e.target;
                console.log(name, value);
                setPetData((prevValues) => ({ ...prevValues, [name]: value }));

        };

        const inputsValidation = () => {
                let isValid = true;

                setValuesError({
                        name: "",
                        breed: "",
                        dateOfBirth: ""
                });

                if (!petData.name || petData.name.length < 3) {
                        setValuesError((prevErrors) => ({
                                ...prevErrors,
                                name: 'Name must have at least 3 characters'
                        }));
                        isValid = false;
                }

                if (!petData.breed || petData.breed.length < 3) {
                        setValuesError((prevErrors) => ({
                                ...prevErrors,
                                breed: 'Breed must have at least 3 characters'
                        }));
                        isValid = false;
                }

                if (!petData.dateOfBirth || new Date(petData.dateOfBirth) > new Date()) {
                        setValuesError((prevErrors) => ({
                                ...prevErrors,
                                dateOfBirth: 'Date of birthday must be a valid date'
                        }));
                        isValid = false;
                }

                return isValid;
        }

        const handleSubmit = () => {
                return (e) => {
                        e.preventDefault();

                        if (pageState === "view") {
                                setPageState("edit");
                        }
                        else if (pageState === "edit") {
                                if (!inputsValidation())
                                        return;

                                try {
                                        createOrUpdatePet(petData).then((data) => {
                                                console.log(data);
                                                setPageState("view");
                                        })
                                } catch (error) {
                                        console.log(error);
                                }
                        }
                        else {
                                if (!inputsValidation())
                                        return;

                                try {
                                        createOrUpdatePet(petData).then((data) => {
                                                console.log(data);
                                                navigate('/pets');
                                        })
                                }
                                catch (error) {
                                        console.log(error);
                                }
                        }
                }
        }

        // Set Page

        useEffect(() => {
                const abortController = new AbortController();
                console.log(pet_id)
                if (pet_id === "new") {
                        setPetData({
                                name: "",
                                breed: "",
                                dateOfBirth: "",
                        })
                        setPageState("new")
                        setIsLoading(false)
                }
                else {
                        setPageState("view")

                        try {
                                getPetById(pet_id).then((data) => {
                                        console.log(data);
                                        setPetData(data);
                                })
                        } catch (error) {
                                setHasError(true);
                                console.log(error);
                        } finally {
                                setIsLoading(false);
                        }
                }


                return () => {
                        abortController.abort();
                };
        }, [])

        return (

                <section className="h-screen bg-gray-100/50">
                        <div className="container max-w-2xl mx-auto  md:w-3/4 py-10 ">
                                <div className="flex flex-row justify-between w-full mb-8">
                                        <h2 className="text-2xl leading-tight">
                                                {pageState === "view"
                                                        ? "Pet Details"
                                                        : pageState === "new"
                                                                ? "New Pet"
                                                                : "Edit Pet"}
                                        </h2>
                                </div>
                                <form className="shadow-md" onSubmit={handleSubmit()}>
                                        <div className="space-y-6 bg-white border-t-2 border-indigo-400 rounded-lg">
                                                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                                        <h2 className="max-w-sm mx-auto md:w-1/3">
                                                                Pet info
                                                        </h2>
                                                        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                                                {isLoading
                                                                        ? (
                                                                                Array.from({ length: 3 }).map((_, i) => (
                                                                                        <div className="h-10 bg-gray-200 rounded animate-pulse" />
                                                                                ))
                                                                        )
                                                                        : (
                                                                                petData && (
                                                                                        <>
                                                                                                <div>
                                                                                                        <div className=" relative ">
                                                                                                                <input
                                                                                                                        className={` rounded-lg border-transparent flex-1 appearance-none border ${valuesError.name ? 'border-red-500' : 'border-gray-200'} w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                                                                                                                        type="text"
                                                                                                                        id="name"
                                                                                                                        name="name"
                                                                                                                        value={petData?.name}
                                                                                                                        onChange={handleChange}
                                                                                                                        placeholder="Name"
                                                                                                                        disabled={pageState === "view"} />

                                                                                                                {valuesError.name && (
                                                                                                                        <p className="text-red-500 text-xs mt-1">{valuesError.name}</p>
                                                                                                                )}
                                                                                                        </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                        <div className=" relative ">
                                                                                                                <input
                                                                                                                        className={` rounded-lg border-transparent flex-1 appearance-none border ${valuesError.breed ? 'border-red-500' : 'border-gray-200'} w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                                                                                                                        type="text"
                                                                                                                        id="breed"
                                                                                                                        name="breed"
                                                                                                                        value={petData?.breed}
                                                                                                                        onChange={handleChange}
                                                                                                                        placeholder="Breed"
                                                                                                                        disabled={pageState === "view"} />

                                                                                                                {valuesError.breed && (
                                                                                                                        <p className="text-red-500 text-xs mt-1">{valuesError.breed}</p>
                                                                                                                )}
                                                                                                        </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                        <div className=" relative ">
                                                                                                                <input
                                                                                                                        className={`rounded-lg border-transparent flex-1 appearance-none border ${valuesError.dateOfBirth ? 'border-red-500' : 'border-gray-200'} w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                                                                                                                        type="date"
                                                                                                                        id="dateOfBirth"
                                                                                                                        name="dateOfBirth"
                                                                                                                        value={petData?.dateOfBirth}
                                                                                                                        onChange={handleChange}
                                                                                                                        placeholder="Date of Birthday"
                                                                                                                        disabled={pageState === "view"} />

                                                                                                                {valuesError.dateOfBirth && (
                                                                                                                        <p className="text-red-500 text-xs mt-1">{valuesError.dateOfBirth}</p>
                                                                                                                )}
                                                                                                        </div>
                                                                                                </div>
                                                                                        </>
                                                                                )
                                                                        )
                                                                }
                                                        </div>
                                                </div>
                                                <hr />
                                                <div className="w-full px-4 pb-4 text-gray-500 flex justify-between items-center">
                                                        <Link to="/"
                                                                className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                                type="submit">
                                                                Back To Pets List
                                                        </Link>
                                                        <button
                                                                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                                type="submit">
                                                                {pageState === "view"
                                                                        ? "Edit"
                                                                        : pageState === "new"
                                                                                ? "Create"
                                                                                : "Save"}
                                                        </button>
                                                </div>
                                        </div>
                                </form>
                        </div >
                </section >

        )
}
