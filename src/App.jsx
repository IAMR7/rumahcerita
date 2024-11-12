

function App() {
  return (
    <>
      <div className="main">
        {/* navbar */}
        <header className="bg-white shadow">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="#">
                  <span className="sr-only">Home</span>
                  <img src="images/logo-rc-color-black.svg" alt="logo-rumah-cerita" className="w-4/5" />
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm fs-default">
                    <li>
                      <a className="text-slate-800 font-semibold transition hover:text-gray-500/75" href="#"> Layanan </a>
                    </li>
                    <li>
                      <a className="text-slate-800 font-semibold transition hover:text-gray-500/75" href="#"> Keunggulan </a>
                    </li>

                    <li>
                      <a className="text-slate-800 font-semibold transition hover:text-gray-500/75" href="#"> Konselor </a>
                    </li>

                    <li>
                      <a className="text-slate-800 font-semibold transition hover:text-gray-500/75" href="#"> Testimonial </a>
                    </li>

                    <li>
                      <a className="text-slate-800 font-semibold transition hover:text-gray-500/75" href="#"> Kontak </a>
                    </li>

                    <li>
                      <a className="text-slate-800 font-semibold transition hover:text-gray-500/75" href="#"> Tentang Kami </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-3">
                    <a
                      className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white shadow"
                      href="#"
                    >
                      Masuk
                    </a>

                    <div className="hidden sm:flex">
                      <a
                        className="rounded-md bg-gray-100 px-6 py-2 text-sm font-medium text-primary"
                        href="#"
                      >
                        Daftar
                      </a>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end-navbar */}

        {/* CTA */}
        <section className="cta bg-cta lg:p-0 px-4 pt-6">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-0">
            <div className="lg:col-span-8 col-span-12 flex flex-col justify-center">
              <div className="flex flex-col lg:gap-5 gap-2 lg:w-5/6 w-full lg:justify-start justify-center lg:items-start items-center lg:text-left text-center">
                <h1 className="lg:text-5xl text-4xl font-extrabold">
                  Rumah nyaman untuk cerita
                </h1>
                <p className="text-slate-500 text-medium">
                  Ceritakan masalahmu bersama konselor kami yang sudah berpengalaman di bidangnya. Karna kamu, berhak punya rumah untuk cerita.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="text-sm font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                    # Generasi Sandwich
                  </span>
                  <span className="text-sm font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                    # Toxic Relationship
                  </span>
                  <span className="text-sm font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                    # Broken Home
                  </span>
                  <span className="text-sm font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                    # Overthinking
                  </span>
                  <span className="text-sm font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                    # Self Harm
                  </span>
                </div>
                <button className="bg-primary w-fit px-6 py-3 rounded-lg text-white mt-8 font-medium text-lg">
                  Coba Sekarang <i className='bx bx-fw bx-right-arrow-alt bx-fade-left' ></i>
                </button>
              </div>

            </div>
            <div className="lg:col-span-4 col-span-12">
              <img src="images/hero-image.svg" alt="" />
            </div>
          </div>
        </section>
        {/* end-CTA */}

        {/* pricing */}
        <section className="pricing bg-white py-12">
          <div className="max-w-6xl mx-auto">
            <div className="title-desc text-center flex flex-col gap-4">
              <h1 className="lg:text-4xl text-4xl font-extrabold">
                Harga Layanan Konseling
              </h1>
              <p className="text-slate-500 text-medium italic">
                Harga yang sangat variatif dengan menyesuaikan isi kantong dan dompet kamu
              </p>
            </div>
            <div className="flex flex-row justify-center gap-3 max-w-5xl mx-auto mt-8">
              <div className="bg-primary w-42 px-7 py-3 rounded-full">
                <p className="font-semibold text-white">
                  STANDARD
                </p>
              </div>
              <div className="bg-white border-primary text-primary w-42 px-7 py-3 rounded-full">
                <p className="font-semibold">
                  PREMIUM
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-row px-4 lg:px-0 justify-center items-center gap-4 max-w-6xl mx-auto mt-12">
              <div className="bg-white border border-2 border-slate-200 rounded-lg px-5 py-4 w-full h-fit">
                <h1 className="text-2xl font-bold text-center mb-1">
                  Teduh
                </h1>
                <p className="text-md text-center text-slate-500 mb-3">
                  Paket ramah kantong yang cocok untuk mulai mencoba konseling dengan nyaman
                </p>
                <h1 className="text-center text-3xl font-black text-primary">
                  Rp 49.000
                </h1>
                <div className="mt-6 px-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Konseling secara video call
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Bebas pilih konselor
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Bebas memilih jadwal konseling
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Akses konseling sebanyak 2 sesi
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Konseling per-sesi selama 1 jam
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Asesmen Pra-Konseling
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Laporan hasil dari konselor
                      </p>
                    </div>
                  </div>
                </div>
                <button className="bg-primary w-full px-6 py-3 rounded-lg text-white mt-8 font-medium text-lg">
                  Coba Konseling
                </button>
              </div>
              <div className="bg-cta border border-2 border-primary rounded-lg px-5 py-4 p-3 w-full terlaris h-fit my-10 lg:my-0">
                <div className="bg-emerald-500 w-fit px-6 py-3 rounded-full absolute tag-terlaris">
                  <p className="font-semibold text-white ">
                    Rekomendasi
                  </p>
                </div>
                <h1 className="text-2xl font-bold text-center mb-1 mt-8">
                  Cahaya
                </h1>
                <p className="text-md text-center text-slate-500 mb-3">
                  Paket ramah kantong yang cocok untuk mulai mencoba konseling dengan nyaman
                </p>
                <div className="flex flex-row justify-center items-center gap-3 mb-3">
                  <span className="text-slate-400 font-semibold text-lg line-through">
                    Rp 150.000
                  </span>
                  <span className="bg-rose-100 text-rose-500 px-5 py-3 rounded-full font-semibold text-center text-sm">
                    <i className="bx bx-fw bx-purchase-tag-alt"></i> Rp 51.000
                  </span>
                </div>
                <h1 className="text-center text-3xl font-black text-primary">
                  Rp 99.000
                </h1>
                <div className="mt-6 px-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Konseling secara video call
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Bebas pilih konselor
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Bebas memilih jadwal konseling
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Akses konseling sebanyak 4 sesi
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Konseling per-sesi selama 1 jam
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Asesmen Pra-Konseling
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Laporan hasil dari konselor
                      </p>
                    </div>
                  </div>
                </div>
                <button className="bg-primary w-full px-6 py-3 rounded-lg text-white mt-8 font-medium text-lg">
                  Coba Konseling
                </button>
              </div>
              <div className="bg-white border border-2 border-slate-200 rounded-lg px-5 py-4 p-3 w-full h-fit">
                <h1 className="text-2xl font-bold text-center mb-1">
                  Tenang
                </h1>
                <p className="text-md text-center text-slate-500 mb-3">
                  Paket ramah kantong yang cocok untuk mulai mencoba konseling dengan nyaman
                </p>
                <h1 className="text-center text-3xl font-black text-primary">
                  Rp 299.000
                </h1>
                <div className="mt-6 px-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Konseling secara video call
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Bebas pilih konselor
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Bebas memilih jadwal konseling
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Akses konseling sebanyak 8 sesi
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Konseling per-sesi selama 1 jam
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Asesmen Pra-Konseling
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <i className="bx bx-sm bx-check-circle text-emerald-500"></i>
                      <p>
                        Laporan hasil dari konselor
                      </p>
                    </div>
                  </div>
                </div>
                <button className="bg-primary w-full px-6 py-3 rounded-lg text-white mt-8 font-medium text-lg">
                  Coba Konseling
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* end pricing */}

        {/* keunggulan */}
        <section className="keunggulan py-12 px-4 lg:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="title-desc text-center flex flex-col gap-4 text-white">
              <h1 className="lg:text-4xl text-4xl font-extrabold">
                Keunggulan Rumah Cerita
              </h1>
              <p className="text-medium italic">
                Beberapa keunggulan kami dibandingkan platform konseling digital lain
              </p>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-12">
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Harga Termurah
                </p>
                <p className="font-light">
                  Harga kami dijamin lebih murah dari tempat konseling lainnya
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Konselor Sebaya
                </p>
                <p className="font-light">
                  Konselor kami juga sebaya dengan kamu, cerita jadi lebih plong!
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Jadwal Fleksibel
                </p>
                <p className="font-light">
                  Atur jadwal konseling bisa lebih fleksibel bersama kami
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Simple Video Call
                </p>
                <p className="font-light">
                  Konseling langsung di Rumah Cerita tanpa harus pindah aplikasi lain
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Evaluasi Konseling
                </p>
                <p className="font-light">
                  Pantau perkembanganmu di setiap akhir sesi konseling
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Admin Fast Respon
                </p>
                <p className="font-light">
                  Hubungi admin yang selalu ready untuk merespon kebutuhanmu
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Promo Menarik
                </p>
                <p className="font-light">
                  Kami selalu memberikan promo menarik untukmu di setiap paket layanan
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Fokus Kepadamu
                </p>
                <p className="font-light">
                  Prioritas pelayanan untuk menjadikan kami sebagai teman terbaikmu
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12 border-primary item-keunggulan text-white text-center p-5 rounded-lg">
                <p className="font-semibold text-xl mb-2">
                  Keamanan dan Privasi
                </p>
                <p className="font-light">
                  Kami berkomitmen dengan ketat untuk menjaga keamanan dan privasimu
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* end keunggulan */}

        {/* konselor */}
        <section className="konselor bg-white py-12 px-4 lg:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="title-desc text-center flex flex-col gap-4">
              <h1 className="lg:text-4xl text-4xl font-extrabold">
                Pilihan Konselor
              </h1>
              <p className="text-slate-500 text-medium italic">
                Konselor muda, sebaya denganmu dan berpengalaman di bidangnya
              </p>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-12">
              <div className="col-span-12 lg:col-span-6 border border-2 border-slate-200 rounded-lg p-5">
                <div className="lg:flex lg:flex-row gap-5">
                  <img src="images/risty.png" className="rounded-full w-24 lg:w-40 h-24 lg:h-40 mb-4 lg:mb-0" alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">
                      Risty Anggitiara, S.Psi
                    </p>
                    <p className="text-slate-500">
                      Halo, aku Risty konselor paling lucu untuk jadi teman cerita kamu.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-start">
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Overthinking
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Relationship
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Emotional
                      </span>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center gap-2 mt-5 lg:mt-0">
                      <button className="bg-primary w-full px-6 py-3 rounded-lg text-white lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-phone"></i> Konsul
                      </button>
                      <button className="bg-slate-200 text-slate-700 w-full px-6 py-3 rounded-lg lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-user"></i> Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 border border-2 border-slate-200 rounded-lg p-5">
                <div className="lg:flex lg:flex-row gap-5">
                  <img src="images/nida.png" className="rounded-full w-24 lg:w-40 h-24 lg:h-40 mb-4 lg:mb-0" alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">
                      Nida Lailatu Syabani, S.Psi
                    </p>
                    <p className="text-slate-500">
                      Halo, aku Nida konselor yang siap untuk dengerin keluh kesahmu.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-start">
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Overthinking
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Relationship
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Emotional
                      </span>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center gap-2 mt-5 lg:mt-0">
                      <button className="bg-primary w-full px-6 py-3 rounded-lg text-white lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-phone"></i> Konsul
                      </button>
                      <button className="bg-slate-200 text-slate-700 w-full px-6 py-3 rounded-lg lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-user"></i> Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 border border-2 border-slate-200 rounded-lg p-5">
                <div className="lg:flex lg:flex-row gap-5">
                  <img src="images/risty.png" className="rounded-full w-24 lg:w-40 h-24 lg:h-40 mb-4 lg:mb-0" alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">
                      Risty Anggitiara, S.Psi
                    </p>
                    <p className="text-slate-500">
                      Halo, aku Risty konselor paling lucu untuk jadi teman cerita kamu.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-start">
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Overthinking
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Relationship
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Emotional
                      </span>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center gap-2 mt-5 lg:mt-0">
                      <button className="bg-primary w-full px-6 py-3 rounded-lg text-white lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-phone"></i> Konsul
                      </button>
                      <button className="bg-slate-200 text-slate-700 w-full px-6 py-3 rounded-lg lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-user"></i> Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 border border-2 border-slate-200 rounded-lg p-5">
                <div className="lg:flex lg:flex-row gap-5">
                  <img src="images/nida.png" className="rounded-full w-24 lg:w-40 h-24 lg:h-40 mb-4 lg:mb-0" alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">
                      Nida Lailatu Syabani, S.Psi
                    </p>
                    <p className="text-slate-500">
                      Halo, aku Nida konselor yang siap untuk dengerin keluh kesahmu.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-start">
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Overthinking
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Relationship
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Emotional
                      </span>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center gap-2 mt-5 lg:mt-0">
                      <button className="bg-primary w-full px-6 py-3 rounded-lg text-white lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-phone"></i> Konsul
                      </button>
                      <button className="bg-slate-200 text-slate-700 w-full px-6 py-3 rounded-lg lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-user"></i> Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 border border-2 border-slate-200 rounded-lg p-5">
                <div className="lg:flex lg:flex-row gap-5">
                  <img src="images/risty.png" className="rounded-full w-24 lg:w-40 h-24 lg:h-40 mb-4 lg:mb-0" alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">
                      Risty Anggitiara, S.Psi
                    </p>
                    <p className="text-slate-500">
                      Halo, aku Risty konselor paling lucu untuk jadi teman cerita kamu.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-start">
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Overthinking
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Relationship
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Emotional
                      </span>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center gap-2 mt-5 lg:mt-0">
                      <button className="bg-primary w-full px-6 py-3 rounded-lg text-white lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-phone"></i> Konsul
                      </button>
                      <button className="bg-slate-200 text-slate-700 w-full px-6 py-3 rounded-lg lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-user"></i> Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 border border-2 border-slate-200 rounded-lg p-5">
                <div className="lg:flex lg:flex-row gap-5">
                  <img src="images/nida.png" className="rounded-full w-24 lg:w-40 h-24 lg:h-40 mb-4 lg:mb-0" alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-2xl">
                      Nida Lailatu Syabani, S.Psi
                    </p>
                    <p className="text-slate-500">
                      Halo, aku Nida konselor yang siap untuk dengerin keluh kesahmu.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-start">
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Overthinking
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Relationship
                      </span>
                      <span className="text-xs font-semibold bg-brown-secondary text-brown-primary px-4 py-2 rounded-full">
                        # Emotional
                      </span>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center gap-2 mt-5 lg:mt-0">
                      <button className="bg-primary w-full px-6 py-3 rounded-lg text-white lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-phone"></i> Konsul
                      </button>
                      <button className="bg-slate-200 text-slate-700 w-full px-6 py-3 rounded-lg lg:mt-5 mt-0 font-semibold text-lg">
                        <i className="bx bx-fw bx-user"></i> Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end konselor */}

        {/* testimonial */}
        <section className="testimonial bg-cta py-12 px-4 lg:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="title-desc text-center flex flex-col gap-4">
              <h1 className="lg:text-4xl text-4xl font-extrabold">
                Apa Kata Mereka ?
              </h1>
              <p className="text-slate-500 text-medium italic">
                Yang mereka bilang setelah bercerita bersama konselor-konselor kami
              </p>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-12">
              <div className="lg:col-span-4 col-span-12 bg-white rounded-lg p-5">
                <i className="bx bx-lg bxs-quote-left text-slate-200"></i>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-2xl">
                    Laylah Nur Azmi
                  </p>
                  <p className="text-slate-500 italic text-sm">
                    Wah aku puas banget setelah nyobain konseling ke kak Risty, orangnya cheerful, gak ngejudge
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 bg-white rounded-lg p-5">
                <i className="bx bx-lg bxs-quote-left text-slate-200"></i>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-2xl">
                    Laylah Nur Azmi
                  </p>
                  <p className="text-slate-500 italic text-sm">
                    Wah aku puas banget setelah nyobain konseling ke kak Risty, orangnya cheerful, gak ngejudge
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 bg-white rounded-lg p-5">
                <i className="bx bx-lg bxs-quote-left text-slate-200"></i>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-2xl">
                    Laylah Nur Azmi
                  </p>
                  <p className="text-slate-500 italic text-sm">
                    Wah aku puas banget setelah nyobain konseling ke kak Risty, orangnya cheerful, gak ngejudge
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 bg-white rounded-lg p-5">
                <i className="bx bx-lg bxs-quote-left text-slate-200"></i>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-2xl">
                    Laylah Nur Azmi
                  </p>
                  <p className="text-slate-500 italic text-sm">
                    Wah aku puas banget setelah nyobain konseling ke kak Risty, orangnya cheerful, gak ngejudge
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 bg-white rounded-lg p-5">
                <i className="bx bx-lg bxs-quote-left text-slate-200"></i>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-2xl">
                    Laylah Nur Azmi
                  </p>
                  <p className="text-slate-500 italic text-sm">
                    Wah aku puas banget setelah nyobain konseling ke kak Risty, orangnya cheerful, gak ngejudge
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 bg-white rounded-lg p-5">
                <i className="bx bx-lg bxs-quote-left text-slate-200"></i>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-2xl">
                    Laylah Nur Azmi
                  </p>
                  <p className="text-slate-500 italic text-sm">
                    Wah aku puas banget setelah nyobain konseling ke kak Risty, orangnya cheerful, gak ngejudge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end testimonial */}

        {/* contact */}
        <section className="contact bg-white py-12 px-4 lg:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="title-desc text-center flex flex-col gap-4">
              <h1 className="lg:text-4xl text-4xl font-extrabold">
                Hubungi Kami
              </h1>
              <p className="text-slate-500 text-medium italic">
                Kamu bisa menghubungi tim support kami yang selalu ready untuk bantuan lebih lanjut
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-10 lg:mt-20">
              <div className="lg:col-span-6 col-span-12">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullname" className="font-semibold">
                    Nama Lengkap atau Instansi
                  </label>
                  <input type="text" name="fullname" id="fullname" className="bg-cta border-primary p-4 rounded-lg" placeholder="Isikan nama lengkap atau instansi" />
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="font-semibold">
                    Tipe
                  </label>
                  <select defaultValue={'none'} name="type" id="type" className="bg-cta border border-2 border-slate-300 p-5 rounded-lg">
                    <option value="none" disabled>
                      Pilih tipe
                    </option>
                    <option value="personal">
                      Personal
                    </option>
                    <option value="organisasi">
                      Organisasi
                    </option>
                    <option value="perusahaan">
                      Perusahaan
                    </option>
                  </select>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input type="email" name="email" id="email" className="bg-cta border border-2 border-slate-300 p-4 rounded-lg" placeholder="Isikan email" />
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-semibold">
                    Nomor Telepon
                  </label>
                  <input type="text" name="phone" id="phone" className="bg-cta border border-2 border-slate-300 p-4 rounded-lg" placeholder="Isikan nomor telepon" />
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-semibold">
                    Pesan
                  </label>
                  <textarea type="text" rows={6} name="message" id="message" className="bg-cta border border-2 border-slate-300 p-4 rounded-lg" placeholder="Apa yang ingin kamu sampaikan ?" />
                </div>
              </div>
            </div>
            <button className="bg-primary lg:w-fit w-full px-6 py-3 rounded-lg text-white mt-5 font-semibold text-lg">
              Submit
            </button>
          </div>
        </section>
        {/* end contact */}

        {/* footer */}
        <section className="footer bg-primary py-12 px-4 lg:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="title-desc text-center flex flex-col justify-center items-center gap-4 text-white">
              <img src="images/logo-rc-white.svg" className="lg:w-2/6 w-5/6 mb-6" alt="" />
              <h1 className="lg:text-4xl text-4xl font-extrabold">
                Sosial Media
              </h1>
              <p className="text-medium italic">
                Terhubung dengan sosial media kami
              </p>
              <div className="flex flex-wrap lg:flex-nowrap flex-row gap-6 items-center justify-center">
                <div className="flex flex-row items-center justify-center bg-white rounded-full p-3">
                  <i className="bx bx-lg bxl-instagram text-primary"></i>
                </div>
                <div className="flex flex-row items-center justify-center bg-white rounded-full p-3">
                  <i className="bx bx-lg bxl-facebook text-primary"></i>
                </div>
                <div className="flex flex-row items-center justify-center bg-white rounded-full p-3">
                  <i className="bx bx-lg bxl-twitter text-primary"></i>
                </div>
                <div className="flex flex-row items-center justify-center bg-white rounded-full p-3">
                  <i className="bx bx-lg bxl-tiktok text-primary"></i>
                </div>
                <div className="flex flex-row items-center justify-center bg-white rounded-full p-3">
                  <i className="bx bx-lg bxl-gmail text-primary"></i>
                </div>
              </div>
              <p className="mt-24">
                Copyright Rumah Cerita &copy; 2024 | All Right Reserved
              </p>
            </div>
          </div>
        </section>
        {/* end footer */}
      </div>
    </>
  )
}

export default App
