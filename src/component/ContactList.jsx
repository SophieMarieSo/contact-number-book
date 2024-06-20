import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

export default function ContactList() {
    const contactList = useSelector((state) => state.contactList);
    return (
        <div style={{ marginTop: 32 }}>
            <SearchBox />
            {contactList.map((contact) => (
                <ContactItem contact={contact} />
            ))}
        </div>
    );
}
