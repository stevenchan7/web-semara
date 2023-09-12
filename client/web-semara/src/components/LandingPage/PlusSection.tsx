import Image from "next/image"

export default function PlusSection() {
  return(
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="basis-1/2">
          <Image src='/LandingPage/service-img.svg' width={713} height={527} alt="service image" />
        </div>
        <div className="basis-1/2 flex flex-wrap gap-8">
          <div>
            <p className="text-[50px] font-semibold">Kenapa Memilih Layanan <span className="text-primary-blue">Semara?</span></p>
          </div>
          <div className="text-lg">
            <h6 className="text-primary-blue font-bold">Profesional</h6>
            <p className="text-justify">Dilakukan oleh tenaga profesional kesehatan dengan layanan berbasis teori caring Beberapa layanan dilakukan oleh ahlinya sehingga lansia tidak perlu khawatir terhadap pelayanan yang akan diberikan.</p>
            <br />
            <h6 className="text-primary-blue font-bold"> HargaTerjangkau</h6>
            <p className="text-justify">Semara memberikan harga yang terjangkau karena jasa ini hanya berfokus pada pendampingan lansia saja.</p>
            <br />
            <h6 className="text-primary-blue font-bold">Dapat Disesuaikan dengan Kebutuhan Anda</h6>
            <p className="text-justify">Dengan berbagai pilihan layanan yang tersedia, benefit yang di dapatkan seperti akupresur, pengecekan tekanan darah, gula darah, asam urat, dan kolesterol. Dalam pendampingan lansia, kami memprioritaskan sifat caring kepada klien untuk meningkatkan derajat kondisi mental dan fisik klien.</p>
          </div>
        </div>
      </div>
    </div>
  )
}