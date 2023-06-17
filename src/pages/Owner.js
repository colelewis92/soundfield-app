import BackButton from '../components/BackButton'
import image1 from '../media/steve-7_downsized.jpg'
import image2 from '../media/steve-4_downsized.jpg'
import image3 from '../media/steve-6_downsized.jpg'
import image4 from '../media/steve-1_downsized.jpg'
import image5 from '../media/steve-8_downsized.jpg'

export default function Owner() {
  return (
    <section>
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light sm:text-lg text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Steve Bodner - Audio Engineer</h2>
          <p class="mb-4">Steve Bodner is owner/operator at SRS and has hobbied and dabbled in the recording arts since around 1978. He held previous jobs as electronics technician, service technician, audio engineer, jingle writer and local musician. He had audio recording training at the Recording Workshop (Winter '92) and for many years has hobbied in home hi-fi, home-made "stomp-boxes", and guitar and amplifier modifications.</p>
        </div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
          <img class="w-full rounded-lg" src={image1} alt="steve 1" />
          <img class="w-full lg:mt-10 sm:mt-0 rounded-lg" src={image2} alt="steve 2" />
        </div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 lg:-mt-16">
          <img class="mt-4 w-full lg:mt-10 rounded-lg" src={image3} alt="steve 3" />
          <img class="w-full rounded-lg" src={image4} alt="steve 4" />
        </div>
        <div>
          <img class="mt-4 w-full rounded-lg lg:mt-0 " src={image5} alt="steve 5" />
        </div>

        <div className="lg:pt-0 lg:pb-0 pt-4">
          <BackButton />
        </div>
      </div>
    </section>
  )
}