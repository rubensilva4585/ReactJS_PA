import { Link } from "react-router-dom";

export default function PetListRow({ pet, handleDetelePet }) {
        return (

                <tr>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                        {pet.name}
                                </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                        {pet.breed}
                                </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                        {pet.dateOfBirth}
                                </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <Link to={"/pets/" + pet.id} className="text-indigo-600 hover:text-indigo-900">
                                        Details/Edit
                                </Link>
                                <a
                                        href="#"
                                        onClick={() => { handleDetelePet(pet.id) }}
                                >
                                        Delete
                                </a>
                        </td>
                </tr>
        )
}
