import React, { useState, useEffect } from 'react';

function NavBar () {


return (
    <>
    <div className="d-flex">
        <Nav className="flex-column bg-dark vh-100 p-3" style={{width: "250px" }}>
            <Nav.Link href="#" className="text-light">Home</Nav.Link>
        </Nav>
    </div>
    </>
)
}