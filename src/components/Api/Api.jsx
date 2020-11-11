import React, { Fragment, useEffect, useState } from 'react'
import '../Page/page.scss'
import './api.scss'

export default function Api() {

    const [link, setLink] = useState({
        url: ''
    })

    const [linkToShort, setLinkToShort] = useState('')

    let { url } = link

    const handleSubmit = (e) => {
        e.preventDefault()

        setLinkToShort(url)

        setLink({
            url: ''
        })
    }

    const handleChange = (e) => {
        setLink({
            [e.target.name] : e.target.value
        })
    }



    useEffect(() =>{

        const apiCall = () =>{

        }

    },[linkToShort])


    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Shorten a link here..."
                    name="url"
                    value={url}
                    onChange={handleChange}
                />
                <input
                    className="GetStartedBtn btnShorten"
                    type="submit"
                    value="Shorten It"
                />
            </form>
        </Fragment>
    )
}
