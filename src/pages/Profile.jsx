import { Link } from 'react-router-dom'

function Profile() {
  return (
    <main className="container py-5 text-start">
      <div className="mb-4">
        <p className="text-primary fw-semibold mb-2">Akun Anda</p>
        <h1 className="h2">Profil</h1>
        <p className="text-muted">Kelola informasi akun Griya MDP Anda.</p>
      </div>

      <section className="card border-0 shadow-sm" aria-labelledby="profile-status">
        <div className="card-body p-4 p-md-5">
          <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
              style={{ width: 64, height: 64, fontSize: 24 }}
              aria-hidden="true"
            >
              ?
            </div>
            <div>
              <h2 className="h5 mb-1" id="profile-status">Anda belum masuk</h2>
              <p className="text-muted mb-0">
                Masuk ke akun untuk melihat dan mengelola informasi profil.
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="d-flex flex-wrap gap-2">
            <Link className="btn btn-primary" to="/login">Masuk</Link>
            <Link className="btn btn-outline-primary" to="/register">Buat Akun</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile
