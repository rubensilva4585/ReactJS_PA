import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPetById } from "../../services/main/pets";

export default function PetForm() {
        const { pet_id } = useParams();
        const [petData, setPetData] = useState(null)
        const [isLoading, setIsLoading] = useState(true)
        const [hasError, setHasError] = useState(false)

        const [pageState, setPageState] = useState("view"); // "view" | "edit"


        const handleSubmit = () => {
                return (e) => {
                        e.preventDefault();

                        if(pageState === "view")
                        {
                                setPageState("edit");
                        }
                        else
                        {
                                setPageState("view");
                        }
                }
        }

        useEffect(() => {
                const abortController = new AbortController();

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

                return () => {
                        abortController.abort();
                };
        }, [])

        return (

                <section className="h-screen bg-gray-100/50">
                        <div className="container max-w-2xl mx-auto  md:w-3/4 py-10 ">
                                <div className="flex flex-row justify-between w-full mb-8">
                                        <h2 className="text-2xl leading-tight">
                                                Pets Details
                                        </h2>
                                        {/* <div className="text-end">
                                                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                                                {pageState === "view" ? "Edit" : "Save"}
                                                        </button>
                                                </form>
                                        </div> */}
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
                                                                                                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                                                                        type="text"
                                                                                                                        id="name"
                                                                                                                        value={petData?.name}
                                                                                                                        placeholder="Name"
                                                                                                                        disabled={pageState === "view"} />
                                                                                                        </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                        <div className=" relative ">
                                                                                                                <input
                                                                                                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                                                                        type="text"
                                                                                                                        id="breed"
                                                                                                                        value={petData?.breed}
                                                                                                                        placeholder="Breed"
                                                                                                                        disabled={pageState === "view"} />
                                                                                                        </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                        <div className=" relative ">
                                                                                                                <input
                                                                                                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                                                                        type="text"
                                                                                                                        id="bob"
                                                                                                                        value={petData?.dateOfBirth}
                                                                                                                        placeholder="Date of Birthday" 
                                                                                                                        disabled={pageState === "view"} />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </>
                                                                                )
                                                                        )
                                                                }
                                                        </div>
                                                </div>
                                                <hr />
                                                <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                                        <button
                                                                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                                type="submit">
                                                                {pageState === "view" ? "Edit" : "Save"}
                                                        </button>
                                                </div>
                                        </div>
                                </form>
                        </div >
                </section >

        )
}
