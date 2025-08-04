
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="full-screen-wrapper">
      <div className="content-box">
        <header className="text-center mb-4">
          <h1 className="display-4">AI Content Detector</h1>
          <p className="lead">Protecting the authenticity of creative work.</p>
        </header>

        <div className="card shadow-lg">
          <div className="card-body p-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="text-tab" data-bs-toggle="tab" data-bs-target="#text-tab-pane" type="button" role="tab" aria-controls="text-tab-pane" aria-selected="true">
                  Detect Text
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="image-tab" data-bs-toggle="tab" data-bs-target="#image-tab-pane" type="button" role="tab" aria-controls="image-tab-pane" aria-selected="false">
                  Detect Image
                </button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="text-tab-pane" role="tabpanel">
                <textarea className="form-control" rows="6" placeholder="Paste your text here..."></textarea>
                <div className="d-flex justify-content-end mt-3">
                  <button className="btn btn-primary btn-lg">Analyze Text</button>
                </div>
              </div>

              <div className="tab-pane fade" id="image-tab-pane" role="tabpanel">
                <label htmlFor="image-input" style={{ cursor: 'pointer' }}>
                  <div className="text-center p-5 border rounded-3 bg-light" style={{ borderStyle: 'dashed' }}>
                    <svg width="48" height="48" fill="currentColor" className="text-muted mb-3" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    </svg>
                    <p className="text-muted">Drag & drop your image here, or click to select a file</p>
                  </div>
                </label>
                <input type="file" id="image-input" className="d-none" accept="image/*" />
                <div className="d-flex justify-content-end mt-3">
                  <button className="btn btn-primary btn-lg">Analyze Image</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-4 text-muted">
          <small>&copy; 2025 AI Content Detector. All rights reserved.</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
