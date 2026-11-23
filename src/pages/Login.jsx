import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Login belum dapat diproses karena sistem autentikasi belum tersedia.')
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow-sm text-start">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <p className="text-primary fw-semibold mb-2">Selamat datang kembali</p>
                <h1 className="h2">Masuk ke Griya MDP</h1>
                <p className="text-muted mb-0">Masuk untuk mengelola akun Anda.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="login-email">Email</label>
                  <input
                    className="form-control"
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="login-password">Kata sandi</label>
                  <input
                    className="form-control"
                    id="login-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">Masuk</button>
                {message && <p className="alert alert-info mt-3 mb-0" role="status">{message}</p>}
              </form>

              <p className="text-center text-muted mt-4 mb-0">
                Belum punya akun? <Link to="/register">Daftar sekarang</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
