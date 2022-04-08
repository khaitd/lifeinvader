import { useEffect, useState } from "react";


const Timeline = () => {
    const [posts, setPosts] = useState([])
    useEffect(async () => {
       // console.log("rendering timeline")
        // let res = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
        // let req = await res.json()
        // setPosts(res)
        
        //IIFE
        (async () => {
            let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
            let res = await req.json()
            setPosts(res)
        })()
     
   
    }, [])

    return (
        <div>


            <h2> Timeline </h2>
            {
                posts.map((element) => {
                    return (
                        <div>
                           <p> Post by {element.username}</p>
                           <p> {element.content}</p>
                        </div>
                    )
                })


            }
           
        </div>
    )
}

export default Timeline;