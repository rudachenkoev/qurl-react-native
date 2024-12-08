import CustomButton from '@/components/CustomButton'
import { Contact } from '@/types/type'
import * as Contacts from 'expo-contacts'

interface ContactsSyncProps {
  onSuccess?: (contacts: Contact[]) => void
}

interface Birthday {
  year: number
  month: number
  day: number
}

const ContactsSync = ({ onSuccess }: ContactsSyncProps) => {
  const getUserContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync()
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Birthday, Contacts.Fields.Name]
      })

      const contactsWithBirthday = data
        .filter((contact): contact is Contacts.Contact & { id: string; birthday: Birthday } => {
          return !!(contact.birthday && contact.id && contact.name)
        })
        .map(({ id, name, birthday }) => {
          const month = String(birthday.month + 1).padStart(2, '0')
          const day = String(birthday.day).padStart(2, '0')
          return {
            id,
            name,
            birthday: `${birthday.year}-${month}-${day}`
          }
        })

      if (onSuccess) {
        onSuccess(contactsWithBirthday)
      }
    }
  }

  return <CustomButton label="Synchronize contacts" className="mt-3" onPress={getUserContacts} />
}

export default ContactsSync
