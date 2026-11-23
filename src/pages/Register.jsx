import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (formData.get('password') !== formData.get('confirmPassword')) {
      setMessage('Konfirmasi kata sandi tidak sama.')
      return
    }

    setMessage('Pendaftaran belum dapat diproses karena layanan akun belum tersedia.')
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm text-start">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <p className="text-primary fw-semibold mb-2">Mulai perjalanan Anda</p>
                <h1 className="h2">Buat Akun</h1>
                <p className="text-muted mb-0">Daftar untuk terhubung dengan Griya MDP.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="register-name">Nama lengkap</label>
                  <input
                    className="form-control"
                    id="register-name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="register-email">Email</label>
                  <input
                    className="form-control"
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="register-phone">Nomor telepon</label>
                  <input
                    className="form-control"
                    id="register-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="register-password">Kata sandi</label>
                  <input
                    className="form-control"
                    id="register-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    minLength="8"
                    required
                  />
                  <div className="form-text">Minimal 8 karakter.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="register-confirm-password">
                    Konfirmasi kata sandi
                  </label>
                  <input
                    className="form-control"
                    id="register-confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    minLength="8"
                    required
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">Daftar</button>
                {message && <p className="alert alert-info mt-3 mb-0" role="status">{message}</p>}
              </form>

              <p className="text-center text-muted mt-4 mb-0">
                Sudah punya akun? <Link to="/login">Masuk</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register
