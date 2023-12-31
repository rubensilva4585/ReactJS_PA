import { useEffect, useState } from "react"
import { deletePet, getAllPets } from "../../services/main/pets"
import PetListRow from "./PetListRow"
import { Link } from "react-router-dom"

export default function PetList() {
        const [petsData, setPetsData] = useState(null)
        const [isLoading, setIsLoading] = useState(true)
        const [hasError, setHasError] = useState(false)
        const [filterName, setFilterName] = useState("")

        const handleDetelePet = (petId) => {
                try {
                        deletePet(petId).then((data) => {
                                setPetsData(petsData.filter((pet) => pet.id !== petId));
                        })
                        alert("Pet apagado com sucesso");
                } catch (error) {
                        alert("Erro ao apagar pet" + error);
                }
        }

        useEffect(() => {
                const abortController = new AbortController();

                try {
                        getAllPets().then((data) => {
                                setPetsData(data);
                        })
                } catch (error) {
                        setHasError(true);
                        alert("Erro ao carregar pets" + error);
                } finally {
                        setIsLoading(false);
                }

                return () => {
                        abortController.abort();
                };
        }, [])

        return (
                <div className="container max-w-3xl px-4 mx-auto sm:px-8">
                        <div className="py-8">
                                <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                                        <h2 className="text-2xl leading-tight">
                                                Pets List
                                        </h2>
                                        <div className="text-end">
                                                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                                        <div className=" relative ">
                                                                <input
                                                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                        type="text"
                                                                        id="filterName"
                                                                        onChange={(e) => {
                                                                                setFilterName(e.target.value)
                                                                        }}
                                                                        placeholder="Search..." />
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                                                <table className="min-w-full leading-normal">
                                                        <thead>
                                                                <tr>
                                                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                                Name
                                                                        </th>
                                                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                                Breed
                                                                        </th>
                                                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                                DoB
                                                                        </th>
                                                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                        </th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                {isLoading &&
                                                                        Array.from({ length: 6 }).map((_, i) => (
                                                                                <tr className="">
                                                                                        {Array.from({ length: 4 }).map((_, i) => (
                                                                                                <td className="h-14 bg-gray-200 rounded animate-pulse" />
                                                                                        ))}
                                                                                </tr>
                                                                        ))
                                                                }
                                                                {hasError && <div>Something went wrong</div>}
                                                                {petsData && (
                                                                        petsData.filter((pet) => pet.name.toLowerCase().includes(filterName.toLowerCase())).map((pet) => (
                                                                                <PetListRow key={pet.id} pet={pet} detelePet={handleDetelePet} />
                                                                        ))
                                                                )}
                                                                <tr>
                                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                                        <Link to="/pets/new" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " type="submit">
                                                                                                Create Pet
                                                                                        </Link>
                                                                                </p>
                                                                        </td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                </div>
                        </div>
                </div>

        )
}
