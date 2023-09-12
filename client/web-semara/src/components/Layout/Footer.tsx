import Image from "next/image"

export default function Footer() {
  return(
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center lg:justify-start">
        <div className="basis-full lg:basis-1/2 flex flex-col gap-2 text-center lg:text-start pe-4">
          <p className="text-primary-blue text-xl font-semibold">Semara</p>
          <p>Kami bertekad untuk meningkatkan taraf hidup lansia Indonesia. Kami memberikan pelayanan terbaik, melayani dengan hati, dan penuh tanggung jawab</p>
        </div>
        <div className="basis-3/4 lg:basis-1/2 flex flex-col items-center lg:items-start gap-2 ps-4">
          <div>
            <p className="text-primary-blue text-xl font-semibold">Contact Us</p> 
          </div>
          <div className="flex gap-2">
            <Image src='/Layout/logo-location.svg' width={30} height={30} alt='logo lokasi' />
            <p>Jalan Mertasari Indah Nomor 9, Sidakarya, Denpasar Selatan, Denpasar, Bali, 80224</p>
          </div>
          <div className="flex gap-2">
            <Image src='/Layout/logo-telephone.svg' width={30} height={30} alt='logo lokasi' />
            <p>+62 813-3968-3882</p>
          </div>
          <div className="flex gap-2">
            <Image src='/Layout/logo-ig.svg' width={30} height={30} alt='logo lokasi' />
            <p>@semara.id</p>
          </div>
          <div className="flex gap-2">
            <Image src='/Layout/logo-facebook.svg' width={30} height={30} alt='logo lokasi' />
            <p>semara.id</p>
          </div>
          <div className="flex gap-2">
            <Image src='/Layout/logo-mail.svg' width={30} height={30} alt='logo lokasi' />
            <p>circulans_id@gmail.commmmm</p>
          </div>
        </div>
      </div>
    </div>
  )
}