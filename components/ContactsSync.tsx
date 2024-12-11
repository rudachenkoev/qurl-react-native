import CustomButton from '@/components/CustomButton'
import * as Contacts from 'expo-contacts'
import { Contact } from '@/types/type'

interface ContactsSyncProps {
  onSuccess?: (contacts: Contact[]) => void
}

const ContactsSync = ({ onSuccess }: ContactsSyncProps) => {
  const getUserContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync()
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Birthday, Contacts.Fields.Name]
      })

      const contacts = data
        .filter(({ id, name }) => id && name)
        .map(({ id, name, birthday }) => {
          if (!birthday) {
            return { id, name, birthday: '' }
          }

          const { year, month, day } = birthday
          return {
            id,
            name,
            birthday: `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          }
        })


      if (onSuccess) {
        onSuccess(contacts)
      }
    }
  }

  return <CustomButton label="Synchronize contacts" className="mt-3" onPress={getUserContacts} />
}

export default ContactsSync
