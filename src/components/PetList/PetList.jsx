import { getAllPets } from "../../services/main/pets"

export default function PetList() {

        return (
                <div class="container max-w-3xl px-4 mx-auto sm:px-8">
                        <div class="py-8">
                                <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
                                        <h2 class="text-2xl leading-tight">
                                                Pets List
                                        </h2>
                                        <div class="text-end">
                                                <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                                        <div class=" relative ">
                                                                <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                                                        </div>
                                                        <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                                                Filter
                                                        </button>
                                                </form>
                                        </div>
                                </div>
                                <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                                        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                                                <table class="min-w-full leading-normal">
                                                        <thead>
                                                                <tr>
                                                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                                Name
                                                                        </th>
                                                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                                Breed
                                                                        </th>
                                                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                                DoB
                                                                        </th>
                                                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                                        </th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>

                                                                <tr>
                                                                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                                        Admin
                                                                                </p>
                                                                        </td>
                                                                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                                        Admin
                                                                                </p>
                                                                        </td>
                                                                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                                        12/09/2020
                                                                                </p>
                                                                        </td>
                                                                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                                                        Edit
                                                                                </a>
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
