import { db } from '@/server/db'
import { auth,clerkClient} from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

// store the user in db after auth and redirect to dashboard
const SyncUser = async () => {
    const{userId} = await auth()

    if(!userId){
        throw new Error("User not found")
    }
    
    const client =  await clerkClient();
    const user = await client.users.getUser(userId)
    console.log(user);
    if(!user.emailAddresses[0]?.emailAddress){
        throw new Error("Email not found")
    }

    await db.user.upsert({
        where: {email: user.emailAddresses[0]?.emailAddress},

        update:{
            firstName: user.firstName,
            lastName: user.lastName,
            imageUrl: user.imageUrl,
        },

        create:{
            email: user.emailAddresses[0]?.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            imageUrl: user.imageUrl,
            credits: 150,
        }



    })
    return redirect('/dashboard');

   
}

export default SyncUser