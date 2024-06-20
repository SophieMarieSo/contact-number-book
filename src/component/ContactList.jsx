import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

export default function ContactList() {
    const [filteredList, setFilteredList] = useState([]);
    const contactList = useSelector((state) => state.contactList);
    const keyword = useSelector((state) => state.keyword);

    useEffect(() => {
        if (keyword !== '') {
            const list = contactList.filter((item) =>
                item.name.includes(keyword)
            );

            setFilteredList(list);
        } else {
            setFilteredList(contactList);
        }
    }, [keyword, contactList]);

    return (
        <div style={{ marginTop: 32 }}>
            <SearchBox />
            <h5>TOTAL: {filteredList.length}</h5>
            {filteredList.map((contact) => (
                <ContactItem contact={contact} />
            ))}
        </div>
    );
}
