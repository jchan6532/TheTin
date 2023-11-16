import '../stylesheets/services.css'
import { Card, NavItem } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Services = () => {
    useEffect(() => {
        equalizeCardSizes();
    }, []);

    const services = [
        {
            name: "Monthly Cloud bookkeeping",
            specialities: [
                "Bank reconciliation",
                "Accounts payable",
                "Accounts receivable",
                "Inventory management",
                "Receipt management"
            ]
        },
        {
            name: "Accounting system setup",
            specialities: [
                "Bank reconciliation",
                "Accounts payable"
            ]
        },
        {
            name: "service three",
            specialities: [
                "Bank reconciliation",
                "Accounts payable"
            ]
        },
        {
            name: "service four",
            specialities: [
                "Bank reconciliation",
                "Accounts payable"
            ]
        },
        {
            name: "service five",
            specialities: [
                "Bank reconciliation",
                "Accounts payable"
            ]
        },
        {
            name: "service six",
            specialities: [
                "Bank reconciliation",
                "Accounts payable"
            ]
        }
    ];

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '10px 130px'}}>
            {services.map((service, index) => (
                <Card className='cardStyle' key={index} onClick={() => alert("clicked")}>
                    <Card.Body>
                        <Card.Title style={{fontSize: '25px', alignItems: 'center', textAlign: 'center'}}>
                            {service.name}
                        </Card.Title>
                        <Card.Text style={{fontSize: '20px'}}>
                            {service.specialities.map((speciality) => (
                                <ul className='services-list'>
                                    <li>{speciality}</li>
                                </ul>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

function equalizeCardSizes() {
    // Get all the cards
    const cards = document.querySelectorAll('.cardStyle');

    let maxHeight = 0;
    let maxWidth = 0;

    // Find the card with the largest height and width
    cards.forEach((card) => {
        if (card.offsetHeight > maxHeight) {
            maxHeight = card.offsetHeight;
        }
        if (card.offsetWidth > maxWidth) {
            maxWidth = card.offsetWidth;
        }
    });

    // Set the height and width of all cards to match the largest one
    cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
        card.style.width = `${maxWidth}px`;
    });
}

export default Services;