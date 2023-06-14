import { Link } from 'react-router-dom'
import EquipmentImage from '../media/lyd-133.jpg'
import ClienteleImage from '../media/lyd-105.jpg'
import OwnerOperatorImage from '../media/lyd-126.jpg'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'Equipment',
      description: 'Gear and Technology',
      imageSrc: EquipmentImage,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      to: '/equipment',
    },
    {
      name: 'Clientele',
      description: 'Groups, Genres, Format and Locations',
      imageSrc: ClienteleImage,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      to: '/clientele',
    },
    {
      name: 'Owner & Operator',
      description: 'Steve Bodner - Audio Engineer',
      imageSrc: OwnerOperatorImage,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      to: '/owner',
    },
  ]
  
  export default function ThreeColumns() {
    return (
      <div className="bg-neutral-900/0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-neutral-100">Learn About Us!</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-neutral-500">
                    <Link to={callout.to}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-neutral-100">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  