import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "sjPrompts",
    description: "Unleash Your Creativity with AI-Powered Prompts: Generate, Share, and Inspire!"
}


const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className='main'>
                <div className='gradient'></div>
            </body>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </html>
    )
}

export default RootLayout