import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onStartWrapped, hasCompletedWrapped = false }) => {
  return (
    <div className="landing-page">
      {/* Left Sidebar Navigation */}
      <aside className="left-sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img src="/Tiny+Health+-+Dark+(full).webp" alt="Tiny Health" className="logo-image" />
          </div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <span className="nav-icon">💡</span>
            <span className="nav-text">Results</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">☑️</span>
            <span className="nav-text">Action plan</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📄</span>
            <span className="nav-text">Guides</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">➕</span>
            <span className="nav-text">Kits</span>
          </div>
        </nav>
        <div className="sidebar-footer">
          <div className="account">
            <span className="account-icon">👤</span>
            <span className="account-text">Account</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Results Header */}
          <div className="results-header">
            <h1 className="results-title">Madeline's results</h1>
            <div className="results-meta">
              <select className="family-select">
                <option>Family member: Change</option>
              </select>
              <span className="test-date">Gut test 08/29/21</span>
              <span className="age">41yrs old</span>
              <span className="kit-id">Kit JCQ926</span>
              <button className="print-btn">Print</button>
            </div>
            <div className="results-status">
              <span className="status-badge">Results ready</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="tabs">
            <button className="tab active">Summary</button>
            <button className="tab">Key Insights</button>
            <button className="tab">Microbiome</button>
            <button className="tab">Conditions</button>
            <button className="tab">Microbiome Seeding</button>
          </div>

          {/* Content Cards */}
          <div className="content-cards">
            {/* Expert Review Card */}
            <div className="content-card expert-review">
              <div className="card-header">
                <h3 className="card-title">Expert review</h3>
                <button className="expand-btn">↗️</button>
              </div>
              <div className="expert-content">
                <div className="expert-profile">
                  <div className="expert-avatar">👨‍⚕️</div>
                  <div className="expert-info">
                    <h4>Taylor, the Medical Director at Tiny Health</h4>
                    <p>Welcome to your results! Here's what we found...</p>
                  </div>
                </div>
                <div className="main-finding">
                  <h5>Main finding</h5>
                  <p>Your microbiome shows excellent diversity with some areas for improvement...</p>
                </div>
              </div>
            </div>

            {/* Key Insights Card */}
            <div className="content-card key-insights">
              <div className="card-header">
                <h3 className="card-title">Key insights</h3>
                <button className="expand-btn">→</button>
              </div>
              <div className="insights-content">
                <p className="insights-description">Here's how your key metrics and microbes are looking</p>
                <div className="insights-circles">
                  <div className="insight-circle needs-support">
                    <div className="circle-number">3</div>
                    <div className="circle-label">Needs support</div>
                  </div>
                  <div className="insight-circle okay">
                    <div className="circle-number">2</div>
                    <div className="circle-label">Okay results</div>
                  </div>
                  <div className="insight-circle great">
                    <div className="circle-number">8</div>
                    <div className="circle-label">Great results</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Microbiome Card */}
            <div className="content-card microbiome">
              <div className="card-header">
                <h3 className="card-title">Microbiome</h3>
                <button className="expand-btn">→</button>
              </div>
              <div className="microbiome-content">
                <div className="microbiome-header">
                  <span className="sample-label">This sample</span>
                  <span className="beneficial-percentage">68% beneficial</span>
                </div>
                <div className="microbiome-bar">
                  <div className="bar-segment beneficial" style={{width: '68%'}}></div>
                  <div className="bar-segment variable" style={{width: '15%'}}></div>
                  <div className="bar-segment unfriendly" style={{width: '1%'}}></div>
                  <div className="bar-segment unknown" style={{width: '16%'}}></div>
                </div>
                <div className="bar-labels">
                  <span className="bar-label beneficial">Beneficial</span>
                  <span className="bar-label variable">Variable</span>
                  <span className="bar-label unfriendly">Unfriendly</span>
                  <span className="bar-label unknown">Unknown</span>
                </div>
              </div>
            </div>

            {/* What You Told Us Card */}
            <div className="content-card survey">
              <div className="card-header">
                <h3 className="card-title">What you told us</h3>
                <button className="expand-btn">↗️</button>
              </div>
              <div className="survey-content">
                <div className="survey-item">
                  <span className="checkmark">✓</span>
                  <span className="survey-text">Have you taken antibiotics in the last two months? No</span>
                </div>
                <div className="survey-item">
                  <span className="checkmark">✓</span>
                  <span className="survey-text">Do you follow any special or restricted diet? no</span>
                </div>
                <div className="survey-item">
                  <span className="checkmark">✓</span>
                  <span className="survey-text">How often do you exercise? 3-4 times per week</span>
                </div>
              </div>
            </div>

            {/* Book a Consult Card */}
            <div className="content-card consult">
              <div className="consult-content">
                <h3 className="consult-title">Book a consult</h3>
                <p className="consult-description">Get personalized guidance from our team of experts</p>
                <div className="expert-avatars">
                  <div className="expert-avatar-small">👩‍⚕️</div>
                  <div className="expert-avatar-small">👨‍⚕️</div>
                  <div className="expert-avatar-small">👩‍🔬</div>
                  <div className="expert-avatar-small">👨‍🔬</div>
                </div>
                <button className="book-btn">Book now ></button>
              </div>
            </div>
          </div>

          {/* Wrapped Notification */}
          <div className="wrapped-notification">
            <div className="notification-card">
              <div className="notification-icon">🎁</div>
              <div className="notification-content">
                <h2>Relive your gut health journey</h2>
                <p>Watch your personalized microbiome story again and share your insights with others.</p>
                <button className="btn btn-primary wrapped-cta" onClick={onStartWrapped}>
                  Rewatch My Gut Health Wrapped
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Action Plan Sidebar */}
      <aside className="action-plan-sidebar">
          <div className="action-plan">
            <h2 className="action-plan-title">Action Plan</h2>
            
            <div className="priority-section">
              <h3 className="priority-title">High priority based on your results</h3>
              <div className="recommendations">
                <div className="recommendation">
                  <div className="rec-icon">💊</div>
                  <div className="rec-content">
                    <h4>Supplements</h4>
                    <p>Use an Akkermansia probiotic</p>
                    <span className="rec-indicator">↑ Increase Akkermansia</span>
                  </div>
                  <div className="rec-arrow">→</div>
                </div>
                <div className="recommendation">
                  <div className="rec-icon">💊</div>
                  <div className="rec-content">
                    <h4>Supplements</h4>
                    <p>Use a Bifidobacterium probiotic</p>
                    <span className="rec-indicator">↑ Increase Bifidobacterium</span>
                  </div>
                  <div className="rec-arrow">→</div>
                </div>
                <div className="recommendation">
                  <div className="rec-icon">💊</div>
                  <div className="rec-content">
                    <h4>Supplements</h4>
                    <p>Supplement with Pectin</p>
                    <span className="rec-indicator">↑ Increase acetate potential</span>
                  </div>
                  <div className="rec-arrow">→</div>
                </div>
                <div className="recommendation">
                  <div className="rec-icon">🍎</div>
                  <div className="rec-content">
                    <h4>Diet</h4>
                    <p>Eat foods that contain inulin</p>
                    <span className="rec-indicator">↑ Increase acetate potential</span>
                  </div>
                  <div className="rec-arrow">→</div>
                </div>
                <div className="recommendation">
                  <div className="rec-icon">👤</div>
                  <div className="rec-content">
                    <h4>Lifestyle</h4>
                    <p>Spend time with animals</p>
                    <span className="rec-indicator">↑ Increase Akkermansia</span>
                  </div>
                  <div className="rec-arrow">→</div>
                </div>
              </div>
            </div>

            <div className="other-recommendations">
              <h3>Other recommendations (10)</h3>
              <p>See more recommendations to improve your gut health on your full action plan.</p>
              <button className="btn btn-secondary">Go to action plan ></button>
            </div>
          </div>
        </aside>
    </div>
  );
};

export default LandingPage;
