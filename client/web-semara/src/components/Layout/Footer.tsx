import Image from "next/image"

export default function Footer() {
  return(
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center lg:justify-start">
        <div className="basis-full lg:basis-1/2 text-center lg:text-start">
          <p className="text-primary-blue text-3xl font-semibold">Semara</p>
        </div>
        <div className="basis-3/4 lg:basis-1/2 flex flex-col items-center lg:items-start gap-4 text-xl">
          <div>
            <p className="text-primary-blue text-3xl font-semibold">Contact Us</p> 
          </div>
          <div className="flex gap-2">
            <Image src='/logo-location.svg' width={30} height={30} alt='logo lokasi' />
            <p>Jalan Mertasari Indah Nomor 9, Sidakarya, Denpasar Selatan, Denpasar, Bali, 80224</p>
          </div>
          <div className="flex gap-2">
            <Image src='/logo-telephone.svg' width={30} height={30} alt='logo lokasi' />
            <p>+62 813-3968-3882</p>
          </div>
          <div className="flex gap-2">
            <Image src='/logo-ig.svg' width={30} height={30} alt='logo lokasi' />
            <p>@semara.id</p>
          </div>
          <div className="flex gap-2">
            <Image src='/logo-facebook.svg' width={30} height={30} alt='logo lokasi' />
            <p>semara.id</p>
          </div>
          <div className="flex gap-2">
            <Image src='/logo-mail.svg' width={30} height={30} alt='logo lokasi' />
            <p>circulans_id@gmail.commmmm</p>
          </div>
        </div>
      </div>
    </div>
  )
}