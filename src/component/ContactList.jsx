import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

export default function ContactList() {
    return (
        <div style={{ marginTop: 32 }}>
            <SearchBox />
            <ContactItem />
        </div>
    );
}
