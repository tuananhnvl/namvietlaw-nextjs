import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'

/* Compo & css */

import NavBar from '../component/Navbar'


export default function Document() {

    return (
        <div >
            <NavBar />
            <Head>
                <title>Document Legal</title>
                <meta name="Document Legal" content="NamVietLawCompany" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
