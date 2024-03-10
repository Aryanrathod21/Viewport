import Image from 'next/image'
import React from 'react'
import ahm from "@/app/assets/images/Ahemdabad1.jpg"
import del from "@/app/assets/images/Delhi2.jpg"
import mum from "@/app/assets/images/Mumbai1.jpg"
import jai from "@/app/assets/images/jaipur1.jpg"
import agr from "@/app/assets/images/Agra1.jpg"
import vara from "@/app/assets/images/Varanasi1.jpg"
import goa from "@/app/assets/images/Goa1.jpg"
import kol from "@/app/assets/images/Kolkata1.jpg"
import che from "@/app/assets/images/Chennai1.jpg"
import udai from "@/app/assets/images/Udaipur1.jpg"
import shi from "@/app/assets/images/Shimla1.jpg"
import rishi from "@/app/assets/images/Rishikesh1.jpg"
import Link from 'next/link'


type Props = {}

const Places = (props: Props) => {
  return (
    <section>
    <div className='grid lg:grid-cols-[35%_1fr] grid-row-12 gap-4 shadow-slate-500 md:grid-cols-1 sm:grid-cols-1 '>
    <div style={{ position: 'relative', display: 'inline-block' }}>
   <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={ahm} alt='img' objectFit='cover' />
</div>
<div className='flex flex-col gap-4 bg-slate-50 px-2 '>
  <h2 className='text-2xl font-bold'>Ahmedabad</h2>
  <p className='text-sm'>Ahmedabad, Gujarat, India, presents a captivating blend of historical treasures, cultural landmarks, and modern marvels that beckon travelers from across the globe. At the heart of the city lies the Sabarmati Ashram, a poignant symbol of India's independence movement, where Mahatma Gandhi lived and worked towards social reform. Nearby, the Sidi Saiyyed Mosque stands as a testament to Indo-Islamic architecture, renowned for its intricately carved stone jaalis.Venture further to discover the Adalaj Stepwell, an architectural gem from the 15th century, adorned with exquisite carvings and serving as both a utilitarian water source and a sanctuary for contemplation. Kankaria Lake, a bustling recreational hub, offers a myriad of activities including boating, zoo visits, and leisurely strolls along its scenic promenade.Jama Masjid, with its grand domes and ornate prayer halls, showcases the city's religious diversity and architectural prowess. For enthusiasts of textile heritage, the Calico Museum stands as a treasure trove, housing a vast collection of rare textiles and artifacts spanning centuries of craftsmanship.Heading towards the outskirts, the Akshardham Temple mesmerizes visitors with its stunning architecture and serene ambiance, offering a spiritual retreat amidst lush gardens and intricately carved stone facades.Ahmedabad's charm lies not only in its historical and cultural riches but also in its modern developments, reflected in its vibrant markets, bustling streets, and contemporary infrastructure. Whether exploring ancient monuments or indulging in culinary delights at its bustling food scene, Ahmedabad promises an enriching experience that captivates the senses and leaves an indelible mark on every traveler's heart.</p>
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
<Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={del} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Delhi</h2>
            <p className='text-sm'>Delhi, the bustling capital of India, is a captivating tapestry of history, culture, and modernity that beckons travelers to embark on a journey through time and tradition. Steeped in centuries of rich heritage, the city is a treasure trove of iconic landmarks and hidden gems waiting to be explored.

Begin your odyssey with a visit to the majestic Red Fort, an architectural marvel dating back to the Mughal era, whose imposing red sandstone walls enclose a sprawling complex of palaces, museums, and gardens. Nearby, the Jama Masjid, one of India's largest mosques, invites visitors to marvel at its grandeur and ascend its minarets for panoramic views of the old city.

Delve deeper into the city's past with a stroll through the narrow lanes of Chandni Chowk, a bustling market that has retained its old-world charm, where the aroma of spices mingles with the clamor of vendors and the colors of traditional wares dazzle the senses.

No visit to Delhi is complete without paying homage to the towering Qutub Minar, a UNESCO World Heritage site and the world's tallest brick minaret, dating back to the 12th century. Nearby, the serene Lotus Temple, with its striking lotus-shaped architecture, offers a tranquil oasis amidst the urban bustle.

For a glimpse into Delhi's colonial legacy, head to Lutyens' Delhi, where the grandeur of Rashtrapati Bhavan, India's presidential residence, and the solemnity of India Gate, a war memorial honoring fallen soldiers, stand as enduring symbols of the city's imperial past.

Delhi's cultural mosaic is further enriched by its vibrant arts and culinary scenes, with museums, galleries, theaters, and eateries offering a feast for the senses at every turn.

With its blend of ancient heritage and contemporary dynamism, Delhi promises a captivating journey through the ages, where every street corner, monument, and market stall tells a story waiting to be discovered.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={mum} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Mumbai</h2>
            <p className='text-sm'>Mumbai, the bustling metropolis on the western coast of India, pulsates with energy, diversity, and a kaleidoscope of experiences that make it one of the country's most captivating destinations.

Begin your exploration with a visit to the Gateway of India, an iconic monument overlooking the Arabian Sea, which serves as a symbolic entrance to the city. From there, embark on a ferry ride to Elephanta Island to marvel at the ancient rock-cut temples, a UNESCO World Heritage site, adorned with intricate sculptures and carvings.

Delve into Mumbai's colonial past with a stroll along the grand boulevards of South Mumbai, where the majestic Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus) stands as a testament to British-era architecture. Nearby, the historic Kala Ghoda neighborhood beckons with its charming art galleries, boutiques, and cafes.

No visit to Mumbai is complete without exploring its vibrant street food scene. Head to Chowpatty Beach to savor local delicacies like pav bhaji, vada pav, and bhel puri, while soaking in the lively atmosphere of this popular waterfront promenade.

For a taste of Bollywood glamour, take a guided tour of Film City, the epicenter of India's film industry, where you can catch a glimpse of movie sets, studios, and maybe even a celebrity or two.

Escape the urban hustle and bustle with a leisurely stroll along the picturesque Marine Drive promenade, also known as the "Queen's Necklace," where you can enjoy panoramic views of the Arabian Sea against the backdrop of the city skyline.

Mumbai's cultural landscape is further enriched by its myriad museums, galleries, theaters, and performance venues, offering a vibrant tapestry of arts and entertainment for visitors to explore and indulge in.

From its bustling markets to its tranquil seaside retreats, Mumbai offers a dynamic blend of experiences that capture the essence of India's past, present, and future, leaving visitors enchanted and eager to explore more of this vibrant city.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={jai} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Jaipur</h2>
            <p className='text-sm'>
Jaipur, the capital city of Rajasthan, India, is a mesmerizing blend of vibrant colors, rich history, and royal grandeur, earning it the moniker "The Pink City" for its distinct pink-hued buildings. Steeped in Rajputana heritage, Jaipur offers a treasure trove of architectural wonders, cultural experiences, and bustling markets waiting to be explored.

Begin your journey at the iconic Hawa Mahal, or Palace of Winds, a stunning five-story palace adorned with intricately carved windows that allowed royal women to observe street festivities while remaining unseen. Nearby, the majestic City Palace complex, a sprawling ensemble of palaces, courtyards, and museums, offers a glimpse into the opulent lifestyle of Jaipur's erstwhile rulers.

No visit to Jaipur is complete without a trip to the magnificent Amber Fort, a UNESCO World Heritage site perched atop a hill overlooking Maota Lake. Marvel at its intricate architecture, expansive courtyards, and ornate palaces adorned with intricate mirror work and frescoes, while enjoying panoramic views of the surrounding Aravalli hills.

Immerse yourself in the city's vibrant culture at the bustling bazaars of Johari Bazaar and Bapu Bazaar, where you can haggle for colorful textiles, traditional handicrafts, and sparkling gemstones, and sample local delicacies at street food stalls and sweet shops.

For a glimpse into Jaipur's astronomical legacy, visit the Jantar Mantar, an 18th-century observatory housing a collection of architectural astronomical instruments, including the world's largest stone sundial.

Indulge your senses with a royal dining experience at one of Jaipur's heritage hotels or rooftop restaurants, where you can savor authentic Rajasthani cuisine amidst regal surroundings and panoramic views of the city.

As the sun sets, witness the city come alive with the vibrant hues of the Chokhi Dhani village, a cultural hub offering traditional Rajasthani entertainment, folk performances, and artisanal crafts, providing a captivating finale to your Jaipur experience.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={agr} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Agra</h2>
            <p className='text-sm'>
Agra, located in the northern state of Uttar Pradesh, India, is synonymous with one of the most iconic monuments in the world, the Taj Mahal. This majestic white marble mausoleum, built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, is a UNESCO World Heritage site and a symbol of eternal love. Visitors from around the globe flock to Agra to marvel at the Taj Mahal's stunning architecture, intricate carvings, and symmetrical gardens, especially during sunrise and sunset when its beauty is accentuated by the changing hues of the sky.

Beyond the Taj Mahal, Agra boasts a rich cultural and historical heritage that reflects its centuries-old significance as a Mughal capital. Explore the imposing Agra Fort, another UNESCO World Heritage site, which served as the seat of power for successive Mughal emperors and features grand palaces, mosques, and audience halls adorned with exquisite marble and red sandstone carvings.

Venture into the vibrant lanes of the old city to discover hidden gems like the Itmad-ud-Daulah's Tomb, often referred to as the "Baby Taj" for its resemblance to its larger counterpart. This intricately designed tomb, commissioned by Empress Nur Jahan for her father, showcases delicate marble inlay work and intricate craftsmanship.

For a glimpse into Agra's local culture and culinary delights, explore the bustling bazaars of Kinari Bazaar and Sadar Bazaar, where you can shop for handicrafts, textiles, and souvenirs, and sample mouthwatering street food delicacies like petha and chaat.

As the day draws to a close, head to the Mehtab Bagh, a serene garden complex located across the Yamuna River, offering panoramic views of the Taj Mahal at sunset, providing a serene and romantic backdrop for reflection and photography.

Agra's timeless beauty and historical significance make it a must-visit destination for travelers seeking to immerse themselves in the rich tapestry of India's cultural heritage and architectural marvels.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={vara} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Varanasi</h2>
            <p className='text-sm'>Varanasi, situated on the banks of the sacred Ganges River in the northern state of Uttar Pradesh, India, is one of the oldest continuously inhabited cities in the world and holds immense spiritual significance for Hindus. Known as the "City of Light," "City of Temples," and "Spiritual Capital of India," Varanasi attracts pilgrims, seekers, and travelers from around the globe who come to experience its vibrant culture, ancient traditions, and profound spirituality.

The Ghats of Varanasi form the heart and soul of the city, where devotees gather to perform rituals, bathe in the holy waters of the Ganges, and witness mesmerizing Ganga Aarti ceremonies at dusk and dawn. Dashashwamedh Ghat, with its bustling activity and spectacular Aarti rituals, is among the most famous and vibrant ghats in Varanasi.

Varanasi is also home to an abundance of ancient temples, each with its own unique history and significance. The Kashi Vishwanath Temple, dedicated to Lord Shiva, is one of the holiest sites in Hinduism and attracts devotees from far and wide. Other notable temples include the Sankat Mochan Hanuman Temple, dedicated to Lord Hanuman, and the Durga Temple, dedicated to Goddess Durga.

Stroll through the narrow lanes and alleys of the old city, where time seems to stand still, and encounter a kaleidoscope of sights, sounds, and smells. Explore bustling markets selling silk sarees, handicrafts, and religious artifacts, and savor the flavors of Varanasi's renowned street food, including mouthwatering delicacies like kachori sabzi, chaat, and lassi.

A boat ride along the Ganges offers a unique perspective of Varanasi's ghats and skyline, allowing visitors to witness the city's timeless beauty and spiritual fervor from the tranquil waters of the river.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={goa} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Goa</h2>
            <p className='text-sm'>
Goa, nestled on the southwestern coast of India, is renowned for its stunning beaches, vibrant culture, and colonial heritage, making it a favorite destination for travelers seeking sun, sand, and relaxation.

The beaches of Goa are legendary, offering something for everyone, whether you're looking for a lively party scene, serene sunsets, or water sports adventures. Baga Beach and Calangute Beach are popular for their bustling atmosphere, water sports activities, and beachside shacks serving delicious seafood and refreshing drinks. For a more tranquil experience, head to Palolem Beach or Agonda Beach, where you can unwind amidst pristine shores and swaying palm trees.

Beyond its beaches, Goa boasts a rich tapestry of cultural and historical attractions. Explore the charming streets of Old Goa, a UNESCO World Heritage site, where you'll find magnificent churches and cathedrals dating back to the Portuguese colonial era. The Basilica of Bom Jesus, with its Baroque architecture and housing the mortal remains of St. Francis Xavier, is a must-visit landmark.

For a taste of Goa's vibrant culture, visit the bustling markets of Mapusa and Anjuna, where you can shop for local handicrafts, spices, and textiles, and immerse yourself in the lively atmosphere of traditional Goan music and dance performances.

Nature enthusiasts will find plenty to explore in Goa's lush hinterland. Embark on a trek through the Western Ghats to discover cascading waterfalls, verdant forests, and picturesque spice plantations. The Dudhsagar Waterfalls, one of India's tallest waterfalls, is a breathtaking sight to behold, especially during the monsoon season.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={kol} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Kolkata</h2>
            <p className='text-sm'>Kolkata, formerly known as Calcutta, is a city steeped in history, culture, and intellectual vibrancy, situated in the eastern Indian state of West Bengal. As the cultural capital of India, Kolkata pulsates with energy, offering a unique blend of colonial heritage, artistic expression, and warm hospitality.

Start your journey in Kolkata with a visit to the iconic Howrah Bridge, one of the busiest and most recognizable landmarks spanning the Hooghly River. Nearby, explore the majestic Victoria Memorial, a symbol of the city's colonial past, surrounded by lush gardens and housing a fascinating collection of artifacts and artworks.

Immerse yourself in the literary heritage of Kolkata by visiting College Street, known as Boi Para (Book Town), where you'll find a plethora of bookstores, publishing houses, and street stalls selling everything from rare manuscripts to contemporary bestsellers. Don't miss the chance to visit the Indian Coffee House, a historic institution frequented by intellectuals, artists, and students for lively discussions and debates.

For a glimpse into Kolkata's religious diversity, visit the Dakshineswar Kali Temple, dedicated to the goddess Kali, and the Belur Math, headquarters of the Ramakrishna Mission, which embodies the principles of harmony and universal brotherhood.

Kolkata's cultural scene comes alive in its vibrant neighborhoods, each with its own distinct character and charm. Explore the narrow alleys of Kumartuli, where skilled artisans craft exquisite clay idols of Hindu gods and goddesses, or wander through the colorful streets of Kalighat, known for its bustling markets and traditional crafts.

No visit to Kolkata is complete without indulging in its culinary delights. Sample street food delicacies like phuchka (pani puri), kathi rolls, and jhal muri (spicy puffed rice) at roadside stalls and local markets, or savor authentic Bengali cuisine at heritage restaurants like Oh! Calcutta and 6 Ballygunge Place.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={che} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Chennai</h2>
            <p className='text-sm'>Chennai, the capital city of the southern Indian state of Tamil Nadu, is a vibrant metropolis that seamlessly blends tradition with modernity. Renowned for its rich cultural heritage, thriving arts scene, and delectable cuisine, Chennai offers visitors a myriad of experiences to explore and enjoy.

Start your exploration of Chennai with a visit to Marina Beach, one of the longest urban beaches in the world, where you can take a leisurely stroll along the promenade, enjoy horse rides, or simply relax and soak in the sea breeze. Nearby, the iconic lighthouse offers panoramic views of the coastline and the cityscape.

Delve into the city's history and heritage at Fort St. George, the first British fortress in India, which now houses the Tamil Nadu Legislative Assembly and the Fort Museum, showcasing colonial-era artifacts and memorabilia. Adjacent to the fort is the majestic St. Mary's Church, the oldest Anglican church in India.

For art enthusiasts, a visit to the Government Museum and the adjacent National Art Gallery is a must. The museum houses a vast collection of artifacts, including sculptures, paintings, and archaeological finds, providing insights into the rich cultural heritage of Tamil Nadu and beyond.

Chennai is also a haven for food lovers, offering a tantalizing array of culinary delights. Indulge in traditional South Indian dishes like dosa, idli, and vada at iconic eateries such as Saravana Bhavan and Murugan Idli Shop, or savor authentic Chettinad cuisine at heritage restaurants like Karaikudi and Anjappar.

To experience Chennai's cultural vibrancy, catch a classical music or dance performance at the Kalakshetra Foundation or the Music Academy, where talented artists showcase the rich traditions of Carnatic music and Bharatanatyam dance.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={udai} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Udaipur</h2>
            <p className='text-sm'>
Udaipur, often referred to as the "City of Lakes" or the "Venice of the East," is a mesmerizing destination nestled in the Aravalli Hills of the Indian state of Rajasthan. Renowned for its regal palaces, serene lakes, and romantic ambiance, Udaipur exudes a timeless charm that captivates visitors from around the world.

Begin your journey in Udaipur with a visit to the majestic City Palace, a sprawling complex of palaces, courtyards, and gardens overlooking Lake Pichola. Marvel at the intricate architecture, colorful murals, and ornate balconies as you wander through the labyrinthine corridors of this royal residence, which still serves as the residence of the Mewar royal family.

Embark on a boat ride across Lake Pichola to visit the iconic Lake Palace, an exquisite white marble palace that appears to float on the tranquil waters of the lake. Built in the 18th century as a royal summer palace, it is now a luxurious heritage hotel where guests can experience the grandeur and romance of a bygone era.

Explore the narrow lanes and vibrant markets of the old city, where you can shop for traditional Rajasthani handicrafts, textiles, and jewelry, or simply soak in the lively atmosphere of this bustling cultural hub.

No visit to Udaipur is complete without witnessing the breathtaking sunset views from the Monsoon Palace, perched atop a hill overlooking the city. The panoramic vistas of the surrounding countryside and the shimmering lakes below create a magical backdrop for unforgettable moments.

For a taste of Udaipur's rich cultural heritage, attend a traditional folk dance performance at the Bagore ki Haveli or the Shilpgram Cultural Complex, where talented artists showcase the vibrant music, dance, and art forms of Rajasthan.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={shi} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Shimla</h2>
            <p className='text-sm'>
Shimla, the capital city of the northern Indian state of Himachal Pradesh, is a picturesque hill station nestled in the foothills of the Himalayas. Renowned for its colonial architecture, scenic beauty, and pleasant climate, Shimla has long been a favored destination for travelers seeking respite from the sweltering summer heat of the plains.

Begin your exploration of Shimla with a leisurely stroll along the Mall Road, the main thoroughfare lined with colonial-era buildings, bustling shops, and charming cafes. Admire the architectural splendor of landmarks such as the Christ Church, Gaiety Theatre, and Scandal Point, which offer glimpses into the city's colonial past.

For panoramic views of the surrounding mountains and valleys, take a ride on the historic Shimla-Kalka Toy Train, a UNESCO World Heritage site known for its narrow gauge railway and scenic route through tunnels, bridges, and lush forests.

Escape the urban hustle and bustle with a visit to the serene Himalayan Bird Park and the verdant Glen Forests, where you can enjoy nature walks, birdwatching, and picnics amidst tranquil surroundings.

No visit to Shimla is complete without exploring the nearby hill stations of Kufri and Chail. Kufri, located just a short drive from Shimla, is renowned for its scenic beauty, adventure activities like skiing and horse riding, and the Himalayan Nature Park, home to a variety of flora and fauna. Chail, nestled amidst pine and deodar forests, boasts the highest cricket ground in the world and the historic Chail Palace, offering breathtaking views of the surrounding hills.

Indulge in the flavors of Himachali cuisine at local eateries and restaurants, where you can savor traditional dishes like chana madra, siddu, and babru, along with refreshing beverages like rhododendron juice and apple cider.

Whether you're seeking adventure in the mountains, tranquility in nature, or simply a relaxing getaway amidst scenic surroundings, Shimla offers an unforgettable experience that rejuvenates the body, mind, and soul.</p>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <Link href='/Booktic'>     
  <button className='h-8 w-32 bg-lime-400 hover:bg-lime-700 transition-all' style={{ position: 'absolute', top: 0, left: 0 }}>
    Book Ticket
  </button></Link>
  <Image src={rishi} alt='img' objectFit='cover' />
</div>
        
        <div className='flex flex-col gap-4 bg-slate-50 px-2'>
            <h2 className='text-2xl font-bold'>Rishikesh</h2>
            <p className='text-sm'>
Rishikesh, nestled in the foothills of the Himalayas along the banks of the sacred Ganges River in the northern Indian state of Uttarakhand, is renowned as the "Yoga Capital of the World" and a haven for spiritual seekers, adventure enthusiasts, and nature lovers alike.

Begin your journey in Rishikesh with a visit to the iconic Laxman Jhula and Ram Jhula, suspension bridges that span the Ganges River and offer panoramic views of the surrounding hills and temples. Cross these bridges to explore the bustling markets, ashrams, and temples on both sides of the river, where you can immerse yourself in the vibrant spiritual atmosphere of the city.

For a deeper immersion into the practice of yoga and meditation, enroll in a yoga retreat or join a yoga class at one of the many ashrams and yoga centers scattered throughout Rishikesh. Whether you're a beginner or an experienced practitioner, you'll find a variety of styles and teachings to suit your needs and preferences.

Rishikesh is also a popular destination for adventure sports enthusiasts, offering a wide range of thrilling activities such as white-water rafting, bungee jumping, trekking, and camping. Explore the rugged terrain of the Himalayas on a trek to nearby waterfalls and scenic viewpoints, or embark on a rafting expedition down the rapids of the Ganges River for an adrenaline-pumping experience.

Experience the spiritual serenity of Rishikesh with a visit to the Beatles Ashram (also known as the Maharishi Mahesh Yogi Ashram), where the legendary band once stayed and composed music. Wander through the overgrown ruins and vibrant graffiti walls, and feel the creative energy that still lingers in this tranquil space.

Indulge your senses with the flavors of traditional Indian cuisine at local eateries and restaurants, where you can savor delicious vegetarian dishes, fresh fruit juices, and herbal teas that nourish both body and soul.
</p>
        </div>
    </div>
    </section>
  )
}

export default Places