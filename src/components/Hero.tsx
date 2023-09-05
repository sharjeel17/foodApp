import burgervid from '../assets/production_id_4676465 (2160p).mp4'

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
            {/* OVERLAY */}
            <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40
            flex flex-col justify-center">
                <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl 
                lg:text-7xl font-bold"> The <span className="text-orange-400"> Best </span></h1>
                <h1 className='pl-16 text-3xl sm:text-5xl md:text-6xl 
                lg:text-7xl font-bold'> <span className="text-orange-400"> Foods </span> Delivered </h1>
            </div>
            <video src={burgervid} autoPlay loop muted className="w-full max-h-[500px] object-cover" />
        </div>
    </div>
  )
}

export default Hero;