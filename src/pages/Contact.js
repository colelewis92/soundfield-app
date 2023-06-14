
import React, { useRef } from 'react'
import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'



const Contact = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* 
    Do something here !
    */
  }

  return (
    <div className="relative mx-auto w-full max-w-7xl text-white">
      <div className="grid grid-cols-2">
        
        {/* :MAP CONTAINER */}
        <div className="order-1 col-span-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.890676074644!2d-81.74523242278094!3d39.98854838158699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8837c70e850a63b3%3A0x8338e39e6f26c92c!2s155%20Old%20Rix%20Mills%20Rd%2C%20New%20Concord%2C%20OH%2043762!5e0!3m2!1sen!2sus!4v1685838757031!5m2!1sen!2sus" 
            title="map" scrolling="no" frameborder="0"
            width="100%" height="300px"
            className="" 
            loading="lazy" 
          />
        </div>

        {/* :CONTACT INFOS CONTAINER */}
        <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            {/* ::Title Contact Us */}
            <h2 className="text-4xl font-oswald uppercase">Contact us</h2>
            {/* ::Text */}
            {/* ::Email contact */}
            <a href="mailto:steve@soundfieldrecording.com" className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
              <EnvelopeIcon className="mr-2 w-5 text-gray-400" />
              steve@soundfieldrecording.com
            </a>
            <a href="tel:740-826-0508" className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
              <DevicePhoneMobileIcon className="mr-2 w-5 text-gray-400" />
              740.826.0508
            </a>

            {/* ::Address */}
            <p className="text-sm text-gray-500 leading-6">Soundfield Recording Studios <br/> 155 Reservoir Road <br /> New Concord, Ohio 43762</p>
            {/* ::Socials */}
            <div className="flex items-center">
              {/* :FACEBOOK */}
              <a href="https://www.facebook.com/soundfield1/" target='_blank' className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125" style={{ backgroundColor: "#4267B2" }}>
                {/* ::facebook svg */}
                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact