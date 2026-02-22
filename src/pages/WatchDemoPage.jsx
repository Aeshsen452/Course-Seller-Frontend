import DemoVideo from "../assets/video/dummy-video.mp4"
const WatchDemo = () =>{
    return (
        <div className="w-full h-full p-10 flex justify-center items-center">     
        <video src="https://player.cloudinary.com/embed/?cloud_name=dyhrd2zdv&public_id=dummy-video_a6apbm&profile=cld-default" controls autoPlay muted alt="Demo-Video" className="w-full h-[420px]"/>
         </div>
    )
}

export default WatchDemo