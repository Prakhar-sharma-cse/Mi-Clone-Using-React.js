import React, { useState, useEffect } from 'react'
import '../styles/navOptions.css'
import NavCard from './NavCard.js'

const NavbarOptions = ({ miPhones, redmiPhones, tv, laptops, fitness, home, audio, accessories }) => {

    const [miPhonesToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
    const [tvToggle, setTVToggle] = useState(false);
    const [laptopsToggle, setLaptopsToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    useEffect(() => {

        if (window.location.pathname === "/miphones") {
            return setMiPhoneToggle(true)
        }

        if (window.location.pathname === "/redmiphones") {
            return setRedmiPhonesToggle(true)
        }

        if (window.location.pathname === "/tv") {
            return setTVToggle(true)
        }

        if (window.location.pathname === "/laptops") {
            return setLaptopsToggle(true)
        }

        if (window.location.pathname === "/fitness") {
            return setFitnessToggle(true)
        }

        if (window.location.pathname === "/home") {
            return setHomeToggle(true)
        }

        if (window.location.pathname === "/audio") {
            return setAudioToggle(true)
        }

        if (window.location.pathname === "/accessories") {
            return setAccessoriesToggle(true)
        }
    }, [])


    return (


        <div className="navOptions">

            {
                miPhonesToggle ? miPhones.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

            {
                redmiPhonesToggle ? redmiPhones.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

            {
                tvToggle ? tv.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

            {
                laptopsToggle ? laptops.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

            {
                fitnessToggle ? fitness.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

            {
                homeToggle ? home.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

            {
                audioToggle ? audio.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

            {
                accessoriesToggle ? accessories.map((item, index) => (
                    <NavCard key={index} name={item.name} price={item.price} image={item.image} />
                )) : null
            }

        </div>
    )
}

export default NavbarOptions
