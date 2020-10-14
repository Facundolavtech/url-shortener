import React, {Fragment} from 'react'
import '../Page/page.scss'
import './api.scss'

export default function Api() {
    return (
        <Fragment>
            <form>
                <input type="text" placeholder="Shorten a link here..."/>
                <input class="GetStartedBtn btnShorten" type="submit" value="Shorten It"/>
            </form>
        </Fragment>
    )
}
