import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Form kontak belum terhubung ke server. Pesan Anda belum dikirim.')
  }

  return (
    <main className="container py-5 text-start">
      <div className="mb-4 text-center">
        <p className="text-primary fw-semibold mb-2">Kami siap membantu</p>
        <h1 className="h2">Hubungi Kami</h1>
        <p className="text-muted">
          Ada pertanyaan tentang properti? Sampaikan kepada tim Griya MDP.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        <section className="col-md-5 col-lg-4" aria-label="Informasi kontak">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 mb-4">Informasi Kontak</h2>
              <div className="mb-4">
                <h3 className="h6">Alamat</h3>
                <p className="text-muted mb-0">Palembang, Sumatera Selatan</p>
              </div>
              <div className="mb-4">
                <h3 className="h6">Email</h3>
                <a href="mailto:halo@griyampd.com">halo@griyampd.com</a>
              </div>
              <div>
                <h3 className="h6">Jam Operasional</h3>
                <p className="text-muted mb-0">Senin - Jumat, 09.00 - 17.00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="col-md-7 col-lg-6" aria-label="Formulir kontak">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 mb-4">Kirim Pesan</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-name">Nama</label>
                  <input
                    className="form-control"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    className="form-control"
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-subject">Subjek</label>
                  <input className="form-control" id="contact-subject" name="subject" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-message">Pesan</label>
                  <textarea
                    className="form-control"
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                  />
                </div>
                <button className="btn btn-primary" type="submit">Kirim Pesan</button>
                {message && <p className="alert alert-info mt-3 mb-0" role="status">{message}</p>}
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contact
