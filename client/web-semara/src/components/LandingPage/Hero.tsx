export default function Hero() {
  return(
    <div className="bg-gradient-to-r from-[#DFEDF4] to-primary-white lg:bg-[url('/LandingPage/hero-bg.png')] bg-no-repeat bg-cover h-[90vh] flex items-center lg:bg-center">
      {/* Content  */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center lg:text-start gap-8">
          <div>
            <h1 className="text-[50px] font-semibold">Melayani dan Mendampingi <br className="hidden lg:block" /> Hari Tua Anda</h1>
          </div>
          <div>
            <p className="text-lg">Kami adalah perusahaan yang melayani dan mendampingi pasien dengan sepenuh hati. </p>
          </div>
          <div>
            <a href='/' className="inline-block bg-primary-blue hover:scale-110 hover:animate-pulse active:scale-90 px-4 py-2 rounded-[8px] text-text-white text-lg shadow">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </div>
  )
}