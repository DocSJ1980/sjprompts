"use client";
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/profile'
const MyProfile = () => {
    const { data: session } = useSession()
    const [posts, setPosts] = useState([])
    const router = useRouter()
    useEffect(() => {
        const fetchPosts = async () => {
            console.log('%cpage.jsx line:12 session', 'color: #007acc;', session);
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json()
            setPosts(data)
            console.log(posts)
        }
        if (session?.user.id) fetchPosts()
    }, [])


    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async () => {

    }

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}

        />
    )
}

export default MyProfile