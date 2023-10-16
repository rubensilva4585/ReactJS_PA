import { Link } from "react-router-dom";

export default function PetListRow({ pet, detelePet }) {
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
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 flex gap-2">
                                <Link to={"/pets/" + pet.id} className="text-indigo-600 hover:text-indigo-900">
                                        Details/Edit
                                </Link>
                                <a
                                        href="#"
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => { detelePet(pet.id) }}
                                >
                                        Delete
                                </a>
                        </td>
                </tr>
        )
}
