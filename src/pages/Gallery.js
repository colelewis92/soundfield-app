import image1 from '../media/lyd-085.jpg'
import image2 from '../media/lyd-086.jpg'
import image3 from '../media/lyd-087.jpg'
import image4 from '../media/lyd-088.jpg'
import image5 from '../media/lyd-089.jpg'
import image6 from '../media/lyd-090.jpg'
import image7 from '../media/lyd-091.jpg'
import image8 from '../media/lyd-092.jpg'
import image9 from '../media/lyd-093.jpg'
import image10 from '../media/lyd-094.jpg'
import image11 from '../media/lyd-095.jpg'
import image12 from '../media/lyd-096.jpg'

const Gallery = () => {
    return <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image1} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image2} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image3} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image4} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image5} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image6} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image7} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image8} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image9} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image10} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image11} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image12} alt=""/>
    </div>
</div>

};

export default Gallery;