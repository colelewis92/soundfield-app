import BackButton from "../components/BackButton"
import ClientsModal from "../components/ClientsModal"
import image1 from "../media/lyd-150_downsized.jpg"

export default function Clientele() {
  return (
    <section>
      <div class="container mt-24 mx-auto md:px-6">
        <section class="mb-32">
          <div class="container mx-auto text-center lg:text-left xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
              <div class="mb-12 lg:mb-0">
                <div
                  class="relative z-[1] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] bg-[hsla(0,0%,5%,0.55)] shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 class="mb-8 text-3xl font-bold text-white">Clientele</h2>
                  <p class="mb-8 pb-2 text-neutral-300 lg:pb-0">
                    No two clients are the same and no single client will record the same music exactly the same way more than once. Every client, song, and sound has its own stamp of individuality and SRS hopes to preserve that as an ideal, and to help create new and interesting songs and sounds.
                  </p>

                  <p class="mb-0 text-neutral-300">
                    We have provided service to hundreds of clients and repeat clients including bands, solo singers and instrumentalists, live concert recordings, churches and choirs. We can make transfers of older formats, such as reel-to-reel, cassette, vinyl, DAT, ADAT or compressed digital formats to another format, editing and mastering for dance studio performances, and so on. Ask us about any of your special recording needs!
                  </p>

                  <ClientsModal />
                </div>
              </div>

              <div>
                <img src={image1} class="w-full rounded-lg shadow-lg shadow-black/20" alt="mic" />
              </div>
            </div>
          </div>
        <div className="pb-0 pt-4 lg:pt-0">
          <BackButton />
        </div>
        </section>
      </div>
    </section>


  )
}