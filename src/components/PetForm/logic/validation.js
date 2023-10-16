export default function validateForm(petData) {
        const errors = {};

        if (!petData.name || petData.name.length < 3) {
                errors.name = 'Name must have at least 3 characters'
        }

        if (!petData.breed || petData.breed.length < 3) 
                errors.breed = 'Breed must have at least 3 characters'
        

        if (!petData.dateOfBirth || new Date(petData.dateOfBirth) > new Date())
                errors.dateOfBirth = 'Date of birthday must be a valid date'

        return errors;
}
